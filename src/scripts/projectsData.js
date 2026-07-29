const getUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const embeddedProjects = [
  {
    id: "adas-jetson-vision",
    title: "Perception ADAS & Vision Embarquée sur Engins Industriels",
    category: "ROS2 & NVIDIA Jetson",
    badge: "Manitou Group / ROS2",
    image: getUrl("images/adas_jetson_vision.png"),
    description: "Système de perception artificielle et sécurité ADAS. Traitement d'images fisheye avec rectification géométrique, projection du nuage de points radars et détection d'objets par Deep Learning accéléré sous CUDA.",
    specs: {
      Platform: "NVIDIA Jetson Orin / Xavier",
      Framework: "ROS2 Humble / C++20",
      Accelerate: "NVIDIA CUDA / TensorRT",
      Sensors: "Fisheye Cam + Radar"
    },
    bom: [
      "NVIDIA Jetson Embedded AI Board",
      "Wide-Angle Automotive Fisheye Camera",
      "Industrial FMCW Radar Module",
      "CAN-Bus Interface Shield",
      "Docker Container Environment"
    ],
    gallery: [
      { url: getUrl("images/adas_jetson_vision.png"), caption: "Plateforme NVIDIA Jetson ADAS & Vision" },
      { url: getUrl("images/manitou_adas_fov_coverage.png"), caption: "Couverture des Zones de Détection (FOV Caméras Fisheye & Radars FMCW) et Sécurité Piétons sur Engin Manitou" },
      { url: getUrl("images/simplescreenrecorder-2026-07-21_16.11.03.mp4"), caption: "🎥 Démonstration Vidéo : Perception ADAS, Rectification Fisheye & Détection d'Objets en Temps Réel sur NVIDIA Jetson" }
    ]
  },
  {
    id: "equium-linear-motor",
    title: "Carte Électronique de Contrôle-Commande & Routage PCB KiCad",
    category: "Électronique & Firmware STM32",
    badge: "Equium / KiCad & C",
    image: getUrl("images/equium_pcb_3d.png"),
    description: "Conception complète de la carte de pilotage d'un moteur linéaire pour pompe à chaleur nouvelle génération. Schéma & routage PCB 4-couches sous KiCad, firmware C (Drivers HAL STM32), FreeRTOS et IHM de supervision Qt.",
    specs: {
      MCU: "STM32F4 / ARM Cortex-M4",
      EDA: "KiCad 8.0 (CAO PCB)",
      Protocol: "Modbus RTU / RS485",
      Safety: "ISO 26262 Compliant"
    },
    bom: [
      "Microcontrôleur STM32F407VGT6",
      "Drivers MOSFET H-Bridge Haute Puissance",
      "Capteurs de Courant Effet Hall",
      "Transceiver RS485 / Modbus",
      "Régulateurs DC-DC Haute Efficacité"
    ],
    gallery: [
      { url: getUrl("images/equium_pcb_3d.png"), caption: "Vue 3D Carte Principale Equium Drive Motor A6" },
      { url: getUrl("images/equium_control_diagram.png"), caption: "Diagramme Algorithmique de Commande du Moteur Linéaire (Asservissement Position/Courant)" },
      { url: getUrl("images/equium_kicad_layout.png"), caption: "Routage PCB KiCad - Pistes de Cuivre & SOT23" },
      { url: getUrl("images/equium_sensor_board.png"), caption: "Vue 3D Carte Fille Capteurs & Connecteur U1/U2" },
      { url: getUrl("images/equium_qt_dashboard.png"), caption: "IHM de Contrôle & Supervision Développée en C++/Qt" }
    ]
  },
  {
    id: "satellite-iot-node",
    title: "Nœuds Satellitaires IoT Ultra-Basse Consommation",
    category: "IoT Satellitaire & PCB",
    badge: "CNRS Institut Pascal",
    image: getUrl("images/sat_field_deployment.jpg"),
    description: "Nœuds de communication satellitaire autonomes pour la surveillance environnementale (lac/tourbière, Projet ANR SPAGNETO). Conception PCB KiCad, carte STM32 Nucleo, alimentation solaire/batterie, modem Kinéis & portail ARGOS.",
    specs: {
      MCU: "STM32L073RZ (Nucleo 64)",
      Link: "Modem Satellitaire Kinéis / ARGOS",
      Buses: "UART, SPI, I2C, ADC Monitoring",
      Power: "Panneau Solaire + Chargeur Li-Ion"
    },
    bom: [
      "Carte STM32 Nucleo-64 (STM32L073RZ)",
      "Modem Transmetteur Satellitaire Kinéis",
      "Capteur de Température Thermo 3 Click (I2C)",
      "Capteur GPS UART & MicroSD SPI Click",
      "Chargeur Batterie BQ24210 & Protection ESD TPD4S014"
    ],
    pdfReport: getUrl("docs/Rapport_de_stage_LPCA.pdf"),
    pdfTitle: "Rapport_de_stage_LPCA.pdf",
    gallery: [
      { url: getUrl("images/sat_field_deployment.jpg"), caption: "Station de Mesure & Nœud Satellitaire Déployé en Condition Réelle (Boîtier IP67 sur Lac / Tourbière — Projet ANR SPAGNETO)" },
      { url: getUrl("images/sat_hardware_architecture.png"), caption: "Architecture Matérielle Globale (STM32L073RZ, Modem Kinéis, Capteurs I2C/GPS/SPI SD & Diviseur de Tension Batterie)" },
      { url: getUrl("images/sat_usb_protection_schematic.png"), caption: "Schéma KiCad : Connecteur USB & Puce de Protection ESD TPD4S014DSQR" },
      { url: getUrl("images/sat_battery_charger_schematic.png"), caption: "Schéma KiCad : Gestion d'Alimentation Solaire / USB & Chargeur Batterie Li-Ion BQ24210" },
      { url: getUrl("images/sat_argos_portal.png"), caption: "Portail Web ARGOS / Kinéis : Suivi des Passages Satellites, Prédictions & Azimut" }
    ]
  },
  {
    id: "liver-segmentation-dl",
    title: "Segmentation du Foie Humain par Apprentissage Continu",
    category: "Deep Learning & MLOps",
    badge: "PyTorch & Medical AI",
    image: getUrl("images/liver_segmentation_prediction.png"),
    description: "Outil d'IA médicale pour la chirurgie mini-invasive du cancer. Segmentation automatique des images et vidéos laparoscopiques du foie (format DICOM, SAM-CL, S3R, Docker, PyTorch).",
    specs: {
      Framework: "PyTorch / Docker",
      Models: "SAM-CL, S3R Continual",
      Formats: "Medical DICOM / CT Scans",
      Application: "Chirurgie Laparoscopique"
    },
    bom: [
      "Stack PyTorch CUDA MLOps",
      "SAM-CL Segment Anything Model",
      "Lecteur Imagerie DICOM 3.0",
      "Conteneur Docker Portable"
    ],
    gallery: [
      { url: getUrl("images/liver_segmentation_prediction.png"), caption: "Résultat de Segmentation Laparoscopique du Foie : Image Originale (Vidéo Laparoscopique), Vérité Terrain (Ground Truth) & Prédiction du Modèle Deep Learning (SAM-CL / PyTorch)" }
    ]
  },
  {
    id: "pepper-robot-imitation",
    title: "Imitation des Gestes Humains par Robot Humanoïde Pepper",
    category: "Robotique Humanoïde & Vision",
    badge: "Robot Pepper / Perception",
    image: getUrl("images/pepper_robot_test_miroir.png"),
    description: "Application d'imitation des gestes humains en temps réel pour le robot humanoïde Pepper. Modélisation géométrique des membres, chaîne de perception (pose estimation) et commande en coordonnées articulaires (prise d'un objet).",
    specs: {
      Robot: "Pepper Humanoid Platform",
      Pipeline: "Perception & Kinematics",
      Control: "Real-time Joint Control",
      Math: "Inverse Kinematics (IK)"
    },
    bom: [
      "Robot Humanoïde Aldebaran Pepper",
      "Caméras 3D de Perception",
      "Serveur de Calcul Cinématique"
    ],
    pdfReport: getUrl("docs/Rapport_projet_Miroir_Pepper_GE5A.pdf"),
    pdfTitle: "Rapport_projet_Miroir_Pepper_GE5A.pdf",
    gallery: [
      { url: getUrl("images/pepper_robot_test_miroir.png"), caption: "Test Miroir Pepper & Prise d'un Objet : Suivi de Squelette / Pose Humaine en Temps Réel et Commande Articulaire du Robot Pepper" }
    ]
  },
  {
    id: "fpga-imu-processor",
    title: "Centrale Inertielle (IMU) sur FPGA en VHDL",
    category: "VHDL & FPGA Hardware",
    badge: "VHDL / FPGA",
    image: getUrl("images/fpga_de10_lite_imu.png"),
    description: "Conception et implémentation complète en VHDL d'un processeur dédié au traitement rapide des données d'une centrale inertielle 9-axes (Accéléromètre, Gyroscope, Magnétomètre) sur carte Terasic DE10-Lite.",
    specs: {
      Language: "VHDL-2008",
      Hardware: "FPGA Terasic DE10-Lite (MAX 10)",
      Interface: "SPI Master Hardware",
      Filter: "Fixed-Point Math Pipeline"
    },
    bom: [
      "Carte de Développement FPGA Terasic DE10-Lite",
      "Capteur IMU 9-Axes MPU-9250 / SPI",
      "Afficheurs 7-Séquences LED & Switches"
    ],
    gallery: [
      { url: getUrl("images/fpga_de10_lite_imu.png"), caption: "Test & Démonstration du Processeur VHDL sur Carte FPGA Terasic DE10-Lite (Affichage 7-Séquences des Mesures Angle/Accélération IMU)" }
    ]
  }
];
