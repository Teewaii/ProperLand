import React from "react";
import insta from "../img/Home/isnta.svg";
import fb from "../img/Home/fb.svg";
import twitter from "../img/Home/twit.svg";
import Team_info from "./Team_info";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Team({ slicer }) {
  return (
    <section className="main_focus flex flex-col items-center h-[fit] py-[30px] container ">
      <div className="team grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 gap-y-30 gap-x-0 h-100vh lg:items-center lg:gap-y-0 lg:gap-x-6 cursor-pointer ">
        {Team_info.slice(0, `${slicer}`).map(({ name, pix, role, id }) => (
          <motion.div
            key={id}
            className="rounded-md mb-8 h-[fit] group"
            initial={{ y: -50, opacity: 0.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img className="w-[100%]" src={pix} alt="teampix" />
            <div className="info px-4 py-4 bg-[#F6F6F6] group-hover:bg-secondary transition-all duration-300  ease-in-out">
              <h1 className="text-primary text-[18px] font-bold ">{name}</h1>
              <div className="bottom flex items-center justify-between mt-2">
                <p className="text-secondary text-[14px] group-hover:text-white transition-all duration-300  ease-in-out">
                  {role}
                </p>
                <div className="socials flex items-center gap-2">
                  <img
                    className="w-[18px] hover:text-primary"
                    src={insta}
                    alt="instagram"
                  />
                  <img
                    className="w-[18px] hover:text-primary"
                    src={fb}
                    alt="instagram"
                  />
                  <img
                    className="w-[18px] hover:text-primary"
                    src={twitter}
                    alt="instagram"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Team;
