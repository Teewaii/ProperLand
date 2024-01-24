import React from "react";
import { Link } from "react-router-dom";

function Contact_btn() {
  return (
    <Link to="/contact-us">
      <div className="bg-primary text-white rounded-md py-[16px] px-[40px] cursor-pointer hover:bg-prim_hover transition-colors ease-in-out delay-300 hover:text-secondary ">
        Contact
      </div>
    </Link>
  );
}

export default Contact_btn;
