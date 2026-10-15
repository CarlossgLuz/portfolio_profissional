(() => {
  const precise = window.matchMedia('(hover: hover) and (pointer: fine)');
  const dot = $('cd'), ring = $('cr');
  if (!dot || !ring) return;
  let mouseX=innerWidth/2,mouseY=innerHeight/2,ringX=mouseX,ringY=mouseY;
  let frame=0,inside=true;
  function enabled() {
    return precise.matches && !prefersReducedMotion.matches && !document.hidden && inside && !document.body.classList.contains('gallery-open') && !document.documentElement.classList.contains('motion-paused');
  }
  function render() {
    frame=0;
    if(!enabled())return;
    ringX+=(mouseX-ringX)*.16;ringY+=(mouseY-ringY)*.16;
    ring.style.transform=`translate3d(${ringX}px,${ringY}px,0) translate(-50%,-50%)`;
    if(Math.abs(mouseX-ringX)+Math.abs(mouseY-ringY)>.1) frame=requestAnimationFrame(render);
  }
  function sync() {
    const active=enabled();document.body.classList.toggle('cursor-ready',active);
    if(!active) {cancelAnimationFrame(frame);frame=0;document.body.classList.remove('cbig');}
    else if(!frame)frame=requestAnimationFrame(render);
  }
  document.addEventListener('mousemove',event=>{
    mouseX=event.clientX;mouseY=event.clientY;
    if(!enabled())return;
    dot.style.transform=`translate3d(${mouseX}px,${mouseY}px,0) translate(-50%,-50%)`;
    if(!frame)frame=requestAnimationFrame(render);
  },{passive:true});
  document.addEventListener('mouseover',event=>document.body.classList.toggle('cbig',enabled() && Boolean(event.target.closest('a,button'))));
  document.addEventListener('mouseleave',()=>{inside=false;sync();});
  document.addEventListener('mouseenter',()=>{inside=true;sync();});
  document.addEventListener('visibilitychange',sync);
  window.addEventListener('portfolio:motionchange',sync);
  window.addEventListener('portfolio:overlaychange',sync);
  precise.addEventListener?.('change',sync);prefersReducedMotion.addEventListener?.('change',sync);
  sync();
})();
