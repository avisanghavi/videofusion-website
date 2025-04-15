
import { Link } from "react-router-dom";
import { Instagram, Tiktok } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
                <Tiktok className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/video-remixer" className="text-gray-600 hover:text-purple-600">
                  Video Remixer
                </Link>
              </li>
              <li>
                <Link to="/ai-hub" className="text-gray-600 hover:text-purple-600">
                  AI Powered Video Hub
                </Link>
              </li>
            </ul>
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
