import { motion } from "framer-motion";
import { Upload, Cpu, Share2 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Multiply Your Content Library",
      description: "Transform your UGC and marketing videos into dozens of viral clips. Upload your best content and let our AI identify the golden moments worth sharing.",
      icon: <Upload className="w-7 h-7" />,
      gradient: "from-[#9146FF] to-[#B164FF]",
      delay: 0.2
    },
    {
      number: "2",
      title: "AI-Powered Transformation",
      description: "Watch as our AI instantly identifies high-engagement moments, emotional peaks, and viral hooks that capture viewers in the first 3 seconds.",
      icon: <Cpu className="w-7 h-7" />,
      gradient: "from-[#FF6B8B] to-[#FF8BA7]",
      delay: 0.4
    },
    {
      number: "3",
      title: "Dominate Every Channel",
      description: "Instantly power up your PDPs, blogs, newsletters, social media, and social shopping experiences with AI-crafted clips designed to convert. Every clip is precision-timed, strategically positioned, and perfectly formatted—turning every channel into a high-performance engagement engine.",
      icon: <Share2 className="w-7 h-7" />,
      gradient: "from-[#B164FF] to-[#FF6B8B]",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#9146FF] rounded-full filter blur-[150px] opacity-[0.07] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#FF6B8B] rounded-full filter blur-[150px] opacity-[0.07] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#B164FF] rounded-full filter blur-[150px] opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-20"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] to-[#FF6B8B] text-base md:text-lg font-semibold mb-4 block">
            CONTENT THAT CONVERTS
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
            From Wasted Content to{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#9146FF] to-[#FF6B8B] text-transparent bg-clip-text">
                Viral Gold
              </span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8 md:mb-16 max-w-2xl mx-auto leading-relaxed">
            Stop spending hours editing. Our AI transforms your content into scroll-stopping clips that drive 5x more engagement and grow your audience faster.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              className="relative text-center max-w-sm w-full group"
            >
              {/* Enhanced Step Card */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                {/* Icon & Number */}
                <div className="relative mb-6 md:mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${step.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-base md:text-lg shadow-md border border-gray-100">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 