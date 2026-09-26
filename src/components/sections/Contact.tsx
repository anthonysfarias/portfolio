"use client";

import { useState } from "react";
import { FaArrowDown, FaCheck, FaRegCopy } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { SafeLink } from "@/components/ui/SafeLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hiring, profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { useI18n } from "@/i18n/useDictionary";
import { getIcon } from "@/lib/icons";

export function Contact() {
  const { dict, pick } = useI18n();
  const [copied, setCopied] = useState<string | null>(null);

  const hiringRows = [
    { term: dict.contact.availability, detail: pick(hiring.availability) },
    { term: dict.contact.lookingFor, detail: pick(hiring.lookingFor) },
    { term: dict.contact.workModel, detail: pick(hiring.workModel) },
    { term: dict.contact.contract, detail: pick(hiring.contract) },
    { term: dict.contact.response, detail: pick(hiring.response) },
    { term: dict.contact.notice, detail: pick(hiring.notice) },
  ];

  async function copy(id: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard is unavailable (insecure context or denied permission);
      // the value stays visible so it can still be selected manually.
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        id="contact"
        eyebrow={dict.contact.eyebrow}
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
      />

      <div className="mt-14 grid-12 gap-y-12">
        <Reveal delay={0.06} className="col-span-12 lg:col-span-5">
          <h3 className="font-mono text-meta text-ink-muted uppercase">
            {dict.contact.hiringTitle}
          </h3>
          <dl className="mt-5 divide-y divide-rule border-y border-rule">
            {hiringRows.map((row) => (
              <div
                key={row.term}
                className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="shrink-0 font-mono text-meta text-ink-muted uppercase">
                  {row.term}
                </dt>
                <dd className="text-sm leading-snug tracking-[-0.01em] sm:text-right">
                  {row.detail}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Button href={profile.cv} download variant="link">
              {dict.contact.ctaCv}
              <FaArrowDown
                aria-hidden
                className="size-3 transition-transform duration-200 group-hover:translate-y-1"
              />
            </Button>
          </div>
        </Reveal>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.08}>
            <h3 className="font-mono text-meta text-ink-muted uppercase">
              {dict.contact.directTitle}
            </h3>
          </Reveal>

          <ul className="mt-5 grid grid-cols-1 gap-3">
            {socials.map((social, index) => {
              const Icon = getIcon(social.icon);
              const isCopyable = social.id === "email" || social.id === "whatsapp";
              const copyValue = social.id === "email" ? profile.email : profile.phone;

              return (
                <Reveal as="li" key={social.id} delay={0.1 + index * 0.05}>
                  <Panel className="flex h-full items-center gap-4 p-4 lg:p-5">
                    <SafeLink
                      href={social.url}
                      className="flex min-w-0 flex-1 items-center gap-4"
                    >
                      <span className="shrink-0 text-ink-muted">
                        <Icon aria-hidden className="size-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium tracking-[-0.01em]">
                          {social.handle}
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-ink-muted">
                          {pick(social.description)}
                        </span>
                      </span>
                    </SafeLink>
                    {isCopyable && (
                      <button
                        type="button"
                        onClick={() => copy(social.id, copyValue)}
                        aria-label={
                          copied === social.id ? dict.contact.copied : dict.contact.copy
                        }
                        className="flex size-8 shrink-0 items-center justify-center border border-rule text-ink-muted transition-colors duration-200 hover:border-ink hover:text-ink"
                      >
                        {copied === social.id ? (
                          <FaCheck aria-hidden className="size-3.5 text-live" />
                        ) : (
                          <FaRegCopy aria-hidden className="size-3.5" />
                        )}
                      </button>
                    )}
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
