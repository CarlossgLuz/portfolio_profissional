// Centralized static translations for the single-page portfolio.
const portfolioTranslations = {
  "pt-BR": {
    meta: {
      title: "Carlos Gabriel | Desenvolvedor de Sistemas, Web, Backend e Infra",
      description:
        "Portfólio de Carlos Gabriel com atuação em web, backend, mobile e infraestrutura. Estagiário na Xmart Solutions em São Paulo.",
      ogTitle: "Carlos Gabriel | Desenvolvedor de Sistemas, Web, Backend e Infra",
      ogDescription: "Web · Backend · Mobile · Infra & Cloud",
      ogLocale: "pt_BR",
      ogImageAlt: "Portfólio de Carlos Gabriel com foco em web, backend, mobile e infraestrutura.",
    },
    aria: {
      progress: "Progresso de leitura",
      loadingPortfolio: "Carregando portfólio",
      menu: "Menu",
      primaryNav: "Principal",
      openMenu: "Abrir menu",
      presentation: "Apresentação",
      externalLinks: "Links externos",
      languageSelector: "Seleção de idioma",
      phone: "Telefone",
      resume: "Baixar currículo",
    },
    nav: {
      about: "Sobre",
      skills: "Competências",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
    },
    cta: {
      projects: "Ver projetos",
      contact: "Falar comigo",
      resume: "Baixar currículo",
      email: "Mandar e-mail",
      credly: "Ver badges no Credly",
    },
    hero: {
      badge: "Desenvolvedor · São Paulo, SP",
      description:
        "Desenvolvedor com atuação em <strong>web, backend, mobile</strong> e <strong>infraestrutura</strong>. Estagiário na Xmart Solutions &mdash; construindo software com atenção a produto, clareza arquitetural e confiabilidade operacional.",
      scroll: "rolar",
      stats: { areas: "Áreas", repos: "Repositórios", certs: "Certificações" },
    },
    about: {
      eye: "Sobre",
      heading: "Técnica sólida.<br>Visão de <em>produto</em>.",
      p1: "Tenho 18 anos, moro em São Paulo (SP) e estou construindo minha carreira com intenção. Não sou o desenvolvedor que só escreve código &mdash; me interessa entender o sistema inteiro: a interface, o backend, a infraestrutura e como tudo se conecta para gerar valor real.",
      p2: "Na <strong>Xmart Solutions</strong>, atuo com rotina prática em ambientes virtualizados, monitoramento com Zabbix e Grafana, ajustes em interfaces web e suporte a operações de infraestrutura. Um ambiente que me força a pensar além do código.",
      p3: "Curso <strong>Análise e Desenvolvimento de Sistemas na Impacta</strong> e mantenho projetos próprios &mdash; do frontend responsivo ao app mobile com persistência local. Inglês intermediário, foco em documentação técnica.",
      tags: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        infra: "Infra & Cloud",
        observability: "Observabilidade",
        ux: "UX / UI",
      },
    },
    expertise: {
      eye: "Stack &amp; Competências",
      cards: {
        frontend: {
          title: "Frontend &amp; Web",
          items: [
            "Next.js 14 · React",
            "TypeScript · JavaScript",
            "Tailwind CSS · HTML / CSS",
            "Framer Motion · next-intl",
            "UI/UX · Responsividade",
          ],
        },
        backend: {
          title: "Backend &amp; Dados",
          items: [
            "Python · FastAPI",
            "SQL · SQLite · MySQL",
            "Arquitetura em camadas",
            "REST APIs · CLI",
            "Power BI · DAX",
          ],
        },
        mobile: {
          title: "Mobile",
          items: ["React Native · Expo", "TypeScript", "Expo Router", "SQLite local", "Interfaces nativas"],
        },
        infra: {
          title: "Infra &amp; Cloud",
          items: ["Proxmox · Linux", "Zabbix · Grafana", "AWS S3 · Azure · GCP", "SysPass · Git", "Troubleshooting"],
        },
      },
    },
    experience: {
      eye: "Experiência",
      period: "2024 &mdash; Presente",
      location: "São Paulo, SP<br>Estágio · Dev de Sistemas",
      role: "Estagiário de Desenvolvimento de Sistemas",
      items: [
        "Suporte técnico e troubleshooting com foco em resolução rápida e estabilidade de ambiente",
        "Apoio à administração de ambientes virtualizados com Proxmox",
        "Implementação e evolução de monitoramento com Zabbix e Grafana",
        "Ajustes e melhorias em páginas e interfaces web em produção",
        "Organização e gestão de credenciais com SysPass",
        "Registros e evidências de operações em AWS S3",
      ],
    },
    projects: {
      eye: "Projetos",
      heading: "Código com propósito,<br>entrega com critério.",
      description: "Projetos que demonstram o que faço na prática &mdash; do frontend ao backend e mobile.",
      cards: {
        one: {
          label: "01 · Produção",
          description:
            "Landing multilíngue com internacionalização via next-intl. Animações com Framer Motion e deploy em produção na Vercel para distribuição do APK do projeto Clarium.",
          link: "clarium.vercel.app",
        },
        two: {
          label: "02 · Mobile",
          description:
            "App mobile para controle financeiro. Expo Router, TypeScript e persistência local com SQLite &mdash; arquitetura offline-first sem dependência de servidor.",
          link: "Ver repositório",
        },
        three: {
          label: "03 · Backend",
          description:
            "Sistema completo em Python com SQLite. Arquitetura em camadas, CRUD, validações de entrada e CLI interativo. Separação clara de responsabilidades e código limpo.",
          stack: "Camadas",
          link: "Ver repositório",
        },
        four: {
          label: "04 · Dados",
          title: "Dashboard Interativo",
          description:
            "Painel em Power BI com modelagem em DAX, gráficos dinâmicos e filtros interativos. Foco em leitura rápida de indicadores para tomada de decisão.",
          stack: "Visualização",
          link: "Ver dashboard",
        },
      },
    },
    education: {
      sectionLabel: "Formação e certificações",
      eye: "Formação &amp; Certificações",
      heading: 'Formação<span style="color:var(--accent)">.</span>',
      certHeading: 'Certificações<span style="color:var(--accent)">.</span>',
      items: {
        adsTitle: "CST em Análise e Desenvolvimento de Sistemas",
        adsPeriod: "Em curso",
        dsTitle: "Técnico em Desenvolvimento de Sistemas",
        internetTitle: "Técnico em Informática para Internet",
        highschoolTitle: "Ensino Médio",
      },
      certs: {
        aiTitle: "Fundamentos de IA Generativa",
      },
    },
    contact: {
      pretitle: "Entre em contato",
      heading: 'Vamos conversar<span style="color:var(--accent)">.</span>',
      description: "Aberto a oportunidades de estágio, projetos e colaborações. Me fala o que você tem em mente.",
      inlineResume: "Currículo",
      phoneLabel: "Telefone",
    },
    legal: {
      note: "Portfólio oficial, currículo e links profissionais centralizados aqui, no GitHub, LinkedIn e Credly. O código é aberto, mas identidade visual e textos autorais seguem como parte deste trabalho.",
    },
    footer: {
      copy: "&copy; 2026 Carlos Gabriel &middot; São Paulo, SP",
    },
    intro: {
      command: 'node portfolio --init --author="carlos_gabriel"',
      line1: "Inicializando ambiente de build...",
      line2: "Carregando: react · next · typescript · tailwind",
      resolved: "Dependências resolvidas",
      stack: "Stack: web · backend · mobile · infra e nuvem",
      location: "Localização: São Paulo — Brasil",
      statusLabel: "Status:",
      statusValue: "disponível para oportunidades",
      ready: "carlos_gabriel.portfolio() — pronto",
    },
  },
  en: {
    meta: {
      title: "Carlos Gabriel | Systems Developer, Web, Backend and Infra",
      description:
        "Carlos Gabriel's portfolio focused on web, backend, mobile and infrastructure. Systems Development intern at Xmart Solutions in São Paulo.",
      ogTitle: "Carlos Gabriel | Systems Developer, Web, Backend and Infra",
      ogDescription: "Web · Backend · Mobile · Infra & Cloud",
      ogLocale: "en_US",
      ogImageAlt: "Carlos Gabriel portfolio focused on web, backend, mobile and infrastructure.",
    },
    aria: {
      progress: "Reading progress",
      loadingPortfolio: "Loading portfolio",
      menu: "Menu",
      primaryNav: "Primary navigation",
      openMenu: "Open menu",
      presentation: "Presentation",
      externalLinks: "External links",
      languageSelector: "Language selector",
      phone: "Phone",
      resume: "Download resume",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    cta: {
      projects: "View projects",
      contact: "Contact me",
      resume: "Download resume",
      email: "Send email",
      credly: "View Credly badges",
    },
    hero: {
      badge: "Developer · São Paulo, SP",
      description:
        "Developer working across <strong>web, backend, mobile</strong> and <strong>infrastructure</strong>. Intern at Xmart Solutions &mdash; building software with product awareness, architectural clarity and operational reliability.",
      scroll: "scroll",
      stats: { areas: "Areas", repos: "Repos", certs: "Certs" },
    },
    about: {
      eye: "About",
      heading: "Solid technical base.<br><em>Product</em> mindset.",
      p1: "I am 18 years old, based in São Paulo (SP), and building my career with intent. I am not the kind of developer who only writes code &mdash; I care about understanding the whole system: interface, backend, infrastructure and how everything connects to create real value.",
      p2: "At <strong>Xmart Solutions</strong>, I work hands-on with virtualized environments, monitoring with Zabbix and Grafana, web interface adjustments and infrastructure support. It is an environment that pushes me to think beyond code.",
      p3: "I study <strong>Systems Analysis and Development at Impacta</strong> and maintain my own projects &mdash; from responsive frontend work to a mobile app with local persistence. Intermediate English, focused on technical documentation.",
      tags: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        infra: "Infra & Cloud",
        observability: "Observability",
        ux: "UX / UI",
      },
    },
    expertise: {
      eye: "Stack &amp; Capabilities",
      cards: {
        frontend: {
          title: "Frontend &amp; Web",
          items: [
            "Next.js 14 · React",
            "TypeScript · JavaScript",
            "Tailwind CSS · HTML / CSS",
            "Framer Motion · next-intl",
            "UI/UX · Responsiveness",
          ],
        },
        backend: {
          title: "Backend &amp; Data",
          items: ["Python · FastAPI", "SQL · SQLite · MySQL", "Layered architecture", "REST APIs · CLI", "Power BI · DAX"],
        },
        mobile: {
          title: "Mobile",
          items: ["React Native · Expo", "TypeScript", "Expo Router", "Local SQLite", "Native interfaces"],
        },
        infra: {
          title: "Infra &amp; Cloud",
          items: ["Proxmox · Linux", "Zabbix · Grafana", "AWS S3 · Azure · GCP", "SysPass · Git", "Troubleshooting"],
        },
      },
    },
    experience: {
      eye: "Experience",
      period: "2024 &mdash; Present",
      location: "São Paulo, SP<br>Internship · Systems Dev",
      role: "Systems Development Intern",
      items: [
        "Technical support and troubleshooting focused on fast resolution and environment stability",
        "Support for administering virtualized environments with Proxmox",
        "Implementation and evolution of monitoring with Zabbix and Grafana",
        "Adjustments and improvements to web pages and interfaces in production",
        "Credential organization and management with SysPass",
        "Records and operational evidence stored in AWS S3",
      ],
    },
    projects: {
      eye: "Projects",
      heading: "Purposeful code,<br>careful delivery.",
      description: "Projects that show what I do in practice &mdash; from frontend to backend and mobile.",
      cards: {
        one: {
          label: "01 · Production",
          description:
            "Multilingual landing page with internationalization via next-intl. Framer Motion animations and production deployment on Vercel to distribute the Clarium APK.",
          link: "clarium.vercel.app",
        },
        two: {
          label: "02 · Mobile",
          description:
            "Mobile app for financial control. Expo Router, TypeScript and local persistence with SQLite &mdash; an offline-first architecture with no server dependency.",
          link: "View repository",
        },
        three: {
          label: "03 · Backend",
          description:
            "Complete Python and SQLite system. Layered architecture, CRUD, input validation and interactive CLI. Clear separation of responsibilities and clean code.",
          stack: "Layers",
          link: "View repository",
        },
        four: {
          label: "04 · Data",
          title: "Interactive Dashboard",
          description:
            "Power BI dashboard with DAX modeling, dynamic charts and interactive filters. Focused on fast indicator reading for decision-making.",
          stack: "Visualization",
          link: "View dashboard",
        },
      },
    },
    education: {
      sectionLabel: "Education and certifications",
      eye: "Education &amp; Certifications",
      heading: 'Education<span style="color:var(--accent)">.</span>',
      certHeading: 'Certifications<span style="color:var(--accent)">.</span>',
      items: {
        adsTitle: "Systems Analysis and Development Degree",
        adsPeriod: "In progress",
        dsTitle: "Technical Course in Systems Development",
        internetTitle: "Technical Course in Internet Computing",
        highschoolTitle: "High School",
      },
      certs: {
        aiTitle: "Generative AI Fundamentals",
      },
    },
    contact: {
      pretitle: "Get in touch",
      heading: 'Let&apos;s talk<span style="color:var(--accent)">.</span>',
      description: "Open to internship opportunities, projects and collaborations. Tell me what you have in mind.",
      inlineResume: "Resume",
      phoneLabel: "Phone",
    },
    legal: {
      note: "Official portfolio, resume and professional links are centralized here, on GitHub, LinkedIn and Credly. The code is open, while visual identity and authored copy remain part of this work.",
    },
    footer: {
      copy: "&copy; 2026 Carlos Gabriel &middot; São Paulo, SP",
    },
    intro: {
      command: 'node portfolio --init --author="carlos_gabriel"',
      line1: "Initializing build environment...",
      line2: "Loading: react · next · typescript · tailwind",
      resolved: "Dependencies resolved",
      stack: "Stack: web · backend · mobile · infra & cloud",
      location: "Location: São Paulo — Brazil",
      statusLabel: "Status:",
      statusValue: "available for opportunities",
      ready: "carlos_gabriel.portfolio() — ready",
    },
  },
  es: {
    meta: {
      title: "Carlos Gabriel | Desarrollador de Sistemas, Web, Backend e Infra",
      description:
        "Portafolio de Carlos Gabriel con enfoque en web, backend, mobile e infraestructura. Becario de Desarrollo de Sistemas en Xmart Solutions en São Paulo.",
      ogTitle: "Carlos Gabriel | Desarrollador de Sistemas, Web, Backend e Infra",
      ogDescription: "Web · Backend · Mobile · Infra & Cloud",
      ogLocale: "es_ES",
      ogImageAlt: "Portafolio de Carlos Gabriel enfocado en web, backend, mobile e infraestructura.",
    },
    aria: {
      progress: "Progreso de lectura",
      loadingPortfolio: "Cargando portafolio",
      menu: "Menu",
      primaryNav: "Navegación principal",
      openMenu: "Abrir menú",
      presentation: "Presentación",
      externalLinks: "Enlaces externos",
      languageSelector: "Selector de idioma",
      phone: "Teléfono",
      resume: "Descargar CV",
    },
    nav: {
      about: "Sobre",
      skills: "Skills",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    cta: {
      projects: "Ver proyectos",
      contact: "Hablar conmigo",
      resume: "Descargar CV",
      email: "Enviar correo",
      credly: "Ver badges en Credly",
    },
    hero: {
      badge: "Desarrollador · São Paulo, SP",
      description:
        "Desarrollador con actuacion en <strong>web, backend, mobile</strong> e <strong>infraestructura</strong>. Becario en Xmart Solutions &mdash; construyendo software con criterio de producto, claridad arquitectonica y confiabilidad operativa.",
      scroll: "scroll",
      stats: { areas: "Areas", repos: "Repos", certs: "Certs" },
    },
    about: {
      eye: "Sobre",
      heading: "Base tecnica solida.<br>Vision de <em>producto</em>.",
      p1: "Tengo 18 años, vivo en São Paulo (SP) y estoy construyendo mi carrera con intención. No soy el desarrollador que solo escribe código &mdash; me interesa entender el sistema completo: la interfaz, el backend, la infraestructura y cómo todo se conecta para generar valor real.",
      p2: "En <strong>Xmart Solutions</strong>, trabajo de forma práctica con entornos virtualizados, monitoreo con Zabbix y Grafana, ajustes en interfaces web y soporte a operaciones de infraestructura. Es un entorno que me obliga a pensar más allá del código.",
      p3: "Estudio <strong>Análisis y Desarrollo de Sistemas en Impacta</strong> y mantengo proyectos propios &mdash; desde frontend responsivo hasta una app mobile con persistencia local. Inglés intermedio, con foco en documentación técnica.",
      tags: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        infra: "Infra & Cloud",
        observability: "Observabilidad",
        ux: "UX / UI",
      },
    },
    expertise: {
      eye: "Stack &amp; Competencias",
      cards: {
        frontend: {
          title: "Frontend &amp; Web",
          items: [
            "Next.js 14 · React",
            "TypeScript · JavaScript",
            "Tailwind CSS · HTML / CSS",
            "Framer Motion · next-intl",
            "UI/UX · Responsividad",
          ],
        },
        backend: {
          title: "Backend &amp; Datos",
          items: ["Python · FastAPI", "SQL · SQLite · MySQL", "Arquitectura en capas", "REST APIs · CLI", "Power BI · DAX"],
        },
        mobile: {
          title: "Mobile",
          items: ["React Native · Expo", "TypeScript", "Expo Router", "SQLite local", "Interfaces nativas"],
        },
        infra: {
          title: "Infra &amp; Cloud",
          items: ["Proxmox · Linux", "Zabbix · Grafana", "AWS S3 · Azure · GCP", "SysPass · Git", "Troubleshooting"],
        },
      },
    },
    experience: {
      eye: "Experiencia",
      period: "2024 &mdash; Actualidad",
      location: "São Paulo, SP<br>Beca · Des. de Sistemas",
      role: "Becario de Desarrollo de Sistemas",
      items: [
        "Soporte técnico y troubleshooting con foco en resolución rápida y estabilidad del entorno",
        "Apoyo en la administración de entornos virtualizados con Proxmox",
        "Implementación y evolución del monitoreo con Zabbix y Grafana",
        "Ajustes y mejoras en páginas e interfaces web en producción",
        "Organización y gestión de credenciales con SysPass",
        "Registros y evidencias operativas en AWS S3",
      ],
    },
    projects: {
      eye: "Proyectos",
      heading: "Código con propósito,<br>entrega con criterio.",
      description: "Proyectos que muestran lo que hago en la práctica &mdash; desde frontend hasta backend y mobile.",
      cards: {
        one: {
          label: "01 · Producción",
          description:
            "Landing multilingüe con internacionalización via next-intl. Animaciones con Framer Motion y despliegue en producción en Vercel para distribuir el APK del proyecto Clarium.",
          link: "clarium.vercel.app",
        },
        two: {
          label: "02 · Mobile",
          description:
            "App mobile para control financiero. Expo Router, TypeScript y persistencia local con SQLite &mdash; arquitectura offline-first sin dependencia de servidor.",
          link: "Ver repositorio",
        },
        three: {
          label: "03 · Backend",
          description:
            "Sistema completo en Python con SQLite. Arquitectura en capas, CRUD, validaciones de entrada y CLI interactiva. Separación clara de responsabilidades y código limpio.",
          stack: "Capas",
          link: "Ver repositorio",
        },
        four: {
          label: "04 · Datos",
          title: "Dashboard Interactivo",
          description:
            "Panel en Power BI con modelado en DAX, gráficos dinámicos y filtros interactivos. Enfocado en lectura rápida de indicadores para toma de decisiones.",
          stack: "Visualización",
          link: "Ver dashboard",
        },
      },
    },
    education: {
      sectionLabel: "Formación y certificaciones",
      eye: "Formación &amp; Certificaciones",
      heading: 'Formación<span style="color:var(--accent)">.</span>',
      certHeading: 'Certificaciones<span style="color:var(--accent)">.</span>',
      items: {
        adsTitle: "Carrera en Análisis y Desarrollo de Sistemas",
        adsPeriod: "En curso",
        dsTitle: "Técnico en Desarrollo de Sistemas",
        internetTitle: "Técnico en Informática para Internet",
        highschoolTitle: "Educación secundaria",
      },
      certs: {
        aiTitle: "Fundamentos de IA Generativa",
      },
    },
    contact: {
      pretitle: "Ponte en contacto",
      heading: 'Hablemos<span style="color:var(--accent)">.</span>',
      description: "Abierto a oportunidades de beca, proyectos y colaboraciones. Cuéntame qué tienes en mente.",
      inlineResume: "CV",
      phoneLabel: "Teléfono",
    },
    legal: {
      note: "Portafolio oficial, CV y enlaces profesionales centralizados aquí, en GitHub, LinkedIn y Credly. El código es abierto, mientras que la identidad visual y los textos de autor siguen siendo parte de este trabajo.",
    },
    footer: {
      copy: "&copy; 2026 Carlos Gabriel &middot; São Paulo, SP",
    },
    intro: {
      command: 'node portfolio --init --author="carlos_gabriel"',
      line1: "Initializing build environment...",
      line2: "Loading: react · next · typescript · tailwind",
      resolved: "Dependencies resolved",
      stack: "Stack: web · backend · mobile · infra & cloud",
      location: "Location: São Paulo — Brazil",
      statusLabel: "Status:",
      statusValue: "available for opportunities",
      ready: "carlos_gabriel.portfolio() — ready",
    },
  },
};

