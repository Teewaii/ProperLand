import React, { useEffect } from "react";
import PropertyDeals from "../PropertyDeals";
import DetailsHeader from "../DetailsHeader";
import DetailsBody from "../DetailsBody";
import PropertyGallery from "../PropertyGallery";
import AboutPropertyHeader from "../AboutPropertyHeader";

function PropertyDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-screen">
      <AboutPropertyHeader />
      <DetailsHeader />
      <DetailsBody />
      {/* <PropertyGallery /> */}
      <PropertyDeals />
    </div>
  );
}

export default PropertyDetail;
