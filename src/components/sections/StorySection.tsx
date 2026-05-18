"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";

const stats = [
  { value: "12",  label: "Años tostando" },
  { value: "07",  label: "Fincas amigas" },
  { value: "180", label: "Kg semanales"  },
];

export function StorySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-8%",  "12%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      id="story"
      className="relative bg-bone-100 py-section overflow-hidden"
    >
      <div className="container-edge">
        <SectionLabel index="01" label="Nuestra historia" className="mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left text column */}
          <div className="lg:col-span-7 lg:col-start-1">
            <RevealText
              as="h2"
              className="font-display text-display-2xl leading-[0.95] tracking-tight text-espresso-900"
            >
              {"Una pausa que sabe a tiempo, fuego y geografía."}
            </RevealText>

            <div className="mt-12 max-w-xl space-y-6 text-espresso-900/75 font-body text-base md:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Ámbar nació en 2014 en una pequeña esquina de Chueca,
                con un molino, una máquina de levas y la convicción
                de que el café merece ser tratado como un objeto de
                diseño: con respeto, precisión y silencio.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                Hoy seguimos comprando directo a productores que
                conocemos por nombre, tostando en pequeños lotes y
                sirviendo cada taza como una conversación lenta entre
                el origen y quien la bebe.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.dl
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
              className="mt-16 grid grid-cols-3 gap-6 border-t border-espresso-900/10 pt-10"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <dt className="font-display text-display-lg text-espresso-900 leading-none tracking-tight">
                    {s.value}
                  </dt>
                  <dd className="editorial-eyebrow text-espresso-700 mt-3">
                    {s.label}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          {/* Image column */}
          <div className="lg:col-span-5 lg:col-start-8 relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <motion.div
                style={{ y: y1 }}
                className="img-hover relative aspect-[3/4] mt-0 lg:mt-16 overflow-hidden rounded-sm"
              >
                <Image
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80"
                  alt="Interior cálido de Ámbar"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-100/90">
                  · 2014 — Madrid
                </div>
              </motion.div>

              <motion.div
                style={{ y: y2 }}
                className="img-hover relative aspect-[3/4] -mt-6 lg:-mt-8 overflow-hidden rounded-sm"
              >
                <Image
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80"
                  alt="Granos de café tostados"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.figure
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 lg:mt-12 border-l border-espresso-900/20 pl-6"
            >
              <blockquote className="font-display italic text-2xl md:text-3xl text-espresso-900 leading-snug tracking-tight">
                «Tratamos el café como un objeto de diseño: con respeto, precisión y silencio.»
              </blockquote>
              <figcaption className="mt-4 editorial-eyebrow text-espresso-700">
                — Manifiesto Ámbar
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
