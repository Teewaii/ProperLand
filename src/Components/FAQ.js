import React, { useState } from "react";
import hux_icon from "../img/Home/Vectorhux.png";
import FAQ_left_pattern from "../img/FAQ/FAQ_Pattern_Left.png";
import FAQ_right_pattern from "../img/FAQ/FAQ_Pattern_Right.png";
import { PlusIcon } from "@heroicons/react/24/solid";
import faqs from "../Components/FAQS";

function FAQ() {
  const [open, setOpen] = useState(null);

  function FaqToggle(index) {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  }
  return (
    <section className="flex flex-col items-center h-fit py-8 relative ">
      <img
        className=" w-[20%] absolute top-[0%] left-0 lg:w-[10%] 2xl:bottom-[30%] "
        src={FAQ_left_pattern}
        alt="Background pattern"
      />
      <img
        className=" w-[50%] absolute bottom-[0%] right-0 lg:w-[15%] lg:top-[50%] 2xl:top-[30%] "
        src={FAQ_right_pattern}
        alt="Background pattern"
      />

      <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
        <img src={hux_icon} alt="" />
        <p className="text-link text-sm tracking-[6px] uppercase">ANSWERS</p>
      </div>
      {/* </div> */}
      <h1 className="text-[20px] md:text-[30px] md:leading-[50px] font-[600] md:max-w-[405px] lg:header2 leading-[35px] lg:text-left xl:text-[40px] xl:max-w-[600px] xl:leading-[55px] relative z-5">
        Frequently Asked Questions
      </h1>
      <div className="faqs container max-w-[90%] mt-12 mb-16 lg:max-w-[70%] 2xl:max-w-[55%] relative z-8 ">
        {faqs.map(({ id, title, body }, index) => (
          <div key={id} className="faq pb-8 overflow-hidden ">
            <div
              onClick={() => FaqToggle(index)}
              className="head flex items-center justify-between pb-4 border-b cursor-pointer "
            >
              <h1 className="text-[18px] w-[80%] font-bold md:w-[100%] ">
                {title}
              </h1>

              <div
                // onClick={FaqToggle}
                className="showIcon w-10 text-[50px] bg-secondary rounded-full p-2  "
                style={{
                  transform: `rotate(${open === index ? 45 : 180}deg)`,
                  transition: "all ease-in 0.3s",
                }}
              >
                <PlusIcon />
              </div>
            </div>
            {open === index && <p className="pt-6">{body}</p>}

            {/* <div className=" absolute left-0 right-0 bottom-[-15px] border-b border-red-600 "></div> */}
          </div>
        ))}
        {/* <div className=" border-b"></div> */}
      </div>
    </section>
  );
}

export default FAQ;
