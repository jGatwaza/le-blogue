import React, {useState} from "react"; //I deconsrtucted react and extracted the useState hook

import Heading from "../heading";
import Navbar from "../navbar";
import BlogGrid from "../blogGrid";
import Footer from "../footer";
import SubHeading from "../subheading";
import CategoryList from "../categorylist";

const data = require("../../dummy-data.json");
const blogsDummydata = data.blogPosts;
const categories = data.categories;

export default function HomePage() {

  const [blogs, setblogs] = useState(blogsDummydata);
  const [categoryID, setCategoryID] = useState();
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <Footer />
      </div>
    </>
  );
}