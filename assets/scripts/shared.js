const $ = (id) => document.getElementById(id);
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
