"use client";

import { useEffect, useState } from "react";

export type ScrollDirection = "up" | "down" | "idle";

export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState<ScrollDirection>("idle");
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    let lastY  = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      if (Math.abs(y - lastY) > threshold) {
        setDirection(y > lastY ? "down" : "up");
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, scrolled };
}
