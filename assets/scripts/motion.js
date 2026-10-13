/* Original procedural brand scene. No scroll interception or third-party runtime. */
(() => {
  const canvas = document.getElementById('brand-canvas');
  const stage = canvas?.closest('.brand-stage');
  const film = document.querySelector('.motion-film');
  const toggle = document.getElementById('motion-toggle');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = false;
  try { userPaused = localStorage.getItem('portfolio-motion-paused') === 'true'; } catch {}
  let stageVisible = true;
  let filmVisible = false;
  let raf = 0;
  let last = 0;
  let elapsed = 0;
  let width = 0, height = 0;
  const context = canvas?.getContext('2d');
  const vertices = [];
  for (let ring = 0; ring < 7; ring++) {
    const latitude = (ring / 6 - .5) * Math.PI * .86;
    for (let i = 0; i < 24; i++) {
      const longitude = i / 24 * Math.PI * 2;
      vertices.push([Math.cos(latitude) * Math.cos(longitude), Math.sin(latitude), Math.cos(latitude) * Math.sin(longitude)]);
    }
  }
  function paused() { return userPaused || reduced.matches; }
  function render(time = 0) {
    if (!context || !width) return;
    context.clearRect(0, 0, width, height);
    const rotation = time * .00012 + .3;
    const projected = vertices.map(([x,y,z]) => {
      const rx = x * Math.cos(rotation) - z * Math.sin(rotation);
      const rz = x * Math.sin(rotation) + z * Math.cos(rotation);
      const ry = y * .9 - rz * .38;
      const depth = y * .38 + rz * .9;
      const scale = 1 / (1 + depth * .17);
      const radius = Math.min(width,height) * .37;
      return [width * .5 + rx * radius * scale, height * .5 + ry * radius * scale, depth];
    });
    for (let n = 0; n < projected.length; n++) {
      const p = projected[n];
      const next = projected[Math.floor(n / 24) * 24 + (n + 1) % 24];
      context.strokeStyle = `rgba(255,222,89,${.045 + (p[2] + 1.4) * .045})`;
      context.lineWidth = .7;
      context.beginPath(); context.moveTo(p[0],p[1]); context.lineTo(next[0],next[1]); context.stroke();
      if (n + 24 < projected.length) {
        const q = projected[n+24];
        context.beginPath();context.moveTo(p[0],p[1]);context.lineTo(q[0],q[1]);context.stroke();
      }
      if (n % 9 === 0) {
        context.fillStyle = '#ffde59';context.globalAlpha = .2 + (p[2]+1.4)*.18;
        context.fillRect(p[0]-1,p[1]-1,2,2);context.globalAlpha=1;
      }
    }
  }
  function frame(now) {
    raf = 0;
    if (paused() || document.hidden || !stageVisible) { last=0; return; }
    if (!last || now-last >= 32) {
      elapsed += last ? Math.min(now-last,64) : 0;
      last=now;render(elapsed);
    }
    raf=requestAnimationFrame(frame);
  }
  function resize() {
    if (!stage || !canvas || !context) return;
    const rect=stage.getBoundingClientRect();width=rect.width;height=rect.height;
    const ratio=Math.min(window.devicePixelRatio || 1,1.5);
    canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);
    context.setTransform(ratio,0,0,ratio,0,0);render(elapsed);
  }
  function sync() {
    const stop=paused();
    document.documentElement.classList.toggle('motion-paused',stop);
    window.dispatchEvent(new CustomEvent('portfolio:motionchange', {detail:{paused:stop}}));
    if(toggle) {
      toggle.disabled=reduced.matches;
      toggle.setAttribute('aria-pressed',String(stop));
      const copy=window.portfolioI18n?.getPack()?.visual;
      toggle.textContent=reduced.matches ? (copy?.reduced || 'Movimento reduzido') : stop ? (copy?.motionResume || 'Ativar efeitos') : (copy?.motion || 'Pausar efeitos');
    }
    if(stop || document.hidden || !stageVisible) {cancelAnimationFrame(raf);raf=0;last=0;} else if(!raf) raf=requestAnimationFrame(frame);
    if(film) {
      if(stop || document.hidden || !filmVisible) film.pause();
      else {
        const sources=[...film.querySelectorAll('source')];
        if(sources.some(source=>source.dataset.src && !source.getAttribute('src'))) {
          sources.forEach(source=>{if(source.dataset.src)source.src=source.dataset.src;});film.load();
        }
        film.play().catch(()=>{});
      }
    }
  }
  toggle?.addEventListener('click',()=> {
    userPaused=!userPaused;
    try {localStorage.setItem('portfolio-motion-paused',String(userPaused));} catch {}
    sync();
  });
  reduced.addEventListener?.('change',sync);
  document.addEventListener('visibilitychange',sync);
  window.addEventListener('portfolio:languagechange',sync);
  if(stage && 'ResizeObserver' in window) new ResizeObserver(resize).observe(stage);
  else window.addEventListener('resize',resize,{passive:true});
  if('IntersectionObserver' in window) {
    if(stage) new IntersectionObserver(([entry])=>{stageVisible=entry.isIntersecting;sync();},{rootMargin:'80px'}).observe(stage);
    if(film) new IntersectionObserver(([entry])=>{filmVisible=entry.isIntersecting;sync();},{threshold:.1}).observe(film);
  }
  resize();sync();
})();
