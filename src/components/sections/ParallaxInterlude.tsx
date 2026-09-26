"use client";

import { motion } from "framer-motion";

import { MetricText } from "@/components/ui/MetricText";
import { ParallaxWallpaper } from "@/components/ui/ParallaxWallpaper";
import { useI18n } from "@/i18n/useDictionary";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Mid-page hinge between career and work. The mountain wallpaper stays locked
 * to the viewport; this section is only the window that reveals it.
 */
export function ParallaxInterlude() {
  const { dict } = useI18n();

  return (
    <section
      aria-label={dict.interlude.eyebrow}
      className="relative flex min-h-[min(62svh,28rem)] items-center overflow-hidden border-y border-rule sm:min-h-[min(70svh,36rem)]"
    >
      <ParallaxWallpaper
        mode="locked"
        src="/wallpaper/mountains-pine-serrated-bw.webp"
        objectPosition="center 55%"
        wash={0.55}
      />

      <div className="section-shell relative z-10 w-full py-20 sm:py-24">
        <div className="grid-12 items-end gap-y-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease }}
            className="col-span-12 font-mono text-meta text-ink-muted uppercase sm:col-span-3"
          >
            {dict.interlude.eyebrow}
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="col-span-12 sm:col-span-9 sm:col-start-4 lg:col-span-7 lg:col-start-5"
          >
            <p className="text-hed font-semibold text-balance tracking-[-0.03em]">
              {dict.interlude.line}
            </p>
            <p className="measure mt-6 text-lede text-ink-muted">
              <MetricText text={dict.interlude.aside} />
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
