export const bioData = {
  name: "Fatima Elkhadiri",
  title: "Ingénieure en Électronique, Systèmes Embarqués, Robotique & Vision",
  tagline: "Recherche appliquée, développement logiciel C/C++/Python, Linux embarqué, FreeRTOS, ROS2, NVIDIA Jetson, conception PCB KiCad & validation IVVQ. Résidente actuellement en France, disponible à partir du 21 septembre 2026 (CDI).",
  location: "Résidente actuellement en France (Mobilité nationale)",
  residence: "Résidente en France",
  availability: "Disponible à partir du 21 septembre 2026",
  email: "fatima.elkhadiri.pro@gmail.com",
  phone: "+33 7 80 05 80 92",
  linkedin: "https://linkedin.com/in/fatima-elkhadiri-832a32240",
  toeic: "950 / 990",
  status: "Disponible à partir du 21 Septembre 2026 (CDI)",
  metrics: {
    residence: "En France",
    disponibilite: "21 Sept. 2026",
    toeicScore: "950 / 990",
    pcbKiCad: "Schéma & Routage"
  }
};

export const skillsCategories = [
  {
    category: "Développement Logiciel & MLOps",
    icon: "code",
    items: [
      { name: "C / C++ (C++17, Bare-Metal & Linux)", desc: "Programmation système & temps réel" },
      { name: "Python & Pytest", desc: "Scripting, automatisation & bancs de tests" },
      { name: "MLOps & Deep Learning (PyTorch, CNN, CUDA)", desc: "Vision & accélération GPU" },
      { name: "VHDL & Architectures FPGA", desc: "Conception numérique & processeurs IMU" },
      { name: "Java, UML & Architecture Logicielle", desc: "Modélisation & conception orientée objet" }
    ]
  },
  {
    category: "Systèmes Embarqués & Robotique",
    icon: "cpu",
    items: [
      { name: "ROS2 & NVIDIA Jetson (CUDA / Perception)", desc: "Chaîne de perception ADAS & vision" },
      { name: "FreeRTOS & Linux Embarqué / RT", desc: "Noyaux temps réel & drivers HAL" },
      { name: "Microcontrôleurs STM32, ESP32, Arduino", desc: "Firmware embarqué & gestion d'énergie" },
      { name: "SoC, ARM, BSP & Interface Matériel/Logiciel", desc: "Intégration bas niveau" }
    ]
  },
  {
    category: "Intégration, Validation & Diagnostics (IVVQ)",
    icon: "tool",
    items: [
      { name: "Validation Système, Tests IVVQ & Reporting", desc: "Campagnes de qualification & essais" },
      { name: "Oscilloscope, Multimètre & Analyseur Logique", desc: "Diagnostic signaux en laboratoire" },
      { name: "Analyse d'Anomalies HW/SW & Qualification", desc: "Résolution de bugs matériels/logiciels" },
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
      { name: "Anglais", desc: "Niveau C1 (Avancé — TOEIC : 950 / 990)" },
      { name: "Arabe", desc: "Langue Maternelle" }
    ]
  }
];

export const experienceTimeline = [
  {
    role: "Stage Ingénieure Systèmes Embarqués & Vision par Ordinateur",
    company: "MANITOU GROUP – Ancenis",
    period: "Avril 2026 – Septembre 2026 (6 mois)",
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
    company: "EQUIUM – Saint-Herblain",
    period: "Février 2025 – Juillet 2025 (6 mois)",
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
    company: "CNRS – Institut Pascal, Clermont-Ferrand",
    period: "Avril 2024 – Août 2024 (4 mois)",
    highlights: [
      "Contexte : Nœuds de communication satellitaire basse consommation (surveillance environnementale).",
      "Développement du firmware embarqué sur microcontrôleur STM32 sous RTOS (C++).",
      "Conception complète du PCB sous KiCad (Schéma + Routage) et intégration des interfaces UART & SPI.",
      "Optimisation drastique de la consommation énergétique via les modes sleep basse consommation et lien KIM1 IoT satellitaire."
    ]
  },
  {
    role: "Stage Développeuse Python & IoT",
    company: "INSIGHT SOLUTIONS – Rabat",
    period: "Juin 2023 – Août 2023 (2 mois)",
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
    period: "2025 – 2026",
    details: "Filtre de Kalman, Fusion Multi-capteurs, Systèmes Autonomes, Modélisation Robotique, Computer Vision"
  },
  {
    degree: "Diplôme d'Ingénieur – Systèmes Embarqués",
    school: "Polytech Clermont",
    period: "2023 – 2025",
    details: "Linux Embarqué, FreeRTOS, Architecture ARM/SoC, Conception PCB KiCad, IVVQ, VHDL"
  },
  {
    degree: "Diplôme d'Ingénieur – Génie Électrique",
    school: "École Hassania des Travaux Publics (EHTP)",
    period: "2021 – 2023",
    details: "Maintenance industrielle, Automates Programmables (PLC), Siemens TIA Portal, Électrotechnique"
  }
];

export const certificationsAndLanguages = {
  certifications: [
    "TOEIC Listening & Reading : 950 / 990",
    "Mastering PCB Design and Layout Specialization — Coursera"
  ],
  languages: [
    { name: "Français", level: "Niveau C1 (Courant)" },
    { name: "Anglais", level: "Niveau C1 (TOEIC : 950 / 990)" },
    { name: "Arabe", level: "Langue Maternelle" }
  ]
};
