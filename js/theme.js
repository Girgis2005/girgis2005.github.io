// Theme: Auto (default) · Light · Dark.
// Auto follows the visitor's own local clock (light 07:00–18:59, dark otherwise), so Cairo, São Paulo and
// New York each get their own day/night. The pre-paint snippet in each page's <head> applies it before the
// first frame (no flash); this module keeps it in sync and runs the small picker in the header.

import { store } from './utils.js';

const META_COLORS = { dark: '#08090c', light: '#fbfbfc' };
const MODES = ['auto', 'light', 'dark'];

/** Theme by the visitor's local time. Must match the pre-paint snippet. */
export const autoTheme = (h = new Date().getHours()) => (h >= 7 && h < 19 ? 'light' : 'dark');

export const getMode = () => { const m = store.get('theme'); return MODES.includes(m) ? m : 'auto'; };
export const getTheme = () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

function paint() {
  const mode = getMode();
  const theme = mode === 'auto' ? autoTheme() : mode;
  const html = document.documentElement;
  if (theme === 'light') html.dataset.theme = 'light';
  else delete html.dataset.theme;
  html.dataset.themeMode = mode; // the header button shows the icon of the chosen mode
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLORS[theme]);
  document.querySelectorAll('[data-theme-set]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.themeSet === mode)));
}

export function setMode(mode) {
  store.set('theme', MODES.includes(mode) ? mode : 'auto');
  paint();
}

export function initTheme() {
  paint();

  const btn = document.querySelector('[data-theme-btn]');
  const menu = document.getElementById('theme-menu');
  const open = (state) => {
    if (!btn || !menu) return;
    menu.hidden = !state;
    btn.setAttribute('aria-expanded', String(state));
    if (state) menu.querySelector('[aria-pressed="true"]')?.focus();
  };

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-theme-btn]')) { open(menu.hidden); return; }
    const pick = e.target.closest('[data-theme-set]');
    if (pick) { setMode(pick.dataset.themeSet); open(false); btn.focus(); return; }
    if (menu && !menu.hidden && !e.target.closest('.theme-pick')) open(false);
  });
  document.addEventListener('keydown', (e) => {
    if (!menu || menu.hidden) return;
    if (e.key === 'Escape') { open(false); btn.focus(); }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { // move between the three choices
      e.preventDefault();
      const items = [...menu.querySelectorAll('[data-theme-set]')];
      const i = items.indexOf(document.activeElement);
      items[(i + (e.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length].focus();
    }
  });
  document.addEventListener('focusin', (e) => { if (menu && !menu.hidden && !e.target.closest('.theme-pick')) open(false); });

  // Auto: a tab left open across 07:00 / 19:00 switches on its own
  const follow = () => { if (getMode() === 'auto' && autoTheme() !== getTheme()) paint(); };
  document.addEventListener('visibilitychange', () => { if (!document.hidden) follow(); });
  setInterval(follow, 60_000);
}
