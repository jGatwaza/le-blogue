import React from "react";

import Heading from "../heading";
import Navbar from "../navbar";
import BlogGrid from "../blogGrid";
import Footer from "../footer";
import SubHeading from "../subheading";
import CategoryList from "../categorylist";
import categoryNav from "../categoryNav";
const data = require("../../dummy-data.json");
const blogs = data.blogPosts.reverse();
const categories = data.categories;

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <Footer />
      </div>
    </>
  );
}