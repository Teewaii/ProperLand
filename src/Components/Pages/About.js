import React from "react";
import AboutUsHeader from "../AboutUsHeader";
import Vintro from "../Vintro";
import Reviews from "../Reviews";
import Process from "../Process";
import Stats from "../Stats";
import Team from "../Team";

function About() {
  return (
    <div className="relative">
      <AboutUsHeader />
      <Vintro />
      <Reviews />
      <Process />
      <Stats />
      <Team />
    </div>
  );
}

export default About;
