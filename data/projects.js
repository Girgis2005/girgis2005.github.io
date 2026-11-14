// ✏️ Projects — the ONLY place to edit project content.
//
// status:   'play' | 'live' | 'delivered' | 'building' | 'testing' | 'internal' | 'unreleased'
//           → one colour per status everywhere (status law, see STATUS_CLASS)
// category: any of 'automation' | 'web' | 'mobile' | 'games' | 'tools'  (Projects page filters)
// thumb:    image path, or { tile: 'violet' | 'green' | 'slate', icon: <utils icon name> }
// gallery:  [{ src, kind: 'phone' | 'wide' }]   (optimized by tools/optimize-images.mjs)
// facts:    [{ value, label: {en,pt-BR,ar} }]    key numbers, verified only
// case-study text (problem / what I built / hard part / result) lives in data/case-studies.js
// Text fields are { en, 'pt-BR', ar }. Never invent numbers: every figure is in docs/information-audit.md.
// Public-safety rules: see docs/brief.md §3 (tools/check-data.mjs enforces the word list).

export const STATUS_CLASS = { play: 'live', live: 'live', delivered: 'delivered', building: 'testing', testing: 'testing', internal: 'internal', unreleased: 'internal' };
export const CATEGORIES = ['automation', 'web', 'mobile', 'games', 'tools'];

const PLAY = (id) => `https://play.google.com/store/apps/details?id=${id}`;
const GH = (repo) => `https://github.com/Girgis2005/${repo}`;
const shots = (slug, names, kind) => names.map((n) => ({ src: `/assets/projects/${slug}/${n}.webp`, kind }));

