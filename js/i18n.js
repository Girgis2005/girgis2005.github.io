// Language switching: EN (default) · PT-BR · AR (RTL).
// Interface text lives in /i18n/<lang>.json (nested keys: "nav.projects" → { nav: { projects } }).
//
// Markup hooks:
//   data-i18n="key"                → textContent
//   data-i18n-html="key"           → innerHTML (our own dictionaries only, e.g. <em> in headlines)
//   data-i18n-attr="attr:key, ..." → attributes (aria-label, placeholder, alt, title, content)
// <body data-title="meta.home.title" data-description="meta.home.description"> sets <title> + meta.

import { store } from './utils.js';

export const LANGS = ['en', 'pt-BR', 'ar'];
export const DEFAULT_LANG = 'en';
const RTL = new Set(['ar']);

const cache = new Map();
let dict = {};
let fallback = {};
let current = DEFAULT_LANG;

const normalize = (l) => {
  if (!l) return null;
  if (LANGS.includes(l)) return l;
  const s = String(l).toLowerCase();
  if (s.startsWith('pt')) return 'pt-BR';
  if (s.startsWith('ar')) return 'ar';
  if (s.startsWith('en')) return 'en';
  return null;
};

async function load(lang) {
  if (cache.has(lang)) return cache.get(lang);
  const url = new URL(`../i18n/${lang}.json`, import.meta.url);
  const p = fetch(url)
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .catch(() => { cache.delete(lang); return {}; }); // don't cache a failure: the next switch retries
  cache.set(lang, p);
  return p;
}
let switchId = 0; // the most recent language click wins, even if an older dictionary arrives later

const lookup = (obj, key) => key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);

/** Translate a key. `{name}` placeholders are filled from `vars`. Falls back to English, then the key. */
export function t(key, vars) {
  let s = lookup(dict, key);
  if (s == null) s = lookup(fallback, key);
  if (s == null) return key;
  if (vars) s = String(s).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  return s;
}

export const getLang = () => current;
export const isRTL = () => RTL.has(current);

/** Apply the current dictionary to every hook inside `root`. */
export function apply(root = document) {
  root.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = t(el.dataset.i18n);
    if (v !== el.dataset.i18n) el.textContent = v;
  });
  root.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = t(el.dataset.i18nHtml);
    if (v !== el.dataset.i18nHtml) el.innerHTML = v;
  });
  root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((x) => x.trim());
      const v = t(key);
      if (attr && key && v !== key) el.setAttribute(attr, v);
    });
  });
}

function applyMeta() {
  const { title, description } = document.body.dataset;
  if (title) document.title = t(title);
  if (description) {
    const d = t(description);
    document.querySelector('meta[name="description"]')?.setAttribute('content', d);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', d);
  }
  if (title) document.querySelector('meta[property="og:title"]')?.setAttribute('content', t(title));
}

/** Switch language, persist it, and tell other modules (event "langchange"). */
export async function setLang(lang, { persist = true } = {}) {
  lang = normalize(lang) || DEFAULT_LANG;
  const id = ++switchId;
  const [d, en] = await Promise.all([load(lang), load('en')]);
  if (id !== switchId) return; // a newer switch started meanwhile
  dict = d; fallback = en; current = lang;

  const html = document.documentElement;
  html.lang = lang;
  html.dir = RTL.has(lang) ? 'rtl' : 'ltr';
  apply();
  applyMeta();

  document.querySelectorAll('[data-lang-btn]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.langBtn === lang)));

  if (persist) store.set('lang', lang);
  // keep a shared ?lang= link consistent with what is on screen
  const url = new URL(location.href);
  if (url.searchParams.has('lang') && url.searchParams.get('lang') !== lang) {
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  }

  html.classList.remove('i18n-pending');
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

/** Initial language: ?lang= (shareable links) → saved choice → English. */
export function initI18n() {
  const fromUrl = normalize(new URLSearchParams(location.search).get('lang'));
  const initial = fromUrl || normalize(store.get('lang')) || DEFAULT_LANG;
  return setLang(initial, { persist: !!fromUrl || !!store.get('lang') });
}
