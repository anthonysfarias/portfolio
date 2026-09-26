"use client";

import { useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Animates a printed numeral into place when it enters the viewport.
 * Keeps any non-digit suffix ("+", "%") so the typesetting stays intact.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match?.[2] ?? "";

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (!match) return;

    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [match, spring, suffix]);

  useEffect(() => {
    if (!match || !inView) return;

    if (reduceMotion) {
      motionValue.jump(target);
      return;
    }

    motionValue.set(target);
  }, [inView, match, motionValue, reduceMotion, target]);

  if (!match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
