// ===== ゲーム本体進行スクリプト =====
class NovelGame {
  constructor() {
    this.currentSceneId = null;
    this.currentSceneIndex = 0;
    this.isTyping = false;
    this.typeInterval = null;
    this.autoPlay = false;
    this.autoPlayTimer = null;
    this.backlog = [];
    this.currentBpm = 80;

    // DOM要素
    this.elBgImage = document.getElementById('bg-image');
    this.elSpeakerBadge = document.getElementById('speaker-badge');
    this.elSpeakerName = document.getElementById('speaker-name');
    this.elDialogueText = document.getElementById('dialogue-text');
    this.elDialogueBox = document.getElementById('dialogue-box');
    this.elNextCursor = document.getElementById('next-cursor');
    this.elChoicesOverlay = document.getElementById('choices-overlay');
    this.elChoicesList = document.getElementById('choices-list');
    this.elLogOverlay = document.getElementById('log-overlay');
    this.elLogList = document.getElementById('log-list');
    this.elTitleScreen = document.getElementById('title-screen');
    this.elGalleryOverlay = document.getElementById('gallery-overlay');
    this.elSecretOverlay = document.getElementById('secret-overlay');
    this.elHeartPulse = document.getElementById('heartbeat-pulse');
    this.elScreenFlash = document.getElementById('screen-flash');
    this.elBpmValue = document.getElementById('bpm-value');
    this.elSpriteTakase = document.getElementById('sprite-takase');
    this.elSpriteYui = document.getElementById('sprite-yui');
    this.btnSound = document.getElementById('btn-sound');
    this.btnAuto = document.getElementById('btn-auto');
    this.btnLog = document.getElementById('btn-log');
    this.btnSecret = document.getElementById('btn-secret');

    this.initEventListeners();
  }

  initEventListeners() {
    // スタートボタン
    document.getElementById('btn-start').addEventListener('click', () => {
      window.sound.init();
      this.elTitleScreen.style.opacity = '0';
      setTimeout(() => {
        this.elTitleScreen.classList.add('hidden');
        this.startScene(window.SCENARIO_DATA.startScene);
      }, 800);
    });

    // 画面タップでメッセージ送り
    this.elDialogueBox.addEventListener('click', () => this.handleAdvance());

    // サウンド切り替え
    this.btnSound.addEventListener('click', (e) => {
      e.stopPropagation();
      const isEnabled = window.sound.toggleSound();
      this.btnSound.textContent = isEnabled ? '🔊 BGM' : '🔇 BGM';
      this.btnSound.classList.toggle('active', isEnabled);
    });

    // オートモード切り替え
    this.btnAuto.addEventListener('click', (e) => {
      e.stopPropagation();
      this.autoPlay = !this.autoPlay;
      this.btnAuto.classList.toggle('active', this.autoPlay);
      if (this.autoPlay && !this.isTyping) {
        this.handleAdvance();
      }
    });

    // ログ表示
    this.btnLog.addEventListener('click', (e) => {
      e.stopPropagation();
      this.showBacklog();
    });
    document.getElementById('btn-close-log').addEventListener('click', () => {
      this.elLogOverlay.classList.add('hidden');
    });

    // ギャラリー表示
    document.getElementById('btn-gallery').addEventListener('click', () => {
      this.elGalleryOverlay.classList.remove('hidden');
    });
    document.getElementById('btn-close-gallery').addEventListener('click', () => {
      this.elGalleryOverlay.classList.add('hidden');
    });

    // 裏カルテ表示
    this.btnSecret.addEventListener('click', (e) => {
      e.stopPropagation();
      this.showSecretKarte();
    });
    document.getElementById('btn-close-secret').addEventListener('click', () => {
      this.elSecretOverlay.classList.add('hidden');
    });

    // 心拍パルスコールバック
    window.onHeartbeatTrigger = () => {
      this.elHeartPulse.classList.remove('beating');
      void this.elHeartPulse.offsetWidth; // リフロー発生
      this.elHeartPulse.classList.add('beating');
    };
  }

  startScene(sceneId) {
    this.currentSceneId = sceneId;
    this.currentSceneIndex = 0;
    this.renderCurrentStep();
  }

