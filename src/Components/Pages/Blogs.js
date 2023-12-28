import React, { useEffect } from "react";
import Blog from "../Blog";
import BlogHeader from "../BlogHeader";
import BlogBody from "../BlogBody";

function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      <BlogHeader />
      <BlogBody />
    </div>
  );
}

export default Blogs;
