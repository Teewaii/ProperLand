import React from "react";
import hux_icon from "../img/Home/Vectorhux.png";
import left_pattern from "../img/Home/Icon.png";
import right_pattern from "../img/Home/Icon_rt.png";
import heroImg from "../../src/img/About/hero_img.png";
import Articles from "./Articles";
import ContactBody from "./ContactBody";

function ContactHeader() {
  return (
    <section className=" bg-gradient-to-l from-hero to-hero_end mb-16 h-[100vh] relative overflow-hidden">
      {/* <section className=" bg-gradient-to-l from-hero to-hero_end mb-16 h-[70vh] md:h-[55vh] lg:h-[85vh] relative overflow-hidden"> */}
      <div className="main_wrapper">
        <div className="leftPattern absolute left-0 bottom-0">
          <img src={left_pattern} alt="left_pattern_image" />
        </div>
        <div className="rightPattern absolute top-0 lg:bottom-0 md:right-[-380px] lg:right-[-80px] ">
          <img src={right_pattern} alt="right_pattern_image" />
        </div>
        <ContactBody />
      </div>
    </section>
  );
}

export default ContactHeader;
