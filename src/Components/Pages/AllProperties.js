import React from "react";
import AboutUsHeader from "../AboutUsHeader";
import img from "../../img/Home/allProperty.png";

function AllProperties() {
  return (
    <div>
      <AboutUsHeader
        intro="About the property"
        heading="Property Description"
        img={img}
      />
    </div>
  );
}

export default AllProperties;
