// ===== ゲーム進行エンジン (game.js) =====
class NovelGame {
  constructor() {
    this.currentSceneId = null;
    this.currentStep = 0;
    this.isAuto = false;
    this.autoTimer = null;
    this.isTyping = false;
    this.typeInterval = null;
    this.backlog = [];

    // DOM参照
    this.dom = {
      container: document.getElementById('game-container'),
      bgImage: document.getElementById('bg-image'),
      heartbeat: document.getElementById('heartbeat-pulse'),
      screenFlash: document.getElementById('screen-flash'),
      spriteTakase: document.getElementById('sprite-takase'),
      spriteYui: document.getElementById('sprite-yui'),
      speakerBadge: document.getElementById('speaker-badge'),
      speakerName: document.getElementById('speaker-name'),
      dialogueBox: document.getElementById('dialogue-box'),
      dialogueText: document.getElementById('dialogue-text'),
      nextCursor: document.getElementById('next-cursor'),
      bpmValue: document.getElementById('bpm-value'),
      choicesOverlay: document.getElementById('choices-overlay'),
      choicesList: document.getElementById('choices-list'),
      logOverlay: document.getElementById('log-overlay'),
      logList: document.getElementById('log-list'),
      chartOverlay: document.getElementById('chart-overlay'),
      chartClient: document.getElementById('chart-client'),
      chartPlan: document.getElementById('chart-plan'),
      chartOfficial: document.getElementById('chart-official'),
      chartSecret: document.getElementById('chart-secret'),
      galleryOverlay: document.getElementById('gallery-overlay'),
      titleScreen: document.getElementById('title-screen'),
      btnSound: document.getElementById('btn-sound'),
      btnAuto: document.getElementById('btn-auto'),
      btnLog: document.getElementById('btn-log'),
      btnChart: document.getElementById('btn-chart'),
      btnStart: document.getElementById('btn-start'),
      btnTitleChart: document.getElementById('btn-title-chart'),
      btnGallery: document.getElementById('btn-gallery'),
      btnCloseLog: document.getElementById('btn-close-log'),
      btnCloseChart: document.getElementById('btn-close-chart'),
      btnCloseGallery: document.getElementById('btn-close-gallery')
    };

    this.initEvents();
    this.initChartData();
  }

  initChartData() {
    const notes = window.SCENARIO_DATA.chartNotes;
    if (!notes) return;
    this.dom.chartClient.textContent = notes.client;
    this.dom.chartPlan.textContent = notes.plan;
    this.dom.chartOfficial.textContent = notes.officialNote;
    this.dom.chartSecret.textContent = notes.secretNote;
  }

  initEvents() {
    // クリック/タップでテキスト送り
    this.dom.dialogueBox.addEventListener('click', (e) => {
      e.stopPropagation();
      this.handleAdvance();
    });

    // サウンド切替
    this.dom.btnSound.addEventListener('click', () => {
      const enabled = window.sound.toggleSound();
      this.dom.btnSound.textContent = enabled ? '🔊 BGM' : '🔇 BGM';
      this.dom.btnSound.classList.toggle('active', enabled);
    });

    // オートモード
    this.dom.btnAuto.addEventListener('click', () => {
      this.isAuto = !this.isAuto;
      this.dom.btnAuto.classList.toggle('active', this.isAuto);
      if (this.isAuto && !this.isTyping) {
        this.scheduleAutoNext();
      } else if (!this.isAuto && this.autoTimer) {
        clearTimeout(this.autoTimer);
      }
    });

    // バックログ
    this.dom.btnLog.addEventListener('click', () => this.showLog());
    this.dom.btnCloseLog.addEventListener('click', () => this.dom.logOverlay.classList.add('hidden'));

    // カルテ
    this.dom.btnChart.addEventListener('click', () => this.showChart());
    this.dom.btnTitleChart.addEventListener('click', () => this.showChart());
    this.dom.btnCloseChart.addEventListener('click', () => this.dom.chartOverlay.classList.add('hidden'));

    // ギャラリー
    this.dom.btnGallery.addEventListener('click', () => this.dom.galleryOverlay.classList.remove('hidden'));
    this.dom.btnCloseGallery.addEventListener('click', () => this.dom.galleryOverlay.classList.add('hidden'));

    // スタートボタン
    this.dom.btnStart.addEventListener('click', () => {
      window.sound.init();
      this.dom.titleScreen.style.opacity = '0';
      setTimeout(() => {
        this.dom.titleScreen.classList.add('hidden');
        this.start(window.SCENARIO_DATA.startScene);
      }, 800);
    });

    // 鼓動サウンドとUIパルスの連動
    window.onHeartbeatTrigger = () => {
      this.dom.heartbeat.classList.remove('beating');
      void this.dom.heartbeat.offsetWidth; // リフロー
      this.dom.heartbeat.classList.add('beating');
    };
  }

  start(sceneId) {
    this.currentSceneId = sceneId;
    this.currentStep = 0;
    this.backlog = [];
    this.renderCurrentStep();
  }

