"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "hover" | "drag">("default");
  const [label, setLabel]     = useState<string>("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 360, mass: 0.5 };
  const cx = useSpring(x, springConfig);
  const cy = useSpring(y, springConfig);

  const rafRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor]'
      ) as HTMLElement | null;
      if (interactive) {
        const dataLabel = interactive.getAttribute("data-cursor-label");
        const isDrag    = interactive.getAttribute("data-cursor") === "drag";
        setVariant(isDrag ? "drag" : "hover");
        setLabel(dataLabel ?? "");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = variant === "default" ? 12 : variant === "drag" ? 88 : 56;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: cx, y: cy }}
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      >
        <motion.div
          animate={{
            width: size,
            height: size,
            backgroundColor: variant === "default" ? "#F4EFE6" : "transparent",
            border: variant === "default" ? "1px solid transparent" : "1px solid #F4EFE6",
          }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
        >
          {label && (
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#F4EFE6] font-mono whitespace-nowrap">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
