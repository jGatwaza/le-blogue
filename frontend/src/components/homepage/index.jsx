import React, {useState, useEffect} from "react"; //I deconsrtucted react and extracted the useState hook

import Heading from "../heading";
import Navbar from "../navbar";
import BlogGrid from "../blogGrid";
import Footer from "../footer";
import SubHeading from "../subheading";
import CategoryList from "../categorylist";
import blogService from "../../services/blogService";

export default function HomePage() {

  const [blogs, setblogs] = useState();
  const [categories, setCategories] = useState();
  useEffect (() =>{
    blogService.getBlogs().then((blogs) => { 
      setblogs(blogs);
    }).catch((error) => {
      console.error('Error fetching blog posts:', error);
      throw error;
    });
  
  },[]);
  useEffect (() =>{
    blogService.getCategories().then((categories) => { 
      setCategories(categories);
    }).catch((error) => {
      console.error('Error fetching blog posts:', error);
      throw error;
    });
  
  },[]);
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