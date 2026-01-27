import { Heart } from "lucide-react";
import logo from "@/assets/logo.gif";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-12 md:py-16 overflow-hidden">
      {/* Romantic gradient background with pattern */}
      <div className="absolute inset-0 gradient-romantic" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--accent)/0.2)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold)/0.08)_0%,transparent_40%)]" />
      
      {/* Decorative blur orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent/15 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gold/10 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '1s' }} />

      {/* Logo with enhanced visibility */}
      <div className="relative mb-8 opacity-0 animate-fade-in-up">
        <div className="absolute inset-0 bg-white/60 rounded-2xl blur-xl scale-110" />
        <img 
          src={logo} 
          alt="Brand Logo" 
          className="relative h-24 md:h-32 w-auto drop-shadow-lg"
        />
      </div>

      {/* Floating hearts decoration */}
      <div className="absolute top-1/4 left-1/4 animate-float-heart animation-delay-100">
        <Heart className="w-6 h-6 text-primary/30" fill="currentColor" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-float-heart animation-delay-300">
        <Heart className="w-4 h-4 text-accent/40" fill="currentColor" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float-heart animation-delay-500">
        <Heart className="w-5 h-5 text-primary/25" fill="currentColor" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float-heart animation-delay-700">
        <Heart className="w-7 h-7 text-accent/30" fill="currentColor" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 opacity-0 animate-fade-in-up animation-delay-100">
          <Heart className="w-4 h-4 text-primary animate-pulse-soft" fill="currentColor" />
          <span className="text-sm font-body text-primary font-medium">Valentine's Day 2026</span>
          <Heart className="w-4 h-4 text-primary animate-pulse-soft" fill="currentColor" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          Something Sweet
          <br />
          <span className="text-primary">Is Coming</span> 💖
        </h1>

        <div className="opacity-0 animate-fade-in-up animation-delay-300 mb-8">
          <CountdownTimer />
        </div>

        <p className="text-base md:text-xl text-muted-foreground font-body max-w-xl mx-auto px-4 md:px-0 opacity-0 animate-fade-in-up animation-delay-500">
          This Valentine's, prepare for surprises that'll make hearts skip a beat. 
          <span className="italic"> The reveal is almost here...</span>
        </p>
      </div>

    </section>
  );
};

export default HeroSection;
