import type { ReactNode } from "react";

import type { SectionId } from "@/lib/sections";

/**
 * The anchored, padded shell every content section shares, opened by a
 * full-bleed hairline. Hero is deliberately not built on it: it is full-height
 * and sets its own rules.
 *
 * The anchor offset comes from `scroll-padding-top` on `html` alone; a
 * `scroll-mt-*` here would stack with it and drop the rule far below the masthead.
 */
export function Section({ id, children }: { id: SectionId; children: ReactNode }) {
  return (
    <section id={id} className="section-rhythm border-t border-rule">
      <div className="section-shell">{children}</div>
    </section>
  );
}
