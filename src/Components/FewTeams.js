import React from "react";
import insta from "../img/Home/isnta.svg";
import fb from "../img/Home/fb.svg";
import twitter from "../img/Home/twit.svg";
import Team_info from "./Team_info";
import { Link } from "react-router-dom";
import Team from "./Team";

function FewTeams({ slicer }) {
  return (
    <section className="agents flex flex-col items-center h-[fit] py-[110px] lg:py-[140px]  ">
      <div className="header flex flex-col items-center ">
        <p className="text-sm uppercase tracking-[4px] md:tracking-[6px] lg:text-md 2xl:text-lg">
          |<span className="text-secondary ">06</span> Experts|
        </p>
        <h1 className="text-[24px] font-bold leading-[30px] md:text-[35px] md:leading-[50px] my-4 md:max-w-[550px]  mt-12">
          Our Property Team
        </h1>
      </div>
      <Team slicer={4} />
      {/* <Team slicer={4} /> */}
      <Link
        to="/agents"
        className="w-[150px] text-center rounded-sm bg-secondary p-[15px] mt-4 cursor-hover hover:bg-primary hover:text-white transition all ease-in-out duration-300"
      >
        <h1>See All</h1>
      </Link>
    </section>
  );
}

export default FewTeams;
