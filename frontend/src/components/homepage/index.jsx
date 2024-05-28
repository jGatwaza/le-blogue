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
  const [loading, setLoading] = useState(true);
  useEffect (() =>{
    blogService.getBlogs().then((blogs) => { 
      setblogs(blogs);
      setLoading(false);
      ;
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
  if (loading) {
    return <div className="position-absolute top-50 start-50 translate-middle">
      <div class="spinner-border spinner-border-xlg" role="status">
        
    <span class="visually-hidden">Loading...</span>
    
  </div>
  </div>;
  }
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