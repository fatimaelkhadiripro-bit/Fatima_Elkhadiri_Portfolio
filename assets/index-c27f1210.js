(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const u=[{category:"Développement Logiciel & MLOps",icon:"code",items:[{name:"C / C++ (C++17, Bare-Metal & Linux)",desc:"Programmation système & temps réel"},{name:"Python & Pytest",desc:"Scripting, automatisation & bancs de tests"},{name:"MLOps & Deep Learning (PyTorch, CNN, CUDA)",desc:"Vision & accélération GPU"},{name:"VHDL & Architectures FPGA",desc:"Conception numérique & processeurs IMU"},{name:"Java, UML & Architecture Logicielle",desc:"Modélisation & conception orientée objet"}]},{category:"Systèmes Embarqués & Robotique",icon:"cpu",items:[{name:"ROS2 & NVIDIA Jetson (CUDA / Perception)",desc:"Chaîne de perception ADAS & vision"},{name:"FreeRTOS & Linux Embarqué / RT",desc:"Noyaux temps réel & drivers HAL"},{name:"Microcontrôleurs STM32, ESP32, Arduino",desc:"Firmware embarqué & gestion d'énergie"},{name:"SoC, ARM, BSP & Interface Matériel/Logiciel",desc:"Intégration bas niveau"}]},{category:"Intégration, Validation & Diagnostics (IVVQ)",icon:"tool",items:[{name:"Validation Système, Tests IVVQ & Reporting",desc:"Campagnes de qualification & essais"},{name:"Oscilloscope, Multimètre & Analyseur Logique",desc:"Diagnostic signaux en laboratoire"},{name:"Analyse d'Anomalies HW/SW & Qualification",desc:"Résolution de bugs matériels/logiciels"},{name:"Norme Sécurité ISO26262 & Cycles Agile / Cycle V",desc:"Gestion des processus d'ingénierie"}]},{category:"Protocoles, Outils & CAO PCB",icon:"network",items:[{name:"UART, SPI, I2C, CAN, TCP/IP, UDP, Modbus, MQTT",desc:"Bus industriels & sans-fil"},{name:"KiCad (Conception Schématique + Routage PCB)",desc:"Cartes 4 couches & CAO électronique"},{name:"Git, Azure DevOps & Docker",desc:"Gestion de configuration & conteneurisation"},{name:"Supervision Qt Framework (C++ / Python)",desc:"Supervision & interfaces IHM"}]}],m=[{role:"Stage Ingénieure Systèmes Embarqués & Vision par Ordinateur",company:"MANITOU GROUP – Ancenis",period:"Avril 2026 – Septembre 2026 (6 mois)",highlights:["Contexte : Développement d'un système ADAS destiné aux engins industriels.","Développement de modules de perception artificielle sous ROS2 sur plateforme NVIDIA Jetson.","Implémentation de la rectification d'images fisheye et projection du nuage de points radars sur les images corrigées.","Intégration GPU avec CUDA & NVIDIA Jetson et développement d'algorithmes Deep Learning (Object Detection).","Campagnes d'essais et de validation sur engins industriels en conditions réelles. Gestion sous Git, Azure DevOps & Docker."]},{role:"Stage Ingénieure Systèmes Embarqués",company:"EQUIUM – Saint-Herblain",period:"Février 2025 – Juillet 2025 (6 mois)",highlights:["Contexte : Conception d'une carte électronique de contrôle-commande pour moteur linéaire (pompe à chaleur nouvelle génération).","Conception électronique complète de la carte : Schéma + Routage PCB sous KiCad.","Développement du firmware C sur STM32 (Drivers HAL) et algorithmes de commande sous FreeRTOS.","Création d'une IHM de supervision avec Qt Framework et intégration du protocole Modbus.","Activités IVVQ, essais en laboratoire, diagnostic aux oscilloscopes & analyseurs logiques selon la norme ISO26262."]},{role:"Stage Ingénieure Systèmes Embarqués",company:"CNRS – Institut Pascal, Clermont-Ferrand",period:"Avril 2024 – Août 2024 (4 mois)",highlights:["Contexte : Nœuds de communication satellitaire basse consommation (surveillance environnementale).","Développement du firmware embarqué sur microcontrôleur STM32 sous RTOS (C++).","Conception complète du PCB sous KiCad (Schéma + Routage) et intégration des interfaces UART & SPI.","Optimisation drastique de la consommation énergétique via les modes sleep basse consommation et lien KIM1 IoT satellitaire."]},{role:"Stage Développeuse Python & IoT",company:"INSIGHT SOLUTIONS – Rabat",period:"Juin 2023 – Août 2023 (2 mois)",highlights:["Contexte : Système IoT industriel pour le suivi en temps réel de production sur convoyeur automatisé.","Développement d'une application embarquée sur ESP32 / ESP8266 sous FreeRTOS.","Programmation de la transmission de données en temps réel via le protocole MQTT vers serveurs MySQL/PostgreSQL."]}],g=[{degree:"Master Intelligence Artificielle & Robotique",school:"Université Clermont Auvergne",period:"2025 – 2026",details:"Filtre de Kalman, Fusion Multi-capteurs, Systèmes Autonomes, Modélisation Robotique, Computer Vision"},{degree:"Diplôme d'Ingénieur – Systèmes Embarqués",school:"Polytech Clermont",period:"2023 – 2025",details:"Linux Embarqué, FreeRTOS, Architecture ARM/SoC, Conception PCB KiCad, IVVQ, VHDL"},{degree:"Diplôme d'Ingénieur – Génie Électrique",school:"École Hassania des Travaux Publics (EHTP)",period:"2021 – 2023",details:"Maintenance industrielle, Automates Programmables (PLC), Siemens TIA Portal, Électrotechnique"}],r=d=>`/Fatima_Elkhadiri_Portfolio/${d.replace(/^\//,"")}`,p=[{id:"adas-jetson-vision",title:"Perception ADAS & Vision Embarquée sur Engins Industriels",category:"ROS2 & NVIDIA Jetson",badge:"Manitou Group / ROS2",image:r("images/adas_jetson_vision.png"),description:"Système de perception artificielle et sécurité ADAS. Traitement d'images fisheye avec rectification géométrique, projection du nuage de points radars et détection d'objets par Deep Learning accéléré sous CUDA.",specs:{Platform:"NVIDIA Jetson Orin / Xavier",Framework:"ROS2 Humble / C++20",Accelerate:"NVIDIA CUDA / TensorRT",Sensors:"Fisheye Cam + Radar"},bom:["NVIDIA Jetson Embedded AI Board","Wide-Angle Automotive Fisheye Camera","Industrial FMCW Radar Module","CAN-Bus Interface Shield","Docker Container Environment"],gallery:[{url:r("images/adas_jetson_vision.png"),caption:"Plateforme NVIDIA Jetson ADAS & Vision"}]},{id:"equium-linear-motor",title:"Carte Électronique de Contrôle-Commande & Routage PCB KiCad",category:"Électronique & Firmware STM32",badge:"Equium / KiCad & C",image:r("images/equium_pcb_3d.png"),description:"Conception complète de la carte de pilotage d'un moteur linéaire pour pompe à chaleur nouvelle génération. Schéma & routage PCB 4-couches sous KiCad, firmware C (Drivers HAL STM32), FreeRTOS et IHM de supervision Qt.",specs:{MCU:"STM32F4 / ARM Cortex-M4",EDA:"KiCad 8.0 (CAO PCB)",Protocol:"Modbus RTU / RS485",Safety:"ISO 26262 Compliant"},bom:["Microcontrôleur STM32F407VGT6","Drivers MOSFET H-Bridge Haute Puissance","Capteurs de Courant Effet Hall","Transceiver RS485 / Modbus","Régulateurs DC-DC Haute Efficacité"],gallery:[{url:r("images/equium_pcb_3d.png"),caption:"Vue 3D Carte Principale Equium Drive Motor A6"},{url:r("images/equium_control_diagram.png"),caption:"Diagramme Algorithmique de Commande du Moteur Linéaire (Asservissement Position/Courant)"},{url:r("images/equium_kicad_layout.png"),caption:"Routage PCB KiCad - Pistes de Cuivre & SOT23"},{url:r("images/equium_sensor_board.png"),caption:"Vue 3D Carte Fille Capteurs & Connecteur U1/U2"},{url:r("images/equium_qt_dashboard.png"),caption:"IHM de Contrôle & Supervision Développée en C++/Qt"}]},{id:"satellite-iot-node",title:"Nœuds Satellitaires IoT Ultra-Basse Consommation",category:"IoT Satellitaire & PCB",badge:"CNRS Institut Pascal",image:r("images/sat_field_deployment.jpg"),description:"Nœuds de communication satellitaire autonomes pour la surveillance environnementale (lac/tourbière, Projet ANR SPAGNETO). Conception PCB KiCad, carte STM32 Nucleo, alimentation solaire/batterie, modem Kinéis & portail ARGOS.",specs:{MCU:"STM32L073RZ (Nucleo 64)",Link:"Modem Satellitaire Kinéis / ARGOS",Buses:"UART, SPI, I2C, ADC Monitoring",Power:"Panneau Solaire + Chargeur Li-Ion"},bom:["Carte STM32 Nucleo-64 (STM32L073RZ)","Modem Transmetteur Satellitaire Kinéis","Capteur de Température Thermo 3 Click (I2C)","Capteur GPS UART & MicroSD SPI Click","Chargeur Batterie BQ24210 & Protection ESD TPD4S014"],pdfReport:r("docs/Rapport_de_stage_LPCA.pdf"),pdfTitle:"Rapport_de_stage_LPCA.pdf",gallery:[{url:r("images/sat_field_deployment.jpg"),caption:"Station de Mesure & Nœud Satellitaire Déployé en Condition Réelle (Boîtier IP67 sur Lac / Tourbière — Projet ANR SPAGNETO)"},{url:r("images/sat_hardware_architecture.png"),caption:"Architecture Matérielle Globale (STM32L073RZ, Modem Kinéis, Capteurs I2C/GPS/SPI SD & Diviseur de Tension Batterie)"},{url:r("images/sat_usb_protection_schematic.png"),caption:"Schéma KiCad : Connecteur USB & Puce de Protection ESD TPD4S014DSQR"},{url:r("images/sat_battery_charger_schematic.png"),caption:"Schéma KiCad : Gestion d'Alimentation Solaire / USB & Chargeur Batterie Li-Ion BQ24210"},{url:r("images/sat_argos_portal.png"),caption:"Portail Web ARGOS / Kinéis : Suivi des Passages Satellites, Prédictions & Azimut"}]},{id:"liver-segmentation-dl",title:"Segmentation du Foie Humain par Apprentissage Continu",category:"Deep Learning & MLOps",badge:"PyTorch & Medical AI",image:r("images/liver_segmentation_prediction.png"),description:"Outil d'IA médicale pour la chirurgie mini-invasive du cancer. Segmentation automatique des images et vidéos laparoscopiques du foie (format DICOM, SAM-CL, S3R, Docker, PyTorch).",specs:{Framework:"PyTorch / Docker",Models:"SAM-CL, S3R Continual",Formats:"Medical DICOM / CT Scans",Application:"Chirurgie Laparoscopique"},bom:["Stack PyTorch CUDA MLOps","SAM-CL Segment Anything Model","Lecteur Imagerie DICOM 3.0","Conteneur Docker Portable"],gallery:[{url:r("images/liver_segmentation_prediction.png"),caption:"Résultat de Segmentation Laparoscopique du Foie : Image Originale (Vidéo Laparoscopique), Vérité Terrain (Ground Truth) & Prédiction du Modèle Deep Learning (SAM-CL / PyTorch)"}]},{id:"pepper-robot-imitation",title:"Imitation des Gestes Humains par Robot Humanoïde Pepper",category:"Robotique Humanoïde & Vision",badge:"Robot Pepper / Perception",image:r("images/rtos_flight_controller.png"),description:"Application d'imitation des gestes humains en temps réel pour le robot humanoïde Pepper. Modélisation géométrique des membres, chaîne de perception et commande en coordonnées articulaires.",specs:{Robot:"Pepper Humanoid Platform",Pipeline:"Perception & Kinematics",Control:"Real-time Joint Control",Math:"Inverse Kinematics (IK)"},bom:["Robot Humanoïde Aldebaran Pepper","Caméras 3D de Perception","Serveur de Calcul Cinématique"],pdfReport:r("docs/Rapport_projet_Miroir_Pepper_GE5A.pdf"),pdfTitle:"Rapport_projet_Miroir_Pepper_GE5A.pdf",gallery:[{url:r("images/rtos_flight_controller.png"),caption:"Plateforme Robot Humanoïde Pepper"}]},{id:"fpga-imu-processor",title:"Centrale Inertielle (IMU) sur FPGA en VHDL",category:"VHDL & FPGA Hardware",badge:"VHDL / FPGA",image:r("images/can_bus_gateway.png"),description:"Conception et implémentation complète en VHDL d'un processeur dédié au traitement rapide des données d'une centrale inertielle 9-axes (Accéléromètre, Gyroscope, Magnétomètre).",specs:{Language:"VHDL-2008",Hardware:"FPGA Xilinx / Intel Altera",Interface:"SPI Master Hardware",Filter:"Fixed-Point Math Pipeline"},bom:["Carte de Développement FPGA","Capteur IMU 9-Axes MPU-9250","Banc de Test Logic Analyzer"],gallery:[{url:r("images/can_bus_gateway.png"),caption:"Implémentation VHDL Processeur IMU"}]}];class v{constructor(o){this.overlay=document.getElementById(o),this.overlay&&(this.activeProject=null,this.activeGalleryIdx=0,this.init())}init(){this.attachEvents()}openModal(o){const n=p.find(l=>l.id===o);n&&(this.activeProject=n,this.activeGalleryIdx=0,this.render(),this.overlay.classList.add("active"))}closeModal(){this.overlay.classList.remove("active")}render(){if(!this.activeProject)return;const o=this.activeProject,n=o.gallery||[{url:o.image,caption:o.title}],l=n[this.activeGalleryIdx]||n[0];this.overlay.innerHTML=`
      <div class="modal-container">
        <button class="modal-close" id="modal-close-btn">&times;</button>
        
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cyan-glow); margin-bottom:0.35rem;">
          SYSTEM DIAGNOSTIC & HARDWARE INSPECTOR
        </div>
        <h2 style="font-size:1.8rem; margin-bottom:1rem; font-weight:800; color:var(--text-main);">${o.title}</h2>
        
        ${o.pdfReport?`
          <div style="background:rgba(255,176,0,0.08); border:1px solid var(--amber-glow); border-radius:var(--radius-md); padding:0.85rem 1.25rem; margin-bottom:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            <div>
              <div style="font-family:var(--font-mono); font-size:0.85rem; font-weight:700; color:var(--amber-glow);">📄 RAPPORT TECHNIQUE DE PROJET DISPONIBLE</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">${o.pdfTitle}</div>
            </div>
            <a href="${o.pdfReport}" target="_blank" rel="noopener noreferrer" class="btn btn-amber" style="text-decoration:none;">
              📥 Ouvrir / Télécharger le Rapport (PDF)
            </a>
          </div>
        `:""}

        <!-- Media Gallery Main Display -->
        <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem;">
          <div style="border:1px solid var(--border-color); border-radius:var(--radius-md); overflow:hidden; background:#000; position:relative; min-height:300px; max-height:450px; display:flex; align-items:center; justify-content:center;">
            <img id="gallery-main-img" src="${l.url}" alt="${l.caption}" style="max-width:100%; max-height:420px; width:auto; height:auto; object-fit:contain; display:block; transition:all 0.3s ease;">
          </div>
          
          <div id="gallery-caption" style="font-family:var(--font-mono); font-size:0.85rem; color:var(--cyan-glow); text-align:center; background:rgba(0,240,255,0.05); padding:0.5rem 1rem; border-radius:6px; border:1px solid var(--border-color);">
            📌 ${l.caption}
          </div>

          <!-- Thumbnails Selector if multiple images available -->
          ${n.length>1?`
            <div style="display:flex; gap:0.6rem; overflow-x:auto; padding-bottom:0.5rem;">
              ${n.map((t,i)=>`
                <button class="gallery-thumb-btn ${i===this.activeGalleryIdx?"active":""}" data-idx="${i}" style="border:${i===this.activeGalleryIdx?"2px solid var(--cyan-glow)":"1px solid var(--border-color)"}; border-radius:6px; overflow:hidden; width:85px; height:60px; flex-shrink:0; background:#000; cursor:pointer; padding:0; transition:all 0.2s ease;">
                  <img src="${t.url}" style="width:100%; height:100%; object-fit:cover;">
                </button>
              `).join("")}
            </div>
          `:""}
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem;">
          <div>
            <h4 style="font-family:var(--font-mono); color:var(--amber-glow); margin-bottom:0.5rem; font-size:0.9rem;">COMPOSANTS & MATÉRIEL (BOM):</h4>
            <ul style="list-style:none; font-family:var(--font-mono); font-size:0.82rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.4rem;">
              ${o.bom.map(t=>`
                <li style="display:flex; align-items:center; gap:0.5rem;">
                  <span style="color:var(--cyan-glow);">❖</span> ${t}
                </li>
              `).join("")}
            </ul>
          </div>

          <div>
            <h4 style="font-family:var(--font-mono); color:var(--cyan-glow); margin-bottom:0.5rem; font-size:0.9rem;">SPÉCIFICATIONS TECHNIQUES:</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; font-family:var(--font-mono); font-size:0.75rem;">
              ${Object.entries(o.specs).map(([t,i])=>`
                <div style="background:rgba(0,240,255,0.05); border:1px solid var(--border-color); padding:0.5rem 0.6rem; border-radius:4px;">
                  <div style="color:var(--text-dim);">${t}:</div>
                  <div style="color:var(--text-cyan); font-weight:600;">${i}</div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("modal-close-btn").addEventListener("click",()=>this.closeModal()),document.querySelectorAll(".gallery-thumb-btn").forEach(t=>{t.addEventListener("click",()=>{const i=parseInt(t.getAttribute("data-idx"),10);this.activeGalleryIdx=i;const s=n[i],e=document.getElementById("gallery-main-img"),a=document.getElementById("gallery-caption");e&&s&&(e.src=s.url,e.alt=s.caption),a&&s&&(a.textContent=`📌 ${s.caption}`),document.querySelectorAll(".gallery-thumb-btn").forEach(c=>{c.style.border="1px solid var(--border-color)"}),t.style.border="2px solid var(--cyan-glow)"})})}attachEvents(){this.overlay.addEventListener("click",o=>{o.target===this.overlay&&this.closeModal()})}}document.addEventListener("DOMContentLoaded",()=>{const d=new v("modal-overlay"),o=document.getElementById("projects-grid");o&&(o.innerHTML=p.map(e=>`
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
            ${Object.entries(e.specs).map(([a,c])=>`
              <div class="spec-item">
                <span class="spec-label">${a}:</span>
                <span class="spec-val">${c}</span>
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
    `).join(""),document.querySelectorAll(".open-pcb-btn").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-project");d.openModal(a)})}));const n=document.getElementById("skills-matrix-grid");n&&(n.innerHTML=u.map(e=>`
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-lg); padding:1.5rem; backdrop-filter:var(--glass-backdrop);">
        <h3 style="font-family:var(--font-mono); font-size:1.05rem; color:var(--cyan-glow); margin-bottom:1.25rem; display:flex; align-items:center; gap:0.5rem;">
          <span style="color:var(--amber-glow);">❖</span> ${e.category}
        </h3>
        <div style="display:flex; flex-direction:column; gap:0.85rem;">
          ${e.items.map(a=>`
            <div style="background:rgba(0,240,255,0.03); border:1px solid rgba(0,240,255,0.1); border-radius:6px; padding:0.6rem 0.85rem;">
              <div style="font-family:var(--font-mono); font-size:0.88rem; font-weight:700; color:var(--text-main); display:flex; align-items:center; gap:0.4rem;">
                <span style="color:var(--green-glow);">✓</span> ${a.name}
              </div>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.2rem; padding-left:1.1rem;">
                ${a.desc}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `).join(""));const l=document.getElementById("timeline-container");l&&(l.innerHTML=m.map((e,a)=>`
      <div style="position:relative; padding-left:2.5rem; margin-bottom:2.5rem;">
        <div style="position:absolute; left:0; top:4px; width:14px; height:14px; border-radius:50%; background:var(--cyan-glow); box-shadow:0 0 10px var(--cyan-glow); border:2px solid #000;"></div>
        ${a!==m.length-1?'<div style="position:absolute; left:6px; top:18px; bottom:-30px; width:2px; background:rgba(0,240,255,0.2);"></div>':""}
        
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cyan-glow); margin-bottom:0.25rem;">${e.period}</div>
        <h3 style="font-size:1.25rem; font-weight:700; color:var(--text-main);">${e.role} <span style="color:var(--text-muted); font-size:1rem; font-weight:400;">@ ${e.company}</span></h3>
        
        <ul style="margin-top:0.75rem; display:flex; flex-direction:column; gap:0.4rem; color:var(--text-muted); font-size:0.92rem; padding-left:1.2rem;">
          ${e.highlights.map(c=>`<li>${c}</li>`).join("")}
        </ul>
      </div>
    `).join(""));const t=document.getElementById("education-container");t&&(t.innerHTML=g.map(e=>`
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.25rem; backdrop-filter:var(--glass-backdrop);">
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--amber-glow); font-weight:600;">${e.period}</div>
        <h4 style="font-size:1.1rem; font-weight:700; color:var(--text-main); margin:0.25rem 0;">${e.degree}</h4>
        <div style="color:var(--cyan-glow); font-family:var(--font-mono); font-size:0.85rem; margin-bottom:0.5rem;">${e.school}</div>
        <p style="color:var(--text-muted); font-size:0.88rem;">${e.details}</p>
      </div>
    `).join(""));const i=document.getElementById("hex-contact-form");i&&i.addEventListener("submit",e=>{e.preventDefault();const a=i.querySelector('button[type="submit"]');a&&(a.textContent="⚡ MESSAGE TRANSMIS AVEC SUCCÈS !",a.style.background="var(--green-glow)",a.style.color="#000",setTimeout(()=>{a.textContent="⚡ Envoyer un Message Direct",a.style.background="",a.style.color="",i.reset()},3e3))});const s=document.getElementById("telemetry-cpu-load");setInterval(()=>{if(s){const e=(11+Math.random()*4).toFixed(1);s.textContent=`${e}%`}},2e3)});
//# sourceMappingURL=index-c27f1210.js.map
