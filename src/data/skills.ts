import type { Localized } from "@/i18n/config";
import type { IconName } from "@/lib/icons";

export type Skill = {
  /** Stable key; shown as-is when there is no `label`. */
  name: string;
  /** Display name for skills that are not brand names. */
  label?: Localized;
  icon: IconName;
  note: Localized;
};

export type SkillKind = "hard" | "soft";

export type SkillGroup = {
  id: string;
  kind: SkillKind;
  icon: IconName;
  label: Localized;
  description: Localized;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "development",
    kind: "hard",
    icon: "FaCode",
    label: { pt: "Desenvolvimento", en: "Development" },
    description: {
      pt: "O que constrói o produto: interfaces, APIs e a linguagem em que o negócio vira código.",
      en: "What builds the product: interfaces, APIs and the language where business turns into code.",
    },
    skills: [
      {
        name: "React",
        icon: "FaReact",
        note: { pt: "Interfaces em produção", en: "Production interfaces" },
      },
      {
        name: "TypeScript",
        icon: "SiTypescript",
        note: { pt: "Tipagem em todo o stack", en: "Typing across the stack" },
      },
      {
        name: "JavaScript",
        icon: "SiJavascript",
        note: { pt: "Base do frontend", en: "Frontend foundation" },
      },
      {
        name: "Next.js",
        icon: "SiNextdotjs",
        note: { pt: "SSR e rotas estáticas", en: "SSR and static routes" },
      },
      {
        name: "Vite",
        icon: "SiVite",
        note: { pt: "Build do SegFlyx", en: "SegFlyx build tooling" },
      },
      {
        name: "Python",
        icon: "SiPython",
        note: { pt: "Serviços e automações", en: "Services and automation" },
      },
      {
        name: "FastAPI",
        icon: "SiFastapi",
        note: { pt: "Backend assíncrono", en: "Async backend" },
      },
      {
        name: "Node.js",
        icon: "SiNodedotjs",
        note: { pt: "APIs e microsserviços", en: "APIs and microservices" },
      },
      {
        name: "Tailwind CSS",
        icon: "SiTailwindcss",
        note: { pt: "Design system utilitário", en: "Utility design system" },
      },
      {
        name: "HTML5",
        icon: "SiHtml5",
        note: { pt: "Semântica e acessibilidade", en: "Semantics and accessibility" },
      },
      {
        name: "CSS",
        icon: "SiCss",
        note: { pt: "Layout e animação", en: "Layout and animation" },
      },
      {
        name: "Java",
        icon: "FaJava",
        note: { pt: "Sistemas corporativos", en: "Enterprise systems" },
      },
      {
        name: "PHP",
        icon: "SiPhp",
        note: { pt: "Manutenção de legado", en: "Legacy maintenance" },
      },
    ],
  },
  {
    id: "data-infra",
    kind: "hard",
    icon: "FaServer",
    label: { pt: "Dados e infraestrutura", en: "Data and infrastructure" },
    description: {
      pt: "O que sustenta o produto no ar: persistência, containers, servidores e observabilidade.",
      en: "What keeps the product running: persistence, containers, servers and observability.",
    },
    skills: [
      {
        name: "PostgreSQL",
        icon: "SiPostgresql",
        note: { pt: "Banco principal", en: "Primary database" },
      },
      {
        name: "SQL",
        icon: "FaDatabase",
        note: { pt: "Modelagem e consultas", en: "Modelling and queries" },
      },
      {
        name: "SQLAlchemy",
        icon: "SiSqlalchemy",
        note: { pt: "ORM assíncrono", en: "Async ORM" },
      },
      {
        name: "Alembic",
        icon: "FaLayerGroup",
        note: { pt: "Migrações versionadas", en: "Versioned migrations" },
      },
      {
        name: "REST APIs",
        icon: "FaCircleNodes",
        note: { pt: "Integrações entre parceiros", en: "Partner integrations" },
      },
      {
        name: "Docker",
        icon: "SiDocker",
        note: { pt: "Containers e deploy", en: "Containers and deploys" },
      },
      {
        name: "Linux",
        icon: "SiLinux",
        note: { pt: "Servidores Ubuntu", en: "Ubuntu servers" },
      },
      {
        name: "Nginx",
        icon: "SiNginx",
        note: { pt: "Proxy reverso e TLS", en: "Reverse proxy and TLS" },
      },
      {
        name: "AWS",
        icon: "FaAws",
        note: { pt: "Infraestrutura em nuvem", en: "Cloud infrastructure" },
      },
      {
        name: "Grafana",
        icon: "SiGrafana",
        note: { pt: "Dashboards de operação", en: "Operations dashboards" },
      },
      {
        name: "Prometheus",
        icon: "SiPrometheus",
        note: { pt: "Métricas e alertas", en: "Metrics and alerting" },
      },
    ],
  },
  {
    id: "architecture",
    kind: "hard",
    icon: "FaSitemap",
    label: { pt: "Arquitetura e prática", en: "Architecture and practice" },
    description: {
      pt: "Ferramentas e padrões que sustentam o desenho do sistema, a segurança de acesso e a qualidade da entrega.",
      en: "Tools and patterns that support system design, access security and delivery quality.",
    },
    skills: [
      {
        name: "Git",
        icon: "SiGit",
        note: { pt: "Fluxo de branches", en: "Branching workflow" },
      },
      {
        name: "GitHub",
        icon: "SiGithub",
        note: { pt: "Revisão de código", en: "Code review" },
      },
      {
        name: "CI",
        icon: "SiGithubactions",
        note: { pt: "Pipelines automatizados", en: "Automated pipelines" },
      },
      {
        name: "Microsserviços",
        label: { pt: "Microsserviços", en: "Microservices" },
        icon: "FaCubesStacked",
        note: { pt: "Serviços desacoplados", en: "Decoupled services" },
      },
      {
        name: "RBAC",
        icon: "FaShieldHalved",
        note: { pt: "11 perfis no SegFlyx", en: "11 profiles in SegFlyx" },
      },
      {
        name: "IAM",
        icon: "FaKey",
        note: { pt: "Autenticação e permissões", en: "Authentication and permissions" },
      },
      {
        name: "Testes",
        label: { pt: "Testes", en: "Testing" },
        icon: "FaVialCircleCheck",
        note: { pt: "Pytest e Vitest", en: "Pytest and Vitest" },
      },
      {
        name: "Clean Code",
        icon: "FaListCheck",
        note: { pt: "Legibilidade primeiro", en: "Readability first" },
      },
      {
        name: "SOLID",
        icon: "FaObjectGroup",
        note: { pt: "Desenho orientado a objetos", en: "Object-oriented design" },
      },
    ],
  },
  {
    id: "soft",
    kind: "soft",
    icon: "FaPeopleGroup",
    label: { pt: "Soft skills", en: "Soft skills" },
    description: {
      pt: "O que separa quem só entrega código de quem eleva o time, o produto e o padrão técnico.",
      en: "What separates people who only ship code from those who raise the team, the product and the technical bar.",
    },
    skills: [
      {
        name: "Ownership",
        icon: "FaDiagramProject",
        note: { pt: "Assumo o problema até o fim", en: "I own the problem to the end" },
      },
      {
        name: "Liderança técnica",
        label: { pt: "Liderança técnica", en: "Technical leadership" },
        icon: "FaUsersGear",
        note: { pt: "Direção sem perder a mão no código", en: "Direction without leaving the keyboard" },
      },
      {
        name: "Inteligência",
        label: { pt: "Inteligência", en: "Intelligence" },
        icon: "FaBrain",
        note: { pt: "Julgamento rápido e preciso", en: "Fast, precise judgement" },
      },
      {
        name: "Proatividade",
        label: { pt: "Proatividade", en: "Proactivity" },
        icon: "FaBolt",
        note: { pt: "Antecipo e ajo sem esperar ordem", en: "I anticipate and act without being told" },
      },
      {
        name: "Clareza",
        label: { pt: "Clareza", en: "Clarity" },
        icon: "FaCompress",
        note: { pt: "Simplifico o complexo", en: "I make the complex simple" },
      },
      {
        name: "Comunicação",
        label: { pt: "Comunicação", en: "Communication" },
        icon: "FaComments",
        note: { pt: "Falo a língua do negócio e da engenharia", en: "I speak business and engineering" },
      },
      {
        name: "Senso de produto",
        label: { pt: "Senso de produto", en: "Product sense" },
        icon: "FaCompass",
        note: { pt: "Código a serviço do resultado", en: "Code in service of the outcome" },
      },
      {
        name: "Tomada de decisão",
        label: { pt: "Tomada de decisão", en: "Decision making" },
        icon: "FaBullseye",
        note: { pt: "Trade-offs explícitos e rápidos", en: "Explicit, fast trade-offs" },
      },
      {
        name: "Resolução de problemas",
        label: { pt: "Resolução de problemas", en: "Problem solving" },
        icon: "FaLightbulb",
        note: { pt: "Diagnóstico sob pressão", en: "Diagnosis under pressure" },
      },
      {
        name: "Mentoria",
        label: { pt: "Mentoria", en: "Mentoring" },
        icon: "FaChalkboardUser",
        note: { pt: "Multiplico o nível do time", en: "I multiply the team's level" },
      },
      {
        name: "Feedback",
        icon: "FaCommentDots",
        note: { pt: "Digo o que importa, com respeito", en: "I say what matters, with respect" },
      },
      {
        name: "Empatia",
        label: { pt: "Empatia", en: "Empathy" },
        icon: "FaHeart",
        note: { pt: "Entendo quem usa e quem constrói", en: "I understand who uses and who builds" },
      },
      {
        name: "Curiosidade",
        label: { pt: "Curiosidade", en: "Curiosity" },
        icon: "FaBookOpen",
        note: { pt: "Aprendo o que a vaga ainda não pediu", en: "I learn what the job has not asked yet" },
      },
      {
        name: "Resiliência",
        label: { pt: "Resiliência", en: "Resilience" },
        icon: "FaShieldHalved",
        note: { pt: "Calma quando o sistema queima", en: "Calm when production is on fire" },
      },
      {
        name: "Responsabilidade",
        label: { pt: "Responsabilidade", en: "Accountability" },
        icon: "FaUserCheck",
        note: { pt: "Erro meu, correção minha", en: "My mistake, my fix" },
      },
      {
        name: "Adaptabilidade",
        label: { pt: "Adaptabilidade", en: "Adaptability" },
        icon: "FaArrowsRotate",
        note: { pt: "Mudo de abordagem sem drama", en: "I change approach without drama" },
      },
      {
        name: "Integridade",
        label: { pt: "Integridade", en: "Integrity" },
        icon: "FaScaleBalanced",
        note: { pt: "Digo o real, mesmo quando custa", en: "I tell the truth even when it costs" },
      },
      {
        name: "Colaboração",
        label: { pt: "Colaboração", en: "Collaboration" },
        icon: "FaHandshake",
        note: { pt: "Ganho junto com o time", en: "I win with the team" },
      },
      {
        name: "Scrum",
        icon: "FaPeopleGroup",
        note: { pt: "Cadência sem burocracia vazia", en: "Cadence without empty ceremony" },
      },
    ],
  },
];

export const hardSkillGroups = skillGroups.filter((group) => group.kind === "hard");
export const softSkillGroup = skillGroups.find((group) => group.kind === "soft")!;

/** Brand logos only - abstract icons like RBAC or SOLID read poorly at marquee size. */
const marqueeNames = [
  "React",
  "TypeScript",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "Python",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
  "SQLAlchemy",
  "Docker",
  "Linux",
  "Nginx",
  "AWS",
  "Grafana",
  "Prometheus",
  "Git",
  "GitHub",
];

export function getMarqueeSkills(): Skill[] {
  const byName = new Map(
    hardSkillGroups.flatMap((group) => group.skills).map((s) => [s.name, s]),
  );
  return marqueeNames.flatMap((name) => {
    const skill = byName.get(name);
    return skill ? [skill] : [];
  });
}
