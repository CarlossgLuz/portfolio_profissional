(() => {
  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    document.documentElement.classList.remove("motion-ok");
    return;
  }

  const elements = document.querySelectorAll(".rv, .rvl");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, { threshold: .08, rootMargin: "0px 0px -24px" });
  elements.forEach((element) => observer.observe(element));
})();
