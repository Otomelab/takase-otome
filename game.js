// ===== ゲーム進行エンジン (game.js) =====
class NovelEngine {
  constructor() {
    this.scenario = window.SCENARIO_DATA;
    this.currentSceneId = null;
    this.stepIndex = 0;
    this.isAuto = false;
    this.autoTimer = null;
    this.backlog = [];
    this.isTyping = false;
    this.typeTimer = null;
    this.fullText = '';

    // DOM要素
    this.dom = {
      container: document.getElementById('game-container'),
      bgImage: document.getElementById('bg-image'),
      heartbeatPulse: document.getElementById('heartbeat-pulse'),
      screenFlash: document.getElementById('screen-flash'),
      spriteTakase: document.getElementById('sprite-takase'),
      spriteYui: document.getElementById('sprite-yui'),
      topBar: document.getElementById('top-bar'),
      btnSound: document.getElementById('btn-sound'),
      btnAuto: document.getElementById('btn-auto'),
      btnLog: document.getElementById('btn-log'),
      bpmMeter: document.getElementById('heart-rate-meter'),
      bpmValue: document.getElementById('bpm-value'),
      dialogueBox: document.getElementById('dialogue-box'),
      speakerBadge: document.getElementById('speaker-badge'),
      speakerName: document.getElementById('speaker-name'),
      dialogueText: document.getElementById('dialogue-text'),
      nextCursor: document.getElementById('next-cursor'),
      choicesOverlay: document.getElementById('choices-overlay'),
      choicesList: document.getElementById('choices-list'),
      logOverlay: document.getElementById('log-overlay'),
      logList: document.getElementById('log-list'),
      btnCloseLog: document.getElementById('btn-close-log'),
      titleScreen: document.getElementById('title-screen'),
      btnStart: document.getElementById('btn-start'),
      btnGallery: document.getElementById('btn-gallery'),
      galleryOverlay: document.getElementById('gallery-overlay'),
      btnCloseGallery: document.getElementById('btn-close-gallery')
    };

    this.initEvents();
  }

  initEvents() {
    // スタートボタン
    this.dom.btnStart.addEventListener('click', () => {
      window.sound.init();
      this.startTitleTransition();
    });

    // 会話ウィンドウタップで進行
    this.dom.dialogueBox.addEventListener('click', () => {
      window.sound.playTap();
      this.handleAdvance();
    });

    // サウンド切替
    this.dom.btnSound.addEventListener('click', () => {
      const enabled = window.sound.toggleSound();
      this.dom.btnSound.textContent = enabled ? '🔊 BGM' : '🔇 BGM';
      this.dom.btnSound.classList.toggle('active', enabled);
    });

    // オート切替
    this.dom.btnAuto.addEventListener('click', () => {
      this.isAuto = !this.isAuto;
      this.dom.btnAuto.classList.toggle('active', this.isAuto);
      if (this.isAuto && !this.isTyping) {
        this.scheduleAutoNext();
      } else if (!this.isAuto) {
        clearTimeout(this.autoTimer);
      }
    });

    // バックログ
    this.dom.btnLog.addEventListener('click', () => this.showLog());
    this.dom.btnCloseLog.addEventListener('click', () => this.hideLog());

    // ギャラリー
    this.dom.btnGallery.addEventListener('click', () => {
      this.dom.galleryOverlay.classList.remove('hidden');
    });
    this.dom.btnCloseGallery.addEventListener('click', () => {
      this.dom.galleryOverlay.classList.add('hidden');
    });

    // 隠しギミック：心拍数メータータップで「高瀬の裏カルテ」を開く！
    this.dom.bpmMeter.addEventListener('click', () => {
      this.showSecretKarte();
    });

    // 鼓動UI発火リスナー
    window.onHeartbeatTrigger = () => {
      this.dom.heartbeatPulse.classList.add('beating');
      setTimeout(() => {
        this.dom.heartbeatPulse.classList.remove('beating');
      }, 600);
    };
  }

  startTitleTransition() {
    this.dom.titleScreen.style.opacity = '0';
    setTimeout(() => {
      this.dom.titleScreen.classList.add('hidden');
      this.startScene(this.scenario.startScene);
    }, 800);
  }

  startScene(sceneId) {
    this.currentSceneId = sceneId;
    this.stepIndex = 0;
    this.renderStep();
  }

  getCurrentStep() {
    const scene = this.scenario.scenes[this.currentSceneId];
    if (!scene) return null;
    return scene[this.stepIndex];
  }

  renderStep() {
    const step = this.getCurrentStep();
    if (!step) return;

    // 背景
    if (step.bg) {
      this.dom.bgImage.style.backgroundImage = `url('${step.bg}')`;
    }

    // 立ち絵
    this.updateSprites(step.chara);

    // 心拍数 (BPM)
    if (step.bpm) {
      this.dom.bpmValue.textContent = step.bpm;
      window.sound.setBpm(step.bpm);
    }

    // 演出エフェクト
    if (step.effect === 'pulse') {
      this.triggerPulse();
    } else if (step.effect === 'flash') {
      this.triggerFlash();
    }

    // 話者名バッジ
    if (!step.speaker) {
      this.dom.speakerBadge.className = 'monologue';
      this.dom.speakerName.textContent = '';
    } else {
      this.dom.speakerBadge.className = step.speaker === '由衣' ? 'yui' : 'takase';
      this.dom.speakerName.textContent = step.speaker;
    }

    // テキストタイプライター演出
    this.typeText(step.text);

    // バックログ記録
    this.backlog.push({
      speaker: step.speaker,
      text: step.text
    });
  }

