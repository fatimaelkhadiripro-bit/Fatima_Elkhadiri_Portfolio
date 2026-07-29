export class TerminalCLI {
  constructor(wrapperId) {
    this.wrapper = document.getElementById(wrapperId);
    if (!this.wrapper) return;

    this.history = [];
    this.historyIdx = -1;

    this.init();
  }

  init() {
    this.render();
    this.bodyEl = this.wrapper.querySelector('.terminal-body');
    this.inputEl = this.wrapper.querySelector('.terminal-input');
    
    this.printLine('[SYSTEM] UART Debug Serial Port Initialized (/dev/ttyUSB0 @ 115200 8N1)', 'info');
    this.printLine('[SYSTEM] Candidate: FATIMA ELKHADIRI | Ingénieure Systèmes Embarqués & Robotique', 'info');
    this.printLine('Tapez \x1b[36mhelp\x1b[0m ou \x1b[36mcv\x1b[0m pour afficher les commandes disponibles.\n', 'amber');

    this.attachEvents();
  }

  render() {
    this.wrapper.innerHTML = `
      <div class="terminal-header">
        <div class="terminal-dots">
          <div class="terminal-dot red"></div>
          <div class="terminal-dot yellow"></div>
          <div class="terminal-dot green"></div>
        </div>
        <div class="terminal-title">COM4: /dev/ttyUSB0 (Console de Débogage Firmware & System)</div>
        <select class="terminal-baud-select" id="baud-select">
          <option value="115200">115200 Baud</option>
          <option value="9600">9600 Baud</option>
        </select>
      </div>

      <div class="terminal-body" id="term-body"></div>

      <div class="terminal-input-row">
        <span class="terminal-prompt">fatima@embedded-system:~$</span>
        <input type="text" class="terminal-input" placeholder="Tapez une commande (ex: 'help', 'cv', 'projects', 'skills', 'experience', 'contact')..." autocomplete="off" spellcheck="false">
      </div>
    `;
  }

  printLine(text, type = 'info') {
    if (!this.bodyEl) return;
    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;

    const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
    line.innerHTML = `<span class="timestamp">[${timestamp}]</span> ${text}`;
    this.bodyEl.appendChild(line);
    this.bodyEl.scrollTop = this.bodyEl.scrollHeight;
  }

  executeCommand(cmdStr) {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    this.printLine(`fatima@embedded-system:~$ ${rawCmd}`, 'cmd');

    const args = rawCmd.toLowerCase().split(' ');
    const cmd = args[0];

    switch (cmd) {
      case 'help':
        this.printLine('Commandes Série CLI Disponibles :', 'amber');
        this.printLine('  help        - Liste des commandes de la console', 'info');
        this.printLine('  cv          - Résumé du profil ingénieur & statut CDI', 'info');
        this.printLine('  projects    - Projets clés (ROS2 ADAS, STM32 KiCad, Satellite IoT)', 'info');
        this.printLine('  skills      - Matrice des compétences (Embedded, Robotique, MLOps)', 'info');
        this.printLine('  experience  - Parours et stages (Manitou, Equium, CNRS, Insight)', 'info');
        this.printLine('  education   - Diplômes (Master IA/Robotique, Polytech Clermont, EHTP)', 'info');
        this.printLine('  contact     - Coordonnées (Email, Téléphone, LinkedIn)', 'info');
        this.printLine('  clear       - Effacer le tampon de la console', 'info');
        break;

      case 'cv':
      case 'profile':
        this.printLine('=== FATIMA ELKHADIRI ===', 'amber');
        this.printLine('Ingénieure Systèmes Embarqués, Robotique & Vision par Ordinateur', 'info');
        this.printLine('Recherche opportunités CDI en France (Mobilité nationale).', 'info');
        this.printLine('Contact: +33 7 80 05 80 92 | fatima.elkhadiri.pro@gmail.com', 'info');
        this.printLine('TOEIC: 950/990 | Permis B', 'info');
        break;

      case 'projects':
        this.printLine('=== PROJETS MAJEURS ===', 'amber');
        this.printLine('1. Perception ADAS & Vision Fisheye (MANITOU / NVIDIA Jetson ROS2)', 'info');
        this.printLine('2. Carte Électronique & Routage PCB KiCad Moteur Linéaire (EQUIUM / STM32)', 'info');
        this.printLine('3. Nœud IoT Satellitaire Basse Consommation (CNRS / KIM1)', 'info');
        this.printLine('4. Segmentation Imagerie Médicale & Foie par Apprentissage Continu (PyTorch)', 'info');
        this.printLine('5. Application d\'Imitation de Gestes par Robot Humanoïde Pepper', 'info');
        this.printLine('6. Processeur VHDL pour Centrale Inertielle (IMU) sur FPGA', 'info');
        break;

      case 'skills':
        this.printLine('=== COMPÉTENCES TECHNIQUES ===', 'amber');
        this.printLine('• Langages: C, C++, Python, VHDL, Java, UML', 'info');
        this.printLine('• Embarqué: FreeRTOS, Linux Embarqué, ROS2, STM32, NVIDIA Jetson, ESP32', 'info');
        this.printLine('• Validation: Tests IVVQ, ISO26262, Oscilloscope, Analyseur Logique', 'info');
        this.printLine('• Protocoles: CAN, UART, SPI, I2C, Modbus, MQTT, TCP/IP, UDP', 'info');
        this.printLine('• MLOps & Vision: PyTorch, CUDA, Object Detection, Feature Tracking', 'info');
        this.printLine('• Outils: KiCad, Git, Azure DevOps, Docker', 'info');
        break;

      case 'experience':
        this.printLine('=== PARCOURS PROFESSIONNEL ===', 'amber');
        this.printLine('• Manitou Group (2026, 6m) - Stage ADAS & ROS2 Vision Jetson', 'info');
        this.printLine('• Equium (2025, 6m) - Stage Firmware STM32 & PCB KiCad Moteur Linéaire', 'info');
        this.printLine('• CNRS Institut Pascal (2024, 4m) - Stage IoT Satellitaire STM32', 'info');
        this.printLine('• Insight Solutions (2023, 2m) - Stage Développeuse IoT ESP32', 'info');
        break;

      case 'education':
        this.printLine('=== CURSUS ACADÉMIQUE ===', 'amber');
        this.printLine('• Master IA & Robotique - Université Clermont Auvergne (2025-2026)', 'info');
        this.printLine('• Diplôme d\'Ingénieur Systèmes Embarqués - Polytech Clermont (2023-2025)', 'info');
        this.printLine('• Diplôme d\'Ingénieur Génie Électrique - EHTP (2021-2023)', 'info');
        break;

      case 'contact':
        this.printLine('=== CONTACT & ACCÈS ===', 'amber');
        this.printLine('Email     : fatima.elkhadiri.pro@gmail.com', 'info');
        this.printLine('Téléphone : +33 7 80 05 80 92', 'info');
        this.printLine('LinkedIn  : linkedin.com/in/fatima-elkhadiri-832a32240', 'info');
        this.printLine('Mobilité  : France entière (Mobilité nationale)', 'info');
        break;

      case 'clear':
        this.bodyEl.innerHTML = '';
        break;

      default:
        this.printLine(`Commande inconnue : '${cmd}'. Tapez 'help' pour le manuel des commandes.`, 'amber');
        break;
    }
  }

  attachEvents() {
    this.inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = this.inputEl.value;
        if (val) {
          this.history.push(val);
          this.historyIdx = this.history.length;
          this.executeCommand(val);
          this.inputEl.value = '';
        }
      } else if (e.key === 'ArrowUp') {
        if (this.historyIdx > 0) {
          this.historyIdx--;
          this.inputEl.value = this.history[this.historyIdx];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIdx < this.history.length - 1) {
          this.historyIdx++;
          this.inputEl.value = this.history[this.historyIdx];
        } else {
          this.historyIdx = this.history.length;
          this.inputEl.value = '';
        }
      }
    });
  }
}
