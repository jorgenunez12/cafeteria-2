"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-espresso-900"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=2400&q=80"
          alt="Vapor sobre un espresso recién extraído"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/40 via-espresso-950/30 to-espresso-950/85" />
        <div className="absolute inset-0 bg-grain opacity-50" />
      </motion.div>

      {/* Top metadata strip */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-24 md:top-28 inset-x-0 z-10"
      >
        <div className="container-edge flex items-center justify-between text-bone-100/80">
          <span className="editorial-eyebrow">N° 014 — Madrid</span>
          <span className="editorial-eyebrow hidden md:block">40.4168° N · 3.7038° W</span>
          <span className="editorial-eyebrow">MMXIV — MMXXVI</span>
        </div>
      </motion.div>

      {/* Main editorial composition */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full container-edge flex flex-col justify-end pb-24 md:pb-28"
      >
        <div className="max-w-[1400px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-eyebrow text-sand-300 mb-8 md:mb-12 flex items-center gap-3"
          >
            <span className="w-10 h-px bg-sand-300" />
            Specialty Coffee · Slow Ritual
          </motion.p>

          <h1 className="font-display text-bone-100 leading-[0.92] tracking-[-0.025em]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(3rem,11vw,11rem)]"
              >
                Crafted
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(3rem,11vw,11rem)] italic text-sand-300"
              >
                coffee,
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(3rem,11vw,11rem)]"
              >
                quiet design.
              </motion.span>
            </span>
          </h1>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5 text-bone-100/70 font-body text-base md:text-lg leading-relaxed max-w-md"
            >
              Tostamos los lunes, extraemos sin prisa y servimos en
              cerámica artesanal. Una pausa pensada para volver al
              presente, en el centro de Madrid.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 md:justify-self-end flex flex-wrap gap-3"
            >
              <MagneticButton href="#menu" data-cursor="hover" data-cursor-label="Ver">
                Explorar el menú
              </MagneticButton>
              <a
                href="#story"
                className="btn-ghost border-bone-100/30 text-bone-100 hover:bg-bone-100 hover:text-espresso-900"
              >
                Nuestra historia
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-bone-100/60 hover:text-bone-100 transition-colors"
        aria-label="Desplazarse a la siguiente sección"
      >
        <span className="editorial-eyebrow">scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
