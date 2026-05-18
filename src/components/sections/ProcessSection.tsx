"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { processSteps } from "@/lib/data/process";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-espresso-900 text-bone-100 py-section overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-50" />

      {/* Background image accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-15 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          sizes="50vw"
          className="object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-espresso-900/50 to-espresso-900" />
      </div>

      <div className="container-edge relative">
        <SectionLabel
          index="03"
          label="El ritual"
          className="mb-12 text-sand-300"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 md:mb-28">
          <RevealText
            as="h2"
            className="lg:col-span-8 font-display text-display-2xl leading-[0.95] tracking-tight text-bone-100"
          >
            {"Del grano a la taza, cuatro gestos lentos."}
          </RevealText>
          <p className="lg:col-span-4 lg:pt-6 text-bone-100/70 text-base md:text-lg leading-relaxed">
            Cada paso del proceso protege algo: el aroma, la
            geografía, el tiempo. Lo único que aceleramos es la
            cortesía con la que servimos.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bone-100/10 border border-bone-100/10">
          {processSteps.map((step, i) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative bg-espresso-900 p-8 md:p-10 group hover:bg-espresso-800 transition-colors duration-700"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="editorial-number text-sand-300 text-sm">
                  {step.index}
                </span>
                <span className="editorial-eyebrow text-bone-100/40">
                  {String(processSteps.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-display text-display-lg leading-none tracking-tight text-bone-100 mb-6">
                {step.title}
              </h3>

              <p className="text-bone-100/70 text-sm md:text-[15px] leading-relaxed mb-8">
                {step.description}
              </p>

              <div className="pt-6 border-t border-bone-100/10">
                <span className="editorial-eyebrow text-sand-300">
                  {step.detail}
                </span>
              </div>

              {/* Hover indicator */}
              <span
                aria-hidden
                className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-sand-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
