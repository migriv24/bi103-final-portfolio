(function () {
  'use strict';

  const cfg        = window.CLICK_CONFIG || {};
  const ACTIVE_KEY = 'click_portfolio_active';
  const PORTAL_URL = 'https://migriv24.github.io/bi103-final-portfolio/?from=portal';
  const BASE       = 'https://migriv24.github.io/bi103-final-portfolio/click-assets/ClickLaFont_';
  const SIZE       = window.matchMedia('(max-width:500px)').matches ? 100 : 150;

  if (cfg.setActive)  localStorage.setItem(ACTIVE_KEY, 'true');
  if (!cfg.alwaysShow && localStorage.getItem(ACTIVE_KEY) !== 'true') return;

  const dlgs = (cfg.dialogues || []).map((d, i) => ({ ...d, _id: i, _fired: false }));

  // ── CSS ─────────────────────────────────────────────────────
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    #ck-root {
      position: fixed;
      bottom: 16px;
      left: 16px;
      width: ${SIZE}px;
      height: ${SIZE}px;
      z-index: 99999;
      user-select: none;
    }
    #ck-sprite {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      cursor: grab;
      filter: drop-shadow(0 6px 14px rgba(0,0,0,.2));
      transition: filter .22s ease, transform .22s ease, opacity .25s ease;
    }
    #ck-sprite:active { cursor: grabbing; }
    #ck-root.ck-dragging #ck-sprite {
      filter: drop-shadow(0 22px 32px rgba(0,0,0,.55)) drop-shadow(0 6px 12px rgba(0,0,0,.3));
      transform: scale(1.14);
      cursor: grabbing;
    }
    #ck-root.ck-dragging.ck-portal #ck-sprite {
      filter: drop-shadow(0 22px 32px rgba(0,0,0,.55)) drop-shadow(0 6px 12px rgba(0,0,0,.3)) drop-shadow(0 0 24px rgba(77,150,255,.9));
    }
    #ck-bubble {
      display: none;
      position: absolute;
      bottom: calc(100% + 10px);
      left: 0;
      width: 220px;
      background: rgba(255,255,255,.96);
      border-radius: 16px;
      padding: 11px 30px 11px 13px;
      box-shadow: 0 6px 24px rgba(0,0,0,.13), 0 1px 4px rgba(0,0,0,.06);
      border: 1.5px solid rgba(77,150,255,.25);
      font-family: 'Nunito','Segoe UI',system-ui,sans-serif;
      animation: ck-in .32s cubic-bezier(.34,1.56,.64,1) both;
    }
    #ck-bubble::after {
      content: '';
      position: absolute;
      bottom: -9px;
      left: 22px;
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-top: 9px solid rgba(255,255,255,.96);
    }
    #ck-text {
      font-size: 12.5px;
      line-height: 1.58;
      color: #1e3a52;
      margin: 0;
      cursor: default;
    }
    #ck-x {
      position: absolute;
      top: 7px; right: 8px;
      background: none; border: none;
      cursor: pointer;
      font-size: 13px; color: #6a90aa;
      padding: 2px 4px; border-radius: 4px;
      transition: color .15s;
      font-family: inherit; line-height: 1;
    }
    #ck-x:hover { color: #1e3a52; }
    #ck-hint {
      display: none;
      position: absolute;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      background: rgba(77,150,255,.92);
      color: #fff;
      font-size: 11px;
      font-family: 'Nunito',system-ui,sans-serif;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 8px;
      pointer-events: none;
    }
    #ck-root.ck-portal #ck-hint { display: block; }
    #ck-drag-hint {
      position: absolute;
      top: calc(100% + 3px);
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      font-family: 'Nunito',system-ui,sans-serif;
      font-size: 9px;
      font-weight: 600;
      color: rgba(30,58,82,.38);
      pointer-events: none;
      user-select: none;
    }
    #ck-root.ck-dragging #ck-drag-hint { display: none; }
    @keyframes ck-in {
      from { opacity:0; transform:scale(.85) translateY(6px); }
      to   { opacity:1; transform:scale(1) translateY(0); }
    }
    @media(max-width:500px){
      #ck-root { width:100px; height:100px; bottom:10px; left:10px; }
      #ck-bubble { width:185px; }
      #ck-text { font-size:11.5px; }
    }
  `;
  document.head.appendChild(styleEl);

  // ── DOM ─────────────────────────────────────────────────────
  const root = document.createElement('div');
  root.id = 'ck-root';
  root.innerHTML = `
    <div id="ck-bubble">
      <button id="ck-x" aria-label="Dismiss">&#x2715;</button>
      <p id="ck-text"></p>
    </div>
    <div id="ck-hint">back to portfolio</div>
    <img id="ck-sprite" alt="Click LaFont" />
    ${cfg.noPortal ? '' : '<p id="ck-drag-hint">try dragging to the center</p>'}
  `;
  document.body.appendChild(root);

  const bubble = document.getElementById('ck-bubble');
  const ckText = document.getElementById('ck-text');
  const ckX    = document.getElementById('ck-x');
  const sprite = document.getElementById('ck-sprite');

  let typingTimer = null;
  let activeDlg   = null;

  // ── Sprite ───────────────────────────────────────────────────
  function setSprite(name) {
    sprite.style.opacity = '0';
    setTimeout(() => {
      sprite.src = BASE + name + '.png';
      sprite.style.opacity = '1';
    }, 160);
  }
  setSprite(cfg.idleSprite || 'Neutral_LookingTopRight_NoAction');

  // ── Typewriter ───────────────────────────────────────────────
  function typeText(text) {
    clearInterval(typingTimer);
    ckText.textContent = '';
    let i = 0;
    typingTimer = setInterval(() => {
      ckText.textContent += text[i++];
      if (i >= text.length) clearInterval(typingTimer);
    }, 22);
  }
  ckText.addEventListener('click', () => {
    if (activeDlg) { clearInterval(typingTimer); ckText.textContent = activeDlg.text; }
  });

  // ── Show dialogue ─────────────────────────────────────────────
  function showDlg(dlg) {
    dlg._fired = true;
    activeDlg  = dlg;
    setSprite(dlg.sprite || 'Neutral_LookingTopRight_Pointing');
    bubble.style.display = 'block';
    bubble.style.animation = 'none';
    void bubble.offsetHeight;
    bubble.style.animation = '';
    typeText(dlg.text);
  }

  // ── Dismiss ───────────────────────────────────────────────────
  function hideBubble() {
    bubble.style.display = 'none';
    clearInterval(typingTimer);
    activeDlg = null;
    setSprite(cfg.idleSprite || 'Neutral_LookingTopRight_NoAction');
  }
  ckX.addEventListener('click', hideBubble);

  // ── Click sprite to replay entry dialogue ────────────────────
  sprite.addEventListener('click', () => {
    if (didDrag) return; // was a drag, not a click
    const enterDlg = dlgs.find(d => d.trigger === 'enter');
    if (!enterDlg) return;
    enterDlg._fired = false;
    showDlg(enterDlg);
  });

  // ── Triggers ──────────────────────────────────────────────────
  const enterDlgs  = dlgs.filter(d => d.trigger === 'enter');
  if (enterDlgs.length) setTimeout(() => showDlg(enterDlgs[0]), 1400);

  const scrollDlgs = dlgs
    .filter(d => d.trigger?.startsWith('scroll:'))
    .map(d => ({ ...d, _pct: parseFloat(d.trigger.split(':')[1]) }))
    .sort((a, b) => a._pct - b._pct);

  if (scrollDlgs.length) {
    let nextIdx = 0;
    window.addEventListener('scroll', () => {
      if (nextIdx >= scrollDlgs.length) return;
      const pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (pct >= scrollDlgs[nextIdx]._pct) showDlg(scrollDlgs[nextIdx++]);
    }, { passive: true });
  }

  // ── Drag ──────────────────────────────────────────────────────
  let isDragging = false;
  let didDrag    = false;
  let offX = 0, offY = 0;
  let startCX = 0, startCY = 0;

  function snapToCorner() {
    const targetY = window.innerHeight - SIZE - 16;
    root.style.transition = 'left .45s cubic-bezier(.34,1.4,.64,1), top .45s cubic-bezier(.34,1.4,.64,1)';
    root.style.left = '16px';
    root.style.top  = targetY + 'px';
    setTimeout(() => {
      root.style.transition = '';
      root.style.top        = 'auto';
      root.style.bottom     = '16px';
    }, 500);
  }

  function beginDrag(clientX, clientY) {
    isDragging = true;
    didDrag    = false;
    startCX    = clientX;
    startCY    = clientY;

    const rect = root.getBoundingClientRect();
    offX = clientX - rect.left;
    offY = clientY - rect.top;

    root.style.transition = 'none';
    root.style.bottom     = 'auto';
    root.style.left       = rect.left + 'px';
    root.style.top        = rect.top  + 'px';
  }

  function moveDrag(clientX, clientY) {
    if (!isDragging) return;
    if (Math.abs(clientX - startCX) > 4 || Math.abs(clientY - startCY) > 4) didDrag = true;

    const x = clientX - offX;
    const y = clientY - offY;
    root.style.left = x + 'px';
    root.style.top  = y + 'px';

    // Portal zone = outside bottom-left quadrant
    const inSafe = (x + SIZE / 2) < window.innerWidth * 0.28 && (y + SIZE / 2) > window.innerHeight * 0.72;
    root.classList.toggle('ck-portal', !inSafe && !cfg.noPortal);
  }

  function endDrag(clientX, clientY) {
    if (!isDragging) return;
    isDragging = false;
    root.classList.remove('ck-portal');

    if (!didDrag) return; // pure click handled by sprite click listener

    const x = clientX - offX;
    const y = clientY - offY;
    const inSafe = (x + SIZE / 2) < window.innerWidth * 0.28 && (y + SIZE / 2) > window.innerHeight * 0.72;

    if (!inSafe && !cfg.noPortal) {
      // Portal back to portfolio
      sprite.style.transition = 'opacity .35s ease, transform .35s ease';
      sprite.style.opacity    = '0';
      sprite.style.transform  = 'scale(0.7)';
      setTimeout(() => { window.location.href = PORTAL_URL; }, 380);
    } else {
      snapToCorner();
    }
  }

  // Mouse
  sprite.addEventListener('mousedown', e => { beginDrag(e.clientX, e.clientY); e.preventDefault(); });
  document.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
  document.addEventListener('mouseup',   e => endDrag(e.clientX, e.clientY));

  // Touch
  sprite.addEventListener('touchstart', e => {
    const t = e.touches[0];
    beginDrag(t.clientX, t.clientY);
    // don't preventDefault here so single-taps still register
  }, { passive: true });

  document.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const t = e.touches[0];
    moveDrag(t.clientX, t.clientY);
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchend', e => {
    if (!isDragging) return;
    const t = e.changedTouches[0];
    endDrag(t.clientX, t.clientY);
  });

  // ── Shift above mobile panel when it opens ───────────────────
  const mobilePanel = document.getElementById('mobilePanel');
  if (mobilePanel) {
    const CORNER_BOTTOM = window.matchMedia('(max-width:500px)').matches ? 10 : 16;
    new MutationObserver(() => {
      if (isDragging) return;
      if (mobilePanel.classList.contains('open')) {
        root.style.transition = 'bottom .3s ease';
        root.style.bottom = (mobilePanel.offsetHeight + 14) + 'px';
      } else {
        root.style.transition = 'bottom .3s ease';
        root.style.bottom = CORNER_BOTTOM + 'px';
      }
    }).observe(mobilePanel, { attributes: true, attributeFilter: ['class'] });
  }

  // ── Portal entry animation (arriving from a lab page) ────────
  if (cfg.portalEntry) {
    const cx = Math.round(window.innerWidth  / 2 - SIZE / 2);
    const cy = Math.round(window.innerHeight / 2 - SIZE / 2);
    root.style.bottom    = 'auto';
    root.style.left      = cx + 'px';
    root.style.top       = cy + 'px';
    root.style.opacity   = '0';
    root.style.transform = 'scale(0.5)';

    // Pop in at center
    setTimeout(() => {
      root.style.transition = 'opacity .4s ease, transform .4s cubic-bezier(.34,1.56,.64,1)';
      root.style.opacity    = '1';
      root.style.transform  = 'scale(1)';
    }, 120);

    // Slide to corner
    setTimeout(() => {
      const ty = window.innerHeight - SIZE - 16;
      root.style.transition = 'left .7s cubic-bezier(.4,0,.2,1), top .7s cubic-bezier(.4,0,.2,1)';
      root.style.left = '16px';
      root.style.top  = ty + 'px';
      setTimeout(() => {
        root.style.transition = '';
        root.style.top        = 'auto';
        root.style.bottom     = '16px';
      }, 800);
    }, 900);
  }

}());
