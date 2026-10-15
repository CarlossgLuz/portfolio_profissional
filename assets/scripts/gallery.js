/* Recorded XGuardian 2026 delivery: lazy images, native modal focus, keyboard navigation. */
(() => {
  const dialog=document.getElementById('project-gallery');
  const opener=document.querySelector('[data-gallery-open]');
  const data=document.getElementById('gallery-data');
  if(!dialog || !opener || !data || typeof dialog.showModal!=='function')return;
  let items;
  try {items=JSON.parse(data.textContent);} catch {return;}
  if(!Array.isArray(items) || !items.length)return;
  const image=document.getElementById('gallery-image');
  const caption=document.getElementById('gallery-caption');
  const counter=document.getElementById('gallery-count');
  const original=document.getElementById('gallery-original');
  const originalLink=document.getElementById('gallery-original-link');
  const error=document.getElementById('gallery-error');
  const closeButton=document.getElementById('gallery-close');
  const thumbnails=[...dialog.querySelectorAll('[data-gallery-index]')];
  let index=0,returnFocus=null;
  const copy=()=>window.portfolioI18n.getPack().gallery;
  function updateLabels() {
    const pack=copy();
    thumbnails.forEach((button,i)=>button.setAttribute('aria-label',`${pack.select} ${i+1}: ${pack.captions[i]}`));
  }
  function show(next) {
    index=(next+items.length)%items.length;
    const item=items[index],pack=copy(),label=pack.captions[index];
    image.width=item.width;image.height=item.height;image.alt=label;
    if(image.getAttribute('src')!==item.src){error.hidden=true;image.src=item.src;}
    caption.textContent=label;counter.textContent=`${index+1} / ${items.length}`;
    original.href=item.src;originalLink.href=item.src;
    thumbnails.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
    const current=thumbnails[index],strip=dialog.querySelector('.gallery-thumbnails');
    // Scroll only the horizontal thumbnail strip; never move the document behind the modal.
    if(current && strip)strip.scrollTo({left:current.offsetLeft-strip.offsetLeft-(strip.clientWidth-current.clientWidth)/2,behavior:'instant'});
  }
  function close() {if(dialog.open)dialog.close();}
  opener.addEventListener('click',event=>{
    event.preventDefault();returnFocus=document.activeElement;
    dialog.showModal();document.body.classList.add('gallery-open');
    window.dispatchEvent(new CustomEvent('portfolio:overlaychange'));
    thumbnails.forEach(button=>{
      const thumb=button.querySelector('img[data-src]');
      if(thumb && !thumb.getAttribute('src'))thumb.src=thumb.dataset.src;
    });
    show(0);closeButton.focus();
  });
  closeButton.addEventListener('click',close);
  document.getElementById('gallery-previous').addEventListener('click',()=>show(index-1));
  document.getElementById('gallery-next').addEventListener('click',()=>show(index+1));
  thumbnails.forEach(button=>button.addEventListener('click',()=>show(Number(button.dataset.galleryIndex))));
  dialog.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'){event.preventDefault();show(index-1);}
    if(event.key==='ArrowRight'){event.preventDefault();show(index+1);}
    if(event.key==='Home'){event.preventDefault();show(0);}
    if(event.key==='End'){event.preventDefault();show(items.length-1);}
  });
  dialog.addEventListener('click',event=>{if(event.target===dialog)close();});
  dialog.addEventListener('close',()=>{
    document.body.classList.remove('gallery-open');
    window.dispatchEvent(new CustomEvent('portfolio:overlaychange'));returnFocus?.focus?.({preventScroll:true});
  });
  image.addEventListener('load',()=>{error.hidden=true;});
  image.addEventListener('error',()=>{error.hidden=false;});
  window.addEventListener('portfolio:languagechange',()=>{updateLabels();if(dialog.open)show(index);});
  updateLabels();
})();
