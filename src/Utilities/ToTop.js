import React, { useState } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import ScrollToTop from "react-scroll-to-top";

function ToTop() {
  return (
    <div className="absolute cursor-pointer">
      <ScrollToTop
        style={{
          background: "#FFBB50",
          color: "#3B3A5D",
          right: "20px",
          bottom: "20px",
          padding: "5px",
          width: "45px",
          height: "45px",
        }}
        smooth
        component={<ArrowSmallUpIcon />}
      />
    </div>
  );
}

export default ToTop;
