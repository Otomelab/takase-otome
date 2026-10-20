// ===== ゲーム進行エンジン (game.js) =====
class NovelGame {
  constructor() {
    this.currentSceneKey = null;
    this.currentIndex = 0;
    this.currentScene = [];
    this.isTyping = false;
    this.typeTimer = null;
    this.isAuto = false;
    this.autoTimer = null;
    this.logs = [];

    // DOM要素
    this.elBg = document.getElementById('bg-image');
    this.elPulse = document.getElementById('heartbeat-pulse');
    this.elFlash = document.getElementById('screen-flash');
    this.elBpm = document.getElementById('bpm-value');
    this.elSpeakerBadge = document.getElementById('speaker-badge');
    this.elSpeakerName = document.getElementById('speaker-name');
    this.elDialogueText = document.getElementById('dialogue-text');
    this.elDialogueBox = document.getElementById('dialogue-box');
    this.elSpriteTakase = document.getElementById('sprite-takase');
    this.elSpriteYui = document.getElementById('sprite-yui');
    this.elChoicesOverlay = document.getElementById('choices-overlay');
    this.elChoicesList = document.getElementById('choices-list');
    this.elLogOverlay = document.getElementById('log-overlay');
    this.elLogList = document.getElementById('log-list');
    this.elTitleScreen = document.getElementById('title-screen');
    this.elGalleryOverlay = document.getElementById('gallery-overlay');
    this.btnSound = document.getElementById('btn-sound');
    this.btnAuto = document.getElementById('btn-auto');

    this.bindEvents();
  }

  bindEvents() {
    // スタートボタン
    document.getElementById('btn-start').addEventListener('click', () => {
      window.sound.init();
      window.sound.toggleSound();
      this.btnSound.classList.add('active');
      this.btnSound.textContent = '🔊 BGM ON';
      this.elTitleScreen.style.opacity = '0';
      setTimeout(() => {
        this.elTitleScreen.classList.add('hidden');
        this.startScene(window.SCENARIO_DATA.startScene);
      }, 800);
    });

    // 画面タップでメッセージ送り
    this.elDialogueBox.addEventListener('click', () => {
      window.sound.playTap();
      this.advance();
    });

    // サウンド切替ボタン
    this.btnSound.addEventListener('click', (e) => {
      e.stopPropagation();
      const enabled = window.sound.toggleSound();
      if (enabled) {
        this.btnSound.classList.add('active');
        this.btnSound.textContent = '🔊 BGM ON';
      } else {
        this.btnSound.classList.remove('active');
        this.btnSound.textContent = '🔇 BGM OFF';
      }
    });

    // オートボタン
    this.btnAuto.addEventListener('click', (e) => {
      e.stopPropagation();
      this.isAuto = !this.isAuto;
      this.btnAuto.classList.toggle('active', this.isAuto);
      if (this.isAuto && !this.isTyping) {
        this.advance();
      }
    });

    // バックログ開閉
    document.getElementById('btn-log').addEventListener('click', (e) => {
      e.stopPropagation();
      this.renderLogs();
      this.elLogOverlay.classList.remove('hidden');
    });
    document.getElementById('btn-close-log').addEventListener('click', (e) => {
      e.stopPropagation();
      this.elLogOverlay.classList.add('hidden');
    });

    // スチルギャラリー開閉
    document.getElementById('btn-gallery').addEventListener('click', () => {
      this.elGalleryOverlay.classList.remove('hidden');
    });
    document.getElementById('btn-close-gallery').addEventListener('click', () => {
      this.elGalleryOverlay.classList.add('hidden');
    });

    // 心音連動パルス
    window.onHeartbeatTrigger = () => {
      this.elPulse.classList.remove('beating');
      void this.elPulse.offsetWidth;
      this.elPulse.classList.add('beating');
    };
  }

  startScene(sceneKey) {
    this.currentSceneKey = sceneKey;
    this.currentScene = window.SCENARIO_DATA.scenes[sceneKey] || [];
    this.currentIndex = 0;
    this.showStep();
  }

