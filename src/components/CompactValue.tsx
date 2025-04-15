
import { MessageSquare, FileText, Mail, Video, Megaphone } from "lucide-react";

export const CompactValue = () => {
  const features = [
    {
      icon: "🎯",
      title: "Free Trial",
      description: "Start with 10 minutes of video processing, no credit card needed"
    },
    {
      icon: "🤖",
      title: "AI-Powered Highlights",
      description: "Get Hooks, Problems, Solutions, Social Proof & CTAs automatically"
    },
    {
      icon: "✨",
      title: "Early Bird Pricing",
      description: "Lock in $5 per 10 minutes (75% off regular price)"
    }
  ];

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
    <div className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start p-4 rounded-lg bg-purple-50">
              <span className="text-2xl mr-3">{feature.icon}</span>
              <div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-center">Use Video Highlights Anywhere</h2>
        <div className="grid md:grid-cols-5 gap-4 mb-8">
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
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">This Isn't Just Clipping — It's Conversion</h2>
          <p className="text-gray-600">
            First 50 users lock in $5 per 10 minutes of processing (Regular price: $20)
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <p className="text-sm italic text-gray-600">"Game-changing workflow" - Committed Marketer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
