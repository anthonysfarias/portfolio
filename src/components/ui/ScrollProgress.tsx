"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thin ink rule that fills across the masthead as the page is read. */
export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.35,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-accent"
      style={reduceMotion ? { scaleX: scrollYProgress } : { scaleX }}
    />
  );
}
