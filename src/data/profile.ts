import type { Localized } from "@/i18n/config";
import type { IconName } from "@/lib/icons";

export type Stat = {
  value: string;
  label: Localized;
  detail: Localized;
};

export type Highlight = {
  icon: IconName;
  title: Localized;
  description: Localized;
};

export type SpokenLanguage = {
  name: Localized;
  level: Localized;
  /** Relative proficiency, drives the meter width. */
  proficiency: number;
};

export const profile = {
  name: "Anthony Farias",
  initials: "AF",
  email: "akileslive.farias10@gmail.com",
  phone: "(11) 95468-4812",
  phoneHref: "+5511954684812",
  cv: "/CV_Anthony_Farias.pdf",
  siteUrl: "https://anthonysfarias.vercel.app",
  sourceUrl: "https://github.com/anthonysfarias/portfolio",
  location: {
    pt: "São Paulo, SP · Brasil",
    en: "São Paulo, Brazil",
  } satisfies Localized,
  role: {
    pt: "Analista de Tecnologia · Liderança Técnica",
    en: "Technology Analyst · Technical Leadership",
  } satisfies Localized,
  roles: {
    pt: ["Analista de Tecnologia", "Desenvolvedor Full Stack", "Tech Lead"],
    en: ["Technology Analyst", "Full Stack Developer", "Tech Lead"],
  } satisfies Localized<string[]>,
  summary: {
    pt: [
      "Profissional de tecnologia com mais de 6 anos de experiência, hoje na liderança técnica de produto interno em produção. Entrego ponta a ponta: arquitetura, código, integrações, infraestrutura e sustentação - com React, TypeScript, Python, FastAPI, PostgreSQL, Docker e Linux.",
      "Nos últimos ciclos reduzi 85% do custo de tecnologia da empresa e coloquei o sistema próprio no nível de mercado, capaz de competir com as soluções dos grandes players. Também estruturei RBAC para 11 perfis e eliminei 88 erros de TypeScript abrindo caminho para testes e CI. Busco times que precisam de alguém que assuma o produto e responda pelo que está no ar.",
    ],
    en: [
      "Technology professional with over 6 years of experience, currently leading an internal product in production. I deliver end to end: architecture, code, integrations, infrastructure and upkeep - with React, TypeScript, Python, FastAPI, PostgreSQL, Docker and Linux.",
      "In recent cycles I cut the company's technology costs by 85% and brought the in-house system up to market level, able to compete with the major players. I also designed RBAC for 11 profiles and removed 88 TypeScript errors to unlock tests and CI. I look for teams that need someone who owns the product and stays accountable for what runs in production.",
    ],
  } satisfies Localized<string[]>,
} as const;

/** Facts recruiters scan first: availability, fit and working model. */
export const hiring = {
  availability: {
    pt: "Disponível para novos desafios",
    en: "Open to new opportunities",
  } satisfies Localized,
  lookingFor: {
    pt: "Liderança técnica, Full Stack sênior ou Analista de Tecnologia",
    en: "Technical leadership, senior Full Stack or Technology Analyst roles",
  } satisfies Localized,
  workModel: {
    pt: "Presencial, híbrido ou remoto (Brasil)",
    en: "On-site, hybrid or remote (Brazil)",
  } satisfies Localized,
  contract: {
    pt: "CLT ou PJ",
    en: "Employment or contractor",
  } satisfies Localized,
  response: {
    pt: "Resposta em até 1 dia útil",
    en: "Reply within 1 business day",
  } satisfies Localized,
  notice: {
    pt: "Negociável conforme a oportunidade",
    en: "Notice period negotiable by opportunity",
  } satisfies Localized,
} as const;

export const stats: Stat[] = [
  {
    value: "6+",
    label: { pt: "Anos de experiência", en: "Years of experience" },
    detail: {
      pt: "Desenvolvimento, infraestrutura e suporte técnico desde 2020.",
      en: "Development, infrastructure and technical support since 2020.",
    },
  },
  {
    value: "11",
    label: { pt: "Perfis de acesso", en: "Access profiles" },
    detail: {
      pt: "Estrutura de RBAC desenhada e implantada no CRM SegFlyx.",
      en: "RBAC structure designed and shipped for the SegFlyx CRM.",
    },
  },
  {
    value: "88",
    label: { pt: "Erros de TypeScript eliminados", en: "TypeScript errors removed" },
    detail: {
      pt: "Refatoração que abriu caminho para testes e CI no projeto.",
      en: "A refactor that unlocked tests and CI for the project.",
    },
  },
  {
    value: "-85%",
    label: { pt: "Redução de custo de tecnologia", en: "Technology cost reduction" },
    detail: {
      pt: "Legado caro substituído por solução própria no nível de mercado, competindo com os grandes.",
      en: "Costly legacy replaced by an in-house market-level platform that competes with the majors.",
    },
  },
];

export const highlights: Highlight[] = [
  {
    icon: "FaDiagramProject",
    title: { pt: "Ownership de ponta a ponta", en: "End-to-end ownership" },
    description: {
      pt: "Do requisito à sustentação: desenho a solução, escrevo o código, faço o deploy e respondo pelo que está em produção.",
      en: "From requirement to upkeep: I design the solution, write the code, ship the deploy and stay accountable for what runs in production.",
    },
  },
  {
    icon: "FaChartLine",
    title: { pt: "Impacto mensurável", en: "Measurable impact" },
    description: {
      pt: "Reduzi 85% do custo de tech e elevei o sistema interno ao padrão de mercado, competindo com os fortes do segmento.",
      en: "I cut tech cost by 85% and raised the internal system to market standard, competing with the strong players in the space.",
    },
  },
  {
    icon: "FaUsersGear",
    title: { pt: "Liderança técnica prática", en: "Hands-on technical leadership" },
    description: {
      pt: "Alinho negócio e engenharia, defino arquitetura, faço code review e mentoria - sem me afastar do código.",
      en: "I align business and engineering, set architecture, run code review and mentoring - without stepping away from the code.",
    },
  },
  {
    icon: "FaGaugeHigh",
    title: { pt: "Produção sob controle", en: "Production under control" },
    description: {
      pt: "Ambientes em Ubuntu, Nginx, PostgreSQL e Docker com métricas em Grafana e Prometheus.",
      en: "Environments on Ubuntu, Nginx, PostgreSQL and Docker with metrics in Grafana and Prometheus.",
    },
  },
];

export const spokenLanguages: SpokenLanguage[] = [
  {
    name: { pt: "Português", en: "Portuguese" },
    level: { pt: "Nativo", en: "Native" },
    proficiency: 100,
  },
  {
    name: { pt: "Inglês", en: "English" },
    level: { pt: "Avançado", en: "Advanced" },
    proficiency: 85,
  },
  {
    name: { pt: "Francês", en: "French" },
    level: { pt: "Básico a intermediário", en: "Basic to intermediate" },
    proficiency: 50,
  },
  {
    name: { pt: "Espanhol", en: "Spanish" },
    level: { pt: "Básico", en: "Basic" },
    proficiency: 30,
  },
];
