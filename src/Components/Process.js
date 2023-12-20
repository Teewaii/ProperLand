import React from "react";

function Process() {
  return (
    <section className="main_focus h-[fit] py-[110px] lg:py-[140px] ">
      <div className="wrapper  flex flex-col items-center container">
        <div className="header flex flex-col items-center">
          <p className="text-sm uppercase tracking-[4px] md:tracking-[6px] lg:text-md 2xl:text-lg">
            |<span className="text-secondary ">02</span> process|
          </p>
          <h1 className="text-[24px] font-bold leading-[30px] md:text-[35px] md:leading-[50px] my-4 md:max-w-[550px]  mt-12">
            Our Main Focus
          </h1>
        </div>

        <div className="packages flex flex-col gap-y-8 lg:gap-x-8 lg:flex-row ">
          <div className="planning rounded-md bg-planning_img bg-cover bg-no-repeat h-[300px] px-8 flex flex-col justify-center items-start gap-y-4">
            <div className="rounded-full p-10 w-12 h-12 bg-secondary flex items-center justify-center">
              <h1 className=" text-[40px] font-bold  text-white">01</h1>
            </div>
            <h1 className="text-lg text-left md:text-2xl font-bold lg:text-[22px]">
              Planning stage
            </h1>
            <p className="text-left text-link text-md md:text-lg lg:text-sm ">
              High level overviews. approaches lverall value proposition.
              Organically grow the holistic world view of disruptive.
            </p>
          </div>

          <div className="planning rounded-md bg-dev_img bg-cover bg-no-repeat h-[300px] px-8 flex flex-col justify-center items-start gap-y-4">
            <div className="rounded-full p-10 w-12 h-12 bg-secondary flex items-center justify-center">
              <h1 className=" text-[40px] font-bold  text-white">02</h1>
            </div>
            <h1 className="text-lg text-left md:text-2xl font-bold lg:text-[22px]">
              Development
            </h1>
            <p className="text-left text-link text-md md:text-lg lg:text-sm ">
              High level overviews. approaches lverall value proposition.
              Organically grow the holistic world view of disruptive.
            </p>
          </div>

          <div className="planning rounded-md bg-newWay_img bg-cover bg-no-repeat h-[300px] px-8 flex flex-col justify-center items-start gap-y-4">
            <div className="rounded-full p-10 w-12 h-12 bg-secondary flex items-center justify-center">
              <h1 className=" text-[40px] font-bold  text-white">03</h1>
            </div>
            <h1 className="text-lg text-left md:text-2xl font-bold lg:text-[22px]">
              New way of living
            </h1>
            <p className="text-left text-link text-md md:text-lg lg:text-sm ">
              High level overviews. approaches lverall value proposition.
              Organically grow the holistic world view of disruptive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
