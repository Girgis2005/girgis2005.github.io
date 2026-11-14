// Light / dark theme.
// Until the visitor picks one, it follows the visitor's own local clock (light 07:00–18:59, dark otherwise),
// so Cairo, São Paulo and New York each get their own day/night. The pre-paint snippet in each page's <head>
// applies it before the first frame (no flash); this module keeps it in sync and handles the toggle.

import { store } from './utils.js';

const META_COLORS = { dark: '#08090c', light: '#fbfbfc' };

export const getTheme = () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

/** Theme by the visitor's local time. Must match the pre-paint snippet. */
export const autoTheme = (h = new Date().getHours()) => (h >= 7 && h < 19 ? 'light' : 'dark');

const saved = () => { const t = store.get('theme'); return t === 'light' || t === 'dark' ? t : null; };

export function setTheme(theme, { persist = true } = {}) {
  const html = document.documentElement;
  if (theme === 'light') html.dataset.theme = 'light';
  else delete html.dataset.theme;
  if (persist) store.set('theme', theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLORS[theme] || META_COLORS.dark);
  document.querySelectorAll('[data-theme-btn]').forEach((b) => b.setAttribute('aria-pressed', String(theme === 'light')));
}

export function initTheme() {
  setTheme(saved() || autoTheme(), { persist: false });
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-theme-btn]')) setTheme(getTheme() === 'light' ? 'dark' : 'light');
  });
  // a tab left open across 07:00 / 19:00 switches on its own when the visitor comes back to it
  const follow = () => { if (!saved() && autoTheme() !== getTheme()) setTheme(autoTheme(), { persist: false }); };
  document.addEventListener('visibilitychange', () => { if (!document.hidden) follow(); });
  setInterval(follow, 60_000);
}
