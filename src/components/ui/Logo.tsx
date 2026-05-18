import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className, variant = "default" }: Props) {
  const color = variant === "light" ? "text-bone-100" : "text-espresso-900";
  return (
    <a
      href="#top"
      aria-label="Ámbar — Specialty Coffee"
      className={cn("inline-flex items-baseline gap-2 group", color, className)}
    >
      <span className="font-display text-2xl tracking-tight leading-none">
        Ámbar
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60 group-hover:opacity-100 transition-opacity">
        · est. 14
      </span>
    </a>
  );
}
