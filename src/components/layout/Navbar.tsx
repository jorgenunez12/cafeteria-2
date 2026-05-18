"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { navLinks, brand } from "@/lib/data/brand";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { direction, scrolled } = useScrollDirection(12);
  const [open, setOpen] = useState(false);
  const hidden = direction === "down" && scrolled && !open;

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "bg-bone-100/80 backdrop-blur-xl border-b border-espresso-900/8"
            : "bg-transparent"
        )}
      >
        <nav className="container-edge flex items-center justify-between h-18 md:h-20">
          <Logo />

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-espresso-900/80 hover:text-espresso-900 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-espresso-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#visit"
              className="font-mono text-[11px] uppercase tracking-[0.18em] inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-espresso-900/25 hover:bg-espresso-900 hover:text-bone-100 hover:border-espresso-900 transition-all duration-500"
            >
              Reservar
              <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-11 h-11 inline-flex items-center justify-center rounded-full border border-espresso-900/15 bg-bone-50/60 backdrop-blur"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,    opacity: 1 }}
                  exit={{    rotate: 90,   opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90,  opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed inset-0 z-40 bg-espresso-900 text-bone-100"
          >
            <div className="container-edge pt-28 pb-12 h-full flex flex-col">
              <ul className="flex-1 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0  }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-bone-100/10"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-5"
                    >
                      <span className="font-display text-4xl tracking-tight">
                        {link.label}
                      </span>
                      <span className="font-mono text-xs opacity-50 tabular-nums">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 pt-10"
              >
                <a
                  href={`mailto:${brand.contact.email}`}
                  className="block font-mono text-xs uppercase tracking-[0.18em] opacity-80"
                >
                  {brand.contact.email}
                </a>
                <p className="font-mono text-xs uppercase tracking-[0.18em] opacity-50">
                  {brand.address.street} · {brand.address.city}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
