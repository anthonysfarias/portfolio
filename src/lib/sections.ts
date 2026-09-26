import type { Dictionary } from "@/i18n/pt";

export const sectionIds = [
  "about",
  "stack",
  "experience",
  "projects",
  "education",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export function getNavItems(dict: Dictionary) {
  return sectionIds.map((id) => ({ id, label: dict.nav[id], number: sectionNumber(id) }));
}

/** The numeral printed in the margin beside each section: "01", "02", ... */
export function sectionNumber(id: SectionId) {
  return String(sectionIds.indexOf(id) + 1).padStart(2, "0");
}
