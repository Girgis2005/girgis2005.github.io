// ✏️ Identity & contact — the ONLY place to change these.
// Phones/emails here are public on purpose (Girgis approved them for the site).

export const site = {
  name: { en: 'Girgis Adel', 'pt-BR': 'Girgis Adel', ar: 'جرجس عادل' },
  initials: 'GA',
  url: 'https://girgis2005.github.io',
  email: 'gogy.bairy@gmail.com',
  phones: {
    br: { display: '+55 48 98808-2398', tel: '+5548988082398' }, // primary
    eg: { display: '+20 122 424 1290', tel: '+201224241290' },
  },
  whatsapp: 'https://wa.me/5548988082398',     // Brazil — main number (WhatsApp + calls)
  whatsappEg: 'https://wa.me/201224241290',    // Egypt — WhatsApp messages only, no calls for now
  links: {
    github: 'https://github.com/Girgis2005',
    linkedin: 'https://www.linkedin.com/in/girgis-adel-dev',
    play: 'https://play.google.com/store/apps/developer?id=Lu+Games+Cy',
  },
  available: true, // shows the green "Available for new projects" status

  // Contact form: paste the Web3Forms access key here (it is designed to be public).
  // Empty = the form opens the visitor's email app with the message ready (honest fallback, no fake "sent").
  web3formsKey: 'b7c9b7d2-f34d-48d6-8380-da1f8182a83c', // form "Portfolio contact" on app.web3forms.com (gogy.bairy@gmail.com)

  // Chat assistant: URL of the deployed Cloudflare Worker (see worker/README.md).
  // Empty = the chat bubble is not shown at all.
  chatEndpoint: '',
  // Worker route that forwards each contact-form message to WhatsApp (CallMeBot). Empty = email only.
  notifyEndpoint: '',
};

// Main navigation, in order. `key` = i18n key, `page` = <body data-page>.
export const nav = [
// `en` is only the first-paint text; the real labels come from i18n/*.json.
  { page: 'projects', href: '/projects.html', key: 'nav.projects', en: 'Projects' },
  { page: 'services', href: '/services.html', key: 'nav.services', en: 'Services' },
  { page: 'about', href: '/about.html', key: 'nav.about', en: 'About' },
  { page: 'skills', href: '/skills.html', key: 'nav.skills', en: 'Skills' },
  { page: 'resume', href: '/resume.html', key: 'nav.resume', en: 'Resume' },
  { page: 'contact', href: '/contact.html', key: 'nav.contact', en: 'Contact' },
];
