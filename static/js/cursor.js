// Custom cursor behavior extracted without changing its visual timings.
if (window.matchMedia("(pointer:fine)").matches) {
  const dot = $("cd");
  const ring = $("cr");
  let mx = 0;
  let my = 0;
  let rx = 0;
  let ry = 0;

  document.addEventListener("mousemove", (event) => {
    mx = event.clientX;
    my = event.clientY;
  });

  (function tick() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    dot.style.cssText = `left:${mx}px;top:${my}px`;
    ring.style.cssText = `left:${rx}px;top:${ry}px`;
    requestAnimationFrame(tick);
  })();

  document.addEventListener("mouseover", (event) => {
    document.body.classList.toggle("cbig", !!event.target.closest("a,button"));
  });
}
