
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/" className="block">
              <img 
                src="/lovable-uploads/ffe6ee07-3ac4-49de-b817-2f08723c42e0.png" 
                alt="Videofusion"
                className="h-8"
              />
            </Link>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
                {/* Using a custom SVG for TikTok since lucide-react doesn't have a TikTok icon */}
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
                  className="h-5 w-5"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M16 8v4a4 4 0 0 1-4 4"></path>
                  <path d="M8 16v-8a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div>
            Copyright ©videofusion.io {new Date().getFullYear()}
          </div>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-purple-600">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-purple-600">
              Privacy Policy
            </Link>
            <Link to="/ccpa" className="hover:text-purple-600">
              CCPA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
