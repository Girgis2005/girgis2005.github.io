// ✏️ Skills — grouped by the kind of work. No percentages or levels (brief §3): every item was used in a real project.
// `projects` = slugs from data/projects.js that prove the group.

export const skillGroups = [
  {
    id: 'automation',
    icon: 'network',
    title: { en: 'Automation', 'pt-BR': 'Automação', ar: 'الأتمتة' },
    text: {
      en: 'Browser and data automation that runs on a schedule, recovers from errors and tells a person when it needs one.',
      'pt-BR': 'Automação de navegador e de dados que roda em horários definidos, se recupera de erros e avisa uma pessoa quando precisa.',
      ar: 'أتمتة للمتصفح والبيانات تعمل في مواعيد محددة، وتتعافى من الأخطاء، وتنبّه الإنسان عندما تحتاج إليه.',
    },
    items: ['Python', 'Playwright', 'Selenium', 'Chrome DevTools Protocol', 'Requests / HTTPX', 'BeautifulSoup', 'Scheduling', 'Push alerts (ntfy)', 'Excel / CSV pipelines', 'Tkinter desktop tools'],
    projects: ['appointment-watcher', 'kids-video-factory', 'distributed-automation'],
  },
  {
    id: 'mobile',
    icon: 'play',
    title: { en: 'Mobile', 'pt-BR': 'Mobile', ar: 'الموبايل' },
    text: {
      en: 'Android apps in Flutter, with native Kotlin where it matters, published and maintained on Google Play.',
      'pt-BR': 'Apps Android em Flutter, com Kotlin nativo onde faz diferença, publicados e mantidos no Google Play.',
      ar: 'تطبيقات أندرويد بـ Flutter، مع كود Kotlin أصلي عند الحاجة، منشورة ومُحدَّثة على Google Play.',
    },
    items: ['Flutter', 'Dart', 'Kotlin (Android services)', 'SQLite', 'Firebase', 'Play Billing', 'Google Play releases', 'Home-screen widgets', 'Notifications & alarms'],
    projects: ['lu-lingo', 'lu-aqua', 'lu-flow'],
  },
  {
    id: 'web',
    icon: 'grid',
    title: { en: 'Web', 'pt-BR': 'Web', ar: 'الويب' },
    text: {
      en: 'Stores, dashboards and business systems, bilingual from the start, with Arabic right-to-left done properly.',
      'pt-BR': 'Lojas, painéis e sistemas de gestão, em vários idiomas desde o início, com suporte correto ao árabe (escrita da direita para a esquerda).',
      ar: 'متاجر ولوحات تحكم وأنظمة إدارة، ثنائية اللغة من البداية، مع دعم صحيح للعربية من اليمين لليسار.',
    },
    items: ['Next.js', 'React', 'Prisma', 'Laravel', 'Livewire', 'Filament', 'Node.js', 'Express', 'MySQL', 'SQLite', 'HTML / CSS / JavaScript', 'PWA'],
    projects: ['house-of-amria', 'structure-erp', 'stitchhub'],
  },
  {
    id: 'ai',
    icon: 'scan',
    title: { en: 'AI integration', 'pt-BR': 'Integração com IA', ar: 'دمج الذكاء الاصطناعي' },
    text: {
      en: 'Putting language models and on-device recognition to work inside real products, with fallbacks when a service is slow or down.',
      'pt-BR': 'Modelos de linguagem e reconhecimento no próprio aparelho trabalhando dentro de produtos reais, com alternativas quando um serviço fica lento ou cai.',
      ar: 'تشغيل نماذج اللغة والتعرّف على النصوص داخل الجهاز نفسه في منتجات حقيقية، مع بدائل عندما تبطؤ خدمة أو تتوقف.',
    },
    items: ['LLM translation APIs', 'On-device OCR', 'Speech-to-text', 'Text-to-speech', 'WhatsApp bots', 'AI-assisted development'],
    projects: ['lu-lens', 'gesr', 'whatsapp-store-bot'],
  },
  {
    id: 'tools',
    icon: 'external',
    title: { en: 'Tools & delivery', 'pt-BR': 'Ferramentas e entrega', ar: 'الأدوات والتسليم' },
    text: {
      en: 'The everyday tools that get work tested, shipped and kept running.',
      'pt-BR': 'As ferramentas do dia a dia para testar, entregar e manter tudo funcionando.',
      ar: 'الأدوات اليومية التي أختبر بها العمل وأنشره وأحافظ على استمراره.',
    },
    items: ['Git & GitHub', 'GitHub Pages & Actions', 'TypeScript', 'Docker', 'Cloudflare', 'Firebase Cloud Functions', 'Automated tests'],
    projects: ['structure-erp', 'lu-prism'],
  },
];

// Programming languages, in order of how much real work they carried.
export const languages = ['Python', 'TypeScript', 'JavaScript', 'Dart', 'Kotlin', 'PHP', 'SQL'];
