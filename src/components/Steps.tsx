import { ArrowUpFromLine, Cog, Share } from "lucide-react";

export const Steps = () => {
  const steps = [
    {
      icon: <ArrowUpFromLine className="w-7 h-7" />,
      title: "Upload Your Content",
      description: "Upload up to 10 minutes of your video content. We accept all popular formats.",
      number: "1",
      iconBg: "bg-[#8B5CF6]",
      iconClass: "rounded-2xl"
    },
    {
      icon: <Cog className="w-7 h-7" />,
      title: "AI Processing",
      description: "HIGHLIGHTS automatically clips Hooks, Social Proof, CTAs, and more using advanced AI.",
      number: "2",
      iconBg: "bg-[#FF6B8B]",
      iconClass: "rounded-2xl"
    },
    {
      icon: <Share className="w-7 h-7" />,
      title: "Review & Post",
      description: "You just review and post what works — fast, simple, revenue-ready content.",
      number: "3",
      iconBg: "bg-gradient-to-br from-[#8B5CF6] to-[#D946EF]",
      iconClass: "rounded-2xl"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#2D1D4B]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-[450] text-white tracking-[-0.02em] mb-4">
            How It Works In{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FF6B8B] text-transparent bg-clip-text">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-gray-400 font-[350] text-lg">
            Turn hours of editing into minutes with our AI-powered workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-[45%] left-[25%] right-[25%] h-[2px]">
            <div className="absolute inset-0 bg-[#FF6B8B]/30" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF6B8B]" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF6B8B]" />
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#1F1235]/50 backdrop-blur-sm rounded-[32px] p-8 text-center border border-white/5"
            >
              {/* Step Number */}
              <div className="absolute -top-4 right-8 w-8 h-8 rounded-full bg-white text-[#2D1D4B] flex items-center justify-center font-medium text-sm">
                {step.number}
              </div>

              {/* Icon */}
              <div className={`${step.iconBg} ${step.iconClass} w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                <span className="text-white">{step.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-[450] text-white mb-4 tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-gray-400 font-[350] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
