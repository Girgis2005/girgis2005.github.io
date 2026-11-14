// Navbar — one source for every page. Renders into <header id="site-header">.
// Text uses data-i18n hooks, so i18n.apply() translates it like the rest of the page.

import { site, nav } from '../../data/site.js';
import { icon, currentPage } from '../utils.js';
import { setLang } from '../i18n.js';

export function renderHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;
  const page = currentPage();
  const cur = (p) => (p === page ? ' aria-current="page"' : '');

  el.className = 'nav';
  el.innerHTML = `
    <div class="container nav__in">
      <a class="brand" href="/"${page === 'home' ? ' aria-current="page"' : ''}>
        <span class="brand__mark" aria-hidden="true">${site.initials}</span>
        <span class="brand__name" data-i18n="site.name">${site.name.en}</span>
      </a>
      <nav class="nav__links" data-i18n-attr="aria-label:nav.label" aria-label="Main">
        ${nav.map((n) => `<a href="${n.href}"${cur(n.page)} data-i18n="${n.key}">${n.en}</a>`).join('')}
      </nav>
      <div class="nav__tools">
        <div class="seg" role="group" data-i18n-attr="aria-label:nav.language" aria-label="Language">
          <button type="button" data-lang-btn="en" lang="en" aria-label="EN, English" aria-pressed="true">EN</button>
          <button type="button" data-lang-btn="pt-BR" lang="pt-BR" aria-label="PT, Português do Brasil" aria-pressed="false">PT</button>
          <button type="button" data-lang-btn="ar" lang="ar" aria-label="ع، العربية" aria-pressed="false">ع</button>
        </div>
        <div class="theme-pick">
          <button class="icon-btn" type="button" data-theme-btn aria-expanded="false" aria-controls="theme-menu" data-i18n-attr="aria-label:nav.theme" aria-label="Theme">
            ${icon('sun', 'i-sun')}${icon('moon', 'i-moon')}${icon('auto', 'i-auto')}
          </button>
          <div class="theme-menu" id="theme-menu" role="group" data-i18n-attr="aria-label:nav.theme" aria-label="Theme" hidden>
            ${[['auto', 'auto', 'Auto'], ['light', 'sun', 'Light'], ['dark', 'moon', 'Dark']].map(([m, ic, en]) => `
            <button type="button" data-theme-set="${m}" aria-pressed="false">
              ${icon(ic)}<span><span data-i18n="nav.theme${en}">${en}</span>${m === 'auto' ? '<small data-i18n="nav.themeAutoHint">Follows your local time</small>' : ''}</span>
            </button>`).join('')}
          </div>
        </div>
        <a class="btn btn--primary btn--sm nav__cta" href="/contact.html" data-i18n="nav.cta">Let's talk</a>
        <button class="icon-btn nav__menu-btn" type="button" aria-expanded="false" aria-controls="site-menu" data-i18n-attr="aria-label:nav.menu" aria-label="Menu">
          ${icon('menu', 'i-menu')}${icon('close', 'i-close')}
        </button>
      </div>
    </div>
    <div class="menu" id="site-menu" hidden>
      <div class="container">
        <ul>
          ${nav.map((n) => `<li><a href="${n.href}"${cur(n.page)}><span data-i18n="${n.key}">${n.en}</span>${icon('arrow', 'flip')}</a></li>`).join('')}
        </ul>
        <a class="btn btn--primary" href="/contact.html" data-i18n="nav.cta">Let's talk</a>
      </div>
    </div>`;

  // Language buttons
  el.querySelectorAll('[data-lang-btn]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.langBtn)));

  // Mobile menu
  const btn = el.querySelector('.nav__menu-btn');
  const menu = el.querySelector('#site-menu');
  // While the full-screen menu is open, the page behind it is inert (no Tab escape) and does not scroll.
  const behind = () => [document.getElementById('main'), document.getElementById('site-footer'), document.querySelector('.chat')].filter(Boolean);
  const open = (state) => {
    menu.hidden = !state;
    btn.setAttribute('aria-expanded', String(state));
    el.classList.toggle('is-open', state);
    behind().forEach((n) => { n.inert = state; });
    document.documentElement.style.overflow = state ? 'hidden' : '';
    if (state) menu.querySelector('a')?.focus();
  };
  btn.addEventListener('click', () => open(menu.hidden));
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) { open(false); btn.focus(); }
  });
  matchMedia('(min-width: 961px)').addEventListener('change', (e) => e.matches && open(false));

  // Hairline + blur once the page scrolls
  const onScroll = () => el.classList.toggle('is-stuck', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
