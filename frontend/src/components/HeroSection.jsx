// HeroSection.jsx
import React from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home" // This makes the Navbar "Home" button scroll here
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center"
    >
      <div className="container max-w-4xl mx-auto z-10 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in">
          <span className="text-white">Welcome to,</span>{" "}
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            IGDTUW_
          </span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
            Verse
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in-delay-3">
          IGDTUW Verse is a one-stop platform for students to access resources, opportunities, 
          and community support. Built by students, for students, to make campus life easier and more connected.
        </p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <Link to="/register" className="cosmic-button">
            Explore the Verse
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
