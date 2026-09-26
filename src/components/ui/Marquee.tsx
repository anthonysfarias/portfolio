"use client";

import { motion, useReducedMotion } from "framer-motion";

import { getIcon } from "@/lib/icons";
import type { Skill } from "@/data/skills";

/**
 * Slow editorial ticker. Duplicates the row so the loop can run seamless;
 * paused for reduced-motion users as a static wrapped index.
 */
export function Marquee({ skills }: { skills: Skill[] }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
        {skills.map((skill) => {
          const Icon = getIcon(skill.icon);
          return (
            <li key={skill.name} className="flex items-center gap-2 text-ink-muted">
              <Icon aria-hidden className="size-3.5" />
              <span className="font-mono text-meta whitespace-nowrap">{skill.name}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  const row = (
    <ul className="flex shrink-0 items-center gap-10 pr-10">
      {skills.map((skill) => {
        const Icon = getIcon(skill.icon);
        return (
          <li key={skill.name} className="flex items-center gap-2 text-ink-muted">
            <Icon aria-hidden className="size-3.5" />
            <span className="font-mono text-meta whitespace-nowrap">{skill.name}</span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="hero-marquee relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper to-transparent" />
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 48, ease: "linear", repeat: Infinity }}
      >
        {row}
        <ul aria-hidden className="flex shrink-0 items-center gap-10 pr-10">
          {skills.map((skill) => {
            const Icon = getIcon(skill.icon);
            return (
              <li key={`dup-${skill.name}`} className="flex items-center gap-2 text-ink-muted">
                <Icon aria-hidden className="size-3.5" />
                <span className="font-mono text-meta whitespace-nowrap">{skill.name}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
