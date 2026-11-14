// Dark (default) / light theme. The pre-paint snippet in each page's <head>
// already applied the saved theme, so there is no flash; this module handles toggling.

import { store } from './utils.js';

const META_COLORS = { dark: '#08090c', light: '#fbfbfc' };

export const getTheme = () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

export function setTheme(theme) {
  const html = document.documentElement;
  if (theme === 'light') html.dataset.theme = 'light';
  else delete html.dataset.theme;
  store.set('theme', theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLORS[theme] || META_COLORS.dark);
  document.querySelectorAll('[data-theme-btn]').forEach((b) => b.setAttribute('aria-pressed', String(theme === 'light')));
}

export function initTheme() {
  setTheme(getTheme());
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-theme-btn]')) setTheme(getTheme() === 'light' ? 'dark' : 'light');
  });
}
