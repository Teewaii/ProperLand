import { React, useContext } from "react";
import ContactBtn from "../Utilities/Contact_btn";
import { Link } from "react-router-dom";
import mobile_logo from "../img/IconLogo.svg";
import MainLogo from "../img/MainLogo.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AppContext } from "../App";

function Navigation() {
  const navs_url = {
    Home: "/",
    "About Us": "/about-us",
    Properties: "/all-properties",
    "Our Agents": "/agents",
    Blogs: "#",
    "Contact us": "/contact-us",
  };

  const { toggle, handleToggle } = useContext(AppContext);
  return (
    <nav className="absolute right-0 left-0 z-50 container">
      {/* Small screen navigation */}
      <div className=" h-[70px] mobile_view px-6 xl:hidden flex justify-between items-center relative mt-8 rounded-[5px] bg-white md:h-[80px]">
        <div className="logo ">
          <Link to="/">
            <img
              className="w-[50px]  md:w-[74px] cursor-pointer"
              src={mobile_logo}
              alt=""
            />
          </Link>
        </div>

        <ul
          className={
            toggle
              ? "flex flex-col gap-y-4 text-white absolute top-24 left-[0%] bg-primary w-[100%] container p-6 opacity-100 transition-all duration-500 ease-in-out lg:p-10 lg:gap-y-8"
              : "absolute top-20 w-[1%] left-[150%] bg-primary transition-all duration-200 ease-in-out opacity-0 "
          }
        >
          {/* {navs.map((nav, index) => ( */}
          {Object.entries(navs_url).map(([key, value]) => (
            <li
              onClick={handleToggle}
              key={key}
              className="text-[20px] hover:text-secondary pb-2 last:border-b-0 border-b border-[#59587a] border-blue-20 md:pb-6 md:text-[25px]"
            >
              <Link to={value}>{key}</Link>
            </li>
          ))}
          {/* <ContactBtn /> */}
        </ul>
        <div className="hamb">
          {!toggle ? (
            <Bars3Icon onClick={handleToggle} className="w-9 md:w-12" />
          ) : (
            <XMarkIcon onClick={handleToggle} className="w-9 md:w-12" />
          )}
        </div>
      </div>

      {/* Large screen navigation */}

      <div className="large_screen px-6 hidden xl:flex justify-between items-center mt-8 2xl:mt-12 rounded-[5px] h-[100px] bg-white">
        <div className="logo ">
          <Link to="/">
            <img
              className="w-[60%] cursor-pointer 2xl:w-[70%"
              src={MainLogo}
              alt=""
            />
          </Link>
        </div>
        <ul className="flex gap-x-6 text-content last:hidden 2xl:gap-x-12">
          {Object.entries(navs_url)
            .slice(0, -1)
            .map(([key, value]) => (
              <li
                key={key}
                className="hover:text-primary capitalize xl:text-[20px] "
              >
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
