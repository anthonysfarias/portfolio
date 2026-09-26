"use client";

import { motion, useReducedMotion } from "framer-motion";

import { CountUp } from "@/components/ui/CountUp";
import { MetricText } from "@/components/ui/MetricText";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { highlights, profile, spokenLanguages, stats } from "@/data/profile";
import { useI18n } from "@/i18n/useDictionary";

export function About() {
  const { dict, pick } = useI18n();
  const reduced = useReducedMotion();
  const summary = pick(profile.summary);

  return (
    <Section id="about">
      <SectionHeading id="about" eyebrow={dict.about.eyebrow} title={dict.about.title} />

      {/* The summary keeps the heading's indent: nothing returns to the left edge
          except the labels. First paragraph is the lede in full ink. */}
      <div className="grid-12 mt-12 sm:mt-16">
        <div className="col-span-12 space-y-6 sm:col-span-9 sm:col-start-4 lg:col-span-7 lg:col-start-5">
          {summary.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.06}>
              <p
                className={
                  index === 0
                    ? "measure text-lede text-ink"
                    : "measure text-lede text-ink-muted"
                }
              >
                <MetricText text={paragraph} />
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* The statistics are the largest thing in the section after the heading:
          numerals set as figures in a ruled table, no cards. */}
      <Reveal delay={0.1}>
        <dl className="grid-12 mt-16 gap-y-10 border-t border-rule pt-6 sm:mt-20">
          {stats.map((stat) => (
            <div key={stat.value} className="col-span-12 border-l border-rule pl-4 min-[380px]:col-span-6 lg:col-span-3">
              <dt className="tnum text-stat font-semibold">
                <CountUp value={stat.value} />
              </dt>
              <dd className="mt-4">
                <span className="block text-sm font-medium tracking-[-0.01em]">
                  {pick(stat.label)}
                </span>
                <span className="measure-tight mt-1.5 block text-[0.8125rem] leading-relaxed text-ink-muted">
                  <MetricText text={pick(stat.detail)} />
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Label in the margin, body in the field. */}
      <div className="grid-12 mt-20 gap-y-6 sm:mt-24">
        <h3 className="col-span-12 font-mono text-meta text-ink-muted uppercase sm:col-span-3">
          {dict.about.highlightsTitle}
        </h3>

        <ul className="col-span-12 border-b border-rule sm:col-span-9 sm:col-start-4 lg:col-span-8 lg:col-start-5">
          {highlights.map((highlight, index) => (
            <Reveal
              as="li"
              key={highlight.icon}
              delay={0.04 * index}
              className="grid gap-x-8 gap-y-1.5 border-t border-rule py-5 sm:grid-cols-[minmax(0,11rem)_1fr]"
            >
              <span className="text-sm font-medium tracking-[-0.01em]">{pick(highlight.title)}</span>
              <span className="measure text-sm leading-relaxed text-ink-muted">
                <MetricText text={pick(highlight.description)} />
              </span>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="grid-12 mt-16 gap-y-6 sm:mt-20">
        <h3 className="col-span-12 font-mono text-meta text-ink-muted uppercase sm:col-span-3">
          {dict.about.languagesTitle}
        </h3>

        <ul className="col-span-12 border-b border-rule sm:col-span-9 sm:col-start-4 lg:col-span-5 lg:col-start-5">
          {spokenLanguages.map((language, index) => (
            <li key={language.proficiency + pick(language.name)} className="border-t border-rule py-4">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium tracking-[-0.01em]">{pick(language.name)}</span>
                <span className="font-mono text-meta text-ink-muted uppercase">
                  {pick(language.level)}
                </span>
              </div>
              {/* Proficiency as a measured rule rather than a rounded meter. */}
              <div className="mt-3 h-px w-full bg-rule">
                <motion.div
                  className="h-px bg-ink"
                  initial={{ width: reduced ? `${language.proficiency}%` : 0 }}
                  whileInView={{ width: `${language.proficiency}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: 0.06 * index, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
