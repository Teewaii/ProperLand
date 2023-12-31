import React, { useContext } from "react";
import Articles from "./Articles";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { motion } from "framer-motion";

function BlogsCards() {
  const { toTop } = useContext(AppContext);
  return (
    <div className="articles flex flex-col gap-[50px] mb-8">
      {Articles.map(({ pix, date, category, title, id }) => (
        <Link to={`/blog/${title}`} onClick={toTop}>
          <motion.div
            key={id}
            className="article flex flex-col items-center "
            initial={{ y: 50, opacity: 0.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img className="mb-[23px]" src={pix} alt="Blog_1" />
            <small className="text-link ">
              {date} | {category}
            </small>
            <h1 className="font-bold text-[15px] text-center mt-2 cursor-pointer leading-6 max-w-[450px] lg:text-[20px]">
              {title}
            </h1>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

export default BlogsCards;
