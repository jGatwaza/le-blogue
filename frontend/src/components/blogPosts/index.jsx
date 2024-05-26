import React from "react";
import Heading from "../heading";
import Navbar from "../navbar";
import BlogsCells from "../blogsCells";
import Footer from "../footer";
import CategoryNav from "../categoryNav";
const data = require("../../dummy-data.json");
const blogs = data.blogPosts.reverse();

export default function blogPosts() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <CategoryNav/>
        <BlogsCells blogPosts={blogs}></BlogsCells>
        <Footer />
      </div>
    </>
  );
}