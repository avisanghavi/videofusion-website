
import { ArrowRight, Users } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-purple-100 text-purple-800 inline-flex items-center gap-2 px-6 py-2 rounded-full text-lg font-semibold mb-8">
          <Users className="w-5 h-5" /> EARLY ADOPTER OPPORTUNITY
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">This Isn't Just Clipping — It's Conversion</h2>
          <p className="text-xl text-gray-600 mb-6">
            Join our exclusive group of marketers using HIGHLIGHTS as their AI Marketing Strategist.
          </p>
          <Button 
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all transform hover:scale-105 mb-4"
          >
            START WITH 10 FREE MINUTES
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

