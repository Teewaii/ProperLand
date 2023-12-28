import React from "react";

import AgentsPageHeader from "../AgentsPageHeader";
import AboutUs from "../AboutUs";
import Team from "../Team";

function OurAgents() {
  return (
    <section className="  ">
      <AgentsPageHeader />
      <div className="py-[50px] xl:py-[100px]">
        <div className="header flex flex-col items-center ">
          <h1 className="text-[24px] font-bold leading-[30px] md:text-[35px] md:leading-[50px] mt-12">
            Our Property Team
          </h1>
        </div>
        <Team slicer={8} />
      </div>

      <AboutUs />
    </section>
  );
}

export default OurAgents;
