"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/cn";

type ParallaxWallpaperProps = {
  /** Image under `/public`. Defaults to the hero fog forest. */
  src?: string;
  /** Prefer true only once (hero). Mid-page instances stay lazy. */
  priority?: boolean;
  /** CSS object-position / background-position for the crop. */
  objectPosition?: string;
  /** Paper wash strength - higher = more readable type on top. */
  wash?: number;
  /**
   * `hero` - drifts as the hero leaves the top of the viewport.
   * `band` - drifts while the mid-page strip passes through.
   * `locked` - viewport-fixed via background-attachment; section is a window.
   */
  mode?: "hero" | "band" | "locked";
  /** Extra class on the absolute root. */
  className?: string;
};

function WashLayers({ wash }: { wash: number }) {
  return (
    <>
      <div className="absolute inset-0 bg-paper" style={{ opacity: wash }} />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            color-mix(in oklab, var(--color-paper) ${Math.round(wash * 55)}%, transparent),
            transparent 42%,
            color-mix(in oklab, var(--color-paper) ${Math.round(wash * 90)}%, transparent)
          )`,
        }}
      />
      <div className="hero-vignette absolute inset-0" />
      <div className="hero-grain absolute inset-0" />
    </>
  );
}

/**
 * Viewport-locked wallpaper. The bitmap stays pinned while the parent section
 * scrolls over it like a window. Touch / reduced-motion fall back to scroll.
 */
function LockedWallpaper({
  src,
  objectPosition,
  wash,
  className,
}: {
  src: string;
  objectPosition: string;
  wash: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("parallax-locked pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: objectPosition,
      }}
    >
      <div className="hero-fog absolute inset-0 opacity-45" />
      <div className="hero-fog hero-fog--late absolute inset-0" />
      <WashLayers wash={wash} />
    </div>
  );
}

function MotionWallpaper({
  src,
  priority,
  objectPosition,
  wash,
  mode,
  className,
}: Required<
  Pick<ParallaxWallpaperProps, "src" | "priority" | "objectPosition" | "wash" | "mode">
> & { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: mode === "hero" ? ["start start", "end start"] : ["start end", "end start"],
  });

  const scrollY = useTransform(
    scrollYProgress,
    [0, 1],
    mode === "hero" ? ["0%", "30%"] : ["-12%", "18%"],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    mode === "hero" ? [1, 1.14] : [1.06, 1.16],
  );
  const sceneOpacity = useTransform(
    scrollYProgress,
    mode === "hero" ? [0, 0.72, 1] : [0, 0.2, 0.8, 1],
    mode === "hero" ? [1, 0.92, 0.4] : [0.55, 1, 1, 0.55],
  );
  const mistOpacity = useTransform(
    scrollYProgress,
    mode === "hero" ? [0, 1] : [0, 0.5, 1],
    mode === "hero" ? [0.55, 0.2] : [0.35, 0.55, 0.25],
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 22, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 22, mass: 0.4 });
  const nearX = useTransform(springX, (v) => v * 1.55);
  const nearY = useTransform(springY, (v) => v * 1.35);

  useEffect(() => {
    if (reduceMotion) return;
    const root = ref.current?.parentElement;
    if (!root) return;

    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(nx * 28);
      mouseY.set(ny * 18);
    };

    const onLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [reduceMotion, mouseX, mouseY]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { opacity: sceneOpacity }}>
        <motion.div
          className="absolute inset-x-0 -top-[14%] h-[128%] w-full will-change-transform"
          style={reduceMotion ? undefined : { y: scrollY, scale, x: springX }}
        >
          <motion.div
            className="absolute inset-0"
            style={reduceMotion ? undefined : { y: springY }}
          >
            <div className="relative size-full">
              <Image
                src={src}
                alt=""
                fill
                priority={priority}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition }}
              />
            </div>
          </motion.div>
        </motion.div>

        {!reduceMotion && (
          <motion.div
            className="absolute inset-x-[-6%] -top-[8%] h-[120%] w-[112%] opacity-[0.22] will-change-transform"
            style={{ x: nearX, y: nearY, scale: 1.08 }}
          >
            <div className="relative size-full">
              <Image
                src={src}
                alt=""
                fill
                sizes="110vw"
                className="object-cover blur-[28px]"
                style={{ objectPosition: "center 55%" }}
              />
            </div>
          </motion.div>
        )}

        <motion.div
          className="hero-fog absolute inset-0"
          style={reduceMotion ? undefined : { opacity: mistOpacity }}
        />
        <div className="hero-fog hero-fog--late absolute inset-0" />
      </motion.div>

      <WashLayers wash={wash} />
    </div>
  );
}

/**
 * Fog wallpaper clipped to its parent. Scroll parallax, Ken Burns, pointer
 * drift, mist, vignette and grain - reuse anywhere a section wants atmosphere.
 */
export function ParallaxWallpaper({
  src = "/wallpaper/fog-trees-bw.webp",
  priority = false,
  objectPosition = "center 40%",
  wash = 0.66,
  mode = "band",
  className,
}: ParallaxWallpaperProps) {
  if (mode === "locked") {
    return (
      <LockedWallpaper
        src={src}
        objectPosition={objectPosition}
        wash={wash}
        className={className}
      />
    );
  }

  return (
    <MotionWallpaper
      src={src}
      priority={priority}
      objectPosition={objectPosition}
      wash={wash}
      mode={mode}
      className={className}
    />
  );
}
