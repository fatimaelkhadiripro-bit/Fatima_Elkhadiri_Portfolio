import { embeddedProjects } from './projectsData.js';

export class PCBViewerModal {
  constructor(modalOverlayId) {
    this.overlay = document.getElementById(modalOverlayId);
    if (!this.overlay) return;

    this.activeProject = null;
    this.activeGalleryIdx = 0;

    this.init();
  }

  init() {
    this.attachEvents();
  }

  openModal(projectId) {
    const proj = embeddedProjects.find(p => p.id === projectId);
    if (!proj) return;

    this.activeProject = proj;
    this.activeGalleryIdx = 0;
    this.render();
    this.overlay.classList.add('active');
  }

  closeModal() {
    this.overlay.classList.remove('active');
  }

  render() {
    if (!this.activeProject) return;
    const proj = this.activeProject;
    const gallery = proj.gallery || [{ url: proj.image, caption: proj.title }];
    const currentMedia = gallery[this.activeGalleryIdx] || gallery[0];

    this.overlay.innerHTML = `
      <div class="modal-container">
        <button class="modal-close" id="modal-close-btn">&times;</button>
        
        <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cyan-glow); margin-bottom:0.35rem;">
          SYSTEM DIAGNOSTIC & HARDWARE INSPECTOR
        </div>
        <h2 style="font-size:1.8rem; margin-bottom:1rem; font-weight:800; color:var(--text-main);">${proj.title}</h2>
        
        ${proj.pdfReport ? `
          <div style="background:rgba(255,176,0,0.08); border:1px solid var(--amber-glow); border-radius:var(--radius-md); padding:0.85rem 1.25rem; margin-bottom:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            <div>
              <div style="font-family:var(--font-mono); font-size:0.85rem; font-weight:700; color:var(--amber-glow);">📄 RAPPORT TECHNIQUE DE PROJET DISPONIBLE</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">${proj.pdfTitle}</div>
            </div>
            <a href="${proj.pdfReport}" target="_blank" rel="noopener noreferrer" class="btn btn-amber" style="text-decoration:none;">
              📥 Ouvrir / Télécharger le Rapport (PDF)
            </a>
          </div>
        ` : ''}

        <!-- Media Gallery Main Display -->
        <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem;">
          <div style="border:1px solid var(--border-color); border-radius:var(--radius-md); overflow:hidden; background:#000; position:relative; min-height:300px; max-height:450px; display:flex; align-items:center; justify-content:center;">
            <img id="gallery-main-img" src="${currentMedia.url}" alt="${currentMedia.caption}" style="max-width:100%; max-height:420px; width:auto; height:auto; object-fit:contain; display:block; transition:all 0.3s ease;">
          </div>
          
          <div id="gallery-caption" style="font-family:var(--font-mono); font-size:0.85rem; color:var(--cyan-glow); text-align:center; background:rgba(0,240,255,0.05); padding:0.5rem 1rem; border-radius:6px; border:1px solid var(--border-color);">
            📌 ${currentMedia.caption}
          </div>

          <!-- Thumbnails Selector if multiple images available -->
          ${gallery.length > 1 ? `
            <div style="display:flex; gap:0.6rem; overflow-x:auto; padding-bottom:0.5rem;">
              ${gallery.map((item, idx) => `
                <button class="gallery-thumb-btn ${idx === this.activeGalleryIdx ? 'active' : ''}" data-idx="${idx}" style="border:${idx === this.activeGalleryIdx ? '2px solid var(--cyan-glow)' : '1px solid var(--border-color)'}; border-radius:6px; overflow:hidden; width:85px; height:60px; flex-shrink:0; background:#000; cursor:pointer; padding:0; transition:all 0.2s ease;">
                  <img src="${item.url}" style="width:100%; height:100%; object-fit:cover;">
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem;">
          <div>
            <h4 style="font-family:var(--font-mono); color:var(--amber-glow); margin-bottom:0.5rem; font-size:0.9rem;">COMPOSANTS & MATÉRIEL (BOM):</h4>
            <ul style="list-style:none; font-family:var(--font-mono); font-size:0.82rem; color:var(--text-muted); display:flex; flex-direction:column; gap:0.4rem;">
              ${proj.bom.map(item => `
                <li style="display:flex; align-items:center; gap:0.5rem;">
                  <span style="color:var(--cyan-glow);">❖</span> ${item}
                </li>
              `).join('')}
            </ul>
          </div>

          <div>
            <h4 style="font-family:var(--font-mono); color:var(--cyan-glow); margin-bottom:0.5rem; font-size:0.9rem;">SPÉCIFICATIONS TECHNIQUES:</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; font-family:var(--font-mono); font-size:0.75rem;">
              ${Object.entries(proj.specs).map(([key, val]) => `
                <div style="background:rgba(0,240,255,0.05); border:1px solid var(--border-color); padding:0.5rem 0.6rem; border-radius:4px;">
                  <div style="color:var(--text-dim);">${key}:</div>
                  <div style="color:var(--text-cyan); font-weight:600;">${val}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Attach modal close listener
    document.getElementById('modal-close-btn').addEventListener('click', () => this.closeModal());

    // Attach thumbnail click listeners
    document.querySelectorAll('.gallery-thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        this.activeGalleryIdx = idx;
        const media = gallery[idx];
        const mainImg = document.getElementById('gallery-main-img');
        const captionEl = document.getElementById('gallery-caption');

        if (mainImg && media) {
          mainImg.src = media.url;
          mainImg.alt = media.caption;
        }
        if (captionEl && media) {
          captionEl.textContent = `📌 ${media.caption}`;
        }

        document.querySelectorAll('.gallery-thumb-btn').forEach(b => {
          b.style.border = '1px solid var(--border-color)';
        });
        btn.style.border = '2px solid var(--cyan-glow)';
      });
    });
  }

  attachEvents() {
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.closeModal();
      }
    });
  }
}
