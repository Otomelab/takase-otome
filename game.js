// ===== ゲームエンジン & UI進行ロジック =====
class NovelEngine {
  constructor() {
    this.scenario = window.SCENARIO_DATA;
    this.currentSceneId = null;
    this.stepIndex = 0;
    this.history = [];
    this.isAuto = false;
    this.autoTimer = null;
    this.isTyping = false;
    this.fullText = '';
    this.typingTimer = null;

    // DOMキャッシュ
    this.bgImage = document.getElementById('bg-image');
    this.pulseLayer = document.getElementById('heartbeat-pulse');
    this.flashLayer = document.getElementById('screen-flash');
    this.spriteTakase = document.getElementById('sprite-takase');
    this.spriteYui = document.getElementById('sprite-yui');
    this.imgTakase = document.getElementById('img-takase');
    this.imgYui = document.getElementById('img-yui');
    this.speakerBadge = document.getElementById('speaker-badge');
    this.speakerName = document.getElementById('speaker-name');
    this.dialogueText = document.getElementById('dialogue-text');
    this.bpmValue = document.getElementById('bpm-value');
    this.choicesOverlay = document.getElementById('choices-overlay');
    this.choicesList = document.getElementById('choices-list');
    this.logOverlay = document.getElementById('log-overlay');
    this.logList = document.getElementById('log-list');
    this.titleScreen = document.getElementById('title-screen');
    this.galleryOverlay = document.getElementById('gallery-overlay');
    this.btnSound = document.getElementById('btn-sound');
    this.btnAuto = document.getElementById('btn-auto');

    this.bindEvents();
  }

  bindEvents() {
    // クリック/タップでテキスト進行
    document.getElementById('dialogue-box').addEventListener('click', () => {
      this.onAdvance();
    });

    // サウンド切り替え
    this.btnSound.addEventListener('click', () => {
      const enabled = window.sound.toggleSound();
      this.btnSound.textContent = enabled ? '🔊 BGM' : '🔇 BGM';
      this.btnSound.classList.toggle('active', enabled);
    });

    // オート再生
    this.btnAuto.addEventListener('click', () => {
      this.isAuto = !this.isAuto;
      this.btnAuto.classList.toggle('active', this.isAuto);
      if (this.isAuto && !this.isTyping) {
        this.startAutoTimer();
      }
    });

    // ログ画面
    document.getElementById('btn-log').addEventListener('click', () => {
      this.openLog();
    });
    document.getElementById('btn-close-log').addEventListener('click', () => {
      this.logOverlay.classList.add('hidden');
    });

    // タイトルボタン
    document.getElementById('btn-start').addEventListener('click', () => {
      window.sound.init();
      this.startGame();
    });
    document.getElementById('btn-gallery').addEventListener('click', () => {
      this.galleryOverlay.classList.remove('hidden');
    });
    document.getElementById('btn-close-gallery').addEventListener('click', () => {
      this.galleryOverlay.classList.add('hidden');
    });

    // 右上BPMメータータップで「裏カルテ」モーダルを開く
    document.getElementById('heart-rate-meter').addEventListener('click', () => {
      this.openSecretRecord();
    });

    // 鼓動エフェクト連動
    window.onHeartbeatTrigger = () => {
      this.pulseLayer.classList.remove('beating');
      void this.pulseLayer.offsetWidth;
      this.pulseLayer.classList.add('beating');
    };
  }

  startGame() {
    this.titleScreen.style.opacity = '0';
    setTimeout(() => {
      this.titleScreen.classList.add('hidden');
    }, 800);
    this.loadScene(this.scenario.startScene, 0);
  }

  loadScene(sceneId, step = 0) {
    this.currentSceneId = sceneId;
    this.stepIndex = step;
    this.renderCurrentStep();
  }

