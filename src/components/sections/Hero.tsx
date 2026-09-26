"use client";

import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { MetricText } from "@/components/ui/MetricText";
import { PageIndex } from "@/components/ui/PageIndex";
import { ParallaxWallpaper } from "@/components/ui/ParallaxWallpaper";
import { SocialIconList } from "@/components/ui/SocialIconList";
import { experiences } from "@/data/experience";
import { hiring, profile } from "@/data/profile";
import { useI18n } from "@/i18n/useDictionary";

const current = experiences[0];

/** "Anthony Farias" is set as two stacked lines; the break comes from the data. */
const [firstName, ...restOfName] = profile.name.split(" ");
const lastName = restOfName.join(" ");

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { dict, pick } = useI18n();

  const captionRows = [
    { term: dict.hero.lookingFor, detail: pick(hiring.lookingFor) },
    { term: dict.hero.workModel, detail: pick(hiring.workModel) },
    { term: dict.experience.stackLabel, detail: current.stack.slice(0, 4).join(", ") },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-[calc(4.5rem+env(safe-area-inset-top,0px))] pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:pt-28 lg:pt-32"
    >
      <ParallaxWallpaper mode="hero" priority objectPosition="center 40%" wash={0.45} />

      <div className="section-shell relative">
        {/* Slug line: who is speaking on the left, availability on the right. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col gap-1 border-b border-rule pb-3 font-mono text-meta uppercase sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-6"
        >
          <span className="text-ink-muted">{dict.hero.greeting}</span>
          <span className="flex items-baseline gap-2 text-ink-muted">
            <span
              aria-hidden
              className="size-1.5 shrink-0 translate-y-[-0.1em] bg-accent motion-safe:animate-pulse"
            />
            {dict.hero.status}
          </span>
        </motion.div>

        {/* The nameplate, with the roles credited in the right columns and set on
            the baseline of the last line rather than under it. */}
        <div className="grid-12 mt-6 items-end gap-y-6 sm:mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="col-span-12 text-display font-bold lg:col-span-8"
          >
            {/* The trailing space keeps the name one readable string when copied
                or announced, without affecting the two-line setting. */}
            <span className="block">{firstName} </span>
            <span className="block">{lastName}</span>
          </motion.h1>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="col-span-12 divide-y divide-rule border-t border-rule sm:col-span-8 lg:col-span-4 lg:col-start-9 lg:pb-3"
          >
            {pick(profile.roles).map((role) => (
              <li key={role} className="py-2 text-base leading-snug tracking-[-0.02em] sm:text-lg">
                {role}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div className="section-shell relative mt-10 sm:mt-16">
        <div className="grid-12 gap-y-10 border-t border-rule pt-6 sm:gap-y-12 sm:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="col-span-12 lg:col-span-6"
          >
            <p className="measure text-lede text-ink">
              <MetricText text={dict.hero.intro} />
            </p>

            <div className="mt-7 flex flex-col items-start gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-10 sm:gap-y-5">
              <Button href="#contact" variant="link">
                {dict.hero.ctaContact}
                <FaArrowRight
                  aria-hidden
                  className="size-3 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Button>
              <Button href={profile.cv} download variant="link">
                {dict.hero.ctaCv}
                <FaArrowDown
                  aria-hidden
                  className="size-3 transition-transform duration-200 group-hover:translate-y-1"
                />
              </Button>
              <Button href="#projects" variant="link">
                {dict.hero.ctaProjects}
                <FaArrowRight
                  aria-hidden
                  className="size-3 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </motion.div>

          {/* Hiring snapshot in the margin: what recruiters scan in seconds. */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36, ease }}
            className="col-span-12 border-t border-rule pt-5 sm:col-span-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6"
          >
            <p className="font-mono text-meta text-ink-muted uppercase">{dict.hero.fitLabel}</p>
            <p className="mt-2.5 text-lg leading-snug font-medium tracking-[-0.02em]">
              {pick(current.role)}
            </p>
            <p className="mt-0.5 text-sm text-ink-muted">{current.company}</p>

            <dl className="mt-5 divide-y divide-rule border-t border-rule font-mono text-meta">
              {captionRows.map((row) => (
                <div
                  key={row.term}
                  className="flex flex-col gap-0.5 py-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <dt className="shrink-0 text-ink-muted uppercase">{row.term}</dt>
                  <dd className="text-ink sm:text-right">{row.detail}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>
      </div>

      {/* Colophon row: place of work, channels, and the way down. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease }}
        className="section-shell relative mt-10 sm:mt-16"
      >
        <div className="flex flex-col gap-4 border-t border-rule pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-8 sm:gap-y-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="font-mono text-meta text-ink-muted uppercase">
              {pick(profile.location)}
            </span>
            <SocialIconList
              className="flex items-center gap-4"
              linkClassName="flex size-10 items-center justify-center text-ink-muted transition-colors duration-200 hover:text-accent sm:size-auto sm:block"
            />
          </div>

          <a
            href="#about"
            className="group flex items-baseline gap-2 font-mono text-meta text-ink-muted uppercase transition-colors duration-200 hover:text-ink"
          >
            {dict.hero.scroll}
            <motion.span
              aria-hidden
              className="inline-flex"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaArrowDown className="size-2.5 transition-transform duration-200 group-hover:translate-y-0.5" />
            </motion.span>
          </a>
        </div>

        {/* TOC is in the drawer on small screens; keep the jump list from sm up. */}
        <PageIndex className="mt-8 hidden sm:block" />
      </motion.div>
    </section>
  );
}
