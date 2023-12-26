import React, { useState } from "react";
import Team_info from "./Team_info";
import fb from "../img/Home/fb.svg";
import insta from "../img/Home/isnta.svg";
import twitter from "../img/Home/twit.svg";

function AgentsCard({ slicer }) {
  //   const [slicer, setSlicer] = useState(4);

  //   function handleSlicer() {
  //     setSlicer(8);
  //   }

  return (
    <div className="wrapper container my-[100px]">
      <div className="team mt-5 flex flex-col gap-y-48 gap-x-0 items-center h-100vh md:flex-row lg:items-center lg:gap-y-0 lg:gap-x-6 cursor-pointer">
        {Team_info.slice(0, `${slicer}`).map(({ name, pix, role, id }) => (
          <div key={id} className="rounded-md mb-8 h-[fit] group">
            <img className="w-[100%]" src={pix} alt="teampix" />
            <div className="info px-4 py-4 bg-[#F6F6F6] group-hover:bg-secondary transition-all duration-300  ease-in-out">
              <h1 className="text-primary text-[18px] font-bold ">{name}</h1>
              <div className="bottom flex items-center justify-between mt-2">
                <p className="text-secondary text-[14px] group-hover:text-white transition-all duration-300  ease-in-out">
                  {role}
                </p>

                <div className="socials flex items-center gap-2">
                  <img className="w-[18px]" src={fb} alt="facebook icon" />
                  <img className="w-[18px]" src={twitter} alt="twitter icon" />
                  <img className="w-[18px]" src={insta} alt="instagram" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentsCard;
