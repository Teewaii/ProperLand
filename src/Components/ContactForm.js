import React from "react";

function ContactForm() {
  return (
    <div className="rounded-sm p-8 border-2 bg-[#F5F1EF] border-[#DAC5BB] w-[100%]">
      <h1 className="text-[20px] leading-[28px] md:text-[40px] md:leading-[50px] font-[600] w-[100%] lg:header2 leading-[35px] lg:text-left xl:text-[30px] xl:leading-[55px] 2xl:text-[40px] 2xl:leading-[75px]">
        Quick Contact
      </h1>
      <p className="text-md lg:text-left my-4 lg:mb-8 lg:mt-0 lg:my-0 lg:text-[14px] 2xl:text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <form className="flex flex-col gap-y-4" action="#">
        <input
          className="p-4 rounded-md border-[#D7D7D7] border-[1px] focus:outline-slate-300"
          type="text"
          id="fname"
          name="fname"
          placeholder="Name"
        />
        <input
          className="p-4 rounded-md border-[#D7D7D7] border-[1px] focus:outline-slate-300"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="p-4 rounded-md border-[#D7D7D7] border-[1px] focus:outline-slate-300"
          type="number"
          id="fname"
          name="fname"
          placeholder="Phone"
        />
        <textarea
          className="p-4 rounded-md border-[#D7D7D7] border-[1px] focus:outline-slate-300"
          id="fname"
          name="fname"
          rows="4"
          cols="20"
          placeholder="Message"
        />
        <input
          className="w-[150px] py-4 rounded-md mt-4 text-lg cursor-pointer hover:bg-[#222140] text-white bg-[#3B3A5E] transition-all ease-in-out duration-300"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default ContactForm;
