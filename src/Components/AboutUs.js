import React from "react";
import LearnMore from "./Button/LearnMore";

function AboutUs() {
  return (
    <section className="about bg-[#F2F1EF] h-[fit] py-[84px] lg:bg-about lg:bg-cover lg:bg-no-repeat lg:bg-top-right 2xl:py-[190px] ">
      <div className="wrapper container">
        <div className="details mb-12 lg:text-left lg:mb-8">
          <p className="text-sm tracking-[4px]  lg:text-md md:tracking-[6px] 2xl:text-lg ">
            |<span className="text-secondary">04</span> ABOUT US|
          </p>
          <h1 className="text-[24px] md:text-[35px] my-4 font-bold lg:max-w-[500px]">
            42+ years of helping you find the right Propertys
          </h1>
          <p className="text-left text-link mb-4 md:text-[15px] lg:max-w-[450px]">
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto <br /> <br />
            Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <LearnMore />
      </div>
    </section>
  );
}

export default AboutUs;
