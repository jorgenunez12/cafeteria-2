"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { MenuItem } from "@/types";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group relative h-full flex flex-col bg-bone-50 rounded-sm overflow-hidden border border-espresso-900/8 hover:border-espresso-900/20 transition-colors duration-500">
      <div className="img-hover relative aspect-[4/5] overflow-hidden bg-bone-200">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 80vw"
          className="object-cover"
        />
        {item.tag && (
          <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-bone-100/95 text-espresso-900 backdrop-blur">
            {item.tag}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-espresso-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex-1 flex flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight text-espresso-900">
            {item.name}
          </h3>
          <span className="font-mono text-base tabular-nums text-espresso-900 shrink-0 mt-1">
            {item.price}
          </span>
        </div>

        <p className="mt-4 text-espresso-900/70 text-sm md:text-[15px] leading-relaxed font-body flex-1">
          {item.description}
        </p>

        <div className="mt-6 pt-5 border-t border-espresso-900/10 flex items-center justify-between">
          {item.origin ? (
            <span className="editorial-eyebrow text-espresso-700">
              {item.origin}
            </span>
          ) : (
            <span className="editorial-eyebrow text-espresso-700">Casa Ámbar</span>
          )}
          <ArrowUpRight
            size={16}
            className="text-espresso-900 -translate-x-1 opacity-50 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
          />
        </div>
      </div>
    </article>
  );
}
