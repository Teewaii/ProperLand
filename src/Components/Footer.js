import React from "react";
import logo from "../img/logo.svg";
import Left_blog_pattern from "../../src/img/Home/footer_pattern_left.png";
import Rigft_blog_pattern from "../../src/img/Home/footer_pattern_right.png";
import insta from "../img/Home/isnta.svg";
import fb from "../img/Home/fb.svg";
import twitter from "../img/Home/twit.svg";
import linkdn from "../img/Home/lind.svg";
import youtube from "../img/Home/youtube.svg";
import Subscribe from "./Subscribe";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer h-fit relative overflow-hidden">
      <img
        className="w-[35%] absolute top-[50%] left-0 "
        src={Left_blog_pattern}
        alt="Background pattern"
      />
      <img
        className="w-[15%] absolute bottom-top-[50%] right-0 "
        src={Rigft_blog_pattern}
        alt="Background pattern"
      />

      <div className="wrapper container relative mt-12 lg:mt-0 ">
        <div className="top flex flex-col gap-8 lg:border-b-2 lg:border-opacity-20 border-primary lg:justify-between lg:flex-row lg:items-center 2xl:gap-24 ">
          <div className="topLeft flex flex-col items-center lg:items-start gap-8 lg:pr-[65px] lg:py-[50px] ">
            <div className="logo_socials flex flex-col items-center">
              <img className="w-[200px]" src={logo} alt="Properland logo" />
              <div className="socials flex items-center gap-4 mt-5">
                <img className="w-[18px]" src={insta} alt="instagram" />
                <img className="w-[18px]" src={fb} alt="instagram" />
                <img className="w-[18px]" src={twitter} alt="instagram" />
                <img className="w-[18px]" src={linkdn} alt="instagram" />
                <img className="w-[18px]" src={youtube} alt="instagram" />
              </div>
            </div>
          </div>

          <div className="top_Right text-center lg:text-left lg:border-l-2 lg:py-[50px] lg:pl-[120px] lg:border-opacity-20 lg:border-primary 2xl:pl-[200px]  ">
            <h1 className="text-[25px] font-bold">Get a free estimate</h1>
            <p className="text-link max-w-[580px] mb-8 text-[15px] md:max-w-[100%] lg:text-[14px] 2xl:text-[17px] ">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. approaches lverall value proposition. Organically
              grow the holistic world view of disruptive.
            </p>
            <Subscribe />
          </div>
        </div>
        <div className="bottom flex  flex-row flex-wrap gap-[5px] items-start justify-between relative border-b-2 lg:border-opacity-20 lg:border-primary lg:gap-[20px] 2xl:gap-[63px] lg:items-center ">
          <div className="company flex flex-col gap-[5px] my-8">
            <h3 className="font-bold mb-2 xl:text-[15px]">Company</h3>
            <ul className="flex flex-col gap-[5px]">
              <Link
                to="/about"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                About
              </Link>
              <Link
                to="/blog"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Blog
              </Link>
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Properties
              </Link>
              <Link
                to="/agents"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Agents
              </Link>
              <Link className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]">
                Services
              </Link>
              <Link
                to="/contact"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Contact us
              </Link>
            </ul>
          </div>
          <div className="Services flex flex-col gap-[5px] my-8">
            <h3 className="font-bold mb-2 xl:text-[15px]">Services</h3>
            <ul className="flex flex-col gap-[5px]">
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Rent A Home
              </Link>
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Sell A Home
              </Link>
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Buy A Home
              </Link>
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Property Insurance
              </Link>
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Member Support
              </Link>
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Experience Agent
              </Link>
            </ul>
          </div>
          <div className="Utility flex flex-col gap-[5px] my-8">
            <h3 className="font-bold mb-2 xl:text-[15px]">Uitility pages</h3>
            <ul className="flex flex-col gap-[5px]">
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Partners
              </Link>
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Licenses
              </Link>
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Changelog
              </Link>
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Password
              </Link>
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Member Support
              </Link>
              <Link
                to="#"
                className="text-[15px] text-link cursor-pointer hover:text-primary xl:text-[14px] 2xl:text-[17px]"
              >
                Experience Agent
              </Link>
            </ul>
          </div>
          <div className="cont  lg:border-l-2 lg:border-opacity-20 lg:border-primary lg:pl-20  ">
            <div className="contact bg-secondary flex flex-col my-4 justify-center w-[400px] rounded-md lg:my-8 px-[20px] py-[25px] lg:px-[45px] lg:py-[25px]  ">
              <h3 className="font-bold mb-2 xl:text-[15px]">Contact Us</h3>
              <div className="wrapper flex flex-col gap-2">
                <div className="address flex items-start gap-2">
                  <MapPinIcon className="w-5" />
                  <small className="max-w-[200px]">
                    329 Queensberry Street, North Melbourne VIC 3051, Australia.
                  </small>
                </div>

                <div className="phone flex items-start gap-2">
                  <PhoneIcon className="w-5" />
                  <small>123 456 7890</small>
                </div>

                <div className="mail flex items-start gap-2">
                  <EnvelopeIcon className="w-5" />
                  <small>support@example.com</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright py-5 text-center">
        <small className="px-[10px]">
          Copyright © Properland | Designed by <b>VictorFlow</b> - Developed by{" "}
          <b>
            <a href="https://taiyeajimati.vercel.app/" target="blank">
              Taiye.
            </a>{" "}
          </b>
        </small>
      </div>
    </section>
  );
}

export default Footer;
