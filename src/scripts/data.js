/* Data Repository: Fatima Elkhadiri Profile Dataset */

export const bioData = {
  name: "Fatima Elkhadiri",
  title: "Ingénieure Systèmes Embarqués, Robotique & Vision",
  email: "fatima.elkhadiri.pro@gmail.com",
  phone: "+33 7 80 05 80 92",
  location: "France (Mobilité nationale)",
  availability: "Immédiate (CDI / CDD)",
  languages: ["Français (C1)", "Anglais (C1 - TOEIC 950/990)", "Arabe (Maternelle)"],
  summary: "Ingénieure diplômée en Systèmes Embarqués (Polytech Clermont) & Master Robotique/IA. Spécialisée en conception de cartes électroniques (KiCad), firmware (C/C++, STM32, FreeRTOS), Linux embarqué (ROS2) et vision par ordinateur (CUDA, PyTorch). Résidente en France, disponible immédiatement pour opportunités en CDI ou CDD."
};

export const skillsCategories = [
  {
    category: "Langages de Programmation & Frameworks",
    icon: "code",
    items: [
      { name: "C / C++ (C++17/20, STL, Template)", desc: "Développement firmware & logiciels temps réel" },
      { name: "Python (NumPy, PyTorch, OpenCV, Flask)", desc: "Scripting, MLOps, RAG & IA" },
      { name: "VHDL-2008 / FPGA (Quartus, ModelSim)", desc: "Conception logique sur FPGA Terasic DE10-Lite" },
      { name: "ROS2 (Humble / Foxy, Nodes, Pub/Sub, Actions)", desc: "Architecture robotique & perception embarquée" }
    ]
  },
  {
    category: "Systèmes Embarqués, OS & Temps Réel",
    icon: "cpu",
    items: [
      { name: "Microcontrôleurs STM32 (Cortex-M4/M0) & ESP32", desc: "Drivers HAL, Low-level Drivers, Timers, DMA" },
      { name: "FreeRTOS & RTOS (Tâches, Mutex, Queues, Semaphores)", desc: "Ordonnancement temps réel & gestion mémoire" },
      { name: "Linux Embarqué & Yocto / Buildroot", desc: "Configuration Kernel, Device Tree, Systemd" },
      { name: "Plateformes NVIDIA Jetson (Orin / Xavier / Nano)", desc: "Accélération matériel CUDA & TensorRT" }
    ]
  },
  {
    category: "IA, Vision par Ordinateur & MLOps",
    icon: "eye",
    items: [
      { name: "Perception & Traitement d'Image (OpenCV / CUDA)", desc: "Rectification Fisheye, Projection Radar, Stitching" },
      { name: "Deep Learning (PyTorch, TensorRT, YOLO, SAM-CL)", desc: "Détection d'objets & segmentation médicale DICOM" },
      { name: "CatBoost & Scikit-Learn MLOps", desc: "Pipelines de régression ML & déploiement Flask" },
      { name: "WebGPU & Modèles LLM / RAG", desc: "IA générative locale in-browser" }
    ]
  },
  {
    category: "Validation, IVVQ & Normes Industrielles",
    icon: "shield",
    items: [
      { name: "Tests IVVQ & Bancs d'Essais", desc: "Validation sur engins industriels Manitou & bancs Equium" },
      { name: "Diagnostic & Métrologie", desc: "Oscilloscopes, Analyseurs logiques, Multimètres" },
      { name: "Norme Sécurité ISO26262 & Cycles Agile / Cycle V", desc: "Gestion des processus d'ingénierie" }
    ]
  },
  {
    category: "Protocoles, Outils & CAO PCB",
    icon: "network",
    items: [
      { name: "UART, SPI, I2C, CAN, TCP/IP, UDP, Modbus, MQTT", desc: "Bus industriels & sans-fil" },
      { name: "KiCad (Conception Schématique + Routage PCB)", desc: "Cartes 4 couches & CAO électronique" },
      { name: "Git, Azure DevOps & Docker", desc: "Gestion de configuration & conteneurisation" },
      { name: "Supervision Qt Framework (C++ / Python)", desc: "Supervision & interfaces IHM" }
    ]
  },
  {
    category: "Langues Parlées & Certifications",
    icon: "globe",
    items: [
      { name: "Français", desc: "Niveau C1 (Courant / Professionnel)" },
      { name: "Anglais", desc: "Niveau C1 (Avancé - TOEIC : 950 / 990)" },
      { name: "Arabe", desc: "Langue Maternelle" }
    ]
  }
];

