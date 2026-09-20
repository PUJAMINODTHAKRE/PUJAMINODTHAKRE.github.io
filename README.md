# Puja Minodji Thakre — Academic Research Website

A clean, research-first static academic website designed for professor/supervisor-facing review and GitHub Pages deployment.

## Site architecture

- `index.html` — research identity, featured work, methods, academic formation, distinctions, contact
- `research.html` — detailed research portfolio
- `publications.html` — verified publication record and BibTeX
- `cv.html` — web-readable academic CV
- `assets/` — stylesheet, interaction code, research diagrams, favicon, current CV PDF

## Design principles

This site is intentionally not a generic portfolio. The hierarchy is:

1. Who Puja is as a researcher
2. What questions she works on
3. What evidence of work exists
4. What methods and training support that work
5. How to contact / inspect the record

Visual direction: editorial academic, restrained colour, strong typography, high whitespace, low decorative noise, and responsive layouts.

## FAQ assistant

The floating Research FAQ is deliberately client-side and deterministic. It answers basic profile questions without an API key or external AI dependency. This makes it suitable for GitHub Pages.

## Deployment — GitHub Pages

1. Create a repository, for example `puja-academic-website`.
2. Upload the contents of this folder to the repository root.
3. In **Settings → Pages**, deploy from the `main` branch and `/ (root)`.
4. Add your verified LinkedIn / Google Scholar / ORCID URLs to `site-config.js` or the page markup when you are ready.

## Verified links included

- Springer DOI: `https://doi.org/10.1007/978-3-032-24807-7_4`
- Healthcare research repository: `https://github.com/PUJAMINODTHAKRE/healthcare-kb-representation-evaluation`

The publisher PDF itself is not redistributed by this site; the publication page points to the official DOI.
