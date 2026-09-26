"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which anchor section is closest to the top of the viewport.
 * Uses a rootMargin band instead of thresholds so tall and short
 * sections are treated the same way.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        // Clearing on an empty band matters: above the first section nothing
        // intersects, and without this the marker would stay on whichever
        // section was last visited.
        setActive(visible.length > 0 ? visible[0].target.id : null);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
