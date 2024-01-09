import React from "react";
import Articles from "./Articles";
import Publisher from "./Publisher";
import BlogsCards from "./BlogsCards";
import { useParams } from "react-router-dom";

function BlogBody() {
  const { title: topic } = useParams();
  const filteredArticle = Articles.filter(({ title }) => title == topic);

  return (
    <article className="flex flex-col items-center ">
      <div className="container flex flex-col items-center">
        {filteredArticle.map(
          ({ passPort, id, title, date, category, publisher, pix }) => (
            <div
              id={1}
              className="relative mt-[-120px] md:mt-[-180px] lg:mt-[-170px] 2xl:mt-[-200px]"
            >
              <img className="mb-[23px] 2xl:w-[1300px]" src={pix} alt="Blog" />
            </div>
          )
        )}
        <div className="wrapper flex flex-col lg:gap-x-20 w-[90%]  mt-8 h-[fit] md:max-w-[80%] lg:mt-4  lg:py-[30px] xl:max-w-[72%]">
          <p className="text-left text-[15px] lg:text-justify md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h1 className="font-bold my-4 text-[28px] 2xl:text-[28px]">
            About the property
          </h1>
          <p className="text-left text-[15px] lg:text-justify md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="flex flex-col gap-y-2 py-2 text-[13px] list-disc pl-4">
            <li className="">
              Dynamically target high-payoff intellectual capital for customized
            </li>
            <li className="">
              Interactively procrastinate high-payoff content
            </li>
            <li className="">
              Credibly reinter mediate backend ideas for cross-platform models
            </li>
          </ul>

          <div className="quote bg-[#3B3A5D] rounded-md w-[fit]  my-4">
            <p className="text-center leading-8 text-white italic p-12 text-[15px] md:text-md">
              “Democracy must be built through open societies that share
              information. When there is information, there is enlightenment.
              When there is no sharing of power, no rule of law, no
              accountability, there is abuse, corruption and indignation.”
            </p>
          </div>
          <div className="buildService">
            <h1 className="font-bold my-4 text-[28px] xl:text-[24px]">
              Setting the mood with incense
            </h1>
            <p className="text-left text-[15px] lg:text-justify md:text-md">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
            <ol className="flex flex-col gap-y-2 py-2 text-[13px] list-decimal pl-4 my-4">
              <li className="">
                Dynamically target high-payoff intellectual capital for
                customized
              </li>
              <li className="">
                Interactively procrastinate high-payoff content
              </li>
              <li className="">
                Credibly reinter backend ideas for cross-platform models
              </li>
              <li className="">
                We provide operational efficiency, data security, and flexible
                scale
              </li>
            </ol>
            <p className="text-left text-[15px] lg:text-justify md:text-md">
              It is a long established fact that a reader will be distracted by
              the readable content page when looking at its layout. The point of
              using Lorem Ipsum is that it more-or-less normal distribution of
              letters, as felt opposed to using 'Content here making it look
              like readable.
            </p>
          </div>
        </div>
      </div>

      {filteredArticle.map(({ passPort, id, publisher }) => (
        <Publisher key={id} passPort={passPort} id={id} publisher={publisher} />
      ))}
      <div className="flex flex-col items-center mb-16 container">
        <h1 className="text-[24px] font-bold text-center md:text-[35px] leading-[40px] my-4 md:max-w-[500px]">
          Latest Articles
        </h1>
        <BlogsCards />
      </div>
    </article>
  );
}

export default BlogBody;
