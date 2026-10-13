(() => {
  const storageKey = "portfolio-theme";
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const systemPreference = window.matchMedia("(prefers-color-scheme: light)");

  function storedTheme() {
    try {
      const value = localStorage.getItem(storageKey);
      return value === "light" || value === "dark" ? value : null;
    } catch (error) { return null; }
  }

  function activeTheme() {
    return document.documentElement.dataset.theme || storedTheme() || "dark";
  }

  function sync(theme) {
    const pack = window.portfolioI18n?.getPack();
    const isLight = theme === "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelectorAll("[data-themed-logo]").forEach(img => {img.src = isLight ? "./assets/images/logo-mark-light.svg" : "./assets/images/logo-mark.svg";});
    if (themeColor) themeColor.content = isLight ? "#f4f2ec" : "#080808";

    document.querySelectorAll(".theme-toggle").forEach((button) => {
      const label = isLight ? pack?.theme?.light || "Claro" : pack?.theme?.dark || "Escuro";
      const action = isLight ? pack?.theme?.toDark || "Alternar para o tema escuro" : pack?.theme?.toLight || "Alternar para o tema claro";
      button.setAttribute("aria-pressed", String(!isLight));
      button.setAttribute("aria-label", action);
      button.setAttribute("title", label);
      const text = button.querySelector(".theme-toggle__label");
      if (text) text.textContent = label;
    });
  }

  function apply(theme, persist = true) {
    if (persist) {
      try { localStorage.setItem(storageKey, theme); } catch (error) {}
    }
    sync(theme);
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".theme-toggle")) return;
    apply(activeTheme() === "light" ? "dark" : "light");
  });

  window.addEventListener("portfolio:languagechange", () => sync(activeTheme()));
  sync(activeTheme());
})();
