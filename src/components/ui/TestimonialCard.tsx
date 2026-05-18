"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

export function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative bg-bone-50 border border-espresso-900/8 rounded-sm p-8 md:p-10 hover:bg-bone-100 hover:border-espresso-900/20 transition-all duration-500"
    >
      <Quote
        size={28}
        className="text-sand-400 opacity-40 mb-6 transition-transform duration-500 group-hover:scale-110"
      />

      <blockquote className="font-display text-xl md:text-2xl leading-snug tracking-tight text-espresso-900">
        «{testimonial.quote}»
      </blockquote>

      <figcaption className="mt-8 pt-6 border-t border-espresso-900/10 flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-espresso-900/15">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="font-display text-base text-espresso-900 leading-tight">
            {testimonial.author}
          </p>
          <p className="editorial-eyebrow text-espresso-700 mt-1 truncate">
            {testimonial.role}
          </p>
        </div>
        <div className="ml-auto flex gap-0.5" aria-label={`${testimonial.rating} de 5`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} aria-hidden className="text-sand-400 text-xs">
              ★
            </span>
          ))}
        </div>
      </figcaption>
    </motion.figure>
  );
}
