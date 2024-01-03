import React, { useContext } from "react";
import { AppContext } from "../App";

function OverLay() {
  const { setToggle, toggle } = useContext(AppContext);
  return (
    <>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="absolute bg-black left-0 right-0 top-0 bottom-0 opacity-80 transition-all duration-400 ease-in-out z-40 "
        ></div>
      )}
    </>
  );
}

export default OverLay;
