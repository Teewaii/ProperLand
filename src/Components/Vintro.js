import React from "react";
import mission_icon from "../img/About/mission_icon.svg";
import vision_icon from "../img/About/vision_icon.svg";
import vintro_mob from "../img/About/vintro_img_mob.png";
import vintro_desktop from "../img/About/vintro_img.png";

function Vintro() {
  return (
    <section className="bg-vintro bg-cover bg-left bg-no-repeat to-hero_end">
      <div className="main flex flex-col min-h-100vh py-[60px] container xl:py-[95px] xl:flex-row xl:items-center xl:gap-x-8">
        <div className="left_section h-100% flex-[0.7]">
          <img
            className="w-100% mb-[30px] lg:hidden"
            src={vintro_mob}
            alt="property_image"
          />
          <img
            className="h-50% mb-[30px] hidden xl:flex"
            src={vintro_desktop}
            alt="property_image"
          />
        </div>

        <div className="right_section flex flex-col items-center pb-[20px] flex-1 xl:items-start ">
          <p className="text-sm uppercase tracking-[4px] md:tracking-[6px] lg:text-md 2xl:text-lg">
            |<span className="text-secondary">01</span> vintor video|
          </p>
          <h1 className="text-[24px] font-bold md:text-[35px] text-center leading-[40px] my-4 md:max-w-[500px] xl:text-left">
            Properties for sale in your favorite area
          </h1>
          <p className="text-center text-link mb-4 md:text-[15px] xl:text-left">
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi.
          </p>
          <div className="mission_vision w-90vw flex flex-col gap-y-4 bg-white px-[45px] py-[40px] mt-4 shadow-sm">
            {/* Vision section */}
            <div className="vision flex flex-col items-center xl:flex-row xl:gap-x-8">
              <img
                className="w-[46px] mb-4"
                src={vision_icon}
                alt="our mission icon"
              />
              <div className="description">
                <h1 className=" font-bold mb-2">Our Vision</h1>
                <p className="text-center text-[12px] text-black mb-4 xl:text-[13px] xl:text-left">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti quos dolores et quas molestias excepturi.
                </p>
              </div>
            </div>
            {/* Mission section */}
            <div className="mission flex flex-col items-center xl:flex-row xl:gap-x-8 ">
              <img
                className="w-[55px] mb-4"
                src={mission_icon}
                alt="our mission icon"
              />
              <div className="description">
                <h1 className=" font-bold mb-2">Our Mission</h1>
                <p className="text-center text-[12px] text-black mb-4 xl:text-[13px] xl:text-left">
                  Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti quos dolores et quas molestias excepturi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vintro;
