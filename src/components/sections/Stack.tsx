"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getMarqueeSkills,
  hardSkillGroups,
  softSkillGroup,
  type Skill,
} from "@/data/skills";
import { useI18n } from "@/i18n/useDictionary";
import { cn } from "@/lib/cn";
import { getIcon } from "@/lib/icons";

const marqueeSkills = getMarqueeSkills();
const ease = [0.16, 1, 0.3, 1] as const;

export function Stack() {
  const { dict, pick } = useI18n();
  const [activeId, setActiveId] = useState(hardSkillGroups[0].id);
  const tablistId = useId();

  const activeIndex = hardSkillGroups.findIndex((group) => group.id === activeId);
  const activeGroup = hardSkillGroups[activeIndex] ?? hardSkillGroups[0];

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (delta === 0) return;
    event.preventDefault();
    const next = (activeIndex + delta + hardSkillGroups.length) % hardSkillGroups.length;
    setActiveId(hardSkillGroups[next].id);
    document.getElementById(`${tablistId}-${hardSkillGroups[next].id}`)?.focus();
  }

  return (
    <Section id="stack">
      <SectionHeading
        id="stack"
        eyebrow={dict.stack.eyebrow}
        title={dict.stack.title}
        subtitle={dict.stack.subtitle}
      />

      {/* Hard skills - technical domains behind tabs. */}
      <Reveal delay={0.08}>
        <h3 className="mt-12 font-mono text-meta text-ink-muted uppercase">
          {dict.stack.hardTitle}
        </h3>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          role="tablist"
          aria-label={dict.stack.hardTitle}
          onKeyDown={handleKeyDown}
          className="scroll-rail mt-5 gap-0 border border-rule sm:inline-flex sm:flex-wrap sm:overflow-visible"
        >
          {hardSkillGroups.map((group) => {
            const Icon = getIcon(group.icon);
            const isActive = group.id === activeId;

            return (
              <button
                key={group.id}
                id={`${tablistId}-${group.id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`${tablistId}-panel`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(group.id)}
                className={cn(
                  "relative flex shrink-0 items-center gap-2 border-l border-rule px-4 py-3 font-mono text-meta uppercase transition-colors duration-200 first:border-l-0 sm:py-2.5",
                  isActive ? "text-paper" : "text-ink-muted hover:text-ink",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="stack-tab"
                    className="absolute inset-0 -z-10 bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <Icon aria-hidden className="size-3.5" />
                {pick(group.label)}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div
        id={`${tablistId}-panel`}
        role="tabpanel"
        aria-labelledby={`${tablistId}-${activeId}`}
        className="mt-8"
      >
        <p className="measure text-sm leading-relaxed text-ink-muted">
          {pick(activeGroup.description)}
        </p>

        <AnimatePresence mode="wait">
          <SkillGrid key={activeId} skills={activeGroup.skills} pick={pick} />
        </AnimatePresence>
      </div>

      <Reveal delay={0.12} className="mt-14 border-t border-rule pt-6">
        <Marquee skills={marqueeSkills} />
      </Reveal>

      {/* Soft skills - own block, not mixed into the technical tabs. */}
      <Reveal delay={0.08}>
        <div className="mt-16 border-t border-rule pt-10 sm:mt-20">
          <h3 className="font-mono text-meta text-ink-muted uppercase">
            {dict.stack.softTitle}
          </h3>
          <p className="measure mt-4 text-sm leading-relaxed text-ink-muted">
            {pick(softSkillGroup.description)}
          </p>
          <SkillGrid skills={softSkillGroup.skills} pick={pick} />
        </div>
      </Reveal>
    </Section>
  );
}

function SkillGrid({
  skills,
  pick,
}: {
  skills: Skill[];
  pick: <T>(value: { pt: T; en: T }) => T;
}) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease }}
      className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
    >
      {skills.map((skill, index) => {
        const Icon = getIcon(skill.icon);

        return (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            className="group flex items-center gap-3 border-t border-rule pt-3 transition-colors duration-200 hover:border-rule-strong"
          >
            <span className="shrink-0 text-ink-muted transition-colors duration-200 group-hover:text-ink">
              <Icon aria-hidden className="size-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium tracking-[-0.01em]">
                {skill.label ? pick(skill.label) : skill.name}
              </span>
              <span className="mt-0.5 block font-mono text-meta leading-snug text-ink-muted text-pretty">
                {pick(skill.note)}
              </span>
            </span>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