  updateSprites(chara) {
    if (chara === 'takase') {
      this.dom.spriteTakase.classList.add('active');
      this.dom.spriteTakase.classList.remove('dimmed');
      this.dom.spriteYui.classList.remove('active');
    } else if (chara === 'yui') {
      this.dom.spriteYui.classList.add('active');
      this.dom.spriteYui.classList.remove('dimmed');
      this.dom.spriteTakase.classList.remove('active');
    } else if (chara === 'both') {
      this.dom.spriteTakase.classList.add('active', 'dimmed');
      this.dom.spriteYui.classList.add('active');
    } else {
      this.dom.spriteTakase.classList.remove('active');
      this.dom.spriteYui.classList.remove('active');
    }
  }

  typeText(text) {
    this.isTyping = true;
    this.fullText = text;
    this.dom.dialogueText.textContent = '';
    this.dom.nextCursor.style.opacity = '0';
    let i = 0;

    clearInterval(this.typeTimer);
    this.typeTimer = setInterval(() => {
      if (i < text.length) {
        this.dom.dialogueText.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(this.typeTimer);
        this.isTyping = false;
        this.dom.nextCursor.style.opacity = '1';
        this.onTypeComplete();
      }
    }, 28);
  }

  completeTyping() {
    clearInterval(this.typeTimer);
    this.dom.dialogueText.textContent = this.fullText;
    this.isTyping = false;
    this.dom.nextCursor.style.opacity = '1';
    this.onTypeComplete();
  }

  onTypeComplete() {
    const step = this.getCurrentStep();
    if (!step) return;

    // 選択肢がある場合
    if (step.choices && step.choices.length > 0) {
      this.showChoices(step.choices);
      return;
    }

    // オートモード進行
    if (this.isAuto) {
      this.scheduleAutoNext();
    }
  }

  scheduleAutoNext() {
    clearTimeout(this.autoTimer);
    this.autoTimer = setTimeout(() => {
      if (this.isAuto && !this.isTyping) {
        this.handleAdvance();
      }
    }, 2200);
  }

  handleAdvance() {
    if (this.isTyping) {
      this.completeTyping();
      return;
    }

    const step = this.getCurrentStep();
    if (!step) return;

    // 選択肢待機中はタップ進行無効
    if (step.choices && step.choices.length > 0) {
      return;
    }

    // 終了フラグ
    if (step.isEnd) {
      this.resetToTitle();
      return;
    }

    // 次シーン遷移指定
    if (step.nextScene) {
      this.startScene(step.nextScene);
      return;
    }

    // 同一シーン内の次ステップ
    const scene = this.scenario.scenes[this.currentSceneId];
    if (this.stepIndex + 1 < scene.length) {
      this.stepIndex++;
      this.renderStep();
    }
  }

  showChoices(choices) {
    this.dom.choicesList.innerHTML = '';
    choices.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = c.text;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.sound.playTap();
        this.dom.choicesOverlay.classList.add('hidden');
        this.startScene(c.target);
      });
      this.dom.choicesList.appendChild(btn);
    });
    this.dom.choicesOverlay.classList.remove('hidden');
  }

  triggerPulse() {
    this.dom.heartbeatPulse.classList.add('beating');
    setTimeout(() => {
      this.dom.heartbeatPulse.classList.remove('beating');
    }, 600);
  }

  triggerFlash() {
    this.dom.screenFlash.style.opacity = '0.5';
    setTimeout(() => {
      this.dom.screenFlash.style.opacity = '0';
    }, 300);
  }

  showLog() {
    this.dom.logList.innerHTML = '';
    this.backlog.forEach(item => {
      const div = document.createElement('div');
      div.className = 'log-entry';
      const speakerClass = !item.speaker ? 'monologue' : (item.speaker === '由衣' ? 'yui' : 'takase');
      const speakerLabel = item.speaker ? item.speaker : '―';
      div.innerHTML = `<div class="log-speaker ${speakerClass}">${speakerLabel}</div><div class="log-text">${item.text}</div>`;
      this.dom.logList.appendChild(div);
    });
    this.dom.logOverlay.classList.remove('hidden');
    this.dom.logList.scrollTop = this.dom.logList.scrollHeight;
  }

  hideLog() {
    this.dom.logOverlay.classList.add('hidden');
  }

  showSecretKarte() {
    const note = this.scenario.secretNotes.session1;
    if (!note) return;

    alert(`【秘密の裏カルテ】\n\n${note.title}\n\n▼ 表向きのカルテ:\n${note.publicSummary}\n\n▼ 高瀬の本音（非公開メモ）:\n${note.secretThought}`);
  }

  resetToTitle() {
    this.dom.titleScreen.classList.remove('hidden');
    setTimeout(() => {
      this.dom.titleScreen.style.opacity = '1';
    }, 50);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.engine = new NovelEngine();
});
