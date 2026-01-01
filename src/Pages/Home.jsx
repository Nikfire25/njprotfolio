import React from "react";
import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "../Components/StarBackground";
import Navbar from "../Components/navbar";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import SkillsSection from "../Components/SkillsSection";
import Projects from "../Components/Projects";
import ContactMe from "../Components/ContactMe";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <main>
        <HeroSection />
        <About />
        <SkillsSection />
        <Projects />
        <ContactMe />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
