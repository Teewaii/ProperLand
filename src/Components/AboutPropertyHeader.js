import React from "react";
import { useParams } from "react-router-dom";

import comfi from "../../src/img/Home/comfi_lg.png";
import comfi_2 from "../../src/img/Home/comfi_2_lg.png";
import comfi_3 from "../../src/img/Home/comfi_3_lg.png";
import comfi_4 from "../../src/img/Home/comfi_4_lg.png";
import comfi_5 from "../../src/img/Home/comfi_4_lg.png";
import comfi_6 from "../../src/img/Home/Downtown_1_lg.png";

function AboutPropertyHeader() {
  const pictures = ["", comfi, comfi_2, comfi_3, comfi_4, comfi_5, comfi_6];

  const { id: propId } = useParams();
  const selectedProperty = pictures.filter((pix, index) => index == propId);

  return (
    <section className=" bg-[#] h-[55vh] md:h-[42vh] max-h-xs:[40vh] lg:h-[73vh] 2xl:h-[55vh] relative overflow-hidden">
      <div className="main_wrapper">
        {/* <div
          className="leftPattern absolute left-0 bottom-0"
          initial={{ x: 50, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={left_pattern} alt="left_pattern_image" />
        </div>
        <div className="rightPattern absolute top-0 lg:bottom-0 md:right-[-380px] lg:right-[-80px]">
          <img src={right_pattern} alt="right_pattern_image" />
        </div> */}

        {/* <div className="left_wrapper container flex items-start">
          <div className="left pt-40 flex flex-col items-center lg:items-start relative z-[10] lg:pt-[250px] xl:pt-[200px] 2xl:pt-[310px]">
            <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
              <img src={hux_icon} alt="" />
              <p className="text-link text-sm tracking-[6px] uppercase ">
                About the property
              </p>
            </div>
            <div className="middle_text mb-2 xl:mb-2 2xl:mb-6 relative z-20">
              <h1 className="text-[28px] md:text-[35px] md:leading-[50px] font-[600] md:max-w-[405px] lg:header2 leading-[35px] lg:text-left xl:text-[40px] lg:max-w-[100%] xl:leading-[55px] 2xl:text-[50px] ">
                Property Description
              </h1>
            </div>
          </div>
        </div> */}
      </div>

      {selectedProperty.map((pix, index) => (
        <div
          key={index}
          className="bg-cover bg-top h-[100%]"
          style={{ backgroundImage: `url(${pix})` }}
        >
          {/* <img
            className="absolute right-0 left-0 top-0 w-[100%] "
            // className="w-[80%] lg:w-[60%] absolute right-0 bottom-0 lg:bottom-0 2xl:w-[55%]"
            src={pix}
            alt="heroImg"
          /> */}
        </div>
      ))}
    </section>
  );
}

export default AboutPropertyHeader;
