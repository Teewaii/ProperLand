import React, { useEffect } from "react";
import AgentsPageHeader from "../AgentsPageHeader";
import AboutUs from "../AboutUs";
import Team from "../Team";

function OurAgents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="Team ">
      <AgentsPageHeader />
      <div className="py-[50px] lg:py-[50px] 2xl:py-[100px]">
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
