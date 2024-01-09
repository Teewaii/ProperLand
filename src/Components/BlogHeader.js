import React from "react";
import left_pattern from "../../src/img/About/Icon_lt.png";
import right_pattern from "../../src/img/About/Icon_rt.png";
import hux_icon from "../../src/img/Home/Vectorhux.png";
import Articles from "./Articles";
import { useParams } from "react-router-dom";

function BlogHeader() {
  const { title: topic } = useParams();
  const filteredArticle = Articles.filter(({ title }) => title == topic);
  // const topic = decodeURIComponent(title);

  return (
    <section className=" bg-gradient-to-l from-hero to-hero_end mb-16 h-[480px] md:h-[600px] lg:h-[630px] relative overflow-hidden 2xl:h-[85vh]">
      <div className="main_wrapper">
        <div className="leftPattern absolute left-0 bottom-0">
          <img src={left_pattern} alt="left_pattern_image" />
        </div>
        <div className="rightPattern absolute top-0 lg:bottom-0 md:right-[-380px] lg:right-[-80px] ">
          <img src={right_pattern} alt="right_pattern_image" />
        </div>

        <div className="left_wrapper w-[90%] md:max-w-[80%] lg:max-w-[75%] container flex items-start">
          {filteredArticle.map(
            ({ passPort, id, title, date, category, publisher }) => (
              <div
                id={id}
                className="left pt-40 flex flex-col items-center md:items-start relative lg:pt-[250px] xl:pt-[200px] 2xl:pt-[280px]"
              >
                <div className="topTag flex items-center gap-x-4 mb-8 bg-gradient-to-l from-hero from-0% w-fit px-4 py-1 ">
                  <img src={hux_icon} alt="" />
                  <p className="text-link text-sm tracking-[2px] uppercase">
                    {date} | {category}
                  </p>
                </div>
                <div className="middle_text xl:mb-2 2xl:mb-6">
                  <h1 className="text-[22px] leading-[28px] md:text-[38px] md:leading-[50px] md:w-[110%] font-[600] w-[100%] lg:text-[40px] lg:header2 lg:leading-[55px] lg:text-left xl:leading-[55px] 2xl:text-[65px] 2xl:leading-[75px]">
                    {title}
                  </h1>

                  <div className="publisher flex items-center my-4 gap-x-4">
                    <img
                      src={passPort}
                      className=" w-[45px] h-[50px] md:w-[55px] md:h-[60px] rounded-full "
                      alt="publisher"
                    />
                    <div>
                      <p className="font-bold">{publisher}</p>
                      <small className="text-link">Vloger</small>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogHeader;