  handleAdvance() {
    window.sound.playTap();
    if (this.isTyping) {
      // タイプライター中なら全文即時表示
      this.finishTyping();
      return;
    }

    const scene = window.SCENARIO_DATA.scenes[this.currentSceneId];
    if (!scene) return;

    const currentData = scene[this.currentStep];
    if (currentData && currentData.choices && currentData.choices.length > 0) {
      // 選択肢待ち
      return;
    }

    if (currentData && currentData.isEnd) {
      // タイトルへ戻る
      this.dom.titleScreen.classList.remove('hidden');
      this.dom.titleScreen.style.opacity = '1';
      return;
    }

    if (currentData && currentData.nextScene) {
      this.currentSceneId = currentData.nextScene;
      this.currentStep = 0;
      this.renderCurrentStep();
      return;
    }

    if (this.currentStep + 1 < scene.length) {
      this.currentStep++;
      this.renderCurrentStep();
    }
  }

  renderCurrentStep() {
    const scene = window.SCENARIO_DATA.scenes[this.currentSceneId];
    if (!scene) return;
    const data = scene[this.currentStep];
    if (!data) return;

    // 背景更新
    if (data.bg) {
      this.dom.bgImage.style.backgroundImage = `url('${data.bg}')`;
    }

    // 立ち絵更新
    this.updateSprites(data.chara);

    // 話者バッジ
    this.updateSpeaker(data.speaker);

    // BPM更新
    if (data.bpm) {
      this.dom.bpmValue.textContent = data.bpm;
      window.sound.setBpm(data.bpm);
    }

    // 演出エフェクト
    if (data.effect === 'pulse') {
      this.dom.heartbeat.classList.remove('beating');
      void this.dom.heartbeat.offsetWidth;
      this.dom.heartbeat.classList.add('beating');
    } else if (data.effect === 'flash') {
      this.dom.screenFlash.style.opacity = '0.7';
      setTimeout(() => { this.dom.screenFlash.style.opacity = '0'; }, 300);
    }

    // テキストタイプライター
    this.startTyping(data.text, () => {
      // 選択肢があるか確認
      if (data.choices && data.choices.length > 0) {
        this.showChoices(data.choices);
      } else if (this.isAuto) {
        this.scheduleAutoNext();
      }
    });

    // バックログ記録
    this.backlog.push({
      speaker: data.speaker,
      text: data.text
    });
  }

  updateSprites(chara) {
    this.dom.spriteTakase.classList.remove('active', 'dimmed');
    this.dom.spriteYui.classList.remove('active', 'dimmed');

    if (chara === 'takase') {
      this.dom.spriteTakase.classList.add('active');
    } else if (chara === 'yui') {
      this.dom.spriteYui.classList.add('active');
    } else if (chara === 'both') {
      this.dom.spriteTakase.classList.add('active');
      this.dom.spriteYui.classList.add('active');
    }
  }

  updateSpeaker(speaker) {
    this.dom.speakerBadge.className = '';
    if (!speaker) {
      this.dom.speakerBadge.classList.add('monologue');
      this.dom.speakerName.textContent = '';
    } else {
      this.dom.speakerName.textContent = speaker;
      if (speaker === '由衣') {
        this.dom.speakerBadge.classList.add('yui');
      }
    }
  }

  startTyping(fullText, onComplete) {
    if (this.typeInterval) clearInterval(this.typeInterval);
    this.isTyping = true;
    this.dom.nextCursor.style.display = 'none';
    this.dom.dialogueText.textContent = '';
    this.fullTextToType = fullText;
    this.onTypeComplete = onComplete;

    let idx = 0;
    this.typeInterval = setInterval(() => {
      if (idx < fullText.length) {
        this.dom.dialogueText.textContent += fullText.charAt(idx);
        idx++;
      } else {
        this.finishTyping();
      }
    }, 28);
  }

  finishTyping() {
    if (this.typeInterval) clearInterval(this.typeInterval);
    this.isTyping = false;
    this.dom.dialogueText.textContent = this.fullTextToType || '';
    this.dom.nextCursor.style.display = 'block';
    if (this.onTypeComplete) {
      const cb = this.onTypeComplete;
      this.onTypeComplete = null;
      cb();
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
        this.currentSceneId = c.target;
        this.currentStep = 0;
        this.renderCurrentStep();
      });
      this.dom.choicesList.appendChild(btn);
    });
    this.dom.choicesOverlay.classList.remove('hidden');
  }

  scheduleAutoNext() {
    if (this.autoTimer) clearTimeout(this.autoTimer);
    this.autoTimer = setTimeout(() => {
      if (this.isAuto) this.handleAdvance();
    }, 2600);
  }

  showLog() {
    this.dom.logList.innerHTML = '';
    this.backlog.forEach(item => {
      const entry = document.createElement('div');
      entry.className = 'log-entry';
      if (item.speaker) {
        const sp = document.createElement('div');
        sp.className = 'log-speaker ' + (item.speaker === '由衣' ? 'yui' : '');
        sp.textContent = item.speaker;
        entry.appendChild(sp);
      }
      const p = document.createElement('div');
      p.className = 'log-text';
      p.textContent = item.text;
      entry.appendChild(p);
      this.dom.logList.appendChild(entry);
    });
    this.dom.logOverlay.classList.remove('hidden');
    this.dom.logList.scrollTop = this.dom.logList.scrollHeight;
  }

  showChart() {
    this.dom.chartOverlay.classList.remove('hidden');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.game = new NovelGame();
});
