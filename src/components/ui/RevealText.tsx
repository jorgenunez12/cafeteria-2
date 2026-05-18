"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  splitBy?: "word" | "line";
  lines?: string[];
}

export function RevealText({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
  splitBy = "word",
  lines,
}: Props) {
  const tokens =
    splitBy === "line" && lines
      ? lines
      : children.split(splitBy === "word" ? " " : "\n");

  return (
    <Tag className={cn("inline-block", className)}>
      {tokens.map((token, i) => (
        <span key={`${token}-${i}`} className="reveal-mask">
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.95,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.05,
            }}
            className="inline-block"
          >
            {token}
            {splitBy === "word" && i < tokens.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
