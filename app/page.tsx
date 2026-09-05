// app/page.tsx
import { HeroSection } from '@/components/sections/HeroSection';
import { StickyZaloCTA } from '@/components/common/StickyZaloCTA';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-industrial-base">
      <HeroSection />
      <StickyZaloCTA />
    </main>
  );
}