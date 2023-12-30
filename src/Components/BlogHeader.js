import React from "react";
import left_pattern from "../../src/img/About/Icon_lt.png";
import right_pattern from "../../src/img/About/Icon_rt.png";
import hux_icon from "../../src/img/Home/Vectorhux.png";
import heroImg from "../../src/img/About/hero_img.png";
import Articles from "./Articles";

function BlogHeader() {
  return (
    <section className=" bg-gradient-to-l from-hero to-hero_end mb-16 h-[480px] md:h-[600px] lg:h-[630px] relative overflow-hidden 2xl:h-[85vh]">
      {/* <section className=" bg-gradient-to-l from-hero to-hero_end mb-16 h-[70vh] md:h-[55vh]  lg:h-[100vh] xl:h-[100vh] relative overflow-hidden 2xl:h-[85vh]"> */}
      <div className="main_wrapper">
        <div className="leftPattern absolute left-0 bottom-0">
          <img src={left_pattern} alt="left_pattern_image" />
        </div>
        <div className="rightPattern absolute top-0 lg:bottom-0 md:right-[-380px] lg:right-[-80px] ">
          <img src={right_pattern} alt="right_pattern_image" />
        </div>

        <div className="left_wrapper w-[90%] md:max-w-[70%] lg:max-w-[75%] container flex items-start">
          {Articles.slice(0, 1).map(({ passPort, id }) => (
            <div
              id={id}
              className="left pt-40 flex flex-col items-center lg:items-start relative pt-[150px] lg:pt-[250px] xl:pt-[200px] 2xl:pt-[280px]"
            >
              <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
                <img src={hux_icon} alt="" />
                <p className="text-link text-sm tracking-[2px] uppercase">
                  November 05, 2021 | Architecture
                </p>
              </div>
              <div className="middle_text xl:mb-2 2xl:mb-6">
                <h1 className="text-[22px] leading-[28px] md:text-[40px] md:leading-[50px] font-[600] w-[100%] lg:header2 leading-[35px] lg:text-left  xl:leading-[55px] 2xl:text-[65px] 2xl:max-w-[950px] 2xl:leading-[75px]">
                  Here’s how to decorate your new home from scratch
                </h1>
                <div className="publisher flex items-center my-4 gap-x-4">
                  <img
                    src={passPort}
                    className=" w-[45px] h-[50px] md:w-[55px] md:h-[60px] rounded-full "
                    alt="publisher"
                  />
                  <div>
                    <p className="font-bold">Deborah Roderick</p>
                    <small className="text-link">Vloger</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogHeader;