function localizedUrl(lang) {
  return lang === "pt-BR"
    ? "https://carlosgabriel.netlify.app/"
    : `https://carlosgabriel.netlify.app/?lang=${lang}`;
}

function setText(id, value) {
  const node = $(id);
  if (node && typeof value === "string") node.textContent = value;
}

function setHtml(id, value) {
  const node = $(id);
  if (node && typeof value === "string") node.innerHTML = value;
}

function setList(id, items) {
  const node = $(id);
  if (!node || !Array.isArray(items)) return;
  node.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function updateMeta(meta, lang) {
  const currentUrl = localizedUrl(lang);
  document.title = meta.title;
  document.documentElement.lang = lang;
  document.querySelector('meta[name="description"]').setAttribute("content", meta.description);
  document.querySelector('meta[property="og:title"]').setAttribute("content", meta.ogTitle);
  document.querySelector('meta[property="og:description"]').setAttribute("content", meta.ogDescription);
  document.querySelector('meta[property="og:locale"]').setAttribute("content", meta.ogLocale);
  document.querySelector('meta[property="og:url"]').setAttribute("content", currentUrl);
  document.querySelector('meta[property="og:image:alt"]').setAttribute("content", meta.ogImageAlt);
  document.querySelector('meta[name="twitter:title"]').setAttribute("content", meta.ogTitle);
  document.querySelector('meta[name="twitter:description"]').setAttribute("content", meta.ogDescription);
  document.querySelector('meta[name="twitter:image:alt"]').setAttribute("content", meta.ogImageAlt);
  document.querySelector('link[rel="canonical"]').setAttribute("href", currentUrl);
}

function updateSchema(langPack) {
  const schemaNode = $("person-schema");
  if (!schemaNode) return;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Carlos Gabriel",
    jobTitle: langPack.meta.title.split("|")[1].trim(),
    url: "https://carlosgabriel.netlify.app/",
    image: "https://carlosgabriel.netlify.app/static/img/og-cover.svg",
    email: "mailto:carlosgabriel.contato2007@gmail.com",
    telephone: "+55-11-96762-2665",
    sameAs: [
      "https://github.com/CarlossgLuz",
      "https://www.linkedin.com/in/dev-carlosgabriel/",
      "https://www.credly.com/users/carlos-gabriel.3078ca93",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressCountry: "BR",
    },
    alumniOf: ["Impacta Tecnologia", "SENAI Francisco Matarazzo", "Proz Educação"],
    knowsAbout: ["Frontend", "Backend", "Mobile", "Infrastructure", "Cloud", "Observability"],
  };

  schemaNode.textContent = JSON.stringify(schema, null, 2);
}

