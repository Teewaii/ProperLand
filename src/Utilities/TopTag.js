import React from "react";
import hux_icon from "../../src/img/Home/Vectorhux.png";

function TopTag({ content }) {
  return (
    <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 z-[50] ">
      <img src={hux_icon} alt="" />
      <p className="text-link text-sm tracking-[6px] uppercase">{content}</p>
    </div>
  );
}

export default TopTag;
