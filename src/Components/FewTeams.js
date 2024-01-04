import React from "react";
import insta from "../img/Home/isnta.svg";
import fb from "../img/Home/fb.svg";
import twitter from "../img/Home/twit.svg";
import Team_info from "./Team_info";
import { Link } from "react-router-dom";
import Team from "./Team";
import { motion } from "framer-motion";

function FewTeams({ slicer }) {
  return (
    <section className="agents flex flex-col items-center h-[fit] py-[110px] lg:py-[140px]  ">
      <div className="header flex flex-col items-center ">
        <p className="text-sm uppercase tracking-[4px] md:tracking-[6px] lg:text-md 2xl:text-lg">
          |<span className="text-secondary ">03</span> Experts|
        </p>
        <motion.h1
          className="text-[24px] font-bold leading-[30px] md:text-[35px] md:leading-[50px] my-4 md:max-w-[550px]  mt-12"
          initial={{ y: -50, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Property Team
        </motion.h1>
      </div>
      <Team slicer={4} />
      {/* <Team slicer={4} /> */}
      <Link
        to="/agents"
        className="w-[150px] text-center rounded-sm bg-secondary p-[15px] mt-4 cursor-hover hover:bg-primary hover:text-white transition all ease-in-out duration-300"
      >
        <h1>See All</h1>
      </Link>
    </section>
  );
}

export default FewTeams;
