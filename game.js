// ===== ゲーム進行・UI制御ロジック =====
class NovelEngine {
  constructor(scenario) {
    this.scenario = scenario;
    this.currentSceneId = scenario.startScene;
    this.stepIndex = 0;
    this.backlog = [];
    this.isTyping = false;
    this.typeTimer = null;
    this.currentText = '';
    this.autoPlay = false;
    this.autoTimer = null;

    // DOM要素
    this.container = document.getElementById('game-container');
    this.bgImage = document.getElementById('bg-image');
    this.spriteTakase = document.getElementById('sprite-takase');
    this.spriteYui = document.getElementById('sprite-yui');
    this.speakerName = document.getElementById('speaker-name');
    this.speakerBadge = document.getElementById('speaker-badge');
    this.dialogueText = document.getElementById('dialogue-text');
    this.dialogueBox = document.getElementById('dialogue-box');
    this.nextCursor = document.getElementById('next-cursor');
    this.bpmValue = document.getElementById('bpm-value');
    this.pulseLayer = document.getElementById('heartbeat-pulse');
    this.flashLayer = document.getElementById('screen-flash');
    this.choicesOverlay = document.getElementById('choices-overlay');
    this.choicesList = document.getElementById('choices-list');
    this.logOverlay = document.getElementById('log-overlay');
    this.logList = document.getElementById('log-list');
    this.titleScreen = document.getElementById('title-screen');
    this.galleryOverlay = document.getElementById('gallery-overlay');
    this.secretOverlay = document.getElementById('secret-overlay');

    this.bindEvents();
  }

  bindEvents() {
    // クリックでメッセージ送り
    this.dialogueBox.addEventListener('click', () => this.handleAdvance());

    // タイトルボタン
    document.getElementById('btn-start').addEventListener('click', () => {
      window.sound.init();
      window.sound.toggleSound();
      this.titleScreen.classList.add('hidden');
      this.startScene(this.scenario.startScene);
    });

    document.getElementById('btn-gallery').addEventListener('click', () => {
      this.galleryOverlay.classList.remove('hidden');
    });

    document.getElementById('btn-close-gallery').addEventListener('click', () => {
      this.galleryOverlay.classList.add('hidden');
    });

    // コントロールバー
    const btnSound = document.getElementById('btn-sound');
    btnSound.addEventListener('click', () => {
      const on = window.sound.toggleSound();
      btnSound.textContent = on ? '🔊 BGM' : '🔇 BGM';
      btnSound.classList.toggle('active', on);
    });

    const btnAuto = document.getElementById('btn-auto');
    btnAuto.addEventListener('click', () => {
      this.autoPlay = !this.autoPlay;
      btnAuto.classList.toggle('active', this.autoPlay);
      if (this.autoPlay && !this.isTyping) {
        this.handleAdvance();
      }
    });

    const btnLog = document.getElementById('btn-log');
    btnLog.addEventListener('click', () => this.showLog());
    document.getElementById('btn-close-log').addEventListener('click', () => {
      this.logOverlay.classList.add('hidden');
    });

    // 裏カルテボタン（ヘッダーに追加＆BPMメータークリックでも開く）
    const btnSecret = document.getElementById('btn-secret');
    if (btnSecret) {
      btnSecret.addEventListener('click', () => this.showSecretNote());
    }
    document.getElementById('heart-rate-meter').addEventListener('click', () => this.showSecretNote());
    const btnCloseSecret = document.getElementById('btn-close-secret');
    if (btnCloseSecret) {
      btnCloseSecret.addEventListener('click', () => {
        this.secretOverlay.classList.add('hidden');
      });
    }

    // 音響エンジンからの心拍トリガー受け取り
    window.onHeartbeatTrigger = () => {
      this.pulseLayer.classList.remove('beating');
      void this.pulseLayer.offsetWidth; // リフロー
      this.pulseLayer.classList.add('beating');
    };
  }

  startScene(sceneId) {
    this.currentSceneId = sceneId;
    this.stepIndex = 0;
    this.renderStep();
  }

  getCurrentStep() {
    const scene = this.scenario.scenes[this.currentSceneId];
    if (!scene || this.stepIndex >= scene.length) return null;
    return scene[this.stepIndex];
  }

  handleAdvance() {
    window.sound.playTap();

    // 文字送り中なら全文即時表示
    if (this.isTyping) {
      clearInterval(this.typeTimer);
      this.dialogueText.textContent = this.currentText;
      this.isTyping = false;
      this.nextCursor.style.opacity = '1';
      return;
    }

    const step = this.getCurrentStep();
    if (!step) return;

    // 選択肢表示中ならタップで進めない
    if (step.choices && step.choices.length > 0) return;

    // 終了フラグならタイトルへ
    if (step.isEnd) {
      this.titleScreen.classList.remove('hidden');
      return;
    }

    // 次シーン指定があれば遷移
    if (step.nextScene) {
      this.startScene(step.nextScene);
      return;
    }

    // 次のステップへ
    this.stepIndex++;
    const next = this.getCurrentStep();
    if (next) {
      this.renderStep();
    }
  }

