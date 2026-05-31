(function () {
  'use strict';

  var cfg = window.CLICK_CONFIG || {};
  var ACTIVE_KEY = 'click_portfolio_active';
  var BASE = 'https://migriv24.github.io/bi103-final-portfolio/click-assets/ClickLaFont_';

  // Set the session flag if this is the portfolio entry point
  if (cfg.setActive) {
    localStorage.setItem(ACTIVE_KEY, 'true');
  }

  // Only show if the user came through the portfolio (or this page opts in)
  if (!cfg.alwaysShow && localStorage.getItem(ACTIVE_KEY) !== 'true') return;

  var dlgs = (cfg.dialogues || []).map(function (d, i) {
    return Object.assign({}, d, { _id: i, _fired: false });
  });

  // ── Styles ──────────────────────────────────────────────────
  var styleEl = document.createElement('style');
  styleEl.textContent = [
    '#ck-root{',
      'position:fixed;bottom:20px;right:20px;z-index:99999;',
      'display:flex;flex-direction:column;align-items:flex-end;gap:10px;',
      'pointer-events:none;',
    '}',
    '#ck-bubble{',
      'display:none;',
      'background:rgba(255,255,255,0.96);',
      'border-radius:18px;',
      'padding:12px 36px 12px 14px;',
      'max-width:228px;min-width:130px;',
      'box-shadow:0 6px 24px rgba(0,0,0,.13),0 1px 4px rgba(0,0,0,.06);',
      'border:1.5px solid rgba(77,150,255,.25);',
      'position:relative;pointer-events:all;',
      'font-family:"Nunito","Segoe UI",system-ui,sans-serif;',
      'animation:ck-in .35s cubic-bezier(.34,1.56,.64,1) both;',
    '}',
    '#ck-bubble::after{',
      'content:"";position:absolute;bottom:-9px;right:34px;',
      'border-left:9px solid transparent;border-right:9px solid transparent;',
      'border-top:9px solid rgba(255,255,255,.96);',
    '}',
    '#ck-text{',
      'font-size:13px;line-height:1.58;color:#1e3a52;',
      'margin:0;cursor:default;',
    '}',
    '#ck-x{',
      'position:absolute;top:7px;right:9px;',
      'background:none;border:none;cursor:pointer;',
      'font-size:14px;color:#6a90aa;line-height:1;',
      'padding:2px 4px;border-radius:4px;',
      'font-family:inherit;transition:color .15s;',
    '}',
    '#ck-x:hover{color:#1e3a52;}',
    '#ck-sprite{',
      'width:150px;height:150px;object-fit:contain;',
      'pointer-events:none;user-select:none;',
      'filter:drop-shadow(0 6px 14px rgba(0,0,0,.2));',
      'transition:opacity .25s ease;',
    '}',
    '@keyframes ck-in{',
      'from{opacity:0;transform:scale(.85) translateY(8px)}',
      'to{opacity:1;transform:scale(1) translateY(0)}',
    '}',
    '@media(max-width:500px){',
      '#ck-root{bottom:10px;right:10px;}',
      '#ck-sprite{width:100px;height:100px;}',
      '#ck-bubble{max-width:180px;}',
      '#ck-text{font-size:12px;}',
    '}',
  ].join('');
  document.head.appendChild(styleEl);

  // ── DOM ─────────────────────────────────────────────────────
  var root = document.createElement('div');
  root.id = 'ck-root';
  root.innerHTML =
    '<div id="ck-bubble">' +
      '<button id="ck-x" aria-label="Dismiss">&#x2715;</button>' +
      '<p id="ck-text"></p>' +
    '</div>' +
    '<img id="ck-sprite" alt="Click LaFont" />';
  document.body.appendChild(root);

  var bubble  = document.getElementById('ck-bubble');
  var ckText  = document.getElementById('ck-text');
  var ckX     = document.getElementById('ck-x');
  var sprite  = document.getElementById('ck-sprite');

  var typingTimer = null;
  var activeDlg   = null;

  // ── Sprite ───────────────────────────────────────────────────
  function setSprite(name) {
    sprite.style.opacity = '0';
    setTimeout(function () {
      sprite.src = BASE + name + '.png';
      sprite.style.opacity = '1';
    }, 180);
  }

  setSprite(cfg.idleSprite || 'Neutral_LookingTopRight_NoAction');

  // ── Typewriter ───────────────────────────────────────────────
  function typeText(text) {
    clearInterval(typingTimer);
    ckText.textContent = '';
    var i = 0;
    typingTimer = setInterval(function () {
      ckText.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(typingTimer);
    }, 22);
  }

  // click text to skip typewriter
  ckText.addEventListener('click', function () {
    if (activeDlg) { clearInterval(typingTimer); ckText.textContent = activeDlg.text; }
  });

  // ── Show dialogue ─────────────────────────────────────────────
  function showDlg(dlg) {
    if (dlg._fired) return;
    dlg._fired = true;
    activeDlg  = dlg;

    setSprite(dlg.sprite || 'Neutral_LookingTopRight_Pointing');

    bubble.style.display = 'block';
    // restart animation
    bubble.style.animation = 'none';
    void bubble.offsetHeight;
    bubble.style.animation = '';

    typeText(dlg.text);
  }

  // ── Dismiss ───────────────────────────────────────────────────
  ckX.addEventListener('click', function () {
    bubble.style.display = 'none';
    clearInterval(typingTimer);
    activeDlg = null;
    setSprite(cfg.idleSprite || 'Neutral_LookingTopRight_NoAction');
  });

  // ── Trigger: enter ────────────────────────────────────────────
  var enterDlgs = dlgs.filter(function (d) { return d.trigger === 'enter'; });
  if (enterDlgs.length) {
    setTimeout(function () { showDlg(enterDlgs[0]); }, 1400);
  }

  // ── Trigger: scroll ───────────────────────────────────────────
  var scrollDlgs = dlgs
    .filter(function (d) { return d.trigger && d.trigger.indexOf('scroll:') === 0; })
    .map(function (d) { return Object.assign({}, d, { _pct: parseFloat(d.trigger.split(':')[1]) }); })
    .sort(function (a, b) { return a._pct - b._pct; });

  if (scrollDlgs.length) {
    var nextScroll = 0;
    window.addEventListener('scroll', function () {
      if (nextScroll >= scrollDlgs.length) return;
      var pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (pct >= scrollDlgs[nextScroll]._pct) {
        showDlg(scrollDlgs[nextScroll]);
        nextScroll++;
      }
    }, { passive: true });
  }

}());
