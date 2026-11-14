// Contact form: validation in three languages + Web3Forms delivery.
// Never shows "sent" unless Web3Forms confirms. Without a key it opens the visitor's email app (honest fallback).

import { site } from '../data/site.js';
import { t } from './i18n.js';

const form = () => document.getElementById('contact-form');
const el = (id) => document.getElementById(id);

function setError(name, msg) {
  const field = form().querySelector(`[data-field="${name}"]`);
  const err = el(`e-${name}`);
  field.classList.toggle('is-error', !!msg);
  field.querySelector('input, textarea, select').setAttribute('aria-invalid', msg ? 'true' : 'false');
  err.hidden = !msg;
  err.textContent = msg || '';
}

const RULES = {
  name: (v) => (v.length < 2 ? 'contact.errors.name' : ''),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'contact.errors.email'),
  message: (v) => (v.length < 20 ? 'contact.errors.message' : ''),
};
const check = (name) => { const key = RULES[name](form()[name].value.trim()); setError(name, key ? t(key) : ''); return !key; };

/** Validate everything (on submit) and move focus to the first problem. */
function validate() {
  const bad = Object.keys(RULES).filter((n) => !check(n));
  if (bad.length) form()[bad[0]].focus();
  return !bad.length;
}

function status(kind, msg) {
  const s = el('contact-status');
  s.hidden = !msg;
  s.className = `form-status form-status--${kind}`;
  s.innerHTML = msg;
}

const fallbackLinks = () =>
  ` <a class="text-link" href="${site.whatsapp}" target="_blank" rel="noopener">WhatsApp</a> · <a class="text-link" href="mailto:${site.email}">${site.email}</a>`;

function typeLabel() {
  const sel = form().type;
  return sel.options[sel.selectedIndex]?.textContent || sel.value;
}

function bodyText() {
  const f = form();
  return [
    `${t('contact.form.name')}: ${f.name.value.trim()}`,
    `${t('contact.form.email')}: ${f.email.value.trim()}`,
    `${t('contact.form.type')}: ${typeLabel()}`,
    f.budget.value ? `${t('contact.form.budget')}: ${f.budget.value}` : '',
    '',
    f.message.value.trim(),
  ].filter((x) => x !== '').join('\n');
}

async function onSubmit(e) {
  e.preventDefault();
  status('', '');
  if (!validate()) return;
  const f = form();
  if (f.botcheck.checked) return; // honeypot: silently ignore bots

  const subject = t('contact.mailSubject', { type: typeLabel() });

  if (!site.web3formsKey) {
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText())}`;
    status('info', t('contact.openedMail'));
    return;
  }

  const btn = el('contact-submit');
  const label = btn.querySelector('span');
  btn.disabled = true;
  label.textContent = t('contact.form.sending');
  // WhatsApp alert to the owner, in parallel with the email. Best effort: it never changes what the visitor sees.
  if (site.notifyEndpoint) {
    fetch(site.notifyEndpoint, {
      method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: f.name.value.trim(), email: f.email.value.trim(), type: typeLabel(), budget: f.budget.value || '', message: f.message.value.trim(), lang: document.documentElement.lang }),
    }).catch(() => {});
  }
  try {
    // FormData = a "simple" CORS request (no preflight), which Web3Forms accepts from any page.
    const data = new FormData();
    Object.entries({
      access_key: site.web3formsKey,
      subject,
      from_name: 'girgis2005.github.io',
      name: f.name.value.trim(),
      email: f.email.value.trim(),
      project_type: typeLabel(),
      budget: f.budget.value || '—',
      message: f.message.value.trim(),
      language: document.documentElement.lang,
    }).forEach(([k, v]) => data.append(k, v));
    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { Accept: 'application/json' }, body: data });
    const json = await res.json().catch(() => ({}));
    if (res.ok && json.success) {
      f.reset();
      status('ok', t('contact.success'));
    } else {
      status('error', t('contact.errors.send') + fallbackLinks());
    }
  } catch {
    status('error', t('contact.errors.send') + fallbackLinks());
  } finally {
    btn.disabled = false;
    label.textContent = t('contact.form.send');
  }
}

function syncMode() {
  el('contact-mode').textContent = t(site.web3formsKey ? 'contact.form.noteForm' : 'contact.form.noteEmail');
}

export function init() {
  const f = form();
  if (!f) return;
  const type = new URLSearchParams(location.search).get('type');
  if (type && [...f.type.options].some((o) => o.value === type)) f.type.value = type;
  f.addEventListener('submit', onSubmit);
  // clear an error as soon as the field becomes valid
  // while typing, re-check only the field being edited (never move focus)
  ['name', 'email', 'message'].forEach((n) => f[n].addEventListener('input', () => { if (f.querySelector(`[data-field="${n}"]`).classList.contains('is-error')) check(n); }));
  syncMode();
  document.addEventListener('langchange', () => { syncMode(); ['name', 'email', 'message'].forEach((n) => setError(n, '')); });
}
