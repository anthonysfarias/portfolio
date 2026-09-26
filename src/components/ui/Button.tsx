import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";
import { isExternalHref } from "@/lib/href";

/** `link` is the typographic call to action: a rule under the words, no box. */
type Variant = "solid" | "outline" | "ghost" | "link";
type Size = "sm" | "md";

const base =
  "group inline-flex items-center gap-3 font-medium tracking-tight transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-accent",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink-muted hover:text-ink",
  link: "border-b border-ink pb-1.5 text-ink hover:border-accent hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-3 text-[0.95rem]",
};

type SharedProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & { href?: never };

type ButtonAsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "solid", size = "md", className, children, ...rest } = props;
  // A typographic link is set by its rule and its baseline, not by padding.
  const classes = cn(base, variants[variant], variant !== "link" && sizes[size], className);

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    // Unlike a social link, a mailto: button is an outbound action too.
    const external = isExternalHref(href) || href.startsWith("mailto:");

    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
