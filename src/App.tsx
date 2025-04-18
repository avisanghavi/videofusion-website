import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProductivityMetric } from "./components/ProductivityMetric";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <ProductivityMetric />
                <HowItWorks />
              </>
            }
          />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
