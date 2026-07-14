// Centralized copy, metadata and locale-specific document links.
const portfolioTranslations = {
  "pt-BR": {
    meta: {
      title: "Carlos Gabriel | Analista de Desenvolvimento de Sistemas Jr.",
      description: "Portfólio de Carlos Gabriel, Analista de Desenvolvimento de Sistemas Jr. e Desenvolvedor Full Stack Jr. em São Paulo.",
      socialDescription: "Desenvolvimento full stack, produto, infraestrutura, observabilidade e AppSec.",
      locale: "pt_BR",
      imageAlt: "Carlos Gabriel, Analista de Desenvolvimento de Sistemas Jr.",
      jobTitle: "Analista de Desenvolvimento de Sistemas Jr."
    },
    a11y: { skip: "Pular para o conteúdo", progress: "Progresso de leitura", menu: "Menu", primaryNav: "Navegação principal", openMenu: "Abrir menu", closeMenu: "Fechar menu", language: "Seleção de idioma", sectionNav: "Navegação por seções", professionalLinks: "Links profissionais" },
    nav: { home: "Início", projects: "Projetos", experience: "Experiência", skills: "Competências", about: "Sobre", education: "Formação", contact: "Contato" },
    theme: { dark: "Escuro", light: "Claro", toDark: "Alternar para o tema escuro", toLight: "Alternar para o tema claro" },
    cta: { projects: "Ver projetos", resume: "Baixar currículo", resumeShort: "Currículo", email: "E-mail" },
    intro: { label: "Abrindo portfólio", skip: "Pular", command: "open carlos-gabriel --profile=full-stack", line1: "perfil: analista de desenvolvimento jr.", line2: "escopo: produto · código · operação", ready: "portfólio pronto" },
    hero: { label: "Apresentação", availability: "Disponível para oportunidades júnior", role: "Analista de Desenvolvimento de Sistemas Jr. <span aria-hidden=\"true\">/</span> Desenvolvedor Full Stack Jr.", summary: "Desenvolvo produtos e sistemas web conectando interface, backend, dados e operação. Minha experiência também passa por UX/UI, Linux, observabilidade e segurança de aplicações.", detailsLabel: "Informações profissionais", location: "São Paulo, SP", workMode: "Presencial · híbrido · remoto" },
    projects: {
      label: "Projetos selecionados", title: "Entregas que mostram<br>como eu <em>trabalho</em>.", intro: "Do sistema de gestão full stack ao aplicativo mobile local-first: contexto, participação e estado real de cada entrega.",
      problem: "Contexto", role: "Minha participação", delivery: "Entrega", product: "Produto", web: "Presença web", stack: "Tecnologias do projeto", viewLive: "Abrir projeto <span aria-hidden=\"true\">↗</span>", viewCode: "Ver código <span aria-hidden=\"true\">↗</span>",
      toca: { status: "Em homologação", type: "Sistema de gestão · projeto freelance", summary: "Sistema para centralizar a operação de uma clínica de podologia, da agenda e prontuários ao estoque, financeiro e relatórios.", context: "Informações operacionais distribuídas entre diferentes rotinas.", role: "Concepção, arquitetura e desenvolvimento full stack.", delivery: "Cadastros centrais, agenda inicial, autenticação, RBAC, auditoria e validações client/server.", privacy: "Ambiente privado de homologação. O link não é publicado para proteger dados e acessos do cliente." },
      clarium: { status: "Aplicação publicada", type: "Finanças pessoais · projeto autoral", summary: "Aplicativo local-first para registrar receitas, gastos, compras no cartão, planejamento mensal e indicadores sem depender de servidor.", product: "Experiência mobile com dados locais e navegação estruturada.", web: "Landing multilíngue publicada para apresentar recursos e distribuir o APK.", previewLabel: "Abrir aplicação publicada do Clarium", imageAlt: "Página do Clarium com telas do aplicativo de finanças pessoais" }
    },
    experience: {
      label: "Experiência profissional", title: "Evolução com contexto<br>de <em>produto e operação</em>.", companyPeriod: "dez 2025 — atual", location: "Santo André, SP", progression: "Progressão de estágio para Analista Jr. em junho de 2026.",
      current: { period: "jun 2026 — atual", role: "Analista de Desenvolvimento de Sistemas Jr.", mode: "Presencial", summary: "Atuação na evolução de plataforma SaaS, interfaces web e sistemas internos, conectando desenvolvimento a infraestrutura, observabilidade e AppSec.", items: ["Desenvolvimento e manutenção com Python, JavaScript/TypeScript e React.", "Redesenho da interface do XGuardian e desenvolvimento de sua página institucional.", "Administração de servidores Linux, troubleshooting e virtualização com Proxmox.", "Monitoramento com Zabbix, Grafana e Prometheus.", "Apoio a práticas de AppSec e Supply Chain Security com Sonatype Nexus e XGuardian."] },
      intern: { period: "dez 2025 — jun 2026", role: "Estagiário de Desenvolvimento de Sistemas", mode: "Presencial", summary: "Experiência inicial abrangendo desenvolvimento web, suporte técnico, infraestrutura, observabilidade, segurança de aplicações e documentação.", items: ["Recuperação de notebooks e ativos legados e organização do ambiente de servidores.", "Apoio à administração do Proxmox e troubleshooting de estações e serviços.", "Implementação e acompanhamento de monitoramento com Zabbix e Grafana.", "Implantação interna do SysPass e produção de documentação e registros técnicos."] }
    },
    expertise: {
      label: "Competências", title: "Uma base generalista,<br>organizada por <em>entrega</em>.", intro: "Tecnologias e práticas presentes nas experiências, projetos e formação profissional.",
      development: { title: "Desenvolvimento", description: "Interfaces, aplicações web, APIs e desenvolvimento mobile." },
      data: { title: "Dados e aplicações", description: "Persistência, autenticação e controle de acesso em produtos.", auth: "Autenticação · RBAC", audit: "Logs de auditoria" },
      operations: { title: "Operações e confiabilidade", description: "Ambientes, deploy, monitoramento e troubleshooting.", docker: "Docker básico" },
      product: { title: "Engenharia e produto", description: "Qualidade de entrega, experiência e evolução sustentável.", tests: "Testes de software", docs: "Documentação técnica" }
    },
    about: { label: "Sobre", title: "Código é uma parte.<br>O <em>sistema inteiro</em> importa.", lead: "Sou Analista de Desenvolvimento de Sistemas Jr. com perfil generalista e experiência prática na evolução de produto SaaS, interfaces web e sistemas internos.", p1: "Gosto de entender como interface, backend, dados e infraestrutura se conectam. Essa visão orienta meu trabalho do protótipo e da implementação até a documentação, o monitoramento e a operação.", p2: "Minha trajetória combina formação em desenvolvimento de sistemas, projetos full stack e mobile e uma rotina profissional que também envolve Linux, observabilidade e segurança de aplicações.", quote: "Busco construir soluções claras para quem usa, sustentáveis para quem mantém e observáveis para quem opera." },
    education: {
      label: "Formação e credenciais", title: "Base técnica em<br><em>evolução contínua</em>.", academic: "Formação acadêmica", certifications: "Certificações", inProgress: "Em andamento", completed: "Concluído",
      unicid: { course: "Tecnologia em Análise e Desenvolvimento de Sistemas", period: "jun 2026 — previsão jun 2027" },
      senai: { course: "Técnico em Desenvolvimento de Sistemas", period: "jul 2024 — jun 2026" },
      proz: { course: "Técnico em Informática para Internet", period: "jan 2023 — dez 2024" },
      sfpc: { date: "CertiProf · out 2024 — out 2027" }, credly: "Ver perfil no Credly <span aria-hidden=\"true\">↗</span>", languages: "Idiomas", english: "Inglês intermediário", englishDetail: "B2 autodeclarado, em aperfeiçoamento com aulas particulares."
    },
    contact: { label: "Contato", title: "Procurando um profissional<br>júnior que pensa <em>além da tela</em>?", description: "Estou disponível para oportunidades em desenvolvimento de sistemas, full stack e software, em São Paulo ou remotamente.", phone: "Telefone", location: "São Paulo, SP · presencial, híbrido ou remoto" },
    footer: { copy: "© 2026 Carlos Gabriel Gomes Luz", top: "Voltar ao topo" }
  },

  en: {
    meta: { title: "Carlos Gabriel | Junior Systems Development Analyst", description: "Carlos Gabriel's portfolio — Junior Systems Development Analyst and Junior Full-Stack Developer based in São Paulo, Brazil.", socialDescription: "Full-stack development, product, infrastructure, observability, and AppSec.", locale: "en_US", imageAlt: "Carlos Gabriel, Junior Systems Development Analyst", jobTitle: "Junior Systems Development Analyst" },
    a11y: { skip: "Skip to content", progress: "Reading progress", menu: "Menu", primaryNav: "Primary navigation", openMenu: "Open menu", closeMenu: "Close menu", language: "Language selector", sectionNav: "Section navigation", professionalLinks: "Professional links" },
    nav: { home: "Home", projects: "Projects", experience: "Experience", skills: "Skills", about: "About", education: "Education", contact: "Contact" },
    theme: { dark: "Dark", light: "Light", toDark: "Switch to dark theme", toLight: "Switch to light theme" },
    cta: { projects: "View projects", resume: "Download resume", resumeShort: "Resume", email: "Email" },
    intro: { label: "Opening portfolio", skip: "Skip", command: "open carlos-gabriel --profile=full-stack", line1: "profile: junior systems development analyst", line2: "scope: product · code · operations", ready: "portfolio ready" },
    hero: { label: "Introduction", availability: "Open to junior opportunities", role: "Junior Systems Development Analyst <span aria-hidden=\"true\">/</span> Junior Full-Stack Developer", summary: "I build web products and systems by connecting interfaces, backend, data, and operations. My experience also spans UX/UI, Linux, observability, and application security.", detailsLabel: "Professional details", location: "São Paulo, Brazil", workMode: "On-site · hybrid · remote" },
    projects: {
      label: "Selected projects", title: "Work that shows<br>how I <em>build</em>.", intro: "From a full-stack management system to a local-first mobile app: context, ownership, and the actual stage of each delivery.",
      problem: "Context", role: "My role", delivery: "Delivery", product: "Product", web: "Web presence", stack: "Project technologies", viewLive: "Open project <span aria-hidden=\"true\">↗</span>", viewCode: "View source <span aria-hidden=\"true\">↗</span>",
      toca: { status: "Staging", type: "Management system · freelance project", summary: "A system designed to centralize a podiatry clinic's operations, from scheduling and medical records to inventory, finance, and reporting.", context: "Operational information spread across different workflows.", role: "Product definition, architecture, and full-stack development.", delivery: "Core records, initial scheduling, authentication, RBAC, audit logging, and client/server validation.", privacy: "Private staging environment. Its link is not published to protect client data and access." },
      clarium: { status: "Published application", type: "Personal finance · independent project", summary: "A local-first app for tracking income, expenses, card purchases, monthly plans, and insights without relying on a server.", product: "A mobile experience with local data and structured navigation.", web: "A published multilingual landing page that presents the features and distributes the APK.", previewLabel: "Open the published Clarium application", imageAlt: "Clarium page showing screens from the personal finance app" }
    },
    experience: {
      label: "Professional experience", title: "Growth across<br><em>product and operations</em>.", companyPeriod: "Dec 2025 — present", location: "Santo André, SP, Brazil", progression: "Promoted from intern to Junior Analyst in June 2026.",
      current: { period: "Jun 2026 — present", role: "Junior Systems Development Analyst", mode: "On-site", summary: "Working on a SaaS platform, web interfaces, and internal systems while connecting development with infrastructure, observability, and AppSec.", items: ["Develop and maintain solutions with Python, JavaScript/TypeScript, and React.", "Redesigned the XGuardian interface and built its institutional website.", "Administer Linux servers, troubleshoot environments, and support Proxmox virtualization.", "Monitor environments with Zabbix, Grafana, and Prometheus.", "Support AppSec and Supply Chain Security practices with Sonatype Nexus and XGuardian."] },
      intern: { period: "Dec 2025 — Jun 2026", role: "Systems Development Intern", mode: "On-site", summary: "Early experience spanning web development, technical support, infrastructure, observability, application security, and documentation.", items: ["Recovered legacy laptops and assets and organized the server environment.", "Supported Proxmox administration and troubleshooting for workstations and services.", "Implemented and monitored Zabbix and Grafana.", "Deployed SysPass internally and produced technical documentation and records."] }
    },
    expertise: {
      label: "Skills", title: "A generalist foundation,<br>organized around <em>delivery</em>.", intro: "Technologies and practices supported by my experience, projects, and education.",
      development: { title: "Development", description: "Interfaces, web applications, APIs, and mobile development." },
      data: { title: "Data and applications", description: "Persistence, authentication, and access control in products.", auth: "Authentication · RBAC", audit: "Audit logging" },
      operations: { title: "Operations and reliability", description: "Environments, deployment, monitoring, and troubleshooting.", docker: "Basic Docker" },
      product: { title: "Engineering and product", description: "Delivery quality, user experience, and sustainable evolution.", tests: "Software testing", docs: "Technical documentation" }
    },
    about: { label: "About", title: "Code is one part.<br>The <em>whole system</em> matters.", lead: "I am a Junior Systems Development Analyst with a generalist profile and hands-on experience evolving a SaaS product, web interfaces, and internal systems.", p1: "I like understanding how interfaces, backend, data, and infrastructure connect. This perspective guides my work from prototyping and implementation through documentation, monitoring, and operations.", p2: "My background combines formal systems development training, full-stack and mobile projects, and a professional routine that also includes Linux, observability, and application security.", quote: "I aim to build solutions that are clear to use, sustainable to maintain, and observable to operate." },
    education: {
      label: "Education and credentials", title: "A technical foundation<br>in <em>continuous development</em>.", academic: "Education", certifications: "Certifications", inProgress: "In progress", completed: "Completed",
      unicid: { course: "Associate Degree in Systems Analysis and Development", period: "Jun 2026 — expected Jun 2027" },
      senai: { course: "Technical Diploma in Systems Development", period: "Jul 2024 — Jun 2026" },
      proz: { course: "Technical Diploma in Internet Computing", period: "Jan 2023 — Dec 2024" },
      sfpc: { date: "CertiProf · Oct 2024 — Oct 2027" }, credly: "View Credly profile <span aria-hidden=\"true\">↗</span>", languages: "Languages", english: "Intermediate English", englishDetail: "Self-reported B2, currently improving through private lessons."
    },
    contact: { label: "Contact", title: "Looking for a junior<br>who thinks <em>beyond the screen</em>?", description: "I am open to systems development, full-stack, and software opportunities in São Paulo or remotely.", phone: "Phone", location: "São Paulo, Brazil · on-site, hybrid, or remote" },
    footer: { copy: "© 2026 Carlos Gabriel Gomes Luz", top: "Back to top" }
  },

  es: {
    meta: { title: "Carlos Gabriel | Analista Jr. de Desarrollo de Sistemas", description: "Portafolio de Carlos Gabriel, Analista Jr. de Desarrollo de Sistemas y Desarrollador Full Stack Jr. en São Paulo.", socialDescription: "Desarrollo full stack, producto, infraestructura, observabilidad y AppSec.", locale: "es_ES", imageAlt: "Carlos Gabriel, Analista Jr. de Desarrollo de Sistemas", jobTitle: "Analista Jr. de Desarrollo de Sistemas" },
    a11y: { skip: "Saltar al contenido", progress: "Progreso de lectura", menu: "Menú", primaryNav: "Navegación principal", openMenu: "Abrir menú", closeMenu: "Cerrar menú", language: "Selector de idioma", sectionNav: "Navegación por secciones", professionalLinks: "Enlaces profesionales" },
    nav: { home: "Inicio", projects: "Proyectos", experience: "Experiencia", skills: "Competencias", about: "Sobre mí", education: "Formación", contact: "Contacto" },
    theme: { dark: "Oscuro", light: "Claro", toDark: "Cambiar al tema oscuro", toLight: "Cambiar al tema claro" },
    cta: { projects: "Ver proyectos", resume: "Descargar CV", resumeShort: "CV", email: "Correo" },
    intro: { label: "Abriendo portafolio", skip: "Saltar", command: "open carlos-gabriel --profile=full-stack", line1: "perfil: analista jr. de desarrollo de sistemas", line2: "alcance: producto · código · operaciones", ready: "portafolio listo" },
    hero: { label: "Presentación", availability: "Disponible para oportunidades júnior", role: "Analista Jr. de Desarrollo de Sistemas <span aria-hidden=\"true\">/</span> Desarrollador Full Stack Jr.", summary: "Desarrollo productos y sistemas web conectando interfaz, backend, datos y operaciones. Mi experiencia también abarca UX/UI, Linux, observabilidad y seguridad de aplicaciones.", detailsLabel: "Información profesional", location: "São Paulo, Brasil", workMode: "Presencial · híbrido · remoto" },
    projects: {
      label: "Proyectos seleccionados", title: "Entregas que muestran<br>cómo <em>trabajo</em>.", intro: "Desde un sistema de gestión full stack hasta una aplicación móvil local-first: contexto, participación y estado real de cada entrega.",
      problem: "Contexto", role: "Mi participación", delivery: "Entrega", product: "Producto", web: "Presencia web", stack: "Tecnologías del proyecto", viewLive: "Abrir proyecto <span aria-hidden=\"true\">↗</span>", viewCode: "Ver código <span aria-hidden=\"true\">↗</span>",
      toca: { status: "En homologación", type: "Sistema de gestión · proyecto freelance", summary: "Sistema para centralizar la operación de una clínica de podología, desde la agenda y las historias clínicas hasta el inventario, las finanzas y los informes.", context: "Información operativa distribuida entre diferentes rutinas.", role: "Concepción, arquitectura y desarrollo full stack.", delivery: "Registros centrales, agenda inicial, autenticación, RBAC, auditoría y validaciones cliente/servidor.", privacy: "Entorno privado de homologación. El enlace no se publica para proteger los datos y accesos del cliente." },
      clarium: { status: "Aplicación publicada", type: "Finanzas personales · proyecto propio", summary: "Aplicación local-first para registrar ingresos, gastos, compras con tarjeta, planificación mensual e indicadores sin depender de un servidor.", product: "Experiencia móvil con datos locales y navegación estructurada.", web: "Landing multilingüe publicada para presentar los recursos y distribuir el APK.", previewLabel: "Abrir la aplicación publicada de Clarium", imageAlt: "Página de Clarium con pantallas de la aplicación de finanzas personales" }
    },
    experience: {
      label: "Experiencia profesional", title: "Evolución con contexto<br>de <em>producto y operaciones</em>.", companyPeriod: "dic 2025 — actualidad", location: "Santo André, SP, Brasil", progression: "Promoción de becario a Analista Jr. en junio de 2026.",
      current: { period: "jun 2026 — actualidad", role: "Analista Jr. de Desarrollo de Sistemas", mode: "Presencial", summary: "Trabajo en la evolución de una plataforma SaaS, interfaces web y sistemas internos, conectando desarrollo con infraestructura, observabilidad y AppSec.", items: ["Desarrollo y mantenimiento con Python, JavaScript/TypeScript y React.", "Rediseño de la interfaz de XGuardian y desarrollo de su sitio institucional.", "Administración de servidores Linux, troubleshooting y virtualización con Proxmox.", "Monitoreo con Zabbix, Grafana y Prometheus.", "Apoyo a prácticas de AppSec y Supply Chain Security con Sonatype Nexus y XGuardian."] },
      intern: { period: "dic 2025 — jun 2026", role: "Becario de Desarrollo de Sistemas", mode: "Presencial", summary: "Experiencia inicial en desarrollo web, soporte técnico, infraestructura, observabilidad, seguridad de aplicaciones y documentación.", items: ["Recuperación de portátiles y activos antiguos y organización del entorno de servidores.", "Apoyo a la administración de Proxmox y troubleshooting de estaciones y servicios.", "Implementación y seguimiento del monitoreo con Zabbix y Grafana.", "Implantación interna de SysPass y elaboración de documentación y registros técnicos."] }
    },
    expertise: {
      label: "Competencias", title: "Una base generalista,<br>organizada por <em>entregas</em>.", intro: "Tecnologías y prácticas respaldadas por mi experiencia, proyectos y formación.",
      development: { title: "Desarrollo", description: "Interfaces, aplicaciones web, APIs y desarrollo móvil." },
      data: { title: "Datos y aplicaciones", description: "Persistencia, autenticación y control de acceso en productos.", auth: "Autenticación · RBAC", audit: "Registros de auditoría" },
      operations: { title: "Operaciones y confiabilidad", description: "Entornos, despliegue, monitoreo y troubleshooting.", docker: "Docker básico" },
      product: { title: "Ingeniería y producto", description: "Calidad de entrega, experiencia y evolución sostenible.", tests: "Pruebas de software", docs: "Documentación técnica" }
    },
    about: { label: "Sobre mí", title: "El código es una parte.<br>Importa <em>todo el sistema</em>.", lead: "Soy Analista Jr. de Desarrollo de Sistemas con perfil generalista y experiencia práctica en la evolución de un producto SaaS, interfaces web y sistemas internos.", p1: "Me interesa comprender cómo se conectan la interfaz, el backend, los datos y la infraestructura. Esta visión orienta mi trabajo desde el prototipo y la implementación hasta la documentación, el monitoreo y la operación.", p2: "Mi trayectoria combina formación en desarrollo de sistemas, proyectos full stack y móviles y una rutina profesional que también incluye Linux, observabilidad y seguridad de aplicaciones.", quote: "Busco construir soluciones claras para quien las usa, sostenibles para quien las mantiene y observables para quien las opera." },
    education: {
      label: "Formación y credenciales", title: "Base técnica en<br><em>evolución continua</em>.", academic: "Formación académica", certifications: "Certificaciones", inProgress: "En curso", completed: "Finalizado",
      unicid: { course: "Tecnología en Análisis y Desarrollo de Sistemas", period: "jun 2026 — previsión jun 2027" },
      senai: { course: "Técnico en Desarrollo de Sistemas", period: "jul 2024 — jun 2026" },
      proz: { course: "Técnico en Informática para Internet", period: "ene 2023 — dic 2024" },
      sfpc: { date: "CertiProf · oct 2024 — oct 2027" }, credly: "Ver perfil en Credly <span aria-hidden=\"true\">↗</span>", languages: "Idiomas", english: "Inglés intermedio", englishDetail: "B2 autodeclarado, actualmente en perfeccionamiento con clases particulares."
    },
    contact: { label: "Contacto", title: "¿Buscas un profesional júnior<br>que piensa <em>más allá de la pantalla</em>?", description: "Estoy disponible para oportunidades en desarrollo de sistemas, full stack y software, en São Paulo o en remoto.", phone: "Teléfono", location: "São Paulo, Brasil · presencial, híbrido o remoto" },
    footer: { copy: "© 2026 Carlos Gabriel Gomes Luz", top: "Volver arriba" }
  }
};

