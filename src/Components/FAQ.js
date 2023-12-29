import React, { useState } from "react";
import hux_icon from "../img/Home/Vectorhux.png";
import left_pattern from "../img/FAQ/FAQ_Pattern_Left.png";
import right_pattern from "../img/FAQ/FAQ_Pattern_Right.png";
import { PlusIcon } from "@heroicons/react/24/solid";
import faqs from "../Components/FAQS";

function FAQ() {
  const [open, setOpen] = useState(false);

  function FaqToggle(index) {
    setOpen((open) => !open);
  }
  return (
    <section className="flex flex-col items-center h-fit py-8 ">
      <div className="main_wrapper">
        {/* <div className="leftPattern absolute left-0 bottom-0">
          <img src={left_pattern} alt="left_pattern_image" />
        </div>
        <div className="rightPattern absolute top-0 lg:bottom-0 md:right-[-380px] lg:right-[-80px] ">
          <img src={right_pattern} alt="right_pattern_image" />
        </div> */}
        <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
          <img src={hux_icon} alt="" />
          <p className="text-link text-sm tracking-[6px] uppercase">ANSWERS</p>
        </div>
      </div>
      <h1 className="text-[20px] md:text-[30px] md:leading-[50px] font-[600] md:max-w-[405px] lg:header2 leading-[35px] lg:text-left xl:text-[40px] xl:max-w-[600px] xl:leading-[55px]">
        Frequently Asked Questions
      </h1>
      <div className="faqs container max-w-[65%] mt-12 mb-16 ">
        {faqs.map(({ id, title, body }, index) => (
          <div key={id} className="faq pb-8  overflow-hidden ">
            <div className="head flex items-center justify-between pb-4 border-b ">
              <h1 className="text-[18px] font-bold ">{title}</h1>

              <div
                onClick={() => FaqToggle(index)}
                // onClick={FaqToggle(index)}
                className="showIcon w-10 text-[50px] bg-secondary rounded-full p-2 cursor-pointer "
                style={{
                  transform: `rotate(${!open ? 180 : 45}deg)`,
                  transition: "all 0.25s",
                }}
              >
                <PlusIcon />
              </div>
            </div>
            {open && <p className="pt-6 ">{body}</p>}

            {/* <div className=" absolute left-0 right-0 bottom-[-15px] border-b border-red-600 "></div> */}
          </div>
        ))}
        {/* <div className=" border-b"></div> */}
      </div>
    </section>
  );
}

export default FAQ;
