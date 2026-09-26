import type { Localized } from "@/i18n/config";

export type Experience = {
  id: string;
  company: string;
  /** One short line: what the company is. */
  companyBlurb: Localized;
  /** Public company page when one exists. */
  companyUrl?: string;
  role: Localized;
  period: Localized;
  location: Localized;
  summary: Localized;
  achievements: Localized<string[]>;
  stack: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    id: "brazil-health",
    company: "Brazil Health Insurance Solutions",
    companyBlurb: {
      pt: "Corretora e consultoria de planos de saúde empresariais.",
      en: "Broker and consultancy for corporate health plans.",
    },
    current: true,
    role: {
      pt: "Analista de Tecnologia e Liderança Técnica",
      en: "Technology Analyst and Technical Lead",
    },
    period: { pt: "abr 2026 - atual", en: "Apr 2026 - present" },
    location: { pt: "São Paulo, SP", en: "São Paulo, Brazil" },
    summary: {
      pt: "Lidero tecnicamente o SegFlyx, CRM comercial interno: do requisito à produção, com redução de custo e produto elevado ao nível de mercado frente aos grandes players.",
      en: "I lead the technical side of SegFlyx, an internal sales CRM: from requirement to production, with cost reduction and a product raised to market level against the major players.",
    },
    achievements: {
      pt: [
        "Reduzi em 85% o custo de tecnologia da empresa ao substituir o legado por uma solução própria, elevando o sistema ao nível de mercado e competindo com os grandes players do segmento.",
        "Frontend em React 18, Vite e TypeScript com backend assíncrono em FastAPI, SQLAlchemy, Alembic e PostgreSQL.",
        "Estruturei o controle de acesso para 11 perfis e implementei funil de vendas, distribuição de leads, chamados de TI, reservas de salas e dashboards gerenciais.",
        "Conduzo integrações de leads por API com parceiros externos, incluindo autenticação, prevenção de duplicidades, filas e rodízio de distribuição.",
        "Eliminei 88 erros de TypeScript e estruturei testes, CI e refatorações no projeto.",
        "Administro os ambientes de produção em Ubuntu, Nginx, PostgreSQL, Docker, Grafana e Prometheus.",
      ],
      en: [
        "Cut the company's technology costs by 85% by replacing the legacy stack with an in-house solution, bringing the system up to market level and competing with the major players in the space.",
        "React 18, Vite and TypeScript frontend with an async FastAPI, SQLAlchemy, Alembic and PostgreSQL backend.",
        "Designed access control for 11 profiles and shipped the sales funnel, lead distribution, IT ticketing, room booking and management dashboards.",
        "Own API lead integrations with external partners, covering authentication, duplicate prevention, queues and round-robin distribution.",
        "Removed 88 TypeScript errors and set up tests, CI and refactoring across the project.",
        "Administer production environments on Ubuntu, Nginx, PostgreSQL, Docker, Grafana and Prometheus.",
      ],
    },
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "Linux",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    id: "rbx-robotica",
    company: "RBX Robótica",
    companyBlurb: {
      pt: "Startup de robótica e automação de processos.",
      en: "Robotics and process-automation startup.",
    },
    role: { pt: "Front End Developer", en: "Front End Developer" },
    period: { pt: "abr 2026", en: "Apr 2026" },
    location: { pt: "São Paulo, SP", en: "São Paulo, Brazil" },
    summary: {
      pt: "Desenvolvimento de interfaces e automação robótica de processos, com foco em experiência do usuário e integração com serviços de aplicação.",
      en: "Interface development and robotic process automation, focused on user experience and integration with application services.",
    },
    achievements: {
      pt: [
        "Interfaces web para soluções de automação, priorizando clareza de navegação e performance.",
        "Integração do frontend com serviços de aplicação responsáveis pelos fluxos automatizados.",
      ],
      en: [
        "Web interfaces for automation products, prioritising navigation clarity and performance.",
        "Frontend integration with the application services driving the automated flows.",
      ],
    },
    stack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: "e-estrategia",
    company: "e-Stratégia Pública",
    companyBlurb: {
      pt: "Software de contratação pública eletrônica na América Latina.",
      en: "Electronic public procurement software across Latin America.",
    },
    role: { pt: "Full Stack Developer", en: "Full Stack Developer" },
    period: { pt: "fev 2025 - abr 2026", en: "Feb 2025 - Apr 2026" },
    location: { pt: "Remoto", en: "Remote" },
    summary: {
      pt: "Desenvolvimento full stack em contratação pública eletrônica (SOL e SECOP Colômbia), com análise técnica, refatoração e início de um sistema voltado a produtores agro que vendem commodities ao Estado.",
      en: "Full stack development on electronic public procurement (SOL and SECOP Colombia), with technical analysis, refactoring and the start of a system for agro producers who sell commodities to the State.",
    },
    achievements: {
      pt: [
        "Iniciei um sistema que atende cerca de metade das pessoas da América Latina que trabalham com agro e precisam vender commodities para o Estado - digitalizando o acesso à compra pública.",
        "Atuação nas plataformas SOL e SECOP Colômbia, de contratação pública eletrônica; o avanço de ambas ficou parado após a minha saída.",
        "Implementação de software, análise técnica e refatoração de código legado.",
        "Entregas com Angular, NestJS, TypeScript e Tailwind CSS em servidores Linux com Docker.",
      ],
      en: [
        "I started a system that reaches about half of the people in Latin America who work in agriculture and need to sell commodities to the State - digitising access to public purchasing.",
        "Worked on the SOL and SECOP Colombia electronic public procurement platforms; progress on both stalled after I left.",
        "Software implementation, technical analysis and legacy code refactoring.",
        "Deliveries with Angular, NestJS, TypeScript and Tailwind CSS on Linux servers with Docker.",
      ],
    },
    stack: ["Angular", "NestJS", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Linux"],
  },
  {
    id: "npl-brasil",
    company: "NPL Brasil",
    companyBlurb: {
      pt: "Gestão e recuperação de créditos corporativos inadimplidos.",
      en: "Management and recovery of distressed corporate credit.",
    },
    role: { pt: "Full Stack Developer", en: "Full Stack Developer" },
    period: { pt: "fev 2022 - jun 2023", en: "Feb 2022 - Jun 2023" },
    location: { pt: "Brasil", en: "Brazil" },
    summary: {
      pt: "Desenvolvimento de aplicações web para gestão de créditos corporativos inadimplidos, com stack JavaScript e Python.",
      en: "Development of web applications for distressed corporate credit management, using a JavaScript and Python stack.",
    },
    achievements: {
      pt: [
        "Aplicações web com JavaScript, TypeScript, Node.js e React consumindo APIs REST e GraphQL.",
        "Arquitetura em microsserviços e modelagem de dados em SQL.",
        "Controle de versão e revisão de código via GitHub.",
      ],
      en: [
        "Web applications with JavaScript, TypeScript, Node.js and React consuming REST and GraphQL APIs.",
        "Microservice architecture and SQL data modelling.",
        "Version control and code review through GitHub.",
      ],
    },
    stack: ["JavaScript", "TypeScript", "Node.js", "React", "GraphQL", "PostgreSQL", "Python"],
  },
  {
    id: "nanismo-brasil",
    company: "Nanismo Brasil",
    companyBlurb: {
      pt: "ONG de apoio a pessoas com nanismo e suas famílias (INN).",
      en: "NGO supporting people with dwarfism and their families (INN).",
    },
    companyUrl: "https://inn.org.br/institucional/nanismo-brasil/",
    role: { pt: "Suporte Técnico", en: "Technical Support" },
    period: { pt: "abr 2020 - dez 2020", en: "Apr 2020 - Dec 2020" },
    location: { pt: "São Paulo, SP · Híbrido", en: "São Paulo, Brazil · Hybrid" },
    summary: {
      pt: "Suporte técnico a usuários, administração de banco de dados e manutenção de serviços e sistemas internos. Na página institucional, apareço na foto com meu irmão nos ombros.",
      en: "User technical support, database administration and maintenance of internal services and systems. On the institutional page, I am in the photo with my brother on my shoulders.",
    },
    achievements: {
      pt: [
        "Atendimento e resolução de incidentes de usuários finais.",
        "Administração de banco de dados e rotinas de manutenção dos sistemas internos.",
      ],
      en: [
        "End-user incident handling and resolution.",
        "Database administration and maintenance routines for internal systems.",
      ],
    },
    stack: ["SQL", "Linux", "Windows Server", "Microsoft Office"],
  },
];
