document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("[data-scroll-to]");
  const sections = [...document.querySelectorAll("section[id]")];
  const sidebarToggle = document.querySelector(".sidebar__toggle");
  const nav = document.querySelector(".nav");
  const yearSpan = document.querySelector("#year");
  const contactForm = document.querySelector("#contact-form");
  const projectLinks = document.querySelectorAll("[data-project-link]");
  const backToTopBtn = document.querySelector(".back-to-top");

  // Ano no footer
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scroll navegação lateral
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");
      const target = document.getElementById(targetId);
      if (!target) return;

      const yOffset = -12;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      // Fecha navegação mobile
      if (window.innerWidth <= 900 && nav && nav.classList.contains("nav--open")) {
        nav.classList.remove("nav--open");
      }
    });
  });

  // Scrollspy links ativos
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -55% 0px",
    threshold: 0.1,
  };

  const onSectionIntersect = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      navLinks.forEach((link) => {
        const hrefId = link.getAttribute("href").replace("#", "");
        link.classList.toggle("nav__link--active", hrefId === id);
      });
    });
  };

  const sectionObserver = new IntersectionObserver(onSectionIntersect, observerOptions);
  sections.forEach((section) => sectionObserver.observe(section));

  // Reveal animations
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // Menu mobile toggle
  if (sidebarToggle && nav) {
    sidebarToggle.addEventListener("click", () => {
      nav.classList.toggle("nav--open");
      const spans = sidebarToggle.querySelectorAll("span");
      const isOpen = nav.classList.contains("nav--open");

      if (spans.length === 2) {
        spans[0].style.transform = isOpen ? "translateY(3px) rotate(45deg)" : "";
        spans[1].style.transform = isOpen ? "translateY(-3px) rotate(-45deg)" : "";
      }
    });
  }

  // Botão voltar ao topo
  if (backToTopBtn) {
    const TOGGLE_OFFSET = 240;

    const handleScroll = () => {
      if (window.scrollY > TOGGLE_OFFSET) {
        backToTopBtn.classList.add("back-to-top--visible");
      } else {
        backToTopBtn.classList.remove("back-to-top--visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});