  renderCurrentStep() {
    const scene = window.SCENARIO_DATA.scenes[this.currentSceneId];
    if (!scene || this.currentSceneIndex >= scene.length) return;

    const step = scene[this.currentSceneIndex];

    // 心拍数の更新
    if (step.bpm) {
      this.currentBpm = step.bpm;
      this.elBpmValue.textContent = step.bpm;
      window.sound.setBpm(step.bpm);
    }

    // 背景の更新
    if (step.bg) {
      this.elBgImage.style.backgroundImage = `url('${step.bg}')`;
    }

    // 立ち絵の更新
    this.updateSprites(step.chara);

    // エフェクト
    if (step.effect === 'pulse') {
      window.onHeartbeatTrigger();
    } else if (step.effect === 'flash') {
      this.elScreenFlash.style.opacity = '0.8';
      setTimeout(() => { this.elScreenFlash.style.opacity = '0'; }, 300);
    }

    // 話者名バッジ
    if (step.speaker) {
      this.elSpeakerBadge.className = '';
      if (step.speaker === '由衣') this.elSpeakerBadge.classList.add('yui');
      this.elSpeakerName.textContent = step.speaker;
    } else {
      this.elSpeakerBadge.className = 'monologue';
      this.elSpeakerName.textContent = '';
    }

    // バックログに追加
    this.backlog.push({ speaker: step.speaker, text: step.text });

    // 文字送りタイピング表示
    this.typeText(step.text, () => {
      // 終了時コールバック
      if (step.choices && step.choices.length > 0) {
        this.showChoices(step.choices);
      } else if (this.autoPlay) {
        const readWait = Math.max(1500, step.text.length * 60);
        this.autoPlayTimer = setTimeout(() => this.handleAdvance(), readWait);
      }
    });
  }

  typeText(fullText, onComplete) {
    this.isTyping = true;
    this.elNextCursor.style.display = 'none';
    this.elDialogueText.innerHTML = '';
    clearInterval(this.typeInterval);

    let index = 0;
    this.typeInterval = setInterval(() => {
      if (index < fullText.length) {
        this.elDialogueText.textContent = fullText.slice(0, index + 1);
        index++;
      } else {
        this.finishTyping(fullText, onComplete);
      }
    }, 28);
  }

  finishTyping(fullText, onComplete) {
    clearInterval(this.typeInterval);
    this.elDialogueText.textContent = fullText;
    this.isTyping = false;
    this.elNextCursor.style.display = 'block';
    if (onComplete) onComplete();
  }

  handleAdvance() {
    const scene = window.SCENARIO_DATA.scenes[this.currentSceneId];
    if (!scene) return;
    const step = scene[this.currentSceneIndex];

    if (this.isTyping) {
      // タイピングスキップ
      this.finishTyping(step.text, () => {
        if (step.choices && step.choices.length > 0) {
          this.showChoices(step.choices);
        }
      });
      return;
    }

    // 選択肢表示中はタップ無効
    if (step.choices && step.choices.length > 0) {
      return;
    }

    // エンディング時
    if (step.isEnd) {
      location.reload();
      return;
    }

    window.sound.playTap();

    // 次のステップまたは次のシーン
    if (step.nextScene) {
      this.startScene(step.nextScene);
    } else if (this.currentSceneIndex + 1 < scene.length) {
      this.currentSceneIndex++;
      this.renderCurrentStep();
    }
  }

  showChoices(choices) {
    this.elChoicesList.innerHTML = '';
    choices.forEach((c) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = c.text;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.sound.playTap();
        this.elChoicesOverlay.classList.add('hidden');
        this.startScene(c.target);
      });
      this.elChoicesList.appendChild(btn);
    });
    this.elChoicesOverlay.classList.remove('hidden');
  }

  updateSprites(chara) {
    this.elSpriteTakase.classList.remove('active', 'dimmed');
    this.elSpriteYui.classList.remove('active', 'dimmed');

    if (chara === 'takase') {
      this.elSpriteTakase.classList.add('active');
    } else if (chara === 'yui') {
      this.elSpriteYui.classList.add('active');
    } else if (chara === 'both') {
      this.elSpriteTakase.classList.add('active');
      this.elSpriteYui.classList.add('dimmed');
    }
  }

  showBacklog() {
    this.elLogList.innerHTML = '';
    this.backlog.forEach((item) => {
      const div = document.createElement('div');
      div.className = 'log-entry';
      if (item.speaker) {
        const sp = document.createElement('div');
        sp.className = `log-speaker ${item.speaker === '由衣' ? 'yui' : ''}`;
        sp.textContent = item.speaker;
        div.appendChild(sp);
      }
      const text = document.createElement('div');
      text.className = 'log-text';
      text.textContent = item.text;
      div.appendChild(text);
      this.elLogList.appendChild(div);
    });
    this.elLogOverlay.classList.remove('hidden');
    this.elLogList.scrollTop = this.elLogList.scrollHeight;
  }

  showSecretKarte() {
    const data = window.SCENARIO_DATA.secretNotes.session1;
    document.getElementById('secret-public-text').textContent = data.publicNote;
    document.getElementById('secret-private-text').textContent = data.privateNote;
    this.elSecretOverlay.classList.remove('hidden');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.game = new NovelGame();
});
