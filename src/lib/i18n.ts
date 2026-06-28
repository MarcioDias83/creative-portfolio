export const i18n = {
  pt: {
    header: { lang: 'PT', label: 'MD' },
    hero: {
      label: 'MD — 2026',
      title: 'Marcio<br />Dias',
      subtitle: 'Full-stack & UI Designer',
      tagline: 'Transformando ideias em soluções digitais — do design à entrega',
      based: 'Rio Grande do Sul, Brasil',
      focus: 'Web · APIs · UI/UX · DevOps',
      availability: 'Disponível para novos projetos',
    },
    about: {
      label: 'Sobre',
      p1: 'Profissional de TI formado em Análise e Desenvolvimento de Sistemas com Pós-graduação em Tecnologia. Mais de 10 anos de experiência unindo suporte técnico e desenvolvimento moderno — do help desk ao full-stack.',
      p2: 'Minha carreira combina conhecimento de infraestrutura (N1/N2, suporte corporativo) com desenvolvimento de sistemas modernos (React, TypeScript, Python, APIs). Entendo o problema completo, da infraestrutura à interface.',
      p3: 'Atuei em grandes empresas, projetos de migração de sistemas, suporte corporativo, áreas comercial e telecom — fortalecendo comunicação, negociação e foco no cliente.',
    },
    timeline: {
      label: 'Trajetória',
      items: [
        { year: '2025', desc: 'UI Designer — Design systems, Figma, prototipação avançada' },
        { year: '2023', desc: 'Full-stack — Python/FastAPI, PostgreSQL, Docker' },
        { year: '2021', desc: 'Frontend — React, TypeScript, Tailwind' },
        { year: '2019', desc: 'Suporte TI — N1/N2, help desk, infra corporativa' },
      ],
    },
    stats: [
      { num: '5+', label: 'Projetos entregues' },
      { num: '10+', label: 'Anos em TI' },
      { num: '2', label: 'Formações acadêmicas' },
      { num: '500+', label: 'Usuários impactados' },
    ],
    services: {
      label: 'Serviços',
      items: [
        { num: '01', img: 'react', title: 'Web Development', desc: 'Aplicações modernas com React, TypeScript e Tailwind CSS' },
        { num: '02', img: 'api', title: 'APIs & Backend', desc: 'APIs REST com Python, FastAPI, Node.js, SQL e NoSQL' },
        { num: '03', img: '3d', title: 'UI/UX Design', desc: 'Interfaces intuitivas no Figma com foco em usabilidade' },
        { num: '04', img: 'database', title: 'Infra & DevOps', desc: 'Docker, Vercel, GitHub Actions, Linux, CI/CD' },
        { num: '05', img: 'python', title: 'Suporte Técnico', desc: 'Help desk N1/N2, infra corporativa, atendimento remoto' },
        { num: '06', img: 'animation', title: 'Consultoria TI', desc: 'Migração de sistemas, escolha de stack, estratégia técnica' },
      ],
    },
    skills: {
      label: 'Stack',
    },
    projects: {
      label: 'Projetos',
      filters: ['Todos', 'Web', 'Full-stack', 'Design'],
      items: [
        {
          tag: 'Web', title: 'Igreja App',
          desc: 'App de gestão eclesiástica com player de áudio, formulários e animações fluidas',
          tech: 'React 19 · TypeScript · Tailwind · Zustand',
          color: '#1a1a2e',
          url: 'https://github.com/MarcioDias83/igreja-app',
        },
        {
          tag: 'Web', title: 'Locadora React',
          desc: 'Catálogo de veículos com grid dinâmico, filtros e navegação scroll spy',
          tech: 'React 19 · Vite · Framer Motion',
          color: '#16213e',
          url: 'https://github.com/MarcioDias83/locadora-react',
        },
        {
          tag: 'Full-stack', title: 'App Full-stack',
          desc: 'Aplicação completa com autenticação, CRUD, PostgreSQL e deploy com Docker',
          tech: 'React · Fastify · PostgreSQL · Docker',
          color: '#0f3460',
          url: '',
        },
      ],
    },
    contact: {
      label: 'Contato',
      email: '1983mrd@gmail.com',
      social: 'Social',
      call: 'WhatsApp',
      formName: 'Nome',
      formEmail: 'Email',
      formSubject: 'Assunto',
      formMsg: 'Mensagem',
      formSend: 'Enviar',
      formSent: 'Enviado! Obrigado.',
    },
    footer: 'Transformando ideias em soluções digitais.',
  },
  en: {
    header: { lang: 'EN', label: 'MD' },
    hero: {
      label: 'MD — 2026',
      title: 'Marcio<br />Dias',
      subtitle: 'Full-stack & UI Designer',
      tagline: 'Turning ideas into digital solutions — from design to delivery',
      based: 'Rio Grande do Sul, Brazil',
      focus: 'Web · APIs · UI/UX · DevOps',
      availability: 'Available for new projects',
    },
    about: {
      label: 'About',
      p1: 'IT professional graduated in Systems Analysis and Development with a postgraduate degree in Technology. Over 10+ years of experience bridging technical support and modern development — from help desk to full-stack.',
      p2: 'My career combines infrastructure knowledge (N1/N2, corporate support) with modern systems development (React, TypeScript, Python, APIs). I understand the full problem, from infrastructure to interface.',
      p3: "I've worked in large companies, system migration projects, corporate support, commercial and telecommunications areas — strengthening communication, negotiation, and customer focus.",
    },
    timeline: {
      label: 'Timeline',
      items: [
        { year: '2025', desc: 'UI Designer — Design systems, Figma, advanced prototyping' },
        { year: '2023', desc: 'Full-stack — Python/FastAPI, PostgreSQL, Docker' },
        { year: '2021', desc: 'Frontend — React, TypeScript, Tailwind' },
        { year: '2019', desc: 'IT Support — N1/N2, help desk, corporate infra' },
      ],
    },
    stats: [
      { num: '5+', label: 'Projects delivered' },
      { num: '10+', label: 'Years in IT' },
      { num: '2', label: 'Academic degrees' },
      { num: '500+', label: 'Users impacted' },
    ],
    services: {
      label: 'Services',
      items: [
        { num: '01', img: 'react', title: 'Web Development', desc: 'Modern apps with React, TypeScript and Tailwind CSS' },
        { num: '02', img: 'api', title: 'APIs & Backend', desc: 'REST APIs with Python, FastAPI, Node.js, SQL and NoSQL' },
        { num: '03', img: '3d', title: 'UI/UX Design', desc: 'Intuitive interfaces in Figma focused on usability' },
        { num: '04', img: 'database', title: 'Infra & DevOps', desc: 'Docker, Vercel, GitHub Actions, Linux, CI/CD' },
        { num: '05', img: 'python', title: 'Technical Support', desc: 'N1/N2 help desk, corporate infra, remote assistance' },
        { num: '06', img: 'animation', title: 'IT Consulting', desc: 'System migration, stack selection, technical strategy' },
      ],
    },
    skills: {
      label: 'Stack',
    },
    projects: {
      label: 'Projects',
      filters: ['All', 'Web', 'Full-stack', 'Design'],
      items: [
        {
          tag: 'Web', title: 'Igreja App',
          desc: 'Church management app with audio player, forms, and fluid animations',
          tech: 'React 19 · TypeScript · Tailwind · Zustand',
          color: '#1a1a2e',
          url: 'https://github.com/MarcioDias83/igreja-app',
        },
        {
          tag: 'Web', title: 'Locadora React',
          desc: 'Vehicle catalog with dynamic grid, filters, and scroll spy navigation',
          tech: 'React 19 · Vite · Framer Motion',
          color: '#16213e',
          url: 'https://github.com/MarcioDias83/locadora-react',
        },
        {
          tag: 'Full-stack', title: 'App Full-stack',
          desc: 'Complete app with auth, CRUD, PostgreSQL, Docker deploy',
          tech: 'React · Fastify · PostgreSQL · Docker',
          color: '#0f3460',
          url: '',
        },
      ],
    },
    contact: {
      label: 'Contact',
      email: '1983mrd@gmail.com',
      social: 'Social',
      call: 'WhatsApp',
      formName: 'Name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMsg: 'Message',
      formSend: 'Send',
      formSent: 'Sent! Thank you.',
    },
    footer: 'Turning ideas into digital solutions.',
  },
}

export type Lang = keyof typeof i18n
export type I18n = (typeof i18n)[Lang]
