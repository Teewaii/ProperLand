import React from "react";
import left_pattern from "../img/Home/Icon.png";
import right_pattern from "../img/Home/Icon_rt.png";

import ContactBody from "./ContactBody";

function ContactHeader() {
  return (
    <section className=" bg-gradient-to-l from-hero to-hero_end mb-16 min-h-100vh pb-24 relative overflow-hidden 2xl:pt-14">
      <div className=" leftPattern absolute left-0 bottom-0">
        <img src={left_pattern} alt="left_pattern_image" />
      </div>
      <div className="w-[55%] rightPattern absolute top-0 lg:bottom-0 md:right-[-380px] lg:right-[-80px] ">
        <img src={right_pattern} alt="right_pattern_image" />
      </div>

      <ContactBody />
    </section>
  );
}

export default ContactHeader;
