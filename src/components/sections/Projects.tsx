"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProjectTechnologies, projects } from "@/data/projects";
import { useI18n } from "@/i18n/useDictionary";
import { cn } from "@/lib/cn";

const technologies = getProjectTechnologies();

export function Projects() {
  const { dict } = useI18n();
  const [filter, setFilter] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter ? projects.filter((project) => project.tech.includes(filter)) : projects),
    [filter],
  );

  const count =
    visible.length === 1
      ? dict.projects.countOne
      : dict.projects.countMany.replace("{count}", String(visible.length));

  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        eyebrow={dict.projects.eyebrow}
        title={dict.projects.title}
        subtitle={dict.projects.subtitle}
      />

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
          <div className="scroll-rail -mx-1 px-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            <FilterChip active={filter === null} onClick={() => setFilter(null)}>
              {dict.projects.all}
            </FilterChip>
            {technologies.map((tech) => (
              <FilterChip
                key={tech}
                active={filter === tech}
                onClick={() => setFilter(filter === tech ? null : tech)}
              >
                {tech}
              </FilterChip>
            ))}
          </div>
          <span className="tnum shrink-0 font-mono text-meta text-ink-muted sm:ml-auto">
            {count}
          </span>
        </div>
      </Reveal>

      <motion.ul
        layout
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <p className="mt-12 text-sm text-ink-muted">{dict.projects.empty}</p>
      )}
    </Section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "relative shrink-0 border px-3 py-2 font-mono text-meta uppercase transition-colors duration-200 sm:py-1.5",
        active
          ? "border-ink text-paper"
          : "border-rule text-ink-muted hover:border-rule-strong hover:text-ink",
      )}
    >
      {active && (
        <motion.span
          layoutId="project-filter"
          className="absolute inset-0 -z-10 bg-ink"
          transition={{ type: "spring", stiffness: 400, damping: 34 }}
        />
      )}
      {children}
    </button>
  );
}
