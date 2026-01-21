import heroImage from "@/assets/hero-romantic.jpg";
import lifestyleImage from "@/assets/romantic-lifestyle.jpg";

const VisualSection = () => {
  return (
    <section className="py-10 md:py-14 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
            Celebrate Love in Style
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Every moment becomes a memory when wrapped in love
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative group overflow-hidden rounded-2xl shadow-elevated">
            <img
              src={heroImage}
              alt="Romantic Valentine gifts with rose petals and candles"
              className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-xl md:text-2xl text-primary-foreground italic">
                "Love wrapped in elegance"
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-elevated">
            <img
              src={lifestyleImage}
              alt="Couple sharing a Valentine gift with red roses"
              className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-xl md:text-2xl text-primary-foreground italic">
                "Moments that matter"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualSection;
