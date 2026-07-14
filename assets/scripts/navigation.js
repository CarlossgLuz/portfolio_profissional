(() => {
  const progress = $("prog");
  const header = $("mainnav");
  const menuButton = $("ham");
  const menu = $("mob");
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll('.npill a[href^="#"]')];
  const sectionDots = [...document.querySelectorAll(".section-dot")];
  let menuOpen = false;
  let previousFocus = null;

  function updateScrollState() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const value = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
    if (progress) {
      progress.value = value;
    }
    header?.classList.toggle("scrolled", window.scrollY > 24);
  }

  function focusableMenuItems() {
    return [...menu.querySelectorAll('a[href], button:not([disabled])')];
  }

  function setMenu(open) {
    if (!menu || !menuButton) return;
    menuOpen = open;
    menuButton.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    const copy = window.portfolioI18n.getPack().a11y;
    menuButton.setAttribute("aria-label", open ? copy.closeMenu : copy.openMenu);
    menu.classList.toggle("open", open);
    menu.toggleAttribute("inert", !open);
    document.body.classList.toggle("menu-open", open);

    if (open) {
      previousFocus = document.activeElement;
      requestAnimationFrame(() => focusableMenuItems()[0]?.focus());
    } else {
      previousFocus?.focus?.();
    }
  }

  menuButton?.addEventListener("click", () => setMenu(!menuOpen));
  menu?.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener("click", () => setMenu(false)));

  document.addEventListener("keydown", (event) => {
    if (!menuOpen) return;
    if (event.key === "Escape") {
      setMenu(false);
      return;
    }
    if (event.key !== "Tab") return;
    const items = focusableMenuItems();
    const first = items[0];
    const last = items.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 940 && menuOpen) setMenu(false);
  });
  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();

  document.querySelectorAll('a[href^="#"], .section-dot').forEach((control) => {
    control.addEventListener("click", (event) => {
      const id = control.classList.contains("section-dot") ? control.dataset.section : control.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth", block: "start" });
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
      sectionDots.forEach((dot) => dot.classList.toggle("active", dot.dataset.section === entry.target.id));
    });
  }, { rootMargin: "-42% 0px -52% 0px" });
  sections.forEach((section) => observer.observe(section));

  const hero = $("hero");
  const dots = document.querySelector(".section-dots");
  if (hero && dots) new IntersectionObserver(([entry]) => dots.classList.toggle("visible", !entry.isIntersecting), { threshold: .05 }).observe(hero);

  window.addEventListener("portfolio:languagechange", () => {
    if (menuButton && !menuOpen) menuButton.setAttribute("aria-label", window.portfolioI18n.getPack().a11y.openMenu);
  });
})();
