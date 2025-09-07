import Navbar from "../components/Navbar.jsx";

import { ThemeToggle } from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground.jsx"; // ✅ correct

import HeroSection from "@/components/HeroSection";

import { AboutSection } from "../components/AboutSection.jsx";
import ExploreSection from "../components/ExploreSection.jsx";


import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExploreSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
