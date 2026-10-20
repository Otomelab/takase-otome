// ===== ゲーム本体ロジック & 裏カルテ管理 =====

class GameEngine {
  constructor() {
    this.scenario = window.SCENARIO_DATA;
    this.currentSceneId = null;
    this.currentIndex = 0;
    this.isTyping = false;
    this.typeTimer = null;
    this.currentText = '';
    this.backlog = [];
    this.isAuto = false;
    this.autoTimer = null;

    // DOM
    this.container = document.getElementById('game-container');
    this.bgImage = document.getElementById('bg-image');
    this.spriteTakase = document.getElementById('sprite-takase');
    this.spriteYui = document.getElementById('sprite-yui');
    this.dialogueBox = document.getElementById('dialogue-box');
    this.speakerBadge = document.getElementById('speaker-badge');
    this.speakerName = document.getElementById('speaker-name');
    this.dialogueText = document.getElementById('dialogue-text');
    this.bpmValue = document.getElementById('bpm-value');
    this.pulseLayer = document.getElementById('heartbeat-pulse');
    this.flashLayer = document.getElementById('screen-flash');
    this.choicesOverlay = document.getElementById('choices-overlay');
    this.choicesList = document.getElementById('choices-list');
    this.logOverlay = document.getElementById('log-overlay');
    this.logList = document.getElementById('log-list');
    this.titleScreen = document.getElementById('title-screen');
    this.galleryOverlay = document.getElementById('gallery-overlay');
    this.secretKarteModal = document.getElementById('secret-karte-modal');

    this.initEvents();
  }

  initEvents() {
    // タイトルボタン
    document.getElementById('btn-start').addEventListener('click', () => {
      window.sound.init();
      this.startNewGame();
    });

    document.getElementById('btn-gallery').addEventListener('click', () => {
      this.galleryOverlay.classList.remove('hidden');
    });

    document.getElementById('btn-close-gallery').addEventListener('click', () => {
      this.galleryOverlay.classList.add('hidden');
    });

    // 裏カルテ（タイトル画面の「裏カルテ」ボタン or ゲーム中BPMタップ）
    const btnKarte = document.getElementById('btn-secret-karte');
    if (btnKarte) {
      btnKarte.addEventListener('click', () => this.openSecretKarte());
    }
    document.getElementById('heart-rate-meter').addEventListener('click', () => {
      this.openSecretKarte();
    });
    document.getElementById('btn-close-karte').addEventListener('click', () => {
      this.secretKarteModal.classList.add('hidden');
    });

    // 操作バー
    const btnSound = document.getElementById('btn-sound');
    btnSound.addEventListener('click', () => {
      const enabled = window.sound.toggleSound();
      btnSound.classList.toggle('active', enabled);
      btnSound.innerText = enabled ? '🔊 BGM' : '🔇 BGM';
    });

    const btnAuto = document.getElementById('btn-auto');
    btnAuto.addEventListener('click', () => {
      this.isAuto = !this.isAuto;
      btnAuto.classList.toggle('active', this.isAuto);
      if (this.isAuto && !this.isTyping) {
        this.scheduleAutoNext();
      }
    });

    document.getElementById('btn-log').addEventListener('click', () => {
      this.openLog();
    });
    document.getElementById('btn-close-log').addEventListener('click', () => {
      this.logOverlay.classList.add('hidden');
    });

    // メッセージ枠タップで次へ
    this.dialogueBox.addEventListener('click', () => {
      window.sound.playTap();
      this.onAdvance();
    });

    // 心拍同期パルスエフェクト
    window.onHeartbeatTrigger = () => {
      this.triggerPulse();
    };
  }

  openSecretKarte() {
    this.secretKarteModal.classList.remove('hidden');
  }

  triggerPulse() {
    this.pulseLayer.classList.remove('beating');
    void this.pulseLayer.offsetWidth;
    this.pulseLayer.classList.add('beating');
  }

  triggerFlash() {
    this.flashLayer.style.opacity = '0.7';
    setTimeout(() => {
      this.flashLayer.style.opacity = '0';
    }, 250);
  }

  startNewGame() {
    this.titleScreen.style.opacity = '0';
    setTimeout(() => {
      this.titleScreen.classList.add('hidden');
    }, 800);

    this.backlog = [];
    this.loadScene(this.scenario.startScene, 0);
  }

  loadScene(sceneId, index = 0) {
    this.currentSceneId = sceneId;
    this.currentIndex = index;
    const scene = this.scenario.scenes[sceneId];
    if (!scene || !scene[index]) return;

    this.renderStep(scene[index]);
  }

