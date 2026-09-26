"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger in seconds, for lists that reveal one item after another. */
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "li" | "section" | "article" | "header" | "span";
};

/** Small on purpose: the reveal should read as ink settling, not as a slide-in. */
const offsets = {
  up: { x: 0, y: 12 },
  down: { x: 0, y: -12 },
  left: { x: 12, y: 0 },
  right: { x: -12, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: RevealProps) {
  const Tag = motion[as];
  const offset = offsets[direction];

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
