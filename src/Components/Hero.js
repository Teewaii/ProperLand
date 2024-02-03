import React from "react";
import left_pattern from "../../src/img/Home/Icon.png";
import right_pattern from "../../src/img/Home/Icon_rt.png";
import { Link } from "react-router-dom";
import heroImg from "../../src/img/Home/hero_img.png";
import ExploreBtn from "../Utilities/Explore_btn";
import { motion } from "framer-motion";
import TopTag from "../Utilities/TopTag";

function Hero() {
  return (
    <section className=" bg-gradient-to-l from-hero to-hero_end h-[100vh] relative overflow-hidden md:h-[95vh] lg:min-h-[110vh] 2xl:min-h-[100vh] ">
      {/* <section className=" bg-gradient-to-l from-hero to-hero_end h-[100vh] relative overflow-hidden md:h-[95vh] lg:h-[110vh] 2xl:h-[100vh] "> */}
      <div className="main_wrapper ">
        <div className="leftPattern absolute left-0 bottom-0">
          <img src={left_pattern} alt="" />
        </div>
        <div className="rightPattern absolute top-0 lg:bottom-0 md:right-[-380px] lg:right-[-80px] ">
          <img src={right_pattern} alt="" />
        </div>

        {/* <section className=" bg-heroBgd_rt h-[100vh] relative "> */}
        <div className="left_wrapper container flex items-start">
          <motion.div
            className="left pt-40 flex flex-col items-center xl:items-start relative lg:pt-[200px] xl:pt-[230px] 2xl:pt-[300px]"
            initial={{ x: -50, opacity: 0.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <TopTag content="Real Estate Agency" />
            <div className="middle_text mb-2 xl:mb-2 2xl:mb-8">
              <h1 className="text-[28px] font-[600] text-center md:text-[48px] md:leading-[65px] leading-[35px] lg:header2 lg:leading-[60px]  xl:text-left xl:text-[45px] xl:max-w-[600px] xl:leading-[55px] 2xl:text-[60px] 2xl:max-w-[600px] 2xl:leading-[72px]">
                Find the perfect place to Live with your family
              </h1>
              <p className="text-md text-center my-4 lg:mt-4 md:text-xl relative z-50 xl:text-left xl:max-w-[500px] md:text-[18px] 2xl:max-w-[600px] xl:text-[20px] text-link">
                Distinctively re-engineer revolutionary meta-services and
                premium architectures. Intrinsically incubate.
              </p>
            </div>
            <div className="max-w-sm:absolute z-40 ">
              <Link to="all-properties">
                <ExploreBtn />
              </Link>
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
              className="hidden xs:block  h-[55vh] md:h-[60vh] lg:h-[85vh] xl:h-[105vh] "
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
