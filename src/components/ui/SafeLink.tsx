import type { ReactNode } from "react";

import { externalLinkProps } from "@/lib/href";

type SafeLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

/** Anchor that applies the external-link decision; call sites only pick styling. */
export function SafeLink({ href, children, className, "aria-label": ariaLabel }: SafeLinkProps) {
  return (
    <a href={href} {...externalLinkProps(href)} aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}
