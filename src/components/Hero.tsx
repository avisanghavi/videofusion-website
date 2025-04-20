import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wand2, Timer, Target } from "lucide-react";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const features = [
    { 
      icon: <Wand2 className="w-5 h-5" />, 
      text: "No Editors",
      gradient: "from-[#9146FF] to-[#B164FF]" 
    },
    { 
      icon: <Timer className="w-5 h-5" />, 
      text: "No Guesswork",
      gradient: "from-[#FF6B8B] to-[#FF8BA7]" 
    },
    { 
      icon: <Target className="w-5 h-5" />, 
      text: "No Fluff",
      gradient: "from-[#B164FF] to-[#FF6B8B]" 
    },
  ];

  return (
    <div className="min-h-[90vh] relative overflow-hidden font-['Space_Grotesk']">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            filter: 'brightness(0.98)',
            transform: 'scale(1.02)',
            minWidth: '100%',
            minHeight: '100%',
          }}
        >
          <source src="/bubblebubble.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/70 to-white/75" />
        {/* Decorative Elements */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#9146FF] rounded-full filter blur-[150px] opacity-[0.04] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF6B8B] rounded-full filter blur-[150px] opacity-[0.04] animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 pt-24 lg:pt-32 px-6">
        <div className="max-w-[1200px] mx-auto relative flex flex-col items-center text-center">
          {/* Early Access Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm shadow-lg px-6 py-2.5 rounded-full text-gray-800 mb-16 border border-gray-100"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9146FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#9146FF]"></span>
            </span>
            <span className="font-medium">Limited Release: Only 50 Spots Available</span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 max-w-4xl leading-[1.1] mx-auto tracking-tight">
              Convert Existing Content Into{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#9146FF] via-[#FF6B8B] to-[#9146FF] text-transparent bg-clip-text animate-gradient">
                  Viral Shorts
                </span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full hidden lg:block"
                  width="100%"
                  height="6"
                  viewBox="0 0 100 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q25,0 50,5 T100,5"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
                      <stop offset="0%" stopColor="#9146FF" />
                      <stop offset="100%" stopColor="#FF6B8B" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
              {" "}in Seconds
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto font-normal mt-8">
              Turn videos into viral hits—AI spots your best hooks, magnetic CTAs, authentic testimonials, and standout moments, instantly optimized for TikTok, Reels & YouTube Shorts.
            </p>

            {/* Supported Content Types */}
            <div className="flex flex-wrap gap-4 justify-center mt-8 mb-8">
              {[
                "UGC",
                "Influencer Marketing",
                "Branded Video Content"
              ].map((type, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border border-[#9146FF]/20 px-6 py-3 rounded-full"
                >
                  <span className="text-gray-800 font-semibold bg-gradient-to-r from-[#9146FF] to-[#FF6B8B] bg-clip-text text-transparent">
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <a
              href="https://app.videofusion.io/auth/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center bg-gradient-to-r from-[#9146FF] to-[#FF6B8B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Try it Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-6 w-full max-w-2xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm shadow-sm px-4 py-2 rounded-full text-gray-800 border border-gray-100/50"
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white">{feature.icon}</span>
                </div>
                <span className="font-medium text-sm whitespace-nowrap">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
