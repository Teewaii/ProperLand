import React from "react";
import new_york from "../../src/img/Home/NY.png";
import Neighbourhood_location from "./Neighbourhood_location";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

function Neighbourhoods() {
  return (
    <section className="Neighorhoods pb-[75px] lg:py-[95px] h-fit">
      <div className="wrapper flex flex-col items-center">
        <div className="header mb-8 text-center ">
          <motion.h1
            className="text-[24px]  md:text-[35px] my-4 font-bold px-[10px] lg:px-0 "
            initial={{ y: -50, opacity: 0.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Discover The Neighbourhoods
          </motion.h1>
        </div>
        <motion.div
          className="locations grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-4 container"
          initial={{ y: 50, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {Neighbourhood_location.map(({ pix, title, num_property, id }) => (
            <div
              key={id}
              className="New_york h-[407px] rounded-md bg-cover justify-stretch bg-no-repeat bg-top-left py-10 lg:pt-20 lg:h-[400px] relative "
              style={{ backgroundImage: `url(${pix})` }}
            >
              <ArrowSmallRightIcon className="w-[30px] bg-black bg-opacity-[20%] cursor-pointer text-white p-1 rounded-full absolute top-4 right-4" />
              <div className="details absolute left-4 bottom-4 text-left">
                <h1 className="text-[18px] font-bold text-white">{title}</h1>
                <p className="text-secondary text-[12px]">{num_property}ty</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Neighbourhoods;
