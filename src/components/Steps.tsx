
import { CheckCircle, Star } from "lucide-react";

export const Steps = () => {
  const steps = [
    {
      title: "Upload your content",
      description: "Upload up to 10 minutes of your video content",
      social: "\"Excited to test this out\" - Committed Founder"
    },
    {
      title: "AI Processing",
      description: "HIGHLIGHTS automatically clips Hooks, Social Proof, CTAs, and more",
      social: "\"Game-changing workflow\" - Committed Founder"
    },
    {
      title: "Review & Post",
      description: "Human in the loop: You just review & post what works — fast, simple, revenue-ready",
      social: "\"Can't wait to streamline my process\" - Committed Founder"
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4">How It Works in 3 Simple Steps</h2>
      <p className="text-center text-gray-600 mb-12">7 founders are already committed to transforming their video strategy</p>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-purple-50 hover:shadow-lg transition-all">
            <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600 mb-4">{step.description}</p>
            <div className="mt-auto pt-4 border-t border-purple-100 w-full">
              <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm italic text-gray-600">{step.social}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
