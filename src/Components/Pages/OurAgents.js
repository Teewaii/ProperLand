import React from "react";

import AgentsPageHeader from "../AgentsPageHeader";
import AboutUs from "../AboutUs";
import Team from "../Team";

function OurAgents() {
  return (
    <section className="  ">
      <AgentsPageHeader />
      <Team slicer={8} />
      <AboutUs />
    </section>
  );
}

export default OurAgents;
