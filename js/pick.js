// Small choice menus: <div data-pick><button data-pick-btn aria-controls="id">…</button><div id="id" hidden>links</div></div>
// Used by "Let's work together" (WhatsApp · Email · Contact form). Closes on choice, outside click, focus leaving or Escape.
// Email links with data-mail-subject="i18n.key" get a subject line in the visitor's language at click time.

import { t } from './i18n.js';
import { site } from '../data/site.js';

export function init() {
  const picks = [...document.querySelectorAll('[data-pick]')];
  if (!picks.length) return;
  document.querySelectorAll('[data-site="email"]').forEach((n) => { n.textContent = site.email; });

  const parts = (p) => { const btn = p.querySelector('[data-pick-btn]'); return { btn, menu: document.getElementById(btn.getAttribute('aria-controls')) }; };
  const open = (p, state) => {
    const { btn, menu } = parts(p);
    menu.hidden = !state;
    btn.setAttribute('aria-expanded', String(state));
    if (state) {
      // on phones the button sits near the bottom of the screen: bring the whole menu into view
      const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
      menu.scrollIntoView({ block: 'nearest', behavior: smooth ? 'smooth' : 'auto' });
      menu.querySelector('a, button')?.focus({ preventScroll: true });
    }
  };
  const closeAll = (except) => picks.forEach((p) => { if (p !== except && !parts(p).menu.hidden) open(p, false); });

  document.addEventListener('click', (e) => {
    const p = e.target.closest('[data-pick]');
    if (e.target.closest('[data-pick-btn]')) { closeAll(p); open(p, parts(p).menu.hidden); return; }
    const mail = e.target.closest('a[data-mail-subject]');
    if (mail) mail.href = `mailto:${site.email}?subject=${encodeURIComponent(t(mail.dataset.mailSubject))}`;
    if (p && e.target.closest('a')) { setTimeout(() => open(p, false), 0); return; } // a choice was made
    closeAll(p);
  });
  document.addEventListener('keydown', (e) => {
    const p = picks.find((x) => !parts(x).menu.hidden);
    if (!p) return;
    const { btn, menu } = parts(p);
    if (e.key === 'Escape') { open(p, false); btn.focus(); }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const items = [...menu.querySelectorAll('a, button')];
      const i = items.indexOf(document.activeElement);
      items[(i + (e.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length].focus();
    }
  });
  document.addEventListener('focusin', (e) => closeAll(e.target.closest('[data-pick]')));
}
