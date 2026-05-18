"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { MenuCard } from "@/components/ui/MenuCard";
import { menuCategories, menuItems } from "@/lib/data/menu";
import type { MenuCategory } from "@/types";
import { cn } from "@/lib/utils";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("espresso");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [progress, setProgress] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const p = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setProgress(p);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    onScroll();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onSelect, onScroll]);

  useEffect(() => {
    emblaApi?.scrollTo(0);
  }, [activeCategory, emblaApi]);

  const items = useMemo(
    () => menuItems.filter((m) => m.category === activeCategory),
    [activeCategory]
  );

  const activeMeta = menuCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="menu" className="relative bg-bone-100 py-section overflow-hidden">
      <div className="container-edge">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="md:col-span-7">
            <SectionLabel index="02" label="Menú · Estación 2026" className="mb-8" />
            <RevealText
              as="h2"
              className="font-display text-display-2xl leading-[0.95] tracking-tight text-espresso-900"
            >
              {"Cada taza, una geografía."}
            </RevealText>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-espresso-900/70 text-base md:text-lg leading-relaxed">
              Doce referencias rotando con la estación. Pide en barra
              o descarga la carta completa para llevar.
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div className="border-y border-espresso-900/10">
          <div className="flex overflow-x-auto scrollbar-none gap-1 -mx-1">
            {menuCategories.map((cat) => {
              const active = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "relative shrink-0 px-5 md:px-7 py-5 md:py-6 text-left transition-colors duration-400 group",
                    active ? "text-espresso-900" : "text-espresso-900/40 hover:text-espresso-900/70"
                  )}
                  aria-pressed={active}
                >
                  <span className="font-display text-xl md:text-2xl tracking-tight block">
                    {cat.label}
                  </span>
                  <span className="editorial-eyebrow block mt-1 opacity-60">
                    {String(menuItems.filter((m) => m.category === cat.id).length).padStart(2, "0")}
                  </span>
                  {active && (
                    <motion.span
                      layoutId="active-tab"
                      className="absolute -bottom-px inset-x-0 h-[2px] bg-espresso-900"
                      transition={{ type: "spring", stiffness: 280, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Subhead */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeMeta.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mt-8 mb-10 editorial-eyebrow text-espresso-700"
          >
            {activeMeta.sub}
          </motion.p>
        </AnimatePresence>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={emblaRef}
            className="overflow-hidden -mx-4 md:-mx-6 px-4 md:px-6"
            data-cursor="drag"
            data-cursor-label="drag"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{    opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex gap-6 md:gap-8 touch-pan-y"
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex-[0_0_84%] sm:flex-[0_0_55%] md:flex-[0_0_42%] lg:flex-[0_0_32%] xl:flex-[0_0_28%] min-w-0"
                  >
                    <MenuCard item={item} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-between gap-8">
            <div className="flex-1 max-w-md">
              <div className="relative h-px bg-espresso-900/10 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-espresso-900"
                  style={{ width: `${Math.max(progress * 100, 12)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between editorial-eyebrow text-espresso-700">
                <span>{String(items.length).padStart(2, "0")} referencias</span>
                <span>arrastra · desliza</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Anterior"
                className={cn(
                  "w-12 h-12 md:w-14 md:h-14 rounded-full border border-espresso-900/25 flex items-center justify-center transition-all duration-400",
                  canPrev
                    ? "hover:bg-espresso-900 hover:text-bone-100 hover:border-espresso-900"
                    : "opacity-30 cursor-not-allowed"
                )}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                aria-label="Siguiente"
                className={cn(
                  "w-12 h-12 md:w-14 md:h-14 rounded-full border border-espresso-900/25 flex items-center justify-center transition-all duration-400",
                  canNext
                    ? "hover:bg-espresso-900 hover:text-bone-100 hover:border-espresso-900"
                    : "opacity-30 cursor-not-allowed"
                )}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
