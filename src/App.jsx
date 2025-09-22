import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import AboutSection from "./Components/AboutSection";
import EventCards from "./Components/EventCards";
import LogoCarousel from "./Components/LogoCarousel";
import SpeakersSection from "./Components/SpeakersSection";
import SpeakersHeading from "./Components/SpeakersHeading";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoCarousel />
      <AboutSection />
      <EventCards />
      <SpeakersSection />
      <SpeakersHeading />
    </div>
  );
}
