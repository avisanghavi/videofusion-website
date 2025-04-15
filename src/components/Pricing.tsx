
import { ArrowRight, Users } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-purple-100 text-purple-800 inline-flex items-center gap-2 px-6 py-2 rounded-full text-lg font-semibold mb-8">
          <Users className="w-5 h-5" /> EARLY ADOPTER OPPORTUNITY
        </div>
      </div>
    </div>
  );
};
