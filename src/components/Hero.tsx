
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 text-center bg-gradient-to-b from-purple-50 to-white">
      <div className="bg-purple-100 text-purple-800 inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
        🚀 Early Access: 50 Exclusive Marketer Spots Available 🚀
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 max-w-3xl">
        Transform Your <span className="text-purple-600">Video Content</span> Into High-Converting Marketing Assets
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="bg-purple-50 px-4 py-2 rounded-lg">
          💰 No Editors
        </div>
        <div className="bg-purple-50 px-4 py-2 rounded-lg">
          🎯 No Guesswork
        </div>
        <div className="bg-purple-50 px-4 py-2 rounded-lg">
          ✨ No Fluff
        </div>
      </div>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl">
        Try now with 10 free minutes of video processing. No credit card required. After your trial, unlock more minutes starting at $5 per 10 minutes for early adopters (regular price: $20).
      </p>
      <Button 
        size="lg"
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all transform hover:scale-105 mb-4"
      >
        START WITH 10 FREE MINUTES
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <p className="text-sm text-gray-500">
        <span className="font-semibold text-purple-600">50 exclusive spots at $5/10min</span> — <a href="#waitlist" className="text-purple-600 underline">Join Waitlist</a> for regular pricing
      </p>
    </div>
  );
};
