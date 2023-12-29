import React from "react";
import Articles from "./Articles";
import fb from "../img/Home/fb.svg";
import insta from "../img/Home/isnta.svg";
import twitter from "../img/Home/twit.svg";
import linkdn from "../img/Home/lind.svg";
import youtube from "../img/Home/youtube.svg";

function Publisher() {
  return (
    <div className="bg-secondary w-[100%] py-14 my-12  ">
      {Articles.slice(0, 1).map(({ passPort, id }) => (
        <div
          id={1}
          className="publisher flex flex-col items-center md:gap-x-8 md:flex-row md:justify-between lg:my-4 lg:gap-x-4 lg:max-w-[68%] 2xl:max-w-[60%] container "
        >
          <img
            src={passPort}
            className="w-[140px] h-[160px]  "
            alt="publisher"
          />
          <div>
            <div className="flex flex-col items-center md:items-start lg:flex-row lg:justify-between lg:w-[75%] ">
              <div className="publisherInfo text-center md:text-left mt-4 md:mt-0">
                <p className="font-bold">Deborah Roderick</p>
                <small className="text-white">Vloger</small>
              </div>
              <div className="socials flex items-center my-7  md:my-4  gap-x-4 lg:items-center lg:gap-4 lg:mt-5">
                <img className="w-[18px]" src={insta} alt="instagram" />
                <img className="w-[18px]" src={fb} alt="instagram" />
                <img className="w-[18px]" src={twitter} alt="instagram" />
                <img className="w-[18px]" src={linkdn} alt="instagram" />
                <img className="w-[18px]" src={youtube} alt="instagram" />
              </div>
            </div>
            <p className="text-center md:text-left lg:mt-6 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Publisher;
