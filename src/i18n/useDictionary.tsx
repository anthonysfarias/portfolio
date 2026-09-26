"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

import type { Dictionary } from "./pt";
import { defaultLocale, type Locale, type Localized } from "./config";
import { pt } from "./pt";

type I18nValue = {
  locale: Locale;
  dict: Dictionary;
  /** Resolves a `{ pt, en }` field against the active locale. */
  pick: <T>(value: Localized<T>) => T;
};

const I18nContext = createContext<I18nValue>({
  locale: defaultLocale,
  dict: pt,
  pick: (value) => value[defaultLocale],
});

export function I18nProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: ReactNode;
}) {
  const value = useMemo<I18nValue>(
    () => ({ locale, dict, pick: (field) => field[locale] }),
    [locale, dict],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
