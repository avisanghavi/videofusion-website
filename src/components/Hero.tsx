import { Link } from "react-router-dom";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Bubble component
const Bubble = ({ delay = 0, size = 100, position = { x: 0, y: 0 } }) => (
  <motion.div
    initial={{ 
      x: position.x,
      y: position.y,
      opacity: 0,
      scale: 0.5
    }}
    animate={{ 
      y: position.y - 100,
      opacity: [0, 0.5, 0],
      scale: [0.5, 1, 0.8],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute pointer-events-none"
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
      backdropFilter: 'blur(5px)',
    }}
  />
);

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const titleControls = useAnimation();

  // Mouse parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }

    // Animate title on mount
    titleControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [titleControls]);

  // Generate random bubble positions
  const bubbles = Array.from({ length: 6 }).map((_, i) => ({
    delay: i * 2,
    size: Math.random() * 60 + 40,
    position: {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }
  }));

  return (
    <div 
      className="min-h-[90vh] relative overflow-hidden font-['Space_Grotesk']"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Bubbles */}
      {bubbles.map((bubble, i) => (
        <Bubble key={i} {...bubble} />
      ))}

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
        {/* Enhanced Gradient Overlay with mouse interaction */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/70 to-white/75"
          style={{
            x: useTransform(useMotionValue(mousePosition.x), [-1, 1], [-20, 20]),
            y: useTransform(useMotionValue(mousePosition.y), [-1, 1], [-20, 20])
          }}
        />
        {/* Decorative Elements */}
        <div className="absolute inset-0 w-full h-full">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#9146FF] rounded-full filter blur-[150px] opacity-[0.04] animate-pulse"
            style={{
              x: useTransform(useMotionValue(mousePosition.x), [-1, 1], [-30, 30]),
              y: useTransform(useMotionValue(mousePosition.y), [-1, 1], [-30, 30])
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF6B8B] rounded-full filter blur-[150px] opacity-[0.04] animate-pulse"
            style={{
              x: useTransform(useMotionValue(mousePosition.x), [-1, 1], [30, -30]),
              y: useTransform(useMotionValue(mousePosition.y), [-1, 1], [30, -30])
            }}
          />
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
            animate={titleControls}
            className="space-y-6 mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 max-w-4xl leading-[1.1] mx-auto tracking-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Convert Existing Content Into{" "}
              </motion.span>
              <span className="relative">
                <motion.span
                  className="bg-gradient-to-r from-[#9146FF] via-[#FF6B8B] to-[#9146FF] text-transparent bg-clip-text animate-gradient inline-block"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Viral Shorts
                </motion.span>
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
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {" "}in Seconds
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto font-normal mt-8"
            >
              Turn videos into viral hits—AI spots your best hooks, magnetic CTAs, authentic testimonials, and standout moments, instantly optimized for TikTok, Reels & YouTube Shorts.
            </motion.p>

            {/* Supported Content Types */}
            <div className="flex flex-wrap gap-4 justify-center mt-8 mb-8">
              {[
                "UGC",
                "Influencer Marketing",
                "Branded Video Content"
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="bg-white/90 backdrop-blur-sm border border-[#9146FF]/20 px-6 py-3 rounded-full"
                >
                  <span className="text-gray-800 font-semibold bg-gradient-to-r from-[#9146FF] to-[#FF6B8B] bg-clip-text text-transparent">
                    {type}
                  </span>
                </motion.div>
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
            <motion.a
              href="https://app.videofusion.io/auth/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center bg-gradient-to-r from-[#9146FF] to-[#FF6B8B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Try it Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
