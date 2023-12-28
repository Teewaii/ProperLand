import React from "react";
import left_pattern from "../../src/img/About/Icon_lt.png";
import right_pattern from "../../src/img/About/Icon_rt.png";
import hux_icon from "../../src/img/Home/Vectorhux.png";
import agentHeader from "../img/Agents/agents_bkg.png";
import agentHeader_mob from "../img/Agents/agents_bkg_mobile.png";

function AgentsPageHeader() {
  return (
    <section className=" bg-gradient-to-l from-hero to-hero_end h-[55vh] max-h-xs:[40vh] lg:h-[70vh] 2xl:h-[55vh] relative overflow-hidden">
      <div className="main_wrapper ">
        <div className="leftPattern absolute left-0 bottom-0 z-10">
          <img src={left_pattern} alt="left_pattern_image" />
        </div>
        <div className="rightPattern absolute top-0 lg:bottom-0 z-10 md:right-[-380px] md:z-0 lg:right-[-80px]  ">
          <img src={right_pattern} alt="right_pattern_image" />
        </div>

        <div className="left_wrapper container flex items-start relative z-10">
          <div className="left pt-40 flex flex-col items-center lg:items-start relative lg:pt-[250px] xl:pt-[200px]  2xl:pt-[310px]">
            <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
              <img src={hux_icon} alt="" />
              <p className="text-link text-sm tracking-[6px] uppercase">
                PROPERTY EXPERTS
              </p>
            </div>
            <div className="middle_text mb-2 xl:mb-2 2xl:mb-6">
              <h1 className="text-[28px] md:text-[40px] md:leading-[50px] font-[600] md:max-w-[405px] lg:header2 leading-[35px]  lg:text-left xl:text-[50px] xl:max-w-[600px] xl:leading-[55px] 2xl:text-[65px] 2xl:max-w-[680px] 2xl:leading-[75px]">
                Meet Our Agents
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_image absolute top-0 bottom-0 left-0 right-0 -z-12 ">
        <img
          className="absolute top-0 bottom-0 h-[100%] right-0 md:hidden opacity-[80%]"
          src={agentHeader_mob}
          alt="agent Background Img"
        />
        <img
          className="hidden w-[100%] absolute top-0 bottom-0 left-0 right-0 md:block  "
          src={agentHeader}
          alt="agent Background Img"
        />
      </div>
    </section>
  );
}

export default AgentsPageHeader;
