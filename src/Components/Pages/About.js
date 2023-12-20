import React from "react";
import AboutUsHeader from "../AboutUsHeader";
import Vintro from "../Vintro";
import Reviews from "../Reviews";
import Process from "../Process";
import Stats from "../Stats";
import Team from "../Team";
import Brands from "../Brands";
import Space from "../Space";

function About() {
  return (
    <div className="relative">
      <AboutUsHeader />
      <Vintro />
      <Reviews />
      <Space />
      <Process />
      <Stats />
      <Team />
      <Brands />
    </div>
  );
}

export default About;