function applyTranslations(lang) {
  const pack = portfolioTranslations[lang] || portfolioTranslations["pt-BR"];

  setText("nav-about", pack.nav.about);
  setText("nav-skills", pack.nav.skills);
  setText("nav-experience", pack.nav.experience);
  setText("nav-projects", pack.nav.projects);
  setText("nav-contact", pack.nav.contact);
  setText("mob-nav-about", pack.nav.about);
  setText("mob-nav-skills", pack.nav.skills);
  setText("mob-nav-experience", pack.nav.experience);
  setText("mob-nav-projects", pack.nav.projects);
  setText("mob-nav-contact", pack.nav.contact);
  setText("mob-resume", pack.cta.resume);

  setText("hero-badge", pack.hero.badge);
  setHtml("hero-description", pack.hero.description);
  setText("hero-stat-areas", pack.hero.stats.areas);
  setText("hero-stat-repos", pack.hero.stats.repos);
  setText("hero-stat-certs", pack.hero.stats.certs);
  setText("cta-projects", pack.cta.projects);
  setText("cta-contact-text", pack.cta.contact);
  setText("hero-scroll", pack.hero.scroll);

  setText("about-eye", pack.about.eye);
  setHtml("abouth", pack.about.heading);
  setHtml("about-p1", pack.about.p1);
  setHtml("about-p2", pack.about.p2);
  setHtml("about-p3", pack.about.p3);
  setText("tag-frontend", pack.about.tags.frontend);
  setText("tag-backend", pack.about.tags.backend);
  setText("tag-mobile", pack.about.tags.mobile);
  setText("tag-infra", pack.about.tags.infra);
  setText("tag-observability", pack.about.tags.observability);
  setText("tag-ux", pack.about.tags.ux);

  setHtml("expertise-eye", pack.expertise.eye);
  setHtml("exp-front-title", pack.expertise.cards.frontend.title);
  setHtml("exp-back-title", pack.expertise.cards.backend.title);
  setHtml("exp-mobile-title", pack.expertise.cards.mobile.title);
  setHtml("exp-infra-title", pack.expertise.cards.infra.title);
  setList("exp-front-list", pack.expertise.cards.frontend.items);
  setList("exp-back-list", pack.expertise.cards.backend.items);
  setList("exp-mobile-list", pack.expertise.cards.mobile.items);
  setList("exp-infra-list", pack.expertise.cards.infra.items);

  setText("experience-eye", pack.experience.eye);
  setHtml("experience-period", pack.experience.period);
  setHtml("experience-location", pack.experience.location);
  setText("xph", pack.experience.role);
  setList("experience-list", pack.experience.items);

  setText("projects-eye", pack.projects.eye);
  setHtml("prjh", pack.projects.heading);
  setHtml("projects-description", pack.projects.description);
  setText("project-1-label", pack.projects.cards.one.label);
  setHtml("project-1-description", pack.projects.cards.one.description);
  setText("project-1-link", pack.projects.cards.one.link);
  setText("project-2-label", pack.projects.cards.two.label);
  setHtml("project-2-description", pack.projects.cards.two.description);
  setText("project-2-link", pack.projects.cards.two.link);
  setText("project-3-label", pack.projects.cards.three.label);
  setHtml("project-3-description", pack.projects.cards.three.description);
  setText("project-3-stack", pack.projects.cards.three.stack);
  setText("project-3-link", pack.projects.cards.three.link);
  setText("project-4-label", pack.projects.cards.four.label);
  setText("project-4-title", pack.projects.cards.four.title);
  setHtml("project-4-description", pack.projects.cards.four.description);
  setText("project-4-stack", pack.projects.cards.four.stack);
  setText("project-4-link", pack.projects.cards.four.link);

  document.getElementById("education").setAttribute("aria-label", pack.education.sectionLabel);
  setHtml("education-eye", pack.education.eye);
  setHtml("education-heading", pack.education.heading);
  setHtml("cert-heading", pack.education.certHeading);
  setText("edu-ads-title", pack.education.items.adsTitle);
  setText("edu-ads-period", pack.education.items.adsPeriod);
  setText("edu-ds-title", pack.education.items.dsTitle);
  setText("edu-internet-title", pack.education.items.internetTitle);
  setText("edu-highschool-title", pack.education.items.highschoolTitle);
  setText("cert-ai-title", pack.education.certs.aiTitle);
  setText("cert-credly-text", pack.cta.credly);
  setText("cert-resume-text", pack.cta.resume);

  setText("contact-pretitle", pack.contact.pretitle);
  setHtml("cth", pack.contact.heading);
  setText("contact-description", pack.contact.description);
  setText("contact-email-cta", pack.cta.email);
  setText("contact-resume-text", pack.cta.resume);
  setText("contact-inline-resume-text", pack.contact.inlineResume);
  setText("contact-phone-label", pack.contact.phoneLabel);
  setText("legal-note", pack.legal.note);
  setHtml("footer-copy", pack.footer.copy);

  $("prog").setAttribute("aria-label", pack.aria.progress);
  $("intro").setAttribute("aria-label", pack.aria.loadingPortfolio);
  $("mob").setAttribute("aria-label", pack.aria.menu);
  $("mainnav").setAttribute("aria-label", pack.aria.primaryNav);
  $("ham").setAttribute("aria-label", pack.aria.openMenu);
  $("hero").setAttribute("aria-label", pack.aria.presentation);
  document.querySelector(".lang-switcher").setAttribute("aria-label", pack.aria.languageSelector);
  document.querySelector(".mlang").setAttribute("aria-label", pack.aria.languageSelector);
  document.querySelector("footer .fl").setAttribute("aria-label", pack.aria.externalLinks);
  $("contact-inline-resume").setAttribute("aria-label", pack.aria.resume);
  $("contact-phone-link").setAttribute("aria-label", pack.aria.phone);

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateMeta(pack.meta, lang);
  updateSchema(pack);

  localStorage.setItem("portfolio-language", lang);
  const url = new URL(window.location.href);
  if (lang === "pt-BR") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", lang);
  }
  history.replaceState({}, "", url);

  window.portfolioI18n.current = lang;
  window.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { lang, pack } }));
}

function detectLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang && portfolioTranslations[urlLang]) return urlLang;

  const storedLang = localStorage.getItem("portfolio-language");
  if (storedLang && portfolioTranslations[storedLang]) return storedLang;

  return "pt-BR";
}

window.portfolioI18n = {
  translations: portfolioTranslations,
  current: "pt-BR",
  apply: applyTranslations,
  detect: detectLanguage,
  getPack() {
    return portfolioTranslations[this.current] || portfolioTranslations["pt-BR"];
  },
};

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => applyTranslations(button.dataset.lang));
});

applyTranslations(detectLanguage());
