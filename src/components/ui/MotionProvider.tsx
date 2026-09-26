"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` drops transform animations while keeping opacity, so
 * components never have to branch their `initial` on a client-only preference -
 * which would render differently on the server and break hydration. The CSS
 * reduced-motion query cannot cover this: framer-motion animates via script,
 * not CSS transitions.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
