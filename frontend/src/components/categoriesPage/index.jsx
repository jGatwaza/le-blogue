import React,{useEffect, useState} from "react";

import Heading from "../heading";
import Navbar from "../navbar";
import Footer from "../footer";
import blogService from "../../services/blogService";
import SubHeading from "../subheading";
import CategoryList from "../categorylist";
export default function CategoriesPage() {
  const [categories, setCategories] = useState();
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
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <Footer />
      </div>
    </>
  );
}