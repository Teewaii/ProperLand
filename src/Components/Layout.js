import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ToTop from "./Button/ToTop";
import OverLay from "./OverLay";

function Layout(props, { handleToggle, toggle, setToggle }) {
  return (
    <div className="wrapper relative  ">
      <div className={props.class}>
        <Navigation />
        {props.children}
        <Footer />
        <ToTop />
        <OverLay />
      </div>
    </div>
  );
}

export default Layout;
