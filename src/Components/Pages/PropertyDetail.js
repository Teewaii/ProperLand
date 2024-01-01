import React, { useEffect } from "react";

import AboutUsHeader from "../AboutUsHeader";
import PropertyDeals from "../PropertyDeals";
import DetailsHeader from "../DetailsHeader";
import DetailsBody from "../DetailsBody";
import PropertyGallery from "../PropertyGallery";

function PropertyDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <AboutUsHeader
        intro="About the property"
        heading="Property Description"
      />
      <DetailsHeader />
      <DetailsBody />
      <PropertyGallery />
      <PropertyDeals />
    </div>
  );
}

export default PropertyDetail;
