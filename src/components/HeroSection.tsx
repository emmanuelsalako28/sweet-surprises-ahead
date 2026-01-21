import { Heart } from "lucide-react";
import logo from "@/assets/logo.gif";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-12 md:py-16 overflow-hidden gradient-romantic">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />

      {/* Logo */}
      <div className="mb-8 opacity-0 animate-fade-in-up">
        <img 
          src={logo} 
          alt="Brand Logo" 
          className="h-20 md:h-28 w-auto"
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

        <p className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto opacity-0 animate-fade-in-up animation-delay-500">
          This Valentine's, prepare for surprises that'll make hearts skip a beat. 
          <span className="italic"> The reveal is almost here...</span>
        </p>
      </div>

    </section>
  );
};

export default HeroSection;
