import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { Steps } from "@/components/Steps";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Steps />
      <Footer />
    </div>
  );
};

export default Index;
