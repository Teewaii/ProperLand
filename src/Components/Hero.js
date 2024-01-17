import React from "react";
import left_pattern from "../../src/img/Home/Icon.png";
import right_pattern from "../../src/img/Home/Icon_rt.png";
import heroImg from "../../src/img/Home/hero_img.png";
import hux_icon from "../../src/img/Home/Vectorhux.png";
import ExploreBtn from "./Button/Explore_btn";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className=" bg-gradient-to-l from-hero to-hero_end h-[100vh] relative overflow-hidden md:h-[95vh] lg:min-h-[110vh] 2xl:h-[100vh] ">
      {/* <section className=" bg-gradient-to-l from-hero to-hero_end h-[100vh] relative overflow-hidden md:h-[95vh] lg:h-[110vh] 2xl:h-[100vh] "> */}
      <div className="main_wrapper ">
        <div className="leftPattern absolute left-0 bottom-0">
          <img src={left_pattern} alt="" />
        </div>
        <div className="rightPattern absolute top-0 lg:bottom-0 md:right-[-380px]  lg:right-[-80px] ">
          <img src={right_pattern} alt="" />
        </div>

        {/* <section className=" bg-heroBgd_rt h-[100vh] relative "> */}
        <div className="left_wrapper container flex items-start">
          <motion.div
            className="left pt-40 flex flex-col items-center lg:items-start relative lg:pt-[200px] xl:pt-[230px] 2xl:pt-[310px]"
            initial={{ x: -50, opacity: 0.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
              <img src={hux_icon} alt="" />
              <p className="text-link text-sm tracking-[6px] uppercase">
                Real Estate Agency
              </p>
            </div>
            <div className="middle_text mb-2 xl:mb-2 2xl:mb-10">
              <h1 className="text-[28px] font-[600] text-center md:text-[40px] md:leading-[50px] md:max-w-[90%] lg:leading-[46px] lg:header2 leading-[35px] lg:text-left lg:text-[40px] lg:max-w-[500px] xl:max-w-[600px] xl:leading-[55px] 2xl:text-[62px] 2xl:max-w-[600px] 2xl:leading-[75px]">
                Find the perfect place to Live with your family
              </h1>
              <p className="text-md text-center my-4 lg:mt-4 text-lg  lg:text-left lg:max-w-[400px] xl:max-w-[500px] lg:text-[18px] 2xl:max-w-[600px] 2xl:text-[20px] text-link">
                Distinctively re-engineer revolutionary meta-services and
                premium architectures. Intrinsically incubate.
              </p>
            </div>
            <div className="max-w-sm:absolute z-40 ">
              <ExploreBtn />
            </div>
          </motion.div>

          <motion.div
            className="building rigt absolute md:right-0 bottom-0 lg:bottom-0"
            initial={{ x: 50, opacity: 0.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              className="h-[55vh] md:h-[68vh] lg:h-[96vh] 2xl:h-[110vh] "
              src={heroImg}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
