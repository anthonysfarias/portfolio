import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Replaces the old glass card. Structure now comes from a hairline and the
 * space around it: no fill, no blur, no shadow, square corners. On hover the
 * left rule thickens into ink - a press mark, not a lift.
 */
export function Panel({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li" | "section";
}) {
  return (
    <Tag
      className={cn(
        "border border-rule transition-[border-color,box-shadow] duration-300",
        "hover:border-rule-strong hover:shadow-[-3px_0_0_0_var(--color-ink)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
