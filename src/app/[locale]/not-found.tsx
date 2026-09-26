import { FaArrowRight } from "react-icons/fa6";

import { Button } from "@/components/ui/Button";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function NotFound() {
  // not-found.tsx cannot read route params, so it always renders in the default locale.
  const dict = getDictionary(defaultLocale);

  return (
    <section className="flex min-h-[70svh] items-center pt-24">
      <div className="section-shell">
        <p className="tnum font-mono text-meta text-accent uppercase">404</p>
        <h1 className="mt-4 text-hed font-semibold">{dict.notFound.title}</h1>
        <p className="measure mt-6 text-lede text-ink-muted">{dict.notFound.description}</p>
        <div className="mt-9">
          <Button href={`/${defaultLocale}`} variant="link">
            {dict.notFound.back}
            <FaArrowRight
              aria-hidden
              className="size-3 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
