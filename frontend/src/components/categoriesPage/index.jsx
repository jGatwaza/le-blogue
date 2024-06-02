import React,{useEffect, useState} from "react";

import Heading from "../heading";
import Navbar from "../navbar";
import Footer from "../footer";
import blogService from "../../services/blogService";
import SubHeading from "../subheading";
import CategoryList from "../categorylist";
import Loading from "../Loading";
export default function CategoriesPage() {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  // useEffect (() =>{
  //   blogService.getCategories().then((categories) => { 
  //     setCategories(categories);
  //     setLoading(false);
  //   }).catch((error) => {
  //     console.error('Error fetching blog posts:', error);
  //     throw error;
  //   });
  
  // },[]);
  if (loading) {
    return <><Loading/></>;
  }
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