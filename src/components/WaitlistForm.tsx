import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Mail, Phone, Sparkles } from "lucide-react";
import { toast } from "sonner";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !phone) {
      toast.error("Please enter your email or phone number");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("You're on the list! 💕", {
      description: "We'll notify you when love is in the air.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-card/60 backdrop-blur-sm rounded-2xl shadow-romantic border border-border/50 animate-fade-in-up">
        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
          <Heart className="w-8 h-8 text-primary" fill="currentColor" />
        </div>
        <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
          You're In! 💕
        </h3>
        <p className="text-muted-foreground font-body">
          Get ready for something special...
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-6 md:p-8 bg-card/60 backdrop-blur-sm rounded-2xl shadow-romantic border border-border/50"
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-body text-primary font-medium">Early Access</span>
        </div>
        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
          Be the First to Feel the Love
        </h3>
        <p className="text-muted-foreground font-body mt-2 text-sm">
          Join our waitlist for exclusive early access
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-11 h-12 bg-background/80 border-border/60 focus:border-primary focus:ring-primary/20 font-body"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground font-body">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="tel"
            placeholder="WhatsApp number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="pl-11 h-12 bg-background/80 border-border/60 focus:border-primary focus:ring-primary/20 font-body"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 gradient-cta text-primary-foreground font-body font-semibold text-base shadow-glow hover:shadow-elevated transition-all duration-300 hover:scale-[1.02]"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Heart className="w-5 h-5 animate-pulse" />
              Joining...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Join the Waitlist
            </span>
          )}
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground font-body mt-4">
        We respect your privacy. No spam, ever. 💌
      </p>
    </form>
  );
};

export default WaitlistForm;
