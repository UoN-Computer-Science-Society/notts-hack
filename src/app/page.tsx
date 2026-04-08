import FAQSection from '@/components/FAQsection';
import HeroSection from '@/components/HeroSection';
import NukeEffect from '@/components/NukeEffect';
import { GettingThereSection, AboutSection, TracksSection, MentorsJudgesSection, SponsorsSection, Footer } from '@/components/Sections';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <main className="relative min-h-screen animated-gradient">
      <div className="page-bg" aria-hidden />
      <NukeEffect />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <MentorsJudgesSection />
      <Timeline />
      <GettingThereSection />
      <SponsorsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
