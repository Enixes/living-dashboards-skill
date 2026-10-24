/* Optional CSS 3D enhancement. Content and controls work without this module. */
const instances = new WeakMap();
export function resolveMotion(preference = 'system', osReduced = false) {
  if (preference === 'off') return 'off';
  if (preference === 'reduced' || osReduced) return 'reduced';
  return 'full';
}
export function attachDepth(root = document.documentElement) {
  instances.get(root)?.destroy();
  const doc = root.ownerDocument, win = doc.defaultView;
  const os = win.matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = win.matchMedia('(hover: hover) and (pointer: fine)');
  const records = new Map(), listeners = [];
  let active = null, frame = 0, latest = null, destroyed = false;
  const listen = (target, event, fn, options) => {
    target.addEventListener(event, fn, options);
    listeners.push(() => target.removeEventListener(event, fn, options));
  };
  const allowed = record => root.dataset.depth === 'immersive'
    && resolveMotion(root.dataset.motion, os.matches) === 'full'
    && pointer.matches && !doc.hidden && record.visible;
  function reset() {
    if (frame) win.cancelAnimationFrame(frame);
    frame = 0; latest = null;
    if (active) {
      active.stage.style.removeProperty('--ld-rx');
      active.stage.style.removeProperty('--ld-ry');
      active.scene.removeAttribute('data-depth-active');
      active.rect = null;
    }
    active = null;
  }
  function sync() {
    reset();
    root.dataset.depthMotion = resolveMotion(root.dataset.motion, os.matches);
  }
  function paint() {
    frame = 0;
    if (!active || !latest || !allowed(active)) { reset(); return; }
    const {rect, stage} = active;
    const x = Math.max(-1, Math.min(1, (latest.x - rect.left) / rect.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (latest.y - rect.top) / rect.height * 2 - 1));
    stage.style.setProperty('--ld-rx', `${(-y * 4).toFixed(2)}deg`);
    stage.style.setProperty('--ld-ry', `${(x * 5).toFixed(2)}deg`);
  }
  const intersection = win.IntersectionObserver ? new win.IntersectionObserver(entries => {
    for (const entry of entries) {
      const record = records.get(entry.target);
      if (!record) continue;
      record.visible = entry.isIntersecting;
      if (!record.visible && active === record) reset();
    }
  }) : null;
  const resize = win.ResizeObserver ? new win.ResizeObserver(() => reset()) : null;
  function refresh() {
    if (destroyed) return;
    for (const [scene, record] of records) if (!root.contains(scene)) {
      if (active === record) reset();
      intersection?.unobserve(scene); resize?.unobserve(scene);
      record.remove.forEach(fn => fn()); records.delete(scene);
    }
    for (const scene of root.querySelectorAll('[data-depth-scene]')) {
      if (records.has(scene)) continue;
      const stage = scene.querySelector('.ld-stage');
      if (!stage) continue;
      const record = {scene, stage, visible: true, rect: null, remove: []};
      records.set(scene, record);
      const on = (event, fn) => {
        scene.addEventListener(event, fn, {passive: true});
        record.remove.push(() => scene.removeEventListener(event, fn));
      };
      const enter = event => {
        if (event.pointerType === 'touch' || !allowed(record)) return;
        if (active !== record) reset();
        record.rect = scene.getBoundingClientRect();
        if (!record.rect.width || !record.rect.height) return;
        active = record; scene.setAttribute('data-depth-active', '');
      };
      on('pointerenter', enter);
      on('pointermove', event => {
        if (event.pointerType === 'touch' || !allowed(record)) return;
        if (active !== record) enter(event);
        if (active !== record) return;
        latest = {x: event.clientX, y: event.clientY};
        if (!frame) frame = win.requestAnimationFrame(paint);
      });
      on('pointerleave', () => { if (active === record) reset(); });
      on('pointercancel', () => { if (active === record) reset(); });
      intersection?.observe(scene); resize?.observe(scene);
    }
  }
  const mutation = new win.MutationObserver(sync);
  mutation.observe(root, {attributes: true, attributeFilter: ['data-depth', 'data-motion']});
  listen(os, 'change', sync); listen(pointer, 'change', sync);
  listen(doc, 'visibilitychange', reset);
  listen(win, 'resize', reset, {passive: true});
  listen(win, 'blur', reset);
  listen(doc, 'scroll', reset, {capture: true, passive: true});
  listen(doc, 'keydown', reset);
  const api = {
    refresh,
    destroy() {
      if (destroyed) return;
      reset(); destroyed = true;
      listeners.forEach(remove => remove());
      records.forEach(record => record.remove.forEach(remove => remove()));
      intersection?.disconnect(); resize?.disconnect(); mutation.disconnect();
      records.clear(); root.removeAttribute('data-depth-motion');
      instances.delete(root);
    }
  };
  sync(); refresh(); instances.set(root, api);
  return api;
}