export const experienceTimeline = [
  {
    role: "Stage Ingénieure Systèmes Embarqués & Vision par Ordinateur",
    company: "MANITOU GROUP - Ancenis",
    period: "Avril 2026 - Septembre 2026 (6 mois)",
    highlights: [
      "Contexte : Développement d'un système ADAS destiné aux engins industriels.",
      "Développement de modules de perception artificielle sous ROS2 sur plateforme NVIDIA Jetson.",
      "Implémentation de la rectification d'images fisheye et projection du nuage de points radars sur les images corrigées.",
      "Intégration GPU avec CUDA & NVIDIA Jetson et développement d'algorithmes Deep Learning (Object Detection).",
      "Campagnes d'essais et de validation sur engins industriels en conditions réelles. Gestion sous Git, Azure DevOps & Docker."
    ]
  },
  {
    role: "Stage Ingénieure Systèmes Embarqués",
    company: "EQUIUM - Saint-Herblain",
    period: "Février 2025 - Juillet 2025 (6 mois)",
    highlights: [
      "Contexte : Conception d'une carte électronique de contrôle-commande pour moteur linéaire (pompe à chaleur nouvelle génération).",
      "Conception électronique complète de la carte : Schéma + Routage PCB sous KiCad.",
      "Développement du firmware C sur STM32 (Drivers HAL) et algorithmes de commande sous FreeRTOS.",
      "Création d'une IHM de supervision avec Qt Framework et intégration du protocole Modbus.",
      "Activités IVVQ, essais en laboratoire, diagnostic aux oscilloscopes & analyseurs logiques selon la norme ISO26262."
    ]
  },
  {
    role: "Stage Ingénieure Systèmes Embarqués",
    company: "CNRS - Institut Pascal, Clermont-Ferrand",
    period: "Avril 2024 - Août 2024 (4 mois)",
    highlights: [
      "Contexte : Nœuds de communication satellitaire basse consommation (surveillance environnementale).",
      "Développement du firmware embarqué sur microcontrôleur STM32 sous RTOS (C++).",
      "Conception complète du PCB sous KiCad (Schéma + Routage) et intégration des interfaces UART & SPI.",
      "Optimisation drastique de la consommation énergétique via les modes sleep basse consommation et lien KIM1 IoT satellitaire."
    ]
  },
  {
    role: "Stage Développeuse Python & IoT",
    company: "INSIGHT SOLUTIONS - Rabat",
    period: "Juin 2023 - Août 2023 (2 mois)",
    highlights: [
      "Contexte : Système IoT industriel pour le suivi en temps réel de production sur convoyeur automatisé.",
      "Développement d'une application embarquée sur ESP32 / ESP8266 sous FreeRTOS.",
      "Programmation de la transmission de données en temps réel via le protocole MQTT vers serveurs MySQL/PostgreSQL."
    ]
  }
];

export const educationList = [
  {
    degree: "Master Intelligence Artificielle & Robotique",
    school: "Université Clermont Auvergne",
    period: "2025 - 2026",
    details: "Filtre de Kalman, Fusion Multi-capteurs, Systèmes Autonomes, Modélisation Robotique, Computer Vision"
  },
  {
    degree: "Diplôme d'Ingénieur - Systèmes Embarqués",
    school: "Polytech Clermont",
    period: "2023 - 2025",
    details: "Linux Embarqué, FreeRTOS, Architecture ARM/SoC, Conception PCB KiCad, IVVQ, VHDL"
  },
  {
    degree: "Diplôme d'Ingénieur - Génie Électrique",
    school: "École Hassania des Travaux Publics (EHTP)",
    period: "2021 - 2023",
    details: "Maintenance industrielle, Automates Programmables (PLC), Siemens TIA Portal, Électrotechnique"
  }
];

export const certificationsAndLanguages = {
  certifications: [
    "TOEIC Listening & Reading : 950 / 990",
    "Mastering PCB Design and Layout Specialization - Coursera"
  ],
  languages: [
    { name: "Français", level: "Niveau C1 (Courant)" },
    { name: "Anglais", level: "Niveau C1 (TOEIC : 950 / 990)" },
    { name: "Arabe", level: "Langue Maternelle" }
  ]
};