export const projects = [
  // ───────────────────────────── Featured ─────────────────────────────
  {
    slug: 'lu-lingo',
    featured: 1,
    playStrip: 1,
    status: 'play',
    category: ['mobile'],
    thumb: '/assets/projects/lu-lingo/icon.webp',
    stack: ['Flutter', 'Dart', 'SQLite', 'Firebase', 'Cloud Functions', 'Play Billing'],
    links: { play: PLAY('com.englishvocab.english_vocab_master'), live: 'https://girgis2005.github.io/lu-lingo/' },
    title: { en: 'Lu Lingo', 'pt-BR': 'Lu Lingo', ar: 'Lu Lingo' },
    summary: {
      en: 'A language app for Arabic speakers: 9 languages and 53,057 words, each explained in Arabic. Works offline, with subscriptions and cloud backup.',
      'pt-BR': 'App de idiomas para falantes de árabe: 9 idiomas e 53.057 palavras, cada uma explicada em árabe. Funciona offline, com assinaturas e backup na nuvem.',
      ar: 'تطبيق لتعلّم اللغات للناطقين بالعربية، فيه 53,057 كلمة في 9 لغات، وكل كلمة مشروحة بالعربية. يعمل دون إنترنت، مع اشتراكات ونسخ احتياطي سحابي.',
    },
    tagline: { en: 'Nine languages, explained in Arabic', 'pt-BR': 'Nove idiomas, explicados em árabe', ar: 'تسع لغات مشروحة بالعربية' },
    facts: [
      { value: '9', label: { en: 'languages', 'pt-BR': 'idiomas', ar: 'لغات' } },
      { value: '53,057', label: { en: 'words', 'pt-BR': 'palavras', ar: 'كلمة' } },
      { value: '684', label: { en: 'starter sentences', 'pt-BR': 'frases iniciais', ar: 'جملة تأسيسية' } },
      { value: '177', label: { en: 'closed-test testers', 'pt-BR': 'testadores no teste fechado', ar: 'مختبِرًا في الاختبار المغلق' } },
    ],
    gallery: shots('lu-lingo', ['01', '02', '03', '04', '05', '06'], 'phone'),
  },
  {
    slug: 'gesr',
    featured: 2,
    status: 'live',
    category: ['tools', 'web'],
    thumb: '/assets/projects/gesr/icon.webp',
    stack: ['JavaScript', 'PWA', 'Service Worker', 'Web Speech API', 'OCR', 'LLM translation APIs'],
    links: { live: 'https://girgis2005.github.io/gesr/', github: GH('gesr') },
    title: { en: 'Gesr', 'pt-BR': 'Gesr', ar: 'جسر' },
    summary: {
      en: 'A translator between Egyptian Arabic, English and Brazilian Portuguese: text, voice and photos. Built for my own move to Brazil.',
      'pt-BR': 'Tradutor entre árabe egípcio, inglês e português do Brasil: texto, voz e fotos. Criado para a minha própria mudança para o Brasil.',
      ar: 'مترجم بين العامية المصرية والإنجليزية والبرتغالية البرازيلية: نص وصوت وصور. بنيته لنفسي عند انتقالي إلى البرازيل.',
    },
    facts: [
      { value: '3', label: { en: 'languages', 'pt-BR': 'idiomas', ar: 'لغات' } },
      { value: '8', label: { en: 'relocation phrase topics', 'pt-BR': 'temas de frases para a mudança', ar: 'موضوعات لعبارات الانتقال' } },
      { value: '~53 KB', label: { en: 'single file, no build step', 'pt-BR': 'arquivo único, sem build', ar: 'ملف واحد دون خطوة build' } },
    ],
    gallery: shots('gesr', ['01', '02'], 'phone'),
  },
  {
    slug: 'house-of-amria',
    featured: 3,
    status: 'delivered',
    category: ['web'],
    thumb: '/assets/projects/house-of-amria/thumb.webp',
    stack: ['Next.js', 'React', 'Prisma', 'Arabic RTL', 'Laravel (first version)', 'Filament'],
    links: { github: GH('house-of-amria'), githubLabel: 'project.links.githubLaravel' },
    title: { en: 'House of Amría', 'pt-BR': 'House of Amría', ar: 'بيت العامرية' },
    summary: {
      en: 'A bilingual online store for an Egyptian cotton home-textiles brand: shop, collections, hotel orders and an admin panel.',
      'pt-BR': 'Loja online bilíngue para uma marca egípcia de roupa de cama, mesa e banho em algodão: loja, coleções, pedidos de hotéis e painel administrativo.',
      ar: 'متجر إلكتروني ثنائي اللغة لعلامة تجارية مصرية للمفروشات القطنية: متجر، وتشكيلات، وطلبات للفنادق، ولوحة تحكم.',
    },
    gallery: shots('house-of-amria', ['01', '02', '03', '04'], 'wide'),
  },
  {
    slug: 'appointment-watcher',
    featured: 4,
    status: 'internal',
    category: ['automation'],
    thumb: { tile: 'slate', icon: 'calendarCheck' },
    stack: ['Node.js', 'Playwright', 'Chrome DevTools Protocol', 'Push alerts'],
    links: {},
    title: { en: 'Appointment watcher', 'pt-BR': 'Monitor de agendamentos', ar: 'مراقب المواعيد' },
    summary: {
      en: 'Watched consulate and immigration booking calendars around the clock and alerted my phone the moment a slot opened. One watcher made 6,022 checks before the appointment was booked.',
      'pt-BR': 'Monitorou calendários de agendamento do consulado e da imigração 24 horas por dia e avisou meu celular assim que surgia uma vaga. Um dos monitores fez 6.022 verificações até o agendamento ser feito.',
      ar: 'راقب تقاويم حجز المواعيد في القنصلية والهجرة على مدار الساعة، ونبّه هاتفي لحظة ظهور موعد متاح. وأجرى أحد المراقبين 6,022 فحصًا حتى تم الحجز.',
    },
    facts: [
      { value: '6,022', label: { en: 'checks', 'pt-BR': 'verificações', ar: 'فحصًا' } },
      { value: '< 5 min', label: { en: 'how long some slots lasted', 'pt-BR': 'duração de algumas vagas', ar: 'مدة بقاء بعض المواعيد' } },
      { value: '1', label: { en: 'appointment booked', 'pt-BR': 'agendamento feito', ar: 'موعد تم حجزه' } },
    ],
    gallery: [],
  },
  {
    slug: 'whatsapp-store-bot',
    featured: 5,
    status: 'delivered',
    category: ['automation', 'web'],
    thumb: { tile: 'green', icon: 'whatsapp' },
    stack: ['Node.js', 'whatsapp-web.js', 'Express', 'EJS', 'SQLite (sql.js)'],
    links: { github: GH('whatsapp-store-bot') },
    title: { en: 'WhatsApp store bot', 'pt-BR': 'Bot de loja no WhatsApp', ar: 'بوت واتساب لمتجر' },
    summary: {
      en: 'A WhatsApp bot and dashboard for a clothing shop: answers customers, shows the catalog, takes orders and sends broadcasts.',
      'pt-BR': 'Bot de WhatsApp e painel para uma loja de roupas: responde clientes, mostra o catálogo, recebe pedidos e envia mensagens em massa.',
      ar: 'بوت واتساب ولوحة تحكم لمحل ملابس: يرد على العملاء، ويعرض الكتالوج، ويستقبل الطلبات، ويرسل رسائل جماعية.',
    },
    gallery: shots('whatsapp-store-bot', ['01', '02', '03', '04'], 'wide'),
  },

  // ───────────────────────────── More work ─────────────────────────────
  {
    slug: 'stitchhub',
    status: 'delivered',
    category: ['web', 'mobile'],
    thumb: '/assets/projects/stitchhub/icon.webp',
    stack: ['Node.js', 'Express', 'SQLite', 'JWT', 'Flutter', 'Dart'],
    links: { github: GH('stitchhub-workshop') },
    title: { en: 'StitchHub', 'pt-BR': 'StitchHub', ar: 'StitchHub' },
    summary: {
      en: 'A system for an embroidery workshop that makes church vestments: clients, measurements by rank, places and orders, on the web and on Android.',
      'pt-BR': 'Sistema para um ateliê de bordado de vestes litúrgicas: clientes, medidas por grau hierárquico, igrejas e pedidos, na web e no Android.',
      ar: 'نظام لورشة تطريز ملابس كنسية: العملاء، والمقاسات حسب الرتبة، والأماكن، والطلبات، على الويب وأندرويد.',
    },
    facts: [
      { value: '1', label: { en: 'API for web and Android', 'pt-BR': 'API para web e Android', ar: 'واجهة API للويب وأندرويد' } },
      { value: '3', label: { en: 'measurement forms by rank', 'pt-BR': 'formulários de medidas por grau hierárquico', ar: 'نماذج مقاسات حسب الرتبة' } },
      { value: 'Offline', label: { en: 'works with no signal, syncs later', 'pt-BR': 'funciona sem sinal e sincroniza depois', ar: 'يعمل دون إنترنت ويزامن لاحقًا' } },
    ],
    gallery: [...shots('stitchhub', ['01', '02', '03', '04', '05', '06'], 'phone'), ...shots('stitchhub', ['web-01', 'web-02'], 'wide')],
  },
  {
    slug: 'structure-erp',
    status: 'building',
    category: ['web'],
    thumb: { tile: 'violet', icon: 'grid' },
    stack: ['Laravel', 'Livewire', 'Bootstrap 5', 'Multi-tenancy', 'RBAC', 'Arabic RTL'],
    links: { github: GH('structure-erp') },
    credit: { en: 'Built together with Simon.', 'pt-BR': 'Desenvolvido junto com Simon.', ar: 'بنيته بالمشاركة مع سيمون.' },
    title: { en: 'Structure ERP', 'pt-BR': 'Structure ERP', ar: 'Structure ERP' },
    summary: {
      en: 'A multi-tenant ERP for small and mid-size companies: HR and payroll, finance, CRM, inventory, procurement, manufacturing, fleet and more, in Arabic and English.',
      'pt-BR': 'ERP multiempresa para pequenas e médias empresas: RH e folha de pagamento, finanças, CRM, estoque, compras, produção, frota e mais, em árabe e inglês.',
      ar: 'نظام ERP متعدد الشركات للمؤسسات الصغيرة والمتوسطة: الموارد البشرية والرواتب، والمالية، وإدارة العملاء، والمخزون، والمشتريات، والتصنيع، والأسطول وغيرها، بالعربية والإنجليزية.',
    },
    facts: [
      { value: '12', label: { en: 'business areas', 'pt-BR': 'áreas de negócio', ar: 'مجالًا إداريًا' } },
      { value: '84', label: { en: 'data models', 'pt-BR': 'modelos de dados', ar: 'نموذجًا للبيانات' } },
      { value: '65', label: { en: 'controllers', 'pt-BR': 'controladores', ar: 'متحكّمًا' } },
    ],
    gallery: shots('structure-erp', ['01', '02', '03', '04', '05', '06'], 'wide'),
  },
  {
    slug: 'lu-flow',
    playStrip: 2,
    status: 'play',
    category: ['games', 'mobile'],
    thumb: '/assets/projects/lu-flow/icon.webp',
    stack: ['Flutter', 'Dart', 'Unity Ads', 'In-app purchases'],
    links: { play: PLAY('com.luflow.app') },
    title: { en: 'Lu Flow', 'pt-BR': 'Lu Flow', ar: 'Lu Flow' },
    tagline: { en: 'Connect-the-dots puzzle game', 'pt-BR': 'Jogo de ligar os pontos', ar: 'لعبة ألغاز توصيل النقاط' },
    summary: {
      en: 'A connect-the-dots puzzle game starring Lu, a water drop, with 7 modes from relaxed to speed runs.',
      'pt-BR': 'Jogo de ligar os pontos estrelado pela Lu, uma gota de água, com 7 modos, do modo relaxante ao contra o tempo.',
      ar: 'لعبة ألغاز لتوصيل النقاط بطلتها «لو»، قطرة ماء، وفيها 7 أنماط من الهادئ حتى السباق مع الوقت.',
    },
    facts: [{ value: '7', label: { en: 'game modes', 'pt-BR': 'modos de jogo', ar: 'أنماط لعب' } }],
    gallery: shots('lu-flow', ['01', '02', '03', '04', '05', '06'], 'phone'),
  },
  {
    slug: 'lu-peek',
    playStrip: 3,
    status: 'play',
    category: ['games', 'mobile'],
    thumb: '/assets/projects/lu-peek/icon.webp',
    stack: ['Flutter', 'Dart', 'Unity Ads'],
    links: { play: PLAY('com.lupeek.app'), github: GH('lu-peek') },
    title: { en: 'Lu Peek', 'pt-BR': 'Lu Peek', ar: 'Lu Peek' },
    tagline: { en: 'Letters, numbers and shapes for kids', 'pt-BR': 'Letras, números e formas para crianças', ar: 'حروف وأرقام وأشكال للأطفال' },
    summary: {
      en: 'A learning game for children aged 3 to 8: letters and words, numbers and counting, shapes and pictures, through matching, listening and sorting games.',
      'pt-BR': 'Jogo educativo para crianças de 3 a 8 anos: letras e palavras, números e contagem, formas e imagens, com jogos de combinar, ouvir e separar.',
      ar: 'لعبة تعليمية للأطفال من 3 إلى 8 سنوات: الحروف والكلمات، والأرقام والعدّ، والأشكال والصور، بألعاب مطابقة واستماع وتصنيف.',
    },
    facts: [
      { value: '4', label: { en: 'learning worlds', 'pt-BR': 'mundos de aprendizado', ar: 'عوالم تعليمية' } },
      { value: '3–8', label: { en: 'years old', 'pt-BR': 'anos de idade', ar: 'سنوات' } },
    ],
    gallery: shots('lu-peek', ['01', '02', '03', '04', '05', '06'], 'phone'),
  },
  {
    slug: 'lu-aqua',
    playStrip: 4,
    status: 'play',
    category: ['mobile'],
    thumb: '/assets/projects/lu-aqua/icon.webp',
    stack: ['Flutter', 'Dart', 'Kotlin', 'SQLite', 'Home-screen widgets'],
    links: { play: PLAY('com.smartsip.smartsip'), live: 'https://girgis2005.github.io/smartsip-web/' },
    title: { en: 'Lu Aqua', 'pt-BR': 'Lu Aqua', ar: 'Lu Aqua' },
    tagline: { en: 'Water reminders that actually ring', 'pt-BR': 'Lembretes para beber água que tocam de verdade', ar: 'تذكير بشرب الماء يرنّ فعلًا' },
    summary: {
      en: 'An offline water tracker with reminders that respect sleep and Ramadan hours, charts, streaks and home-screen widgets.',
      'pt-BR': 'App offline de lembrete para beber água, com lembretes que respeitam o sono e o Ramadã, gráficos, sequências e widgets.',
      ar: 'تطبيق لمتابعة شرب الماء يعمل دون إنترنت، بتذكيرات تراعي النوم وساعات الصيام في رمضان، ورسوم بيانية وعدّاد للأيام المتتالية وأدوات للشاشة الرئيسية.',
    },
    facts: [
      { value: '170+', label: { en: 'drink types', 'pt-BR': 'tipos de bebida', ar: 'نوعًا من المشروبات' } },
      { value: '24', label: { en: 'colour themes', 'pt-BR': 'temas de cores', ar: 'لونًا للواجهة' } },
      { value: 'Offline', label: { en: 'no sign-up needed', 'pt-BR': 'sem cadastro', ar: 'دون تسجيل حساب' } },
    ],
    gallery: shots('lu-aqua', ['01', '02', '03', '04'], 'phone'),
  },
  {
    slug: 'lu-prism',
    status: 'testing',
    category: ['games', 'mobile'],
    thumb: '/assets/projects/lu-prism/icon.webp',
    stack: ['Flutter', 'Dart', 'Local notifications'],
    links: { github: GH('lu-prism'), live: 'https://girgis2005.github.io/lu-prism-web/' },
    title: { en: 'Lu Prism', 'pt-BR': 'Lu Prism', ar: 'Lu Prism' },
    summary: {
      en: 'A colour-and-numbers logic puzzle where every colour hides a number, with a daily puzzle and three game modes.',
      'pt-BR': 'Quebra-cabeça de lógica em que cada cor esconde um número, com desafio diário e três modos de jogo.',
      ar: 'لغز منطقي بالألوان والأرقام، كل لون يخفي رقمًا، فيه تحدٍّ يومي وثلاثة أنماط لعب.',
    },
    facts: [
      { value: '3', label: { en: 'game modes', 'pt-BR': 'modos de jogo', ar: 'أنماط لعب' } },
      { value: '1', label: { en: 'solution per puzzle, guaranteed', 'pt-BR': 'solução por desafio, garantida', ar: 'حل مضمون لكل لغز' } },
    ],
    gallery: shots('lu-prism', ['01', '02', '03', '04', '05'], 'phone'),
  },
  {
    slug: 'lu-lens',
    status: 'testing',
    category: ['mobile', 'tools'],
    thumb: { tile: 'violet', icon: 'scan' },
    stack: ['Flutter', 'Kotlin', 'MediaProjection', 'On-device OCR', 'Speech-to-text API', 'LLM translation APIs'],
    links: {},
    title: { en: 'Lu Lens', 'pt-BR': 'Lu Lens', ar: 'Lu Lens' },
    summary: {
      en: 'An Android screen translator: a floating bubble translates whatever is on screen, and live captions translate audio from any app.',
      'pt-BR': 'Tradutor de tela para Android: uma bolha flutuante traduz o que estiver na tela, e legendas ao vivo traduzem o áudio de qualquer app.',
      ar: 'مترجم للشاشة على أندرويد: فقاعة عائمة تترجم أي شيء على الشاشة، وترجمة فورية مكتوبة للصوت من أي تطبيق.',
    },
    facts: [{ value: '12 s → < 2 s', label: { en: 'response time after the fix', 'pt-BR': 'tempo de resposta depois da correção', ar: 'زمن الاستجابة بعد الإصلاح' } }],
    galleryNote: {
      en: 'The first two screenshots: a Google Play page in English, then the same screen translated into Arabic by the bubble.',
      'pt-BR': 'As duas primeiras capturas: uma página do Google Play em inglês e, depois, a mesma tela traduzida para o árabe pela bolha.',
      ar: 'أول صورتين: صفحة على Google Play بالإنجليزية، ثم نفس الشاشة بعد أن ترجمتها الفقاعة إلى العربية.',
    },
    gallery: shots('lu-lens', ['01', '02', '03', '04', '05', '06'], 'phone'),
  },
  {
    slug: 'distributed-automation',
    status: 'internal',
    category: ['automation'],
    thumb: { tile: 'slate', icon: 'network' },
    stack: ['TypeScript', 'Node.js', 'Playwright', 'WebSocket', 'Express', 'Docker'],
    links: { github: GH('distributed-web-automation') },
    title: { en: 'Distributed web automation platform', 'pt-BR': 'Plataforma distribuída de automação web', ar: 'منصة أتمتة ويب موزّعة' },
    summary: {
      en: 'Large-scale distributed web automation: long-running jobs across several machines, controlled from one live dashboard.',
      'pt-BR': 'Automação web distribuída em grande escala: tarefas longas em várias máquinas, controladas por um único painel ao vivo.',
      ar: 'أتمتة ويب موزّعة على نطاق واسع: مهام طويلة على عدة أجهزة، يُتحكَّم فيها من لوحة تحكم حيّة واحدة.',
    },
    facts: [{ value: '~10×', label: { en: 'lighter HTTP path than a browser', 'pt-BR': 'mais leve no caminho HTTP do que um navegador', ar: 'أخف عبر مسار HTTP مقارنة بالمتصفح' } }],
    gallery: [],
  },
  {
    slug: 'kids-video-factory',
    status: 'internal',
    category: ['automation', 'tools'],
    thumb: { tile: 'slate', icon: 'film' },
    stack: ['Python', 'skia-python', 'NumPy', 'Text-to-speech', 'ffmpeg', 'Image generation'],
    links: {},
    title: { en: 'Kids video factory', 'pt-BR': 'Fábrica de vídeos infantis', ar: 'مصنع فيديوهات الأطفال' },
    summary: {
      en: 'A local pipeline that turns a written script into a finished 1080p cartoon for kids, with narration, lip-sync and captions.',
      'pt-BR': 'Pipeline local que transforma um roteiro escrito em um desenho infantil 1080p pronto, com narração, sincronia labial e legendas.',
      ar: 'خط إنتاج محلي يحوّل نصًا مكتوبًا إلى فيلم كرتون للأطفال بدقة 1080p، بالتعليق الصوتي ومزامنة الشفاه والنصوص المكتوبة على الشاشة.',
    },
    facts: [
      { value: '43 s', label: { en: 'to render a 50 s video on CPU', 'pt-BR': 'para renderizar 50 s de vídeo na CPU', ar: 'لإخراج فيديو مدته 50 ثانية على المعالج' } },
      { value: '193 → 1', label: { en: 'false alarms in automatic QA', 'pt-BR': 'alarmes falsos na verificação automática', ar: 'إنذارات خاطئة في الفحص الآلي' } },
    ],
    gallery: [],
  },
  {
    slug: 'wordhunt',
    status: 'unreleased',
    category: ['games'],
    thumb: '/assets/projects/wordhunt/icon.webp',
    stack: ['Flutter', 'Dart'],
    links: { github: GH('wordhunt') },
    title: { en: 'WordHunt', 'pt-BR': 'WordHunt', ar: 'WordHunt' },
    summary: {
      en: 'A crossword puzzle game with themed categories and a coin economy, in English and Arabic.',
      'pt-BR': 'Jogo de palavras cruzadas com categorias temáticas e sistema de moedas, em inglês e árabe.',
      ar: 'لعبة كلمات متقاطعة بفئات حسب الموضوع ونظام عملات، بالإنجليزية والعربية.',
    },
    gallery: shots('wordhunt', ['01', '02', '03', '04'], 'wide'),
  },
  {
    slug: 'lu-word',
    status: 'unreleased',
    category: ['games'],
    thumb: '/assets/projects/lu-word/icon.webp',
    stack: ['Flutter', 'Dart'],
    links: { github: GH('lu-word') },
    title: { en: 'Lu Word', 'pt-BR': 'Lu Word', ar: 'Lu Word' },
    summary: {
      en: 'A daily word puzzle with a practice mode, fully offline.',
      'pt-BR': 'Desafio diário de palavras com modo de treino, totalmente offline.',
      ar: 'لغز كلمات يومي مع وضع للتدريب، يعمل دون إنترنت بالكامل.',
    },
    gallery: [],
  },
  {
    slug: 'lu-block',
    status: 'unreleased',
    category: ['games'],
    thumb: { tile: 'violet', icon: 'grid' },
    stack: ['Flutter', 'Dart'],
    links: { github: GH('lu-block') },
    title: { en: 'Lu Block', 'pt-BR': 'Lu Block', ar: 'Lu Block' },
    summary: {
      en: 'A 10×10 block puzzle with power blocks, a fever mode, levels and achievements.',
      'pt-BR': 'Quebra-cabeça de blocos 10×10 com blocos especiais, modo fever, fases e conquistas.',
      ar: 'لغز مكعبات 10×10 بمكعبات خاصة ووضع حماس ومراحل وإنجازات.',
    },
    gallery: [],
  },
];

export const bySlug = (slug) => projects.find((p) => p.slug === slug);
