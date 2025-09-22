import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import AboutSection from "./Components/AboutSection";
import EventCards from "./Components/EventCards";
import LogoCarousel from "./Components/LogoCarousel";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoCarousel />
      <AboutSection />
      <EventCards />
    </div>
  );
}
