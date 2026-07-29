export class Oscilloscope {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.signalType = 'pwm'; // 'pwm', 'i2c', 'uart', 'sine'
    this.frequency = 5;      // 1 to 20
    this.dutyCycle = 50;     // 10 to 90 %
    this.amplitude = 80;     // px
    this.offsetTime = 0;
    this.isPaused = false;

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight;
  }

  setSignalType(type) {
    this.signalType = type;
  }

  setFrequency(val) {
    this.frequency = parseFloat(val);
  }

  setDutyCycle(val) {
    this.dutyCycle = parseFloat(val);
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  animate() {
    if (!this.isPaused) {
      this.offsetTime += 0.05 * (this.frequency / 5);
    }
    this.draw();
    requestAnimationFrame(this.animate);
  }

  draw() {
    const { width, height } = this.canvas;
    this.ctx.clearRect(0, 0, width, height);

    // Draw Trigger Level Line
    this.ctx.strokeStyle = 'rgba(255, 176, 0, 0.25)';
    this.ctx.setLineDash([4, 4]);
    this.ctx.beginPath();
    this.ctx.moveTo(0, height / 2);
    this.ctx.lineTo(width, height / 2);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Draw Signal Waveform
    this.ctx.lineWidth = 2.5;
    this.ctx.shadowBlur = 12;

    if (this.signalType === 'pwm') {
      this.drawPWM(width, height);
    } else if (this.signalType === 'i2c') {
      this.drawI2C(width, height);
    } else if (this.signalType === 'uart') {
      this.drawUART(width, height);
    } else if (this.signalType === 'sine') {
      this.drawSine(width, height);
    }
  }

  drawPWM(width, height) {
    const centerY = height / 2;
    const highY = centerY - this.amplitude;
    const lowY = centerY + this.amplitude / 1.5;
    const period = (200 / this.frequency) * 1.5;
    const highWidth = period * (this.dutyCycle / 100);

    this.ctx.strokeStyle = '#00F0FF';
    this.ctx.shadowColor = '#00F0FF';
    this.ctx.beginPath();

    let x = 0 - (this.offsetTime % period);
    let isHigh = false;

    this.ctx.moveTo(x, lowY);

    while (x < width + period) {
      if (!isHigh) {
        this.ctx.lineTo(x, lowY);
        this.ctx.lineTo(x, highY);
        x += highWidth;
        isHigh = true;
      } else {
        this.ctx.lineTo(x, highY);
        this.ctx.lineTo(x, lowY);
        x += (period - highWidth);
        isHigh = false;
      }
    }
    this.ctx.stroke();
  }

  drawI2C(width, height) {
    // Dual Signal Display: SCL (Amber) and SDA (Cyan)
    const centerY1 = height * 0.3;
    const centerY2 = height * 0.7;
    const period = 80 / (this.frequency / 5);

    // Channel 1: SCL (Clock)
    this.ctx.strokeStyle = '#FFB000';
    this.ctx.shadowColor = '#FFB000';
    this.ctx.beginPath();

    let x = 0 - (this.offsetTime % period);
    while (x < width + period) {
      this.ctx.lineTo(x, centerY1 + 25);
      this.ctx.lineTo(x, centerY1 - 25);
      this.ctx.lineTo(x + period / 2, centerY1 - 25);
      this.ctx.lineTo(x + period / 2, centerY1 + 25);
      x += period;
    }
    this.ctx.stroke();

    // Channel 2: SDA (Data Frame)
    this.ctx.strokeStyle = '#00F0FF';
    this.ctx.shadowColor = '#00F0FF';
    this.ctx.beginPath();
    x = 0 - (this.offsetTime % (period * 2));
    while (x < width + period * 2) {
      this.ctx.lineTo(x, centerY2 + 25);
      this.ctx.lineTo(x + period * 0.4, centerY2 - 25);
      this.ctx.lineTo(x + period * 1.2, centerY2 - 25);
      this.ctx.lineTo(x + period * 1.4, centerY2 + 25);
      x += period * 2;
    }
    this.ctx.stroke();
  }

  drawUART(width, height) {
    const centerY = height / 2;
    const highY = centerY - 60;
    const lowY = centerY + 60;
    const bitWidth = 35 / (this.frequency / 5);

    this.ctx.strokeStyle = '#00FF88';
    this.ctx.shadowColor = '#00FF88';
    this.ctx.beginPath();

    let x = 0 - (this.offsetTime % (bitWidth * 10));
    // Simulated 8N1 Frame: Start bit (0) + 8 data bits + Stop bit (1)
    const bitPattern = [0, 1, 0, 1, 1, 0, 0, 1, 1, 1];

    while (x < width + bitWidth * 10) {
      for (let i = 0; i < bitPattern.length; i++) {
        const val = bitPattern[i];
        const y = val === 1 ? highY : lowY;
        this.ctx.lineTo(x + i * bitWidth, y);
        this.ctx.lineTo(x + (i + 1) * bitWidth, y);
      }
      x += bitWidth * 10;
    }
    this.ctx.stroke();
  }

  drawSine(width, height) {
    const centerY = height / 2;
    this.ctx.strokeStyle = '#A855F7';
    this.ctx.shadowColor = '#A855F7';
    this.ctx.beginPath();

    for (let x = 0; x < width; x += 2) {
      const y = centerY + Math.sin((x * 0.02 * (this.frequency / 5)) - this.offsetTime) * (this.amplitude * 0.8);
      if (x === 0) this.ctx.moveTo(x, y);
      else this.ctx.lineTo(x, y);
    }
    this.ctx.stroke();
  }
}
