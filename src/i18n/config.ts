export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/** BCP 47 tags for <html lang> and metadata alternates. */
export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

export const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** A string that exists in every supported language. */
export type Localized<T = string> = Record<Locale, T>;
