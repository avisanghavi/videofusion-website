import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import { Upload, Cpu, Share2, ChevronDown, Zap, Sparkles } from "lucide-react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export const HowItWorks = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const isStepsInView = useInView(stepsRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  useEffect(() => {
    if (isStepsInView) {
      controls.start("visible");
    }
  }, [isStepsInView, controls]);

  // Interactive steps data
  const steps = [
    {
      number: "1",
      title: "Multiply Your Content Library",
      description: "Transform your UGC and marketing videos into dozens of viral clips. Upload your best content and let our AI identify the golden moments worth sharing.",
      icon: <Upload className="w-7 h-7" />,
      gradient: "from-[#9146FF] to-[#B164FF]",
      delay: 0.2,
      video: "/video-upload-demo.mp4"
    },
    {
      number: "2",
      title: "AI-Powered Transformation",
      description: "Watch as our AI instantly identifies high-engagement moments, emotional peaks, and viral hooks that capture viewers in the first 3 seconds.",
      icon: <Cpu className="w-7 h-7" />,
      gradient: "from-[#FF6B8B] to-[#FF8BA7]",
      delay: 0.4,
      video: "/ai-transform-demo.mp4"
    },
    {
      number: "3",
      title: "Dominate Every Channel",
      description: "Instantly power up your PDPs, blogs, newsletters, social media, and social shopping experiences with AI-crafted clips designed to convert. Every clip is precision-timed, strategically positioned, and perfectly formatted—turning every channel into a high-performance engagement engine.",
      icon: <Share2 className="w-7 h-7" />,
      gradient: "from-[#B164FF] to-[#FF6B8B]",
      delay: 0.6,
      video: "/multi-channel-demo.mp4"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#9146FF] rounded-full filter blur-[150px] opacity-[0.07] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF6B8B] rounded-full filter blur-[150px] opacity-[0.07] animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-[#B164FF] rounded-full filter blur-[120px] opacity-[0.05] animate-pulse" />
          
          {/* Animated particles - reduced quantity */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#9146FF] rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                scale: Math.random() * 2 + 0.5,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Section with Animated Text Reveal - more compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <span className="bg-gradient-to-r from-[#9146FF] to-[#FF6B8B] text-transparent bg-clip-text text-sm md:text-base font-bold mb-2 block tracking-wider">
              CONTENT THAT CONVERTS
            </span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="inline md:block">Repurpose UGC, Influencer Marketing, and </span>
            <span className="inline md:block">Branded Video Content to create </span>
            <span className="relative">
              <motion.span 
                className="bg-gradient-to-r from-[#9146FF] via-[#B164FF] to-[#FF6B8B] text-transparent bg-clip-text relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Viral Gold
              </motion.span>
              <motion.span
                className="absolute -inset-1 md:-inset-2 rounded-lg bg-gradient-to-r from-[#9146FF]/20 via-[#B164FF]/20 to-[#FF6B8B]/20 blur-lg z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Stop spending hours editing. Our AI transforms your content into scroll-stopping clips that drive 5x more engagement and grow your audience faster.
          </motion.p>
        </motion.div>

        {/* Interactive Steps Section - more compact */}
        <div ref={stepsRef} className="relative">
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-5 md:p-6 h-full flex flex-col transition-all duration-500 shadow-lg hover:shadow-xl group-hover:shadow-[0_8px_20px_rgba(177,100,255,0.15)]">
                  {/* Title with Gradient Hover Effect */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#9146FF] group-hover:to-[#FF6B8B] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Interactive Element - compact version */}
                  <motion.div 
                    className="mt-auto flex items-center justify-center relative h-24 md:h-28 rounded-xl overflow-hidden bg-gray-50 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index === 0 && (
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0, 1, 1, 0],
                          scale: [0.8, 1, 1, 0.8],
                          y: [0, 0, -20, -20]
                        }}
                        transition={{ 
                          duration: 3,
                          times: [0, 0.3, 0.7, 1],
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      >
                        <div className="w-14 h-14 rounded-lg border-2 border-dashed border-purple-300 flex items-center justify-center">
                          <Upload className="w-6 h-6 text-purple-500" />
                        </div>
                      </motion.div>
                    )}
                    {index === 1 && (
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="relative w-3/4 h-3/4">
                          <motion.div 
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ 
                              rotate: [0, 360],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <div className="w-full h-full border-3 border-[#B164FF]/40 rounded-lg" />
                          </motion.div>
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, -180, -360]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Sparkles className="w-8 h-8 text-[#FF6B8B]" />
                          </motion.div>
                          {/* Additional sparkle effects */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-[#FF6B8B] rounded-full"
                              style={{
                                top: `${30 + (i * 20)}%`,
                                left: `${30 + (i * 20)}%`
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.6,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {index === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-1 w-3/4">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-md overflow-hidden flex items-center justify-center"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                              <Share2 className="w-2 h-2 text-purple-500/70" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Add styles for custom animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}; 