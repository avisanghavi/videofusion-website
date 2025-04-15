
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
