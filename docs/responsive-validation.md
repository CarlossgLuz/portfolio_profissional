# Responsive validation — 2026-07-14

## Scope

Responsive refinement only. Content, visual identity, SEO, structured data,
scripts, documents and large-screen layouts were not changed.

## Confirmed causes

- The hero used `min-height: min(900px, calc(100svh - 40px))` while also
  reserving the fixed header and desktop-scale vertical padding.
- The heading was sized mainly from viewport width (`9.2vw`), so it remained
  oversized when width was reasonable but usable height was low.
- The system panel kept a `500px` minimum height down to `1120px` width.
- The only height breakpoint started at `620px` and reduced the panel without
  reducing the `601px` content column. Its larger top padding also applied to
  desktop and mobile landscape alike.
- The mobile theme control was only displayed below `560px`, leaving the
  `561–940px` menu without a theme action.

## Implementation

- Added a compact two-column desktop mode for `941–1599px` wide viewports up
  to `780px` high.
- Added a second, restrained adjustment below `640px` height.
- Reduced heading size, vertical rhythm, grid gap and system-panel height only
  inside those combined width/height conditions.
- Kept large desktop rules unchanged from `1440x900` upward.
- Scoped the low landscape mode to the mobile/tablet navigation range and
  retained natural vertical scrolling.
- Exposed the mobile theme control throughout the mobile/tablet range and set
  menu footer controls to a minimum `44px` touch height.

## Before and after

At a real `1366x650` browser viewport:

| Measurement | Before | After |
| --- | ---: | ---: |
| Hero height | 824px | 650px |
| Content height | 601px | 468px |
| System panel | 500px | 390px |
| Social links bottom | 755px | 591px |
| Horizontal overflow | 0px | 0px |

At `1366x600`, the hero changed from `809px` to `600px`; the social links now
end at `547px`. At `1920x1080`, `1920x900`, `1600x900` and `1440x900`, hero,
content and panel measurements remained unchanged.

## Browser matrix

Validated with Chromium using the reported `window.innerWidth` and
`window.innerHeight`:

- Large desktop: `1920x1080`, `1920x900`, `1680x1050`, `1600x900`, `1440x900`.
- Compact desktop: `1440x700`, `1366x768`, `1366x700`, `1366x650`, `1366x600`,
  `1280x720`, `1280x650`, `1280x600`, `1024x768`.
- Tablet: `1024x1366`, `834x1194`, `820x1180`, `768x1024`.
- Mobile: `430x932`, `412x915`, `390x844`, `375x812`, `360x800`, `320x568`.
- Mobile landscape: `844x390`, `740x360`, `667x375`, `568x320`.
- Breakpoint continuity: `940x700` and `941x700`.

Every matrix entry had zero horizontal document overflow, no visible element
with clipped horizontal content, no interactive element outside the viewport
width and no page error. Full-page and viewport screenshots were reviewed from
temporary files and were not added to the repository.

The final browser console and page-error collector were empty. A cold-session
Lighthouse run at `1366x650` reported accessibility `100`, best practices `100`,
SEO `100`, performance `88`, LCP `1821ms` and CLS `0.0103`. Lighthouse was used
as supporting evidence only; the responsive result was evaluated from browser
geometry and screenshots.

## States reviewed

- Portuguese, English and Spanish at compact desktop, tablet and mobile sizes.
- Dark and light themes, including Spanish light at `1366x600` and English
  light at `390x844`.
- Mobile menu open/closed in portrait, landscape and tablet; focus moved to the
  first link, `Escape` closed the dialog and focus returned to the menu button.
- Intro terminal geometry at `320x568` and `844x390`.
- Reduced motion: intro skipped, reveal animation disabled and custom cursor
  not activated.
- Resize across the `940/941px` navigation breakpoint.

## Validation limitation

Headless Chromium did not apply keyboard page-zoom shortcuts, so native 125%
and 150% browser zoom could not be measured directly. Equivalent narrower CSS
viewports, long translations and the full `320–1920px` matrix were exercised,
but manual native-zoom confirmation remains recommended before publication.
