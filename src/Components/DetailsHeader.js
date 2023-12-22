import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import bed from "../../src/img/Home/bed.svg";
import bath from "../../src/img/Home/bath.svg";
import Carparking from "../../src/img/Home/parking.svg";
import size from "../../src/img/Home/area.svg";
import ForSale_btn from "./Button/ForSale_btn";

function DetailsHeader() {
  return (
    <section className="header container ">
      <div className="wrapper flex flex-col gap-4 h-[fit] py-[110px] lg:flex-row lg:py-[70px] border-b-[2.5px]">
        <div className="left_column flex flex-col items-start gap-y-4 flex-1">
          <div className="location flex items-center text-[#8E8E8E] ">
            <MapPinIcon className="h-[20px] text-secondary md:h-[25px]" />
            <p className="text-left text-[15px] md:text-md">
              709 West Drive Chicago, IL 60606
            </p>
          </div>
          <h1 className="font-bold text-[28px]  2xl:text-[33px]">
            Modern Loft in Land River
          </h1>
          <p className="text-left text-[15px] max-w-[530px] md:text-md">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
            Dramatically .
          </p>

          {/* <div className="desc flex flex-col items-start mt-[32px]">
          <h1 className="font-bold text-[18px] text-left md:text-[22px] xl:text-[28px]">
            $3500/Mo
          </h1>
          <p className="text-left text-[15px] md:text-md">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
            Dramatically .
          </p>
        </div> */}
        </div>
        <div className="rightColumn flex flex-col items-start ">
          <h1 className="font-bold text-[18px]  text-secondary text-left md:text-[22px] xl:text-[28px]">
            $3500/Mo
          </h1>
          <div className="features flex flex-row flex-wrap gap-[11px] 2xl:gap-x-[20px] mt-[24px]">
            <div className="beds text-[10px] flex items-center w-fit gap-x-2 px-2 py-3 border-[1px] rounded-md border-slate-400">
              <img src={bed} className="max-w-[18px]" alt="number of bed" />
              <p className="text-[12px] text-[#8E8E8E]">
                | <span>4</span> Beds
              </p>
            </div>
            <div className="baths flex items-center w-fit gap-x-2 px-2 py-3 border-[1px] rounded-md border-slate-400">
              <img src={bath} className="max-w-[18px]" alt="number of baths" />
              <p className="text-[12px] text-[#8E8E8E]">
                | <span>1</span> Baths
              </p>
            </div>
            <div className="parking flex items-center w-fit gap-x-2 px-2 py-3 border-[1px] rounded-md border-slate-400">
              <img
                src={Carparking}
                className="max-w-[18px]"
                alt="parking space"
              />
              <p className="text-[12px] text-[#8E8E8E]">
                | <span>2</span> Parking
              </p>
            </div>
            <div className="area flex items-center w-fit gap-x-2 px-2 py-3 border-[1px] rounded-md border-slate-400">
              <img src={size} className="max-w-[18px]" alt="size" />
              <p className="text-[12px]  text-[#8E8E8E]">
                | <span>2</span>sqft
              </p>
            </div>
          </div>
          <div>
            <ForSale_btn />
            <style>
              {`.sale_btn{
                background-color: #3B3A5D;
                color:white
                
            }`}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsHeader;
