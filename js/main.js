// Entry point — loaded by every page:  <script type="module" src="/js/main.js"></script>
// Order: render shared chrome → apply language (translates chrome + page) → page modules.

import { initTheme } from './theme.js';
import { initI18n } from './i18n.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { site } from '../data/site.js';

// <a data-link="whatsapp|email|linkedin|github|play"> get their URL from data/site.js (one source).
const LINKS = { whatsapp: site.whatsapp, whatsappEg: site.whatsappEg, email: `mailto:${site.email}`, ...site.links };
document.querySelectorAll('[data-link]').forEach((a) => { if (LINKS[a.dataset.link]) a.href = LINKS[a.dataset.link]; });

renderHeader();
renderFooter();
initTheme();
await initI18n();

// Page-specific modules (added in later phases) are loaded only where needed.
const page = document.body.dataset.page;
const pageModules = {
  home: () => Promise.all([import('./projects.js'), import('./hero.js')]),
  projects: () => import('./projects.js'),
  skills: () => import('./content.js'),
  services: () => import('./content.js'),
  project: () => import('./project-page.js'),
  contact: () => import('./contact.js'),
};
pageModules[page]?.().then((mods) => [].concat(mods).forEach((m) => m.init?.())).catch((e) => console.error('page module failed', e));

// Chat assistant: every page, but only when configured (data/site.js → chatEndpoint).
import('./chat.js').then((m) => m.init()).catch((e) => console.error('chat failed', e));
