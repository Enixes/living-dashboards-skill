# Motion that explains the dashboard

## Set the shared language

Start with 100–160 ms for feedback, 160–240 ms for controls, 220–340 ms for panels/layout, and 300–500 ms for meaningful data transitions. Treat these as tuning ranges, not delays before state updates. Keep a deliberate first-load focal reveal below about 650 ms and the screen usable throughout. Exit faster than entrance. Use confident ease-out arrivals and critically damped movement; reserve restrained springs for interactions that benefit. Never overshoot measured data or drag positions.

Use an inventory: **element → trigger → purpose → property → duration → interruption → reduced/off fallback**. Cover each interactive component class and graph. Reuse a coherent vocabulary instead of inventing an effect for each instance.

## Component recipes

| Element | Useful motion | Constraint | Reduced / Off |
| --- | --- | --- | --- |
| Buttons and actionable cards | Subtle press; completion feedback | Only actionable surfaces react; keep hit box and label stable | Immediate color, border, or icon state |
| Sliders | Thumb/fill track input; linked chart previews consequences; settle on release | Native range semantics; immediate value; no easing/debounce on thumb position | Immediate value and linked result |
| Toggles/checkboxes | Track and indicator acknowledge state | State changes on activation; explain failures | Instant checked state |
| Tabs/filters | Indicator connects old/new selection | Update keyboard focus and content immediately | Instant selection/content |
| Menus/tooltips | Short reveal from anchor | Support focus/touch and Escape; correct portal layers | Instant anchored surface |
| Drawers/dialogs | Reveal origin of detail and route back | Appropriate focus trap, return focus, Escape, background interaction control | Instant opening with same focus behavior |
| Expanders | Reveal related detail without losing place | Measure dynamic height or use a suitable layout technique | Instant expansion |
| Table sort/filter | Follow stable rows through changes | Stable keys; bounded FLIP-style transforms; preserve focused context | Instant rows plus result count |
| KPIs | Brief changed-state highlight; optional old-to-new interpolation | Exact accessible value immediately; tabular numerals; no rolling IDs/dates | Exact value and persistent delta |
| Charts | Move stable data objects to new positions | Follow charts.md; stable comparisons; interrupt toward newest data | Instant chart plus summary |
| Progress/milestones | Fill toward actual goal; bounded completion accent | Real denominator; no early completion or repeated celebration on rerender | Instant progress/completion text |
| Loading | Indeterminate indicator during pending work | Reserve geometry; no artificial wait or fake percentages | Static pending label |
| Notices | Reveal feedback near its cause | Persistent actionable errors; enough time to read | Immediate message |
| Theme changes | Bounded decorative surface transition when contrast permits | Preserve state/readability; switch foreground/background pairs together | Instant theme |
| Spatial focal scene | Small pointer response, selected layer lift, or an explained camera move | Stable hit targets; one active scene; follow spatial-design.md | Static layers or Flat; no parallax |

Keep focus outlines immediate. Avoid moving a focused target through decorative animation. Do not animate disabled elements as though they can be activated.

## Slider and linked-result lifecycle

1. On input, update thumb, visible value, units, and accessible state synchronously.
2. Update cheap local results immediately or through short interruptible transitions that do not trail the input.
3. For heavy computation/network calls, debounce only derived work. Mark the last valid result as pending/stale. Cancel or ignore old requests with request IDs or abort signals.
4. Commit appropriately on release/keyboard change. Replace results only if they match the latest input. Keep filters and chart titles synchronized with the data they describe.
5. Retain valid content on failure and show recovery. Do not celebrate a request that merely started.

## Interruption and update frequency

Animate from the current displayed state to the newest target; cancel superseded frames/timelines. Keep animation as presentation, never the source of truth. Use stable IDs. Clean up on unmount and redraw on resize without resetting selection.

For high-frequency feeds, batch rendering without dropping underlying records. Prefer a settled plot with a small change cue when interpolation obscures the signal. Show freshness and a pause/freeze control when appropriate; label frozen data. Avoid implying that intermediate measurements occurred between discrete samples.

## Motion preference contract

| Setting | Effective behavior |
| --- | --- |
| System | Full unless the OS requests reduced motion |
| Full | Full, capped to Reduced when the OS requests it |
| Reduced | No spatial choreography, parallax, count-up, or loops; brief nonmoving feedback if helpful |
| Off | Immediate state changes; preserve labels, focus, color, and status feedback |

Resolve a shared effective mode for CSS and JavaScript. Listen for OS changes during the session. Persist only the user's preference. Feed the effective mode into charts, canvas, and motion libraries; CSS cannot stop JavaScript animations. Cancel in-flight motion and settle to the latest state when preference changes.

Provide pause for optional loops, including those lasting longer than five seconds. Pause offscreen/hidden work and stop decoration on low-resource paths. Avoid flashing/glitches, scroll hijacking, sound autoplay, and compulsory parallax.

## Performance and verification

Keep transitions localized. Profile masks, filters, shadows, canvas, and SVG path changes with representative data. Use temporary `will-change` only when needed. Avoid per-frame layout reads followed by writes across many nodes.

Check rapid reversals, repeated clicks, slider dragging, theme changes during updates, backgrounding, OS preference changes, and mid-transition resizing. Look for queued animations, obsolete results, lost focus, flicker, jank, and leaked work. Report observations rather than promising 60 fps from CSS choices alone.

## Continuous Max mode
For Max or an always-moving request, follow [continuous-motion.md](continuous-motion.md). Run a treatment across every visible component family; preserve exact data. Include Pause, OS reduction, offscreen/hidden cleanup, and control-region settling. Verify motion advances at separated times and stops immediately when paused.
