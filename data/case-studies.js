// ✏️ Case-study text for project.html?slug=… — one entry per project, three languages.
// Sections: problem · approach ("What I built") · hard ("The hard part") · result. A missing section is simply not shown.
// Facts must match docs/information-audit.md. Public-safety rules: docs/brief.md §3 (checked by tools/check-data.mjs).

export const caseStudies = {
  'lu-lingo': {
    en: {
      problem: 'Most language apps teach Arabic speakers through English. I wanted every word, example and grammar note explained in Arabic, and the app had to keep working without internet.',
      approach: 'A Flutter app with a local word bank for nine languages (English, Brazilian Portuguese, German, French, Spanish, Italian, Chinese, Turkish and Korean), a starter course, grammar, conversations, spaced review and a level test. Firebase handles sign-in, cloud backup and subscriptions. Diary translation runs in a server function that tries several LLM translation APIs in order of measured speed, and stores no text.',
      hard: 'For weeks the app said "saved to cloud" while nothing was saved: a catch-all database rule blocked the backup and the app swallowed the error. I wrote an owner-only rule covered by 10 emulator tests. Large backups also broke the 1 MiB document limit, so backups are now compressed: 20,000 words fit in 544 KB.',
      result: 'Live on Google Play after closed testing with 177 testers, with Plus and Pro subscriptions in 174 countries and a launch offer that is applied correctly in the app.',
    },
    'pt-BR': {
      problem: 'A maioria dos apps de idiomas ensina falantes de árabe por meio do inglês. Eu queria cada palavra, exemplo e explicação de gramática em árabe, e o app precisava funcionar sem internet.',
      approach: 'Um app em Flutter com um banco de palavras local para nove idiomas (inglês, português do Brasil, alemão, francês, espanhol, italiano, chinês, turco e coreano), um curso inicial, gramática, conversas, revisão espaçada e teste de nível. O Firebase cuida do login, do backup na nuvem e das assinaturas. A tradução do diário roda numa função de servidor que tenta várias APIs de tradução com LLM, na ordem da velocidade medida, e não guarda nenhum texto.',
      hard: 'Durante semanas o app dizia "salvo na nuvem" sem salvar nada: uma regra genérica do banco bloqueava o backup e o app engolia o erro. Escrevi uma regra só para o dono, coberta por 10 testes no emulador. Backups grandes também passavam do limite de 1 MiB por documento, então agora eles são comprimidos: 20.000 palavras cabem em 544 KB.',
      result: 'No ar no Google Play depois de um teste fechado com 177 testadores, com assinaturas Plus e Pro em 174 países e uma oferta de lançamento aplicada corretamente no app.',
    },
    ar: {
      problem: 'معظم تطبيقات اللغات تعلّم الناطقين بالعربية عن طريق الإنجليزية. أردت أن تكون كل كلمة وكل مثال وكل قاعدة مشروحة بالعربية، وأن يعمل التطبيق دون إنترنت.',
      approach: 'تطبيق Flutter فيه قاعدة كلمات محلية لتسع لغات (الإنجليزية، والبرتغالية البرازيلية، والألمانية، والفرنسية، والإسبانية، والإيطالية، والصينية، والتركية، والكورية)، مع دورة تأسيسية، وقواعد، ومحادثات، والتكرار المتباعد، واختبار مستوى. يتولى Firebase تسجيل الدخول والنسخ الاحتياطي السحابي والاشتراكات. وترجمة اليوميات تتم عبر دالة على الخادم تجرّب عدة واجهات ترجمة بالذكاء الاصطناعي حسب سرعتها المقيسة، ولا تحفظ أي نص.',
      hard: 'لأسابيع كان التطبيق يقول «تم الحفظ في السحابة» دون أن يُحفظ شيء: قاعدة عامة في قاعدة البيانات كانت تمنع النسخ الاحتياطي، والتطبيق يُخفي الخطأ. كتبت قاعدة تسمح لصاحب البيانات فقط، ومعها 10 اختبارات على المحاكي. وكانت النسخ الكبيرة تتجاوز حد 1 ميجابايت للمستند، فأصبحت تُضغط: 20,000 كلمة تشغل الآن 544 كيلوبايت.',
      result: 'منشور على Google Play بعد اختبار مغلق مع 177 مختبِرًا، مع اشتراكات Plus و Pro في 174 دولة، وعرض إطلاق يُطبَّق داخل التطبيق بشكل صحيح.',
    },
  },

  gesr: {
    en: {
      problem: 'Moving from Cairo to São Paulo meant talking to landlords, doctors and banks in Portuguese, while I think in Egyptian Arabic. General translators handle formal Arabic, not the way Egyptians actually speak.',
      approach: 'A single-file progressive web app with no build step: text, voice in and out, photo and camera text recognition, and an automatic two-way conversation mode. A relocation phrasebook covers topics like Pix, CPF, housing and the doctor, and English and Portuguese words can show their pronunciation in Arabic letters.',
      hard: "The browser's experimental on-device translator never answers when its model isn't downloaded, so the whole fallback chain froze with no error. Per-call timeouts let every request fall through to the next engine.",
      result: 'Live on GitHub Pages and installable on Android, where it can also receive text shared from other apps. Its ideas grew into Lu Lens, an Android app that translates on top of every other app.',
    },
    'pt-BR': {
      problem: 'Mudar do Cairo para São Paulo significava falar com proprietários, médicos e bancos em português, enquanto eu penso em árabe egípcio. Tradutores comuns lidam com o árabe formal, não com o jeito que os egípcios realmente falam.',
      approach: 'Um app web progressivo em um único arquivo, sem etapa de build: texto, voz para falar e ouvir, reconhecimento de texto em fotos e na câmera, e um modo de conversa automática nos dois sentidos. Um guia de frases para a mudança cobre temas como Pix, CPF, moradia e médico, e palavras em inglês e português podem mostrar a pronúncia em letras árabes.',
      hard: 'O tradutor experimental do navegador nunca responde quando o modelo não foi baixado, e toda a cadeia de alternativas travava sem nenhum erro. Limites de tempo em cada chamada fazem a requisição passar para o próximo mecanismo.',
      result: 'No ar no GitHub Pages e instalável no Android, onde também recebe textos compartilhados de outros apps. As ideias dele viraram o Lu Lens, um app Android que traduz por cima de qualquer outro app.',
    },
    ar: {
      problem: 'الانتقال من القاهرة إلى ساو باولو كان يعني التعامل مع أصحاب الشقق والأطباء والبنوك بالبرتغالية، بينما أفكر أنا بالعامية المصرية. وأدوات الترجمة العامة تتعامل مع الفصحى، لا مع الطريقة التي يتكلم بها المصريون فعلًا.',
      approach: 'تطبيق ويب تقدّمي في ملف واحد بلا أي خطوة بناء: نص، وصوت إدخالًا وإخراجًا، وقراءة النص من الصور والكاميرا، ووضع محادثة تلقائية في الاتجاهين. وفيه دليل عبارات للانتقال يغطي موضوعات مثل Pix و CPF والسكن والطبيب، ويمكن عرض نطق الكلمات الإنجليزية والبرتغالية بحروف عربية.',
      hard: 'المترجم التجريبي المدمج في المتصفح لا يرد أبدًا إذا لم يكن نموذجه محمّلًا، فكانت سلسلة البدائل كلها تتجمد دون أي رسالة خطأ. وضعت مهلة زمنية لكل طلب، فأصبح كل طلب ينتقل تلقائيًا إلى المحرك التالي.',
      result: 'يعمل الآن على GitHub Pages، ويمكن تثبيته على أندرويد، حيث يستقبل أيضًا النصوص المشاركة من التطبيقات الأخرى. وتطوّرت أفكاره إلى Lu Lens، تطبيق أندرويد يترجم فوق أي تطبيق آخر.',
    },
  },

  'house-of-amria': {
    en: {
      problem: 'An Egyptian cotton home-textiles brand needed a real online store in Arabic and English, one that could also take larger orders from hotels and trade buyers.',
      approach: 'I built the first version on Laravel with a Filament back office, then rebuilt it on Next.js with Prisma: shop and collections, product variants, cart and orders, gift registries, a hotels and trade area, order tracking and an admin panel. Arabic right-to-left is the default, with English one tap away.',
      hard: 'Making both languages first-class: every layout and component mirrors correctly in right-to-left, not only the text, and the same catalog serves retail customers and hotel buyers.',
      result: 'Delivered to the client and launched. The screenshots were captured from the launched store in November 2026.',
    },
    'pt-BR': {
      problem: 'Uma marca egípcia de roupa de cama, mesa e banho em algodão precisava de uma loja online de verdade, em árabe e inglês, que também recebesse pedidos maiores de hotéis e compradores atacadistas.',
      approach: 'Criei a primeira versão em Laravel com painel Filament e depois reconstruí em Next.js com Prisma: loja e coleções, variações de produto, carrinho e pedidos, listas de presentes, uma área para hotéis e atacado, rastreamento de pedidos e painel administrativo. O árabe, da direita para a esquerda, é o padrão, com o inglês a um toque.',
      hard: 'Fazer os dois idiomas funcionarem de verdade: cada layout e componente se espelha corretamente da direita para a esquerda, não só o texto, e o mesmo catálogo atende o varejo e os hotéis.',
      result: 'Entregue ao cliente e lançado. As capturas de tela foram feitas na loja publicada, em novembro de 2026.',
    },
    ar: {
      problem: 'علامة تجارية مصرية للمفروشات القطنية احتاجت إلى متجر إلكتروني حقيقي بالعربية والإنجليزية، يستقبل أيضًا الطلبات الكبيرة من الفنادق وتجار الجملة.',
      approach: 'بنيت النسخة الأولى بـ Laravel مع لوحة تحكم Filament، ثم أعدت بناء المتجر بـ Next.js و Prisma: المتجر والتشكيلات، ومتغيّرات المنتج، والسلة والطلبات، وقوائم الهدايا، وقسم للفنادق وتجار الجملة، وتتبع الطلبات، ولوحة تحكم. العربية من اليمين لليسار هي الأساس، والإنجليزية بضغطة واحدة.',
      hard: 'أن تكون اللغتان على نفس المستوى: كل تصميم وكل مكوّن ينعكس اتجاهه بشكل صحيح من اليمين لليسار، لا النص فقط، ونفس الكتالوج يخدم عملاء التجزئة والفنادق.',
      result: 'تم تسليمه للعميل وإطلاقه. والصور التُقطت من المتجر بعد إطلاقه في نوفمبر 2026.',
    },
  },

  'appointment-watcher': {
    en: {
      problem: 'Appointment slots on government booking portals (a consulate in Cairo before my move, then immigration in Brazil) appeared at random and disappeared within minutes. Checking by hand, day and night, was not possible.',
      approach: 'Read-only watchers drive a real browser with Playwright, check the calendar on a schedule and fire a high-priority phone alarm the moment a better date appears, with a quieter channel for routine updates. A person always does the booking: the tool never solves CAPTCHAs.',
      hard: "The calendars fought back. On the immigration portal an invisible overlay ate every click, the back arrow never disabled, padding cells looked like free days and sessions died on refresh, so the watcher reads the portal's own data to know which month it is on. The consulate session expired every eight hours, so that watcher logs back in through the browser's password manager; no credentials live in the scripts.",
      result: 'The consulate watcher made 6,022 checks in about three weeks; some slots lasted under five minutes. Four appointments were booked. No screenshots are shown because the pages contain personal data.',
    },
    'pt-BR': {
      problem: 'As vagas em portais de agendamento do governo (um consulado no Cairo antes da mudança, depois a imigração no Brasil) apareciam aleatoriamente e sumiam em minutos. Conferir na mão, dia e noite, não era possível.',
      approach: 'Monitores somente leitura controlam um navegador de verdade com Playwright, conferem o calendário em intervalos e disparam um alarme de alta prioridade no celular assim que surge uma data melhor, com um canal mais discreto para avisos de rotina. Quem agenda é sempre uma pessoa: a ferramenta nunca resolve CAPTCHAs.',
      hard: 'Os calendários resistiam. No portal da imigração, uma camada invisível engolia todos os cliques, a seta de voltar nunca ficava desativada, células de preenchimento pareciam dias livres e a sessão caía ao recarregar; por isso o monitor lê os próprios dados do portal para saber em que mês está. A sessão do consulado expirava a cada oito horas, então esse monitor faz login de novo pelo gerenciador de senhas do navegador, sem nenhuma credencial nos scripts.',
      result: 'O monitor do consulado fez 6.022 verificações em cerca de três semanas; algumas vagas duraram menos de cinco minutos. Quatro agendamentos foram feitos. Não há capturas porque as páginas têm dados pessoais.',
    },
    ar: {
      problem: 'المواعيد على بوابات حجز حكومية (قنصلية في القاهرة قبل انتقالي، ثم الهجرة في البرازيل) كانت تظهر بشكل عشوائي وتختفي خلال دقائق، ومتابعتها يدويًا ليلًا ونهارًا لم تكن ممكنة.',
      approach: 'مراقبات للقراءة فقط تشغّل متصفحًا حقيقيًا عبر Playwright، وتفحص التقويم على فترات، وتطلق تنبيهًا عالي الأولوية على الهاتف لحظة ظهور موعد أفضل، مع قناة أهدأ للتحديثات العادية. والحجز يقوم به إنسان دائمًا: الأداة لا تحل اختبارات CAPTCHA أبدًا.',
      hard: 'التقاويم كانت تقاوم. في بوابة الهجرة كانت طبقة غير مرئية تبتلع كل نقرة، وسهم الرجوع لا يتعطل أبدًا، وخانات فارغة تبدو كأيام متاحة، والجلسة تنتهي عند التحديث، لذلك يقرأ المراقب بيانات البوابة نفسها ليعرف الشهر الذي يقف عليه. أما جلسة القنصلية فكانت تنتهي كل ثماني ساعات، فيعيد ذلك المراقب تسجيل الدخول عبر مدير كلمات المرور في المتصفح، ولا توجد أي بيانات دخول داخل السكربتات.',
      result: 'أجرى مراقب القنصلية 6,022 فحصًا في نحو ثلاثة أسابيع، وبعض المواعيد لم يبقَ أكثر من خمس دقائق. وتم حجز أربعة مواعيد. ولا توجد صور لأن الصفحات تحتوي على بيانات شخصية.',
    },
  },

  'whatsapp-store-bot': {
    en: {
      problem: "A women's clothing shop answered the same WhatsApp questions all day: prices, sizes, what's new. Orders and announcements to customers were handled by hand.",
      approach: 'A WhatsApp bot answers customers with menus and the catalog and records orders, while a web dashboard manages products, customers, orders and broadcast messages to subscribed customers.',
      hard: 'It had to run on an ordinary shop PC. A pure-JavaScript SQLite build means nothing has to be compiled on install, and the dashboard shows the WhatsApp connection status and the login QR code in the browser.',
      result: 'Delivered to the shop. The public repository contains no customer data, and the screenshots use demo data.',
    },
    'pt-BR': {
      problem: 'Uma loja de roupas femininas respondia às mesmas perguntas no WhatsApp o dia todo: preços, tamanhos, novidades. Pedidos e avisos para clientes eram feitos à mão.',
      approach: 'Um bot de WhatsApp atende os clientes com menus e o catálogo e registra pedidos, enquanto um painel web gerencia produtos, clientes, pedidos e mensagens em massa para os clientes inscritos.',
      hard: 'Precisava rodar num computador comum da loja. Um SQLite feito só em JavaScript dispensa compilação na instalação, e o painel mostra o status da conexão com o WhatsApp e o QR code de login no navegador.',
      result: 'Entregue à loja. O repositório público não tem dados de clientes, e as capturas usam dados de demonstração.',
    },
    ar: {
      problem: 'محل ملابس نسائية كان يرد على نفس أسئلة واتساب طوال اليوم: الأسعار، والمقاسات، والجديد. والطلبات والإعلانات للعملاء كانت تتم يدويًا.',
      approach: 'بوت واتساب يرد على العملاء بالقوائم والكتالوج ويسجّل الطلبات، ولوحة تحكم على الويب لإدارة المنتجات والعملاء والطلبات والرسائل الجماعية للعملاء المشتركين.',
      hard: 'كان لا بد أن يعمل على كمبيوتر عادي في المحل. لذلك استخدمت نسخة من SQLite مكتوبة بـ JavaScript فقط، فلا يحتاج التثبيت إلى أي تجميع، ولوحة التحكم تعرض حالة اتصال واتساب ورمز QR لتسجيل الدخول داخل المتصفح.',
      result: 'تم تسليمه للمحل. والمستودع العام لا يحتوي على أي بيانات عملاء، والصور ببيانات تجريبية.',
    },
  },

  stitchhub: {
    en: {
      problem: 'An embroidery workshop making church vestments kept its clients, measurements and deadlines in a paper notebook. Measurements differ for a deacon, a priest and a bishop, and orders were easy to lose track of.',
      approach: "One Node.js + SQLite API serves two clients: a web dashboard and a Flutter Android app. Measurement forms change with the client's rank, each church keeps its curtains and their sizes, and orders move from new to in progress, ready and delivered, with deadlines.",
      hard: 'The owner often has no signal. The Android app keeps a local copy of everything, works offline and syncs when the connection returns, and it updates itself from the server without the Play Store.',
      result: 'Delivered to the workshop as a web dashboard and an Android app, in Arabic and English. The screenshots use demo data.',
    },
    'pt-BR': {
      problem: 'Um ateliê que borda vestes litúrgicas guardava clientes, medidas e prazos num caderno de papel. As medidas mudam para um diácono, um padre e um bispo, e era fácil perder o controle dos pedidos.',
      approach: 'Uma única API em Node.js + SQLite atende dois aplicativos: um painel web e um app Android em Flutter. Os formulários de medidas mudam conforme o grau hierárquico do cliente (diácono, padre, bispo), cada igreja guarda suas cortinas e tamanhos, e os pedidos passam pelos status Novo, Em andamento, Pronto e Entregue, com prazos.',
      hard: 'O dono muitas vezes fica sem sinal. O app Android guarda uma cópia local de tudo, funciona offline e sincroniza quando a conexão volta, além de se atualizar pelo servidor, sem a Play Store.',
      result: 'Entregue ao ateliê como painel web e app Android, em árabe e inglês. As capturas usam dados de demonstração.',
    },
    ar: {
      problem: 'ورشة تطريز للملابس الكنسية كانت تحفظ عملاءها ومقاساتهم ومواعيد التسليم في دفتر ورقي. والمقاسات تختلف بين الشماس والكاهن والأسقف، وكان من السهل أن يضيع تتبع الطلبات.',
      approach: 'واجهة API واحدة بـ Node.js و SQLite تخدم تطبيقين: لوحة تحكم على الويب وتطبيق أندرويد بـ Flutter. نموذج المقاسات يتغير حسب رتبة العميل، وكل كنيسة تحتفظ بستائرها ومقاساتها، والطلبات تنتقل من «جديد» إلى «قيد التنفيذ» ثم «جاهز» ثم «تم التسليم»، مع مواعيد نهائية.',
      hard: 'صاحب الورشة كثيرًا ما يكون بلا إنترنت. لذلك يحتفظ تطبيق أندرويد بنسخة محلية من كل شيء، ويعمل دون اتصال، ويزامن البيانات عند عودة الإنترنت، ويحدّث نفسه من الخادم دون المرور بـ Google Play.',
      result: 'تم تسليمه للورشة كلوحة تحكم على الويب وتطبيق أندرويد، بالعربية والإنجليزية. والصور ببيانات تجريبية.',
    },
  },

  'structure-erp': {
    en: {
      problem: 'Small and mid-size companies run HR, finance, sales and operations in separate spreadsheets and tools. The goal: one system where each company only switches on the modules it needs.',
      approach: "Laravel with Livewire and Bootstrap, multi-tenancy that isolates each company's data, role-based permissions per module, and modules for HR and payroll, finance and accounting reports, CRM, inventory, procurement, manufacturing, maintenance, fleet, projects and documents. Arabic right-to-left and English throughout.",
      hard: 'Keeping twelve business areas consistent: 84 models organised by domain, one permission system shared by every module, and demo data that seeds a complete company so every screen can be tested.',
      result: 'In development. The core modules run end to end on demo data (the screenshots are from the running app); some screens are still being fixed.',
    },
    'pt-BR': {
      problem: 'Pequenas e médias empresas cuidam de RH, finanças, vendas e operações em planilhas e ferramentas separadas. O objetivo: um sistema só, em que cada empresa ativa apenas os módulos de que precisa.',
      approach: 'Laravel com Livewire e Bootstrap, multiempresa com os dados de cada empresa isolados, permissões por função em cada módulo, e módulos de RH e folha, finanças e relatórios contábeis, CRM, estoque, compras, produção, manutenção, frota, projetos e documentos. Árabe da direita para a esquerda e inglês em tudo.',
      hard: 'Manter doze áreas de negócio consistentes: 84 modelos organizados por domínio, um único sistema de permissões para todos os módulos e dados de demonstração que criam uma empresa completa para testar cada tela.',
      result: 'Em desenvolvimento. Os módulos principais funcionam de ponta a ponta com dados de demonstração (as capturas são do app rodando); algumas telas ainda estão sendo corrigidas.',
    },
    ar: {
      problem: 'الشركات الصغيرة والمتوسطة تدير الموارد البشرية والمالية والمبيعات والعمليات في جداول وأدوات منفصلة. والهدف: نظام واحد تفعّل فيه كل شركة الوحدات التي تحتاجها فقط.',
      approach: 'Laravel مع Livewire و Bootstrap، ونظام متعدد الشركات يعزل بيانات كل شركة، وصلاحيات حسب الأدوار في كل وحدة، ووحدات للموارد البشرية والرواتب، والمالية والتقارير المحاسبية، وإدارة العملاء، والمخزون، والمشتريات، والتصنيع، والصيانة، والأسطول، والمشاريع، والمستندات. مع دعم العربية (من اليمين لليسار) والإنجليزية في كل الشاشات.',
      hard: 'الحفاظ على اتساق اثني عشر مجالًا إداريًا: 84 نموذجًا للبيانات منظّمة حسب المجال، ونظام صلاحيات واحد مشترك بين كل الوحدات، وبيانات تجريبية تنشئ شركة كاملة لاختبار كل شاشة.',
      result: 'قيد التطوير. الوحدات الأساسية تعمل من البداية للنهاية على بيانات تجريبية (والصور من النظام وهو يعمل)، وبعض الشاشات ما زالت قيد الإصلاح.',
    },
  },

  'lu-flow': {
    en: {
      problem: 'I wanted a calm puzzle game that both kids and adults enjoy, with a character instead of plain dots.',
      approach: 'A Flutter game with seven modes, including classic endless levels, kids, letters and numbers, a 30-second speed run, perfect (one mistake ends it) and memory. Levels come from a deterministic generator, so a level number is always the same puzzle.',
      hard: 'Some phones showed a black screen on launch. The cause was a full disk: a defensive try/catch around storage turned a recoverable error into a crash, and an in-memory fallback fixed it. Later I moved the ads from one network to another without disrupting live players.',
      result: 'Live on Google Play and kept up to date with Android 16 (target SDK 36) and Billing 8.',
    },
    'pt-BR': {
      problem: 'Eu queria um jogo de quebra-cabeça tranquilo, que agradasse a crianças e adultos, com uma personagem em vez de simples pontos.',
      approach: 'Um jogo em Flutter com sete modos, entre eles fases clássicas infinitas, infantil, letras e números, corrida de 30 segundos, perfeito (um erro encerra) e memória. As fases vêm de um gerador determinístico, então um número de fase é sempre o mesmo desafio.',
      hard: 'Alguns celulares mostravam a tela preta ao abrir. A causa era o armazenamento cheio: um try/catch defensivo transformava um erro recuperável em travamento, e um modo de reserva em memória resolveu. Depois troquei a rede de anúncios sem atrapalhar quem já jogava.',
      result: 'No ar no Google Play e atualizado para o Android 16 (target SDK 36) e o Billing 8.',
    },
    ar: {
      problem: 'أردت لعبة ألغاز هادئة يستمتع بها الأطفال والكبار، بشخصية بدلًا من نقاط عادية.',
      approach: 'لعبة Flutter فيها سبعة أنماط، منها المراحل الكلاسيكية بلا نهاية، والأطفال، والحروف والأرقام، وسباق 30 ثانية، والمثالي (خطأ واحد ينهي اللعب)، والذاكرة. والمراحل تأتي من مولّد حتمي، فرقم المرحلة يعطي دائمًا نفس اللغز.',
      hard: 'بعض الهواتف كانت تظهر شاشة سوداء عند الفتح. السبب كان امتلاء مساحة التخزين: جملة try/catch احتياطية حوّلت خطأً يمكن تجاوزه إلى توقف كامل، وحل المشكلة بديل مؤقت في الذاكرة. ولاحقًا نقلت الإعلانات من شبكة إلى أخرى دون أن يتأثر اللاعبون.',
      result: 'منشورة على Google Play ومحدّثة لأندرويد 16 (target SDK 36) و Billing 8.',
    },
  },

  'lu-peek': {
    en: {
      problem: 'Young children learn shapes and words best through play, and they need a game with big, clear pictures and very little text.',
      approach: 'Four learning worlds (ABC and words, numbers, shapes, pictures) and a short daily lesson. Kids drag letters into place, count objects, find the letter they hear, spot what comes next and sort pictures into the right bin, with big tap targets, sound and very little text. Each child has a profile with an avatar, stars and coins.',
      hard: "Shipping the Android 16 (target SDK 36) and Billing 8 upgrade before Google Play's August 2026 deadline, together with four other apps.",
      result: 'Live on Google Play.',
    },
    'pt-BR': {
      problem: 'Crianças pequenas aprendem formas e palavras melhor brincando, e precisam de um jogo com imagens grandes e claras e pouquíssimo texto.',
      approach: 'Quatro mundos de aprendizado (ABC e palavras, números, formas, imagens) e uma lição diária curta. A criança arrasta letras para o lugar, conta objetos, encontra a letra que ouve, descobre o que vem depois e separa imagens no lugar certo, com botões grandes, som e pouquíssimo texto. Cada criança tem um perfil com avatar, estrelas e moedas.',
      hard: 'Publicar a atualização para o Android 16 (target SDK 36) e o Billing 8 antes do prazo do Google Play em agosto de 2026, junto com outros quatro apps.',
      result: 'No ar no Google Play.',
    },
    ar: {
      problem: 'الأطفال الصغار يتعلمون الأشكال والكلمات أفضل باللعب، ويحتاجون إلى لعبة بصور كبيرة وواضحة ونص قليل جدًا.',
      approach: 'أربعة عوالم تعليمية (الحروف والكلمات، والأرقام، والأشكال، والصور) ودرس يومي قصير. يسحب الطفل الحروف إلى مكانها، ويعدّ الأشياء، ويجد الحرف الذي يسمعه، ويكتشف ما يأتي بعد ذلك، ويصنّف الصور في المكان الصحيح، بأزرار كبيرة وصوت ونص قليل جدًا. ولكل طفل ملف فيه صورة رمزية ونجوم وعملات.',
      hard: 'نشر تحديث أندرويد 16 (target SDK 36) و Billing 8 قبل موعد Google Play النهائي في أغسطس 2026، مع أربعة تطبيقات أخرى.',
      result: 'منشورة على Google Play.',
    },
  },

  'lu-aqua': {
    en: {
      problem: 'Most water reminders are easy to ignore, and many ask for an account and a server for something this simple.',
      approach: 'A fully offline Flutter app: an adaptive daily goal, reminders that respect sleep and Ramadan fasting hours, charts, streaks, challenges, 170+ drink types and home-screen widgets. Your data stays on the phone.',
      hard: 'Reminders have to ring like an alarm even on phones that kill background apps. The alarm channel is created natively in Kotlin with alarm audio, and a small foreground service keeps scheduled reminders alive.',
      result: 'Live on Google Play.',
    },
    'pt-BR': {
      problem: 'A maioria dos lembretes de beber água é fácil de ignorar, e muitos pedem conta e servidor para algo tão simples.',
      approach: 'Um app em Flutter totalmente offline: meta diária adaptável, lembretes que respeitam o sono e as horas de jejum do Ramadã, gráficos, sequências, desafios, mais de 170 tipos de bebida e widgets na tela inicial. Seus dados ficam no celular.',
      hard: 'Os lembretes precisam tocar como um alarme, mesmo em celulares que fecham apps em segundo plano. O canal de alarme é criado em Kotlin com áudio de alarme, e um pequeno serviço em primeiro plano mantém os lembretes agendados.',
      result: 'No ar no Google Play.',
    },
    ar: {
      problem: 'من السهل تجاهل معظم تطبيقات التذكير بشرب الماء، وكثير منها يطلب حسابًا وخادمًا لشيء بهذه البساطة.',
      approach: 'تطبيق Flutter يعمل دون إنترنت بالكامل: هدف يومي يتكيّف معك، وتذكيرات تراعي النوم وساعات الصيام في رمضان، ورسوم بيانية، وسلاسل أيام، وتحديات، وأكثر من 170 نوع مشروب، وأدوات للشاشة الرئيسية. وبياناتك تبقى على الهاتف.',
      hard: 'التذكير لا بد أن يرن كالمنبّه حتى على الهواتف التي تغلق التطبيقات في الخلفية. لذلك تُنشأ قناة التنبيه مباشرة بـ Kotlin بصوت المنبّه، وتحافظ خدمة صغيرة تعمل في المقدمة على التذكيرات المجدولة.',
      result: 'منشور على Google Play.',
    },
  },

  'lu-prism': {
    en: {
      problem: 'I wanted a daily puzzle that everyone shares, in the spirit of word-of-the-day games, but built on logic and simple maths with colours.',
      approach: "Three modes: Code (work out each colour's hidden value from the row and column totals), Merge (slide and merge colours up the spectrum) and Mix (a 60-second arcade). The daily puzzle comes from the date, so everyone gets the same one.",
      hard: 'Guaranteeing exactly one solution. The generator searches every combination with pruning and only keeps puzzles that solve one way. The game engines are pure Dart and covered by automated tests.',
      result: 'In closed testing on Google Play, before the public release.',
    },
    'pt-BR': {
      problem: 'Eu queria um desafio diário compartilhado por todos, no espírito dos jogos de palavra do dia, mas baseado em lógica e matemática simples com cores.',
      approach: 'Três modos: Código (descobrir o valor escondido de cada cor pelas somas das linhas e colunas), Fusão (deslizar e juntar cores ao longo do espectro) e Mistura (um arcade de 60 segundos). O desafio diário vem da data, então todo mundo recebe o mesmo.',
      hard: 'Garantir exatamente uma solução. O gerador testa todas as combinações com poda e só mantém desafios com uma única resposta. Os motores do jogo são Dart puro e cobertos por testes automáticos.',
      result: 'Em teste fechado no Google Play, antes do lançamento público.',
    },
    ar: {
      problem: 'أردت لغزًا يوميًا يتشاركه الجميع، على طريقة ألعاب كلمة اليوم، لكن مبنيًا على المنطق والحساب البسيط بالألوان.',
      approach: 'ثلاثة أنماط: الكود (استنتاج القيمة المخفية لكل لون من مجاميع الصفوف والأعمدة)، والدمج (سحب الألوان ودمجها على طول الطيف)، والمزج (لعبة سريعة مدتها 60 ثانية). واللغز اليومي يُبنى من التاريخ، فيحصل الجميع على نفس اللغز.',
      hard: 'ضمان حل واحد فقط. المولّد يبحث في كل الاحتمالات مع استبعاد الفروع المستحيلة، ولا يحتفظ إلا بالألغاز التي لها حل واحد. ومحركات اللعبة مكتوبة بـ Dart خالص ومغطاة باختبارات آلية.',
      result: 'في الاختبار المغلق على Google Play، قبل الإطلاق العام.',
    },
  },

  'lu-lens': {
    en: {
      problem: 'Living in a new language means apps, chats and voice notes you cannot read or understand, and copying text into a translator every time is slow.',
      approach: 'It started as Gesr, a web translator, and grew into an app that works on top of every other app. Flutter is only the control panel; the real work runs in native Kotlin services. The screen is captured, text is recognised on the device, and each translation is drawn over its original line in matching colours. Audio playing in other apps can be captioned live.',
      hard: '"Sometimes it translates nothing." The cause was a timer, not the logic: every tap waited up to 12 seconds for an offline model the online path did not need. Warming it in the background cut responses to under 2 seconds, and on-screen counters now show which stage fails.',
      result: 'In testing, not released yet.',
    },
    'pt-BR': {
      problem: 'Viver num idioma novo significa apps, conversas e áudios que você não consegue ler nem entender, e copiar o texto para um tradutor toda vez é lento.',
      approach: 'Começou como o Gesr, um tradutor web, e cresceu até virar um app que funciona por cima de qualquer outro. O Flutter é só o painel de controle; o trabalho de verdade roda em serviços nativos em Kotlin. A tela é capturada, o texto é reconhecido no próprio aparelho e cada tradução é desenhada sobre a linha original, com as mesmas cores. O áudio tocando em outros apps pode ganhar legendas ao vivo.',
      hard: '"Às vezes não traduz nada." A causa era um tempo de espera, não a lógica: cada toque esperava até 12 segundos por um modelo offline de que o caminho online não precisava. Carregá-lo em segundo plano reduziu a resposta para menos de 2 segundos, e contadores na tela agora mostram qual etapa falha.',
      result: 'Em testes, ainda não lançado.',
    },
    ar: {
      problem: 'العيش بلغة جديدة يعني تطبيقات ومحادثات ورسائل صوتية لا تستطيع قراءتها أو فهمها، ونسخ النص إلى مترجم في كل مرة عمل بطيء.',
      approach: 'بدأ باسم «جسر»، مترجمًا على الويب، ثم تطوّر إلى تطبيق يعمل فوق أي تطبيق آخر. و Flutter هنا مجرد لوحة تحكم، والعمل الحقيقي يتم في خدمات أصلية بـ Kotlin. تُلتقط الشاشة، ويُقرأ النص على الجهاز نفسه، وتُرسم كل ترجمة فوق سطرها الأصلي بنفس الألوان. ويمكن أيضًا كتابة ترجمة فورية للصوت الذي يعمل في أي تطبيق آخر.',
      hard: '«أحيانًا لا يترجم شيئًا». السبب كان مؤقتًا زمنيًا لا خطأً في المنطق: كل ضغطة كانت تنتظر حتى 12 ثانية نموذجًا يعمل دون إنترنت لا يحتاجه المسار المتصل. تحميله في الخلفية خفّض الاستجابة إلى أقل من ثانيتين، وعدّادات على الشاشة تبيّن الآن أي مرحلة تتعطل.',
      result: 'تحت التجربة، ولم يُطلق بعد.',
    },
  },

  'distributed-automation': {
    en: {
      problem: 'Long, repetitive web workflows have to run for hours, on more than one machine, and survive crashes without starting over.',
      approach: 'A central dashboard (Express and WebSocket) drives a fleet of agents, one per machine. Agents connect outbound, so worker machines need no open ports. One task pipeline runs over either a direct HTTP client or a Playwright browser, chosen by configuration; the HTTP path uses roughly a tenth of the CPU and memory of a browser.',
      hard: 'Reliability over many hours: per-step checkpoints let a run resume exactly where it stopped, every attempt is classified so a temporary failure is not mistaken for a permanent one, and agents report CPU, memory and leaked processes.',
      result: 'In private use. The public repository documents the architecture only.',
    },
    'pt-BR': {
      problem: 'Fluxos web longos e repetitivos precisam rodar por horas, em mais de uma máquina, e sobreviver a falhas sem começar do zero.',
      approach: 'Um painel central (Express e WebSocket) controla uma frota de agentes, um por máquina. Os agentes se conectam de dentro para fora, então as máquinas não precisam de portas abertas. Um único fluxo de tarefas roda por um cliente HTTP direto ou por um navegador Playwright, escolhido na configuração; o caminho HTTP usa cerca de um décimo da CPU e da memória de um navegador.',
      hard: 'Confiabilidade por muitas horas: pontos de controle por etapa permitem retomar exatamente de onde parou, cada tentativa é classificada para que uma falha temporária não seja confundida com uma permanente, e os agentes informam CPU, memória e processos órfãos.',
      result: 'Em uso privado. O repositório público documenta apenas a arquitetura.',
    },
    ar: {
      problem: 'سير عمل طويل ومتكرر على الويب لا بد أن يعمل لساعات، على أكثر من جهاز، وأن يصمد أمام الأعطال دون أن يبدأ من الصفر.',
      approach: 'لوحة تحكم مركزية (Express و WebSocket) تدير أسطولًا من الوكلاء، وكيل لكل جهاز. الوكلاء يتصلون من الداخل إلى الخارج، فلا تحتاج الأجهزة إلى فتح أي منافذ. وخط مهام واحد يعمل إما عبر عميل HTTP مباشر أو عبر متصفح Playwright حسب الإعدادات، ومسار HTTP يستهلك نحو عُشر المعالج والذاكرة مقارنة بالمتصفح.',
      hard: 'الاعتمادية لساعات طويلة: نقاط حفظ لكل خطوة تسمح بالاستكمال من نفس النقطة بالضبط، وتصنيف كل محاولة حتى لا يُعامَل العطل المؤقت كعطل دائم، والوكلاء يرسلون تقارير المعالج والذاكرة والعمليات العالقة.',
      result: 'قيد الاستخدام الخاص. والمستودع العام يشرح البنية فقط.',
    },
  },

  'kids-video-factory': {
    en: {
      problem: 'Making a short animated video by hand takes days of drawing, recording and editing.',
      approach: 'A script file goes in and a finished video comes out: vector character rigs drawn with Skia, narration whose word timings drive the mouth shapes, captions and ffmpeg assembly, all running locally at no per-video cost. Characters come from an image-generation model and stay consistent between scenes.',
      hard: "Automatic quality checks raised 193 false alarms until the checker was given the script's scene structure; now it flags real problems only.",
      result: 'A working internal tool, not public.',
    },
    'pt-BR': {
      problem: 'Fazer um vídeo animado curto à mão leva dias de desenho, gravação e edição.',
      approach: 'Entra um arquivo de roteiro e sai um vídeo pronto: personagens vetoriais articulados desenhados com Skia, narração em que o tempo de cada palavra comanda os movimentos da boca, legendas e montagem com ffmpeg, tudo rodando localmente, sem custo por vídeo. Os personagens vêm de um modelo de geração de imagens e ficam consistentes entre as cenas.',
      hard: 'A verificação automática de qualidade gerava 193 alarmes falsos, até receber a estrutura de cenas do roteiro; agora só aponta problemas reais.',
      result: 'Uma ferramenta interna que funciona, não pública.',
    },
    ar: {
      problem: 'صناعة فيديو متحرك قصير يدويًا تستغرق أيامًا من الرسم والتسجيل والمونتاج.',
      approach: 'يدخل سيناريو مكتوب ويخرج فيديو جاهز: شخصيات مرسومة بالمتجهات ومتحركة بـ Skia، وتعليق صوتي يتحكم توقيت كل كلمة فيه في حركة الفم، ونصوص مكتوبة على الشاشة، وتجميع بـ ffmpeg، وكل ذلك يعمل محليًا دون أي تكلفة لكل فيديو. والشخصيات أنشأها نموذج لتوليد الصور، وتظل متطابقة بين المشاهد.',
      hard: 'الفحص الآلي للجودة كان يطلق 193 إنذارًا خاطئًا، حتى أعطيته بنية المشاهد من السيناريو، فأصبح لا ينبّه إلا للمشكلات الحقيقية.',
      result: 'أداة داخلية تعمل، وليست عامة.',
    },
  },

  wordhunt: {
    en: { approach: 'A Flutter crossword game with themed categories, a coin economy for hints and both English and Arabic boards.', result: 'Complete source on GitHub; not published on Google Play.' },
    'pt-BR': { approach: 'Um jogo de palavras cruzadas em Flutter, com categorias temáticas, moedas para dicas e tabuleiros em inglês e árabe.', result: 'Código completo no GitHub; não publicado no Google Play.' },
    ar: { approach: 'لعبة كلمات متقاطعة بـ Flutter، بفئات حسب الموضوع، وعملات للتلميحات، وألواح بالإنجليزية والعربية.', result: 'الكود كاملًا على GitHub، ولم تُنشر على Google Play.' },
  },
  'lu-word': {
    en: { approach: 'A Flutter word game with a daily puzzle, unlimited practice and no internet needed.', result: 'Complete source on GitHub; not published on Google Play.' },
    'pt-BR': { approach: 'Um jogo de palavras em Flutter, com desafio diário, treino ilimitado e sem precisar de internet.', result: 'Código completo no GitHub; não publicado no Google Play.' },
    ar: { approach: 'لعبة كلمات بـ Flutter، فيها لغز يومي وتدريب بلا حدود، ولا تحتاج إلى إنترنت.', result: 'الكود كاملًا على GitHub، ولم تُنشر على Google Play.' },
  },
  'lu-block': {
    en: { approach: 'A Flutter block puzzle on a 10×10 board, with power blocks, a fever mode, levels and achievements.', result: 'Complete source on GitHub; not published on Google Play.' },
    'pt-BR': { approach: 'Um quebra-cabeça de blocos em Flutter num tabuleiro 10×10, com blocos especiais, modo fever, fases e conquistas.', result: 'Código completo no GitHub; não publicado no Google Play.' },
    ar: { approach: 'لغز مكعبات بـ Flutter على لوحة 10×10، بمكعبات خاصة ووضع حماس ومراحل وإنجازات.', result: 'الكود كاملًا على GitHub، ولم تُنشر على Google Play.' },
  },
};
