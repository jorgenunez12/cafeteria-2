"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { brand } from "@/lib/data/brand";

export function VisitSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y     = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section
      id="visit"
      ref={ref}
      className="relative bg-espresso-900 text-bone-100 overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 opacity-30 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/70 via-espresso-900/85 to-espresso-900" />
      </motion.div>
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />

      <div className="container-edge relative py-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left CTA */}
          <div className="lg:col-span-7">
            <SectionLabel
              index="06"
              label="Visítanos"
              className="mb-10 text-sand-300"
            />

            <RevealText
              as="h2"
              className="font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.92] tracking-[-0.025em] text-bone-100"
            >
              {"Reserva una mesa, un silencio, un café."}
            </RevealText>

            <p className="mt-10 max-w-xl text-bone-100/70 text-base md:text-lg leading-relaxed">
              Te esperamos en el corazón de Chueca. Aceptamos
              reservas para grupos pequeños y eventos privados a
              partir de las 20:00.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              <MagneticButton
                href={`mailto:${brand.contact.email}?subject=Reserva%20en%20%C3%81mbar`}
                data-cursor="hover"
                data-cursor-label="reservar"
                className="bg-bone-100 text-espresso-900 hover:bg-sand-300"
              >
                Reservar mesa
                <ArrowUpRight size={16} />
              </MagneticButton>
              <a
                href={`tel:${brand.contact.phone.replace(/\s/g, "")}`}
                className="btn-ghost border-bone-100/30 text-bone-100 hover:bg-bone-100 hover:text-espresso-900"
              >
                Llamar al café
              </a>
            </div>
          </div>

          {/* Right info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="bg-bone-100/5 backdrop-blur-md border border-bone-100/10 rounded-sm p-8 md:p-10 space-y-8">
              <div>
                <span className="editorial-eyebrow text-sand-300 flex items-center gap-3">
                  <MapPin size={12} /> Ubicación
                </span>
                <p className="mt-4 font-display text-2xl md:text-3xl tracking-tight text-bone-100 leading-tight">
                  {brand.address.street}
                </p>
                <p className="text-bone-100/70 mt-1">
                  {brand.address.city} · {brand.address.country}
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-sand-300 hover:text-bone-100 transition-colors"
                >
                  Cómo llegar <ArrowUpRight size={12} />
                </a>
              </div>

              <div className="h-px bg-bone-100/10" />

              <div>
                <span className="editorial-eyebrow text-sand-300 flex items-center gap-3">
                  <Clock size={12} /> Horario
                </span>
                <ul className="mt-4 space-y-2.5">
                  {brand.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between items-baseline gap-4 text-bone-100/85"
                    >
                      <span className="text-sm">{h.day}</span>
                      <span className="font-mono text-sm tabular-nums">
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-bone-100/10" />

              <div>
                <span className="editorial-eyebrow text-sand-300 flex items-center gap-3">
                  <Phone size={12} /> Contacto
                </span>
                <div className="mt-4 space-y-2 text-bone-100/85">
                  <a
                    href={`mailto:${brand.contact.email}`}
                    className="block text-sm hover:text-sand-300 transition-colors"
                  >
                    {brand.contact.email}
                  </a>
                  <a
                    href={`tel:${brand.contact.phone.replace(/\s/g, "")}`}
                    className="block text-sm hover:text-sand-300 transition-colors"
                  >
                    {brand.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
