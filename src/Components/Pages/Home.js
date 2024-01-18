import React, { useEffect } from "react";
import Hero from "../Hero";
import Intro from "../Intro";
import Featured from "../Featured";
import WhyUs from "../WhyUs";
import Services from "../Services";
import Reviews from "../Reviews";
import Statistics from "../Statistics";
import Neighbourhoods from "../Neighbourhoods";
import Brands from "../Brands";
import Blog from "../Blog";
import AboutUs from "../AboutUs";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative">
      <Hero />
      <Intro />
      <Featured />
      <WhyUs />
      <AboutUs />
      <Services />
      <Reviews />
      <Statistics />
      <Neighbourhoods />
      <Brands />
      <Blog />
    </div>
  );
}

export default Home;
