
import { Star } from "lucide-react";

export const CompactValue = () => {
  const features = [
    {
      icon: "🎯",
      title: "Upload content",
      description: "Share up to 10 minutes of your video content"
    },
    {
      icon: "🤖",
      title: "AI Processing",
      description: "Get Hooks, Social Proof & CTAs automatically"
    },
    {
      icon: "✨",
      title: "Review & Post",
      description: "Just review & post what works"
    }
  ];

  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
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
        
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-2">This Isn't Just Clipping — It's Conversion</h2>
          <p className="text-gray-600">
            50 exclusive spots at just $4.99/month for your first year
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

