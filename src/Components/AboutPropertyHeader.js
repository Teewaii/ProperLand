import React from "react";
import { useParams } from "react-router-dom";

import comfi from "../../src/img/Home/comfi_lg.png";
import comfi_2 from "../../src/img/Home/comfi_2_lg.png";
import comfi_3 from "../../src/img/Home/comfi_3_lg.png";
import comfi_4 from "../../src/img/Home/Downtown_1_lg.png";
import comfi_5 from "../../src/img/Home/comfi_4_lg.png";
import comfi_6 from "../../src/img/Home/Downtown_1_lg.png";

function AboutPropertyHeader() {
  const pictures = ["", comfi, comfi_2, comfi_3, comfi_4, comfi_5, comfi_6];

  const { id: propId } = useParams();
  const selectedProperty = pictures.filter(
    (pix, index) => index === parseInt(propId)
  );

  return (
    <section className=" bg-[#] h-[55vh] md:h-[42vh] max-h-xs:[40vh] lg:h-[73vh] 2xl:h-[70vh] relative overflow-hidden">
      <div className="main_wrapper"></div>

      {selectedProperty.map((pix, index) => (
        <div
          key={index}
          className="bg-cover bg-top h-[100%]"
          style={{ backgroundImage: `url(${pix})` }}
        ></div>
      ))}
    </section>
  );
}

export default AboutPropertyHeader;
