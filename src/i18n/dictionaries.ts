import { en } from "./en";
import { pt, type Dictionary } from "./pt";
import type { Locale, Localized } from "./config";

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Picks the right side of a `{ pt, en }` field. */
export function t<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export type { Dictionary };
