import { bioData, skillsCategories, experienceTimeline, educationList, certificationsAndLanguages } from './data.js';
import { embeddedProjects } from './projectsData.js';
import { PCBViewerModal } from './pcbViewer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize PCB Modal Inspector
  const pcbModal = new PCBViewerModal('modal-overlay');

  // Render Projects Grid
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = embeddedProjects.map(proj => `
      <div class="project-card">
        <div class="project-img-wrapper">
          <img src="${proj.image}" alt="${proj.title}">
          <div class="project-badge">${proj.badge}</div>
        </div>
        <div class="project-body">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan-glow); margin-bottom:0.25rem;">
            ${proj.category.toUpperCase()}
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          
          <div class="project-specs">
            ${Object.entries(proj.specs).map(([k, v]) => `
              <div class="spec-item">
                <span class="spec-label">${k}:</span>
                <span class="spec-val">${v}</span>
              </div>
            `).join('')}
          </div>

          <div class="project-actions" style="flex-direction:column; gap:0.5rem;">
            <button class="btn btn-primary open-pcb-btn" data-project="${proj.id}" style="width:100%;">
              ⚡ Galerie & Médias (${proj.gallery ? proj.gallery.length : 1})
            </button>
            ${proj.pdfReport ? `
              <a href="${proj.pdfReport}" target="_blank" rel="noopener noreferrer" class="btn btn-amber" style="width:100%; justify-content:center; text-decoration:none; font-size:0.78rem;">
                📄 Rapport PDF (${proj.pdfTitle})
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `).join('');

    // Attach project click listeners
    document.querySelectorAll('.open-pcb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const projId = btn.getAttribute('data-project');
        pcbModal.openModal(projId);
      });
    });
  }

  // Render Skills Matrix (Clean competency cards WITHOUT PERCENTAGES)
  const skillsContainer = document.getElementById('skills-matrix-grid');
  if (skillsContainer) {
    skillsContainer.innerHTML = skillsCategories.map(cat => `
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-lg); padding:1.5rem; backdrop-filter:var(--glass-backdrop);">
        <h3 style="font-family:var(--font-mono); font-size:1.05rem; color:var(--cyan-glow); margin-bottom:1.25rem; display:flex; align-items:center; gap:0.5rem;">
          <span style="color:var(--amber-glow);">❖</span> ${cat.category}
        </h3>
        <div style="display:flex; flex-direction:column; gap:0.85rem;">
          ${cat.items.map(item => `
            <div style="background:rgba(0,240,255,0.03); border:1px solid rgba(0,240,255,0.1); border-radius:6px; padding:0.6rem 0.85rem;">
              <div style="font-family:var(--font-mono); font-size:0.88rem; font-weight:700; color:var(--text-main); display:flex; align-items:center; gap:0.4rem;">
                <span style="color:var(--green-glow);">✓</span> ${item.name}
              </div>
              <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.2rem; padding-left:1.1rem;">
                ${item.desc}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render Experience Timeline
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    timelineContainer.innerHTML = experienceTimeline.map((item, idx) => `
      <div style="position:relative; padding-left:2.5rem; margin-bottom:2.5rem;">
        <div style="position:absolute; left:0; top:4px; width:14px; height:14px; border-radius:50%; background:var(--cyan-glow); box-shadow:0 0 10px var(--cyan-glow); border:2px solid #000;"></div>
        ${idx !== experienceTimeline.length - 1 ? '<div style="position:absolute; left:6px; top:18px; bottom:-30px; width:2px; background:rgba(0,240,255,0.2);"></div>' : ''}
        
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cyan-glow); margin-bottom:0.25rem;">${item.period}</div>
        <h3 style="font-size:1.25rem; font-weight:700; color:var(--text-main);">${item.role} <span style="color:var(--text-muted); font-size:1rem; font-weight:400;">@ ${item.company}</span></h3>
        
        <ul style="margin-top:0.75rem; display:flex; flex-direction:column; gap:0.4rem; color:var(--text-muted); font-size:0.92rem; padding-left:1.2rem;">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // Render Education & Diplomas
  const educationContainer = document.getElementById('education-container');
  if (educationContainer) {
    educationContainer.innerHTML = educationList.map(edu => `
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.25rem; backdrop-filter:var(--glass-backdrop);">
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--amber-glow); font-weight:600;">${edu.period}</div>
        <h4 style="font-size:1.1rem; font-weight:700; color:var(--text-main); margin:0.25rem 0;">${edu.degree}</h4>
        <div style="color:var(--cyan-glow); font-family:var(--font-mono); font-size:0.85rem; margin-bottom:0.5rem;">${edu.school}</div>
        <p style="color:var(--text-muted); font-size:0.88rem;">${edu.details}</p>
      </div>
    `).join('');
  }

  // Direct Hardware Contact Form Simulation
  const contactForm = document.getElementById('hex-contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = '⚡ MESSAGE TRANSMIS AVEC SUCCÈS !';
        btn.style.background = 'var(--green-glow)';
        btn.style.color = '#000';
        setTimeout(() => {
          btn.textContent = '⚡ Envoyer un Message Direct';
          btn.style.background = '';
          btn.style.color = '';
          contactForm.reset();
        }, 3000);
      }
    });
  }

  // Live Telemetry Ticker CPU Load Simulator
  const cpuLoadEl = document.getElementById('telemetry-cpu-load');
  setInterval(() => {
    if (cpuLoadEl) {
      const load = (11 + Math.random() * 4).toFixed(1);
      cpuLoadEl.textContent = `${load}%`;
    }
  }, 2000);
});
