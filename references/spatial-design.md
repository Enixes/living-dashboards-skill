# Depth and 3D that serve the dashboard

## Select the appropriate technique

| Need | Start with | Practical limit |
| --- | --- | --- |
| Tactile controls and layered panels | CSS shadows, borders, highlights, small translations | Keep hit boxes stable; do not animate blur or shadow on every pointer frame |
| Tilted sculpture, folded sheet, shallow atlas | CSS perspective and separate transformed visual layers | Keep labels/controls in the flat foreground; start around 3–5 degrees of pointer response |
| Precise diagram or layered relationship | SVG with DOM controls, selected-state depth, bounded transforms | Preserve topology and labels; disclose what position or size encodes |
| Explorable product, geographic or spatial dataset | Existing WebGL/WebGPU/3D stack | Lazy load, cap rendering cost, handle context loss, include a DOM/2D fallback |

Do not add a 3D engine for a rotating KPI card. Conversely, use genuine scene geometry when the user needs to inspect a real three-dimensional object. Verify renderer APIs against the installed version or official documentation.

## Build a stable scene

Use a stationary wrapper for layout, focus, and pointer bounds. Put transformed visual layers inside it. Keep the heading, exact values, labels, controls, tooltip anchors, and focus ring on a stable foreground plane. Decorative layers use `aria-hidden="true"` and `pointer-events:none`; do not hide functional controls from accessibility APIs.

Separate responsibilities: an outer transform for tilt, an inner transform for layer placement, and a local transform for a reveal. Avoid multiple animation systems overwriting the same `transform`. Keep overlays and menus outside transformed/clipped ancestors when necessary. Test stacking contexts and overflow at the maximum tilt.

Use one light direction. Give objects a contact shadow and a subtle lit edge so they feel attached to the scene. Distinguish depth through occlusion, perspective, thickness, and surface contrast rather than heavy blurred shadows everywhere. Keep chart axes and quantitative lengths undistorted.

## Depth and input contract

| Depth setting | Resting appearance | Full motion + fine pointer | Touch, Reduced, or Off |
| --- | --- | --- | --- |
| Flat | Planar composition with borders and normal hierarchy | No spatial effects | Same content and actions |
| Layered | Static sculpted layers, small perspective, local shadows | Ordinary control feedback; no cursor tilt | Same static layers; immediate actions |
| Immersive | Same information with a focal spatial scene | Bounded pointer tilt or meaningful layer reveal | Static layers; no parallax or camera motion |

Depth and motion are independent. A user can keep static 3D with motion Off. Apply the OS reduced-motion preference as a ceiling on Full. The Flat option removes perspective and Z displacement; do not merely stop the animation. Coarse pointer devices must not depend on hover or device orientation. Do not request sensor permissions for decorative effects.

## Pointer behavior and lifecycle

- Capture wrapper geometry at pointer entry or a genuine resize. Reuse it during pointer updates, clamping normalized coordinates to the wrapper. Reset on scroll/layout changes rather than reading layout and writing styles every frame.
- Batch the newest input into at most one pending animation frame. Stop when input stops; do not create a permanent render loop for cursor tilt. Keep pointer-following values immediate enough to feel attached.
- Animate the visual layer, not React/application state or the interaction boundary. Prefer one active focal scene. Reset on pointer leave/cancel, loss of visibility, offscreen entry, and preference changes.
- Remove listeners and disconnect observers on unmount. Cancel the pending frame. Reattachment must not accumulate event handlers.
- Keep deliberate selection usable by keyboard and touch. Do not make tilt a prerequisite for selecting, discovering, or reading content.

## Optional starter

Copy `assets/depth.css` and `assets/depth.mjs` into the project's assets when a small CSS scene is appropriate. Adapt the tokens and markup; do not replace the existing design system. Serve the specimen `assets/depth-demo.html` over HTTP to inspect it with its relative imports.

```html
<section class="ld-scene" data-depth-scene aria-labelledby="checkpoint-title">
  <div class="ld-stage" aria-hidden="true">
    <div class="ld-layer ld-base"></div>
    <div class="ld-layer ld-mid"></div>
    <div class="ld-layer ld-top"></div>
  </div>
  <div class="ld-foreground">
    <h2 id="checkpoint-title">Your next checkpoint</h2>
    <!-- Exact data and real controls remain on this stable plane. -->
  </div>
</section>
<script type="module">
  import { attachDepth } from './depth.mjs';
  const depth = attachDepth(document.documentElement);
  // Root data-depth: flat | layered | immersive; data-motion: system | full | reduced | off.
  // Call depth.refresh() after adding scene elements, and depth.destroy() on unmount.
</script>
```

The starter provides three decorative layers, optional bounded tilt, OS/coarse-pointer handling, visibility cleanup, and three theme materials. It never encodes arbitrary progress as a layer height. Design the data mapping separately. Set preferences on the same root passed to `attachDepth`; shadow DOM and portaled scenes require explicit integration.

## Real 3D scene budget

For a renderer, begin with one canvas and one focal object, no postprocessing, bounded device pixel ratio (start at 1–1.5), and on-demand rendering. Reuse geometry/materials and dispose of resources. Stop drawing offscreen or in hidden tabs; render a settled frame for Reduced/Off. Keep meaningful content usable before model/texture loading completes.

Test representative hardware and datasets before increasing quality. Reduce draw calls, particles, large transparent surfaces, dynamic shadows, and texture sizes before hiding essential UI. On context loss or unsupported features, replace the scene with a clear static/2D view preserving selected content and actions. Do not claim a frame rate from code inspection.

## Verify the effect, not just its existence

Check maximum tilt, pointer escape, rapid reentry, scroll/resize during movement, keyboard focus, touch, offscreen/hidden state, and switching motion/depth while active. Verify flat mode, crisp text, uncut shadows, correct layering, and usable controls at narrow width and 200% zoom. Confirm no decorative loop runs while idle. Inspect a screenshot after all motion settles: the depth should still be intentional.