  renderStep() {
    const step = this.getCurrentStep();
    if (!step) return;

    // 背景更新
    if (step.bg) {
      this.bgImage.style.backgroundImage = `url('${step.bg}')`;
    }

    // 立ち絵更新
    this.updateSprites(step.chara);

    // 心拍数（BPM）反映
    if (step.bpm) {
      this.bpmValue.textContent = step.bpm;
      window.sound.setBpm(step.bpm);
    }

    // 画面エフェクト
    if (step.effect === 'pulse') {
      this.pulseLayer.classList.add('beating');
      setTimeout(() => this.pulseLayer.classList.remove('beating'), 600);
    } else if (step.effect === 'flash') {
      this.flashLayer.style.opacity = '0.8';
      setTimeout(() => this.flashLayer.style.opacity = '0', 250);
    }

    // 話者バッジ
    this.speakerBadge.className = '';
    if (!step.speaker) {
      this.speakerBadge.classList.add('monologue');
      this.speakerName.textContent = '';
    } else {
      this.speakerName.textContent = step.speaker;
      if (step.speaker === '由衣') this.speakerBadge.classList.add('yui');
      else if (step.speaker === '高瀬') this.speakerBadge.classList.add('takase');
    }

    // テキストタイプライター表示
    this.typewrite(step.text, () => {
      // 選択肢がある場合は表示
      if (step.choices && step.choices.length > 0) {
        this.showChoices(step.choices);
      } else if (this.autoPlay) {
        const delay = Math.max(1200, step.text.length * 60);
        this.autoTimer = setTimeout(() => {
          if (this.autoPlay) this.handleAdvance();
        }, delay);
      }
    });

    // バックログに追加
    this.backlog.push({
      speaker: step.speaker || '（モノローグ）',
      text: step.text
    });
  }

  updateSprites(chara) {
    this.spriteTakase.className = 'sprite';
    this.spriteYui.className = 'sprite';

    if (!chara) return;

    if (chara === 'takase') {
      this.spriteTakase.classList.add('active', 'talking');
    } else if (chara === 'yui') {
      this.spriteYui.classList.add('active', 'talking');
    } else if (chara === 'both') {
      this.spriteTakase.classList.add('active');
      this.spriteYui.classList.add('dimmed');
    }
  }

  typewrite(text, onComplete) {
    this.isTyping = true;
    this.currentText = text;
    this.dialogueText.textContent = '';
    this.nextCursor.style.opacity = '0';
    clearInterval(this.typeTimer);

    let idx = 0;
    this.typeTimer = setInterval(() => {
      idx++;
      this.dialogueText.textContent = text.slice(0, idx);
      if (idx >= text.length) {
        clearInterval(this.typeTimer);
        this.isTyping = false;
        this.nextCursor.style.opacity = '1';
        if (onComplete) onComplete();
      }
    }, 28);
  }

  showChoices(choices) {
    this.choicesList.innerHTML = '';
    choices.forEach((c) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = c.text;
      btn.addEventListener('click', () => {
        window.sound.playTap();
        this.choicesOverlay.classList.add('hidden');
        this.startScene(c.target);
      });
      this.choicesList.appendChild(btn);
    });
    this.choicesOverlay.classList.remove('hidden');
  }

  showLog() {
    this.logList.innerHTML = '';
    this.backlog.forEach((entry) => {
      const item = document.createElement('div');
      item.className = 'log-entry';
      const spk = document.createElement('div');
      spk.className = `log-speaker ${entry.speaker === '由衣' ? 'yui' : entry.speaker === '高瀬' ? 'takase' : 'monologue'}`;
      spk.textContent = entry.speaker;
      const txt = document.createElement('div');
      txt.className = 'log-text';
      txt.textContent = entry.text;
      item.appendChild(spk);
      item.appendChild(txt);
      this.logList.appendChild(item);
    });
    this.logOverlay.classList.remove('hidden');
    this.logList.scrollTop = this.logList.scrollHeight;
  }

  showSecretNote() {
    const note = this.scenario.secretNotes.session1;
    if (!note) return;

    document.getElementById('secret-date').textContent = note.date;
    document.getElementById('secret-official').textContent = note.official;
    document.getElementById('secret-text').textContent = note.secret;
    this.secretOverlay.classList.remove('hidden');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.game = new NovelEngine(window.SCENARIO_DATA);
});
