import React,{useEffect, useState} from "react";

import Heading from "../Heading";
import Navbar from "../Navbar";
import Footer from "../Footer";
import blogService from "../../services/blogService";
import SubHeading from "../Subheading";
import CategoryList from "../Categorylist";
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