
import { ArrowRight, Users } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-3xl mx-auto text-center">
        <Button 
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all transform hover:scale-105 mb-4"
        >
          START WITH 10 FREE MINUTES
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
