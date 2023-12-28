import React from "react";
import insta from "../img/Home/isnta.svg";
import fb from "../img/Home/fb.svg";
import twitter from "../img/Home/twit.svg";
import Team_info from "./Team_info";
import { Link } from "react-router-dom";

function Team({ slicer }) {
  return (
    <section className="main_focus flex flex-col items-center h-[fit] py-[30px] container ">
      {/* <div className="header flex flex-col items-center ">
        <p className="text-sm uppercase tracking-[4px] md:tracking-[6px] lg:text-md 2xl:text-lg">
          |<span className="text-secondary ">06</span> Experts|
        </p>
        <h1 className="text-[24px] font-bold leading-[30px] md:text-[35px] md:leading-[50px] my-4 md:max-w-[550px]  mt-12">
          Our Property Team
        </h1>
      </div> */}
      <div className="team grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 gap-y-30 gap-x-0 h-100vh lg:items-center lg:gap-y-0 lg:gap-x-8 cursor-pointer ">
        {Team_info.slice(0, `${slicer}`).map(({ name, pix, role, id }) => (
          <div key={id} className="rounded-md mb-8 h-[fit] group">
            <img className="w-[100%]" src={pix} alt="teampix" />
            <div className="info px-4 py-4 bg-[#F6F6F6] group-hover:bg-secondary transition-all duration-300  ease-in-out">
              <h1 className="text-primary text-[18px] font-bold ">{name}</h1>
              <div className="bottom flex items-center justify-between mt-2">
                <p className="text-secondary text-[14px] group-hover:text-white transition-all duration-300  ease-in-out">
                  {role}
                </p>
                <div className="socials flex items-center gap-2">
                  <img
                    className="w-[18px] hover:text-primary"
                    src={insta}
                    alt="instagram"
                  />
                  <img
                    className="w-[18px] hover:text-primary"
                    src={fb}
                    alt="instagram"
                  />
                  <img
                    className="w-[18px] hover:text-primary"
                    src={twitter}
                    alt="instagram"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Link
        to="/agents"
        className="w-[150px] text-center rounded-sm bg-secondary p-[15px] mt-4 cursor-hover"
      >
        <h1>See All</h1>
      </Link> */}
    </section>
  );
}

export default Team;
