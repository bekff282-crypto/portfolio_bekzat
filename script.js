const themeToggle=document.getElementById('themeToggle');
if(themeToggle) themeToggle.addEventListener('click',()=>{document.body.classList.toggle('light');themeToggle.textContent=document.body.classList.contains('light')?'☾':'☀';});
const menuToggle=document.getElementById('menuToggle'),nav=document.getElementById('nav');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}
const search=document.getElementById('searchInput'),filter=document.getElementById('categoryFilter'),cards=[...document.querySelectorAll('.work-card')],empty=document.getElementById('emptyState');
function filterWorks(){let q=(search?.value||'').trim().toLowerCase(),c=filter?.value||'all',n=0;cards.forEach(card=>{let ok=card.textContent.toLowerCase().includes(q)&&(c==='all'||card.dataset.category===c);card.hidden=!ok;if(ok)n++;});if(empty)empty.hidden=n!==0;}
if(search)search.addEventListener('input',filterWorks);if(filter)filter.addEventListener('change',filterWorks);
const dialog=document.getElementById('detailsDialog');
document.querySelectorAll('.details-btn').forEach(b=>b.addEventListener('click',()=>{document.getElementById('dialogTitle').textContent=b.dataset.title;document.getElementById('dialogInfo').textContent=b.dataset.info;if(dialog)dialog.showModal();}));
const close=document.getElementById('dialogClose');if(close&&dialog)close.addEventListener('click',()=>dialog.close());
