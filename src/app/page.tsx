import FAQSection from '@/components/FAQsection';
import HeroSection from '@/components/HeroSection';
import { DatesSection, AboutSection, TracksSection, SponsorsSection, Footer } from '@/components/Sections';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <main className="relative min-h-screen animated-gradient">
      <HeroSection />
      <DatesSection />
      <AboutSection />
      <TracksSection />
      <Timeline />
      <SponsorsSection />
      <Footer />
      <FAQSection />
    </main>
  );
}