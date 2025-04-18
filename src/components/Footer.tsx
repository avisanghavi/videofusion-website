import { Instagram, Youtube, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1E1B2C] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/lovable-uploads/ffe6ee07-3ac4-49de-b817-2f08723c42e0.png"
            alt="Videofusion"
            className="h-8"
          />
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          <a
            href="https://www.instagram.com/videofusionio/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@videofusion.io"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
              <path d="M16 8v4a4 4 0 0 1-4 4"></path>
              <path d="M8 16v-8a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4"></path>
            </svg>
          </a>
          <a
            href="https://x.com/videofusionio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/60 text-sm mb-6">
          Copyright ©videofusion.io {new Date().getFullYear()}
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/60">
          <a
            href="https://videofusion.io/terms-conditions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            Terms & Conditions
          </a>
          <a
            href="https://videofusion.io/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="https://videofusion.io/videofusion-supplemental-california-privacy-disclosure/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            CCPA
          </a>
        </div>
      </div>
    </footer>
  );
};
