import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 py-4 px-6 ${
        isHome
          ? "bg-white/5 backdrop-blur-sm border-b border-gray-100/20 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4"
        >
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/ffe6ee07-3ac4-49de-b817-2f08723c42e0.png"
              alt="VideoFusion"
              className="h-8"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <a
              href="https://app.videofusion.io/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Login
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://app.videofusion.io/auth/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-[#9146FF] to-[#FF6B8B] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B8B] to-[#9146FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg px-6 py-4 flex flex-col gap-4"
          >
            <a
              href="https://app.videofusion.io/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="https://app.videofusion.io/auth/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#9146FF] to-[#FF6B8B] text-white px-6 py-3 rounded-full font-medium text-center hover:shadow-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Free Trial
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
