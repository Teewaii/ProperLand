import React from "react";
import Articles from "./Articles";

function BlogsCards() {
  return (
    <div className="articles flex flex-col gap-[50px] mb-8">
      {Articles.map(({ pix, date, category, title, id }) => (
        <div key={id} className="article flex flex-col items-center ">
          <img className="mb-[23px]" src={pix} alt="Blog_1" />
          <small className="text-link ">
            {date} | {category}
          </small>
          <h1 className="font-bold text-[15px] text-center mt-2 cursor-pointer leading-6 max-w-[450px] lg:text-[20px]">
            {title}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default BlogsCards;
