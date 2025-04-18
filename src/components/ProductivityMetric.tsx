import { motion } from "framer-motion";

export const ProductivityMetric = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#9146FF] rounded-full filter blur-[150px] opacity-[0.07] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF6B8B] rounded-full filter blur-[150px] opacity-[0.07] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B164FF] rounded-full filter blur-[150px] opacity-[0.05]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Left side - Metric Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[320px] h-[320px] md:w-[600px] md:h-[600px] flex-shrink-0 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-xl"
            />
            <img 
              src="/productivity-metric.png" 
              alt="70% reduction in editing time" 
              className="w-full h-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 lg:max-w-[540px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Say Goodbye to{" "}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] to-[#FF6B8B]">
                    Manual Editing
                  </span>
                  <motion.span
                    className="absolute inset-x-0 bottom-0 h-[0.2em] bg-gradient-to-r from-[#9146FF] to-[#FF6B8B] opacity-30 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </span>
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed"
            >
              Stop spending hours manually editing content. Our AI automatically analyzes your videos, identifies the most valuable moments, and instantly transforms them into high-converting assets—saving you 70% of your editing time.
            </motion.p>

            <ul className="space-y-6">
              {[
                "Automatic detection of hooks, CTAs, and testimonials",
                "Smart clip generation with perfect timing and pacing",
                "Instant formatting for every marketing channel",
                "Automated content distribution strategy"
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start text-gray-700 group"
                >
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 mr-4 rounded-full bg-gradient-to-r from-[#9146FF]/10 to-[#FF6B8B]/10 group-hover:from-[#9146FF]/20 group-hover:to-[#FF6B8B]/20 transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#9146FF] to-[#FF6B8B]" />
                  </span>
                  <span className="text-lg text-gray-600 group-hover:text-gray-900 transition-colors duration-300 pt-0.5">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 