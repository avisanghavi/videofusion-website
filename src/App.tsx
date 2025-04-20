import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { CCPA } from './pages/CCPA';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions/" element={<TermsConditions />} />
          <Route path="/ccpa/" element={<CCPA />} />
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
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
