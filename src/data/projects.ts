import type { Localized } from "@/i18n/config";

export type ProjectStatus = "live" | "progress" | "done" | "beta" | "soon" | "paused";

export type Project = {
  id: string;
  title: string;
  /** Overrides `title` when the name itself changes between languages. */
  localizedTitle?: Localized;
  context: Localized;
  description: Localized;
  /** Path under /public, or null to render the monogram fallback. */
  image: string | null;
  /** Keeps logos on a lighter plate when the artwork has no transparency. */
  imageFit: "contain" | "cover";
  /** Square artwork too small to fill the contain box without upscaling. */
  compactImage?: boolean;
  status: ProjectStatus;
  tech: string[];
  demoUrl?: string;
  codeUrl?: string;
  /** Internal systems have no public URL. */
  internal?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "segflyx",
    title: "SegFlyx",
    context: { pt: "Brazil Health Insurance Solutions", en: "Brazil Health Insurance Solutions" },
    description: {
      pt: "CRM comercial interno concebido e desenvolvido do zero, da arquitetura à operação: funil de vendas, distribuição automática de leads, chamados de TI e dashboards para 11 perfis de acesso. Substituiu o legado com 85% menos custo de tecnologia e elevou o produto ao nível de mercado, competindo com os fortes do segmento.",
      en: "Internal sales CRM designed and built from scratch, from architecture to operation: sales funnel, automatic lead distribution, IT ticketing and dashboards across 11 access profiles. It replaced the legacy stack at 85% lower technology cost and raised the product to market level, competing with the strong players in the space.",
    },
    image: "/segflyx-logo-blue-glass.png",
    imageFit: "contain",
    compactImage: true,
    status: "live",
    featured: true,
    demoUrl: "https://www.segflyx.com.br/",
    tech: ["React", "TypeScript", "Vite", "FastAPI", "PostgreSQL", "Docker", "Grafana"],
  },
  {
    id: "secop-colombia",
    title: "SECOP Colômbia",
    localizedTitle: { pt: "SECOP Colômbia", en: "SECOP Colombia" },
    context: { pt: "e-Stratégia Pública", en: "e-Stratégia Pública" },
    description: {
      pt: "Nova plataforma de contratação pública eletrônica da Colômbia. Integra processos de aquisição de entidades estatais com foco em transparência, segurança e eficiência. O avanço ficou parado após a minha saída.",
      en: "Colombia's new electronic public procurement platform. It integrates acquisition processes for state entities with a focus on transparency, security and efficiency. Progress stalled after I left.",
    },
    image: "/SECOP.png",
    imageFit: "cover",
    status: "paused",
    featured: true,
    tech: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Docker"],
    demoUrl: "https://e-strategiapublica.com/pt-br/",
    codeUrl: "https://github.com/e-strategiapublica/sol-ms-auth",
  },
  {
    id: "sol",
    title: "SOL",
    context: { pt: "e-Stratégia Pública", en: "e-Stratégia Pública" },
    description: {
      pt: "Plataforma generalista de contratação pública: gestão completa de processos de aquisição com arquitetura escalável e interoperabilidade entre sistemas. O avanço ficou parado após a minha saída.",
      en: "General-purpose public procurement platform: end-to-end management of acquisition processes with a scalable architecture and system interoperability. Progress stalled after I left.",
    },
    image: "/SOL.png",
    imageFit: "cover",
    status: "paused",
    featured: true,
    tech: ["Angular", "NestJS", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://e-strategiapublica.com/pt-br/",
    codeUrl: "https://github.com/orgs/e-strategiapublica/repositories",
  },
  {
    id: "lina-hub",
    title: "LINA Hub",
    context: { pt: "NPL Brasil", en: "NPL Brasil" },
    description: {
      pt: "Software de gestão de créditos corporativos inadimplidos. Plataforma para recuperação de créditos e reestruturação de dívidas com análise multidisciplinar.",
      en: "Management software for distressed corporate credit. A platform for credit recovery and debt restructuring backed by multidisciplinary analysis.",
    },
    image: "/nplbrasil.png",
    imageFit: "contain",
    status: "live",
    tech: ["JavaScript", "Node.js", "Python", "PostgreSQL"],
    demoUrl: "https://www.nplbrasil.com.br/",
  },
  {
    id: "rbx-robotica",
    title: "RBX Robótica",
    context: { pt: "RBX Robótica", en: "RBX Robótica" },
    description: {
      pt: "Soluções web personalizadas e escaláveis para automação de processos e otimização operacional, desenvolvidas para uma startup de robótica.",
      en: "Custom, scalable web solutions for process automation and operational efficiency, built for a robotics startup.",
    },
    image: "/rbxrobotica.svg",
    imageFit: "contain",
    status: "beta",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/rbxrobotica/rbx-robotica-frontend",
  },
  {
    id: "democratizacao",
    title: "Democratização",
    localizedTitle: { pt: "Democratização", en: "Democratization" },
    context: { pt: "e-Stratégia Pública", en: "e-Stratégia Pública" },
    description: {
      pt: "Sistema que iniciei para incluir quem produz no agro e vende commodities ao Estado. Foco em democratizar a compra pública e alcançar cerca de metade desse público na América Latina, com módulos de registro, caracterização, análise geoespacial e inclusão.",
      en: "A system I started to include agro producers who sell commodities to the State. It aims to democratise public purchasing and reach about half of that audience in Latin America, with modules for registration, characterisation, geospatial analysis and inclusion.",
    },
    image: null,
    imageFit: "contain",
    status: "soon",
    tech: ["TypeScript", "PostgreSQL"],
  },
  {
    id: "nanismo-brasil",
    title: "Nanismo Brasil",
    context: { pt: "INN · Instituto Nacional do Nanismo", en: "INN · National Dwarfism Institute" },
    description: {
      pt: "ONG de apoio a pessoas com nanismo e suas famílias. Atuei em suporte técnico, banco de dados e manutenção de sistemas internos. Na página institucional, apareço na foto com meu irmão nos ombros.",
      en: "NGO supporting people with dwarfism and their families. I handled technical support, databases and upkeep of internal systems. On the institutional page, I am in the photo with my brother on my shoulders.",
    },
    image: null,
    imageFit: "contain",
    status: "done",
    demoUrl: "https://inn.org.br/institucional/nanismo-brasil/",
    tech: ["SQL", "Linux", "Windows Server"],
  },
];

/** Every technology present in the project list, sorted for the filter bar. */
export function getProjectTechnologies(): string[] {
  const all = new Set<string>();
  for (const project of projects) {
    for (const tech of project.tech) all.add(tech);
  }
  return [...all].sort((a, b) => a.localeCompare(b));
}