  showStep() {
    if (this.currentIndex >= this.currentScene.length) return;
    const step = this.currentScene[this.currentIndex];

    // 背景更新
    if (step.bg) {
      this.elBg.style.backgroundImage = `url('${step.bg}')`;
      this.elBg.classList.add('zooming');
    }

    // 立ち絵表示制御
    this.updateSprites(step.chara, step.speaker);

    // BPM更新 & 音響連動
    if (step.bpm) {
      this.elBpm.textContent = step.bpm;
      window.sound.setBpm(step.bpm);
    }

    // 演出エフェクト
    if (step.effect === 'pulse') {
      this.elPulse.classList.add('beating');
      setTimeout(() => this.elPulse.classList.remove('beating'), 600);
    } else if (step.effect === 'flash') {
      this.elFlash.style.opacity = '0.8';
      setTimeout(() => this.elFlash.style.opacity = '0', 300);
    }

    // 話者名
    this.elSpeakerBadge.className = '';
    if (!step.speaker) {
      this.elSpeakerBadge.classList.add('monologue');
      this.elSpeakerName.textContent = '';
    } else {
      this.elSpeakerName.textContent = step.speaker;
      if (step.speaker === '由衣') {
        this.elSpeakerBadge.classList.add('yui');
      }
    }

    // ログ保存
    this.logs.push({
      speaker: step.speaker,
      text: step.text
    });

    // タイプライター表示
    this.typeText(step.text, () => {
      // 終了判定
      if (step.isEnd) {
        setTimeout(() => {
          this.elTitleScreen.classList.remove('hidden');
          this.elTitleScreen.style.opacity = '1';
        }, 1500);
        return;
      }

      // 選択肢がある場合
      if (step.choices && step.choices.length > 0) {
        this.showChoices(step.choices);
        return;
      }

      // シーン直接遷移
      if (step.nextScene) {
        this.nextSceneKey = step.nextScene;
      } else {
        this.nextSceneKey = null;
      }

      // オート進行
      if (this.isAuto) {
        this.autoTimer = setTimeout(() => this.advance(), 2200);
      }
    });
  }

  typeText(text, onComplete) {
    this.isTyping = true;
    this.elDialogueText.textContent = '';
    let idx = 0;
    if (this.typeTimer) clearInterval(this.typeTimer);

    this.typeTimer = setInterval(() => {
      if (idx < text.length) {
        this.elDialogueText.textContent += text[idx];
        idx++;
      } else {
        clearInterval(this.typeTimer);
        this.isTyping = false;
        if (onComplete) onComplete();
      }
    }, 28);
  }

  advance() {
    if (this.isTyping) {
      // タイピングスキップ
      clearInterval(this.typeTimer);
      const step = this.currentScene[this.currentIndex];
      this.elDialogueText.textContent = step.text;
      this.isTyping = false;
      return;
    }

    if (this.elChoicesOverlay.classList.contains('hidden') === false) {
      return; // 選択肢表示中はタップ進行させない
    }

    if (this.nextSceneKey) {
      const target = this.nextSceneKey;
      this.nextSceneKey = null;
      this.startScene(target);
      return;
    }

    this.currentIndex++;
    if (this.currentIndex < this.currentScene.length) {
      this.showStep();
    }
  }

  updateSprites(chara, speaker) {
    this.elSpriteTakase.className = 'sprite';
    this.elSpriteYui.className = 'sprite';

    if (chara === 'takase') {
      this.elSpriteTakase.classList.add('active');
      if (speaker === '高瀬') this.elSpriteTakase.classList.add('talking');
    } else if (chara === 'yui') {
      this.elSpriteYui.classList.add('active');
      if (speaker === '由衣') this.elSpriteYui.classList.add('talking');
    } else if (chara === 'both') {
      this.elSpriteTakase.classList.add('active', 'dimmed');
      this.elSpriteYui.classList.add('active');
      if (speaker === '高瀬') this.elSpriteTakase.classList.remove('dimmed');
    }
  }

  showChoices(choices) {
    this.elChoicesList.innerHTML = '';
    choices.forEach((choice) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = choice.text;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.sound.playTap();
        this.elChoicesOverlay.classList.add('hidden');
        this.startScene(choice.target);
      });
      this.elChoicesList.appendChild(btn);
    });
    this.elChoicesOverlay.classList.remove('hidden');
  }

  renderLogs() {
    this.elLogList.innerHTML = '';
    this.logs.forEach((log) => {
      const entry = document.createElement('div');
      entry.className = 'log-entry';
      const spk = document.createElement('div');
      spk.className = `log-speaker ${log.speaker === '由衣' ? 'yui' : !log.speaker ? 'monologue' : ''}`;
      spk.textContent = log.speaker || '【地の文】';
      const txt = document.createElement('div');
      txt.className = 'log-text';
      txt.textContent = log.text;
      entry.appendChild(spk);
      entry.appendChild(txt);
      this.elLogList.appendChild(entry);
    });
    this.elLogList.scrollTop = this.elLogList.scrollHeight;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.game = new NovelGame();
});
