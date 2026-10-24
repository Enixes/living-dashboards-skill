---
name: living-dashboards
description: Create or redesign visually striking dashboards with distinctive selectable themes, continuous Max motion, reactive controls, tactile materials, and expressive 3D effects. Use for analytics, learning trackers, monitoring consoles, admin panels, or requests for beautiful dashboards, nature/abstract/cyberpunk themes, animated charts and sliders, depth, parallax, spatial interfaces, or richer visual polish. Apply to design specifications and implementation; exclude backend-only work and static reports.
---

# Living Dashboards

Build dashboards that attract attention immediately and reward repeated use. Give them a recognizable visual world, a memorable focal interaction, and tactile depth. Give every interactive component and changing visualization a deliberate motion treatment. For this skill, favor a living interface with continuous Max motion across visible component families, while keeping information readable and controls immediate. Keep the paused composition compelling too.

## Establish the task

1. Inspect the existing app, dependencies, data, screenshots, design tokens, and project instructions. Read PRODUCT.md or DESIGN.md when present. Preserve product facts and functional behavior. Match the existing framework and component architecture.
2. Identify the audience, primary question, next action, data source, update frequency, and likely devices. Use available context; state reasonable assumptions briefly. Ask only about a missing fact that would materially change the work.
3. Distinguish building, redesigning, and polishing. For small polish requests, limit changes to the requested area. For redesigns, create a coherent new visual direction while preserving working integrations.
4. Honor a requested theme. Otherwise offer Nature / Abstract / Cyberpunk as named options with short descriptions and continue using a suitable default. Do not stop the build waiting for a theme choice. Ship the theme selector in the dashboard; describing alternatives in chat alone does not fulfill theme choice.
5. Apply this skill as the design layer alongside the environment's app/site implementation and delivery workflow. Do not deploy, provision services, or migrate a project merely to apply visual guidance. For a specification-only request, deliver the specification without building an app.

## Write a compact design contract

Before implementation, establish these decisions in existing project documentation or a brief working note:

- **First glance:** the question answered in five seconds, the dominant visualization, and the next action.
- **Composition:** a focal region, supporting evidence, and a detail region; size them by information priority.
- **Identity:** selected theme, type roles, color roles, surface geometry, and one signature detail.
- **Depth:** foreground, working plane, and background; material and light direction; what gains meaning from spatial separation; flat and touch equivalents.
- **Motion:** one memorable focal interaction, component feedback, transitions between data states, and reduced-motion alternatives.
- **Truth:** source versus example data, units, comparison periods, loading/error/empty states, and freshness.

Keep this compact and proceed to working output. Do not substitute a long design essay for implementation.

## Set an ambitious visual direction

Read [references/art-direction.md](references/art-direction.md) for new dashboards, major redesigns, and requests to be more creative or visually impressive.

- Choose a specific world tied to the product: a terraced learning atlas, a precision observatory, a kinetic paper studio, or an illuminated operations desk. Describe its signature in one sentence, then implement it.
- Sketch three compact composition ideas privately; choose the strongest fit and build it. Explore silhouettes and hierarchy, not just palettes. Do not delay work for a mood-board approval unless requested.
- Give the primary region one authored spatial composition: a layered map, dimensional milestone, folded plane, or exploded relationship. Surround it with calm, readable evidence and a clear action.
- For explicit 3D or “wow” requests, ship one tangible depth treatment and one meaningful interaction. A neon gradient, huge heading, and generic card grid are insufficient. For an always-moving brief, deliver continuous motion in the hero, navigation, cards, metrics, chart accents, range controls, and supporting text, with a coverage inventory. Preserve restrained brand constraints when they apply.
- Make beauty part of repeated use: crisp type, coherent materials, generous alignment, delightful selection, and satisfying completion. Keep the signature visible in a still screenshot.

## Compose a recognizable dashboard

