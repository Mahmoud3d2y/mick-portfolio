// ==========================================================================
// Projects — edit this list to update the Projects section.
// category: "web" or "flutter"
// image: optional path like "assets/images/my-project.png"
// live / code: optional links (leave "" to hide the button)
// ==========================================================================
const PROJECTS = [
  {
    title: "This portfolio",
    description: "A responsive, accessible portfolio built from scratch with HTML, CSS and vanilla JavaScript. Hosted on GitHub Pages.",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "",
    live: "https://mahmoud3d2y.github.io/mick-portfolio/",
    code: "https://github.com/Mahmoud3d2y/mick-portfolio",
  },
  {
    title: "Web project (placeholder)",
    description: "Replace this with one of your Odin Project builds, e.g. a landing page, calculator or etch-a-sketch.",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "",
    live: "",
    code: "",
  },
  {
    title: "Flutter app (placeholder)",
    description: "Replace this with a Flutter app you've built. Add a screenshot to assets/images/ and link the repo.",
    category: "flutter",
    tags: ["Dart", "Flutter"],
    image: "",
    live: "",
    code: "",
  },
];

// Words cycled in the hero headline
const ROLES = ["websites", "mobile apps", "clean interfaces", "fast pages"];

// ==========================================================================

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Theme toggle ----------
const themeToggle = document.querySelector(".theme-toggle");

function currentTheme() {
  const set = document.documentElement.dataset.theme;
  if (set) return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

themeToggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

// ---------- Mobile menu ----------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("nav-links");

function setMenu(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  navLinks.classList.toggle("is-open", open);
}

navToggle.addEventListener("click", () => {
  setMenu(navToggle.getAttribute("aria-expanded") !== "true");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// ---------- Header border on scroll ----------
const header = document.querySelector(".header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Rotating hero word ----------
const rotator = document.querySelector(".rotator");
if (rotator && !reduceMotion) {
  let i = 0;
  setInterval(() => {
    rotator.classList.add("is-out");
    setTimeout(() => {
      i = (i + 1) % ROLES.length;
      rotator.textContent = ROLES[i];
      rotator.classList.remove("is-out");
    }, 300);
  }, 2600);
}

// ---------- Projects ----------
const grid = document.getElementById("projects-grid");

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function projectCard(p) {
  const initials = p.title.split(" ").map((w) => w[0]).join("").slice(0, 2);
  const thumb = p.image
    ? `<img src="${escapeHTML(p.image)}" alt="Screenshot of ${escapeHTML(p.title)}" loading="lazy">`
    : `<span aria-hidden="true">${escapeHTML(initials)}</span>`;
  const links = [
    p.live && `<a href="${escapeHTML(p.live)}" target="_blank" rel="noopener">Live ↗</a>`,
    p.code && `<a href="${escapeHTML(p.code)}" target="_blank" rel="noopener">Code ↗</a>`,
  ].filter(Boolean).join("");

  return `
    <article class="project-card reveal" data-category="${escapeHTML(p.category)}">
      <div class="project-thumb">${thumb}</div>
      <div class="project-body">
        <h3>${escapeHTML(p.title)}</h3>
        <p>${escapeHTML(p.description)}</p>
        <ul class="tags">${p.tags.map((t) => `<li>${escapeHTML(t)}</li>`).join("")}</ul>
        <div class="project-links">${links}</div>
      </div>
    </article>`;
}

grid.innerHTML = PROJECTS.map(projectCard).join("");

// Filter buttons
const filters = document.querySelectorAll(".filter");
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-selected", String(b === btn));
    });
    const f = btn.dataset.filter;
    grid.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = f !== "all" && card.dataset.category !== f;
    });
  });
});

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reduceMotion) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 60}ms`;
    io.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// ---------- Active nav link ----------
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach((a) => {
          a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
