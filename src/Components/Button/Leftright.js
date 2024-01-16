import React from "react";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

function Leftright({ left, right }) {
  return (
    <div className="ScrollLeftRight hidden lg:flex items-center gap-4">
      {/* left scroll button */}
      <div
        onClick={left}
        className="left bg-white text-secondary p-2 cursor-pointer rounded-full w-[40px] hover:bg-primary hover:text-secondary transition-all ease-in-out 3000"
      >
        <ArrowSmallLeftIcon />
      </div>

      {/* right scroll button */}
      <div
        onClick={right}
        className="right bg-secondary p-2 cursor-pointer rounded-full w-[40px] hover:bg-primary hover:text-secondary transition-all ease-in-out 3000 "
      >
        <ArrowSmallRightIcon />
      </div>
    </div>
  );
}

export default Leftright;
