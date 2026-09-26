"use client";

import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, degrees } from "@/data/education";
import { useI18n } from "@/i18n/useDictionary";
import { getIcon } from "@/lib/icons";

export function Education() {
  const { dict, pick } = useI18n();

  return (
    <Section id="education">
      <SectionHeading id="education" eyebrow={dict.education.eyebrow} title={dict.education.title} />

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div>
          <h3 className="font-mono text-meta text-ink-muted uppercase">
            {dict.education.degreesTitle}
          </h3>
          <ul className="mt-5 space-y-3">
            {degrees.map((degree, index) => {
              const Icon = getIcon(degree.icon);
              return (
                <Reveal as="li" key={degree.id} delay={index * 0.06}>
                  <Panel className="flex gap-4 p-5">
                    <span className="shrink-0 pt-0.5 text-ink-muted">
                      <Icon aria-hidden className="size-4" />
                    </span>
                    <span>
                      <span className="block text-[0.95rem] leading-snug font-medium tracking-[-0.01em]">
                        {pick(degree.title)}
                      </span>
                      <span className="mt-1 block text-sm text-ink-muted">
                        {degree.institution}
                      </span>
                      <span className="measure mt-2.5 block text-sm leading-relaxed text-ink-muted">
                        {pick(degree.note)}
                      </span>
                    </span>
                  </Panel>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-meta text-ink-muted uppercase">
            {dict.education.certificationsTitle}
          </h3>
          <ul className="mt-5 space-y-2.5">
            {certifications.map((certification, index) => {
              const Icon = getIcon(certification.icon);
              return (
                <Reveal as="li" key={certification.id} delay={index * 0.06} direction="left">
                  <Panel className="flex items-center gap-4 p-4">
                    <span className="shrink-0 text-ink-muted">
                      <Icon aria-hidden className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium tracking-[-0.01em]">
                        {pick(certification.title)}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-ink-muted">
                        {certification.issuer}
                      </span>
                    </span>
                    <span className="tnum shrink-0 font-mono text-meta whitespace-nowrap text-ink-muted">
                      {pick(certification.date)}
                    </span>
                  </Panel>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
