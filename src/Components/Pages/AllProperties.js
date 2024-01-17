import React from "react";
import AboutUsHeader from "../AboutUsHeader";
import img from "../../img/Home/allProperty.png";
import Featured from "../Featured";
import Neighbourhoods from "../Neighbourhoods";

function AllProperties() {
  return (
    <div>
      <AboutUsHeader intro="properties" heading="Browse properties" img={img} />
      <Featured />
      <Neighbourhoods />
    </div>
  );
}

export default AllProperties;
