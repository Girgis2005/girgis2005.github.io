// Case-study page: project.html?slug=<slug>, filled from data/projects.js + data/case-studies.js.
// If a section is missing in the current language it falls back to English, marked lang="en" so it renders correctly inside RTL pages.

import { projects, bySlug } from '../data/projects.js';
import { caseStudies } from '../data/case-studies.js';
import { t, getLang } from './i18n.js';
import { esc, icon } from './utils.js';
import { L, thumb, badge, sorted } from './projects.js';

const SECTIONS = ['problem', 'approach', 'hard', 'result'];

/** Section text + the language it is actually in (falls back to English). */
function textOf(slug, key) {
  const cs = caseStudies[slug];
  if (!cs) return null;
  const lang = getLang();
  if (cs[lang]?.[key]) return { text: cs[lang][key], lang };
  return cs.en?.[key] ? { text: cs.en[key], lang: 'en' } : null;
}
/** "53,057" → "53.057" in Portuguese; Arabic keeps Western digits like the rest of the site. */
const localNum = (v) => (/^\d{1,3}(,\d{3})+$/.test(v) && getLang() === 'pt-BR' ? v.replace(/,/g, '.') : v);
const langAttr = (x) => (x.lang !== getLang() ? ` lang="${x.lang}" dir="ltr"` : '');

function linkButtons(p) {
  const out = [];
  if (p.links.play) out.push(`<a class="btn btn--primary" href="${p.links.play}" target="_blank" rel="noopener">${icon('play')}<span>${esc(t('project.links.play'))}</span></a>`);
  if (p.links.live) out.push(`<a class="btn ${out.length ? 'btn--secondary' : 'btn--primary'}" href="${p.links.live}" target="_blank" rel="noopener">${icon('external')}<span>${esc(t('project.links.live'))}</span></a>`);
  if (p.links.github) out.push(`<a class="btn btn--secondary" href="${p.links.github}" target="_blank" rel="noopener">${icon('github')}<span>${esc(t('project.links.github'))}</span></a>`);
  return out.length ? `<div class="case__links">${out.join('')}</div>` : '';
}

function gallery(p) {
  if (!p.gallery?.length) return '';
  const title = L(p.title);
  const img = (g, i) => `<button type="button" class="shot shot--${g.kind}" data-full="${g.src}"><img src="${g.src}" alt="${esc(t('project.screenshotAlt', { title, n: i + 1 }))}" loading="${i < 2 ? 'eager' : 'lazy'}" decoding="async"></button>`;
  const phones = p.gallery.filter((g) => g.kind === 'phone');
  const wides = p.gallery.filter((g) => g.kind === 'wide');
  let n = 0;
  return `
    <section class="case__gallery" aria-label="${esc(t('project.gallery'))}">
      ${phones.length ? `<div class="shots-phone container">${phones.map((g) => img(g, n++)).join('')}</div>` : ''}
      ${wides.length ? `<div class="shots-wide container">${wides.map((g) => img(g, n++)).join('')}</div>` : ''}
      ${p.galleryNote ? `<p class="container gallery-note">${esc(L(p.galleryNote))}</p>` : ''}
    </section>`;
}

function render() {
  const root = document.getElementById('case');
  const slug = new URLSearchParams(location.search).get('slug');
  const p = bySlug(slug);
  root.removeAttribute('aria-busy');

  if (!p) {
    document.title = `${t('project.notFound')} · ${t('site.name')}`;
    root.innerHTML = `
      <section class="notfound"><div class="container">
        <h1>${esc(t('project.notFound'))}</h1>
        <p class="lead">${esc(t('project.notFoundText'))}</p>
        <div class="hero__cta"><a class="btn btn--primary" href="/projects.html">${esc(t('project.back'))}</a></div>
      </div></section>`;
    return;
  }

  const title = L(p.title);
  const summary = L(p.summary);
  document.title = `${title} · ${t('site.name')}`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', summary);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', summary);
  const canonical = `https://girgis2005.github.io/project.html?slug=${p.slug}`;
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonical);

  const credit = p.credit ? `<p class="case__credit">${esc(L(p.credit))}</p>` : '';
  const facts = p.facts?.length
    ? `<dl class="facts-row container">${p.facts.map((f) => `<div><dt>${esc(L(f.label))}</dt><dd><bdi dir="ltr">${esc(localNum(f.value))}</bdi></dd></div>`).join('')}</dl>`
    : '';
  const sections = SECTIONS.map((k) => {
    const x = textOf(p.slug, k);
    if (!x) return '';
    return `<section class="case__block"><h2>${esc(t(`project.${k}`))}</h2><p${langAttr(x)}>${esc(x.text)}</p></section>`;
  }).join('');

  // previous / next in the same order as the Projects page list
  const list = sorted();
  const i = list.indexOf(p);
  const prev = list[(i - 1 + list.length) % list.length];
  const next = list[(i + 1) % list.length];

  root.innerHTML = `
    <header class="case__head">
      <div class="container">
        <a class="link-back" href="/projects.html">${icon('arrow')}<span>${esc(t('project.back'))}</span></a>
        <div class="case__title">
          ${thumb(p, 96)}
          <div>
            <div class="case__badges">${badge(p)}</div>
            <h1>${esc(title)}</h1>
          </div>
        </div>
        <p class="lead">${esc(summary)}</p>
        ${credit}
        ${linkButtons(p)}
      </div>
    </header>
    ${facts}
    ${gallery(p)}
    <div class="container case__body">
      <div class="case__text">${sections}</div>
      <aside class="case__side">
        <h2>${esc(t('project.stack'))}</h2>
        <div class="chips">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join('')}</div>
      </aside>
    </div>
    <nav class="container case__nav" aria-label="${esc(t('project.more'))}">
      <a href="/project.html?slug=${prev.slug}" class="case__nav-prev"><span>${esc(t('project.prev'))}</span><strong>${esc(L(prev.title))}</strong></a>
      <a href="/project.html?slug=${next.slug}" class="case__nav-next"><span>${esc(t('project.next'))}</span><strong>${esc(L(next.title))}</strong></a>
    </nav>`;
}

function initLightbox() {
  const dlg = document.getElementById('lightbox');
  if (!dlg) return;
  const img = dlg.querySelector('img');
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-full]');
    if (b) {
      img.src = b.dataset.full;
      img.alt = b.querySelector('img')?.alt || '';
      dlg.classList.toggle('is-phone', b.classList.contains('shot--phone'));
      dlg.showModal();
      return;
    }
    if (e.target === dlg || e.target.closest('.lightbox__close')) dlg.close();
  });
}

export function init() {
  render();
  initLightbox();
  document.addEventListener('langchange', render);
}
