import React from "react";
import hux_icon from "../img/Home/Vectorhux.png";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";

function ContactBody() {
  return (
    <div className="mainContent flex container ">
      <div className="left_wrapper flex flex-col items-start flex-1 ">
        <div className="head pt-40 flex flex-col items-center lg:items-start relative pt-[150px] lg:pt-[250px] xl:pt-[200px] 2xl:pt-[280px]">
          <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
            <img src={hux_icon} alt="" />
            <p className="text-link text-sm tracking-[2px] uppercase">
              Contact Us
            </p>
          </div>
          <div className="middle_text xl:mb-2 2xl:mb-6">
            <h1 className="text-[22px] leading-[28px] md:text-[40px] md:leading-[50px] font-[600] w-[100%] lg:header2 leading-[35px] lg:text-left xl:text-[50px]  xl:leading-[55px] 2xl:text-[65px] 2xl:leading-[75px]">
              Contact us For More Information
            </h1>
            <p className="text-md lg:text-left my-4 lg:mt-4 lg:text-[14px] 2xl:text-[18px] text-link">
              Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="contactInfo flex flex-col gap-6 relative text-link ml-[20px]">
          <div className="email flex items-center gap-x-2 bg-white relative py-[10px] px-[13px] rounded-md z-[90] ">
            <div className="w-[25px]  ">
              <EnvelopeIcon />
            </div>
            <p>Properland@mail.com</p>
            <div className="bg-link w-[60px] h-[60px] absolute top-[-20%] left-[-20px] rounded-md z-[5] "></div>
          </div>
          <div className="numb flex items-center gap-x-2 bg-white py-[10px] px-[13px] rounded-md">
            <div className="w-[25px]">
              <PhoneIcon />
            </div>
            <p>+ 7016 - 5060 - 1920</p>
          </div>
          <div className="numb"></div>
        </div>
      </div>

      <div className="right_wrapper flex-1"></div>
    </div>
  );
}

export default ContactBody;
