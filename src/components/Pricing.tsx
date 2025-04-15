
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-purple-100 text-purple-800 inline-block px-6 py-2 rounded-full text-lg font-semibold mb-8">
          🔥 FOUNDERS OFFER — ONLY 50 SPOTS 🔥
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <ul className="text-left space-y-4 mb-8">
            <li className="flex items-center text-lg">
              <span className="text-purple-600 mr-2">✓</span> 30-Day Free Trial (No credit card required)
            </li>
            <li className="flex items-center text-lg">
              <span className="text-purple-600 mr-2">✓</span> Lock in just $4.99/month for your first year
            </li>
            <li className="flex items-center text-lg text-gray-500">
              <span className="mr-2">→</span> Regular pricing will be $19.99+/month
            </li>
          </ul>

          <div className="space-y-4">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6" size="lg">
              CLAIM MY FREE TRIAL + FOUNDERS RATE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-gray-600">
              Not invited? It's ok!{" "}
              <a href="#" className="text-purple-600 hover:text-purple-700 underline">
                Join our waitlist
              </a>
              {" "}to be notified when spots open up
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">This Isn't Just Clipping — It's Conversion</h2>
          <p className="text-xl text-gray-600">
            HIGHLIGHTS is your AI Marketing Strategist. Others clip. HIGHLIGHTS converts. That's the difference!
          </p>
        </div>
      </div>
    </div>
  );
};
