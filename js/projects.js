// Project lists: Home (featured rows + Play strip) and the Projects page (filters + search).
// Re-renders on "langchange" so every text follows the language switch.

import { projects, STATUS_CLASS } from '../data/projects.js';
import { t, getLang } from './i18n.js';
import { esc, icon } from './utils.js';

export const L = (field) => (field ? field[getLang()] ?? field.en : '');

export function thumb(p, size = 76) {
  if (typeof p.thumb === 'string') {
    return `<span class="thumb"><img src="${p.thumb}" alt="" width="${size}" height="${size}" loading="lazy" decoding="async"></span>`;
  }
  const cls = { violet: '', green: 'alt', slate: 'slate' }[p.thumb?.tile || 'violet'] ?? '';
  return `<span class="thumb thumb--tile ${cls}" aria-hidden="true">${p.thumb?.icon ? icon(p.thumb.icon) : ''}</span>`;
}

export const badge = (p) => `<span class="badge badge--${STATUS_CLASS[p.status]}">${esc(t(`status.${p.status}`))}</span>`;

/** One list row (Home "Selected work", Projects page). */
export function row(p) {
  return `
    <li class="prow">
      ${thumb(p)}
      <div class="prow__main">
        <div class="prow__title"><h3><a class="stretched" href="/project.html?slug=${p.slug}">${esc(L(p.title))}</a></h3>${badge(p)}</div>
        <p>${esc(L(p.summary))}</p>
        <div class="chips">${p.stack.slice(0, 4).map((s) => `<span class="chip">${esc(s)}</span>`).join('')}</div>
      </div>
      <span class="prow__go" aria-hidden="true">${icon('arrow', 'flip')}</span>
    </li>`;
}

/** One app in the "Live on Google Play" strip. */
function playCard(p) {
  return `
    <li class="app">
      <img class="app__icon" src="${p.thumb}" alt="" width="64" height="64" loading="lazy" decoding="async">
      <div class="app__text">
        <h3><a class="stretched" href="${p.links.play}" target="_blank" rel="noopener">${esc(L(p.title))}</a></h3>
        <p>${esc(L(p.tagline))}</p>
      </div>
      <span class="app__store">${icon('play')}<span>${esc(t('status.play'))}</span></span>
    </li>`;
}

// ---- Projects page state (kept in the URL so a filtered view can be shared) ----
const state = { cat: 'all', q: '' };

function readUrl() {
  const u = new URLSearchParams(location.search);
  const cat = u.get('cat');
  state.cat = ['all', 'automation', 'web', 'mobile', 'games', 'tools'].includes(cat) ? cat : 'all';
  state.q = u.get('q') || '';
}
function writeUrl() {
  const u = new URL(location.href);
  state.cat === 'all' ? u.searchParams.delete('cat') : u.searchParams.set('cat', state.cat);
  state.q ? u.searchParams.set('q', state.q) : u.searchParams.delete('q');
  history.replaceState(null, '', u);
}

const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ًͯ-ْ]/g, '');
function matches(p, q) {
  if (!q) return true;
  const hay = norm([...Object.values(p.title), L(p.summary), ...p.stack, ...p.category.map((c) => t(`projects.filters.${c}`))].join(' '));
  return norm(q).split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
}

// Featured first, then live/delivered work, then the rest — stable inside each group.
const ORDER = { play: 1, live: 1, delivered: 2, building: 3, testing: 3, internal: 4, unreleased: 5 };
export const sorted = () => [...projects].sort((a, b) => (a.featured || 99) - (b.featured || 99) || ORDER[a.status] - ORDER[b.status]);

function renderAll() {
  const list = document.querySelector('[data-projects="all"]');
  if (!list) return;
  const shown = sorted().filter((p) => (state.cat === 'all' || p.category.includes(state.cat)) && matches(p, state.q));
  list.innerHTML = shown.map(row).join('');
  document.getElementById('project-empty').hidden = shown.length > 0;
  document.getElementById('project-count').textContent = t(shown.length === 1 ? 'projects.countOne' : 'projects.count', { n: shown.length });
  document.querySelectorAll('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === state.cat)));
}

function render() {
  document.querySelectorAll('[data-projects="featured"]').forEach((el) => {
    el.innerHTML = projects.filter((p) => p.featured).sort((a, b) => a.featured - b.featured).map(row).join('');
  });
  document.querySelectorAll('[data-projects="play"]').forEach((el) => {
    el.innerHTML = projects.filter((p) => p.playStrip).sort((a, b) => a.playStrip - b.playStrip).map(playCard).join('');
  });
  renderAll();
}

export function init() {
  if (document.querySelector('[data-projects="all"]')) {
    readUrl();
    const input = document.getElementById('project-search');
    input.value = state.q;
    document.querySelectorAll('[data-filter]').forEach((b) => b.addEventListener('click', () => { state.cat = b.dataset.filter; writeUrl(); renderAll(); }));
    let timer;
    input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => { state.q = input.value.trim(); writeUrl(); renderAll(); }, 120); });
    document.getElementById('project-reset').addEventListener('click', () => { state.cat = 'all'; state.q = ''; input.value = ''; writeUrl(); renderAll(); input.focus(); });
  }
  render();
  document.addEventListener('langchange', render);
}
