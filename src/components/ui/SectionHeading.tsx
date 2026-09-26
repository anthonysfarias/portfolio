"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/cn";
import { sectionNumber, type SectionId } from "@/lib/sections";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Numbered in the margin, titled in the field: the label sits in columns 1-3
 * and the heading starts at column 5, so no section opens on centre.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  className,
}: {
  id: SectionId;
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("grid-12 gap-y-5", className)}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease }}
        className="col-span-12 flex items-baseline gap-2.5 font-mono text-meta uppercase sm:col-span-3"
      >
        <span className="tnum text-accent">{sectionNumber(id)}</span>
        <span className="text-ink-muted">{eyebrow}</span>
      </motion.p>

      <div className="col-span-12 sm:col-span-9 sm:col-start-4 lg:col-span-8 lg:col-start-5">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.05, ease }}
          className="text-hed font-semibold text-balance"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
            className="measure mt-6 text-lede text-ink-muted"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, delay: 0.18, ease }}
          className="mt-8 block h-px origin-left bg-rule"
        />
      </div>
    </div>
  );
}
