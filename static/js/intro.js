// Terminal intro kept isolated so the startup sequence stays readable.
(async () => {
  const intro = $("intro");
  const cmdEl = $("tcmd");
  const carEl = $("tcar");
  const outEl = $("tout");
  document.body.style.overflow = "hidden";

  await wait(160);
  intro.classList.add("active");
  await wait(400);

  const cmd = 'node portfolio --init --author="carlos_gabriel"';
  for (const ch of cmd) {
    cmdEl.textContent += ch;
    await wait(32 + Math.random() * 18);
  }

  carEl.style.display = "none";
  await wait(200);

  function addLine(html) {
    const node = document.createElement("div");
    node.className = "to";
    node.innerHTML = html;
    outEl.appendChild(node);
  }

  addLine('<span style="color:var(--dim)">  Initializing build environment...</span>');
  await wait(130);
  addLine('<span style="color:var(--dim)">  Loading: react &middot; next &middot; typescript &middot; tailwind</span>');
  await wait(110);

  const row = document.createElement("div");
  row.style.cssText = "display:flex;align-items:center;gap:.8rem;margin:.15rem 0";
  row.innerHTML = '<div class="ttrack"><div class="tfill" id="tfill"></div></div><span class="tpct" id="tpct">0%</span>';
  outEl.appendChild(row);

  const fill = $("tfill");
  const pct = $("tpct");
  let value = 0;

  await new Promise((resolve) => {
    const interval = setInterval(() => {
      value = Math.min(100, value + Math.random() * 10 + 3);
      fill.style.width = `${value}%`;
      pct.textContent = `${Math.floor(value)}%`;

      if (value >= 100) {
        clearInterval(interval);
        resolve();
      }
    }, 42);
  });

  await wait(100);
  addLine('<span style="color:#28CA41">  &#10004; Dependencies resolved</span>');
  await wait(80);
  addLine('<span style="color:var(--dim)">  Stack: web &middot; backend &middot; mobile &middot; infra &amp; cloud</span>');
  await wait(80);
  addLine('<span style="color:var(--dim)">  Location: Sao Paulo &mdash; Brazil</span>');
  await wait(80);
  addLine('  Status: <span style="color:#28CA41">available for opportunities</span>');
  await wait(130);
  addLine('<span style="color:var(--accent);font-weight:500">  &#9658; carlos_gabriel.portfolio() &mdash; ready</span>');
  await wait(650);

  intro.classList.add("exit");
  await wait(700);
  intro.style.display = "none";
  document.body.style.overflow = "";
})();
