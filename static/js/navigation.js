// Navigation, progress bar and anchor behavior extracted from the original inline script.
const prog = $("prog");
const nav = document.getElementById("mainnav");

window.addEventListener(
  "scroll",
  () => {
    const top = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = `${(top / height) * 100}%`;
    nav.classList.toggle("scrolled", window.scrollY > 50);
  },
  { passive: true }
);

const ham = $("ham");
const mob = $("mob");
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
