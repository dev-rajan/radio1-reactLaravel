import React from "react";
import AllBlogs from "./AllBlogs";

const BlogList = () => {
  return (
    <div className="container">
      <section className="section special-news cat-list all-blogs">
        {/* @include ('frontend.partials.all-blogs') */}
        <AllBlogs />
      </section>
    </div>
  );
};

export default BlogList;
