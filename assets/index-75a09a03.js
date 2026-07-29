(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const v=[{category:"Développement Logiciel & MLOps",icon:"code",items:[{name:"C / C++ (C++17, Bare-Metal & Linux)",desc:"Programmation système & temps réel"},{name:"Python & Pytest",desc:"Scripting, automatisation & bancs de tests"},{name:"MLOps & Deep Learning (PyTorch, CNN, CUDA)",desc:"Vision & accélération GPU"},{name:"VHDL & Architectures FPGA",desc:"Conception numérique & processeurs IMU"},{name:"Java, UML & Architecture Logicielle",desc:"Modélisation & conception orientée objet"}]},{category:"Systèmes Embarqués & Robotique",icon:"cpu",items:[{name:"ROS2 & NVIDIA Jetson (CUDA / Perception)",desc:"Chaîne de perception ADAS & vision"},{name:"FreeRTOS & Linux Embarqué / RT",desc:"Noyaux temps réel & drivers HAL"},{name:"Microcontrôleurs STM32, ESP32, Arduino",desc:"Firmware embarqué & gestion d'énergie"},{name:"SoC, ARM, BSP & Interface Matériel/Logiciel",desc:"Intégration bas niveau"}]},{category:"Intégration, Validation & Diagnostics (IVVQ)",icon:"tool",items:[{name:"Validation Système, Tests IVVQ & Reporting",desc:"Campagnes de qualification & essais"},{name:"Oscilloscope, Multimètre & Analyseur Logique",desc:"Diagnostic signaux en laboratoire"},{name:"Analyse d'Anomalies HW/SW & Qualification",desc:"Résolution de bugs matériels/logiciels"},{name:"Norme Sécurité ISO26262 & Cycles Agile / Cycle V",desc:"Gestion des processus d'ingénierie"}]},{category:"Protocoles, Outils & CAO PCB",icon:"network",items:[{name:"UART, SPI, I2C, CAN, TCP/IP, UDP, Modbus, MQTT",desc:"Bus industriels & sans-fil"},{name:"KiCad (Conception Schématique + Routage PCB)",desc:"Cartes 4 couches & CAO électronique"},{name:"Git, Azure DevOps & Docker",desc:"Gestion de configuration & conteneurisation"},{name:"Supervision Qt Framework (C++ / Python)",desc:"Supervision & interfaces IHM"}]},{category:"Langues Parlées & Certifications",icon:"globe",items:[{name:"Français",desc:"Niveau C1 (Courant / Professionnel)"},{name:"Anglais",desc:"Niveau C1 (Avancé — TOEIC : 950 / 990)"},{name:"Arabe",desc:"Langue Maternelle"}]}],p=[{role:"Stage Ingénieure Systèmes Embarqués & Vision par Ordinateur",company:"MANITOU GROUP – Ancenis",period:"Avril 2026 – Septembre 2026 (6 mois)",highlights:["Contexte : Développement d'un système ADAS destiné aux engins industriels.","Développement de modules de perception artificielle sous ROS2 sur plateforme NVIDIA Jetson.","Implémentation de la rectification d'images fisheye et projection du nuage de points radars sur les images corrigées.","Intégration GPU avec CUDA & NVIDIA Jetson et développement d'algorithmes Deep Learning (Object Detection).","Campagnes d'essais et de validation sur engins industriels en conditions réelles. Gestion sous Git, Azure DevOps & Docker."]},{role:"Stage Ingénieure Systèmes Embarqués",company:"EQUIUM – Saint-Herblain",period:"Février 2025 – Juillet 2025 (6 mois)",highlights:["Contexte : Conception d'une carte électronique de contrôle-commande pour moteur linéaire (pompe à chaleur nouvelle génération).","Conception électronique complète de la carte : Schéma + Routage PCB sous KiCad.","Développement du firmware C sur STM32 (Drivers HAL) et algorithmes de commande sous FreeRTOS.","Création d'une IHM de supervision avec Qt Framework et intégration du protocole Modbus.","Activités IVVQ, essais en laboratoire, diagnostic aux oscilloscopes & analyseurs logiques selon la norme ISO26262."]},{role:"Stage Ingénieure Systèmes Embarqués",company:"CNRS – Institut Pascal, Clermont-Ferrand",period:"Avril 2024 – Août 2024 (4 mois)",highlights:["Contexte : Nœuds de communication satellitaire basse consommation (surveillance environnementale).","Développement du firmware embarqué sur microcontrôleur STM32 sous RTOS (C++).","Conception complète du PCB sous KiCad (Schéma + Routage) et intégration des interfaces UART & SPI.","Optimisation drastique de la consommation énergétique via les modes sleep basse consommation et lien KIM1 IoT satellitaire."]},{role:"Stage Développeuse Python & IoT",company:"INSIGHT SOLUTIONS – Rabat",period:"Juin 2023 – Août 2023 (2 mois)",highlights:["Contexte : Système IoT industriel pour le suivi en temps réel de production sur convoyeur automatisé.","Développement d'une application embarquée sur ESP32 / ESP8266 sous FreeRTOS.","Programmation de la transmission de données en temps réel via le protocole MQTT vers serveurs MySQL/PostgreSQL."]}],y=[{degree:"Master Intelligence Artificielle & Robotique",school:"Université Clermont Auvergne",period:"2025 – 2026",details:"Filtre de Kalman, Fusion Multi-capteurs, Systèmes Autonomes, Modélisation Robotique, Computer Vision"},{degree:"Diplôme d'Ingénieur – Systèmes Embarqués",school:"Polytech Clermont",period:"2023 – 2025",details:"Linux Embarqué, FreeRTOS, Architecture ARM/SoC, Conception PCB KiCad, IVVQ, VHDL"},{degree:"Diplôme d'Ingénieur – Génie Électrique",school:"École Hassania des Travaux Publics (EHTP)",period:"2021 – 2023",details:"Maintenance industrielle, Automates Programmables (PLC), Siemens TIA Portal, Électrotechnique"}],a=d=>`/Fatima_Elkhadiri_Portfolio/${d.replace(/^\//,"")}`,u=[{id:"adas-jetson-vision",title:"Perception ADAS & Vision Embarquée sur Engins Industriels",category:"ROS2 & NVIDIA Jetson",badge:"Manitou Group / ROS2",image:a("images/manitou_adas_fov_coverage.png"),description:"Système de perception artificielle et sécurité ADAS. Traitement d'images fisheye avec rectification géométrique, projection du nuage de points radars et détection d'objets par Deep Learning accéléré sous CUDA.",specs:{Platform:"NVIDIA Jetson Orin / Xavier",Framework:"ROS2 Humble / C++20",Accelerate:"NVIDIA CUDA / TensorRT",Sensors:"Fisheye Cam + Radar"},bom:["NVIDIA Jetson Embedded AI Board","Wide-Angle Automotive Fisheye Camera","Industrial FMCW Radar Module","CAN-Bus Interface Shield","Docker Container Environment"],gallery:[{url:a("images/manitou_adas_fov_coverage.png"),caption:"Couverture des Zones de Détection (FOV Caméras Fisheye & Radars FMCW) et Sécurité Piétons sur Engin Manitou"},{url:a("images/simplescreenrecorder-2026-07-21_16.11.03.mp4"),caption:"🎥 Démonstration Vidéo : Perception ADAS, Rectification Fisheye & Détection d'Objets en Temps Réel sur NVIDIA Jetson"}]},{id:"equium-linear-motor",title:"Carte Électronique de Contrôle-Commande & Routage PCB KiCad",category:"Électronique & Firmware STM32",badge:"Equium / KiCad & C",image:a("images/equium_pcb_3d.png"),description:"Conception complète de la carte de pilotage d'un moteur linéaire pour pompe à chaleur nouvelle génération. Schéma & routage PCB 4-couches sous KiCad, firmware C (Drivers HAL STM32), FreeRTOS et IHM de supervision Qt.",specs:{MCU:"STM32F4 / ARM Cortex-M4",EDA:"KiCad 8.0 (CAO PCB)",Protocol:"Modbus RTU / RS485",Safety:"ISO 26262 Compliant"},bom:["Microcontrôleur STM32F407VGT6","Drivers MOSFET H-Bridge Haute Puissance","Capteurs de Courant Effet Hall","Transceiver RS485 / Modbus","Régulateurs DC-DC Haute Efficacité"],gallery:[{url:a("images/equium_pcb_3d.png"),caption:"Vue 3D Carte Principale Equium Drive Motor A6"},{url:a("images/equium_control_diagram.png"),caption:"Diagramme Algorithmique de Commande du Moteur Linéaire (Asservissement Position/Courant)"},{url:a("images/equium_kicad_layout.png"),caption:"Routage PCB KiCad - Pistes de Cuivre & SOT23"},{url:a("images/equium_sensor_board.png"),caption:"Vue 3D Carte Fille Capteurs & Connecteur U1/U2"},{url:a("images/equium_qt_dashboard.png"),caption:"IHM de Contrôle & Supervision Développée en C++/Qt"}]},{id:"satellite-iot-node",title:"Nœuds Satellitaires IoT Ultra-Basse Consommation",category:"IoT Satellitaire & PCB",badge:"CNRS Institut Pascal",image:a("images/sat_field_deployment.jpg"),description:"Nœuds de communication satellitaire autonomes pour la surveillance environnementale (lac/tourbière, Projet ANR SPAGNETO). Conception PCB KiCad, carte STM32 Nucleo, alimentation solaire/batterie, modem Kinéis & portail ARGOS.",specs:{MCU:"STM32L073RZ (Nucleo 64)",Link:"Modem Satellitaire Kinéis / ARGOS",Buses:"UART, SPI, I2C, ADC Monitoring",Power:"Panneau Solaire + Chargeur Li-Ion"},bom:["Carte STM32 Nucleo-64 (STM32L073RZ)","Modem Transmetteur Satellitaire Kinéis","Capteur de Température Thermo 3 Click (I2C)","Capteur GPS UART & MicroSD SPI Click","Chargeur Batterie BQ24210 & Protection ESD TPD4S014"],pdfReport:a("docs/Rapport_de_stage_LPCA.pdf"),pdfTitle:"Rapport_de_stage_LPCA.pdf",gallery:[{url:a("images/sat_field_deployment.jpg"),caption:"Station de Mesure & Nœud Satellitaire Déployé en Condition Réelle (Boîtier IP67 sur Lac / Tourbière — Projet ANR SPAGNETO)"},{url:a("images/sat_hardware_architecture.png"),caption:"Architecture Matérielle Globale (STM32L073RZ, Modem Kinéis, Capteurs I2C/GPS/SPI SD & Diviseur de Tension Batterie)"},{url:a("images/sat_usb_protection_schematic.png"),caption:"Schéma KiCad : Connecteur USB & Puce de Protection ESD TPD4S014DSQR"},{url:a("images/sat_battery_charger_schematic.png"),caption:"Schéma KiCad : Gestion d'Alimentation Solaire / USB & Chargeur Batterie Li-Ion BQ24210"},{url:a("images/sat_argos_portal.png"),caption:"Portail Web ARGOS / Kinéis : Suivi des Passages Satellites, Prédictions & Azimut"}]},{id:"liver-segmentation-dl",title:"Segmentation du Foie Humain par Apprentissage Continu",category:"Deep Learning & MLOps",badge:"PyTorch & Medical AI",image:a("images/liver_segmentation_prediction.png"),description:"Outil d'IA médicale pour la chirurgie mini-invasive du cancer. Segmentation automatique des images et vidéos laparoscopiques du foie (format DICOM, SAM-CL, S3R, Docker, PyTorch).",specs:{Framework:"PyTorch / Docker",Models:"SAM-CL, S3R Continual",Formats:"Medical DICOM / CT Scans",Application:"Chirurgie Laparoscopique"},bom:["Stack PyTorch CUDA MLOps","SAM-CL Segment Anything Model","Lecteur Imagerie DICOM 3.0","Conteneur Docker Portable"],gallery:[{url:a("images/liver_segmentation_prediction.png"),caption:"Résultat de Segmentation Laparoscopique du Foie : Image Originale (Vidéo Laparoscopique), Vérité Terrain (Ground Truth) & Prédiction du Modèle Deep Learning (SAM-CL / PyTorch)"}]},{id:"pepper-robot-imitation",title:"Imitation des Gestes Humains par Robot Humanoïde Pepper",category:"Robotique Humanoïde & Vision",badge:"Robot Pepper / Perception",image:a("images/pepper_robot_test_miroir.png"),description:"Application d'imitation des gestes humains en temps réel pour le robot humanoïde Pepper. Modélisation géométrique des membres, chaîne de perception (pose estimation) et commande en coordonnées articulaires (prise d'un objet).",specs:{Robot:"Pepper Humanoid Platform",Pipeline:"Perception & Kinematics",Control:"Real-time Joint Control",Math:"Inverse Kinematics (IK)"},bom:["Robot Humanoïde Aldebaran Pepper","Caméras 3D de Perception","Serveur de Calcul Cinématique"],pdfReport:a("docs/Rapport_projet_Miroir_Pepper_GE5A.pdf"),pdfTitle:"Rapport_projet_Miroir_Pepper_GE5A.pdf",gallery:[{url:a("images/pepper_robot_test_miroir.png"),caption:"Test Miroir Pepper & Prise d'un Objet : Suivi de Squelette / Pose Humaine en Temps Réel et Commande Articulaire du Robot Pepper"}]},{id:"fpga-imu-processor",title:"Centrale Inertielle (IMU) sur FPGA en VHDL",category:"VHDL & FPGA Hardware",badge:"VHDL / FPGA",image:a("images/fpga_de10_lite_imu.png"),description:"Conception et implémentation complète en VHDL d'un processeur dédié au traitement rapide des données d'une centrale inertielle 9-axes (Accéléromètre, Gyroscope, Magnétomètre) sur carte Terasic DE10-Lite.",specs:{Language:"VHDL-2008",Hardware:"FPGA Terasic DE10-Lite (MAX 10)",Interface:"SPI Master Hardware",Filter:"Fixed-Point Math Pipeline"},bom:["Carte de Développement FPGA Terasic DE10-Lite","Capteur IMU 9-Axes MPU-9250 / SPI","Afficheurs 7-Séquences LED & Switches"],gallery:[{url:a("images/fpga_de10_lite_imu.png"),caption:"Test & Démonstration du Processeur VHDL sur Carte FPGA Terasic DE10-Lite (Affichage 7-Séquences des Mesures Angle/Accélération IMU)"}]}];class f{constructor(t){this.overlay=document.getElementById(t),this.overlay&&(this.activeProject=null,this.activeGalleryIdx=0,this.init())}init(){this.attachEvents()}openModal(t){const n=u.find(l=>l.id===t);n&&(this.activeProject=n,this.activeGalleryIdx=0,this.render(),this.overlay.classList.add("active"))}closeModal(){this.overlay.classList.remove("active")}isMediaVideo(t){return t?t.endsWith(".mp4")||t.endsWith(".webm")||t.endsWith(".ogg"):!1}renderMediaElement(t){return this.isMediaVideo(t.url)?`<video id="gallery-main-media" controls autoplay loop muted style="max-width:100%; max-height:420px; width:auto; height:auto; object-fit:contain; display:block;">
        <source src="${t.url}" type="video/mp4">
        Votre navigateur ne prend pas en charge la lecture de vidéos MP4.
      </video>`:`<img id="gallery-main-media" src="${t.url}" alt="${t.caption}" style="max-width:100%; max-height:420px; width:auto; height:auto; object-fit:contain; display:block; transition:all 0.3s ease;">`}render(){if(!this.activeProject)return;const t=this.activeProject,n=t.gallery||[{url:t.image,caption:t.title}],l=n[this.activeGalleryIdx]||n[0];this.overlay.innerHTML=`
      <div class="modal-container">
        <button class="modal-close" id="modal-close-btn">&times;</button>
        
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cyan-glow); margin-bottom:0.35rem;">
          SYSTEM DIAGNOSTIC & HARDWARE INSPECTOR
        </div>
        <h2 style="font-size:1.8rem; margin-bottom:1rem; font-weight:800; color:var(--text-main);">${t.title}</h2>
        
        ${t.pdfReport?`
          <div style="background:rgba(255,176,0,0.08); border:1px solid var(--amber-glow); border-radius:var(--radius-md); padding:0.85rem 1.25rem; margin-bottom:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            <div>
              <div style="font-family:var(--font-mono); font-size:0.85rem; font-weight:700; color:var(--amber-glow);">📄 RAPPORT TECHNIQUE DE PROJET DISPONIBLE</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">${t.pdfTitle}</div>
            </div>
            <a href="${t.pdfReport}" target="_blank" rel="noopener noreferrer" class="btn btn-amber" style="text-decoration:none;">
              📥 Ouvrir / Télécharger le Rapport (PDF)
            </a>
          </div>
        `:""}

        <!-- Media Gallery Main Display (Supports Images & MP4 Videos) -->
        <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem;">
          <div id="media-viewport" style="border:1px solid var(--border-color); border-radius:var(--radius-md); overflow:hidden; background:#000; position:relative; min-height:300px; max-height:450px; display:flex; align-items:center; justify-content:center;">
            ${this.renderMediaElement(l)}
          </div>
          
          <div id="gallery-caption" style="font-family:var(--font-mono); font-size:0.85rem; color:var(--cyan-glow); text-align:center; background:rgba(0,240,255,0.05); padding:0.5rem 1rem; border-radius:6px; border:1px solid var(--border-color);">
            📌 ${l.caption}
          </div>

          <!-- Thumbnails Selector if multiple items available -->
          ${n.length>1?`
            <div style="display:flex; gap:0.6rem; overflow-x:auto; padding-bottom:0.5rem;">
              ${n.map((i,o)=>`
                <button class="gallery-thumb-btn ${o===this.activeGalleryIdx?"active":""}" data-idx="${o}" style="border:${o===this.activeGalleryIdx?"2px solid var(--cyan-glow)":"1px solid var(--border-color)"}; border-radius:6px; overflow:hidden; width:85px; height:60px; flex-shrink:0; background:#000; cursor:pointer; padding:0; transition:all 0.2s ease; position:relative;">
                  ${this.isMediaVideo(i.url)?`
                    <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:rgba(0,240,255,0.2); color:var(--cyan-glow); font-size:1.2rem;">▶</div>
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
            <h4 style="font-family:var(--font-mono); color:var(--amber-glow); margin-bottom:0.5rem; font-size:0.9rem;">COMPOSANTS & MATÉRIEL (BOM):</h4>
            <ul style="list-style:none; font-family:var(--font-mono); font-size:0.82rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.4rem;">
              ${t.bom.map(i=>`
                <li style="display:flex; align-items:center; gap:0.5rem;">
                  <span style="color:var(--cyan-glow);">❖</span> ${i}
                </li>
              `).join("")}
            </ul>
          </div>

          <div>
            <h4 style="font-family:var(--font-mono); color:var(--cyan-glow); margin-bottom:0.5rem; font-size:0.9rem;">SPÉCIFICATIONS TECHNIQUES:</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; font-family:var(--font-mono); font-size:0.75rem;">
              ${Object.entries(t.specs).map(([i,o])=>`
                <div style="background:rgba(0,240,255,0.05); border:1px solid var(--border-color); padding:0.5rem 0.6rem; border-radius:4px;">
                  <div style="color:var(--text-dim);">${i}:</div>
                  <div style="color:var(--text-cyan); font-weight:600;">${o}</div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("modal-close-btn").addEventListener("click",()=>this.closeModal()),document.querySelectorAll(".gallery-thumb-btn").forEach(i=>{i.addEventListener("click",()=>{const o=parseInt(i.getAttribute("data-idx"),10);this.activeGalleryIdx=o;const r=n[o],c=document.getElementById("media-viewport"),e=document.getElementById("gallery-caption");c&&r&&(c.innerHTML=this.renderMediaElement(r)),e&&r&&(e.textContent=`📌 ${r.caption}`),document.querySelectorAll(".gallery-thumb-btn").forEach(s=>{s.style.border="1px solid var(--border-color)"}),i.style.border="2px solid var(--cyan-glow)"})})}attachEvents(){this.overlay.addEventListener("click",t=>{t.target===this.overlay&&this.closeModal()})}}document.addEventListener("DOMContentLoaded",()=>{const d=new f("modal-overlay"),t=document.getElementById("projects-grid");t&&(t.innerHTML=u.map(e=>`
      <div class="project-card">
        <div class="project-img-wrapper">
          <img src="${e.image}" alt="${e.title}">
          <div class="project-badge">${e.badge}</div>
        </div>
        <div class="project-body">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan-glow); margin-bottom:0.25rem;">
            ${e.category.toUpperCase()}
          </div>
          <h3 class="project-title">${e.title}</h3>
          <p class="project-desc">${e.description}</p>
          
          <div class="project-specs">
            ${Object.entries(e.specs).map(([s,m])=>`
              <div class="spec-item">
                <span class="spec-label">${s}:</span>
                <span class="spec-val">${m}</span>
              </div>
            `).join("")}
          </div>

          <div class="project-actions" style="flex-direction:column; gap:0.5rem;">
            <button class="btn btn-primary open-pcb-btn" data-project="${e.id}" style="width:100%;">
              ⚡ Galerie & Médias (${e.gallery?e.gallery.length:1})
            </button>
            ${e.pdfReport?`
              <a href="${e.pdfReport}" target="_blank" rel="noopener noreferrer" class="btn btn-amber" style="width:100%; justify-content:center; text-decoration:none; font-size:0.78rem;">
                📄 Rapport PDF (${e.pdfTitle})
              </a>
            `:""}
          </div>
        </div>
      </div>
    `).join(""),document.querySelectorAll(".open-pcb-btn").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-project");d.openModal(s)})}));const n=document.getElementById("skills-matrix-grid");n&&(n.innerHTML=v.map(e=>`
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-lg); padding:1.5rem; backdrop-filter:var(--glass-backdrop);">
        <h3 style="font-family:var(--font-mono); font-size:1.05rem; color:var(--cyan-glow); margin-bottom:1.25rem; display:flex; align-items:center; gap:0.5rem;">
          <span style="color:var(--amber-glow);">❖</span> ${e.category}
        </h3>
        <div style="display:flex; flex-direction:column; gap:0.85rem;">
          ${e.items.map(s=>`
            <div style="background:rgba(0,240,255,0.03); border:1px solid rgba(0,240,255,0.1); border-radius:6px; padding:0.6rem 0.85rem;">
              <div style="font-family:var(--font-mono); font-size:0.88rem; font-weight:700; color:var(--text-main); display:flex; align-items:center; gap:0.4rem;">
                <span style="color:var(--green-glow);">✓</span> ${s.name}
              </div>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.2rem; padding-left:1.1rem;">
                ${s.desc}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `).join(""));const l=document.getElementById("timeline-container");l&&(l.innerHTML=p.map((e,s)=>`
      <div style="position:relative; padding-left:2.5rem; margin-bottom:2.5rem;">
        <div style="position:absolute; left:0; top:4px; width:14px; height:14px; border-radius:50%; background:var(--cyan-glow); box-shadow:0 0 10px var(--cyan-glow); border:2px solid #000;"></div>
        ${s!==p.length-1?'<div style="position:absolute; left:6px; top:18px; bottom:-30px; width:2px; background:rgba(0,240,255,0.2);"></div>':""}
        
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cyan-glow); margin-bottom:0.25rem;">${e.period}</div>
        <h3 style="font-size:1.25rem; font-weight:700; color:var(--text-main);">${e.role} <span style="color:var(--text-muted); font-size:1rem; font-weight:400;">@ ${e.company}</span></h3>
        
        <ul style="margin-top:0.75rem; display:flex; flex-direction:column; gap:0.4rem; color:var(--text-muted); font-size:0.92rem; padding-left:1.2rem;">
          ${e.highlights.map(m=>`<li>${m}</li>`).join("")}
        </ul>
      </div>
    `).join(""));const i=document.getElementById("education-container");i&&(i.innerHTML=y.map(e=>`
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.25rem; backdrop-filter:var(--glass-backdrop);">
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--amber-glow); font-weight:600;">${e.period}</div>
        <h4 style="font-size:1.1rem; font-weight:700; color:var(--text-main); margin:0.25rem 0;">${e.degree}</h4>
        <div style="color:var(--cyan-glow); font-family:var(--font-mono); font-size:0.85rem; margin-bottom:0.5rem;">${e.school}</div>
        <p style="color:var(--text-muted); font-size:0.88rem;">${e.details}</p>
      </div>
    `).join(""));const o=document.getElementById("hex-contact-form"),r=document.getElementById("contact-submit-btn");o&&r&&o.addEventListener("submit",async e=>{e.preventDefault();const s=r.textContent;r.textContent="⏳ Envoi du message en cours...",r.disabled=!0;const m=new FormData(o);try{(await(await fetch("https://api.web3forms.com/submit",{method:"POST",body:m})).json()).success?(r.textContent="⚡ MESSAGE TRANSMIS À FATIMA (REÇU SUR GMAIL) !",r.style.background="var(--green-glow)",r.style.color="#000",o.reset(),setTimeout(()=>{r.textContent=s,r.style.background="",r.style.color="",r.disabled=!1},4e3)):(r.textContent="❌ Erreur d'envoi. Veuillez réespayer.",r.disabled=!1)}catch{r.textContent="❌ Erreur de connexion réseau.",r.disabled=!1}});const c=document.getElementById("telemetry-cpu-load");setInterval(()=>{if(c){const e=(11+Math.random()*4).toFixed(1);c.textContent=`${e}%`}},2e3)});
//# sourceMappingURL=index-75a09a03.js.map
