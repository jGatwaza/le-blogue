import React, {useState, useEffect} from "react"; //I deconsrtucted react and extracted the useState hook

import Heading from "../heading";
import Navbar from "../navbar";
import BlogGrid from "../blogGrid";
import Footer from "../footer";
import SubHeading from "../subheading";
import CategoryList from "../categorylist";
import blogService from "../../services/blogService";
import Loading from "../Loading";
export default function HomePage() {

  const [blogs, setblogs] = useState();
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);
  // useEffect (() =>{
  //   blogService.fetchBlogs().then((blogs) => { 
  //     setblogs(blogs);
  //     setLoading(false);
  //     ;
  //   }).catch((error) => {
  //     console.error('Error fetching blog posts:', error);
  //     throw error;
  //   });
  
  // },[]);
  // useEffect (() =>{
  //   blogService.getCategories().then((categories) => { 
  //     setCategories(categories);
  //   }).catch((error) => {
  //     console.error('Error fetching blog posts:', error);
  //     throw error;
  //   });
  
  // },[]);
  if (loading) {
    return <Loading/>;
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