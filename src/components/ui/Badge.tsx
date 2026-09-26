import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import type { ProjectStatus } from "@/data/projects";

/** A hairline-boxed mono tag. Square, unfilled, no blur. */
export function Badge({
  children,
  className,
  icon,
}: {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border border-rule px-2 py-1 font-mono text-meta text-ink-muted uppercase",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}

/** Each hue is dark enough to carry its own label on paper (>= 4.5:1). */
const statusStyles: Record<ProjectStatus, string> = {
  live: "text-live",
  progress: "text-progress",
  done: "text-ink-muted",
  beta: "text-accent",
  soon: "text-planned",
  paused: "text-ink-muted",
};

export function StatusBadge({ status, label }: { status: ProjectStatus; label: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 bg-paper px-2 py-1 font-mono text-meta uppercase",
        statusStyles[status],
      )}
    >
      <span aria-hidden className="size-1.5 bg-current" />
      {label}
    </span>
  );
}
