// ===== ゲーム進行エンジン =====
class NovelEngine {
  constructor() {
    this.currentSceneId = null;
    this.stepIndex = 0;
    this.isAuto = false;
    this.autoTimer = null;
    this.isTyping = false;
    this.currentFullText = '';
    this.typingTimer = null;
    this.backlog = [];

    // DOM要素
    this.dom = {
      bgImage: document.getElementById('bg-image'),
      spriteTakase: document.getElementById('sprite-takase'),
      spriteYui: document.getElementById('sprite-yui'),
      speakerBadge: document.getElementById('speaker-badge'),
      speakerName: document.getElementById('speaker-name'),
      dialogueText: document.getElementById('dialogue-text'),
      dialogueBox: document.getElementById('dialogue-box'),
      bpmValue: document.getElementById('bpm-value'),
      heartbeatPulse: document.getElementById('heartbeat-pulse'),
      screenFlash: document.getElementById('screen-flash'),
      choicesOverlay: document.getElementById('choices-overlay'),
      choicesList: document.getElementById('choices-list'),
      titleScreen: document.getElementById('title-screen'),
      btnStart: document.getElementById('btn-start'),
      btnSound: document.getElementById('btn-sound'),
      btnAuto: document.getElementById('btn-auto'),
      btnLog: document.getElementById('btn-log'),
      btnCloseLog: document.getElementById('btn-close-log'),
      logOverlay: document.getElementById('log-overlay'),
      logList: document.getElementById('log-list'),
      galleryOverlay: document.getElementById('gallery-overlay'),
      btnGallery: document.getElementById('btn-gallery'),
      btnCloseGallery: document.getElementById('btn-close-gallery'),
      heartRateMeter: document.getElementById('heart-rate-meter'),
      secretModal: document.getElementById('secret-modal'),
      secretContent: document.getElementById('secret-content'),
      btnCloseSecret: document.getElementById('btn-close-secret')
    };

    this.initEvents();
  }

