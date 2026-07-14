(() => {
  const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  if (!precisePointer.matches || prefersReducedMotion.matches) return;

  const dot = $("cd");
  const ring = $("cr");
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let frame = 0;

  document.body.classList.add("cursor-ready");
  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }, { passive: true });

  function render() {
    ringX += (mouseX - ringX) * .16;
    ringY += (mouseY - ringY) * .16;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    frame = requestAnimationFrame(render);
  }

  document.addEventListener("mouseover", (event) => document.body.classList.toggle("cbig", Boolean(event.target.closest("a, button"))));
  document.addEventListener("mouseleave", () => {
    cancelAnimationFrame(frame);
    frame = 0;
    document.body.classList.remove("cursor-ready");
  });
  document.addEventListener("mouseenter", () => {
    if (!frame) render();
    document.body.classList.add("cursor-ready");
  });
  render();
})();
