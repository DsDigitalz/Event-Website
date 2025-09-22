import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import LogoSlide from "./Components/LogoSLide";
import AboutSection from "./Components/AboutSection";
import EventCards from "./Components/EventCards";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoSlide />
      <AboutSection />
      <EventCards />
    </div>
  );
}
