import React, { useContext } from "react";
import ForsaleCard from "./ForsaleCard";
import Features from "./Features";
import TouchwithUs from "./Button/TouchwithUs";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function PropertyDeals() {
  const { toTop } = useContext(AppContext);
  return (
    <section className="featured bg-feat_img bg-no-repeat bg-bottom h-fit lg:mt-[40px] py-[110px]">
      <div className="wrapper flex flex-col items-start container">
        <div className="header pb-[20px]">
          <h1 className="text-[24px] font-bold   md:text-[35px] leading-[40px] my-4 md:max-w-[500px]">
            Best Property Deals
          </h1>
        </div>
        <div className=" flex flex-col items-center">
          <div className="cardHolder grid grid-col-1 mb-[70px] lg:mb-[100px] lg:grid-cols-2 2xl:grid-cols-3 gap-[38px]">
            {Features.map(
              ({
                cost,
                id,
                title,
                location,
                baths,
                beds,
                parking,
                area,
                pix,
                status,
              }) => (
                // status === "For Sale" && (
                <Link to={`/detail/${id}`} onClick={toTop}>
                  <ForsaleCard
                    key={id}
                    id={id}
                    cost={cost}
                    title={title}
                    location={location}
                    beds={beds}
                    baths={baths}
                    parking={parking}
                    area={area}
                    pix={pix}
                    status={status}
                  />
                </Link>
              )
            )}
          </div>

          <TouchwithUs />
        </div>
      </div>
    </section>
  );
}

export default PropertyDeals;
