import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';

export default function Home() {
  return (
    <>
      <title>NeuroStack Solutions - AI-Powered Web Development</title>
      <meta name="description" content="Professional freelance web development, AI automation, and cybersecurity solutions based in the Netherlands. Fast delivery, security-first approach." />
      
      <HeroSection />
      <ServicesSection />
    </>
  );
}
