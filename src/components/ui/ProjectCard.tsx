"use client";

import Image from "next/image";
import type { IconType } from "react-icons";
import { FaArrowUpRightFromSquare, FaCode, FaLock } from "react-icons/fa6";

import { Badge, StatusBadge } from "./Badge";
import { MetricText } from "./MetricText";
import { Panel } from "./Panel";
import { SafeLink } from "./SafeLink";
import type { Project } from "@/data/projects";
import { useI18n } from "@/i18n/useDictionary";
import { cn } from "@/lib/cn";

type CardLink = { href: string; Icon: IconType; iconClassName: string; label: string };

export function ProjectCard({ project }: { project: Project }) {
  const { dict, pick } = useI18n();
  const title = project.localizedTitle ? pick(project.localizedTitle) : project.title;
  const hasFooter = Boolean(project.demoUrl || project.codeUrl || project.internal);

  const links: CardLink[] = [];
  if (project.demoUrl) {
    links.push({
      href: project.demoUrl,
      Icon: FaArrowUpRightFromSquare,
      iconClassName: "size-3",
      label: dict.projects.demo,
    });
  }
  if (project.codeUrl) {
    links.push({
      href: project.codeUrl,
      Icon: FaCode,
      iconClassName: "size-3.5",
      label: dict.projects.code,
    });
  }

  return (
    <Panel as="article" className="group flex h-full flex-col">
      <div className="relative aspect-16/10 overflow-hidden border-b border-rule bg-paper-shade">
        {project.image ? (
          <Image
            src={project.image}
            alt={title}
            fill
            // A `sizes` hint tuned to the card would make the optimiser serve a
            // variant narrower than the small square source and upscale it.
            sizes={
              project.compactImage
                ? "160px"
                : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            }
            className={cn(
              "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]",
              project.imageFit === "cover" ? "object-cover" : "object-contain p-8",
              project.compactImage && "p-12 lg:p-14",
            )}
          />
        ) : (
          <span aria-hidden className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-5xl font-semibold tracking-tight text-ink-muted transition-colors duration-300 group-hover:text-ink">
              {title.slice(0, 2).toUpperCase()}
            </span>
          </span>
        )}

        <span className="absolute top-0 left-0 border-r border-b border-rule">
          <StatusBadge status={project.status} label={dict.status[project.status]} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-medium tracking-[-0.02em]">
          {project.demoUrl ? (
            <SafeLink
              href={project.demoUrl}
              className="transition-colors duration-200 hover:text-accent"
            >
              {title}
            </SafeLink>
          ) : (
            title
          )}
        </h3>
        <p className="mt-1.5 font-mono text-meta text-ink uppercase">{pick(project.context)}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
          <MetricText text={pick(project.description)} />
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Badge className="normal-case">{tech}</Badge>
            </li>
          ))}
        </ul>

        {hasFooter && (
          <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-rule pt-4">
            {links.map(({ href, Icon, iconClassName, label }) => (
              <SafeLink
                key={href}
                href={href}
                className="inline-flex items-center gap-2 font-mono text-meta uppercase transition-colors duration-200 hover:text-accent"
              >
                <Icon aria-hidden className={iconClassName} />
                {label}
              </SafeLink>
            ))}
            {project.internal && (
              <span className="inline-flex items-center gap-2 font-mono text-meta text-ink-muted uppercase">
                <FaLock aria-hidden className="size-3" />
                {dict.projects.internal}
              </span>
            )}
          </div>
        )}
      </div>
    </Panel>
  );
}
