import React from "react";
import gallery1 from "../img/g1.png";
import gallery2 from "../img/g2.png";
import gallery3 from "../img/g3.png";

function PropertyGallery() {
  return (
    <div className="wrapper bg-[#F9F9F9] py-[120px] overflow-hidden mt-16 ">
      <div className="container flex flex-col items-start">
        <h1 className="text-[24px] mb-[30px] font-bold md:text-[35px] leading-[40px] my-4 md:max-w-[500px]">
          Property gallery
        </h1>
        <div className="flex flex-col gap-y-4 items-center lg:flex-row lg:gap-x-6 items-center">
          <img className="w-[100%] lg:w-1/3" src={gallery1} alt="gallery1" />
          <img className="w-[100%] lg:w-1/3" src={gallery2} alt="gallery2" />
          <img className="w-[100%] lg:w-1/3" src={gallery1} alt="gallery3" />
        </div>
      </div>
    </div>
  );
}

export default PropertyGallery;
