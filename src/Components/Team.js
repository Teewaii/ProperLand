import React from "react";
import peter from "../img/About/peter.png";
import insta from "../img/Home/isnta.svg";
import fb from "../img/Home/fb.svg";
import twitter from "../img/Home/twit.svg";
import Team_info from "./Team_info";

function Team() {
  return (
    <section className="main_focus flex flex-col h-[fit] py-[110px] lg:py-[140px] container ">
      <div className="header flex flex-col items-center ">
        <p className="text-sm uppercase tracking-[4px] md:tracking-[6px] lg:text-md 2xl:text-lg">
          |<span className="text-secondary ">06</span> Experts|
        </p>
        <h1 className="text-[24px] font-bold leading-[30px] md:text-[35px] md:leading-[50px] my-4 md:max-w-[550px]  mt-12">
          Our Property Team
        </h1>
      </div>
      <div className="team mt-5 flex flex-col items-center h-100vh lg:flex-row lg:items-center lg:gap-x-6">
        {Team_info.map(({ name, pix, role }) => (
          <div className="rounded-md lg:w-1/4 mb-8 h-[300px]">
            <img src={pix} alt="teampix" />
            <div className="info w-[100%] px-4 py-4 bg-[#F6F6F6]">
              <h1 className="text-primary text-[18px] font-bold ">{name}</h1>
              <div className="bottom flex items-center justify-between mt-2">
                <p className="text-secondary text-[14px]">{role}</p>
                <div className="socials flex items-center gap-2">
                  <img className="w-[18px]" src={insta} alt="instagram" />
                  <img className="w-[18px]" src={fb} alt="instagram" />
                  <img className="w-[18px]" src={twitter} alt="instagram" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
