"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { galleryImages } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";

interface TileProps {
  src: string;
  alt: string;
  className: string;
  parallax?: number;
  index: number;
}

function Tile({ src, alt, className, parallax = 0, index }: TileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? [`${parallax}%`, `${-parallax}%`] : ["0%", "0%"]
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={cn("img-hover relative overflow-hidden rounded-sm bg-bone-200", className)}
    >
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="relative bg-bone-100 py-section overflow-hidden">
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="md:col-span-7">
            <SectionLabel index="04" label="Atmósfera" className="mb-8" />
            <RevealText
              as="h2"
              className="font-display text-display-2xl leading-[0.95] tracking-tight text-espresso-900"
            >
              {"Madera, luz tibia, silencio."}
            </RevealText>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-espresso-900/70 text-base md:text-lg leading-relaxed">
              Diseñado por Estudio Atelier, el espacio es una pausa
              acústica en el centro de Madrid. Maderas cepilladas,
              cerámica artesanal y luz indirecta.
            </p>
          </div>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {/* Row 1 */}
          <Tile
            index={0}
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            parallax={6}
            className="col-span-12 md:col-span-7 aspect-[4/3] md:aspect-[16/11]"
          />
          <Tile
            index={1}
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            parallax={-8}
            className="col-span-6 md:col-span-5 aspect-square md:mt-12"
          />

          {/* Row 2 */}
          <Tile
            index={2}
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            parallax={7}
            className="col-span-6 md:col-span-4 md:col-start-2 aspect-[3/4] md:-mt-8"
          />
          <Tile
            index={3}
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            parallax={-5}
            className="col-span-12 md:col-span-6 aspect-[16/10] md:mt-16"
          />

          {/* Row 3 */}
          <Tile
            index={4}
            src={galleryImages[5].src}
            alt={galleryImages[5].alt}
            parallax={5}
            className="col-span-6 md:col-span-3 aspect-square md:col-start-2"
          />
          <Tile
            index={5}
            src={galleryImages[6].src}
            alt={galleryImages[6].alt}
            parallax={-7}
            className="col-span-6 md:col-span-5 aspect-[5/4] md:mt-10"
          />
          <Tile
            index={6}
            src={galleryImages[7].src}
            alt={galleryImages[7].alt}
            parallax={4}
            className="col-span-12 md:col-span-3 aspect-[4/5] md:-mt-12"
          />
        </div>

        {/* Caption */}
        <div className="mt-16 pt-10 border-t border-espresso-900/10 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="editorial-eyebrow text-espresso-700">
              — Photography
            </span>
          </div>
          <div className="md:col-span-8">
            <p className="font-display italic text-2xl md:text-3xl text-espresso-900 leading-snug tracking-tight">
              «El espacio es la primera receta: una atmósfera donde el
              café puede ser entendido.»
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
