import { bioData, skillsCategories, experienceTimeline, educationList, certificationsAndLanguages } from './data.js';
import { embeddedProjects, projectSections } from './projectsData.js';
import { PCBViewerModal } from './pcbViewer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize PCB Modal Inspector
  const pcbModal = new PCBViewerModal('modal-overlay');

  const renderSingleProjectCard = (proj) => `
    <div class="project-card">
      <div class="project-img-wrapper">
        <img src="${proj.image}" alt="${proj.title}">
        <div class="project-badge">${proj.badge}</div>
      </div>
      <div class="project-body">
        <div style="font-family:var(--font-mono); font-size:0.75rem; font-weight:600; color:var(--cyan-glow); margin-bottom:0.35rem; letter-spacing:0.5px;">
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
          <button class="btn btn-primary open-pcb-btn" data-project="${proj.id}" style="width:100%; justify-content:center;">
            📷 Galerie & Médias (${proj.gallery ? proj.gallery.length : 1})
          </button>
          ${proj.cadlabUrl ? `
            <a href="${proj.cadlabUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-amber" style="width:100%; justify-content:center; text-decoration:none; font-size:0.8rem;">
              🔗 Voir sur CADLAB.io
            </a>
          ` : ''}
          ${proj.pdfReport ? `
            <a href="${proj.pdfReport}" target="_blank" rel="noopener noreferrer" class="btn btn-amber" style="width:100%; justify-content:center; text-decoration:none; font-size:0.8rem;">
              📄 Rapport PDF (${proj.pdfTitle})
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  // 1. Featured Projects Showcase (Home Page index.html)
  const featuredContainer = document.getElementById('featured-projects-grid');
  if (featuredContainer) {
    // Select top 3 featured projects
    const featuredProjects = embeddedProjects.filter(p => 
      ['adas-jetson-vision', 'equium-linear-motor', 'esp32-c3-iot-pcb'].includes(p.id)
    );
    featuredContainer.innerHTML = featuredProjects.map(proj => renderSingleProjectCard(proj)).join('');

    document.querySelectorAll('.open-pcb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const projId = btn.getAttribute('data-project');
        pcbModal.openModal(projId);
      });
    });
  }

  // 2. Full Projects Page (projects.html)
  const renderProjectsBySection = (filterSection = 'all') => {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let sectionsToRender = projectSections.filter(s => s.id !== 'all');
    if (filterSection !== 'all') {
      sectionsToRender = sectionsToRender.filter(s => s.id === filterSection);
    }

    container.innerHTML = sectionsToRender.map(sec => {
      const secProjects = embeddedProjects.filter(p => p.section === sec.id);
      if (secProjects.length === 0) return '';

      return `
        <div class="project-subsection" style="display:flex; flex-direction:column; gap:1.5rem;">
          <div style="border-left:3px solid var(--cyan-glow); padding:0.85rem 1.25rem; background:rgba(18, 30, 54, 0.4); border-radius:0 10px 10px 0; border:1px solid var(--border-color); border-left-width:3px;">
            <h3 style="font-family:var(--font-sans); font-size:1.3rem; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
              ${sec.title} <span style="font-size:0.85rem; color:var(--text-dim); font-weight:400; font-family:var(--font-mono);">(${secProjects.length} projet${secProjects.length > 1 ? 's' : ''})</span>
            </h3>
            <p style="font-size:0.9rem; color:var(--text-muted); margin:0; line-height:1.5;">${sec.desc}</p>
          </div>

          <div class="projects-grid">
            ${secProjects.map(proj => renderSingleProjectCard(proj)).join('')}
          </div>
        </div>
      `;
    }).join('');

    // Re-attach project click listeners
    document.querySelectorAll('.open-pcb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const projId = btn.getAttribute('data-project');
        pcbModal.openModal(projId);
      });
    });
  };

  // Initial render on projects.html
  if (document.getElementById('projects-container')) {
    renderProjectsBySection('all');

    // Filter Tabs Event Listeners
    const tabBtns = document.querySelectorAll('.project-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const sectionId = btn.getAttribute('data-section');
        
        tabBtns.forEach(b => {
          b.classList.remove('active');
          b.style.background = 'rgba(18, 30, 54, 0.4)';
          b.style.color = 'var(--text-muted)';
          b.style.borderColor = 'var(--border-color)';
        });

        btn.classList.add('active');
        btn.style.background = 'var(--cyan-glow)';
        btn.style.color = '#060b17';
        btn.style.borderColor = 'var(--cyan-glow)';

        renderProjectsBySection(sectionId);
      });
    });
  }

  // 3. Render Skills Matrix (skills.html)
  const skillsContainer = document.getElementById('skills-matrix-grid');
  if (skillsContainer) {
    skillsContainer.innerHTML = skillsCategories.map(cat => `
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.5rem; backdrop-filter:var(--glass-backdrop); box-shadow:var(--card-shadow);">
        <h3 style="font-family:var(--font-sans); font-size:1.05rem; font-weight:700; color:var(--cyan-glow); margin-bottom:1.25rem; display:flex; align-items:center; gap:0.5rem;">
          <span style="color:var(--amber-glow);">❖</span> ${cat.category}
        </h3>
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          ${cat.items.map(item => `
            <div style="background:rgba(18, 30, 54, 0.4); border:1px solid var(--border-color); border-radius:8px; padding:0.65rem 0.9rem;">
              <div style="font-family:var(--font-sans); font-size:0.9rem; font-weight:700; color:var(--text-main); display:flex; align-items:center; gap:0.4rem;">
                <span style="color:var(--green-glow);">✓</span> ${item.name}
              </div>
              <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem; padding-left:1.1rem; line-height:1.4;">
                ${item.desc}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 4. Render Experience Timeline (experience.html)
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    timelineContainer.innerHTML = experienceTimeline.map((item, idx) => `
      <div style="position:relative; padding-left:2.5rem; margin-bottom:2.5rem;">
        <div style="position:absolute; left:0; top:4px; width:12px; height:12px; border-radius:50%; background:var(--cyan-glow); border:2px solid var(--bg-primary);"></div>
        ${idx !== experienceTimeline.length - 1 ? '<div style="position:absolute; left:5px; top:18px; bottom:-30px; width:2px; background:rgba(0,240,255,0.15);"></div>' : ''}
        
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cyan-glow); margin-bottom:0.25rem; font-weight:600;">${item.period}</div>
        <h3 style="font-size:1.2rem; font-weight:700; color:var(--text-main);">${item.role} <span style="color:var(--text-muted); font-size:0.95rem; font-weight:400;">@ ${item.company}</span></h3>
        
        <ul style="margin-top:0.75rem; display:flex; flex-direction:column; gap:0.45rem; color:var(--text-muted); font-size:0.92rem; padding-left:1.2rem; line-height:1.55;">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // 5. Render Education & Diplomas (experience.html)
  const educationContainer = document.getElementById('education-container');
  if (educationContainer) {
    educationContainer.innerHTML = educationList.map(edu => `
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.35rem; backdrop-filter:var(--glass-backdrop); box-shadow:var(--card-shadow);">
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--amber-glow); font-weight:600;">${edu.period}</div>
        <h4 style="font-size:1.1rem; font-weight:700; color:var(--text-main); margin:0.35rem 0 0.2rem 0;">${edu.degree}</h4>
        <div style="color:var(--cyan-glow); font-family:var(--font-sans); font-size:0.88rem; font-weight:600; margin-bottom:0.5rem;">${edu.school}</div>
        <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.5;">${edu.details}</p>
      </div>
    `).join('');
  }

  // 6. Web3Forms AJAX Contact Form Handler (contact.html)
  const contactForm = document.getElementById('hex-contact-form');
  const btn = document.getElementById('contact-submit-btn');

  if (contactForm && btn) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const originalText = btn.textContent;
      btn.textContent = '⏳ Envoi du message en cours...';
      btn.disabled = true;

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          btn.textContent = '✓ MESSAGE TRANSMIS À FATIMA (REÇU SUR GMAIL) !';
          btn.style.background = 'var(--green-glow)';
          btn.style.color = '#060b17';
          contactForm.reset();

          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
            btn.disabled = false;
          }, 4000);
        } else {
          btn.textContent = '❌ Erreur d\'envoi. Veuillez réespayer.';
          btn.disabled = false;
        }
      } catch (err) {
        btn.textContent = '❌ Erreur de connexion réseau.';
        btn.disabled = false;
      }
    });
  }
});
