"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

import { SafeLink } from "@/components/ui/SafeLink";
import { SocialIconList } from "@/components/ui/SocialIconList";
import { profile } from "@/data/profile";
import { useI18n } from "@/i18n/useDictionary";

export function Footer() {
  const { dict, pick } = useI18n();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-rule bg-paper-shade py-12">
      <div className="section-shell flex flex-col gap-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.03em]">{profile.name}</p>
            <p className="mt-1.5 text-sm text-ink-muted">{pick(profile.role)}</p>
            <p className="mt-0.5 font-mono text-meta text-ink-muted uppercase">
              {pick(profile.location)}
            </p>
          </div>

          <SocialIconList
            className="flex items-center gap-5"
            linkClassName="block text-ink-muted transition-colors duration-200 hover:text-accent"
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-rule pt-6 font-mono text-meta text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. {dict.footer.rights}
          </p>
          <p className="flex flex-wrap items-center gap-3">
            <span>{dict.footer.tagline}</span>
            <SafeLink
              href={profile.sourceUrl}
              className="text-ink underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {dict.footer.sourceCode}
            </SafeLink>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={dict.footer.toTop}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="fixed right-[max(1.25rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 flex size-11 items-center justify-center bg-ink text-paper transition-colors duration-200 hover:bg-accent sm:right-8 sm:bottom-8 sm:size-10"
          >
            <FaArrowUp aria-hidden className="size-3.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
