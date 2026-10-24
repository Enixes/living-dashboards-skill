/* Reactive motion primitives. iart.ai web-animation craft; see MOTION-SOURCES.md. */
export function resolveMotion(preference='system', reduced=false, paused=false) {
  if (paused || preference==='off') return 'off';
  if (reduced || preference==='reduced') return 'reduced';
  return preference==='max' ? 'max' : 'full';
}
const instances=new WeakMap();
export function attachMotion(root=document.documentElement) {
  instances.get(root)?.destroy();
  const doc=root.ownerDocument, win=doc.defaultView;
  const media=win.matchMedia('(prefers-reduced-motion: reduce)');
  const animations=new Map(), scenes=new Set(), listeners=[];
  let destroyed=false;
  const mode=()=>resolveMotion(root.dataset.motion,media.matches,root.dataset.paused==='true');
  const listen=(target,type,fn,opts)=>{target.addEventListener(type,fn,opts);listeners.push(()=>target.removeEventListener(type,fn,opts))};
  function cancel(){for(const a of animations.values())a.cancel();animations.clear()}
  function play(el,frames,options={}) {
    if(!el?.animate || !el.isConnected || doc.hidden || !['full','max'].includes(mode()))return;
    animations.get(el)?.cancel();
    const a=el.animate(frames,{duration:260,easing:'cubic-bezier(.16,1,.3,1)',...options});
    animations.set(el,a);
    a.finished.catch(()=>{}).finally(()=>{if(animations.get(el)===a)animations.delete(el)});
    return a;
  }
  function sync(){
    root.dataset.motionLevel=mode();root.dataset.pageVisible=String(!doc.hidden);
    if(doc.hidden || !['max','full'].includes(mode()))cancel();
  }
  const observer=win.IntersectionObserver?new win.IntersectionObserver(entries=>{
    for(const e of entries)e.target.dataset.inView=String(e.isIntersecting);
  },{threshold:.08}):null;
  function refresh({enter=false}={}) {
    if(destroyed)return;
    for(const el of scenes)if(!el.isConnected){observer?.unobserve(el);scenes.delete(el)}
    for(const [el,a] of animations)if(!el.isConnected){a.cancel();animations.delete(el)}
    root.querySelectorAll('.panel,.focus-card,.stat-item,.world-card,.nav-button,.track-button,.brand,.button,.theme-picker,.motion-select,.sync-status,.check-row,.timeline-row,.question-row,.page-footer,.profile,.side-note,.mobile-nav,input[type=range]').forEach((el,i)=>{el.setAttribute('data-life','');el.style.setProperty('--life-delay',`${-(i%11)*.47}s`)});
    root.querySelectorAll('.page-heading h1,.page-heading p,.stat-value,.stat-label,.panel-head h2,.session-label,.range-top output,.recall-coordinate strong').forEach((el,i)=>{el.setAttribute('data-life-text','');el.style.setProperty('--life-delay',`${-(i%7)*.4}s`)});
    for(const el of root.querySelectorAll('[data-ambient-scene],[data-life],[data-life-text]'))if(!scenes.has(el)){
      scenes.add(el);el.dataset.inView='true';observer?.observe(el);
    }
    if(enter)root.querySelectorAll('[data-motion-enter]').forEach((el,i)=>play(el,
      [{opacity:.45,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],
      {duration:mode()==='max'?460:260,delay:Math.min(i*45,180)}));
    sync();
  }
  listen(doc,'click',event=>{
    const button=event.target.closest?.('button');
    if(!button||button.disabled)return;
    const icon=button.querySelector('svg,.track-symbol');
    if(icon)play(icon,[{transform:'scale(.78)'},{transform:'scale(1.14)',offset:.55},{transform:'scale(1)'}],{duration:320});
  });
  listen(doc,'change',event=>{
    if(event.target.matches?.('input[type=checkbox]'))play(event.target.closest('label'),
      [{opacity:.55},{opacity:1}],{duration:220});
  });
  listen(doc,'visibilitychange',sync);listen(media,'change',sync);
  const mutation=new win.MutationObserver(sync);
  mutation.observe(root,{attributes:true,attributeFilter:['data-motion','data-paused']});
  const api={play,refresh,cancel,mode,destroy(){
    if(destroyed)return;destroyed=true;cancel();listeners.forEach(f=>f());
    observer?.disconnect();mutation.disconnect();scenes.clear();instances.delete(root);
    root.removeAttribute('data-motion-level');root.removeAttribute('data-page-visible');
  }};
  instances.set(root,api);refresh();return api;
}
