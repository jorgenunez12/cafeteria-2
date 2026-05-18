import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

export const stagger = (delay = 0.08) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay, delayChildren: 0.1 },
  },
});

export const maskReveal = {
  hidden: { y: "110%" },
  show:   { y: "0%",   transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] as const } },
};
