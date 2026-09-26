"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

import { LocaleToggle } from "./LocaleToggle";
import { profile } from "@/data/profile";
import { useI18n } from "@/i18n/useDictionary";
import { cn } from "@/lib/cn";
import { getNavItems, sectionIds } from "@/lib/sections";
import { useActiveSection } from "@/lib/useActiveSection";

export function Navbar() {
  const { dict, locale } = useI18n();
  const items = getNavItems(dict);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      // Keep the masthead visible while the drawer is open.
      setHidden(y > 80 && y > lastY && !open);
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-paper/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md transition-[border-color,box-shadow] duration-300",
          scrolled ? "border-rule shadow-[0_1px_0_0_var(--color-rule)]" : "border-transparent",
        )}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          aria-label={dict.nav.brandSuffix}
          className="section-shell flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-6"
        >
          {/* Masthead: the name is set as a nameplate, not wrapped in a logo chip. */}
          <a
            href={`/${locale}`}
            className="flex min-w-0 items-baseline gap-2.5 pr-2"
          >
            <span className="truncate text-[1.0625rem] leading-none font-semibold tracking-[-0.03em]">
              {profile.name}
            </span>
            <span className="hidden shrink-0 font-mono text-meta text-ink-muted uppercase md:inline">
              {dict.nav.brandSuffix}
            </span>
          </a>

          <div className="flex shrink-0 items-center gap-3 sm:gap-5 lg:gap-8">
            <ul className="hidden items-baseline gap-6 lg:flex">
              {items.map((item) => {
                const isActive = active === item.id;

                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative flex items-baseline gap-1.5 font-mono text-meta uppercase transition-colors duration-200",
                        isActive ? "text-ink" : "text-ink-muted hover:text-ink",
                      )}
                    >
                      {/* The one accent in the chrome: a printer's mark, not a pill. */}
                      <span
                        aria-hidden
                        className={cn(
                          "size-1 shrink-0 translate-y-[-0.15em] bg-accent transition-opacity duration-200",
                          !isActive && "opacity-0",
                        )}
                      />
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-ink"
                          aria-hidden
                          className="absolute inset-x-0 -bottom-1 h-px bg-ink"
                          transition={{ type: "spring", stiffness: 420, damping: 36 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 border-l border-rule pl-3 sm:gap-4 sm:pl-5 lg:pl-8">
              <LocaleToggle />

              {/* Shown only where the section list is hidden: at lg the list already
                  carries Contato and two of them would read as a duplicate. */}
              <a
                href="#contact"
                className="hidden border-b border-ink pb-0.5 font-mono text-meta uppercase transition-colors duration-200 hover:border-accent hover:text-accent sm:inline-block lg:hidden"
              >
                {dict.nav.contact}
              </a>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={dict.nav.openMenu}
                aria-expanded={open}
                className="flex min-h-11 min-w-11 items-center justify-center font-mono text-meta uppercase text-ink-muted transition-colors duration-200 hover:text-ink lg:hidden"
              >
                {dict.nav.openMenu}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/*
        Drawer lives outside the motion.header on purpose: any CSS transform on
        an ancestor (the hide-on-scroll translate) turns `position: fixed` into
        a relative-to-header box and clips the sheet to 4rem tall.
      */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label={dict.nav.closeMenu}
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-ink/25"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={dict.nav.brandSuffix}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 right-0 flex w-[min(21rem,100%)] max-w-[90vw] flex-col border-l border-rule bg-paper pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]"
            >
              <div className="flex h-16 items-center justify-between border-b border-rule px-5">
                <span className="font-mono text-meta text-ink-muted uppercase">
                  {dict.nav.brandSuffix}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={dict.nav.closeMenu}
                  className="text-ink-muted transition-colors duration-200 hover:text-ink"
                  autoFocus
                >
                  <FaXmark aria-hidden className="size-4" />
                </button>
              </div>

              <ul className="flex flex-col">
                {items.map((item) => (
                  <li key={item.id} className="border-b border-rule">
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-baseline gap-4 px-5 py-4 text-2xl tracking-[-0.03em] transition-colors duration-200",
                        active === item.id ? "text-ink" : "text-ink-muted hover:text-ink",
                      )}
                    >
                      <span
                        className={cn(
                          "tnum font-mono text-meta",
                          active === item.id ? "text-accent" : "text-ink-muted",
                        )}
                      >
                        {item.number}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between border-t border-rule px-5 py-5">
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-baseline gap-2 border-b border-ink pb-0.5 font-mono text-meta uppercase transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  {dict.hero.ctaCv}
                  <span aria-hidden>↓</span>
                </a>
                <LocaleToggle />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
