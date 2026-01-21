import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import TeaserSection from "@/components/TeaserSection";
import WaitlistForm from "@/components/WaitlistForm";
import VisualSection from "@/components/VisualSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      
      <HeroSection />

      <TeaserSection />

      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
            Don't Miss a Beat
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto">
            Be the first to know when love drops. Join our exclusive waitlist for early access.
          </p>
          <WaitlistForm />
        </div>
      </section>

      <VisualSection />

      <Footer />
    </main>
  );
};

export default Index;
