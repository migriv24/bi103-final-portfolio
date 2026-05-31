(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`science-concepts`,outcome:`Science Concepts`,group:`science`,title:`Nervous System Lab`,url:`https://migriv24.github.io/bi103-nervous-lab/`,placeholder:!1,accent:`#4ECDC4`,previewBg:`linear-gradient(135deg, #0a1e2e 0%, #0d2840 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="35" r="9" fill="currentColor" opacity="0.9"/>
      <line x1="50" y1="35" x2="78" y2="16" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
      <line x1="50" y1="35" x2="83" y2="43" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
      <line x1="50" y1="35" x2="70" y2="61" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
      <line x1="50" y1="35" x2="22" y2="56" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
      <line x1="50" y1="35" x2="17" y2="28" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
      <circle cx="78" cy="16" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="83" cy="43" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="70" cy="61" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="22" cy="56" r="3" fill="currentColor" opacity="0.5"/>
      <circle cx="17" cy="28" r="3" fill="currentColor" opacity="0.5"/>
    </svg>`,caption:`Evidence, hypothesis, and cause-and-effect define how scientists understand neural function. This lab connects observable neural signals to biological theory, tracing how the brain processes information from neuron to perception.`},{id:`science-skills`,outcome:`Science Skills`,group:`science`,title:`Experimental Design Media`,url:`#`,placeholder:!0,accent:`#4ECDC4`,previewBg:`linear-gradient(135deg, #141030 0%, #1a1442 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 8 L42 34 L21 62 L79 62 L58 34 L58 8 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor" fill-opacity="0.1" opacity="0.85"/>
      <line x1="37" y1="8" x2="63" y2="8" stroke="currentColor" stroke-width="2.5" opacity="0.9"/>
      <circle cx="38" cy="52" r="4" fill="currentColor" opacity="0.55"/>
      <circle cx="54" cy="47" r="3" fill="currentColor" opacity="0.45"/>
      <circle cx="46" cy="57" r="3.5" fill="currentColor" opacity="0.5"/>
    </svg>`,caption:`Science skills are the process behind discovery. This media piece designs a biohacking experiment from scratch, making the steps of hypothesis formation, variable selection, and protocol design explicit and applicable.`},{id:`science-connections`,outcome:`Science Connections`,group:`science`,title:`Disease Literacy Lab`,url:`https://migriv24.github.io/bi103-disease-lab/`,placeholder:!1,accent:`#4ECDC4`,previewBg:`linear-gradient(135deg, #1f0a0a 0%, #320f0f 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="35" r="22" stroke="currentColor" stroke-width="2" opacity="0.75"/>
      <circle cx="50" cy="35" r="13" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <circle cx="50" cy="35" r="6" fill="currentColor" opacity="0.35"/>
      <circle cx="32" cy="20" r="5" fill="currentColor" opacity="0.25"/>
      <circle cx="70" cy="52" r="4" fill="currentColor" opacity="0.2"/>
      <circle cx="25" cy="48" r="3.5" fill="currentColor" opacity="0.2"/>
    </svg>`,caption:`Scientific knowledge shapes how society responds to disease. This lab examines how disease information travels through media and public health, building the literacy to evaluate scientific claims in the real world.`},{id:`biology-concepts`,outcome:`Biology Concepts`,group:`biology`,title:`Immune Lab`,url:`https://migriv24.github.io/bi103-immune-lab/`,placeholder:!1,accent:`#56CF8E`,previewBg:`linear-gradient(135deg, #0a1f12 0%, #0d2a1a 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="62" x2="50" y2="40" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
      <line x1="50" y1="40" x2="30" y2="18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>
      <line x1="50" y1="40" x2="70" y2="18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>
      <circle cx="30" cy="18" r="6" fill="currentColor" opacity="0.7"/>
      <circle cx="70" cy="18" r="6" fill="currentColor" opacity="0.7"/>
      <circle cx="50" cy="62" r="5" fill="currentColor" opacity="0.5"/>
      <line x1="72" y1="60" x2="72" y2="48" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
      <line x1="72" y1="48" x2="60" y2="36" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
      <line x1="72" y1="48" x2="84" y2="36" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
    </svg>`,caption:`The immune system is one of biology's most complex, organized systems. This lab traces how B cells, T cells, and antibodies perform specific functions together, placing the adaptive immune response in an evolutionary context.`},{id:`biology-skills`,outcome:`Biology Skills`,group:`biology`,title:`Skeletal and Muscular Lab`,url:`https://migriv24.github.io/bi103-movement-lab/`,placeholder:!1,accent:`#56CF8E`,previewBg:`linear-gradient(135deg, #1a1500 0%, #2a2200 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="44" y="10" width="12" height="50" rx="6" fill="currentColor" opacity="0.85"/>
      <ellipse cx="50" cy="11" rx="13" ry="10" fill="currentColor" opacity="0.9"/>
      <ellipse cx="50" cy="59" rx="13" ry="10" fill="currentColor" opacity="0.9"/>
      <ellipse cx="50" cy="11" rx="6" ry="4" fill="currentColor" fill-opacity="0.25" opacity="0.6"/>
      <ellipse cx="50" cy="59" rx="6" ry="4" fill="currentColor" fill-opacity="0.25" opacity="0.6"/>
    </svg>`,caption:`Biology skills start with careful observation and inference. This lab analyzes skeletal and muscular structures to understand how their features produce movement, applying the same reasoning biologists use with any organism.`},{id:`biology-connections`,outcome:`Biology Connections`,group:`biology`,title:`Digestive System Ranger`,url:`https://migriv24.github.io/digestive-system-ranger/`,placeholder:!1,accent:`#56CF8E`,previewBg:`linear-gradient(135deg, #0d1a0a 0%, #142810 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="44" y="8"  width="12" height="12" rx="1" fill="currentColor" opacity="0.9"/>
      <rect x="40" y="20" width="20" height="16" rx="1" fill="currentColor" opacity="0.9"/>
      <rect x="40" y="36" width="8"  height="16" rx="1" fill="currentColor" opacity="0.85"/>
      <rect x="52" y="36" width="8"  height="16" rx="1" fill="currentColor" opacity="0.85"/>
      <rect x="18" y="56" width="22" height="9"  rx="2" fill="currentColor" opacity="0.4"/>
      <rect x="60" y="56" width="22" height="9"  rx="2" fill="currentColor" opacity="0.4"/>
      <circle cx="24" cy="30" r="4" fill="currentColor" opacity="0.55"/>
      <circle cx="76" cy="24" r="4" fill="currentColor" opacity="0.55"/>
    </svg>`,caption:`Biology is most meaningful when personal. This game turns the digestive system into a daily experience the player can feel, connecting biological knowledge to lived life in a way that sticks beyond the classroom.`},{id:`human-concepts`,outcome:`Human Biology Concepts`,group:`human`,title:`Infectious Diseases Lab`,url:`#`,placeholder:!0,accent:`#FF6B9D`,previewBg:`linear-gradient(135deg, #1f0a10 0%, #320a18 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="35" r="8"  fill="currentColor" opacity="0.9"/>
      <circle cx="22" cy="18" r="5"  fill="currentColor" opacity="0.7"/>
      <circle cx="78" cy="18" r="5"  fill="currentColor" opacity="0.7"/>
      <circle cx="18" cy="54" r="5"  fill="currentColor" opacity="0.7"/>
      <circle cx="82" cy="54" r="5"  fill="currentColor" opacity="0.7"/>
      <line x1="50" y1="35" x2="22" y2="18" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <line x1="50" y1="35" x2="78" y2="18" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <line x1="50" y1="35" x2="18" y2="54" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <line x1="50" y1="35" x2="82" y2="54" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <circle cx="8"  cy="10" r="3" fill="currentColor" opacity="0.4"/>
      <circle cx="90" cy="10" r="3" fill="currentColor" opacity="0.4"/>
      <circle cx="6"  cy="62" r="3" fill="currentColor" opacity="0.4"/>
      <circle cx="94" cy="62" r="3" fill="currentColor" opacity="0.4"/>
    </svg>`,caption:`Human populations are biological systems too. This lab models infectious disease spread using epidemiological frameworks, exploring transmission rate, R₀, and herd immunity to understand how our species responds to biological threats at scale.`},{id:`human-skills`,outcome:`Human Skills`,group:`human`,title:`Data Management Lab`,url:`https://migriv24.github.io/bi103-datamgmt-lab/`,placeholder:!1,accent:`#FF6B9D`,previewBg:`linear-gradient(135deg, #1a0a20 0%, #280a30 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="13" y1="64" x2="90" y2="64" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
      <line x1="13" y1="10" x2="13" y2="64" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
      <rect x="20" y="44" width="12" height="20" rx="2" fill="currentColor" opacity="0.9"/>
      <rect x="38" y="28" width="12" height="36" rx="2" fill="currentColor" opacity="0.9"/>
      <rect x="56" y="36" width="12" height="28" rx="2" fill="currentColor" opacity="0.7"/>
      <rect x="74" y="16" width="12" height="48" rx="2" fill="currentColor" opacity="0.9"/>
    </svg>`,caption:`Researching humans requires both technical skill and ethical care. This lab covers data collection methods, validation practices, and the principles of informed consent and privacy that govern responsible human biological research.`},{id:`human-connections`,outcome:`Human Connections`,group:`human`,title:`Body Data Visualization`,url:`#`,placeholder:!0,accent:`#FF6B9D`,previewBg:`linear-gradient(135deg, #0a141e 0%, #0d1e2c 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="8,58 22,42 38,50 54,26 70,34 90,18" stroke="currentColor" stroke-width="2.5" fill="none" opacity="0.9" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="8,64 28,54 46,60 62,46 78,52 90,40" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.45" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="8"  cy="58" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="22" cy="42" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="54" cy="26" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="90" cy="18" r="3" fill="currentColor" opacity="0.8"/>
    </svg>`,caption:`Communicating about human biology means matching the message to the medium. This media piece translates biological datasets into visual formats, making human body data legible and personally relevant to a general audience.`}];function t(e){let t=parseInt(e.slice(1),16);return`${t>>16&255}, ${t>>8&255}, ${t&255}`}function n(){let e=window.innerWidth,t=window.innerHeight,n=Math.min(e,t),r=e<600,i=Math.round(Math.min(n*(r?.2:.145),r?82:128)),a=Math.round(Math.min(n*.33,r?148:282));return{bubbleSize:i,orbitRadius:a,centerW:Math.round((a-i*.55)*2),sm:r}}var r=class{constructor(e){this.canvas=e,this.ctx=e.getContext(`2d`),this.pts=[],this.resize(),window.addEventListener(`resize`,()=>this.resize()),this.frame()}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight;let e=Math.min(75,Math.floor(this.canvas.width*this.canvas.height/16e3));this.pts=Array.from({length:e},()=>({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.3+.4,a:Math.random()*.3+.07}))}frame(){let{ctx:e,canvas:t,pts:n}=this;e.clearRect(0,0,t.width,t.height);for(let e of n)e.x+=e.vx,e.y+=e.vy,(e.x<0||e.x>t.width)&&(e.vx*=-1),(e.y<0||e.y>t.height)&&(e.vy*=-1);for(let t=0;t<n.length;t++)for(let r=t+1;r<n.length;r++){let i=n[t].x-n[r].x,a=n[t].y-n[r].y,o=Math.sqrt(i*i+a*a);o<125&&(e.beginPath(),e.strokeStyle=`rgba(100,200,220,${.065*(1-o/125)})`,e.lineWidth=.6,e.moveTo(n[t].x,n[t].y),e.lineTo(n[r].x,n[r].y),e.stroke())}for(let t of n)e.beginPath(),e.fillStyle=`rgba(140,215,235,${t.a})`,e.arc(t.x,t.y,t.r,0,Math.PI*2),e.fill();requestAnimationFrame(()=>this.frame())}};function i(){let n=document.getElementById(`orbit`);n.innerHTML=``,e.forEach((e,r)=>{let i=document.createElement(`article`);i.className=`outcome-card`,i.dataset.id=e.id,i.dataset.group=e.group,i.innerHTML=`
      <div class="bubble-wrapper">
        <div class="bubble"
             style="--float-dur:${(4.5+Math.random()*3.5).toFixed(2)+`s`};--float-delay:${(-Math.random()*8).toFixed(2)+`s`};--accent-rgb:${t(e.accent)}">
          <div class="preview">
            <div class="preview-chrome">
              <span></span><span></span><span></span>
            </div>
            <div class="preview-body" style="background:${e.previewBg}">
              <div class="preview-icon" style="color:${e.accent}">${e.svg}</div>
              <p class="preview-title">${e.title}</p>
            </div>
          </div>
        </div>
      </div>
      <p class="outcome-label" style="color:${e.accent}">${e.outcome}</p>
    `,n.appendChild(i)})}function a(){let{bubbleSize:e,orbitRadius:t,centerW:r}=n();document.documentElement.style.setProperty(`--bubble-size`,e+`px`),document.getElementById(`center`).style.setProperty(`--center-w`,r+`px`),document.getElementById(`center`).style.width=r+`px`;let i=document.querySelectorAll(`.outcome-card`),a=i.length;i.forEach((e,n)=>{let r=n/a*Math.PI*2-Math.PI/2,i=Math.round(Math.cos(r)*t),o=Math.round(Math.sin(r)*t);e.style.transform=`translate(calc(${i}px - 50%), calc(${o}px - 50%))`})}var o=document.getElementById(`center`),s=document.getElementById(`dOutcome`),c=document.getElementById(`dCaption`),l=document.getElementById(`dActions`),u=null;function d(e){clearTimeout(u),o.classList.add(`showing-detail`),o.style.setProperty(`--d-accent`,e.accent),s.textContent=e.outcome,s.style.color=e.accent,c.textContent=e.caption,l.innerHTML=e.placeholder?`<span class="coming-soon">In Development</span>`:`<a class="visit-btn" href="${e.url}" target="_blank" rel="noopener"
          style="color:${e.accent};border-color:${e.accent}">Visit Lab</a>`}function f(){clearTimeout(u),u=setTimeout(()=>o.classList.remove(`showing-detail`),140)}function p(){window.matchMedia(`(hover: hover)`).matches&&document.querySelectorAll(`.outcome-card`).forEach(t=>{let n=t.dataset.id,r=e.find(e=>e.id===n);t.addEventListener(`mouseenter`,()=>{t.classList.add(`active`),d(r)}),t.addEventListener(`mouseleave`,()=>{t.classList.remove(`active`),f()})})}function m(){window.matchMedia(`(hover: hover)`).matches&&document.querySelectorAll(`.bubble-wrapper`).forEach(e=>{e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-(n.left+n.width/2))/(n.width/2),i=(t.clientY-(n.top+n.height/2))/(n.height/2);e.style.transform=`perspective(550px) rotateX(${i*-13}deg) rotateY(${r*13}deg) scale(1.05)`}),e.addEventListener(`mouseleave`,()=>{e.style.transform=``})})}var h=document.getElementById(`mobilePanel`),g=document.getElementById(`panelClose`),_=document.getElementById(`pOutcome`),v=document.getElementById(`pCaption`),y=document.getElementById(`pActions`);function b(e){_.textContent=e.outcome,_.style.color=e.accent,v.textContent=e.caption,y.innerHTML=e.placeholder?`<span class="coming-soon">In Development</span>`:`<a class="visit-btn" href="${e.url}" target="_blank" rel="noopener"
          style="color:${e.accent};border-color:${e.accent}">Visit Lab</a>`,h.classList.add(`open`)}function x(){h.classList.remove(`open`)}function S(){window.matchMedia(`(hover: hover)`).matches||(document.querySelectorAll(`.outcome-card`).forEach(t=>{let n=t.dataset.id,r=e.find(e=>e.id===n);t.addEventListener(`click`,e=>{e.target.closest(`a`)||b(r)})}),g.addEventListener(`click`,x))}window.addEventListener(`resize`,a),new r(document.getElementById(`bg`)),i(),a(),p(),m(),S();