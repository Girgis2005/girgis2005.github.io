// Chat assistant widget. Loaded on every page by main.js, but only shown when data/site.js has a chatEndpoint
// (or, on localhost only, ?chat=<url> for testing). Answers come from the Worker in worker/ — no keys in the browser.
// Conversations live only in this tab's memory; nothing is saved.

import { site } from '../data/site.js';
import { t, getLang, apply } from './i18n.js';
import { esc, icon } from './utils.js';

const LOCAL = ['localhost', '127.0.0.1'].includes(location.hostname);

function endpoint() {
  const q = new URLSearchParams(location.search).get('chat');
  if (LOCAL && q) { try { sessionStorage.setItem('chatEndpoint', q); } catch {} return q; }
  if (LOCAL) { try { const s = sessionStorage.getItem('chatEndpoint'); if (s) return s; } catch {} }
  return site.chatEndpoint;
}

const ICON_CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5z"/><path d="M8.5 8.5h7M8.5 11.5h4.5"/></svg>';
const ICON_SEND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';

/**
 * Turns a model reply into DOM nodes in ONE pass over the raw text (no HTML string building):
 * links, emails and phone numbers become left-to-right islands (never reversed inside Arabic),
 * **bold** becomes <strong>, "- " list markers become "• ", newlines become <br>.
 */
const TOKEN = /(https?:\/\/[^\s<>"']+[^\s<>"'.,;:!?)،])|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)|(\+?\d[\d \-‑]{6,}\d)|\*\*([^*\n]+)\*\*|(\n)/g;
function render(raw) {
  const text = String(raw).replace(/^[ \t]*[-*•][ \t]+/gm, '• ');
  const frag = document.createDocumentFragment();
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) frag.append(text.slice(last, m.index));
    const [all, url, mail, phone, bold] = m;
    let node;
    if (url) { node = document.createElement('a'); node.href = url; node.target = '_blank'; node.rel = 'noopener'; node.dir = 'ltr'; node.textContent = url; }
    else if (mail) { node = document.createElement('a'); node.href = `mailto:${mail}`; node.dir = 'ltr'; node.textContent = mail; }
    else if (phone) { node = document.createElement('bdi'); node.dir = 'ltr'; node.textContent = phone.replace(/‑/g, '-'); }
    else if (bold) { node = document.createElement('strong'); node.textContent = bold; }
    else node = document.createElement('br');
    frag.append(node);
    last = m.index + all.length;
  }
  if (last < text.length) frag.append(text.slice(last));
  return frag;
}

export function init() {
  const url = endpoint();
  if (!url) return;

  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = '/css/chat.css';
  document.head.append(css);

  const root = document.createElement('div');
  root.className = 'chat';
  root.hidden = true; // shown once chat.css has loaded (no unstyled flash)
  css.addEventListener('load', () => { root.hidden = false; });
  css.addEventListener('error', () => { root.hidden = false; });
  root.innerHTML = `
    <button type="button" class="chat__fab" aria-expanded="false" aria-controls="chat-panel">${ICON_CHAT}<span class="chat__fab-label" data-i18n="chat.open"></span></button>
    <section class="chat__panel" id="chat-panel" role="dialog" aria-modal="false" aria-labelledby="chat-title" hidden>
      <header class="chat__head">
        <div><h2 id="chat-title" data-i18n="chat.title"></h2><p data-i18n="chat.subtitle"></p></div>
        <button type="button" class="icon-btn chat__close" data-i18n-attr="aria-label:chat.close">${icon('close')}</button>
      </header>
      <div class="chat__log" id="chat-log" aria-live="polite"></div>
      <div class="chat__handoff">
        <a href="${site.whatsapp}" target="_blank" rel="noopener">${icon('whatsapp')}<span>WhatsApp</span></a>
        <a href="mailto:${site.email}">${icon('mail')}<span data-i18n="common.email"></span></a>
      </div>
      <form class="chat__form" id="chat-form">
        <label class="visually-hidden" for="chat-input" data-i18n="chat.placeholder"></label>
        <textarea id="chat-input" rows="1" maxlength="1500" data-i18n-attr="placeholder:chat.placeholder" required></textarea>
        <button type="submit" class="chat__send" data-i18n-attr="aria-label:chat.send">${ICON_SEND}</button>
      </form>
    </section>`;
  document.body.append(root);

  const fab = root.querySelector('.chat__fab');
  const panel = root.querySelector('.chat__panel');
  const log = root.querySelector('#chat-log');
  const form = root.querySelector('#chat-form');
  const input = root.querySelector('#chat-input');
  const history = [];
  let busy = false;

  const bubble = (role, html) => {
    const div = document.createElement('div');
    div.className = `chat__msg chat__msg--${role}`;
    div.innerHTML = html;
    log.append(div);
    log.scrollTop = log.scrollHeight;
    return div;
  };
  // the greeting carries data-i18n so it follows the language switch
  const greet = () => { if (!log.childElementCount) bubble('bot', `<span data-i18n="chat.hello">${esc(t('chat.hello'))}</span>`); };

  const open = (state) => {
    panel.hidden = !state;
    fab.setAttribute('aria-expanded', String(state));
    root.classList.toggle('is-open', state);
    if (state) { greet(); input.focus(); } else fab.focus();
  };
  fab.addEventListener('click', () => open(panel.hidden));
  root.querySelector('.chat__close').addEventListener('click', () => open(false));
  panel.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.stopPropagation(); open(false); } });

  input.addEventListener('input', () => { input.style.height = 'auto'; input.style.height = `${Math.min(input.scrollHeight, 120)}px`; });
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text || busy) return;
    busy = true;
    input.value = '';
    input.style.height = 'auto';
    bubble('user', esc(text));
    history.push({ role: 'user', content: text });
    const typing = bubble('bot', '<span class="chat__typing"><i></i><i></i><i></i></span>');
    try {
      const res = await fetch(url.replace(/\/$/, '') + '/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.slice(-12), lang: getLang() }),
        signal: AbortSignal.timeout(30000),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reply) throw new Error(data.error || res.status);
      typing.replaceChildren(render(data.reply));
      history.push({ role: 'assistant', content: data.reply });
    } catch (err) {
      typing.classList.add('chat__msg--error');
      typing.innerHTML = esc(t(String(err.message) === 'rate_limited' ? 'chat.limited' : 'chat.error'));
      history.pop();
    } finally {
      busy = false;
      log.scrollTop = log.scrollHeight;
      input.focus();
    }
  });

  // translate the widget now and on every language switch
  apply(root);
  document.addEventListener('langchange', () => apply(root));
}
