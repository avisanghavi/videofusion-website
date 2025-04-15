
import { CheckCircle } from "lucide-react";

export const Steps = () => {
  const steps = [
    {
      title: "Upload your content",
      description: "Upload up to 10 minutes of your video content"
    },
    {
      title: "AI Processing",
      description: "HIGHLIGHTS automatically clips Hooks, Social Proof, CTAs, and more"
    },
    {
      title: "Review & Post",
      description: "Human in the loop: You just review & post what works — fast, simple, revenue-ready"
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works in 3 Simple Steps</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-purple-50">
            <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
