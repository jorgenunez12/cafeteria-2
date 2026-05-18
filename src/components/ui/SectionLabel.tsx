"use client";

import { motion } from "framer-motion";

interface Props {
  index?: string;
  label: string;
  className?: string;
}

export function SectionLabel({ index, label, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center gap-3 editorial-eyebrow text-espresso-700 ${className ?? ""}`}
    >
      {index && (
        <>
          <span className="text-sand-400">— {index}</span>
          <span className="h-px w-8 bg-espresso-900/30" />
        </>
      )}
      <span>{label}</span>
    </motion.div>
  );
}
