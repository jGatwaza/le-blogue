import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../heading";
import Navbar from "../navbar";
import BlogsCells from "../blogsCells";
import Footer from "../footer";
import blogService from "../../services/blogService";
import AddEditBlogModal from "../AddEditBlogModal";
import bootstrap from 'bootstrap';
import Loading from "../Loading";
export default function BlogsPage() {
  const { categoryId: categoryIdParam } = useParams();
  const [allBlogs, setAllBlogs] = useState([]); 
  const [blogs, setBlogs] = useState([]); 
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(categoryIdParam);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogService.getBlogs().then((blogs) => {
      setAllBlogs(blogs);
      setBlogs(blogs); 
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching blog posts:', error);
      throw error;
    });
  }, []);

  
  useEffect(() => {
    blogService.getCategories().then((categories) => {
      setCategories(categories);
    }).catch((error) => {
      console.error('Error fetching categories:', error);
      throw error;
    });
  }, []);

  useEffect(() => {
    if (categoryId) {
      const filteredBlogs = allBlogs.filter(blog =>
        blog.categories.some(cat => cat.id.toString() === categoryId.toString())
      );
      setBlogs(filteredBlogs);
    } else {
      setBlogs(allBlogs); 
    }
  }, [categoryId, allBlogs]);
  if (loading) {
    return <><Loading /></>;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <nav className="navbar navbar-expand-lg navbar-light umweru">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex flex-nowrap overflow-auto">
                {categories.map((category, index) => (
                  <li className="nav-item cursor-pointer" key={index} onClick={() => setCategoryId(category.id)}>
                    <p className={`nav-link cursor-pointer ${categoryId === category.id ? 'text-primary' : ''}`} href="#16dev">{category.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <button className="btn btn-secondary m-3"> Add Blog</button>
        <BlogsCells blogPosts={blogs} />
        <AddEditBlogModal />
      </div>
      <Footer />
    </>
  );
}
