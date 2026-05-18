"use client";

import { forwardRef, useRef } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}

export const MagneticButton = forwardRef<HTMLAnchorElement, Props>(
  function MagneticButton({ href, variant = "primary", className, children, ...rest }, _) {
    const inner = useMagnetic<HTMLSpanElement>(0.25);
    const wrapper = useRef<HTMLAnchorElement>(null);

    const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width)  * 100;
      const my = ((e.clientY - rect.top)  / rect.height) * 100;
      e.currentTarget.style.setProperty("--mx", `${mx}%`);
      e.currentTarget.style.setProperty("--my", `${my}%`);
    };

    return (
      <a
        ref={wrapper}
        href={href}
        onMouseMove={handleMove}
        className={cn(
          variant === "primary" ? "btn-primary" : "btn-ghost",
          "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          className
        )}
        {...rest}
      >
        <span ref={inner} className="inline-flex items-center gap-3">
          {children}
        </span>
      </a>
    );
  }
);
