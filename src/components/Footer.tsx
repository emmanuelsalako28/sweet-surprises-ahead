import { Instagram, Facebook, Twitter, Heart } from "lucide-react";
import logo from "@/assets/logo.gif";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/40 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={logo} 
            alt="Brand Logo" 
            className="h-10 md:h-12 w-auto"
          />

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/60 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground font-body flex items-center gap-1.5 justify-center">
              Made with <Heart className="w-4 h-4 text-primary" fill="currentColor" /> for lovers everywhere
            </p>
            <p className="text-xs text-muted-foreground/60 font-body mt-2">
              © 2026 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
