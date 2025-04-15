
import { Hero } from "@/components/Hero";
import { CompactValue } from "@/components/CompactValue";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <CompactValue />
    </div>
  );
};

export default Index;
