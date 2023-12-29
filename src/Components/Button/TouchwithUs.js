import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function TouchwithUs() {
  return (
    <Link to="/contact">
      <div className="TouchWithUs font-[600] text-sm xl:text-md bg-white flex items-center gap-x-2 w-fit px-4 py-3 group rounded-md hover:bg-secondary cursor-pointer transition-all ease-in-out 300 xl:px-6 xl:py-5">
        Touch with Us
        <ArrowSmallRightIcon className=" w-4 bg-secondary rounded-full p-[0.5] text-white group-hover:bg-primary transition-all ease-in-out 300 " />
      </div>
    </Link>
  );
}

export default TouchwithUs;
