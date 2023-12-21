import React from "react";

import AboutUsHeader from "../AboutUsHeader";
import PropertyDeals from "../PropertyDeals";
import DetailsHeader from "../DetailsHeader";
import DetailsBody from "../DetailsBody";

function PropertyDetail() {
  return (
    <div className="">
      <AboutUsHeader />
      <DetailsHeader />
      <DetailsBody />
      <PropertyDeals />
    </div>
  );
}

export default PropertyDetail;