  initEvents() {
    // スタートボタン
    this.dom.btnStart.addEventListener('click', (e) => {
      e.stopPropagation();
      window.sound.init();
      this.startStory();
    });

    // メッセージ送り
    this.dom.dialogueBox.addEventListener('click', () => {
      this.handleAdvance();
    });

    // サウンド切替
    this.dom.btnSound.addEventListener('click', (e) => {
      e.stopPropagation();
      const enabled = window.sound.toggleSound();
      this.dom.btnSound.classList.toggle('active', enabled);
      this.dom.btnSound.textContent = enabled ? '🔊 BGM ON' : '🔇 BGM';
    });

    // オート切替
    this.dom.btnAuto.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleAuto();
    });

    // バックログ開閉
    this.dom.btnLog.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openLog();
    });
    this.dom.btnCloseLog.addEventListener('click', () => {
      this.dom.logOverlay.classList.add('hidden');
    });

    // スチルギャラリー開閉
    this.dom.btnGallery.addEventListener('click', (e) => {
      e.stopPropagation();
      this.dom.galleryOverlay.classList.remove('hidden');
    });
    this.dom.btnCloseGallery.addEventListener('click', () => {
      this.dom.galleryOverlay.classList.add('hidden');
    });

    // BPMメータータップ（裏カルテの隠しトリガー）
    this.dom.heartRateMeter.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openSecretNote('session1');
    });

    // 鼓動エフェクト連動
    window.onHeartbeatTrigger = () => {
      this.dom.heartbeatPulse.classList.remove('beating');
      void this.dom.heartbeatPulse.offsetWidth;
      this.dom.heartbeatPulse.classList.add('beating');
    };
  }

  startStory() {
    this.dom.titleScreen.style.opacity = '0';
    setTimeout(() => {
      this.dom.titleScreen.classList.add('hidden');
    }, 800);

    this.currentSceneId = window.SCENARIO_DATA.startScene;
    this.stepIndex = 0;
    this.renderCurrentStep();
  }

  renderCurrentStep() {
    const scene = window.SCENARIO_DATA.scenes[this.currentSceneId];
    if (!scene || this.stepIndex >= scene.length) {
      this.returnToTitle();
      return;
    }

    const step = scene[this.stepIndex];

    // 背景更新
    if (step.bg) {
      this.dom.bgImage.style.backgroundImage = `url('${step.bg}')`;
    }

    // 立ち絵更新
    this.updateSprites(step.chara, step.speaker);

    // BPM & 鼓動エンジン更新
    if (step.bpm) {
      this.dom.bpmValue.textContent = step.bpm;
      window.sound.setBpm(step.bpm);
    }

    // 演出（フラッシュ・パルス）
    if (step.effect === 'flash') {
      this.flashScreen();
    } else if (step.effect === 'pulse') {
      this.triggerPulse();
    }

    // 話者バッジ
    if (!step.speaker) {
      this.dom.speakerBadge.className = 'monologue';
      this.dom.speakerName.textContent = '';
    } else {
      this.dom.speakerBadge.className = step.speaker === '由衣' ? 'yui' : 'takase';
      this.dom.speakerName.textContent = step.speaker;
    }

    // テキストタイプライター
    this.typeText(step.text, () => {
      // 選択肢がある場合
      if (step.choices && step.choices.length > 0) {
        this.showChoices(step.choices);
      } else if (step.isEnd) {
        // エンド
      } else if (this.isAuto) {
        this.scheduleAutoNext();
      }
    });

    // バックログ記録
    this.backlog.push({
      speaker: step.speaker,
      text: step.text
    });
  }

  updateSprites(chara, speaker) {
    this.dom.spriteTakase.classList.remove('active', 'dimmed', 'talking');
    this.dom.spriteYui.classList.remove('active', 'dimmed', 'talking');

    if (!chara) return;

    if (chara === 'takase') {
      this.dom.spriteTakase.classList.add('active');
      if (speaker === '高瀬') this.dom.spriteTakase.classList.add('talking');
    } else if (chara === 'yui') {
      this.dom.spriteYui.classList.add('active');
      if (speaker === '由衣') this.dom.spriteYui.classList.add('talking');
    } else if (chara === 'both') {
      this.dom.spriteTakase.classList.add('active');
      this.dom.spriteYui.classList.add('active');
    }
  }

  typeText(text, onComplete) {
    this.isTyping = true;
    this.currentFullText = text;
    this.dom.dialogueText.textContent = '';
    let idx = 0;

    if (this.typingTimer) clearInterval(this.typingTimer);

    this.typingTimer = setInterval(() => {
      if (idx < text.length) {
        this.dom.dialogueText.textContent += text[idx];
        idx++;
      } else {
        clearInterval(this.typingTimer);
        this.isTyping = false;
        if (onComplete) onComplete();
      }
    }, 28);
  }

  handleAdvance() {
    window.sound.playTap();

    // タイピング途中なら全文即時表示
    if (this.isTyping) {
      clearInterval(this.typingTimer);
      this.dom.dialogueText.textContent = this.currentFullText;
      this.isTyping = false;
      return;
    }

    const scene = window.SCENARIO_DATA.scenes[this.currentSceneId];
    const step = scene[this.stepIndex];

    if (step.choices && step.choices.length > 0) return;

    if (step.isEnd) {
      this.returnToTitle();
      return;
    }

    if (step.nextScene) {
      this.currentSceneId = step.nextScene;
      this.stepIndex = 0;
    } else {
      this.stepIndex++;
    }

    this.renderCurrentStep();
  }

  showChoices(choices) {
    this.dom.choicesList.innerHTML = '';
    choices.forEach((choice) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = choice.text;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.sound.playTap();
        this.dom.choicesOverlay.classList.add('hidden');
        this.currentSceneId = choice.target;
        this.stepIndex = 0;
        this.renderCurrentStep();
      });
      this.dom.choicesList.appendChild(btn);
    });
    this.dom.choicesOverlay.classList.remove('hidden');
  }

  flashScreen() {
    this.dom.screenFlash.style.opacity = '0.7';
    setTimeout(() => {
      this.dom.screenFlash.style.opacity = '0';
    }, 300);
  }

  triggerPulse() {
    if (window.onHeartbeatTrigger) {
      window.onHeartbeatTrigger();
    }
  }

  toggleAuto() {
    this.isAuto = !this.isAuto;
    this.dom.btnAuto.classList.toggle('active', this.isAuto);
    if (this.isAuto && !this.isTyping) {
      this.scheduleAutoNext();
    } else if (!this.isAuto && this.autoTimer) {
      clearTimeout(this.autoTimer);
    }
  }

  scheduleAutoNext() {
    if (this.autoTimer) clearTimeout(this.autoTimer);
    this.autoTimer = setTimeout(() => {
      if (this.isAuto) this.handleAdvance();
    }, 2200);
  }

  openLog() {
    this.dom.logList.innerHTML = '';
    this.backlog.forEach((entry) => {
      const item = document.createElement('div');
      item.className = 'log-entry';
      const spk = document.createElement('div');
      spk.className = `log-speaker ${entry.speaker === '由衣' ? 'yui' : entry.speaker ? 'takase' : 'monologue'}`;
      spk.textContent = entry.speaker || '――';
      const txt = document.createElement('div');
      txt.className = 'log-text';
      txt.textContent = entry.text;
      item.appendChild(spk);
      item.appendChild(txt);
      this.dom.logList.appendChild(item);
    });
    this.dom.logOverlay.classList.remove('hidden');
    this.dom.logList.scrollTop = this.dom.logList.scrollHeight;
  }

  openSecretNote(sessionId) {
    const note = window.SCENARIO_DATA.secretNotes[sessionId];
    if (!note) return;

    alert(`${note.title}\n\n${note.publicNote}\n\n${note.secretNote}`);
  }

  returnToTitle() {
    this.dom.titleScreen.classList.remove('hidden');
    setTimeout(() => {
      this.dom.titleScreen.style.opacity = '1';
    }, 50);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.game = new NovelEngine();
});
