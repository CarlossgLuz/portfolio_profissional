(() => {
  const intro = $("intro");
  const command = $("tcmd");
  const output = $("tout");
  const caret = $("tcar");
  const skip = $("intro-skip");
  if (!intro || !command || !output || !skip) return;

  const visitKey = "portfolio-intro-seen";
  let seen = false;
  try { seen = sessionStorage.getItem(visitKey) === "true"; } catch (error) {}
  if (seen || prefersReducedMotion.matches) return;

  let cancelled = false;
  const previousFocus = document.activeElement;

  function rememberVisit() {
    try { sessionStorage.setItem(visitKey, "true"); } catch (error) {}
  }

  async function closeIntro() {
    if (cancelled) return;
    cancelled = true;
    rememberVisit();
    intro.classList.add("exit");
    await wait(180);
    intro.hidden = true;
    intro.classList.remove("active", "exit");
    document.body.classList.remove("menu-open");
    previousFocus?.focus?.();
  }

  skip.addEventListener("click", closeIntro);
  intro.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeIntro();
    if (event.key === "Tab") {
      event.preventDefault();
      skip.focus();
    }
  });

  (async () => {
    const copy = window.portfolioI18n.getPack().intro;
    intro.hidden = false;
    document.body.classList.add("menu-open");
    requestAnimationFrame(() => intro.classList.add("active"));
    skip.focus();
    await wait(120);

    for (const character of copy.command) {
      if (cancelled) return;
      command.textContent += character;
      await wait(13);
    }
    if (caret) caret.hidden = true;

    for (const line of [copy.line1, copy.line2]) {
      if (cancelled) return;
      const row = document.createElement("div");
      row.className = "to";
      row.textContent = `> ${line}`;
      output.appendChild(row);
      await wait(110);
    }

    if (cancelled) return;
    const ready = document.createElement("div");
    ready.className = "to ready";
    ready.textContent = `✓ ${copy.ready}`;
    output.appendChild(ready);
    await wait(260);
    closeIntro();
  })();
})();
