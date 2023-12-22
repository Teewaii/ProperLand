import React from "react";
import gallery1 from "../img/g1.png";
import gallery2 from "../img/g2.png";
import gallery3 from "../img/g3.png";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function PropertyGallery() {
  return (
    <div className="wrapper bg-[#F9F9F9] py-[120px] mt-16 ">
      <div className="container flex flex-col items-start">
        <h1 className="text-[24px] mb-[30px] font-bold md:text-[35px] leading-[40px] my-4 md:max-w-[500px]">
          Property gallery
        </h1>
        <div className="flex flex-col gap-y-4 items-center lg:flex-row lg:gap-x-6 relative">
          <div className="lg:bg-black">
            <img className="lg:opacity-[45%]" src={gallery1} alt="gallery1" />
          </div>
          <div className="lg:bg-black lg:w-[55%]">
            <img className="lg:opacity-[100%] " src={gallery2} alt="gallery2" />
          </div>
          <div className="lg:bg-black">
            <img className="lg:opacity-[45%]" src={gallery1} alt="gallery3" />
          </div>
          <div className="caret flex justify-between absolute left-0 right-0 ">
            <ChevronLeftIcon className="h-10 w-8 cursor-pointer text-secondary" />
            <ChevronRightIcon className="h-10 w-8 cursor-pointer text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyGallery;
