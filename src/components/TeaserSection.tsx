import { Gift, Heart, Sparkles, Star } from "lucide-react";

const teasers = [
  {
    icon: Gift,
    text: "Unwrap something unforgettable",
  },
  {
    icon: Heart,
    text: "Gifts that speak from the heart",
  },
  {
    icon: Sparkles,
    text: "Moments worth cherishing",
  },
  {
    icon: Star,
    text: "Surprises that leave them breathless",
  },
];

const TeaserSection = () => {
  return (
    <section className="py-10 md:py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 animate-fade-in-up">
            A Little Hint of What's to Come
          </h2>
          <p className="text-muted-foreground font-body text-lg opacity-0 animate-fade-in-up animation-delay-200">
            Love deserves the extraordinary...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {teasers.map((teaser, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/40 shadow-romantic hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                <teaser.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-lg md:text-xl text-foreground italic">
                "{teaser.text}"
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-muted-foreground font-body text-base md:text-lg opacity-0 animate-fade-in-up animation-delay-500">
          Stay tuned... the magic unfolds soon ✨
        </p>
      </div>
    </section>
  );
};

export default TeaserSection;
