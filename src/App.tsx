import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <HowItWorks />
              </>
            }
          />
          {/* Add other routes as needed */}
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}
