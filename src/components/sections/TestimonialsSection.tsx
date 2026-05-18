import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="relative bg-bone-200 py-section overflow-hidden">
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="md:col-span-7">
            <SectionLabel index="05" label="Voces" className="mb-8" />
            <RevealText
              as="h2"
              className="font-display text-display-2xl leading-[0.95] tracking-tight text-espresso-900"
            >
              {"Lo que dicen quienes vuelven."}
            </RevealText>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-espresso-900/70 text-base md:text-lg leading-relaxed">
              Editores, baristas internacionales, arquitectos y
              vecinos: voces que han hecho de Ámbar su esquina.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
