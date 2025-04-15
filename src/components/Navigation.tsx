import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold">
            <img 
              src="/lovable-uploads/ffe6ee07-3ac4-49de-b817-2f08723c42e0.png" 
              alt="Videofusion"
              className="h-8"
            />
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">
            Home
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-purple-600 transition-colors">
            Log in
          </Link>
          <Button asChild>
            <Link to="/free" className="bg-purple-600 hover:bg-purple-700">
              Free HIGHLIGHTS
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
