# Mick — Portfolio

A static portfolio website.

## Structure

```
index.html        Home page (must stay at the root for hosting)
css/style.css     Styles
js/main.js        Scripts
assets/images/    Images
```

## Editing content

- **Projects:** edit the `PROJECTS` list at the top of `js/main.js`. Add screenshots to `assets/images/` and set `image` to their path.
- **Hero words:** edit `ROLES` in `js/main.js`.
- **About, skills and contact:** edit the text in `index.html`.
- **Colors and fonts:** edit the variables at the top of `css/style.css`.

## Run locally

Open `index.html` in a browser.

## Hosting

The site is plain HTML/CSS/JS with no build step, so it can be hosted as-is on GitHub Pages, Netlify, or Vercel. For GitHub Pages: repo **Settings → Pages → Deploy from a branch → `main` / root**.
