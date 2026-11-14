// Skills and Services pages, rendered from data/skills.js and data/services.js.

import { skillGroups, languages } from '../data/skills.js';
import { services } from '../data/services.js';
import { bySlug } from '../data/projects.js';
import { t } from './i18n.js';
import { esc, icon } from './utils.js';
import { L } from './projects.js';

const projectLinks = (slugs) =>
  slugs.map((s) => bySlug(s)).filter(Boolean).map((p) => `<a href="/project.html?slug=${p.slug}">${esc(L(p.title))}</a>`).join('<span aria-hidden="true">·</span>');

function renderSkills(el) {
  el.innerHTML = `
    ${skillGroups.map((g, i) => `
      <section class="skill" aria-labelledby="sk-${g.id}">
        <div class="skill__head">
          <span class="skill__n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          <h2 id="sk-${g.id}">${esc(L(g.title))}</h2>
          <p>${esc(L(g.text))}</p>
          <p class="skill__proof"><span>${esc(t('skills.usedIn'))}</span> ${projectLinks(g.projects)}</p>
        </div>
        <ul class="chips chips--lg">${g.items.map((it) => (typeof it === 'string' ? `<li class="chip">${esc(it)}</li>` : `<li class="chip chip--text">${esc(L(it))}</li>`)).join('')}</ul>
      </section>`).join('')}
    <section class="skill skill--langs" aria-labelledby="sk-langs">
      <div class="skill__head">
        <span class="skill__n" aria-hidden="true">{ }</span>
        <h2 id="sk-langs">${esc(t('skills.languages'))}</h2>
        <p>${esc(t('skills.languagesText'))}</p>
      </div>
      <ul class="chips chips--lg">${languages.map((l) => `<li class="chip">${esc(l)}</li>`).join('')}</ul>
    </section>`;
}

function renderServices(el) {
  el.innerHTML = services.map((s, i) => `
    <article class="service" id="${s.id}" aria-labelledby="sv-${s.id}">
      <header class="service__head">
        <span class="skill__n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <h2 id="sv-${s.id}">${esc(L(s.title))}</h2>
      </header>
      <div class="service__grid">
        <div><h3>${esc(t('services.what'))}</h3><p>${esc(L(s.what))}</p></div>
        <div><h3>${esc(t('services.who'))}</h3><p>${esc(L(s.who))}</p></div>
        <div><h3>${esc(t('services.get'))}</h3><ul class="ticks">${L(s.get).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
      </div>
      <footer class="service__foot">
        <p class="skill__proof"><span>${esc(t('services.proof'))}</span> ${projectLinks(s.projects)}</p>
        <a class="btn btn--primary btn--sm" href="/contact.html?type=${s.id}">${esc(t('services.cta'))}${icon('arrow', 'flip')}</a>
      </footer>
    </article>`).join('');
}

function render() {
  const sk = document.querySelector('[data-skills]');
  if (sk) renderSkills(sk);
  const sv = document.querySelector('[data-services]');
  if (sv) renderServices(sv);
}

export function init() {
  render();
  document.addEventListener('langchange', render);
}
