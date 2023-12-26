import React from "react";

import AgentsCard from "../AgentsCard";
import AgentsPageHeader from "../AgentsPageHeader";
import Agent from "../Agent";
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
