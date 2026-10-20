// ===== Web Audio API によるシンセ音響エンジン =====
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isPlayingBGM = false;
    this.bgmGain = null;
    this.heartbeatTimer = null;
    this.bpm = 75;
    this.enabled = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.init();
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.startAmbient();
      this.startHeartbeat(this.bpm);
    } else {
      this.stopAmbient();
      this.stopHeartbeat();
    }
    return this.enabled;
  }

  // アンビエントBGM（温かく低いパッド音で密室感を演出）
  startAmbient() {
    if (!this.ctx || this.isPlayingBGM) return;
    this.isPlayingBGM = true;

    const master = this.ctx.createGain();
    master.gain.setValueAtTime(0.001, this.ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3);
    master.connect(this.ctx.destination);
    this.bgmGain = master;

    // 低域ドローン音
    const freqs = [55, 110, 164.81]; // A1, A2, E3 (落ち着きと熱情の和音)
    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const g = this.ctx.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      g.gain.setValueAtTime(0.35 / (idx + 1), this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(g);
      g.connect(master);
      osc.start();
    });
  }

  stopAmbient() {
    if (this.bgmGain && this.ctx) {
      this.bgmGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
    }
    this.isPlayingBGM = false;
  }

  // 鼓動音（ドクン、ドクン）
  playHeartbeatThump() {
    if (!this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;

    // 第1音（ド）
    this._thump(now, 58, 0.18, 0.4);
    // 第2音（クン）
    this._thump(now + 0.12, 48, 0.14, 0.28);
  }

  _thump(time, startFreq, duration, volume) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, time);
    osc.frequency.exponentialRampToValueAtTime(25, time + duration);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, time);

    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  setBpm(bpm) {
    this.bpm = bpm;
    if (this.enabled) {
      this.startHeartbeat(bpm);
    }
  }

  startHeartbeat(bpm) {
    this.stopHeartbeat();
    const intervalMs = (60 / bpm) * 1000;
    this.heartbeatTimer = setInterval(() => {
      this.playHeartbeatThump();
      // UI側のパルスエフェクト発火通知
      if (window.onHeartbeatTrigger) {
        window.onHeartbeatTrigger();
      }
    }, intervalMs);
  }

  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  // タップ操作音
  playTap() {
    if (!this.ctx || !this.enabled) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

    g.gain.setValueAtTime(0.05, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  }
}

window.sound = new SoundEngine();
