# Ámbar — Specialty Coffee

> A premium, editorial single-page experience for a fictional specialty coffee atelier in Madrid. Built as a portfolio-grade reference for modern, cinematic restaurant / café websites.

Inspired by the slow rituals of Tokyo specialty bars, Scandinavian minimalism, the typographic confidence of *Apartamento* magazine and the motion craft you'd expect from an Awwwards SOTD.

---

## ✦ Stack

| Layer            | Tooling                                                  |
| ---------------- | -------------------------------------------------------- |
| Framework        | **Next.js 16** (App Router, React 19, RSC + Server)      |
| Language         | **TypeScript** (strict)                                  |
| Styling          | **Tailwind CSS v4** with `@theme` design tokens          |
| Motion           | **Framer Motion** — masked text reveals, parallax, layout|
| Smooth scroll    | **Lenis** — buttery momentum scroll (RM-aware)           |
| Carousel         | **Embla Carousel** — draggable, accessible, performant   |
| Icons            | **Lucide**                                               |
| Fonts            | **Fraunces** (display) · **Inter** (body) · **JetBrains Mono** (eyebrows) |
| Utilities        | `clsx`, `tailwind-merge`, `class-variance-authority`     |

---

## ✦ Architecture

```
src/
├── app/
│   ├── layout.tsx         # Root layout + metadata + JSON-LD (CafeOrCoffeeShop)
│   ├── page.tsx           # Single-page composition
│   └── globals.css        # Tailwind 4 @theme + base + utilities
├── components/
│   ├── providers/         # SmoothScroll (Lenis), CustomCursor (mix-blend)
│   ├── layout/            # Navbar (blur on scroll, hide on scroll-down) + Footer
│   ├── sections/          # Hero, Marquee, Story, Menu, Process, Gallery, Testimonials, Visit
│   └── ui/                # Logo, SectionLabel, RevealText, Marquee, MagneticButton, MenuCard, TestimonialCard
├── lib/
│   ├── data/              # brand, menu, gallery, process, testimonials
│   └── utils.ts           # cn(), framer-motion variants
├── hooks/                 # useScrollDirection, useMagnetic, useMousePosition
└── types/                 # Domain types (MenuItem, Testimonial, GalleryImage, ProcessStep)
```

Principles applied:

- **Single source of truth** — all copy lives in `lib/data/*`; sections are pure composition.
- **Server-first** — every section is RSC by default; `"use client"` only where Framer Motion / Embla / Lenis need it.
- **Tokens over magic numbers** — colors, fonts, easings live in `@theme` in `globals.css`.
- **Accessibility AA** — semantic landmarks, focus-visible rings, `prefers-reduced-motion` opt-out for all motion + scroll, ARIA on tabs/menu/carousel.
- **Performance** — `next/image` with AVIF/WebP, parallax on `transform`/`opacity` only (GPU), font-display swap, hidden navbar on scroll-down to free pixels.
- **SEO** — full OG + Twitter cards, JSON-LD `CafeOrCoffeeShop` schema, semantic headings, Spanish `lang`, `metadataBase`.

---

## ✦ The page, section by section

1. **Hero** — 100svh cinematic background with scroll-driven parallax, three-line masked editorial headline, coordinate metadata strip, magnetic CTA.
2. **Marquee strip** — Infinite values strip on espresso black: *Single Origin · Slow Brewed · Hand Crafted*.
3. **Story** — Asymmetric editorial grid, scroll-revealed text, dual parallax photo column, KPI dl, pulled quote.
4. **Menu** — Animated category tabs (`espresso · cold-brew · signature · bakery · desserts`) feeding an **Embla carousel** with drag, scroll progress bar, and round prev/next controls.
5. **Process** — Numbered 4-step grid on espresso background: *Origen → Tueste → Brew → Ritual*.
6. **Gallery** — Asymmetric 12-column masonry with per-tile scroll parallax and image-hover zoom.
7. **Testimonials** — Editorial cards with quote glyph, avatar, role, star rating.
8. **Visit (CTA)** — Cinematic parallax background, three-line display headline, glass info card with address / hours / contact.
9. **Footer** — Goodbye line, navigation, contact, hours, social, oversized wordmark.

---

## ✦ Design system snapshot

```css
/* tokens (from @theme in globals.css) */
--color-bone-100:     #F4EFE6  /* paper */
--color-espresso-900: #1C140D  /* ink */
--color-sand-300:     #C8A97E  /* warm accent */
--color-gold-400:     #C8A36B  /* highlight */

--font-display: Fraunces
--font-body:    Inter
--font-mono:    JetBrains Mono

--ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1)
```

---

## ✦ Quick start

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm run lint
```

Node ≥ 20 recommended.

---

## ✦ Replacing the demo content

- All copy is in **`src/lib/data/`** — change `brand.ts`, `menu.ts`, `testimonials.ts`, `process.ts`, `gallery.ts`.
- All photography uses Unsplash hotlinks (allowlisted in `next.config.ts`). Swap with your own CDN by editing `remotePatterns` and the image URLs.
- For a different brand name: update `Logo.tsx`, the Footer wordmark, JSON-LD in `layout.tsx`, and `brand.ts`.

---

## ✦ Production notes

- Build uses Next 16 / Turbopack — no extra config needed.
- Customise theme color, OG image and JSON-LD in `src/app/layout.tsx` for your own domain.
- Lenis is suspended automatically when `prefers-reduced-motion: reduce` is set; the same media query disables all marquee + reveal animations via `globals.css`.
- Custom cursor only activates on `(hover: hover) and (pointer: fine)` devices and gracefully degrades to native cursor otherwise.

---

Crafted with espresso and discipline.
