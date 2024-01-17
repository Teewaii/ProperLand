import React, { useContext } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

function TouchwithUs() {
  const { toTop } = useContext(AppContext);
  return (
    <Link to="/contact" onClick={toTop}>
      <div className="TouchWithUs font-[600] text-sm xl:text-md bg-white flex items-center gap-x-2 w-fit px-4 py-3 group rounded-md hover:bg-secondary cursor-pointer transition-all ease-in-out 300 2xl:px-8 2xl:py-4">
        Touch with Us
        <ArrowSmallRightIcon className=" w-4 bg-secondary rounded-full p-[0.5] text-white group-hover:bg-primary transition-all ease-in-out 300 " />
      </div>
    </Link>
  );
}

export default TouchwithUs;
