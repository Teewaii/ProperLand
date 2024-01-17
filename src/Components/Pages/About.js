import React, { useEffect } from "react";
import AboutUsHeader from "../AboutUsHeader";
import Vintro from "../Vintro";
import Reviews from "../Reviews";
import Process from "../Process";
import Stats from "../Stats";
import Brands from "../Brands";
import Space from "../Space";
import FewTeams from "../FewTeams";
import img from "../../img/About/hero_img.png";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <AboutUsHeader
        intro="ABOUT PROPERLAND"
        heading="About Our Real Estate"
        img={img}
      />
      <Vintro />
      <Reviews />
      <Space />
      <Process />
      <Stats />
      <FewTeams />
      {/* <Team slicer={4} /> */}
      <Brands />
    </div>
  );
}

export default About;