  renderCurrentStep() {
    const scene = this.scenario.scenes[this.currentSceneId];
    if (!scene || this.stepIndex >= scene.length) return;

    const item = scene[this.stepIndex];

    // 背景
    if (item.bg) {
      this.bgImage.style.backgroundImage = `url('${item.bg}')`;
      this.bgImage.classList.toggle('zooming', !this.bgImage.classList.contains('zooming'));
    }

    // BPM
    if (item.bpm) {
      this.bpmValue.textContent = item.bpm;
      window.sound.setBpm(item.bpm);
    }

    // エフェクト
    if (item.effect === 'pulse') {
      window.sound.playHeartbeatThump();
      window.onHeartbeatTrigger();
    } else if (item.effect === 'flash') {
      this.flashLayer.style.opacity = '0.8';
      setTimeout(() => { this.flashLayer.style.opacity = '0'; }, 200);
    }

    // 立ち絵
    this.updateSprites(item.chara, item.pose || item.face || item.expression);

    // スピーカーバッジ
    this.speakerBadge.className = '';
    if (item.speaker) {
      this.speakerName.textContent = item.speaker;
      if (item.speaker === '由衣') {
        this.speakerBadge.classList.add('yui');
      }
    } else {
      this.speakerBadge.classList.add('monologue');
    }

    // ログ記録
    this.history.push({ speaker: item.speaker, text: item.text });

    // タイプライター表示開始
    this.typeText(item.text, () => {
      // 選択肢がある場合
      if (item.choices && item.choices.length > 0) {
        this.showChoices(item.choices);
      } else if (item.isEnd) {
        // 終了時
      } else if (this.isAuto) {
        this.startAutoTimer();
      }
    });
  }

  updateSprites(chara, expression) {
    if (!chara) {
      this.spriteTakase.classList.remove('active', 'dimmed', 'talking');
      this.spriteYui.classList.remove('active', 'dimmed', 'talking');
      return;
    }

    // 表情差分パスのマッピング
    const takaseExpressions = {
      '真顔': 'assets/expressions/takase/01_真顔.png',
      '笑顔': 'assets/expressions/takase/02_笑顔.png',
      '怒り': 'assets/expressions/takase/03_怒り.png',
      '驚き': 'assets/expressions/takase/04_驚き.png',
      '照れ': 'assets/expressions/takase/05_照れ.png',
      '困り': 'assets/expressions/takase/06_困り.png',
      '楽しみ': 'assets/expressions/takase/07_楽しみ.png',
      '不機嫌': 'assets/expressions/takase/08_不機嫌.png',
      '色気': 'assets/expressions/takase/09_色気.png',
      '甘え': 'assets/expressions/takase/10_甘え.png'
    };

    const yuiExpressions = {
      '01': 'assets/expressions/yui/training_expression_01.png',
      '満面笑顔': 'assets/expressions/yui/training_expression_01.png',
      '笑顔': 'assets/expressions/yui/training_expression_01.png',
      '02': 'assets/expressions/yui/training_expression_02.png',
      '微笑み': 'assets/expressions/yui/training_expression_02.png',
      '通常': 'assets/expressions/yui/training_expression_02.png',
      '03': 'assets/expressions/yui/training_expression_03.png',
      '照れ笑い': 'assets/expressions/yui/training_expression_03.png',
      '嬉しい': 'assets/expressions/yui/training_expression_03.png',
      '04': 'assets/expressions/yui/training_expression_04.png',
      'しょんぼり': 'assets/expressions/yui/training_expression_04.png',
      '哀': 'assets/expressions/yui/training_expression_04.png',
      '05': 'assets/expressions/yui/training_expression_05.png',
      'おちゃめ': 'assets/expressions/yui/training_expression_05.png',
      '06': 'assets/expressions/yui/training_expression_06.png',
      '怒り': 'assets/expressions/yui/training_expression_06.png',
      'むすっ': 'assets/expressions/yui/training_expression_06.png',
      '07': 'assets/expressions/yui/training_expression_07.png',
      '困り顔': 'assets/expressions/yui/training_expression_07.png',
      '泣きそう': 'assets/expressions/yui/training_expression_07.png',
      '08': 'assets/expressions/yui/training_expression_08.png',
      '困惑赤面': 'assets/expressions/yui/training_expression_08.png',
      '赤面': 'assets/expressions/yui/training_expression_08.png',
      '09': 'assets/expressions/yui/training_expression_09.png',
      '照れ': 'assets/expressions/yui/training_expression_09.png',
      '恥ずかしい': 'assets/expressions/yui/training_expression_09.png',
      '10': 'assets/expressions/yui/training_expression_10.png',
      '息切れ': 'assets/expressions/yui/training_expression_10.png',
      '疲労': 'assets/expressions/yui/training_expression_10.png',
      '11': 'assets/expressions/yui/training_expression_11_ganbaru.png',
      '頑張る': 'assets/expressions/yui/training_expression_11_ganbaru.png',
      '踏ん張る': 'assets/expressions/yui/training_expression_11_ganbaru.png'
    };

    if (chara === 'takase' || chara === 'both') {
      if (expression && takaseExpressions[expression]) {
        if (this.imgTakase) this.imgTakase.src = takaseExpressions[expression];
      }
    }

    if (chara === 'yui' || chara === 'both') {
      if (expression && yuiExpressions[expression]) {
        if (this.imgYui) this.imgYui.src = yuiExpressions[expression];
      }
    }

    if (chara === 'takase') {
      this.spriteTakase.classList.add('active', 'talking');
      this.spriteTakase.classList.remove('dimmed');
      this.spriteYui.classList.remove('active', 'talking');
      this.spriteYui.classList.add('dimmed');
    } else if (chara === 'yui') {
      this.spriteYui.classList.add('active', 'talking');
      this.spriteYui.classList.remove('dimmed');
      this.spriteTakase.classList.remove('active', 'talking');
      this.spriteTakase.classList.add('dimmed');
    } else if (chara === 'both') {
      this.spriteTakase.classList.add('active');
      this.spriteYui.classList.add('active');
    }
  }

