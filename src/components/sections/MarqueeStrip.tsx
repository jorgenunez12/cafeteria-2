import { Marquee } from "@/components/ui/Marquee";

export function MarqueeStrip() {
  return (
    <section
      aria-label="Valores de Ámbar"
      className="bg-espresso-900 text-bone-100 py-6 md:py-8 border-y border-bone-100/8"
    >
      <Marquee
        items={[
          "Single Origin",
          "Slow Brewed",
          "Hand Crafted",
          "Tostado en Madrid",
          "Cerámica Artesanal",
          "Direct Trade",
          "Estación 2026",
        ]}
      />
    </section>
  );
}
