# Mikael Abuye (Mick) — Aircraft Cleaning Specialist

Portfolio website for Mikael Abuye (Mick), an aircraft cleaning specialist. Plain HTML, CSS and vanilla JavaScript: no frameworks and no build step.

Live: https://mahmoud3d2y.github.io/mick-portfolio/

## Structure

```
index.html               The whole page (must stay at the root for hosting)
css/style.css            All styles; colors and fonts are variables at the top
js/main.js               All scripts; settings are at the top
assets/
  icons/favicon.svg      Browser tab icon
  images/before.svg      Before/after slider images (placeholders)
  images/after.svg
  images/gallery/        Gallery photos (placeholders)
  cv/mick-cv.pdf         Your CV (add this file)
robots.txt, sitemap.xml  For search engines
```

## Editing content

Everything you need to change is marked with an `EDIT:` comment in `index.html`. Search for `EDIT` to find them all.

| What | Where |
| --- | --- |
| About text | `index.html` → About section |
| Statistics | `index.html` → change each `data-target="…"` **and** the number inside it |
| Experience and certifications | `index.html` → Experience section |
| Testimonials | `index.html` → Testimonials section (use real quotes, with permission) |
| Email and location | `index.html` → Contact section |
| Before/after photos | Add two photos of the same spot to `assets/images/` and update both `src` values |
| Gallery photos | Add photos to `assets/images/gallery/` and update each `src`, `alt` and `data-caption` |
| CV | Save it as `assets/cv/mick-cv.pdf`. The button switches from "Request CV" to "Download CV" automatically. |
| Contact form | `js/main.js` → `SETTINGS` (see below) |

**Photo tips:** use JPG or WebP, about 1600px wide for before/after and 1200px for the gallery, and compress them (for example with squoosh.app) so the site stays fast.

### Contact form

GitHub Pages can't send email by itself, so pick one option in `SETTINGS` at the top of `js/main.js`:

- **`formEndpoint` (recommended):** create a free form at [formspree.io](https://formspree.io) and paste its URL. Messages go to your inbox and the visitor stays on the page.
- **`contactEmail`:** the form opens the visitor's own email app with the message filled in.

## Run locally

Opening `index.html` directly works for most things. For everything (including the CV check), run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Hosting

Deployed with GitHub Pages from the `main` branch (root). Every push to `main` updates the live site within a minute or two.

Hero photo from [Unsplash](https://unsplash.com) (free licence).

Website designed and built by Mahmoud Saadaoui (https://github.com/Mahmoud3d2y).
