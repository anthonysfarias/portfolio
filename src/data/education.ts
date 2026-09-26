import type { Localized } from "@/i18n/config";
import type { IconName } from "@/lib/icons";

export type Degree = {
  id: string;
  title: Localized;
  institution: string;
  icon: IconName;
  note: Localized;
};

export type Certification = {
  id: string;
  title: Localized;
  issuer: string;
  date: Localized;
  icon: IconName;
};

export const degrees: Degree[] = [
  {
    id: "unicsul",
    title: {
      pt: "Tecnologia em Análise e Desenvolvimento de Sistemas",
      en: "Associate Degree in Systems Analysis and Development",
    },
    institution: "Universidade Cruzeiro do Sul",
    icon: "FaGraduationCap",
    note: {
      pt: "Engenharia de software, banco de dados, arquitetura de sistemas e metodologias ágeis.",
      en: "Software engineering, databases, systems architecture and agile methodologies.",
    },
  },
  {
    id: "cisco",
    title: {
      pt: "Formação técnica em Segurança de Sistemas da Informação",
      en: "Technical program in Information Systems Security",
    },
    institution: "Cisco Networking Academy",
    icon: "SiCisco",
    note: {
      pt: "Fundamentos de segurança da informação, criptografia e defesa de redes.",
      en: "Information security fundamentals, cryptography and network defence.",
    },
  },
  {
    id: "senac",
    title: {
      pt: "Técnico em Redes de Computadores",
      en: "Technical Degree in Computer Networks",
    },
    institution: "Senac São Paulo",
    icon: "FaNetworkWired",
    note: {
      pt: "Infraestrutura de redes, administração de servidores e governança de TI.",
      en: "Network infrastructure, server administration and IT governance.",
    },
  },
];

export const certifications: Certification[] = [
  {
    id: "controle-sistemas",
    title: { pt: "Controle de Sistemas", en: "Systems Control" },
    issuer: "Coursera",
    date: { pt: "jan 2024", en: "Jan 2024" },
    icon: "SiCoursera",
  },
  {
    id: "matematica-financeira",
    title: { pt: "Matemática Financeira", en: "Financial Mathematics" },
    issuer: "Enap",
    date: { pt: "fev 2024", en: "Feb 2024" },
    icon: "FaChartLine",
  },
  {
    id: "scrum",
    title: { pt: "Scrum", en: "Scrum" },
    issuer: "Universidade Cruzeiro do Sul",
    date: { pt: "Curso livre", en: "Short course" },
    icon: "FaPeopleGroup",
  },
  {
    id: "redes",
    title: { pt: "Redes de Computadores", en: "Computer Networks" },
    issuer: "Senac São Paulo",
    date: { pt: "Curso livre", en: "Short course" },
    icon: "FaNetworkWired",
  },
];
