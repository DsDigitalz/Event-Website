import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import AboutSection from "./Components/AboutSection";
import EventCards from "./Components/EventCards";
import LogoCarousel from "./Components/LogoCarousel";
import SpeakersSection from "./Components/SpeakersSection";
import SpeakersHeading from "./Components/SpeakersHeading";
import TeamMembers from "./Components/TeamMembers";
import ScheduleComponent from "./Components/ScheduleComponent";
import TeamComponents from "./Components/TeamComponents";
import MoreInfo from "./Components/MoreInfo";
import EventCardInfo from "./Components/EventCardInfo";

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
      <TeamMembers />
      <ScheduleComponent />
      <TeamComponents />
      <MoreInfo />
      <EventCardInfo />
    </div>
  );
}