  typeText(text, onComplete) {
    this.isTyping = true;
    this.fullText = text;
    this.dialogueText.textContent = '';
    let i = 0;

    if (this.typingTimer) clearInterval(this.typingTimer);

    this.typingTimer = setInterval(() => {
      if (i < text.length) {
        this.dialogueText.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(this.typingTimer);
        this.typingTimer = null;
        this.isTyping = false;
        if (onComplete) onComplete();
      }
    }, 28);
  }

  onAdvance() {
    window.sound.playTap();

    // タイピング中なら一瞬で全表示
    if (this.isTyping) {
      clearInterval(this.typingTimer);
      this.typingTimer = null;
      this.dialogueText.textContent = this.fullText;
      this.isTyping = false;
      const scene = this.scenario.scenes[this.currentSceneId];
      const item = scene[this.stepIndex];
      if (item.choices && item.choices.length > 0) {
        this.showChoices(item.choices);
      }
      return;
    }

    // 選択肢表示中はタップ無効
    if (!this.choicesOverlay.classList.contains('hidden')) return;

    const scene = this.scenario.scenes[this.currentSceneId];
    const item = scene[this.stepIndex];

    // 終了タグ
    if (item.isEnd) {
      this.titleScreen.classList.remove('hidden');
      this.titleScreen.style.opacity = '1';
      return;
    }

    // シーン遷移
    if (item.nextScene) {
      this.loadScene(item.nextScene, 0);
      return;
    }

    // 次のステップ
    if (this.stepIndex + 1 < scene.length) {
      this.stepIndex++;
      this.renderCurrentStep();
    }
  }

