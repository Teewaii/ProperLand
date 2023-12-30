import { React, useContext } from "react";
import ContactBtn from "../Components/Button/Contact_btn";
import { Link } from "react-router-dom";
import mobile_logo from "../img/IconLogo.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AppContext } from "../App";

function Navigation() {
  const navs_url = {
    Home: "/",
    "About Us": "/about",
    "Our Agents": "/agents",
    Blogs: "/blogs",
  };

  const { toggle, handleToggle } = useContext(AppContext);
  return (
    <nav className="absolute right-0 left-0 z-50 container">
      {/* Small screen navigation */}
      <div className="mobile_view container lg:hidden flex justify-between items-center relative mt-8 rounded-[5px] h-[70px] bg-white">
        <div className="logo ">
          <Link to="/">
            <img className="w-[50px] cursor-pointer" src={mobile_logo} alt="" />
          </Link>
        </div>

        <ul
          className={
            toggle
              ? "flex flex-col gap-y-4 text-white absolute top-24 left-0 bg-primary w-[100%] container p-8 opacity-100 transition-all duration-500 ease-in-out"
              : "absolute top-20 w-[100%] left-0 bg-primary transition-all duration-500 ease-in-out opacity-0 "
          }
        >
          {/* {navs.map((nav, index) => ( */}
          {Object.entries(navs_url).map(([key, value]) => (
            <li
              onClick={handleToggle}
              key={key}
              className="text-[18px] hover:text-secondary pb-2 last:border-b-0 border-b border-[#59587a] border-blue-20 "
            >
              <Link to={value}>{key}</Link>
            </li>
          ))}
        </ul>
        <div className="hamb">
          {!toggle ? (
            <Bars3Icon onClick={handleToggle} className="w-9" />
          ) : (
            <XMarkIcon onClick={handleToggle} className="w-9" />
          )}
        </div>
        {/* < Contact_btn /> */}
      </div>

      {/* Large screen navigation */}

      <div className="large_screen px-6 hidden lg:flex justify-between items-center mt-8  2xl:mt-12 rounded-[5px] h-[100px] bg-white">
        <div className="logo ">
          <Link to="/">
            <img className="w-[50px] cursor-pointer" src={mobile_logo} alt="" />
          </Link>
        </div>
        <ul className="flex gap-x-12 text-content">
          {Object.entries(navs_url).map(([key, value]) => (
            <li key={key} className="hover:text-primary capitalize ">
              <Link to={value}>{key}</Link>
            </li>
          ))}
        </ul>
        <ContactBtn />
      </div>
    </nav>
  );
}

export default Navigation;
