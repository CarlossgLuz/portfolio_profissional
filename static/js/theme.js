// Theme controller handles persisted preference, system fallback and toggle UI sync.
(() => {
  const storageKey = "portfolio-theme";
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const systemPreference = window.matchMedia("(prefers-color-scheme: light)");
  const labels = {
    "pt-BR": {
      dark: "Alternar para o tema escuro",
      light: "Alternar para o tema claro",
      currentDark: "Escuro",
      currentLight: "Claro",
    },
    en: {
      dark: "Switch to dark theme",
      light: "Switch to light theme",
      currentDark: "Dark",
      currentLight: "Light",
    },
    es: {
      dark: "Cambiar al tema oscuro",
      light: "Cambiar al tema claro",
      currentDark: "Oscuro",
      currentLight: "Claro",
    },
  };

  function getStoredTheme() {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored === "light" || stored === "dark" ? stored : null;
    } catch (error) {
      return null;
    }
  }

  function getPreferredTheme() {
    return systemPreference.matches ? "light" : "dark";
  }

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") || getStoredTheme() || getPreferredTheme();
  }

  function getLabelPack() {
    const lang = window.portfolioI18n?.current || document.documentElement.lang || "pt-BR";
    return labels[lang] || labels["pt-BR"];
  }

  function updateMetaTheme(theme) {
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", theme === "light" ? "#f4f7fb" : "#050810");
    }
  }

  function syncToggle(toggle, theme, copy) {
    const isLight = theme === "light";
    toggle.setAttribute("aria-pressed", String(!isLight));
    toggle.setAttribute("aria-label", isLight ? copy.dark : copy.light);
    toggle.setAttribute("title", isLight ? copy.currentLight : copy.currentDark);

    const label = toggle.querySelector(".theme-toggle__label");
    if (label) label.textContent = isLight ? copy.currentLight : copy.currentDark;
  }

  function syncUI(theme) {
    const copy = getLabelPack();
    document.querySelectorAll(".theme-toggle").forEach((toggle) => syncToggle(toggle, theme, copy));
    document.documentElement.style.colorScheme = theme;
    updateMetaTheme(theme);
  }

  function applyTheme(theme, persist = true) {
    document.documentElement.setAttribute("data-theme", theme);

    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {}
    }

    syncUI(theme);
  }

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest(".theme-toggle");
    if (!toggle) return;

    const nextTheme = getTheme() === "light" ? "dark" : "light";
    applyTheme(nextTheme);
  });

  if (typeof systemPreference.addEventListener === "function") {
    systemPreference.addEventListener("change", () => {
      if (getStoredTheme()) return;
      applyTheme(getPreferredTheme(), false);
    });
  } else if (typeof systemPreference.addListener === "function") {
    systemPreference.addListener(() => {
      if (getStoredTheme()) return;
      applyTheme(getPreferredTheme(), false);
    });
  }

  window.addEventListener("portfolio:languagechange", () => {
    syncUI(getTheme());
  });

  applyTheme(getTheme(), false);
})();
