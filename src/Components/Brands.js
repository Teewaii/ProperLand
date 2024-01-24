import React from "react";
import BrandsLogo from "./BrandsLogo";
import ExploreBtn from "../Utilities/Explore_btn";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Brands() {
  return (
    <section className="Brand container py-[80px]">
      <motion.div
        className="wrapper flex flex-col items-center justify-center bg-[#F5F1EF] py-[110px]"
        initial={{ y: 50, opacity: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="header flex flex-col items-center">
          <h1 className="text-[20px] text-center font-bold mb-12 md:text-[25px] px-[5px] my-4 lg:px-0 ">
            More than 50+ Brands Trusted World Wide
          </h1>
        </div>

        <div className="LogoWrapper  flex flex-col items-center justify-center gap-[30px] mb-[50px] lg:gap-[60px] md:flex-row md:flex-wrap lg:max-w-[90%] 2xl:max-w-[70%] ">
          {BrandsLogo.map(({ pix, id }) => (
            <div
              key={id}
              className="BrandLogo flex w-fit flex-col items-center relative"
            >
              <img src={pix} className="w-[fit]" alt="Brand Logo a room icon" />
            </div>
          ))}
        </div>
        <Link to="All-properties">
          <ExploreBtn />
        </Link>
      </motion.div>
    </section>
  );
}

export default Brands;
