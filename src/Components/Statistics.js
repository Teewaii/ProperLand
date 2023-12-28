import React from "react";

function Statistics() {
  return (
    <section className="statistics py-[80px]">
      {/* <div className="wrapper container flex flex-col gap-y-6 lg:flex-row lg:justify-between lg:w-[70%]"> */}
      <div className="wrapper container flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-y-6 lg:flex lg:flex-row lg:gap-y-6 lg:justify-between lg:w-[90%] 2xl:w-[70%]">
        <div className="property_sales text-center">
          <h1 className="text-[45px] font-bold">56,180</h1>
          <p className="text-link">In property sales</p>
        </div>
        <div className="customer_satisfaction text-center">
          <h1 className="text-[45px] font-bold">99%</h1>
          <p className="text-link">Customer satisfaction</p>
        </div>
        <div className="Property_transaction text-center">
          <h1 className="text-[45px] font-bold">25K+</h1>
          <p className="text-link">Property Transaction</p>
        </div>
        <div className="Price_Reduce text-center">
          <h1 className="text-[45px] font-bold">2,918</h1>
          <p className="text-link">Price Reduce</p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
