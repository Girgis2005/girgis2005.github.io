// ✏️ Services — four offers. Each: what I do, who it is for, what you get, proof projects.
// No prices, deadlines or guarantees here (brief §3) — those are agreed per project.

export const services = [
  {
    id: 'automation',
    title: { en: 'Business automation', 'pt-BR': 'Automação de processos', ar: 'أتمتة الأعمال' },
    what: {
      en: 'I build scripts and bots that do repetitive web and data work for you: logging in, filling forms, checking pages, collecting and cleaning data, and producing reports, on a schedule, with alerts when a person needs to act.',
      'pt-BR': 'Crio scripts e bots que fazem por você o trabalho repetitivo na web e com dados: entrar em sistemas, preencher formulários, conferir páginas, coletar e limpar dados e gerar relatórios, em horários definidos, com alertas quando uma pessoa precisa agir.',
      ar: 'أبني سكربتات وبوتات تريحك من العمل المتكرر على الويب ومع البيانات: تسجيل الدخول، وملء النماذج، ومتابعة الصفحات، وجمع البيانات وتنظيفها، وإعداد التقارير، في مواعيد محددة، مع تنبيهات عندما يلزم تدخّل بشري.',
    },
    who: {
      en: 'Teams and founders who lose hours every week to the same manual steps, or who need data from sites that have no API.',
      'pt-BR': 'Equipes e empreendedores que perdem horas toda semana com os mesmos passos manuais, ou que precisam de dados de sites sem API.',
      ar: 'الفرق وأصحاب المشاريع الذين يضيعون ساعات كل أسبوع في نفس الخطوات اليدوية، أو يحتاجون إلى بيانات من مواقع لا توفّر واجهة API.',
    },
    get: {
      en: ['A working tool (script, bot or small desktop app)', 'Scheduled runs and alerts to your phone or email', 'Clear instructions to run it yourself', 'The full source code'],
      'pt-BR': ['Uma ferramenta funcionando (script, bot ou pequeno app de desktop)', 'Execuções agendadas e alertas no celular ou e-mail', 'Instruções claras para você mesmo rodar', 'O código-fonte completo'],
      ar: ['أداة تعمل (سكربت أو بوت أو تطبيق صغير لسطح المكتب)', 'تشغيل مجدول وتنبيهات على هاتفك أو بريدك', 'تعليمات واضحة لتشغيلها بنفسك', 'الكود المصدري كاملًا'],
    },
    projects: ['appointment-watcher', 'kids-video-factory', 'distributed-automation'],
  },
  {
    id: 'mobile',
    title: { en: 'Mobile apps', 'pt-BR': 'Apps mobile', ar: 'تطبيقات الموبايل' },
    what: {
      en: 'I take an Android app from idea to a published Google Play listing: design, build, store listing, release, and the updates and policy changes that come after launch.',
      'pt-BR': 'Levo seu app Android da ideia até a publicação no Google Play: design, desenvolvimento, página da loja, lançamento e as atualizações e mudanças de política que vêm depois.',
      ar: 'أتولى تطبيق أندرويد من الفكرة حتى نشره على Google Play: التصميم، والبناء، وصفحة المتجر، والإطلاق، والتحديثات وتغييرات السياسات التي تأتي بعد ذلك.',
    },
    who: {
      en: 'Founders, shops and brands who want a real app on Google Play, built and maintained by one person who owns the whole lifecycle.',
      'pt-BR': 'Empreendedores, lojas e marcas que querem um app de verdade no Google Play, feito e mantido por uma pessoa que cuida do ciclo inteiro.',
      ar: 'أصحاب المشاريع والمحلات والعلامات التجارية الذين يريدون تطبيقًا حقيقيًا على Google Play، يبنيه ويصونه شخص واحد يتولى دورة حياته كاملة.',
    },
    get: {
      en: ['A Flutter app published on Google Play', 'Store listing, screenshots and data-safety form', 'Offline storage, notifications or subscriptions where needed', 'Updates after launch'],
      'pt-BR': ['Um app em Flutter publicado no Google Play', 'Página da loja, capturas de tela e formulário de segurança de dados', 'Armazenamento offline, notificações ou assinaturas quando precisar', 'Atualizações depois do lançamento'],
      ar: ['تطبيق Flutter منشور على Google Play', 'صفحة المتجر ولقطات الشاشة ونموذج أمان البيانات', 'تخزين دون إنترنت أو إشعارات أو اشتراكات عند الحاجة', 'تحديثات بعد الإطلاق'],
    },
    projects: ['lu-lingo', 'lu-aqua', 'lu-flow'],
  },
  {
    id: 'web',
    title: { en: 'Websites & online stores', 'pt-BR': 'Sites e lojas online', ar: 'المواقع والمتاجر الإلكترونية' },
    what: {
      en: 'I build bilingual websites, online stores and admin panels: catalogs, orders, customer accounts and a back office you can run day to day, with Arabic right-to-left done properly.',
      'pt-BR': 'Crio sites, lojas online e painéis administrativos em português, inglês ou árabe: catálogo, pedidos, contas de clientes e um painel para usar no dia a dia, com suporte correto ao árabe (escrita da direita para a esquerda).',
      ar: 'أبني مواقع ومتاجر إلكترونية ولوحات تحكم ثنائية اللغة: الكتالوج، والطلبات، وحسابات العملاء، ونظام إدارة تستخدمه يوميًا، مع دعم صحيح للعربية من اليمين لليسار.',
    },
    who: {
      en: 'Small and mid-size businesses that have outgrown spreadsheets and chat orders, and want one system that fits how they work.',
      'pt-BR': 'Pequenas e médias empresas que já não dão conta com planilhas e pedidos por mensagem e querem um sistema que combine com o jeito que trabalham.',
      ar: 'الشركات الصغيرة والمتوسطة التي تجاوزت مرحلة جداول Excel والطلبات عبر الرسائل، وتريد نظامًا واحدًا يناسب طريقة عملها.',
    },
    get: {
      en: ['A deployed, working website or store', 'An admin panel for products, orders and content', 'Arabic and English (Portuguese on request)', 'The full source code and a short handover'],
      'pt-BR': ['Um site ou loja no ar e funcionando', 'Um painel para produtos, pedidos e conteúdo', 'Português, inglês ou árabe', 'O código-fonte completo e um treinamento rápido na entrega'],
      ar: ['موقع أو متجر منشور ويعمل', 'لوحة تحكم للمنتجات والطلبات والمحتوى', 'العربية والإنجليزية (والبرتغالية عند الطلب)', 'الكود المصدري كاملًا وشرح مختصر للتسليم'],
    },
    projects: ['house-of-amria', 'structure-erp', 'stitchhub'],
  },
  {
    id: 'bots',
    title: { en: 'Chatbots & WhatsApp bots', 'pt-BR': 'Chatbots e bots de WhatsApp', ar: 'بوتات المحادثة وواتساب' },
    what: {
      en: 'I build bots that answer customers, show your catalog, take orders and send announcements, on WhatsApp or on your website, with a dashboard so you stay in control.',
      'pt-BR': 'Crio bots que respondem clientes, mostram seu catálogo, recebem pedidos e enviam avisos, no WhatsApp ou no seu site, com um painel para você manter o controle.',
      ar: 'أبني بوتات ترد على العملاء، وتعرض الكتالوج، وتستقبل الطلبات، وترسل التنبيهات والعروض، على واتساب أو على موقعك، مع لوحة تحكم تُبقي كل شيء تحت سيطرتك.',
    },
    who: {
      en: 'Shops and service businesses that answer the same messages all day.',
      'pt-BR': 'Lojas e prestadores de serviço que respondem às mesmas mensagens o dia todo.',
      ar: 'المحلات وشركات الخدمات التي ترد على نفس الرسائل طوال اليوم.',
    },
    get: {
      en: ['A bot connected to WhatsApp or your website', 'A dashboard for products, orders and customers', 'Broadcasts to customers who opted in', 'Clear rules for when a person takes over'],
      'pt-BR': ['Um bot conectado ao WhatsApp ou ao seu site', 'Um painel para produtos, pedidos e clientes', 'Mensagens em massa para clientes que autorizaram o envio', 'Regras claras para quando um atendente humano assume a conversa'],
      ar: ['بوت متصل بواتساب أو بموقعك', 'لوحة تحكم للمنتجات والطلبات والعملاء', 'رسائل جماعية للعملاء الموافقين على استقبالها', 'قواعد واضحة تحدد متى يتولى موظف المحادثة'],
    },
    projects: ['whatsapp-store-bot'],
  },
];
