import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import TeaserSection from "@/components/TeaserSection";
import VisualSection from "@/components/VisualSection";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      
      <HeroSection />

      <TeaserSection />

      <VisualSection />
    </main>
  );
};

export default Index;
