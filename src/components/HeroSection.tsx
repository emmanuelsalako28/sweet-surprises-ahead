import { Heart } from "lucide-react";
import logo from "@/assets/logo.gif";
import heroCouple from "@/assets/hero-couple.png";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-8 md:py-12 overflow-hidden">
      {/* Soft romantic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />
      
      {/* Decorative blur orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent/15 rounded-full blur-3xl" />

      {/* Floating hearts decoration */}
      <div className="absolute top-1/4 left-1/6 animate-float-heart animation-delay-100">
        <Heart className="w-5 h-5 text-primary/30" fill="currentColor" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float-heart animation-delay-300">
        <Heart className="w-4 h-4 text-accent/40" fill="currentColor" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float-heart animation-delay-500">
        <Heart className="w-6 h-6 text-primary/25" fill="currentColor" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo with enhanced visibility */}
        <div className="relative mb-6 opacity-0 animate-fade-in-up">
          <div className="absolute inset-0 bg-white/60 rounded-2xl blur-xl scale-110" />
          <img 
            src={logo} 
            alt="Jumia Loves You" 
            className="relative h-20 md:h-28 w-auto mx-auto drop-shadow-lg"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 opacity-0 animate-fade-in-up animation-delay-100">
          <Heart className="w-4 h-4 text-primary animate-pulse-soft" fill="currentColor" />
          <span className="text-sm font-body text-primary font-semibold tracking-wide">Valentine's Day 2026</span>
          <Heart className="w-4 h-4 text-primary animate-pulse-soft" fill="currentColor" />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 opacity-0 animate-fade-in-up animation-delay-200 tracking-tight">
          Something Sweet
          <br />
          <span className="text-primary">Is Coming</span> 💖
        </h1>

        <div className="opacity-0 animate-fade-in-up animation-delay-300 mb-6">
          <CountdownTimer />
        </div>

        <p className="text-base md:text-lg text-muted-foreground font-body max-w-xl mx-auto px-4 md:px-0 opacity-0 animate-fade-in-up animation-delay-500 mb-8">
          This Valentine's, prepare for surprises that'll make hearts skip a beat. 
          <span className="italic"> The reveal is almost here...</span>
        </p>

        {/* Hero couple image */}
        <div className="relative opacity-0 animate-fade-in-up animation-delay-700">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <img 
            src={heroCouple} 
            alt="Couple celebrating Valentine's Day" 
            className="relative mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
