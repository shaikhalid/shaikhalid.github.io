# Khalid Shaikh — personal site

The homepage follows the layout and styling of satwikb.com, with Khalid's own profile, publications, experience, projects, and education. It retains the Gatsby application and existing detail pages. The previous introduction is retained in `src/pages/about.mdx`.

## Editing

`src/components/portfolio-content.json` contains the homepage HTML and responsive CSS. `src/pages/index.js` renders it in Gatsby. The portrait is `static/profile.jpg`.

The resume PDF is compiled from the supplied resume repository using pdfLaTeX (not XeLaTeX/Tectonic) and served at `/resume.pdf`. The original source compiles to one page with pdfLaTeX. Footer logos are stored locally in `static/logos/`.

## Preview without dependencies

```sh
npm run build:preview
python3 -m http.server 8000 --directory dist
```

This builds the same homepage markup and styling into `dist/` for review. It does not build Gatsby's other routes.

## Full Gatsby build

Install this legacy project's dependencies with a compatible Node version (see `.nvmrc`), then run `npm run build`. The legacy `npm run deploy` command publishes a Gatsby build. For the redesigned homepage, run `npm run build:site` and publish `dist/index.html`, `dist/profile.jpg`, `dist/resume.pdf`, and `dist/logos/` to the `gh-pages` branch. Preserve the other published routes. GitHub Pages serves the root of `gh-pages` at https://shaikhalid.github.io/. Do not include the inherited `varundey.me` CNAME.