  renderStep(step) {
    // 背景更新
    if (step.bg) {
      this.bgImage.style.backgroundImage = `url('${step.bg}')`;
      this.bgImage.classList.add('zooming');
    }

    // BPM更新
    if (step.bpm) {
      this.bpmValue.innerText = step.bpm;
      window.sound.setBpm(step.bpm);
    }

    // 演出
    if (step.effect === 'pulse') {
      this.triggerPulse();
    } else if (step.effect === 'flash') {
      this.triggerFlash();
    }

    // 立ち絵
    this.updateSprites(step.chara, step.speaker);

    // 話者バッジ
    this.speakerBadge.className = '';
    if (!step.speaker) {
      this.speakerBadge.classList.add('monologue');
      this.speakerName.innerText = '';
    } else {
      this.speakerName.innerText = step.speaker;
      if (step.speaker === '由衣') {
        this.speakerBadge.classList.add('yui');
      }
    }

    // バックログ記録
    this.backlog.push({
      speaker: step.speaker || '地の文',
      text: step.text
    });

    // タイピング表示
    this.typewrite(step.text, () => {
      if (step.choices && step.choices.length > 0) {
        this.showChoices(step.choices);
      } else if (this.isAuto) {
        this.scheduleAutoNext();
      }
    });
  }

  updateSprites(chara, speaker) {
    this.spriteTakase.className = 'sprite';
    this.spriteYui.className = 'sprite';

    if (chara === 'takase') {
      this.spriteTakase.classList.add('active');
      if (speaker === '高瀬') this.spriteTakase.classList.add('talking');
    } else if (chara === 'yui') {
      this.spriteYui.classList.add('active');
      if (speaker === '由衣') this.spriteYui.classList.add('talking');
    } else if (chara === 'both') {
      this.spriteTakase.classList.add('active');
      this.spriteYui.classList.add('active');
    }
  }

  typewrite(text, onComplete) {
    this.isTyping = true;
    this.currentText = text;
    this.dialogueText.innerText = '';
    let i = 0;

    if (this.typeTimer) clearInterval(this.typeTimer);

    this.typeTimer = setInterval(() => {
      this.dialogueText.innerText += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(this.typeTimer);
        this.typeTimer = null;
        this.isTyping = false;
        if (onComplete) onComplete();
      }
    }, 28);
  }

  onAdvance() {
    const currentScene = this.scenario.scenes[this.currentSceneId];
    const step = currentScene[this.currentIndex];

    // 選択肢表示中は何もしない
    if (step.choices && step.choices.length > 0 && !this.choicesOverlay.classList.contains('hidden')) {
      return;
    }

    // タイプ中なら全文一括表示
    if (this.isTyping) {
      clearInterval(this.typeTimer);
      this.typeTimer = null;
      this.dialogueText.innerText = this.currentText;
      this.isTyping = false;
      if (step.choices && step.choices.length > 0) {
        this.showChoices(step.choices);
      } else if (this.isAuto) {
        this.scheduleAutoNext();
      }
      return;
    }

    // エンディング時
    if (step.isEnd) {
      this.titleScreen.classList.remove('hidden');
      this.titleScreen.style.opacity = '1';
      return;
    }

    // 次のシーン遷移
    if (step.nextScene) {
      this.loadScene(step.nextScene, 0);
      return;
    }

    // 次のステップ
    const nextIdx = this.currentIndex + 1;
    if (nextIdx < currentScene.length) {
      this.currentIndex = nextIdx;
      this.renderStep(currentScene[nextIdx]);
    }
  }

  showChoices(choices) {
    this.choicesList.innerHTML = '';
    choices.forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerText = ch.text;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.sound.playTap();
        this.choicesOverlay.classList.add('hidden');
        this.loadScene(ch.target, 0);
      });
      this.choicesList.appendChild(btn);
    });
    this.choicesOverlay.classList.remove('hidden');
  }

  scheduleAutoNext() {
    if (this.autoTimer) clearTimeout(this.autoTimer);
    this.autoTimer = setTimeout(() => {
      if (this.isAuto) {
        this.onAdvance();
      }
    }, 2400);
  }

  openLog() {
    this.logList.innerHTML = '';
    this.backlog.forEach(item => {
      const div = document.createElement('div');
      div.className = 'log-entry';
      div.innerHTML = `<div class="log-speaker ${item.speaker === '由衣' ? 'yui' : ''}">${item.speaker}</div><div class="log-text">${item.text}</div>`;
      this.logList.appendChild(div);
    });
    this.logOverlay.classList.remove('hidden');
    this.logList.scrollTop = this.logList.scrollHeight;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.game = new GameEngine();
});
