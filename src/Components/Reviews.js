import React, { useRef } from "react";
import Review from "./Rev";
import Leftright from "../Utilities/Leftright";
import { motion } from "framer-motion";

function Reviews() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollDistance = 320;
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - scrollDistance,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollDistance = -320;
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="reviews bg-[#F3E8E2] h-fit py-[95px]">
      <motion.div
        className="wrapper pl-[32px] pr-[32px] lg:first:pl-[80px]  "
        initial={{ x: -50, opacity: 0.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="top flex items-center justify-between container">
          <h1 className="text-[24px] text-left font-bold  mb-8 leading-[30px] md:text-[35px] md:leading-[50px] my-4 md:max-w-[550px]">
            What our customers say about us
          </h1>
          <Leftright left={scrollLeft} right={scrollRight} />
        </div>
        <div
          ref={scrollContainerRef}
          className="review flex flex-col gap-14 md:flex-row flex-shrink:0 lg:gap-10 lg:Last:pr-[30px] overflow-scroll scrollbar-hide"
        >
          {Review.map(({ name, title, pix, msg, id }) => (
            <div
              key={id}
              className="bio flex flex-col flex-shrink-0 max-w-[350px]"
            >
              <p className="text-sm text-link text-left bg-gradient-to-bl from-[#ECC8B7] to-[#F4DBCE] rounded-[45px] rounded-bl-[0px] mb-4 p-[30px] md:text-[15px] lg:max-w-[450px]">
                {msg}
              </p>
              <div className="bottom flex items-center  gap-x-3">
                <div className="head border-[#F4DACD] relative  h-[45px] overflow-hidden border-[2px] rounded-full w-[45px] lg:border-[6px]  lg:w-[80px] lg:h-[80px]  ">
                  <img
                    src={pix}
                    className=" absolute top-0 bottom-0 left-0 right-0 "
                    alt="{name} headshot"
                  />
                </div>

                <div className="info flex flex-col items-start">
                  <h1 className="text-[17px] font-bold md:text-[18px] lg:text-[20px] 2xl:text-[18px]">
                    {name}
                  </h1>
                  <p className="text-[13px] text-link text-left lg:text-[18px] 2xl:text-[15px]  ">
                    {title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Reviews;