- Make the top viewport answer a real question with context: value, unit, period, comparison, or exception. Choose a metric, chart, ranked list, or status map according to the task.
- Use scale, alignment, negative space, and visual grouping to make important information unmistakable. Avoid flattening every section into identical cards. Use cards when they define a genuine interaction or information boundary.
- Pair an expressive heading voice with readable controls and tabular numerals. Keep body copy comfortably legible at shipped sizes. Reuse brand fonts where appropriate; avoid downloading unnecessary font families.
- Repeat one authored motif through a few details: forest contour terraces, folded paper planes, or luminous instrument layers. Keep ornaments out of plot areas, table cells, and reading paths.
- Use restrained backgrounds, clear labels, strong focus states, consistent icons, and deliberate empty space. Make charts, legends, tooltips, selections, menus, and dialogs feel like one product.
- Keep meaningful controls and data present in the first viewport. Do not insert a marketing hero, ornamental intro, or loading animation that delays dashboard use.
- Make every visible control work. Label example datasets visibly. Show genuine loading, empty, error, stale-data, success, and disabled states as applicable; never simulate connectivity or a successful action.

## Build real theme choice

Read [references/themes.md](references/themes.md) before theme work. Use [assets/dashboard-tokens.css](assets/dashboard-tokens.css) as an optional framework-neutral starting point, adapting it to the app rather than replacing existing tokens blindly.

- For a new unconstrained dashboard, implement at least Nature, Abstract, and Cyberpunk. Add other worlds only when useful or requested. For an existing branded app or a narrower request, preserve its constraints and offer compatible variants.
- Differentiate palette, typography roles, geometry, background material, and motion character. A different accent color alone is insufficient.
- Keep navigation, content order, chart identities, control locations, and data semantics consistent between themes.
- Provide an accessible named selector with previews and selected state. Persist selection safely and restore it before paint where the platform allows. Catch storage errors and preserve functionality.
- Treat appearance, color mode, density, and motion as separate settings. Never force extra animation because Cyberpunk is selected. Only expose light/dark options actually implemented and checked.
- Transition bounded surface regions smoothly only when foreground/background contrast survives the transition. Otherwise switch that pair instantly. Apply data and labels immediately. Preserve focus, filters, selections, open panels, and scroll position through switching.

## Add sculpted depth and 3D

Read [references/spatial-design.md](references/spatial-design.md) before depth work. Use the optional, framework-neutral [assets/depth.css](assets/depth.css) and [assets/depth.mjs](assets/depth.mjs) for a small CSS 3D scene. The [interactive specimen](assets/depth-demo.html) demonstrates theme, depth, motion, and linked controls; adapt its composition to the actual product.

- Use three purposeful layers: an atmospheric backdrop, a stable plane for data and controls, and one focal object or selected detail. Establish one light direction with material-specific edges, contact shadows, and restrained highlights.
- Prefer CSS perspective and layered SVG for shallow scenes. Use a real 3D renderer only when spatial inspection or a product model justifies its cost. Make the scene enhance a usable DOM interface.
- Keep text, axes, slider tracks, and hit targets stable. Tilt a separate visual layer within a stationary interaction boundary. Do not tilt every card or put essential information on the reverse of a flip.
- Build equivalent touch and keyboard paths. Disable pointer parallax for coarse pointers and Reduced/Off. Keep useful static depth unless the user chooses Flat.
- When depth materially changes the experience, expose **Depth: Flat / Layered / Immersive** independently of theme and motion. Layered is the default; Immersive adds bounded, optional pointer response. Never make flat mode lose information or actions.
- Use actual data for any geometric encoding. Keep quantitative comparisons planar and undistorted. For a true spatial dataset, provide an exact 2D/table equivalent, units, camera reset, and selection that survives camera changes.

## Animate throughout, with a reason

Read [references/continuous-motion.md](references/continuous-motion.md) for Max mode, requests to make everything move, and iart.ai-inspired motion graphics. Use the optional [assets/motion-system.mjs](assets/motion-system.mjs) lifecycle controller with [assets/continuous-motion.css](assets/continuous-motion.css); adapt its selector inventory to the actual app. Treat user requests for continuous movement as an explicit design requirement. Do not quietly deliver only hover or entrance effects.


Read [references/motion.md](references/motion.md). Create a small motion inventory covering every interactive component class and every graph: trigger, purpose, affected property, timing, interruption behavior, and reduced-motion alternative.

