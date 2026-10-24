# Acceptance checks

Use these during a focused visual/interaction pass. Verify features in scope and report what could not be exercised.

## First glance

- Identify the primary question, key result, and next action in five seconds from the settled screen.
- Confirm hierarchy survives without motion/decorative backgrounds.
- Confirm themes differ in typography roles, geometry/material, and rhythm as well as colors.
- Check spacing, aligned numerals, readable chart labels, useful density, and consistent icons.
- Remove equal-weight filler panels, detached units, fake activity, and repeated decorative entrances.

## Depth and visual craft

Inspect the focal object at rest and maximum tilt. Check coherent lighting, contact shadows, layer order, unclipped edges, crisp foreground labels, and stable hit targets. Confirm Flat removes perspective and Z displacement while preserving every action and datum. Confirm Immersive degrades to static layers on coarse pointers and Reduced/Off. Test scroll, resize, pointer escape/reentry, tab visibility, and unmount cleanup. Keep idle scenes idle. If a renderer is used, exercise its unavailable/context-loss fallback.

Assess a thumbnail as well as the full screenshot. The signature, key result, and next action should remain recognizable. A creative request must result in a visible authored composition, not only stronger shadows or an accent-color change.

## Functional flow

Exercise one complete journey: period selection → chart update → inspect a point → open detail. Ensure every visible control works or has an honest disabled state.

Drag the consequential slider and reverse rapidly. Verify immediate thumb/value, latest-result wins, and identifiable pending data. Sort/filter tables and confirm stable selection and counts. Close/reopen details without losing place.

## Themes and preferences

Inspect every shipped theme on desktop and a narrow viewport. Use the theme selector by keyboard; reload to check persistence. Switch with active filters, a selected chart point, and an open panel. Check portaled tooltips/menus, canvas charts, status badges, focus rings, and selection styling.

Check Full, System with OS reduced motion, Reduced, and Off. Toggle during transitions; verify final states. Off must stop JavaScript/chart/canvas animations as well as CSS. Exercise storage-denied behavior when relevant.

## Accessibility and responsiveness

Verify visible focus, accessible names, traversal, Escape, focus return, chart summaries/tables, non-color cues, and associated form labels. Measure contrast for actual combinations. Check zoom/reflow and long content; allow table scrolling without page-wide overflow. Prefer touch targets around 44 CSS px where space permits.

Keep tasks usable on small touch screens without hover. Avoid high-frequency live-region updates. Confirm controls and text remain reachable with open drawers/navigation.

## Data and runtime

Exercise applicable loading, empty, error, stale, success, extreme-value, and long-label states. Confirm totals, units, comparisons, chart mappings, and gaps remain honest through animation/theme changes.

Inspect console errors, broken assets, layout shifts, stuck animation, obsolete requests, background work, and cleanup. Use representative data for performance checks. Avoid extensive snapshots for cosmetic edits; test concrete risks such as preference resolution and stale-result races when needed.

## Delivery gate

Fix discovered task-blocking, readability, misleading-data, and motion-preference defects. Make one deliberate refinement from the render. Summarize changes, themes/motion controls, performed checks, and material limitations. If browser/device access is unavailable, separate code inspection from runtime verification.

## Continuous Max mode
For Max or an always-moving request, follow [continuous-motion.md](continuous-motion.md). Run a treatment across every visible component family; preserve exact data. Include Pause, OS reduction, offscreen/hidden cleanup, and control-region settling. Verify motion advances at separated times and stops immediately when paused.
