import React from "react";
import left_pattern from "../../src/img/About/Icon_lt.png";
import right_pattern from "../../src/img/About/Icon_rt.png";
import hux_icon from "../../src/img/Home/Vectorhux.png";
import heroImg from "../../src/img/About/hero_img.png";

function AboutUsHeader() {
  return (
    <section className=" bg-gradient-to-l from-hero to-hero_end h-[55vh]  max-h-xs:[40vh] lg:h-[73vh] 2xl:h-[55vh] relative overflow-hidden">
      <div className="main_wrapper">
        <div className="leftPattern absolute left-0 bottom-0">
          <img src={left_pattern} alt="left_pattern_image" />
        </div>
        <div className="rightPattern absolute top-0 lg:bottom-0 md:right-[-380px]  lg:right-[-80px] ">
          <img src={right_pattern} alt="right_pattern_image" />
        </div>

        <div className="left_wrapper container flex items-start">
          <div className="left pt-40 flex flex-col items-center lg:items-start relative lg:pt-[250px] xl:pt-[200px]  2xl:pt-[310px]">
            <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
              <img src={hux_icon} alt="" />
              <p className="text-link text-sm tracking-[6px] uppercase">
                ABOUT PROPERLAND
              </p>
            </div>
            <div className="middle_text mb-2 xl:mb-2 2xl:mb-6">
              <h1 className="text-[28px] md:text-[40px] md:leading-[50px] font-[600] md:max-w-[405px] lg:header2 leading-[35px]  lg:text-left xl:text-[50px] xl:max-w-[600px] xl:leading-[55px] 2xl:text-[65px] 2xl:max-w-[680px] 2xl:leading-[75px]">
                About Our Real Estate
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_image ">
        <img
          className="w-[80%] lg:w-[60%] absolute right-0 bottom-0 lg:bottom-0"
          src={heroImg}
          alt="heroImg"
        />
      </div>
    </section>
  );
}

export default AboutUsHeader;
