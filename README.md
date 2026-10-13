# Carlos Gabriel — Portfolio

Professional portfolio focused on Application Security, DevSecOps and software engineering. Original CG black/white/yellow identity, procedural geometric motion, an original six-second brand film, and selected work: XGuardian, QA Automation, Vaultin, Toca dos Pés and Clarium.

## Development

The site uses native HTML, CSS and JavaScript. No browser framework or production package dependency.

```bash
python3 -m http.server 4173
```

PT-BR, EN and ES are available through `?lang=` and the language switch. The editorial default is dark; users can persist a light theme. Current Portuguese and English resumes are in `assets/documents`.

## Verification

```bash
npm ci
npx playwright install chromium
npm run check
npm test
npm run build
```

`npm test` runs browser checks for professional copy, localized project content, PDF downloads, responsive widths from 320 to 1920 px, menu/Escape/focus, themes, reduced motion, contact contrast, automated WCAG A/AA checks, film playback and the global effect pause. Python 3 is required for the local test server. `CHROMIUM_EXECUTABLE` can point to an existing compatible browser.

The build exports only the public site and assets to `dist/`. Netlify uses `netlify.toml`; docs, tests, source generators and installed packages are not published.

## Motion and accessibility

- Native scroll and progressive scroll-linked effects; no scroll interception.
- Global pause persists locally and stops canvas, decorative CSS, video and the custom cursor.
- `prefers-reduced-motion` renders static scenes and a video poster without downloading the film.
- Film has WebM and MP4 sources, is muted and inline, and loads only near its visible section.
- Canvas/video stop when off screen or the tab is hidden; canvas has a capped pixel ratio and frame rate.
- Keyboard navigation, mobile focus trapping, visible focus and no-JavaScript readable content.

## Content and sources

Current attached PT/EN resumes are the primary professional source. Public content does not include private endpoints, customer data, unverifiable metrics or unreleased venture details. Visual project art is illustrative, not a product screenshot or live scan report.

See `docs/appsec-brand-refresh.md` for the design references and validation record. The original logo is preserved in `assets/images/logo-official.svg` and `.png`; cropped transparent/light variants are derived from the original vector geometry. Space Grotesk is self-hosted under the SIL Open Font License included in `assets/fonts/OFL.txt`.

Code license: MIT. Personal identity and documents: see `NOTICE` and `BRAND.md`.
