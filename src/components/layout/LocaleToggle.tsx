"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

import { cn } from "@/lib/cn";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/useDictionary";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, dict } = useI18n();
  const pathname = usePathname();

  const hrefFor = useCallback(
    (target: Locale) => {
      const segments = (pathname ?? `/${locale}`).split("/");
      // segments[0] is the empty string before the leading slash.
      segments[1] = target;
      return segments.join("/") || `/${target}`;
    },
    [locale, pathname],
  );

  return (
    <div
      className={cn("flex items-baseline gap-1.5 font-mono text-meta uppercase", className)}
      role="group"
      aria-label={dict.nav.switchLanguage}
    >
      {locales.map((option, index) => {
        const isActive = option === locale;

        return (
          <span key={option} className="flex items-baseline gap-1.5">
            {index > 0 && (
              <span aria-hidden className="text-ink-muted">
                /
              </span>
            )}
            <Link
              href={hrefFor(option)}
              scroll={false}
              hrefLang={option}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "transition-colors duration-200",
                isActive
                  ? "text-ink underline decoration-accent decoration-2 underline-offset-4"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              {localeLabels[option]}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
