
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center bg-gradient-to-b from-purple-50 to-white">
      <div className="bg-purple-100 text-purple-800 inline-block px-6 py-2 rounded-full text-sm font-semibold mb-8 animate-bounce">
        🔥 Only 23 Spots Left - Don't Miss Out! 🔥
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl">
        Join the First <span className="text-purple-600">50 Founders</span> Using AI to Transform Their Video Content
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
        Turn Your Existing Videos Into Revenue-Generating Assets - Exclusive Founders Circle Access
      </p>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl">
        You've already paid for UGC, Influencer Marketing, and branded videos. Now be among the first 50 to unlock their full potential — no editors, no guesswork, just results.
      </p>
      <Button 
        size="lg"
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all transform hover:scale-105 animate-pulse"
      >
        SECURE MY FOUNDER SPOT NOW
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <p className="mt-4 text-sm text-gray-500">Only 23 exclusive spots remaining</p>
    </div>
  );
};
