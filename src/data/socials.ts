import type { Localized } from "@/i18n/config";
import type { IconName } from "@/lib/icons";

import { profile } from "./profile";

export type Social = {
  id: string;
  name: string;
  url: string;
  icon: IconName;
  handle: string;
  description: Localized;
};

export const socials: Social[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/anthonysfarias",
    icon: "FaGithub",
    handle: "@anthonysfarias",
    description: { pt: "Repositórios e experimentos", en: "Repositories and experiments" },
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anthony-farias",
    icon: "FaLinkedin",
    handle: "in/anthony-farias",
    description: { pt: "Trajetória profissional", en: "Professional track record" },
  },
  {
    id: "email",
    name: "E-mail",
    url: `mailto:${profile.email}`,
    icon: "FaEnvelope",
    handle: profile.email,
    description: { pt: "Melhor canal para propostas", en: "Best channel for proposals" },
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    url: `https://wa.me/${profile.phoneHref.replace("+", "")}`,
    icon: "FaWhatsapp",
    handle: profile.phone,
    description: { pt: "Conversa rápida", en: "Quick conversation" },
  },
];
