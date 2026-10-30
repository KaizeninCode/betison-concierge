import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import Services from "./components/Services";
import GoalsObjectives from "./components/GoalsObjectives";
import CoreValues from "./components/CoreValues";
import Contact from "./components/Contact";

const HomePage = () => {
  return (
    <main className="">
      {/* <Header/> */}
      <Hero/>
      <About/>
      <MissionVision/>
      <Services/>
      <CoreValues/>
      <Contact/>
      
    </main>
  );
};

export default HomePage;
