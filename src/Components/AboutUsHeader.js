import React from "react";
import left_pattern from "../../src/img/About/Icon_lt.png";
import right_pattern from "../../src/img/About/Icon_rt.png";
import hux_icon from "../../src/img/Home/Vectorhux.png";
// import heroImg from "../../src/img/About/hero_img.png";

function AboutUsHeader({ intro, heading, img }) {
  return (
    <section className=" bg-gradient-to-l from-hero to-hero_end h-[55vh] md:h-[42vh] max-h-xs:[40vh] lg:h-[73vh] 2xl:h-[70vh] relative overflow-hidden">
      <div className="main_wrapper">
        <div
          className="leftPattern absolute left-0 bottom-0"
          initial={{ x: 50, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={left_pattern} alt="left_pattern_image" />
        </div>
        <div className="rightPattern absolute top-0 lg:bottom-0 md:right-[-380px] lg:right-[-80px]">
          <img src={right_pattern} alt="right_pattern_image" />
        </div>

        <div className="left_wrapper container flex items-start">
          <div className="left pt-40 flex flex-col items-center lg:items-start relative lg:pt-[250px] xl:pt-[200px]  2xl:pt-[310px]">
            <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
              <img src={hux_icon} alt="" />
              <p className="text-link text-sm tracking-[6px] uppercase">
                {intro}
              </p>
            </div>
            <div className="middle_text mb-2 xl:mb-2 2xl:mb-6 relative z-20">
              <h1 className="text-[28px] md:text-[35px] md:leading-[50px] font-[600] md:max-w-[405px] lg:header2 leading-[35px] lg:text-left xl:text-[40px] lg:max-w-[100%] xl:leading-[55px] 2xl:text-[50px] ">
                {heading}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_image ">
        <img
          className="h-[80%] lg:h-[95%] absolute right-0 bottom-0 lg:bottom-0 "
          // className="w-[80%] lg:w-[60%]  absolute right-0 bottom-0 lg:bottom-0 2xl:w-[55%]"
          src={img}
          alt="heroImg"
        />
      </div>
    </section>
  );
}

export default AboutUsHeader;
