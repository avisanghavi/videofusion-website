
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Pricing />
    </div>
  );
};

export default Index;
