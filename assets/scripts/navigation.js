// Navigation, progress bar and anchor behavior extracted from the original inline script.
const prog = $("prog");
const nav = document.getElementById("mainnav");
const ham = $("ham");
const mob = $("mob");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".npill a");
const sectionDots = document.querySelectorAll(".section-dot");

window.addEventListener(
  "scroll",
  () => {
    const top = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? (top / height) * 100 : 0;
    prog.style.width = `${progress}%`;
    nav.classList.toggle("scrolled", window.scrollY > 50);
  },
  { passive: true }
);

const links = mob.querySelectorAll("a[href^='#']");
let isOpen = false;

function setMenu(state) {
  isOpen = state;
  ham.classList.toggle("open", isOpen);
  mob.classList.toggle("open", isOpen);
  ham.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";

  if (isOpen) {
    setTimeout(() => {
      const firstFocusable = mob.querySelector("button, a");
      if (firstFocusable) firstFocusable.focus();
    }, 50);
  }
}

ham.addEventListener("click", () => setMenu(!isOpen));
links.forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isOpen) {
    setMenu(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820 && isOpen) {
    setMenu(false);
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 70,
      behavior: "smooth",
    });
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
      sectionDots.forEach((dot) => {
        dot.classList.toggle("active", dot.dataset.section === id);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));

const heroObserver = new IntersectionObserver(
  (entries) => {
    const dots = document.querySelector(".section-dots");
    if (dots) dots.classList.toggle("visible", !entries[0].isIntersecting);
  },
  { threshold: 0 }
);

const heroSection = $("hero");
if (heroSection) heroObserver.observe(heroSection);

sectionDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const target = document.getElementById(dot.dataset.section);
    if (!target) return;

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 70,
      behavior: "smooth",
    });
  });
});

nav.classList.toggle("scrolled", window.scrollY > 50);
