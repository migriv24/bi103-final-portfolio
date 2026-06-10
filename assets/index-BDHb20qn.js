(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`science-concepts`,outcome:`Science Concepts`,group:`science`,title:`Nervous System Lab`,url:`https://migriv24.github.io/bi103-nervous-lab/`,placeholder:!1,accent:`#4d96ff`,previewBg:`linear-gradient(135deg, #1a2e50 0%, #2a4070 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`,caption:`Evidence, hypothesis, and cause-and-effect define how scientists understand neural function. This lab connects observable neural signals to biological theory, tracing how the brain processes information from neuron to perception.`},{id:`science-skills`,outcome:`Science Skills`,group:`science`,title:`Experimental Design Media`,url:`https://migriv24.github.io/bi103-experiment-lab/`,placeholder:!1,accent:`#4d96ff`,previewBg:`linear-gradient(135deg, #20205a 0%, #2a2a70 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 8 L42 34 L21 62 L79 62 L58 34 L58 8 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor" fill-opacity="0.1" opacity="0.85"/>
      <line x1="37" y1="8" x2="63" y2="8" stroke="currentColor" stroke-width="2.5" opacity="0.9"/>
      <circle cx="38" cy="52" r="4" fill="currentColor" opacity="0.55"/>
      <circle cx="54" cy="47" r="3" fill="currentColor" opacity="0.45"/>
      <circle cx="46" cy="57" r="3.5" fill="currentColor" opacity="0.5"/>
    </svg>`,caption:`Science skills are the process behind discovery. This piece designs an experiment from scratch, asking whether two strength sessions a week can make my easy runs faster, and makes the hypothesis, variables, controls, and protocol explicit. It is a study designed, not run.`},{id:`science-connections`,outcome:`Science Connections`,group:`science`,title:`Disease Literacy Lab`,url:`https://migriv24.github.io/bi103-disease-lab/`,placeholder:!1,accent:`#4d96ff`,previewBg:`linear-gradient(135deg, #3a1020 0%, #501828 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="35" r="22" stroke="currentColor" stroke-width="2" opacity="0.75"/>
      <circle cx="50" cy="35" r="13" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
      <circle cx="50" cy="35" r="6" fill="currentColor" opacity="0.35"/>
      <circle cx="32" cy="20" r="5" fill="currentColor" opacity="0.25"/>
      <circle cx="70" cy="52" r="4" fill="currentColor" opacity="0.2"/>
      <circle cx="25" cy="48" r="3.5" fill="currentColor" opacity="0.2"/>
    </svg>`,caption:`Scientific knowledge shapes how society responds to disease. This lab examines how disease information travels through media and public health, building the literacy to evaluate scientific claims in the real world.`},{id:`biology-concepts`,outcome:`Biology Concepts`,group:`biology`,title:`Immune Lab`,url:`https://migriv24.github.io/bi103-immune-lab/`,placeholder:!1,accent:`#6bcb77`,previewBg:`linear-gradient(135deg, #1a3a20 0%, #285030 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="62" x2="50" y2="40" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
      <line x1="50" y1="40" x2="30" y2="18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>
      <line x1="50" y1="40" x2="70" y2="18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>
      <circle cx="30" cy="18" r="6" fill="currentColor" opacity="0.7"/>
      <circle cx="70" cy="18" r="6" fill="currentColor" opacity="0.7"/>
      <circle cx="50" cy="62" r="5" fill="currentColor" opacity="0.5"/>
      <line x1="72" y1="60" x2="72" y2="48" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
      <line x1="72" y1="48" x2="60" y2="36" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
      <line x1="72" y1="48" x2="84" y2="36" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
    </svg>`,caption:`The immune system is one of biology's most complex, organized systems. This lab traces how B cells, T cells, and antibodies perform specific functions together, placing the adaptive immune response in an evolutionary context.`},{id:`biology-skills`,outcome:`Biology Skills`,group:`biology`,title:`Skeletal and Muscular Lab`,url:`https://migriv24.github.io/bi103-movement-lab/`,placeholder:!1,accent:`#6bcb77`,previewBg:`linear-gradient(135deg, #302800 0%, #483c00 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="44" y="10" width="12" height="50" rx="6" fill="currentColor" opacity="0.85"/>
      <ellipse cx="50" cy="11" rx="13" ry="10" fill="currentColor" opacity="0.9"/>
      <ellipse cx="50" cy="59" rx="13" ry="10" fill="currentColor" opacity="0.9"/>
      <ellipse cx="50" cy="11" rx="6" ry="4" fill="currentColor" fill-opacity="0.25" opacity="0.6"/>
      <ellipse cx="50" cy="59" rx="6" ry="4" fill="currentColor" fill-opacity="0.25" opacity="0.6"/>
    </svg>`,caption:`Biology skills start with careful observation and inference. This lab analyzes skeletal and muscular structures to understand how their features produce movement, applying the same reasoning biologists use with any organism.`},{id:`biology-connections`,outcome:`Biology Connections`,group:`biology`,title:`Digestive System Ranger`,url:`https://migriv24.github.io/digestive-system-ranger/`,placeholder:!1,accent:`#6bcb77`,previewBg:`linear-gradient(135deg, #1a3020 0%, #204020 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="44" y="8"  width="12" height="12" rx="1" fill="currentColor" opacity="0.9"/>
      <rect x="40" y="20" width="20" height="16" rx="1" fill="currentColor" opacity="0.9"/>
      <rect x="40" y="36" width="8"  height="16" rx="1" fill="currentColor" opacity="0.85"/>
      <rect x="52" y="36" width="8"  height="16" rx="1" fill="currentColor" opacity="0.85"/>
      <rect x="18" y="56" width="22" height="9"  rx="2" fill="currentColor" opacity="0.4"/>
      <rect x="60" y="56" width="22" height="9"  rx="2" fill="currentColor" opacity="0.4"/>
      <circle cx="24" cy="30" r="4" fill="currentColor" opacity="0.55"/>
      <circle cx="76" cy="24" r="4" fill="currentColor" opacity="0.55"/>
    </svg>`,caption:`Biology is most meaningful when personal. This game turns the digestive system into a daily experience the player can feel, connecting biological knowledge to lived life in a way that sticks beyond the classroom.`},{id:`human-concepts`,outcome:`Human Biology Concepts`,group:`human`,title:`Infectious Diseases Lab`,url:`https://migriv24.github.io/bi103-infectious-disease-lab/`,placeholder:!1,accent:`#ff6b6b`,previewBg:`linear-gradient(135deg, #4a1010 0%, #601818 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`,caption:`Some diseases never left, even as the world moved on. This piece documents two of them as they stand in 2026, a parasite (malaria) and a pathogen (tuberculosis), tracing how each one spreads, what it does to the body, and where prevention and treatment stand. It turns the biology of infection into a field dossier on living alongside disease.`},{id:`human-skills`,outcome:`Human Skills`,group:`human`,title:`Data Management Lab`,url:`https://migriv24.github.io/bi103-datamgmt-lab/`,placeholder:!1,accent:`#ff6b6b`,previewBg:`linear-gradient(135deg, #2a1050 0%, #381860 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="13" y1="64" x2="90" y2="64" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
      <line x1="13" y1="10" x2="13" y2="64" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
      <rect x="20" y="44" width="12" height="20" rx="2" fill="currentColor" opacity="0.9"/>
      <rect x="38" y="28" width="12" height="36" rx="2" fill="currentColor" opacity="0.9"/>
      <rect x="56" y="36" width="12" height="28" rx="2" fill="currentColor" opacity="0.7"/>
      <rect x="74" y="16" width="12" height="48" rx="2" fill="currentColor" opacity="0.9"/>
    </svg>`,caption:`Researching humans requires both technical skill and ethical care. This lab covers data collection methods, validation practices, and the principles of informed consent and privacy that govern responsible human biological research.`},{id:`human-connections`,outcome:`Human Connections`,group:`human`,title:`Body Data Visualization`,url:`https://migriv24.github.io/bi103-bodyviz-lab/`,placeholder:!1,accent:`#ff6b6b`,previewBg:`linear-gradient(135deg, #1a2040 0%, #20284e 100%)`,svg:`<svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="8,58 22,42 38,50 54,26 70,34 90,18" stroke="currentColor" stroke-width="2.5" fill="none" opacity="0.9" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="8,64 28,54 46,60 62,46 78,52 90,40" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.45" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="8"  cy="58" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="22" cy="42" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="54" cy="26" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="90" cy="18" r="3" fill="currentColor" opacity="0.8"/>
    </svg>`,caption:`Communicating about human biology means matching the message to the medium. This media piece translates biological datasets into visual formats, making human body data legible and personally relevant to a general audience.`}];function t(e){let t=parseInt(e.slice(1),16);return`${t>>16&255}, ${t>>8&255}, ${t&255}`}function n(){let e=window.innerWidth,t=Math.min(e,window.innerHeight),n=e<600,r=Math.round(Math.min(t*(n?.2:.145),n?82:128)),i=Math.round(Math.min(t*.33,n?148:282));return{bubbleSize:r,orbitRadius:i,centerW:Math.min(Math.round((i-r*.55)*2),300)}}var r=class{constructor(e){this.canvas=e,this.ctx=e.getContext(`2d`),this.orbs=[{bx:.12,by:.22,r:260,c:[77,150,255],s:28e-5,p:0},{bx:.78,by:.18,r:230,c:[107,203,119],s:22e-5,p:1.8},{bx:.85,by:.78,r:270,c:[255,107,107],s:19e-5,p:3.6},{bx:.22,by:.82,r:200,c:[255,217,61],s:31e-5,p:5.1},{bx:.52,by:.48,r:190,c:[150,210,255],s:16e-5,p:2.4}],this.resize(),window.addEventListener(`resize`,()=>this.resize()),requestAnimationFrame(e=>this.frame(e))}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}frame(e){let{ctx:t,canvas:n,orbs:r}=this;t.clearRect(0,0,n.width,n.height);let i=Math.min(n.width,n.height)/800;for(let a of r){let r=e*a.s+a.p,o=.08,s=(a.bx+Math.cos(r)*o)*n.width,c=(a.by+Math.sin(r)*o)*n.height,l=a.r*Math.max(i,.5),u=t.createRadialGradient(s,c,0,s,c,l);u.addColorStop(0,`rgba(${a.c},0.18)`),u.addColorStop(.5,`rgba(${a.c},0.07)`),u.addColorStop(1,`rgba(${a.c},0)`),t.beginPath(),t.arc(s,c,l,0,Math.PI*2),t.fillStyle=u,t.fill()}requestAnimationFrame(e=>this.frame(e))}};function i(){let n=document.getElementById(`orbit`);n.innerHTML=``,e.forEach(e=>{let r=document.createElement(`article`);r.className=`outcome-card`,r.dataset.id=e.id,r.dataset.group=e.group,r.innerHTML=`
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
    `,n.appendChild(r)})}function a(){let{bubbleSize:e,orbitRadius:t,centerW:r}=n();document.documentElement.style.setProperty(`--bubble-size`,e+`px`);let i=document.getElementById(`center`);i.style.width=r+`px`;let a=document.querySelectorAll(`.outcome-card`),o=a.length;a.forEach((e,n)=>{let r=n/o*Math.PI*2-Math.PI/2,i=Math.round(Math.cos(r)*t),a=Math.round(Math.sin(r)*t);e.style.transform=`translate(calc(${i}px - 50%), calc(${a}px - 50%))`})}var o=document.getElementById(`center`),s=document.getElementById(`dOutcome`),c=document.getElementById(`dCaption`),l=document.getElementById(`dActions`),u=null,d=null;function f(e){clearTimeout(u),o.classList.add(`showing-detail`),s.textContent=e.outcome,s.style.color=e.accent,c.textContent=e.caption,l.innerHTML=e.placeholder?`<span class="coming-soon">In Development</span>`:`<a class="visit-btn" href="${e.url}" target="_blank" rel="noopener"
          style="color:${e.accent};border-color:${e.accent}">Visit Lab</a>`}function p(e=400){clearTimeout(u),u=setTimeout(()=>{d||o.classList.remove(`showing-detail`)},e)}o.addEventListener(`mouseenter`,()=>clearTimeout(u)),o.addEventListener(`mouseleave`,()=>{d||p(250)});function m(){window.matchMedia(`(hover: hover)`).matches&&(document.querySelectorAll(`.outcome-card`).forEach(t=>{let n=e.find(e=>e.id===t.dataset.id);t.addEventListener(`mouseenter`,()=>{clearTimeout(u),t.classList.add(`active`),f(n)}),t.addEventListener(`mouseleave`,()=>{d!==t&&(t.classList.remove(`active`),p(400))}),t.addEventListener(`click`,e=>{e.target.closest(`a`)||(d===t?(d=null,t.classList.remove(`active`),p(100)):(d&&d.classList.remove(`active`),d=t,t.classList.add(`active`),f(n)))})}),document.querySelector(`.scene`).addEventListener(`click`,e=>{!e.target.closest(`.outcome-card`)&&!e.target.closest(`.center`)&&d&&(d.classList.remove(`active`),d=null,p(100))}))}function h(){window.matchMedia(`(hover: hover)`).matches&&document.querySelectorAll(`.bubble-wrapper`).forEach(e=>{e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-(n.left+n.width/2))/(n.width/2),i=(t.clientY-(n.top+n.height/2))/(n.height/2);e.style.transform=`perspective(550px) rotateX(${i*-12}deg) rotateY(${r*12}deg) scale(1.05)`}),e.addEventListener(`mouseleave`,()=>{e.style.transform=``})})}var g=document.getElementById(`mobilePanel`),_=document.getElementById(`pOutcome`),v=document.getElementById(`pCaption`),y=document.getElementById(`pActions`);function b(){window.matchMedia(`(hover: hover)`).matches||(document.querySelectorAll(`.outcome-card`).forEach(t=>{let n=e.find(e=>e.id===t.dataset.id);t.addEventListener(`click`,e=>{e.target.closest(`a`)||(_.textContent=n.outcome,_.style.color=n.accent,v.textContent=n.caption,y.innerHTML=n.placeholder?`<span class="coming-soon">In Development</span>`:`<a class="visit-btn" href="${n.url}" target="_blank" rel="noopener"
              style="color:${n.accent};border-color:${n.accent}">Visit Lab</a>`,g.classList.add(`open`))})}),document.getElementById(`panelClose`).addEventListener(`click`,()=>{g.classList.remove(`open`)}))}window.addEventListener(`resize`,a),new r(document.getElementById(`bg`)),i(),a(),m(),h(),b();