  showChoices(choices) {
    this.choicesList.innerHTML = '';
    choices.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = c.text;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.sound.playTap();
        this.choicesOverlay.classList.add('hidden');
        this.loadScene(c.target, 0);
      });
      this.choicesList.appendChild(btn);
    });
    this.choicesOverlay.classList.remove('hidden');
  }

  startAutoTimer() {
    if (this.autoTimer) clearTimeout(this.autoTimer);
    this.autoTimer = setTimeout(() => {
      if (this.isAuto && !this.isTyping) {
        this.onAdvance();
      }
    }, 2200);
  }

  openLog() {
    this.logList.innerHTML = '';
    this.history.forEach(h => {
      const div = document.createElement('div');
      div.className = 'log-entry';
      const spk = document.createElement('div');
      spk.className = `log-speaker ${h.speaker === '由衣' ? 'yui' : (h.speaker ? '' : 'monologue')}`;
      spk.textContent = h.speaker || '（モノローグ）';
      const txt = document.createElement('div');
      txt.className = 'log-text';
      txt.textContent = h.text;
      div.appendChild(spk);
      div.appendChild(txt);
      this.logList.appendChild(div);
    });
    this.logOverlay.classList.remove('hidden');
    this.logList.scrollTop = this.logList.scrollHeight;
  }

  // 高瀬の裏カルテ
  openSecretRecord() {
    const modal = document.createElement('div');
    modal.id = 'secret-record-modal';
    modal.style.cssText = `
      position: absolute; inset: 0; z-index: 70;
      background: rgba(8, 7, 12, 0.95); backdrop-filter: blur(14px);
      padding: 24px 20px; display: flex; flex-direction: column; color: #f0edf6;
    `;
    modal.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #d4af37; padding-bottom:8px;">
        <span style="font-family:var(--font-gothic); font-size:12px; letter-spacing:2px; color:#d4af37; font-weight:700;">CLIENT RECORD [CONFIDENTIAL]</span>
        <button id="btn-close-record" style="background:none; border:none; color:#fff; font-size:24px; cursor:pointer;">×</button>
      </div>
      <div style="flex:1; overflow-y:auto; padding:18px 0; font-family:var(--font-gothic); line-height:1.7; font-size:13px;">
        <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:8px; margin-bottom:14px; border-left:3px solid #d4af37;">
          <div style="font-size:11px; color:#9b95a8;">氏名 / 区分</div>
          <div style="font-size:15px; font-weight:700; color:#fff; margin-top:2px;">小野寺 由衣 様（29）/ 初回体験</div>
        </div>
        <div style="margin-bottom:16px;">
          <div style="font-size:11px; color:#d4af37; font-weight:700; margin-bottom:4px;">【電子カルテ公式記録】</div>
          <p style="color:#d0c8db; background:rgba(0,0,0,0.3); padding:10px; border-radius:6px;">
            デスクワークによる肩甲帯・胸椎の伸展制限あり。右股関節外旋可動域軽度低下。
            本人は『トレーニング中心で鍛えたい』と意欲的。筋力・フォームの勘は良いが呼吸が浅く力みやすい。都度利用案内済み。
          </p>
        </div>
        <div>
          <div style="font-size:11px; color:#d64562; font-weight:700; margin-bottom:4px;">【高瀬 航 / 非公開メモ】</div>
          <p style="color:#ffc5d3; background:rgba(214,69,98,0.12); padding:12px; border-radius:6px; border:1px solid rgba(214,69,98,0.25); font-style:italic;">
            『鍛えに来た』って最初めちゃくちゃ意地張ってて笑った。
            でも手首掴んで脈測っただけで心拍130超え。警戒して耳まで真っ赤になってんの隠せてない。
            自分で思ってるより10倍身体委ねたがってるタイプ。
            整体入れた時、声漏れそうになって耐えてた顔が最高に良かった。
            縛りなしの都度払いにしたから、次は向こうからLINEしてくるはず。
          </p>
        </div>
      </div>
    `;
    document.getElementById('game-container').appendChild(modal);
    document.getElementById('btn-close-record').addEventListener('click', () => {
      modal.remove();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.game = new NovelEngine();
});
