import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

function Explore_btn() {
  return (
    <div className="font-[600] text-sm relative bg-white flex items-center gap-x-2 w-fit p-4 group rounded-md hover:bg-secondary cursor-pointer transition-all ease-in-out duration-300 md:py-6 md:px-8 md:text-lg xl:text-md xl:px-6 xl:py-5 2xl:px-8 2xl:py-6">
      Explore Property
      <ArrowSmallRightIcon className="w-4 bg-secondary rounded-full p-[0.5] text-white group-hover:bg-primary transition-all ease-in-out 300 " />
    </div>
  );
}

export default Explore_btn;
