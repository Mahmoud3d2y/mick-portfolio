/* ==========================================================================
   Mikael Abuye — Aircraft Cleaning Specialist
   Site scripts (vanilla JS, no dependencies)

   1. Settings  ← edit these
   2. Theme toggle (light / dark)
   3. Sticky header + mobile menu + active link
   4. Scroll reveal animations
   5. Animated statistics
   6. Before / after slider
   7. Gallery lightbox
   8. Contact form
   9. CV button fallback
   10. Language switch (FR / EN), texts are in js/i18n.js
   ========================================================================== */

/* ==========================================================================
   1. Settings
   ========================================================================== */
const SETTINGS = {
  // Option A (recommended): a free form service like https://formspree.io.
  // Create a form there and paste its endpoint, e.g. "https://formspree.io/f/abcdwxyz".
  // Messages then arrive in your inbox without the visitor leaving the page.
  formEndpoint: "",

  // Option B: if formEndpoint is empty, the form opens the visitor's email app
  // with the message filled in, addressed to this email.
  contactEmail: "",
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const { t } = i18n; // translate JS strings (see js/i18n.js)

/* ==========================================================================
   2. Theme toggle
   The chosen theme is stored in localStorage and applied in <head> before paint.
   ========================================================================== */
const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");

function activeTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateThemeLabel() {
  const key = activeTheme() === "dark" ? "theme.toLight" : "theme.toDark";
  themeToggle.setAttribute("aria-label", t(key));
}

themeToggle.addEventListener("click", () => {
  const next = activeTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    /* Storage blocked (private mode): the theme still applies for this visit */
  }
  updateThemeLabel();
});
updateThemeLabel();

/* ==========================================================================
   3. Header, mobile menu and active link
   ========================================================================== */
const header = document.querySelector(".header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("nav-links");

// Solid header once the visitor scrolls past the top
function onScroll() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

function setMenu(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", t(open ? "menu.close" : "menu.open"));
  navLinks.classList.toggle("is-open", open);
  header.classList.toggle("menu-open", open);
}

navToggle.addEventListener("click", () => {
  setMenu(navToggle.getAttribute("aria-expanded") !== "true");
});

// Close the menu after picking a link, or with Escape
navLinks.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// Highlight the nav link for the section currently in view
const navAnchors = navLinks.querySelectorAll("a[href^='#']");
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
document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

/* ==========================================================================
   4. Scroll reveal
   Adds .is-visible to .reveal elements as they enter the viewport.
   ========================================================================== */
const revealEls = document.querySelectorAll(".reveal");

if (reduceMotion) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  // Small stagger between siblings so groups of cards cascade in
  revealEls.forEach((el) => {
    const index = [...el.parentElement.children].indexOf(el);
    el.style.transitionDelay = `${Math.min(index, 5) * 70}ms`;
    revealObserver.observe(el);
  });
}

/* ==========================================================================
   5. Animated statistics
   Counts each .counter from 0 up to its data-target when it scrolls into view.
   ========================================================================== */
function animateCounter(el) {
  const target = Number(el.dataset.target);
  const duration = 1600;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counters = document.querySelectorAll(".counter");
if (!reduceMotion) {
  // The final number is already in the HTML (good for SEO / no-JS); reset it to 0 to animate
  counters.forEach((el) => (el.textContent = "0"));
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((el) => counterObserver.observe(el));
}

/* ==========================================================================
   6. Before / after slider
   The range input drives a CSS variable that clips the "after" image.
   ========================================================================== */
document.querySelectorAll(".compare").forEach((compare) => {
  const range = compare.querySelector(".compare-range");
  const update = () => compare.style.setProperty("--pos", `${range.value}%`);
  range.addEventListener("input", update);
  update();
});

/* ==========================================================================
   7. Gallery lightbox
   Uses the native <dialog> element: Escape, focus trapping and backdrop for free.
   ========================================================================== */
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = item.dataset.caption || "";
    lightbox.showModal();
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());

// Clicking the dark backdrop (outside the image) closes it too
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});

