import React from "react";
import anne from "../img/Home/Nan.jpg";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

function Agent() {
  return (
    <div className="AgentWrapper mt-8 flex flex-col bg-[#F5F1EF] rounded-sm p-8 border-2 border-[#DAC5BB] lg:mt-0">
      <div className="agent_info border-[#DAC5BB]">
        <h1 className="font-bold text-[28px] mb-4 xl:text-[20px]">Agent</h1>
        <p className="text-left text-[15px] md:text-md">
          A perfect property finder and seller with great knowledge in the real
          estate field. Talented in searching for a property with in the
          customer's needed areas.
        </p>
        <div className="flex items-center gap-x-4 my-6">
          <img className="w-[100px] rounded-md" src={anne} alt="headShot" />
          <div>
            <h1 className="font-bold">Anne Hathaway</h1>
            <p className="text-secondary text-xsm">Land Seller</p>
          </div>
        </div>

        <div className="bg-white flex flex-col gap-y-4 w-[fit] rounded-sm p-4">
          <div className="phone flex items-start gap-2">
            <PhoneIcon className="w-4 text-secondary" />
            <small>123 456 7890</small>
          </div>

          <div className="mail flex items-start gap-2">
            <EnvelopeIcon className="w-4 text-secondary" />
            <small>support@example.com</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agent;
