import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

function SeeArticles() {
  return (
    <div className="font-[600] text-sm xl:text-md bg-white flex items-center gap-x-2 w-fit px-4 py-3 group rounded-md hover:bg-primary hover:text-secondary cursor-pointer transition-all ease-in-out 300 2xl:px-8 2xl:py-4">
      See All Articles
      <ArrowSmallRightIcon className="w-4 bg-primary rounded-full p-[0.5] text-white group-hover:bg-secondary group-hover:text-primary  transition-all ease-in-out 300 " />
    </div>
  );
}

export default SeeArticles;
