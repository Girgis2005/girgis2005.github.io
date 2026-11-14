// Home hero: rotates the three headlines (B → C → A) every few seconds.
// Pauses on hover/focus and when the tab is hidden; stays on B for prefers-reduced-motion.
// Screen readers read the static visually-hidden headline instead (the rotator is aria-hidden).

const INTERVAL = 4500;

export function init() {
  const rot = document.querySelector('.rotator');
  const dotsWrap = document.querySelector('.rotator__dots');
  if (!rot || !dotsWrap) return;
  const items = [...rot.querySelectorAll('.rotator__item')];
  const dots = [...dotsWrap.querySelectorAll('button')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  dotsWrap.style.setProperty('--rotate-ms', `${INTERVAL}ms`);

  let i = 0;
  let timer = null;
  let hover = false;
  let focus = false;
  const leaving = new Map(); // item -> cleanup timer

  function show(next) {
    if (next === i) return;
    const old = items[i];
    old.classList.remove('is-active');
    old.classList.add('is-leaving');
    clearTimeout(leaving.get(old));
    leaving.set(old, setTimeout(() => old.classList.remove('is-leaving'), 700));
    clearTimeout(leaving.get(items[next]));
    items[next].classList.remove('is-leaving');
    items[next].classList.add('is-active');
    i = next;
    markDot();
  };

  // (re)start the progress bar of the active dot so it matches the timer
  const markDot = () => {
    dots.forEach((d) => d.classList.remove('is-active'));
    void dotsWrap.offsetWidth;
    dots[i].classList.add('is-active');
  };

  const stop = () => { clearInterval(timer); timer = null; };
  const start = () => {
    stop();
    if (reduce.matches || hover || focus || document.hidden) return;
    markDot();
    timer = setInterval(() => show((i + 1) % items.length), INTERVAL);
  };
  const sync = () => { const p = hover || focus; dotsWrap.classList.toggle('is-paused', p); p ? stop() : start(); };

  const hero = rot.closest('.hero__main') || rot;
  hero.addEventListener('pointerenter', () => { hover = true; sync(); });
  hero.addEventListener('pointerleave', () => { hover = false; sync(); });
  hero.addEventListener('focusin', () => { focus = true; sync(); });
  hero.addEventListener('focusout', (e) => { if (!hero.contains(e.relatedTarget)) { focus = false; sync(); } });
  document.addEventListener('visibilitychange', start);
  dots.forEach((d, k) => d.addEventListener('click', () => { show(k); start(); }));

  const applyMotion = () => {
    dotsWrap.classList.toggle('is-static', reduce.matches);
    if (reduce.matches) show(0);
    start();
  };
  reduce.addEventListener('change', applyMotion);
  applyMotion();
}
