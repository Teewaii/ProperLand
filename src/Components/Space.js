import React from "react";
import hux from "../img/About/hux.jpg";
import videoPlay from "../img/Home/Video Icon.png";
import { motion } from "framer-motion";

function Space() {
  return (
    <section className="statistics py-[95px] container">
      <div className="Whoweare flex flex-col gap-y-20">
        <motion.div
          className="firstSection flex flex-col items-center lg:flex-row lg:gap-x-10"
          initial={{ x: -50, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-[90%]">
            <img className="rounded-md " src={hux} alt="houseIcon" />
          </div>

          <div className="w-[100%] flex flex-col items-center text-center lg:items-start lg:text-left ">
            <h1 className="text-[24px] font-bold md:text-[35px] leading-[40px] my-4 md:max-w-[500px] ">
              Learn More About Who We Are in Real Estate
            </h1>
            <p className="text-center text-link mb-4 md:text-[15px] lg:text-left">
              Distinctively re-engineer revolutionary meta-services and premium
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi.
            </p>
          </div>
        </motion.div>

        {/* secondSection */}
        <motion.div
          className="right flex flex-col-reverse text-center lg:text-left items-center lg:flex-row lg:gap-x-10"
          initial={{ x: 50, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="description w-[75%] xl:w-[57%] ">
            <div className="top">
              <h1 className="text-[24px] font-bold md:text-[35px] text-center leading-[40px] my-4 md:max-w-[510px] lg:text-left">
                We're reinventing the space
              </h1>
              <p className="text-center text-link mb-4 md:text-[15px] lg:text-left">
                Distinctively re-engineer revolutionary meta-services and
                premium At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolore.
              </p>
            </div>
            <div className="bottom">
              <div className="fullService">
                <h1 className=" font-bold mb-2">Full Services</h1>
                <p className="text-center text-[12px] text-black mb-4 md:text-[15px] lg:text-left">
                  Interactively procrastinate high-payoff content without
                  backward-compatible data.
                </p>
              </div>

              <div className="fullService">
                <h1 className=" font-bold mb-2">Safe Investments</h1>
                <p className="text-center text-[12px] text-black mb-4 md:text-[15px] lg:text-left">
                  Interactively procrastinate high-payoff content without
                  backward-compatible data.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-space_bkg bg-cover bg-center bg-no-repeat flex  items-center justify-center w-[95%] rounded-md h-[250px] md:w-[600px] md:h-[300px] lg:h-[360px] lg:w-[800px]">
            <img
              className="cursor-pointer w-fit"
              src={videoPlay}
              alt="Vid player"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Space;
