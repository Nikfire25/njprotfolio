import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I am </span>
            <span className="opacity-0 animate-fade-in-delay-1 text-primary">
              Nikunj
            </span>
            <span className="text-gradient opacity-0  ml-2 animate-fade-in-delay-2">
              Jain
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a detail-oriented data analyst with 4 years of experience,
            currently expanding into front-end development through self-directed
            learning. I combine strong analytical skills with modern UI
            practices to build clean, responsive, and performance-driven web
            applications that meet business and user needs.
          </p>
          <div className="pt-6 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View my Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -transate-x-1/2 flex flex-col animate-bounce items-center justify-center">
        <span className="text-sm text-muted-foregound mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
