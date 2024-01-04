import React from "react";
import { motion } from "framer-motion";

function Statistics() {
  return (
    <section className="statistics py-[80px]">
      {/* <div className="wrapper container flex flex-col gap-y-6 lg:flex-row lg:justify-between lg:w-[70%]"> */}
      <div className="wrapper container flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-y-6 lg:flex lg:flex-row lg:gap-y-6 lg:justify-between lg:w-[90%] 2xl:w-[70%]">
        <motion.div
          className="property_sales text-center"
          initial={{ x: -50, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[45px] font-bold">56,180</h1>
          <p className="text-link">In property sales</p>
        </motion.div>
        <motion.div
          className="customer_satisfaction text-center"
          initial={{ y: -50, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[45px] font-bold">99%</h1>
          <p className="text-link">Customer satisfaction</p>
        </motion.div>
        <motion.div
          className="Property_transaction text-center"
          initial={{ y: 50, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[45px] font-bold">25K+</h1>
          <p className="text-link">Property Transaction</p>
        </motion.div>
        <motion.div
          className="Price_Reduce text-center"
          initial={{ x: 50, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[45px] font-bold">2,918</h1>
          <p className="text-link">Price Reduce</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Statistics;
