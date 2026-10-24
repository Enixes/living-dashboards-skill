# Continuous Max motion

## Fulfill the brief literally and coherently
When the user asks for an alive dashboard, motion max, or every element moving at all times, make movement continuous across every visible component family. Do not substitute a static page with hover-only feedback. Use one authored visual rhythm and varied phases; avoid synchronized bouncing.

Default this skill's new dashboards to Max unless the user chooses otherwise. Preserve existing Reduced/Off and OS reduced-motion settings. Distinguish motion intensity from spatial depth: Flat can have planar motion; Immersive can remain static with motion Off.

## Component coverage
| Component | Continuous Max treatment | Reactive treatment |
| --- | --- | --- |
| Hero / conceptual scene | Floating layers, traveling paths, slow changing overlap | Bounded pointer response; semantic control updates |
| Navigation / track cards | Slow edge traveler, 1–2px float, icon drift | Selected-state handoff; immediate route change |
| Headings / supporting text | Subpixel to 1px drift with long quiet timing | Short entrance when context changes |
| KPI / status | Gentle breathing or position drift; exact value stable | Highlight a real value change |
| Chart | Traveling stroke or opacity accent on exact final marks | Data-driven transition on a new filter |
| Range input | Track light or ring orbit; thumb stays at actual value | Immediate value and linked diagram response |
| Checklist / table / detail | Small surface movement or rule highlight | Confirmation only after persistence succeeds |
| Dialog / editor | Quiet frame motion | Freeze local movement on focus; immediate editing |
| Buttons / toggles | Bounded border/inner icon motion | Fast press, interruptible release |

Do not move every nested DOM node separately. Inherit surface motion where appropriate and add one inner accent where necessary. Keep an inventory that maps all shipped component classes to a treatment. If a component is intentionally stationary, explain its user interaction reason.

## Motion tiers and controls
- Max: continuous ambient choreography plus responsive interaction. Usually 3–10 second loops, small surface movement, one dominant scene.
- Full/System: interaction and data transitions; System respects the device.
- Reduced: no spatial movement or loops; stable nonmoving feedback.
- Off or Pause: cancel active JS animations and settle to exact current content; stop CSS and renderer loops immediately. Resume explicitly.
- Always cap Max/Full with OS reduced motion. Stop offscreen and hidden-tab work. Do not require pointer hover to use an effect's associated control.

Freeze the hovered/focused control region while it is used. Pause animations on focus within editors and during selection. Motion must not change values, take focus, reorder the tab sequence, or cause targets to escape the pointer.

## Reusable implementation
Pair `assets/continuous-motion.css` with the controller for basic continuous surface/text motion, then add domain-specific scenes. `assets/motion-system.mjs` exports `resolveMotion(preference, osReduced, paused)` and `attachMotion(root)`. It provides replaceable Web Animations by element, cleanup on detach, visible-region registration, hidden-tab cancellation, and a root motion level. Set root `data-motion` and `data-paused`, call `refresh({enter: routeChanged})` after content replacement, and call `destroy()` on teardown. Style `data-motion-level`, `data-page-visible`, and per-element `data-in-view` in CSS. It does not animate or persist data values.

Adapt the component selectors before reuse; they are starter classes, not a universal DOM walker. Keep separate wrappers for pointer tilt, ambient float, and data geometry so animation drivers cannot overwrite one another. Do not use permanent JavaScript frame loops for effects CSS can represent.

## iart.ai craft applied to dashboards
Reviewed `iart-ai/web-animation-skills` at commit `b6dba3eb759726845a44163ff0bad70dd9e7fbb6`: micro-interaction, svg-animation, and patterns-and-profiling. Use concise eased feedback, SVG pathLength-normalized traces, composed animation layers, and explicit rendered state checks. Prefer transforms/opacity, but measure actual paint and compositing costs; these properties are not an unconditional frame-rate guarantee. Keep scoped SVG/range paint effects small.

## Verify continuous behavior
Inspect screenshots and computed animation state at separated moments. Confirm loops really advance when idle, pause when hidden/offscreen, and stop immediately for Pause/Reduced/Off. Check rapid range reversals, keyboard range input, route changes, detached nodes, and preference changes during animation. Verify all themes at desktop and narrow width. Compare actual values before/after interaction. Never claim performance or accessibility compliance without measuring it.
