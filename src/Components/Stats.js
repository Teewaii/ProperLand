import React from "react";
import Statistics from "../Components/Statistics";

function Stats() {
  return (
    <div className="stats bg-secondary">
      <Statistics />
      <style>
        {`
      .stats p {
        color: white;
      }
    `}
      </style>
    </div>
  );
}

export default Stats;