/* ==========================================================================
   8. Contact form
   Validates fields, then sends via formEndpoint or opens an email draft.
   ========================================================================== */
const form = document.querySelector(".contact-form");
const statusEl = form.querySelector(".form-status");

const validators = {
  name: (v) => (v.trim() ? "" : t("err.name")),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : t("err.email")),
  message: (v) => (v.trim().length >= 10 ? "" : t("err.message")),
};

// Shows or clears the error for one field; returns true when valid
function validateField(input) {
  const check = validators[input.name];
  if (!check) return true;
  const error = check(input.value);
  const errorEl = document.getElementById(`${input.name}-error`);
  errorEl.textContent = error;
  input.setAttribute("aria-invalid", String(Boolean(error)));
  if (error) input.setAttribute("aria-describedby", errorEl.id);
  else input.removeAttribute("aria-describedby");
  return !error;
}

// Re-check a field as soon as the visitor leaves it
Object.keys(validators).forEach((name) => {
  form.elements[name].addEventListener("blur", (e) => validateField(e.target));
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "";

  const fields = Object.keys(validators).map((name) => form.elements[name]);
  const results = fields.map(validateField);
  const firstInvalid = fields[results.indexOf(false)];
  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  const data = Object.fromEntries(new FormData(form));

  // Option A: send to a form service
  if (SETTINGS.formEndpoint) {
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    statusEl.textContent = t("form.sending");
    try {
      const res = await fetch(SETTINGS.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      statusEl.textContent = t("form.sent");
    } catch (err) {
      statusEl.textContent = t("form.failed");
    } finally {
      button.disabled = false;
    }
    return;
  }

  // Option B: open the visitor's email app with the message pre-filled
  if (SETTINGS.contactEmail) {
    const subject = encodeURIComponent(t("mail.subject", { service: data.service, name: data.name }));
    const body = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}`);
    window.location.href = `mailto:${SETTINGS.contactEmail}?subject=${subject}&body=${body}`;
    statusEl.textContent = t("form.opening");
    return;
  }

  statusEl.textContent = t("form.notSetUp");
});

/* ==========================================================================
   9. CV button fallback
   If assets/cv/mick-cv.pdf hasn't been uploaded yet, the button becomes
   "Request CV" and scrolls to the contact form instead of a broken download.
   ========================================================================== */
const cvBtn = document.querySelector(".cv-btn");
const cvLabel = cvBtn.querySelector(".cv-label");
let cvKey = "cv.download";
const renderCvLabel = () => (cvLabel.textContent = t(cvKey));

if (location.protocol !== "file:") {
  fetch(cvBtn.getAttribute("href"), { method: "HEAD" })
    .then((res) => {
      if (!res.ok) throw new Error("missing");
    })
    .catch(() => {
      cvBtn.removeAttribute("download");
      cvBtn.setAttribute("href", "#contact");
      cvKey = "cv.request";
      renderCvLabel();
    });
}

/* ==========================================================================
   10. Language switch
   The button shows the language you can switch TO (FR in English, EN in French).
   ========================================================================== */
const langToggle = document.querySelector(".lang-toggle");

langToggle.addEventListener("click", () => {
  i18n.set(i18n.lang === "fr" ? "en" : "fr");
});

// Runs on load and every time the language changes
document.addEventListener("langchange", ({ detail }) => {
  const other = detail.lang === "fr" ? "en" : "fr";
  langToggle.textContent = other.toUpperCase();
  langToggle.lang = other;
  langToggle.setAttribute("aria-label", t("lang.switch"));

  updateThemeLabel();
  setMenu(navLinks.classList.contains("is-open"));
  renderCvLabel();

  // Re-word any error messages already on screen
  Object.keys(validators).forEach((name) => {
    const input = form.elements[name];
    if (input.getAttribute("aria-invalid") === "true") validateField(input);
  });
  statusEl.textContent = "";
});

i18n.init();

/* Footer year */
document.getElementById("year").textContent = new Date().getFullYear();
