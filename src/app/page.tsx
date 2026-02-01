import HeroSection from '@/components/HeroSection';
import { DatesSection, AboutSection, TracksSection, SponsorsSection, Footer } from '@/components/Sections';

export default function Home() {
  return (
    <main className="relative min-h-screen animated-gradient">
      <HeroSection />
      <DatesSection />
      <AboutSection />
      <TracksSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}