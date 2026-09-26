import { Fragment, type ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Wraps measurable figures (6+, 85%, 11, −85%, etc.) in strong ink so muted
 * prose stays scannable for recruiters without rewriting every string.
 */
const METRIC_PATTERN =
  /(-?\d+(?:[.,]\d+)?(?:\s*%|\+)?|\d+\+)/g;

export function MetricText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const pattern = new RegExp(METRIC_PATTERN.source, "g");

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={`${match.index}-${match[0]}`} className="tnum font-semibold text-ink">
        {match[0]}
      </strong>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return (
    <span className={cn(className)}>
      {parts.map((part, index) => (
        <Fragment key={index}>{part}</Fragment>
      ))}
    </span>
  );
}
