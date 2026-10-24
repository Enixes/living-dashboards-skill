# Honest animated visualizations

## Choose the encoding

| User question | Starting point | Motion purpose |
| --- | --- | --- |
| What changed over time? | Line or area with time axis | Preserve series identity and selected period |
| Which is larger? | Sorted bars or dot plot | Follow categories through sorting/filtering |
| How is it distributed? | Histogram, box plot, or distribution view | Explain cohort changes with clear bin definitions |
| How do variables relate? | Scatterplot | Track stable objects as values change |
| How much is complete? | Linear progress, bullet chart, or restrained ring with denominator | Show actual progress toward goal |
| What makes up a total? | Stacked bars; pie/donut only for few clear parts | Preserve parts/total through changes |
| Where are problems concentrated? | Heatmap or matrix | Reveal relevant cells/selections without color cycling |

Use text or tables when exact lookup matters more than patterns. Keep quantitative comparisons planar: a sculpted frame can surround a flat plot, but perspective must not distort bar lengths, areas, baselines, or axis spacing. Use true 3D only for spatial data with an exact 2D/table alternative and camera reset. Avoid radar charts for unrelated metrics and decorative graphs with invented data.

## Define the data contract

- Show units, period, source/freshness where relevant, and applicable filters. Distinguish event, fetch, and display times when important.
- Preserve zero baselines for bar lengths. Label deliberate nonzero line-chart ranges. Keep comparable panels on comparable scales; never silently rescale during animation.
- Keep missing samples as gaps unless interpolation has a valid disclosed meaning. Separate actual, forecast, target, and uncertainty with labels and line/band treatments.
- Keep category/series IDs stable. Map each series consistently to its label, color role, marker, and line style across themes.
- Distinguish zero, missing, loading, stale, and error. Label demo data visibly; do not merge it into real totals.
- Show exact values in tooltips/tables even if geometry is decimated. Preserve relevant spikes/outliers when reducing points.

## Animate without changing the claim

Use an entrance only once when it helps reveal structure. Show axes and labels from the start. Never redraw every curve from zero on each render or hide content pending an entrance.

For changes, animate stable objects toward new positions for roughly 300–500 ms if the update rate permits. Never overshoot or bounce data. For different units, changed topology, or inserted/deleted points, prefer direct redraw or crossfade with clear labeling over misleading path morphs. Keep transitions shorter than update intervals; use settled redraws for dense live feeds.

If an axis domain changes, make that clear and synchronize marks, ticks, and labels. Hold scales steady during comparison interactions. Preserve zoom/brush state and distinguish deliberate resets from automatic ones.

Treat count-up values as decorative interpolation only. Semantic values and source data must already be correct; screen readers hear the settled value once rather than every frame. Avoid presenting animated accounting amounts as actual intermediate balances or trades.

## Make exploration accessible

- Give charts concise titles, summaries, and an exact-value path such as a data table. Do not put hundreds of points into the tab order.
- Provide a deliberate keyboard pattern for dense exploration: chart entry, arrow navigation, focused value, and an exit. Offer equivalent touch selection.
- Show tooltips on focus as well as hover; avoid clipping/obscuring selected values or relying only on pointer position. Include units and period.
- Implement interactive legends as real controls. Preserve series selection across themes and communicate hidden states with more than color.
- Announce completed filter results succinctly, not every pointer move or animation frame.
- Feed reduced/off mode into chart configuration and custom drawing loops.

## Verify

Exercise applicable cases: empty data, one point, equal values, negatives, missing segments, long labels, many series, and a representative large dataset. Check exported/copied values match filters and units. Verify narrow layouts, themes, tooltips, keyboard use, and interrupted updates. Do not claim production scale from a tiny fixture.
