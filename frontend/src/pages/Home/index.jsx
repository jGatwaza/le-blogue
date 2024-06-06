import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import SubHeading from "../../components/Subheading";
import BlogGrid from "../../components/BlogGrid";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import { fetchBlogs, reset as resetBlogs } from "../../features/blogsSlice";
import blogService from "../../services/blogService";
import categoryService from "../../services/categoryService";

export default function Home() {
  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsRes = await blogService.fetchBlogs();
        const categoryRes = await categoryService.fetchCategories();
        setBlogs(blogsRes.data);
        setCategories(categoryRes.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Heading />
      <div className="container">
        <SubHeading subHeading={"Recent blog posts"} />
        <BlogGrid blogPosts={blogs} />
        <CategoriesList categories={categories} />
        <Footer />
      </div>
    </>
  );
}
