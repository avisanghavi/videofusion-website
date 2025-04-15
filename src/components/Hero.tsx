
import { ArrowRight, MessageSquare, FileText, Mail, Video, Megaphone } from "lucide-react";
import { Button } from "./ui/button";
import { CompactValue } from "./CompactValue";

export const Hero = () => {
  const useCase = [
    {
      icon: <Video className="w-5 h-5" />,
      title: "Product Pages",
      description: "Boost conversion with trust-building highlights"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Social Media", 
      description: "Create scroll-stopping hooks"
    },
    {
      icon: <Megaphone className="w-5 h-5" />,
      title: "Ad Content",
      description: "Craft compelling video ads"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Marketing",
      description: "Engage subscribers with video clips"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Blog Content",
      description: "Enrich posts with video highlights"
    }
  ];

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
      
      <div className="max-w-2xl mb-0">
        <h2 className="text-3xl font-bold">This Isn't Just Clipping — It's Conversion</h2>
        <p className="text-lg text-purple-600 italic mb-0">
          "Revenue Generating Moments" D2C Marketer
        </p>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Use HIGHLIGHTS for all of your Video Marketing</h2>
      <div className="grid md:grid-cols-5 gap-4 max-w-5xl w-full mb-8">
        {useCase.map((item, index) => (
          <div key={index} className="p-4 rounded-lg bg-gray-50 text-center">
            <div className="flex justify-center mb-2 text-purple-600">
              {item.icon}
            </div>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      
      <CompactValue />
    </div>
  );
};

