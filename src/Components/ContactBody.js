import React from "react";
import hux_icon from "../img/Home/Vectorhux.png";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import left_pattern from "../img/FAQ/FAQ_Pattern_Left.png";
import right_pattern from "../img/FAQ/FAQ_Pattern_Right.png";
import ContactForm from "./ContactForm";

function ContactBody() {
  return (
    <section>
      <div className="Left&right_pattern_images bg-black w-100vw h-60vh">
        <div className="leftPattern absolute left-0 bottom-0">
          <img src={left_pattern} alt="left_pattern_image" />
        </div>
        <div className="rightPattern absolute top-0 lg:bottom-0 md:right-[-380px] lg:right-[-80px] ">
          <img src={right_pattern} alt="right_pattern_image" />
        </div>
      </div>
      <div className="mainContent pt-40 flex flex-col gap-6 items-start container pt-[150px] lg:pt-[250px] lg:flex-row xl:pt-[200px]  relative z-5 2xl:gap-12 ">
        <div className="left_wrapper flex flex-col items-start flex-[1]  ">
          <div className="head  flex flex-col items-center lg:items-start relative ">
            <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
              <img src={hux_icon} alt="" />
              <p className="text-link text-sm tracking-[2px] uppercase">
                Contact Us
              </p>
            </div>
            <div className="middle_text xl:mb-2 2xl:mb-6">
              <h1 className="text-[22px] text-center leading-[28px] md:text-[30px] md:leading-[50px] font-[600] lg:header2 leading-[35px] lg:text-left lg:text-[40px] xl:leading-[55px] 2xl:max-w-[90%]">
                Contact us For More Information
              </h1>
              <p className="text-md text-center lg:text-left my-4 lg:mt-4 lg:w-[78%] lg:text-[14px] 2xl:text-[18px] text-link">
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias
                excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          </div>

          <div className="contactInfo flex flex-col items-center gap-6 translate-x-[50%] relative text-link lg:translate-x-[0%] ">
            <div className="bg-[#FFDBC9] w-[70px] h-[70px] relative rounded-md border-2 border-[#F0CCBB]">
              <div className="email flex items-center gap-x-2 bg-white absolute translate-y-[10px] py-[10px] px-[13px] rounded-md z-[90] ml-[13px] ">
                <div className="w-[25px]  ">
                  <EnvelopeIcon />
                </div>
                <p>Properland@mail.com</p>
              </div>
            </div>

            <div className="bg-[#FFDBC9] w-[70px] h-[70px] relative rounded-md border-2 border-[#F0CCBB]">
              <div className="PhoneNumber w-[230px] flex items-center gap-x-2 bg-white absolute translate-y-[10px] py-[10px] px-[13px] rounded-md z-[90] ml-[13px] ">
                <div className="w-[25px]  ">
                  <PhoneIcon />
                </div>
                <p className="w-[fit]">+7016-5060-1920</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="location flex flex-col items-center text-center lg:items-start ">
              <h1 className="text-[20px] leading-[28px] md:text-[40px] md:leading-[50px] font-[600] w-[100%] lg:header2 leading-[35px] lg:text-left xl:text-[30px] xl:leading-[55px] ">
                Locations
              </h1>
              <p className="text-md lg:text-left my-4 lg:mt-2 lg:w-[78%] lg:text-[14px] 2xl:text-[18px] text-link">
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias
                excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>

            <div className="offices flex flex-col items-center gap-y-16 relative text-link text-primary lg:flex-row lg:gap-6 ">
              <div className="bg-[#FFDBC9] w-[250px] h-[110px] relative rounded-md border-2 border-[#F0CCBB] lg:h-[120px]">
                <div className="london flex flex-col items-center gap-x-2 w-[220px] text-center bg-white absolute translate-y-[12px] py-[20px] px-[13px] rounded-md z-[90] ml-[13px] lg:py-[20px] ">
                  <h1 className="text-[15px] leading-[28px] md:text-[40px] md:leading-[50px] font-[600] w-[100%] lg:header2 xl:text-[18px]">
                    London
                  </h1>
                  <p>3803 Marquette Pl #5S San Diego, 92106</p>
                </div>
              </div>
              <div className="bg-[#FFDBC9] w-[250px] h-[110px] relative rounded-md border-2 border-[#F0CCBB] lg:h-[120px]">
                <div className="london flex flex-col items-center gap-x-2 w-[220px] text-center bg-white absolute translate-y-[12px] py-[20px] px-[13px] rounded-md z-[90] ml-[13px] lg:py-[20px] ">
                  <h1 className="text-[15px] leading-[28px] md:text-[40px] md:leading-[50px] font-[600] w-[100%] lg:header2 xl:text-[18px]">
                    Los Angeles
                  </h1>
                  <p>1000 S Westgate Ave. Los Angeles, 90049</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right_wrapper flex-[0.8] z-50">
          <div className="form mt-16 lg:mt-0 ">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBody;
