(() => {
'use strict';
document.documentElement.classList.add('has-js');
const root=document.documentElement, menu=document.querySelector('.menu-button'), nav=document.querySelector('#main-nav');
const closeMenu=()=>{menu?.setAttribute('aria-expanded','false');nav?.classList.remove('is-open');};
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav?.classList.toggle('is-open',open);});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
const theme=document.querySelector('.theme-button'), system=matchMedia('(prefers-color-scheme: dark)');
const label=()=>theme?.setAttribute('aria-label',root.dataset.theme==='dark'?'Activer le thème clair':'Activer le thème sombre');
label();theme?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';root.dataset.preference=root.dataset.theme;try{localStorage.setItem('support-blue-theme',root.dataset.theme);}catch{}label();});
system.addEventListener('change',()=>{if(!['light','dark'].includes(root.dataset.preference)){root.dataset.theme=system.matches?'dark':'light';label();}});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
const group=button.dataset.filter,value=button.dataset.value;
document.querySelectorAll(`[data-filter="${group}"]`).forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
const rows=group==='projects'?document.querySelectorAll('.project-card[data-category]'):document.querySelectorAll('tr[data-bloc]');let count=0;
rows.forEach(row=>{const show=value==='all'||(group==='projects'?row.dataset.category:row.dataset.bloc)===value;row.hidden=!show;if(show)count++;});
const counter=document.getElementById(group==='projects'?'project-count':'matrix-count');if(counter)counter.textContent=`${count} ${group==='projects'?'réalisation'+(count>1?'s':''):'compétence'+(count>1?'s':'')}`;
}));
const dialog=document.getElementById('image-viewer');let origin;
document.querySelectorAll('[data-zoom]').forEach(button=>button.addEventListener('click',()=>{
if(!dialog)return;origin=button;const img=document.getElementById('viewer-image');img.src=button.dataset.zoom;img.alt=button.querySelector('img')?.alt||button.dataset.caption||'Capture agrandie';document.getElementById('viewer-caption').textContent=button.dataset.caption||'';dialog.showModal();document.body.classList.add('viewer-open');
}));
dialog?.querySelector('.viewer-close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog?.addEventListener('close',()=>{document.body.classList.remove('viewer-open');origin?.focus();});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(!reduced.matches&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('js-reveal');observer.observe(el);});reduced.addEventListener('change',()=>{if(reduced.matches)document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));});}
})();
