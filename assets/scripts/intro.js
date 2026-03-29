// Terminal intro keeps the original timing while reading the active locale strings.
(async () => {
  const intro = $("intro");
  const cmdEl = $("tcmd");
  const carEl = $("tcar");
  const outEl = $("tout");
  const pack = window.portfolioI18n.getPack();
  document.body.style.overflow = "hidden";

  await wait(160);
  intro.classList.add("active");
  await wait(400);

  const cmd = pack.intro.command;
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

  addLine(`<span style="color:var(--dim)">  ${pack.intro.line1}</span>`);
  await wait(130);
  addLine(`<span style="color:var(--dim)">  ${pack.intro.line2}</span>`);
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
  addLine(`<span style="color:#28CA41">  &#10004; ${pack.intro.resolved}</span>`);
  await wait(80);
  addLine(`<span style="color:var(--dim)">  ${pack.intro.stack}</span>`);
  await wait(80);
  addLine(`<span style="color:var(--dim)">  ${pack.intro.location}</span>`);
  await wait(80);
  addLine(`  ${pack.intro.statusLabel} <span style="color:#28CA41">${pack.intro.statusValue}</span>`);
  await wait(130);
  addLine(`<span style="color:var(--accent);font-weight:500">  &#9658; ${pack.intro.ready}</span>`);
  await wait(650);

  intro.classList.add("exit");
  await wait(700);
  intro.style.display = "none";
  document.body.style.overflow = "";
})();
