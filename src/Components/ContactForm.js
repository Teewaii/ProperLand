import React from "react";

function ContactForm() {
  return (
    <div className="rounded-sm p-8 border-2 bg-[#F5F1EF] border-[#DAC5BB] w-[100%]">
      <form className="flex flex-col gap-y-4" action="#">
        <input
          className="p-4 rounded-md border-[#D7D7D7] border-[1px]"
          type="text"
          id="fname"
          name="fname"
          placeholder="Name"
        />
        <input
          className="p-4 rounded-md border-[#D7D7D7] border-[1px]"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="p-4 rounded-md border-[#D7D7D7] border-[1px]"
          type="number"
          id="fname"
          name="fname"
          placeholder="Phone"
        />
        <textarea
          className="p-4 rounded-md border-[#D7D7D7] border-[1px]"
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