const supportedLocales = Object.keys(portfolioTranslations);
const defaultLocale = "pt-BR";

function getStoredLocale() {
  try { return localStorage.getItem("portfolio-language"); } catch (error) { return null; }
}

function resolveLocale() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (supportedLocales.includes(requested)) return requested;
  const stored = getStoredLocale();
  return supportedLocales.includes(stored) ? stored : defaultLocale;
}

function valueAt(object, path) {
  return path.split(".").reduce((value, key) => value?.[key], object);
}

function setMeta(selector, content) {
  const element = document.querySelector(selector);
  if (element && content) element.setAttribute("content", content);
}

function updateMetadata(locale, pack) {
  document.title = pack.meta.title;
  setMeta('meta[name="description"]', pack.meta.description);
  setMeta('meta[property="og:title"]', pack.meta.title);
  setMeta('meta[property="og:description"]', pack.meta.socialDescription);
  setMeta('meta[property="og:locale"]', pack.meta.locale);
  setMeta('meta[property="og:image:alt"]', pack.meta.imageAlt);
  setMeta('meta[name="twitter:title"]', pack.meta.title);
  setMeta('meta[name="twitter:description"]', pack.meta.socialDescription);
  setMeta('meta[name="twitter:image:alt"]', pack.meta.imageAlt);

  const baseUrl = "https://carlosgabriel.netlify.app/";
  const localizedUrl = locale === defaultLocale ? baseUrl : `${baseUrl}?lang=${locale}`;
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", localizedUrl);
  setMeta('meta[property="og:url"]', localizedUrl);

  const schema = document.getElementById("person-schema");
  if (schema) {
    try {
      const data = JSON.parse(schema.textContent);
      data.jobTitle = pack.meta.jobTitle;
      data.url = localizedUrl;
      schema.textContent = JSON.stringify(data);
    } catch (error) {}
  }
}