- Give buttons, sliders, toggles, tabs, menus, tooltips, actionable cards, tables, filters, panels, and charts intentional feedback or state transitions. In Max, give text and decorations a quiet continuous treatment or let them inherit their surface motion; in other modes, use a settled state.
- Keep input-to-feedback immediate. During slider dragging, keep the thumb and value attached to input; animate linked outcomes only when responsive. Debounce expensive work separately and identify pending results.
- Animate chart changes to preserve relationships and explain causes. Do not replay entrances after every render, manufacture intermediate measurements, or let animation change the apparent data.
- Use a consistent timing and easing system. Make transitions interruptible and replace obsolete targets. Never queue rapid interactions behind earlier animations.
- Include **Motion: Max / System / Full / Reduced / Off**, plus a persistent **Pause motion** control. Default to Max for new dashboards made with this skill unless the user specifies otherwise; preserve an existing Reduced/Off preference. In Max, animate every visible component family continuously using small coherent movement, traveling light, or changing decorative strokes. Keep exact values constant and pause movement around a focused or hovered control. Respect the OS preference in System; let OS reduced motion cap Max and Full. Off means immediate stable state with nonmoving feedback. Apply the preference to CSS, JavaScript, chart libraries, and canvas alike.
- Keep one dominant focal sequence, with supporting loops at lower amplitude and staggered phases. In Max, run continuous motion throughout the visible interface and stop offscreen/hidden work. In Full/System, prefer event-driven motion. Provide one-click pause; keep repeated workflows quick.

## Make visualizations trustworthy

Read [references/charts.md](references/charts.md) for dashboards with graphs or changing metrics.

Choose charts from the analytical question. Preserve axes, units, missing-data gaps, stable series keys, and actual comparisons. Pair visuals with accessible summaries or tables and useful keyboard/touch exploration. Make filtering, brushing, legends, and tooltips real interactions. A chart-shaped decoration does not count as a graph.

## Implement within the performance budget

- Prefer native controls with themed presentation. Reuse existing chart/motion packages; add dependencies only for a concrete capability. Verify unfamiliar APIs against installed versions or official documentation.
- Use CSS transitions for simple state; use the existing motion library or Web Animations API for interrupted or coordinated transitions. Favor transforms/opacity where appropriate. Measure bounded SVG, clipping, color, blur, and canvas effects rather than assuming they are cheap.
- Avoid `transition: all`, per-frame framework state for static decoration, full-screen animated blur, gratuitous WebGL, and permanent `will-change` on many elements.
- Budget spatial effects explicitly: one active focal scene, input-driven rendering, bounded pixel ratio if canvas is used, and a fallback for hidden/offscreen/unsupported contexts. Measure before claiming smooth performance.
- Cancel stale requests and animations; clean up observers, frames, and listeners. Handle rapid changes without outdated results overwriting newer intent.
- Keep layout stable and readable content visible before animation. Avoid making visibility depend on JavaScript entrance classes. Throttle expensive live rendering while preserving underlying measurements and communicating freshness.
- Adapt composition to small screens. Reprioritize and reflow; keep tables intentionally scrollable and touch targets usable. Do not shrink the entire desktop layout to fit.

## Inspect, refine, and deliver

Use [references/quality.md](references/quality.md) as the acceptance check. Inspect the rendered result in each shipped theme at desktop and narrow widths. Exercise the most consequential flow, rapid interactions, keyboard operation, and reduced/off motion. Fix discovered issues before delivery.

Judge the settled screen first, then interaction. Inspect a still screenshot at full size and thumbnail size: the focal region, selected state, and next action should be clear at both. If it looks generic, strengthen composition or the signature detail. If it feels exhausting, reduce simultaneous motion and restore hierarchy. Check the full depth range, every theme, and touch/keyboard equivalents. Complete one focused visual refinement pass; never claim browser or device verification without performing it.

In the handoff, name themes, explain the signature interaction briefly, identify motion/depth controls, and report checks and real limitations. Link the working result according to the implementation environment. Avoid unsupported claims such as guaranteed frame rates or full accessibility compliance.

## Inspiration

Also study [iart.ai web-animation-skills](https://github.com/iart-ai/web-animation-skills) for SVG traces, instant press feedback, choreography and render-at-state verification. Attribute adapted material; retain its license for copied code. Do not equate decorative loops with changing data.

Use [Paul Bakaus's Impeccable](https://github.com/pbakaus/impeccable) as inspiration for intentional visual direction, cohesive craft, purposeful motion, and inspecting rendered results. Treat this as an independently authored dashboard specialization, not an Impeccable installation or dependency. Consult [references/sources.md](references/sources.md) when revisiting source material.
