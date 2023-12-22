import React from "react";
import Agent from "./Agent";
import ContactForm from "./ContactForm";

function DetailsBody() {
  return (
    <section className="header container ">
      <div className="wrapper flex flex-col lg:gap-x-20 lg:flex-row lg:py-[100px] lg:py-[30px] mt-8 h-[fit]">
        <div className="left_column flex flex-col items-start gap-y-4 lg:w-[60%] xl:w-[62%] ">
          <h1 className="font-bold text-[28px] 2xl:text-[28px]">
            About the property
          </h1>
          <p className="text-left text-[15px] text-left lg:text-justify md:text-md">
            Laminate flooring is a more affordable option in place of hardwood
            flooring that can cost almost ten times the cost of laminate
            flooring. Laminate flooring is light, durable and can be made to
            resemble.
            <br /> <br /> Appropriately empower dynamic leadership skills after
            business portals. Globally my cardinate interactive supply chains
            with distinctive <b>quality vectors global sources services.</b>
            Uniquely matrix economically sound value through cooperative
            technology. Competently parallel task fully researched data and
            enterprise process improvements.
          </p>
          <ul className="flex flex-col gap-y-2 py-2 text-[13px] list-disc pl-4">
            <li className="">
              Dynamically target high-payoff intellectual capital for customized
            </li>
            <li className="">
              Interactively procrastinate high-payoff content
            </li>
            <li className="">
              Credibly reinter mediate backend ideas for cross-platform models
            </li>
          </ul>
          <p className="text-left text-[15px] text-left lg:text-justify md:text-md">
            Uniquely matrix economically sound value through cooperative
            technology. Competently parallel task fully researched data and
            enterprise process improvements. Collaboratively expedite quality
            manufactured products via client-focused results quickly communicate
            enabled technology and turnkey leadership skills. Uniquely enable
            accurate supply chains rather than friction technology.
          </p>

          <div className="quote bg-[#3B3A5D] rounded-md w-[fit]  my-4">
            <p className="text-center leading-8 text-white italic p-12 text-[15px] md:text-md">
              “Democracy must be built through open societies that share
              information. When there is information, there is enlightenment.
              When there is no sharing of power, no rule of law, no
              accountability, there is abuse, corruption and indignation.”
            </p>
          </div>
          <div className="buildService">
            <h1 className="font-bold text-[28px] xl:text-[24px]">
              Make real time a build services
            </h1>
            <p className="text-left text-[15px] text-left lg:text-justify md:text-md">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
            <ol className="flex flex-col gap-y-2 py-2 text-[13px] list-decimal pl-4 my-4">
              <li className="">
                Dynamically target high-payoff intellectual capital for
                customized
              </li>
              <li className="">
                Interactively procrastinate high-payoff content
              </li>
              <li className="">
                Credibly reinter backend ideas for cross-platform models
              </li>
              <li className="">
                We provide operational efficiency, data security, and flexible
                scale
              </li>
            </ol>
            <p className="text-left text-[15px] text-left lg:text-justify md:text-md">
              It is a long established fact that a reader will be distracted by
              the readable content page when looking at its layout. The point of
              using Lorem Ipsum is that it more-or-less normal distribution of
              letters, as felt opposed to using 'Content here making it look
              like readable.
            </p>
          </div>
        </div>
        <div className="right_column flex flex-col items-start gap-y-8 flex-1">
          <Agent />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default DetailsBody;
