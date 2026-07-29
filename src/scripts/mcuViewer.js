export const mcuPinsData = {
  "PA9": {
    name: "PA9 / USART1_TX",
    type: "comm",
    bus: "UART1 Transmit",
    mux: "AF7 (USART1_TX)",
    voltage: "3.3V Tolerant",
    desc: "High-speed UART serial transmit pin connected to debug FTDI header. Supports DMA channel 4.",
    cSnippet: `// STM32 register init for PA9 USART1_TX
GPIOA->MODER &= ~(3U << (9 * 2));
GPIOA->MODER |=  (2U << (9 * 2)); // Alternate Function Mode
GPIOA->AFR[1] |= (7U << ((9 - 8) * 4)); // AF7 = USART1`
  },
  "PA10": {
    name: "PA10 / USART1_RX",
    type: "comm",
    bus: "UART1 Receive",
    mux: "AF7 (USART1_RX)",
    voltage: "3.3V Tolerant",
    desc: "UART serial receive pin with internal pull-up resistor enabled for incoming telemetry packets.",
    cSnippet: `// STM32 register init for PA10 USART1_RX
GPIOA->MODER &= ~(3U << (10 * 2));
GPIOA->MODER |=  (2U << (10 * 2)); // Alternate Function
GPIOA->PUPDR |=  (1U << (10 * 2)); // Pull-up enabled`
  },
  "PB6": {
    name: "PB6 / I2C1_SCL",
    type: "comm",
    bus: "I2C1 Clock",
    mux: "AF4 (I2C1_SCL)",
    voltage: "5V Tolerant",
    desc: "I2C Fast Mode+ (1MHz) clock line connected to IMU sensor and EEPROM.",
    cSnippet: `// Configure PB6 Open-Drain I2C SCL
GPIOB->OTYPER |= (1U << 6); // Open-Drain Output
GPIOB->OSPEEDR |= (3U << (6 * 2)); // Very High Speed`
  },
  "PB7": {
    name: "PB7 / I2C1_SDA",
    type: "comm",
    bus: "I2C1 Data",
    mux: "AF4 (I2C1_SDA)",
    voltage: "5V Tolerant",
    desc: "I2C Data line with external 4.7k ohm pull-up resistors.",
    cSnippet: `// Configure PB7 Open-Drain I2C SDA
GPIOB->OTYPER |= (1U << 7);
GPIOB->AFR[0] |= (4U << (7 * 4)); // AF4`
  },
  "PA5": {
    name: "PA5 / TIM2_CH1 (PWM)",
    type: "gpio",
    bus: "General Purpose TIM2",
    mux: "AF1 (TIM2_CH1)",
    voltage: "3.3V Output",
    desc: "Timer 2 Channel 1 PWM output pin for BLDC motor speed control signal.",
    cSnippet: `// TIM2 PWM 24kHz configuration
TIM2->PSC = 0; // Prescaler
TIM2->ARR = 1999; // 200MHz / 2000 = 100kHz PWM
TIM2->CCR1 = 1000; // 50% Duty Cycle`
  },
  "VDD": {
    name: "VDD_MCU",
    type: "power",
    bus: "Power Rail 3.3V",
    mux: "Power Supply Input",
    voltage: "3.3V DC (+/- 5%)",
    desc: "Main analog & digital core voltage rail supplied by low-noise LDO regulator.",
    cSnippet: `// Internal Voltage Regulator Monitor
PWR->CR3 |= PWR_CR3_BYPASS; // Power scale 0 boost mode`
  },
  "GND": {
    name: "GND_PAD",
    type: "ground",
    bus: "System Ground",
    mux: "Common Ground Plane",
    voltage: "0.0V DC",
    desc: "Low-impedance ground plane connection with thermal vias.",
    cSnippet: `// System Ground - Common reference`
  }
};

export class MCUViewer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.selectedPin = "PA9";
    this.init();
  }

  init() {
    this.render();
    this.attachEvents();
  }

  selectPin(pinId) {
    if (!mcuPinsData[pinId]) return;
    this.selectedPin = pinId;
    this.updateInspector();

    // Highlight active pin button
    document.querySelectorAll('.mcu-pin').forEach(pin => {
      if (pin.getAttribute('data-pin') === pinId) {
        pin.classList.add('active');
      } else {
        pin.classList.remove('active');
      }
    });
  }

  updateInspector() {
    const data = mcuPinsData[this.selectedPin];
    if (!data) return;

    const titleEl = document.getElementById('inspector-title-name');
    const tableEl = document.getElementById('inspector-table-body');
    const descEl = document.getElementById('inspector-desc');
    const codeEl = document.getElementById('inspector-code-block');

    if (titleEl) titleEl.textContent = data.name;
    if (descEl) descEl.textContent = data.desc;
    if (codeEl) codeEl.textContent = data.cSnippet;

    if (tableEl) {
      tableEl.innerHTML = `
        <tr><td><strong>Pin Type:</strong></td><td><span class="tech-chip">${data.type.toUpperCase()}</span></td></tr>
        <tr><td><strong>Bus / Function:</strong></td><td>${data.bus}</td></tr>
        <tr><td><strong>Multiplexer:</strong></td><td><code>${data.mux}</code></td></tr>
        <tr><td><strong>Voltage Rating:</strong></td><td>${data.voltage}</td></tr>
      `;
    }
  }

  render() {
    const pinsLeftKeys = ["VDD", "PA9", "PA10", "PB6"];
    const pinsRightKeys = ["PB7", "PA5", "GND"];

    this.container.innerHTML = `
      <div class="mcu-chip-view">
        <div class="mcu-chip-package">
          <div class="chip-notch"></div>
          
          <div class="chip-pins-left">
            ${pinsLeftKeys.map(k => `
              <div class="mcu-pin ${mcuPinsData[k].type} ${k === this.selectedPin ? 'active' : ''}" 
                   data-pin="${k}" title="${mcuPinsData[k].name}"></div>
            `).join('')}
          </div>

          <div class="chip-label">STM32H743<br><span class="chip-sub">ARM CORTEX-M7</span></div>

          <div class="chip-pins-right">
            ${pinsRightKeys.map(k => `
              <div class="mcu-pin ${mcuPinsData[k].type} ${k === this.selectedPin ? 'active' : ''}" 
                   data-pin="${k}" title="${mcuPinsData[k].name}"></div>
            `).join('')}
          </div>
        </div>
        <p style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-dim); margin-top:1.25rem;">
          ⚡ Click pins on chip package to inspect register configuration
        </p>
      </div>

      <div class="mcu-inspector">
        <div class="inspector-title">
          <span class="dot" style="width:8px; height:8px; background:var(--cyan-glow); border-radius:50%; display:inline-block;"></span>
          <span id="inspector-title-name">PA9 / USART1_TX</span>
        </div>

        <table class="pin-details-table">
          <tbody id="inspector-table-body"></tbody>
        </table>

        <p id="inspector-desc" style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;"></p>

        <div style="font-size:0.75rem; color:var(--cyan-glow); margin-bottom:0.35rem;">REG_INIT_SNIPPET (C / C++):</div>
        <pre class="code-snippet-box"><code id="inspector-code-block"></code></pre>
      </div>
    `;

    this.updateInspector();
  }

  attachEvents() {
    this.container.addEventListener('click', (e) => {
      const pinEl = e.target.closest('.mcu-pin');
      if (pinEl) {
        const pinId = pinEl.getAttribute('data-pin');
        this.selectPin(pinId);
      }
    });
  }
}
