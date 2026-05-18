import { brand, navLinks } from "@/lib/data/brand";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-espresso-900 text-bone-100 overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="container-edge relative pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <h2 className="font-display text-display-xl leading-[0.95] tracking-tight">
              Hasta la
              <br />
              <span className="italic text-sand-300">próxima taza.</span>
            </h2>
            <p className="mt-8 max-w-md text-bone-100/60 font-body text-base leading-relaxed">
              {brand.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="editorial-eyebrow text-bone-100/40 mb-5">Navegar</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-display text-lg text-bone-100/90 hover:text-sand-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="editorial-eyebrow text-bone-100/40 mb-5">Contacto</h3>
            <ul className="space-y-3 text-bone-100/80">
              <li>
                <a
                  href={`mailto:${brand.contact.email}`}
                  className="hover:text-sand-300 transition-colors block"
                >
                  {brand.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${brand.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-sand-300 transition-colors block"
                >
                  {brand.contact.phone}
                </a>
              </li>
              <li>
                <span className="text-bone-100/60">{brand.contact.instagram}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-3">
            <h3 className="editorial-eyebrow text-bone-100/40 mb-5">Horario</h3>
            <ul className="space-y-2 text-bone-100/80 text-sm">
              {brand.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 border-b border-bone-100/8 pb-2">
                  <span>{h.day}</span>
                  <span className="font-mono tabular-nums">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-20 mb-8 opacity-30" />

        <div className="flex flex-col-reverse md:flex-row gap-6 items-start md:items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-100/40">
            © {new Date().getFullYear()} Ámbar Specialty Coffee · {brand.address.city}
          </p>
          <ul className="flex gap-6 text-bone-100/60">
            {brand.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] hover:text-sand-300 transition-colors inline-flex items-center gap-1"
                >
                  {s.label}
                  <ArrowUpRight size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Giant brand wordmark */}
        <div className="mt-20 pt-12 border-t border-bone-100/8">
          <div className="font-display tracking-tighter leading-none text-center select-none">
            <span className="text-[20vw] md:text-[18vw] block text-bone-100/8">
              ámbar
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
