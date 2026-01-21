import { useEffect } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import TeaserSection from "@/components/TeaserSection";

const Index = () => {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ iframeHeight: height }, "*");
    };

    // Send initial height
    sendHeight();

    // Send height on resize
    window.addEventListener("resize", sendHeight);

    // Send height after images load
    window.addEventListener("load", sendHeight);

    // Also send after a short delay to catch any late renders
    const timeout = setTimeout(sendHeight, 500);

    return () => {
      window.removeEventListener("resize", sendHeight);
      window.removeEventListener("load", sendHeight);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      
      <HeroSection />

      <TeaserSection />
    </main>
  );
};

export default Index;
