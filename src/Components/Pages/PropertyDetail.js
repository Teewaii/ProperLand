import React from "react";

import AboutUsHeader from "../AboutUsHeader";
import PropertyDeals from "../PropertyDeals";
import DetailsHeader from "../DetailsHeader";
import DetailsBody from "../DetailsBody";
import PropertyGallery from "../PropertyGallery";

function PropertyDetail() {
  return (
    <div className="">
      <AboutUsHeader />
      <DetailsHeader />
      <DetailsBody />
      <PropertyGallery />
      <PropertyDeals />
    </div>
  );
}

export default PropertyDetail;
