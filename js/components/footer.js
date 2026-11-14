// Footer — one source for every page. Renders into <footer id="site-footer">.

import { site, nav } from '../../data/site.js';

export function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  const year = new Date().getFullYear();
  const ext = 'target="_blank" rel="noopener"';

  el.className = 'foot';
  el.innerHTML = `
    <div class="container">
      <div class="foot__top">
        <div class="foot__about">
          <a class="brand" href="/"><span class="brand__mark" aria-hidden="true">${site.initials}</span><span data-i18n="site.name">${site.name.en}</span></a>
          <p data-i18n="footer.tagline"></p>
          ${site.available ? '<p class="foot__avail"><span class="pulse" aria-hidden="true"></span><span data-i18n="common.available"></span></p>' : ''}
        </div>
        <div>
          <h2 data-i18n="footer.pages"></h2>
          <ul>${nav.map((n) => `<li><a href="${n.href}" data-i18n="${n.key}"></a></li>`).join('')}</ul>
        </div>
        <div>
          <h2 data-i18n="footer.elsewhere"></h2>
          <ul>
            <li><a href="${site.whatsapp}" ${ext}>WhatsApp</a></li>
            <li><a href="mailto:${site.email}" data-i18n="common.email">Email</a></li>
            <li><a href="${site.links.linkedin}" ${ext}>LinkedIn</a></li>
            <li><a href="${site.links.github}" ${ext}>GitHub</a></li>
            <li><a href="${site.links.play}" ${ext}>Google Play</a></li>
          </ul>
        </div>
      </div>
      <div class="foot__bottom">
        <span>© ${year} <span data-i18n="site.name">${site.name.en}</span> · <span data-i18n="common.location"></span></span>
        <a href="/privacy.html" data-i18n="nav.privacy"></a>
      </div>
    </div>`;
}
