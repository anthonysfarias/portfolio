import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * The type scale lives in `@theme` as `--text-display`, `--text-hed`, and so on.
 * tailwind-merge cannot tell those apart from `text-<colour>`, so without this
 * extension a size and a colour in the same `cn()` call collide and the size is
 * dropped. Declare them as font sizes and they only conflict with each other.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "hed", "stat", "lede", "meta"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
