
import React from 'react';

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

  return (
    <div className="py-8 px-4 bg-white">
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
      </div>
    </div>
  );
};
