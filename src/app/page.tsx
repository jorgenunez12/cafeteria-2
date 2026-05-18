import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { StorySection } from "@/components/sections/StorySection";
import { MenuSection } from "@/components/sections/MenuSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { VisitSection } from "@/components/sections/VisitSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <StorySection />
        <MenuSection />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSection />
        <VisitSection />
      </main>
      <Footer />
    </>
  );
}
