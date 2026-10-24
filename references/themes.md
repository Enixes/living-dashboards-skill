# Theme direction and implementation

## Select a visual world

Offer these three defaults for a new dashboard. Explain their character in user language. Show the same small metric, chart, and control in each preview so choices are comparable. Continue with the best contextual fit when no preference is given.

| Theme | Palette and surface | Type and geometry | Signature treatment | Motion character |
| --- | --- | --- | --- | --- |
| Nature — Canopy | Warm ivory, forest ink, moss, clay; quiet tinted surfaces | Expressive serif headings, readable sans controls; generous rhythm and soft corners | A carved contour terrace, matte mineral ground, and a selected layer framing the next action | Gentle deceleration; progress flows toward a goal; short tactile responses |
| Abstract — Form | Paper, deep ink, cobalt, vermilion; deliberate color blocks | Geometric display headings, neutral data type; asymmetric composition and crisp dividers | Folded planes with colored edge thickness; a selected sheet aligns with the key comparison | Precise directional transitions connecting related regions |
| Cyberpunk — Signal | Blue-black, pale ice, cyan, amber, magenta; opaque instrument panels | Compact sans headings; mono measurements; tighter corners and technical rules | An etched instrument stack with localized luminous edges; event traces reflect actual events | Fast controlled snaps and short sweeps on changes; no fake glitches or flicker |

Do not substitute leaves, random blobs, and neon gradients for a designed composition. Build personality through typography, grouping, rhythm, line weight, and material. Keep themes distinct in screenshots with animation disabled.

Treat font categories as roles. Use brand/local fonts first; choose at most two families when external fonts are justified, with reliable fallbacks. Avoid layout shift during font loading. Do not use monospaced paragraphs merely to signal technology.

Optional directions: Ocean with tidal contours and mineral tones; Editorial with generous space and expressive type; Blueprint with measurement-based grids; Solar with ochre and disciplined radial accents. Develop extras only when requested or justified by the product.

## Define semantic tokens

Map theme values to roles rather than component-specific colors:

```text
canvas, surface, surface-raised, text, text-muted, border
accent, on-accent, accent-soft, focus
positive, warning, negative, info
chart-1 … chart-n, chart-grid, chart-reference
font-heading, font-body, font-data
radius-control, radius-panel, elevation, spacing-density
material-ground, material-edge, light-direction, layer-depth, tilt-limit
motion-fast, motion-state, motion-layout, motion-data, ease-enter
```

Use scoped custom properties, design-system variables, or the framework equivalent. Keep one component tree. Theme portaled menus/dialogs, chart canvas redraws, exported charts where applicable, and third-party widgets as well as main panels.

Maintain a stable series-ID-to-token mapping. Preserve meaning and ordering when palettes change. Make status distinguishable through labels/icons and series through line styles or markers; color alone is insufficient. Use theme accents for emphasis rather than conflating them with success/failure.

Check actual foreground/background combinations. Target at least 4.5:1 for ordinary text, 3:1 for large text, and 3:1 for essential control and graphic boundaries against adjacent colors. Do not infer compliance from attractive swatches. Test placeholder, selected, focus, hover, tooltip, error, and disabled-state legibility. Use explicit accessible on-colors for filled status badges.

Bundled palettes are starting points, not guarantees for arbitrary pairings, opacity, overlays, or component styles. Keep grids subtle; give meaningful marks and essential boundaries sufficient contrast. Check categorical colors for distinguishability as well as contrast.

## Implement the selector

1. Use a labeled select, radio group, or equivalent accessible control. Include names, a selected indicator, and keyboard navigation. Keep previews descriptive.
2. Keep selection available in the toolbar or settings and usable on mobile. Announce the settled choice once if needed; do not flood live regions.
3. Restore only recognized stored values with guarded reads/writes. Apply the initial theme before paint when compatible with the framework/CSP. Align server markup and hydration or use an explicitly tested fallback.
4. Change theme without remounting the dashboard. Preserve chart zoom, inputs, filters, focus, dialogs, scroll, and data-fetch state.
5. Use an instant theme switch as the safe default. Where all intermediate foreground/background pairs stay readable, fade a bounded decorative surface over roughly 160–240 ms. Switch semantic content immediately. Do not transition a light button background while instantly changing its text to white. Use an instant switch in Reduced/Off.
6. Keep theme and color mode independent. The starter provides one authored mode per theme. Do not expose light/dark until both have complete tokens and checked states.
7. Persist appearance, motion, and density separately. Theme changes must never reset accessibility preferences.

## Preserve the task across themes

Keep interaction geometry, hit targets, content order, and hierarchy stable. Vary corners, type emphasis, and surface treatment without turning theme switching into a new app. Respect the user's brand requirements where they constrain choices.

For operational apps, concentrate expression in navigation, key status, and a restrained focal interaction. For learning trackers, let mastery, revision progress, or milestones carry more character. Show actual progress and outstanding work honestly.

## Add a material identity

Follow `spatial-design.md` for 3D implementation. Canopy can stack organic contour terraces, Form can fold and offset crisp planes, and Signal can layer etched instrument plates. Keep stable labels and control locations across these treatments. Compare static screenshots: each world should remain recognizable with Depth set to Flat and Motion set to Off. Keep the same information hierarchy when the sculpture is removed.
