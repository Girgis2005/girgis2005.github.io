// "What clients say" (home). Renders data/testimonials.js; the section stays hidden while there are none.

import { testimonials } from '../data/testimonials.js';
import { bySlug } from '../data/projects.js';
import { t, getLang } from './i18n.js';
import { esc } from './utils.js';
import { L } from './projects.js';

function render() {
  const sec = document.getElementById('voices');
  const list = document.querySelector('[data-voices]');
  if (!sec || !list) return;
  sec.hidden = !testimonials.length;
  if (!testimonials.length) return;
  const lang = getLang();
  list.innerHTML = testimonials.map((v) => {
    const p = bySlug(v.project);
    const translated = v.lang && v.lang !== lang && v.quote[lang];
    return `
      <figure class="voice">
        <blockquote class="voice__quote" lang="${esc(translated ? lang : v.lang || lang)}"><p>${esc(L(v.quote))}</p></blockquote>
        <figcaption class="voice__who">
          <span class="voice__name">${esc(v.name)}</span>
          <span class="voice__role">${esc(L(v.role))}${p ? ` · <a href="/project.html?slug=${p.slug}">${esc(L(p.title))}</a>` : ''}</span>
          ${translated ? `<span class="voice__note">${esc(t('home.voices.translated', { lang: t(`langName.${v.lang}`) }))}</span>` : ''}
        </figcaption>
      </figure>`;
  }).join('');
}

export function init() {
  render();
  document.addEventListener('langchange', render);
}
