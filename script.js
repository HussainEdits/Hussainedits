const projects = window.PORTFOLIO_PROJECTS || [];
const grid=document.getElementById('project-grid');
const categoryOrder = ['Corporate', 'Brand', 'Broadcast'];
const fallbackNumbers = {
 'Airbus': 1, 'Al Rajhi Bank': 2, 'Bank D360': 3, 'GPCA Qatar': 4,
 'SABIC': 5, 'OSP': 6, 'GO TELECOMS': 7, 'Museums Commission': 8,
 'Tuwaiq': 9, 'Metet Moraba’a': 10, 'Almsafa Sefr': 11, 'Sirar by stc': 12,
 'Saudia': 13, 'HungerStation': 14, 'Lucid Motors': 15, 'EVIQ': 16,
 'Elm': 17, 'Sona3 Alaqar': 18, 'vivo': 19, 'Hajj 2026': 20, 'Bakora': 21
};
function videoCover(url) {
 if (!url) return '';
 const youtube = url.startsWith('https://youtu.be/') ? url.split('/')[3].split('?')[0] : '';
 if (youtube) return `https://i.ytimg.com/vi/${youtube}/hqdefault.jpg`;
 const drive = url.startsWith('https://drive.google.com/file/d/') ? url.split('/')[5] : '';
 return drive ? `https://drive.google.com/thumbnail?id=${drive}&sz=w1000` : '';
}
function render(filter='All') {
 const visible = filter === 'All'
  ? [...projects].sort((a,b)=>categoryOrder.indexOf(a[2])-categoryOrder.indexOf(b[2]))
  : projects.filter(project=>project[2]===filter);
 grid.innerHTML=visible.map(([name,kind,category,url,,style])=>{
 const fallback = `cover-${fallbackNumbers[name] || 6}.svg`;
 const src=name==='Bank D360'?'d360-cover.png':name==='Lucid Motors'?'lucid-cover.png':name==='EVIQ'?'eviq-cover.png':name==='vivo'?'vivo-cover.png':name==='Museums Commission'?'museums-cover.png':name==='Saudia'?'saudia-cover.png':name==='Sirar by stc'?'sirar-cover.png':name==='Elm'?'elm-cover.png':name==='Al Rajhi Bank'?'alrajhi-cover.png':name==='OSP'?'osp-cover.png':name==='HungerStation'?'hungerstation-cover.png':name==='Sona3 Alaqar'?'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=78':(videoCover(url) || fallback);
 const safeName=htmlEscape(name),safeKind=htmlEscape(kind);
 const card=`<div class="project-art ${style}"><img class="project-photo" src="${src}" alt="${safeName} project cover" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${fallback}'"><div class="photo-shade"></div></div><div class="project-info"><div><h3>${safeName} <span class="separator">|</span> ${safeKind}</h3><p>${category==='Broadcast'?'Broadcast / Entertainment':category==='Corporate'?'Corporate / Documentary':'Brand / Commercial'}</p></div>${url?'<span class="play">▶</span>':''}</div>`;
 return url?`<a class="project-card" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Watch ${safeName} — ${safeKind}">${card}</a>`:`<article class="project-card no-link">${card}</article>`;
 }).join('');
}
function htmlEscape(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
render();for(const [id,value] of [['project-count',`(${projects.length})`],['all-count',`(${projects.length})`],['stat-count',String(projects.length)]]){const el=document.getElementById(id);if(el)el.textContent=value;}document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter)}));document.getElementById('year').textContent=new Date().getFullYear();const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));











































