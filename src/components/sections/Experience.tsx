"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";

import { Badge } from "@/components/ui/Badge";
import { MetricText } from "@/components/ui/MetricText";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { SafeLink } from "@/components/ui/SafeLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { useI18n } from "@/i18n/useDictionary";
import { cn } from "@/lib/cn";

export function Experience() {
  const { dict, pick } = useI18n();
  const reduced = useReducedMotion();
  const railRef = useRef<HTMLOListElement>(null);

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 65%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const scaleY = useTransform(progress, (value) => (reduced ? 1 : value));

  return (
    <Section id="experience">
      <SectionHeading
        id="experience"
        eyebrow={dict.experience.eyebrow}
        title={dict.experience.title}
        subtitle={dict.experience.subtitle}
      />

      <ol ref={railRef} className="relative mt-16 space-y-6">
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[0.9375rem] w-px bg-rule sm:left-[1.1875rem]"
        />
        <motion.span
          aria-hidden
          style={{ scaleY }}
          className="absolute top-2 bottom-2 left-[0.9375rem] w-px origin-top bg-ink sm:left-[1.1875rem]"
        />

        {experiences.map((experience, index) => {
          const achievements = pick(experience.achievements);

          return (
            <Reveal
              as="li"
              key={experience.id}
              delay={index * 0.05}
              className="relative pl-11 sm:pl-16"
            >
              <motion.span
                aria-hidden
                initial={{ scale: 0.72, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-1.5 left-0 flex size-8 items-center justify-center border border-ink bg-paper text-ink sm:size-10"
              >
                <FaBriefcase className="size-3 sm:size-3.5" />
              </motion.span>

              <Panel className="p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <h3 className="text-lg leading-snug font-medium tracking-[-0.02em] sm:text-xl">
                      {pick(experience.role)}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink">
                      {experience.companyUrl ? (
                        <SafeLink
                          href={experience.companyUrl}
                          className="underline-offset-4 hover:text-accent hover:underline"
                        >
                          {experience.company}
                        </SafeLink>
                      ) : (
                        experience.company
                      )}
                    </p>
                    <p className="mt-0.5 text-sm leading-snug text-ink-muted">
                      {pick(experience.companyBlurb)}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="tnum font-mono text-meta text-ink-muted">
                      {pick(experience.period)}
                    </span>
                    {experience.current && (
                      <Badge className="text-live">{dict.experience.current}</Badge>
                    )}
                  </div>
                </div>

                <p className="mt-3 flex items-center gap-2 font-mono text-meta text-ink-muted">
                  <FaLocationDot aria-hidden className="size-3" />
                  {pick(experience.location)}
                </p>

                <p className="measure mt-4 text-sm leading-relaxed text-ink-muted">
                  <MetricText text={pick(experience.summary)} />
                </p>

                <div className="mt-6">
                  <p className="font-mono text-meta text-ink-muted uppercase">
                    {dict.experience.achievements}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {achievements.map((achievement, achievementIndex) => {
                      const isKeyResult = experience.current && achievementIndex === 0;

                      return (
                        <li
                          key={achievement}
                          className={cn(
                            "measure flex gap-3 text-sm leading-relaxed",
                            isKeyResult
                              ? "border-l-2 border-ink bg-paper-shade/60 py-3 pr-3 pl-4 text-ink"
                              : "text-ink-muted",
                          )}
                        >
                          {!isKeyResult && (
                            <span
                              aria-hidden
                              className="mt-2 size-1 shrink-0 bg-ink-muted"
                            />
                          )}
                          <span className="min-w-0">
                            {isKeyResult && (
                              <span className="mb-1.5 block font-mono text-meta text-accent uppercase">
                                {dict.experience.keyResult}
                              </span>
                            )}
                            <MetricText text={achievement} />
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-rule pt-5">
                  {experience.stack.map((tech) => (
                    <li key={tech}>
                      <Badge className="normal-case">{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
