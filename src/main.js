import './style.css';
import { SECTIONS } from './data.js';

// ── Hex -> "R,G,B" ──────────────────────────────────────────
function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

// ── Orbit metrics ────────────────────────────────────────────
function getMetrics() {
  const vw   = window.innerWidth;
  const vh   = window.innerHeight;
  const vmin = Math.min(vw, vh);
  const sm   = vw < 600;

  const bubbleSize  = Math.round(Math.min(vmin * (sm ? 0.20 : 0.145), sm ? 82 : 128));
  const orbitRadius = Math.round(Math.min(vmin * 0.33, sm ? 148 : 282));
  const centerW     = Math.round((orbitRadius - bubbleSize * 0.55) * 2);

  return { bubbleSize, orbitRadius, centerW, sm };
}

// ── Canvas background ────────────────────────────────────────
class Particles {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d');
    this.pts    = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.frame();
  }

  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    const n = Math.min(75, Math.floor((this.canvas.width * this.canvas.height) / 16000));
    this.pts = Array.from({ length: n }, () => ({
      x:  Math.random() * this.canvas.width,
      y:  Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r:  Math.random() * 1.3 + 0.4,
      a:  Math.random() * 0.3 + 0.07,
    }));
  }

  frame() {
    const { ctx, canvas, pts } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of pts) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    }

    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 125) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(100,200,220,${0.065 * (1 - d / 125)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }

    for (const p of pts) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(140,215,235,${p.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(() => this.frame());
  }
}

// ── Build orbit cards ────────────────────────────────────────
function buildCards() {
  const orbit = document.getElementById('orbit');
  orbit.innerHTML = '';

  SECTIONS.forEach((section, i) => {
    const card = document.createElement('article');
    card.className = 'outcome-card';
    card.dataset.id = section.id;
    card.dataset.group = section.group;

    const floatDur   = (4.5 + Math.random() * 3.5).toFixed(2) + 's';
    const floatDelay = (-Math.random() * 8).toFixed(2) + 's';

    card.innerHTML = `
      <div class="bubble-wrapper">
        <div class="bubble"
             style="--float-dur:${floatDur};--float-delay:${floatDelay};--accent-rgb:${hexToRgb(section.accent)}">
          <div class="preview">
            <div class="preview-chrome">
              <span></span><span></span><span></span>
            </div>
            <div class="preview-body" style="background:${section.previewBg}">
              <div class="preview-icon" style="color:${section.accent}">${section.svg}</div>
              <p class="preview-title">${section.title}</p>
            </div>
          </div>
        </div>
      </div>
      <p class="outcome-label" style="color:${section.accent}">${section.outcome}</p>
    `;

    orbit.appendChild(card);
  });
}

// ── Position cards on orbit ──────────────────────────────────
function positionCards() {
  const { bubbleSize, orbitRadius, centerW } = getMetrics();

  document.documentElement.style.setProperty('--bubble-size', bubbleSize + 'px');
  document.getElementById('center').style.setProperty('--center-w', centerW + 'px');
  document.getElementById('center').style.width = centerW + 'px';

  const cards = document.querySelectorAll('.outcome-card');
  const n = cards.length;

  cards.forEach((card, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const x = Math.round(Math.cos(angle) * orbitRadius);
    const y = Math.round(Math.sin(angle) * orbitRadius);
    card.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
  });
}

// ── Center panel ─────────────────────────────────────────────
const center   = document.getElementById('center');
const dOutcome = document.getElementById('dOutcome');
const dCaption = document.getElementById('dCaption');
const dActions = document.getElementById('dActions');

let resetTimer = null;

function showDetail(section) {
  clearTimeout(resetTimer);
  center.classList.add('showing-detail');
  center.style.setProperty('--d-accent', section.accent);
  dOutcome.textContent   = section.outcome;
  dOutcome.style.color   = section.accent;
  dCaption.textContent   = section.caption;
  dActions.innerHTML     = section.placeholder
    ? `<span class="coming-soon">In Development</span>`
    : `<a class="visit-btn" href="${section.url}" target="_blank" rel="noopener"
          style="color:${section.accent};border-color:${section.accent}">Visit Lab</a>`;
}

function showDefault() {
  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => center.classList.remove('showing-detail'), 140);
}

// ── Desktop hover (mouse) ─────────────────────────────────────
function initHover() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  document.querySelectorAll('.outcome-card').forEach(card => {
    const id      = card.dataset.id;
    const section = SECTIONS.find(s => s.id === id);

    card.addEventListener('mouseenter', () => {
      card.classList.add('active');
      showDetail(section);
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('active');
      showDefault();
    });
  });
}

// ── Desktop tilt ──────────────────────────────────────────────
function initTilt() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  document.querySelectorAll('.bubble-wrapper').forEach(wrapper => {
    wrapper.addEventListener('mousemove', e => {
      const r  = wrapper.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
      const dy = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
      wrapper.style.transform = `perspective(550px) rotateX(${dy * -13}deg) rotateY(${dx * 13}deg) scale(1.05)`;
    });
    wrapper.addEventListener('mouseleave', () => {
      wrapper.style.transform = '';
    });
  });
}

// ── Mobile tap ────────────────────────────────────────────────
const mobilePanel = document.getElementById('mobilePanel');
const panelClose  = document.getElementById('panelClose');
const pOutcome    = document.getElementById('pOutcome');
const pCaption    = document.getElementById('pCaption');
const pActions    = document.getElementById('pActions');

function openPanel(section) {
  pOutcome.textContent = section.outcome;
  pOutcome.style.color = section.accent;
  pCaption.textContent = section.caption;
  pActions.innerHTML   = section.placeholder
    ? `<span class="coming-soon">In Development</span>`
    : `<a class="visit-btn" href="${section.url}" target="_blank" rel="noopener"
          style="color:${section.accent};border-color:${section.accent}">Visit Lab</a>`;
  mobilePanel.classList.add('open');
}

function closePanel() {
  mobilePanel.classList.remove('open');
}

function initTouch() {
  if (window.matchMedia('(hover: hover)').matches) return;

  document.querySelectorAll('.outcome-card').forEach(card => {
    const id      = card.dataset.id;
    const section = SECTIONS.find(s => s.id === id);
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      openPanel(section);
    });
  });

  panelClose.addEventListener('click', closePanel);
}

// ── Resize ───────────────────────────────────────────────────
window.addEventListener('resize', positionCards);

// ── Init ─────────────────────────────────────────────────────
new Particles(document.getElementById('bg'));
buildCards();
positionCards();
initHover();
initTilt();
initTouch();
