# AppSec portfolio refresh — 13/10/2026

## Intent

Reposition Carlos Gabriel's existing portfolio around practical AppSec/DevSecOps experience and a software engineering foundation. Keep the current junior job title accurate. A stronger cinematic presentation was requested after the initial Joffrey Spitzer reference was considered too minimal.

## Visual references researched

- Dennis Snellenberg: https://dennissnellenberg.com/ — large typography and work presentation.
- Corentin Bernadou: https://tympanus.net/codrops/2026/03/05/inside-corentin-bernadous-portfolio-swiss-inspired-layouts-webgl-geometry-and-thoughtful-motion/ — editorial layout and geometric depth.
- Giulio Collesei: https://tympanus.net/codrops/2026/04/14/they-call-me-giulio-the-making-of-a-cinematic-cyberpunk-portfolio/ — cinematic visual storytelling.
- Codrops cinematic scroll demo: https://tympanus.net/Tutorials/Cinematic3DScroll/ — perspective and motion references.
- Source reference discovered: https://github.com/JosephASG/JosephASG
- Earlier source reference: https://github.com/abhay2204/neo-brutalist-portfolio

References inform composition; code and geometric illustrations are original. No third-party design assets, snippets or footage were copied.

## Content decisions

Primary evidence: the supplied current Portuguese and English resumes, compared against the existing portfolio. AppSec is the career focus, not a newly invented job title. XGuardian is collaborative professional work; QA is an internal initiative in development; Vaultin is an author project with public source. Clarium and Toca dos Pés remain supporting development evidence. No client systems or private QA repository links are published. UNICID's expected completion is December 2027 according to the latest supplied CV.

## Implementation

- Official logo, black, white and #FFDE59; self-hosted Space Grotesk with OFL license.
- Procedural projected wireframe in the hero, original motion film, progressive native scroll animation, CSS micro-interactions.
- Motion pause and reduced motion; lazy film loading; hidden/off-screen suspension.
- PT/EN/ES copy and PDF downloads; updated static social metadata and PNG social card.
- Netlify static export to dist; no runtime framework or production dependencies.

## Validation

The seven browser tests passed. An additional 42 locale/theme/viewport combinations and the no-JavaScript fallback were checked against the built dist. Browser tests cover 320, 375, 430, 768, 1024, 1440 and 1920 px, languages, theme selection, menu focus restoration, downloads, reduced motion, contact contrast, WCAG A/AA automated checks, video playback/pause and native cursor restoration. Visual inspection includes desktop, mobile, light theme and full-page sections.

Read-only review identified a cursor pause gap, static social metadata omissions and untranslated project tags. These were addressed before publication. Automated accessibility checks complement visual/keyboard review and do not certify complete WCAG conformance.

## Operational notes

The existing Netlify site id is 294d2a3f-d3ed-43fc-b2e8-72cabc2c3264, connected to the main branch. The already-established Netlify canonical domain is preserved pending confirmation that the custom domain's HTTPS and DNS are working. No DNS changes are part of this refresh.
