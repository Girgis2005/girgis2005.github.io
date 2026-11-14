// WhatsApp links: a ready-made first message (all devices) + app choice (Android only).
// A plain wa.me link lets Android open whichever WhatsApp app it picked before, without asking, so a visitor who
// has both WhatsApp and WhatsApp Business cannot choose. On Android, a tap on any wa.me link opens a small sheet
// with both apps; each targets its own package and falls back to wa.me if that app is not installed.
// iPhone and desktop keep the normal wa.me link.

import { t } from './i18n.js';
import { esc, icon } from './utils.js';

const APPS = [
  { pkg: 'com.whatsapp', key: 'wa.app' },
  { pkg: 'com.whatsapp.w4b', key: 'wa.business' },
];

const intentUrl = (phone, text, pkg) => {
  const q = `phone=${phone}${text ? `&text=${encodeURIComponent(text)}` : ''}`;
  const fallback = encodeURIComponent(`https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ''}`);
  return `intent://send?${q}#Intent;scheme=whatsapp;package=${pkg};S.browser_fallback_url=${fallback};end`;
};

let dlg;
function sheet(phone, text) {
  dlg?.remove();
  dlg = document.createElement('dialog');
  dlg.className = 'wa-sheet';
  dlg.setAttribute('aria-labelledby', 'wa-sheet-title');
  dlg.innerHTML = `
    <p class="wa-sheet__title" id="wa-sheet-title">${esc(t('wa.openIn'))}</p>
    ${APPS.map((a) => `<a class="wa-sheet__opt" href="${esc(intentUrl(phone, text, a.pkg))}" data-wa-pkg="${a.pkg}">${icon('whatsapp')}<span>${esc(t(a.key))}</span></a>`).join('')}
    <button type="button" class="wa-sheet__cancel">${esc(t('wa.cancel'))}</button>`;
  document.body.append(dlg);
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg || e.target.closest('.wa-sheet__cancel')) dlg.close(); // backdrop or Cancel
    else if (e.target.closest('.wa-sheet__opt')) setTimeout(() => dlg.close(), 300);
  });
  dlg.addEventListener('close', () => dlg.remove());
  dlg.showModal();
}

/** Every wa.me link opens with a ready message in the visitor's language, so the chat starts with context
 *  and it is clear the person came from the site. Added at click time, so it always matches the current language. */
function prefill(e) {
  const a = e.target.closest('a[href^="https://wa.me/"]');
  if (!a) return;
  const url = new URL(a.href);
  const text = t('wa.prefill');
  if (text === 'wa.prefill') return;
  url.searchParams.set('text', text);
  a.href = url.toString();
}

export function init() {
  document.addEventListener('click', prefill, true); // capture: runs before navigation and before the Android sheet
  document.addEventListener('auxclick', prefill, true); // middle-click / new tab
  if (!/Android/i.test(navigator.userAgent)) return;
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="https://wa.me/"]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const url = new URL(a.href);
    const phone = url.pathname.replace(/\D/g, '');
    if (!phone) return;
    e.preventDefault();
    sheet(phone, url.searchParams.get('text') || '');
  });
}
