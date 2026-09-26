(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))m(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const y=[{category:"Développement Logiciel & MLOps",icon:"code",items:[{name:"C / C++ (C++17, Bare-Metal & Linux)",desc:"Programmation système & temps réel"},{name:"Python & Pytest",desc:"Scripting, automatisation & bancs de tests"},{name:"MLOps & Deep Learning (PyTorch, CNN, CUDA)",desc:"Vision & accélération GPU"},{name:"VHDL & Architectures FPGA",desc:"Conception numérique & processeurs IMU"},{name:"Java, UML & Architecture Logicielle",desc:"Modélisation & conception orientée objet"}]},{category:"Systèmes Embarqués & Robotique",icon:"cpu",items:[{name:"ROS2 & NVIDIA Jetson (CUDA / Perception)",desc:"Chaîne de perception ADAS & vision"},{name:"FreeRTOS & Linux Embarqué / RT",desc:"Noyaux temps réel & drivers HAL"},{name:"Microcontrôleurs STM32, ESP32, Arduino",desc:"Firmware embarqué & gestion d'énergie"},{name:"SoC, ARM, BSP & Interface Matériel/Logiciel",desc:"Intégration bas niveau"}]},{category:"Intégration, Validation & Diagnostics (IVVQ)",icon:"tool",items:[{name:"Validation Système, Tests IVVQ & Reporting",desc:"Campagnes de qualification & essais"},{name:"Oscilloscope, Multimètre & Analyseur Logique",desc:"Diagnostic signaux en laboratoire"},{name:"Analyse d'Anomalies HW/SW & Qualification",desc:"Résolution de bugs matériels/logiciels"},{name:"Norme Sécurité ISO26262 & Cycles Agile / Cycle V",desc:"Gestion des processus d'ingénierie"}]},{category:"Protocoles, Outils & CAO PCB",icon:"network",items:[{name:"UART, SPI, I2C, CAN, TCP/IP, UDP, Modbus, MQTT",desc:"Bus industriels & sans-fil"},{name:"KiCad (Conception Schématique + Routage PCB)",desc:"Cartes 4 couches & CAO électronique"},{name:"Git, Azure DevOps & Docker",desc:"Gestion de configuration & conteneurisation"},{name:"Supervision Qt Framework (C++ / Python)",desc:"Supervision & interfaces IHM"}]},{category:"Langues Parlées & Certifications",icon:"globe",items:[{name:"Français",desc:"Niveau C1 (Courant / Professionnel)"},{name:"Anglais",desc:"Niveau C1 (Avancé — TOEIC : 950 / 990)"},{name:"Arabe",desc:"Langue Maternelle"}]}],b=[{role:"Stage Ingénieure Systèmes Embarqués & Vision par Ordinateur",company:"MANITOU GROUP – Ancenis",period:"Avril 2026 – Septembre 2026 (6 mois)",highlights:["Contexte : Développement d'un système ADAS destiné aux engins industriels.","Développement de modules de perception artificielle sous ROS2 sur plateforme NVIDIA Jetson.","Implémentation de la rectification d'images fisheye et projection du nuage de points radars sur les images corrigées.","Intégration GPU avec CUDA & NVIDIA Jetson et développement d'algorithmes Deep Learning (Object Detection).","Campagnes d'essais et de validation sur engins industriels en conditions réelles. Gestion sous Git, Azure DevOps & Docker."]},{role:"Stage Ingénieure Systèmes Embarqués",company:"EQUIUM – Saint-Herblain",period:"Février 2025 – Juillet 2025 (6 mois)",highlights:["Contexte : Conception d'une carte électronique de contrôle-commande pour moteur linéaire (pompe à chaleur nouvelle génération).","Conception électronique complète de la carte : Schéma + Routage PCB sous KiCad.","Développement du firmware C sur STM32 (Drivers HAL) et algorithmes de commande sous FreeRTOS.","Création d'une IHM de supervision avec Qt Framework et intégration du protocole Modbus.","Activités IVVQ, essais en laboratoire, diagnostic aux oscilloscopes & analyseurs logiques selon la norme ISO26262."]},{role:"Stage Ingénieure Systèmes Embarqués",company:"CNRS – Institut Pascal, Clermont-Ferrand",period:"Avril 2024 – Août 2024 (4 mois)",highlights:["Contexte : Nœuds de communication satellitaire basse consommation (surveillance environnementale).","Développement du firmware embarqué sur microcontrôleur STM32 sous RTOS (C++).","Conception complète du PCB sous KiCad (Schéma + Routage) et intégration des interfaces UART & SPI.","Optimisation drastique de la consommation énergétique via les modes sleep basse consommation et lien KIM1 IoT satellitaire."]},{role:"Stage Développeuse Python & IoT",company:"INSIGHT SOLUTIONS – Rabat",period:"Juin 2023 – Août 2023 (2 mois)",highlights:["Contexte : Système IoT industriel pour le suivi en temps réel de production sur convoyeur automatisé.","Développement d'une application embarquée sur ESP32 / ESP8266 sous FreeRTOS.","Programmation de la transmission de données en temps réel via le protocole MQTT vers serveurs MySQL/PostgreSQL."]}],h=[{degree:"Master Intelligence Artificielle & Robotique",school:"Université Clermont Auvergne",period:"2025 – 2026",details:"Filtre de Kalman, Fusion Multi-capteurs, Systèmes Autonomes, Modélisation Robotique, Computer Vision"},{degree:"Diplôme d'Ingénieur – Systèmes Embarqués",school:"Polytech Clermont",period:"2023 – 2025",details:"Linux Embarqué, FreeRTOS, Architecture ARM/SoC, Conception PCB KiCad, IVVQ, VHDL"},{degree:"Diplôme d'Ingénieur – Génie Électrique",school:"École Hassania des Travaux Publics (EHTP)",period:"2021 – 2023",details:"Maintenance industrielle, Automates Programmables (PLC), Siemens TIA Portal, Électrotechnique"}],o=g=>`/Fatima_Elkhadiri_Portfolio/${g.replace(/^\//,"")}`,C=[{id:"all",label:"⚡ Tous les Projets"},{id:"electronics",label:"🔌 Électronique & PCB",title:"Projets Électronique & CAO PCB",desc:"Conception électronique de cartes, routage PCB KiCad multi-couches, firmware C/STM32, VHDL/FPGA & gestion d'énergie."},{id:"ai-vision",label:"🧠 IA, MLOps & Vision",title:"Projets IA, MLOps & Vision Embarquée",desc:"Modèles de régression CatBoost & MLOps, perception ADAS sur NVIDIA Jetson/ROS2, segmentation médicale PyTorch & studio LLM local WebGPU/RAG."},{id:"robotics",label:"🤖 Robotique & Automatique",title:"Projets Robotique Humanoïde & Autonome",desc:"Commande cinématique, modélisation géométrique et perception temps réel sur plateforme robotique humanoïde Pepper."}],f=[{id:"esp32-c3-iot-pcb",section:"electronics",title:"Carte IoT Sur-Mesure ESP32-C3 & Gestion d'Énergie TP4056",category:"Électronique PCB & IoT",badge:"KiCad & ESP32-C3",image:o("images/esp32_c3_iot_pcb_schematic.png"),description:"Conception complète d'un PCB sur-mesure pour application IoT autonome basée sur le SoC ESP32-C3-02 (Wi-Fi & BLE). Gestion d'énergie intégrée avec chargeur Li-Ion TP4056 (USB-C), capteurs BME280 / lumière / son, mémoire Flash SPI et stockage MicroSD.",specs:{MCU:"ESP32-C3-02 (Wi-Fi / BLE)",Power:"TP4056 Li-Ion + USB-C",Sensors:"BME280, Lumière & Son",Storage:"Flash W25Q32 + MicroSD SPI",Display:"OLED I2C Interface",EDA:"KiCad 9.0 (CAO PCB)"},bom:["SoC ESP32-C3-MINI-1 / ESP32-C3-02 (Wi-Fi & BLE)","Chargeur Batterie Li-Ion TP4056 avec Régulation Thermique","Convertisseur USB-UART CP2102N & Protection USBLC6-2SC6","Mémoire Flash SPI W25Q32JVSSIQ & Lecteur MicroSD GSD090012SEU","Capteur Environnemental BME280 (Température, Humidité, Pression)","Connecteur USB-C & Circuit d'Alimentation Régulée LDO 3.3V"],gallery:[{url:o("images/esp32_c3_iot_pcb_schematic.png"),caption:"Schéma Électronique KiCad 9.0 : Convertisseur USB-UART CP2102N, Microcontrôleur ESP32-C3-02, Mémoire Flash SPI & Interface Carte MicroSD"}]},{id:"equium-linear-motor",section:"electronics",title:"Carte Électronique de Contrôle-Commande & Routage PCB KiCad",category:"Électronique & Firmware STM32",badge:"Equium / KiCad & C",image:o("images/equium_pcb_3d.png"),description:"Conception complète de la carte de pilotage d'un moteur linéaire pour pompe à chaleur nouvelle génération. Schéma & routage PCB 4-couches sous KiCad, firmware C (Drivers HAL STM32), FreeRTOS et IHM de supervision Qt.",specs:{MCU:"STM32F4 / ARM Cortex-M4",EDA:"KiCad 8.0 (CAO PCB)",Protocol:"Modbus RTU / RS485",Safety:"ISO 26262 Compliant"},bom:["Microcontrôleur STM32F407VGT6","Drivers MOSFET H-Bridge Haute Puissance","Capteurs de Courant Effet Hall","Transceiver RS485 / Modbus","Régulateurs DC-DC Haute Efficacité"],gallery:[{url:o("images/equium_pcb_3d.png"),caption:"Vue 3D Carte Principale Equium Drive Motor A6"},{url:o("images/equium_control_diagram.png"),caption:"Diagramme Algorithmique de Commande du Moteur Linéaire (Asservissement Position/Courant)"},{url:o("images/equium_kicad_layout.png"),caption:"Routage PCB KiCad - Pistes de Cuivre & SOT23"},{url:o("images/equium_sensor_board.png"),caption:"Vue 3D Carte Fille Capteurs & Connecteur U1/U2"},{url:o("images/equium_qt_dashboard.png"),caption:"IHM de Contrôle & Supervision Développée en C++/Qt"}]},{id:"satellite-iot-node",section:"electronics",title:"Nœuds Satellitaires IoT Ultra-Basse Consommation",category:"IoT Satellitaire & PCB",badge:"CNRS Institut Pascal",image:o("images/sat_field_deployment.jpg"),description:"Nœuds de communication satellitaire autonomes pour la surveillance environnementale (lac/tourbière, Projet ANR SPAGNETO). Conception PCB KiCad, carte STM32 Nucleo, alimentation solaire/batterie, modem Kinéis & portail ARGOS.",specs:{MCU:"STM32L073RZ (Nucleo 64)",Link:"Modem Satellitaire Kinéis / ARGOS",Buses:"UART, SPI, I2C, ADC Monitoring",Power:"Panneau Solaire + Chargeur Li-Ion"},bom:["Carte STM32 Nucleo-64 (STM32L073RZ)","Modem Transmetteur Satellitaire Kinéis","Capteur de Température Thermo 3 Click (I2C)","Capteur GPS UART & MicroSD SPI Click","Chargeur Batterie BQ24210 & Protection ESD TPD4S014"],pdfReport:o("docs/Rapport_de_stage_LPCA.pdf"),pdfTitle:"Rapport_de_stage_LPCA.pdf",gallery:[{url:o("images/sat_field_deployment.jpg"),caption:"Station de Mesure & Nœud Satellitaire Déployé en Condition Réelle (Boîtier IP67 sur Lac / Tourbière — Projet ANR SPAGNETO)"},{url:o("images/sat_hardware_architecture.png"),caption:"Architecture Matérielle Globale (STM32L073RZ, Modem Kinéis, Capteurs I2C/GPS/SPI SD & Diviseur de Tension Batterie)"},{url:o("images/sat_usb_protection_schematic.png"),caption:"Schéma KiCad : Connecteur USB & Puce de Protection ESD TPD4S014DSQR"},{url:o("images/sat_battery_charger_schematic.png"),caption:"Schéma KiCad : Gestion d'Alimentation Solaire / USB & Chargeur Batterie Li-Ion BQ24210"},{url:o("images/sat_argos_portal.png"),caption:"Portail Web ARGOS / Kinéis : Suivi des Passages Satellites, Prédictions & Azimut"}]},{id:"fpga-imu-processor",section:"electronics",title:"Centrale Inertielle (IMU) sur FPGA en VHDL",category:"VHDL & FPGA Hardware",badge:"VHDL / FPGA",image:o("images/fpga_de10_lite_imu.png"),description:"Conception et implémentation complète en VHDL d'un processeur dédié au traitement rapide des données d'une centrale inertielle 9-axes (Accéléromètre, Gyroscope, Magnétomètre) sur carte Terasic DE10-Lite.",specs:{Language:"VHDL-2008",Hardware:"FPGA Terasic DE10-Lite (MAX 10)",Interface:"SPI Master Hardware",Filter:"Fixed-Point Math Pipeline"},bom:["Carte de Développement FPGA Terasic DE10-Lite","Capteur IMU 9-Axes MPU-9250 / SPI","Afficheurs 7-Séquences LED & Switches"],gallery:[{url:o("images/fpga_de10_lite_imu.png"),caption:"Test & Démonstration du Processeur VHDL sur Carte FPGA Terasic DE10-Lite (Affichage 7-Séquences des Mesures Angle/Accélération IMU)"}]},{id:"airbnb-price-prediction",section:"ai-vision",title:"Airbnb Price Prediction — Prédiction de Prix par Machine Learning Full-Stack",category:"Machine Learning & MLOps",badge:"CatBoost & Flask / Scikit-Learn",image:o("images/airbnb_price_prediction_app.png"),description:"Projet Machine Learning full-stack prédisant le prix optimal par nuitée d'une annonce Airbnb. Traitement d'un jeu de données réel de plus de 100 000 annonces réparties sur 6 métropoles américaines (NYC, LA, SF, DC, Chicago, Boston). Évaluation comparative de 7 modèles de régression (Linear, Lasso, Ridge, ElasticNet, Random Forest, Gradient Boosting, CatBoost). Modèle CatBoost retenu (R² = 0.70), sérialisé sous format Pickle et déployé via une application web Flask interactive.",specs:{Dataset:"100,000+ Listings (6 US Cities)",BestModel:"CatBoost Regressor (R² = 0.70)",ModelsTested:"7 Regressors (Random Forest, CatBoost...)",Pipeline:"Custom Scikit-Learn Preprocessing",WebStack:"Flask RESTful API + Frontend UI",Inference:"Real-time Serialized Pickle Model"},bom:["Algorithme Gradient Boosting CatBoost Regressor (Score R² = 0.70)","Pipeline Scikit-Learn de Prétraitement (Imputer, Encoder, Scaler)","Jeu de Données 100k+ Annonces Airbnb (NYC, LA, SF, DC, Boston, Chicago)","Application Web Backend Flask Python & Modèle Sérialisé Pickle","Interface Utilisateur Interactive de Saisie des Caractéristiques & Inférence Temps Réel"],gallery:[{url:o("images/airbnb_price_prediction_app.png"),caption:"Interface Web Flask Airbnb Price Prediction : Saisie des Caractéristiques du Logement & Inférence ML en Temps Réel"}]},{id:"adas-jetson-vision",section:"ai-vision",title:"Perception ADAS & Vision Embarquée sur Engins Industriels",category:"ROS2 & NVIDIA Jetson",badge:"Manitou Group / ROS2",image:o("images/manitou_adas_fov_coverage.png"),description:"Système de perception artificielle et sécurité ADAS. Traitement d'images fisheye avec rectification géométrique, projection du nuage de points radars et détection d'objets par Deep Learning accéléré sous CUDA.",specs:{Platform:"NVIDIA Jetson Orin / Xavier",Framework:"ROS2 Humble / C++20",Accelerate:"NVIDIA CUDA / TensorRT",Sensors:"Fisheye Cam + Radar"},bom:["NVIDIA Jetson Embedded AI Board","Wide-Angle Automotive Fisheye Camera","Industrial FMCW Radar Module","CAN-Bus Interface Shield","Docker Container Environment"],gallery:[{url:o("images/manitou_adas_fov_coverage.png"),caption:"Couverture des Zones de Détection (FOV Caméras Fisheye & Radars FMCW) et Sécurité Piétons sur Engin Manitou"},{url:o("images/simplescreenrecorder-2026-07-21_16.11.03.mp4"),caption:"🎥 Démonstration Vidéo : Perception ADAS, Rectification Fisheye & Stitching"}]},{id:"liver-segmentation-dl",section:"ai-vision",title:"Segmentation du Foie Humain par Apprentissage Continu",category:"Deep Learning & MLOps",badge:"PyTorch & Medical AI",image:o("images/liver_segmentation_prediction.png"),description:"Outil d'IA médicale pour la chirurgie mini-invasive du cancer. Segmentation automatique des images et vidéos laparoscopiques du foie (format DICOM, SAM-CL, S3R, Docker, PyTorch).",specs:{Framework:"PyTorch / Docker",Models:"SAM-CL, S3R Continual",Formats:"Medical DICOM / CT Scans",Application:"Chirurgie Laparoscopique"},bom:["Stack PyTorch CUDA MLOps","SAM-CL Segment Anything Model","Lecteur Imagerie DICOM 3.0","Conteneur Docker Portable"],gallery:[{url:o("images/liver_segmentation_prediction.png"),caption:"Résultat de Segmentation Laparoscopique du Foie : Image Originale (Vidéo Laparoscopique), Vérité Terrain (Ground Truth) & Prédiction du Modèle Deep Learning (SAM-CL / PyTorch)"}]},{id:"aura-local-llm-studio",section:"ai-vision",title:"AURA Local LLM Studio — Studio d'IA Générative Local & RAG",category:"IA Générative, WebGPU & MLOps",badge:"WebGPU / Ollama & Python",image:o("images/aura_llm_studio_app.png"),description:"Application web privée et haute performance conçue pour exécuter des modèles de langage (LLM) à 100% en local sans aucune dépendance cloud. Architecture multi-moteurs (Python natif, WebGPU navigateur & Ollama), moteur RAG (Retrieval-Augmented Generation) pour la recherche sémantique sur documents PDF/code avec citations de pages, télémétrie en temps réel (tok/s, latence), rendu Markdown/LaTeX, dictée vocale et synthèse audio.",specs:{Architecture:"Multi-Engine (WebGPU, Ollama, Python)",RAG:"In-Browser RAG (PDF & Code Citations)",Privacy:"100% Local & Privacy-First (0 Cloud)",Telemetry:"Real-time Metrics (tok/s & Latency)",Audio:"Voice Dictation & Text-to-Speech",Interface:"Dark Glassmorphism & LaTeX Math"},bom:["Moteur In-Browser WebGPU & WebLLM (LLaMA / Mistral / Gemma)","Serveur Backend Python FastAPI & Service Local Ollama","Moteur de Recherche Sémantique RAG & Vector Embeddings","Module de Rendu LaTeX MathJax & Highlighting Code Prism.js","Interface Voice-to-Text & Synthesizer Text-to-Speech Web Speech API","Bibliothèque de Prompt Templates & Télémétrie en Temps Réel"],gallery:[{url:o("images/aura_llm_studio_app.png"),caption:"Interface AURA LLM Studio : Studio d'IA Générative Local, Moteur Python Local & Télémétrie"}]},{id:"pepper-robot-imitation",section:"robotics",title:"Imitation des Gestes Humains par Robot Humanoïde Pepper",category:"Robotique Humanoïde & Vision",badge:"Robot Pepper / Perception",image:o("images/pepper_robot_test_miroir.png"),description:"Application d'imitation des gestes humains en temps réel pour le robot humanoïde Pepper. Modélisation géométrique des membres, chaîne de perception (pose estimation) et commande en coordonnées articulaires (prise d'un objet).",specs:{Robot:"Pepper Humanoid Platform",Pipeline:"Perception & Kinematics",Control:"Real-time Joint Control",Math:"Inverse Kinematics (IK)"},bom:["Robot Humanoïde Aldebaran Pepper","Caméras 3D de Perception","Serveur de Calcul Cinématique"],pdfReport:o("docs/Rapport_projet_Miroir_Pepper_GE5A.pdf"),pdfTitle:"Rapport_projet_Miroir_Pepper_GE5A.pdf",gallery:[{url:o("images/pepper_robot_test_miroir.png"),caption:"Test Miroir Pepper & Prise d'un Objet : Suivi de Squelette / Pose Humaine en Temps Réel et Commande Articulaire du Robot Pepper"}]}];class S{constructor(t){this.overlay=document.getElementById(t),this.overlay&&(this.activeProject=null,this.activeGalleryIdx=0,this.init())}init(){this.attachEvents()}openModal(t){const s=f.find(m=>m.id===t);s&&(this.activeProject=s,this.activeGalleryIdx=0,this.render(),this.overlay.classList.add("active"))}closeModal(){this.overlay.classList.remove("active")}isMediaVideo(t){return t?t.endsWith(".mp4")||t.endsWith(".webm")||t.endsWith(".ogg"):!1}renderMediaElement(t){return this.isMediaVideo(t.url)?`<video id="gallery-main-media" controls autoplay loop muted style="max-width:100%; max-height:420px; width:auto; height:auto; object-fit:contain; display:block;">
        <source src="${t.url}" type="video/mp4">
        Votre navigateur ne prend pas en charge la lecture de vidéos MP4.
      </video>`:`<img id="gallery-main-media" src="${t.url}" alt="${t.caption}" style="max-width:100%; max-height:420px; width:auto; height:auto; object-fit:contain; display:block; transition:all 0.3s ease;">`}render(){if(!this.activeProject)return;const t=this.activeProject,s=t.gallery||[{url:t.image,caption:t.title}],m=s[this.activeGalleryIdx]||s[0];this.overlay.innerHTML=`
      <div class="modal-container">
        <button class="modal-close" id="modal-close-btn">&times;</button>
        
        <div style="font-family:var(--font-mono); font-size:0.75rem; font-weight:600; color:var(--cyan-glow); margin-bottom:0.35rem; letter-spacing:0.5px;">
          INSPECTEUR TECHNIQUE & GALERIE PROJET
        </div>
        <h2 style="font-size:1.75rem; margin-bottom:1.25rem; font-weight:800; color:var(--text-main); line-height:1.3;">${t.title}</h2>
        
        ${t.cadlabUrl?`
          <div style="background:rgba(56,189,248,0.06); border:1px solid var(--border-hover); border-radius:var(--radius-sm); padding:0.85rem 1.25rem; margin-bottom:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            <div>
              <div style="font-family:var(--font-sans); font-size:0.88rem; font-weight:700; color:var(--cyan-glow);">🔗 DÉPÔT CADLAB.IO DISPONIBLE</div>
              <div style="font-size:0.82rem; color:var(--text-muted);">Schéma KiCad & Fichiers de Conception PCB en ligne</div>
            </div>
            <a href="${t.cadlabUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-decoration:none;">
              🔗 Voir sur CADLAB.io (Project #28685)
            </a>
          </div>
        `:""}

        ${t.pdfReport?`
          <div style="background:rgba(245,158,11,0.06); border:1px solid rgba(245,158,11,0.25); border-radius:var(--radius-sm); padding:0.85rem 1.25rem; margin-bottom:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            <div>
              <div style="font-family:var(--font-sans); font-size:0.88rem; font-weight:700; color:var(--amber-glow);">📄 RAPPORT TECHNIQUE DE PROJET DISPONIBLE</div>
              <div style="font-size:0.82rem; color:var(--text-muted);">${t.pdfTitle}</div>
            </div>
            <a href="${t.pdfReport}" target="_blank" rel="noopener noreferrer" class="btn btn-amber" style="text-decoration:none;">
              📥 Ouvrir le Rapport (PDF)
            </a>
          </div>
        `:""}

        <!-- Media Gallery Main Display -->
        <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem;">
          <div id="media-viewport" style="border:1px solid var(--border-color); border-radius:var(--radius-sm); overflow:hidden; background:#090d16; position:relative; min-height:300px; max-height:450px; display:flex; align-items:center; justify-content:center;">
            ${this.renderMediaElement(m)}
          </div>
          
          <div id="gallery-caption" style="font-family:var(--font-mono); font-size:0.82rem; color:var(--text-muted); text-align:center; background:rgba(255,255,255,0.02); padding:0.6rem 1rem; border-radius:8px; border:1px solid var(--border-color);">
            📌 ${m.caption}
          </div>

          <!-- Thumbnails Selector if multiple items available -->
          ${s.length>1?`
            <div style="display:flex; gap:0.6rem; overflow-x:auto; padding-bottom:0.5rem;">
              ${s.map((i,r)=>`
                <button class="gallery-thumb-btn ${r===this.activeGalleryIdx?"active":""}" data-idx="${r}" style="border:${r===this.activeGalleryIdx?"2px solid var(--cyan-glow)":"1px solid var(--border-color)"}; border-radius:8px; overflow:hidden; width:85px; height:60px; flex-shrink:0; background:#090d16; cursor:pointer; padding:0; transition:all 0.2s ease; position:relative;">
                  ${this.isMediaVideo(i.url)?`
                    <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:rgba(56,189,248,0.15); color:var(--cyan-glow); font-size:1.2rem;">▶</div>
                  `:`
                    <img src="${i.url}" style="width:100%; height:100%; object-fit:cover;">
                  `}
                </button>
              `).join("")}
            </div>
          `:""}
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem;">
          <div>
            <h4 style="font-family:var(--font-sans); color:var(--amber-glow); margin-bottom:0.6rem; font-size:0.9rem; font-weight:700;">COMPOSANTS & MATÉRIEL (BOM):</h4>
            <ul style="list-style:none; font-family:var(--font-mono); font-size:0.82rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.45rem;">
              ${t.bom.map(i=>`
                <li style="display:flex; align-items:center; gap:0.5rem;">
                  <span style="color:var(--cyan-glow);">❖</span> ${i}
                </li>
              `).join("")}
            </ul>
          </div>

          <div>
            <h4 style="font-family:var(--font-sans); color:var(--cyan-glow); margin-bottom:0.6rem; font-size:0.9rem; font-weight:700;">SPÉCIFICATIONS TECHNIQUES:</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; font-family:var(--font-mono); font-size:0.75rem;">
              ${Object.entries(t.specs).map(([i,r])=>`
                <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border-color); padding:0.5rem 0.65rem; border-radius:6px;">
                  <div style="color:var(--text-dim);">${i}:</div>
                  <div style="color:var(--text-main); font-weight:600;">${r}</div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("modal-close-btn").addEventListener("click",()=>this.closeModal()),document.querySelectorAll(".gallery-thumb-btn").forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.getAttribute("data-idx"),10);this.activeGalleryIdx=r;const d=s[r],u=document.getElementById("media-viewport"),a=document.getElementById("gallery-caption");u&&d&&(u.innerHTML=this.renderMediaElement(d)),a&&d&&(a.textContent=`📌 ${d.caption}`),document.querySelectorAll(".gallery-thumb-btn").forEach(e=>{e.style.border="1px solid var(--border-color)"}),i.style.border="2px solid var(--cyan-glow)"})})}attachEvents(){this.overlay.addEventListener("click",t=>{t.target===this.overlay&&this.closeModal()})}}document.addEventListener("DOMContentLoaded",()=>{const g=new S("modal-overlay"),t=e=>`
    <div class="project-card">
      <div class="project-img-wrapper">
        <img src="${e.image}" alt="${e.title}">
        <div class="project-badge">${e.badge}</div>
      </div>
      <div class="project-body">
        <div style="font-family:var(--font-mono); font-size:0.75rem; font-weight:600; color:var(--cyan-glow); margin-bottom:0.35rem; letter-spacing:0.5px;">
          ${e.category.toUpperCase()}
        </div>
        <h3 class="project-title">${e.title}</h3>
        <p class="project-desc">${e.description}</p>
        
        <div class="project-specs">
          ${Object.entries(e.specs).map(([l,n])=>`
            <div class="spec-item">
              <span class="spec-label">${l}:</span>
              <span class="spec-val">${n}</span>
            </div>
          `).join("")}
        </div>

        <div class="project-actions" style="flex-direction:column; gap:0.5rem;">
          <button class="btn btn-primary open-pcb-btn" data-project="${e.id}" style="width:100%; justify-content:center;">
            📷 Galerie & Médias (${e.gallery?e.gallery.length:1})
          </button>
          ${e.cadlabUrl?`
            <a href="${e.cadlabUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-amber" style="width:100%; justify-content:center; text-decoration:none; font-size:0.8rem;">
              🔗 Voir sur CADLAB.io
            </a>
          `:""}
          ${e.pdfReport?`
            <a href="${e.pdfReport}" target="_blank" rel="noopener noreferrer" class="btn btn-amber" style="width:100%; justify-content:center; text-decoration:none; font-size:0.8rem;">
              📄 Rapport PDF (${e.pdfTitle})
            </a>
          `:""}
        </div>
      </div>
    </div>
  `,s=(e="all")=>{const l=document.getElementById("projects-container");if(!l)return;let n=C.filter(c=>c.id!=="all");e!=="all"&&(n=n.filter(c=>c.id===e)),l.innerHTML=n.map(c=>{const p=f.filter(v=>v.section===c.id);return p.length===0?"":`
        <div class="project-subsection" style="display:flex; flex-direction:column; gap:1.5rem;">
          <div style="border-left:3px solid var(--cyan-glow); padding:0.85rem 1.25rem; background:rgba(255,255,255,0.02); border-radius:0 10px 10px 0; border:1px solid var(--border-color); border-left-width:3px;">
            <h3 style="font-family:var(--font-sans); font-size:1.3rem; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
              ${c.title} <span style="font-size:0.85rem; color:var(--text-dim); font-weight:400; font-family:var(--font-mono);">(${p.length} projet${p.length>1?"s":""})</span>
            </h3>
            <p style="font-size:0.9rem; color:var(--text-muted); margin:0; line-height:1.5;">${c.desc}</p>
          </div>

          <div class="projects-grid">
            ${p.map(v=>t(v)).join("")}
          </div>
        </div>
      `}).join(""),document.querySelectorAll(".open-pcb-btn").forEach(c=>{c.addEventListener("click",()=>{const p=c.getAttribute("data-project");g.openModal(p)})})};s("all");const m=document.querySelectorAll(".project-tab-btn");m.forEach(e=>{e.addEventListener("click",()=>{const l=e.getAttribute("data-section");m.forEach(n=>{n.classList.remove("active"),n.style.background="rgba(255,255,255,0.03)",n.style.color="var(--text-muted)",n.style.borderColor="var(--border-color)"}),e.classList.add("active"),e.style.background="var(--cyan-glow)",e.style.color="#0b0f17",e.style.borderColor="var(--cyan-glow)",s(l)})});const i=document.getElementById("skills-matrix-grid");i&&(i.innerHTML=y.map(e=>`
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.5rem; backdrop-filter:var(--glass-backdrop); box-shadow:var(--card-shadow);">
        <h3 style="font-family:var(--font-sans); font-size:1.05rem; font-weight:700; color:var(--cyan-glow); margin-bottom:1.25rem; display:flex; align-items:center; gap:0.5rem;">
          <span style="color:var(--amber-glow);">❖</span> ${e.category}
        </h3>
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          ${e.items.map(l=>`
            <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border-color); border-radius:8px; padding:0.65rem 0.9rem;">
              <div style="font-family:var(--font-sans); font-size:0.9rem; font-weight:700; color:var(--text-main); display:flex; align-items:center; gap:0.4rem;">
                <span style="color:var(--green-glow);">✓</span> ${l.name}
              </div>
              <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem; padding-left:1.1rem; line-height:1.4;">
                ${l.desc}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `).join(""));const r=document.getElementById("timeline-container");r&&(r.innerHTML=b.map((e,l)=>`
      <div style="position:relative; padding-left:2.5rem; margin-bottom:2.5rem;">
        <div style="position:absolute; left:0; top:4px; width:12px; height:12px; border-radius:50%; background:var(--cyan-glow); border:2px solid var(--bg-primary);"></div>
        ${l!==b.length-1?'<div style="position:absolute; left:5px; top:18px; bottom:-30px; width:2px; background:rgba(255,255,255,0.08);"></div>':""}
        
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cyan-glow); margin-bottom:0.25rem; font-weight:600;">${e.period}</div>
        <h3 style="font-size:1.2rem; font-weight:700; color:var(--text-main);">${e.role} <span style="color:var(--text-muted); font-size:0.95rem; font-weight:400;">@ ${e.company}</span></h3>
        
        <ul style="margin-top:0.75rem; display:flex; flex-direction:column; gap:0.45rem; color:var(--text-muted); font-size:0.92rem; padding-left:1.2rem; line-height:1.55;">
          ${e.highlights.map(n=>`<li>${n}</li>`).join("")}
        </ul>
      </div>
    `).join(""));const d=document.getElementById("education-container");d&&(d.innerHTML=h.map(e=>`
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.35rem; backdrop-filter:var(--glass-backdrop); box-shadow:var(--card-shadow);">
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--amber-glow); font-weight:600;">${e.period}</div>
        <h4 style="font-size:1.1rem; font-weight:700; color:var(--text-main); margin:0.35rem 0 0.2rem 0;">${e.degree}</h4>
        <div style="color:var(--cyan-glow); font-family:var(--font-sans); font-size:0.88rem; font-weight:600; margin-bottom:0.5rem;">${e.school}</div>
        <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.5;">${e.details}</p>
      </div>
    `).join(""));const u=document.getElementById("hex-contact-form"),a=document.getElementById("contact-submit-btn");u&&a&&u.addEventListener("submit",async e=>{e.preventDefault();const l=a.textContent;a.textContent="⏳ Envoi du message en cours...",a.disabled=!0;const n=new FormData(u);try{(await(await fetch("https://api.web3forms.com/submit",{method:"POST",body:n})).json()).success?(a.textContent="✓ MESSAGE TRANSMIS À FATIMA (REÇU SUR GMAIL) !",a.style.background="var(--green-glow)",a.style.color="#0b0f17",u.reset(),setTimeout(()=>{a.textContent=l,a.style.background="",a.style.color="",a.disabled=!1},4e3)):(a.textContent="❌ Erreur d'envoi. Veuillez réespayer.",a.disabled=!1)}catch{a.textContent="❌ Erreur de connexion réseau.",a.disabled=!1}})});
//# sourceMappingURL=index-7bf282b0.js.map
