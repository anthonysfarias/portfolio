"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/useDictionary";
import { getNavItems } from "@/lib/sections";

/** Editorial jump list for recruiters who land mid-funnel and want to skip ahead. */
export function PageIndex({ className }: { className?: string }) {
  const { dict } = useI18n();
  const items = getNavItems(dict);

  return (
    <Reveal className={className}>
      <nav aria-label={dict.toc.title} className="border-t border-rule pt-5">
        <p className="font-mono text-meta text-ink-muted uppercase">{dict.toc.title}</p>
        <ul className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group inline-flex items-baseline gap-1.5 font-mono text-meta uppercase text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                <span className="tnum text-accent">{item.number}</span>
                <span className="border-b border-transparent transition-colors duration-200 group-hover:border-rule-strong">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Reveal>
  );
}