function translateDocument(locale) {
  const pack = portfolioTranslations[locale] || portfolioTranslations[defaultLocale];
  document.documentElement.lang = locale;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = valueAt(pack, element.dataset.i18n);
    if (typeof value === "string") element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-list]").forEach((element) => {
    const items = valueAt(pack, element.dataset.i18nList);
    if (Array.isArray(items)) element.replaceChildren(...items.map((item) => Object.assign(document.createElement("li"), { textContent: item })));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = valueAt(pack, element.dataset.i18nAriaLabel);
    if (typeof value === "string") element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = valueAt(pack, element.dataset.i18nAlt);
    if (typeof value === "string") element.setAttribute("alt", value);
  });

  const resumeFile = locale === defaultLocale ? "CV_Carlos_Gabriel_PtBR.pdf" : "CV_Carlos_Gabriel_EN.pdf";
  document.querySelectorAll(".resume-link").forEach((link) => link.setAttribute("href", `./assets/documents/${resumeFile}`));
  document.querySelectorAll(".lang-btn").forEach((button) => {
    const active = button.dataset.lang === locale;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  updateMetadata(locale, pack);
  window.portfolioI18n.current = locale;
  window.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { locale } }));
}

function selectLocale(locale, updateUrl = true) {
  if (!supportedLocales.includes(locale)) return;
  try { localStorage.setItem("portfolio-language", locale); } catch (error) {}

  if (updateUrl) {
    const url = new URL(window.location.href);
    if (locale === defaultLocale) url.searchParams.delete("lang");
    else url.searchParams.set("lang", locale);
    history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }
  translateDocument(locale);
}

window.portfolioI18n = {
  current: resolveLocale(),
  getPack: () => portfolioTranslations[window.portfolioI18n.current] || portfolioTranslations[defaultLocale],
  select: selectLocale
};

document.addEventListener("click", (event) => {
  const button = event.target.closest(".lang-btn");
  if (button) selectLocale(button.dataset.lang);
});

translateDocument(window.portfolioI18n.current);
