import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import AddEditBlogModal from "../../components/AddEditBlogModal";
import Loading from "../../components/Loading";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import DeleteBlogModal from "../../components/DeleteBlogModal";

import "./index.css";

import {
  setAddBlog,
  fetchBlogsByCategoryId,
  resetSuccessAndError as resetBlog,
} from "../../features/blogsSlice";
import {
  fetchCategories,
  resetSuccessAndError as resetCategory,
} from "../../features/categoriesSlice";

export default function BlogsPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const {
    blogs,
    isError: isBlogsError,
    isSuccess: isBlogSuccess,
    isLoading: isLoadingBlogs,
    message: blogsMessage,
  } = useSelector((state) => state.blogs);
  const {
    categories,
    isError: isCategoriesError,
    isSuccess: isCategoriesSuccess,
    isLoading: isLoadingCategories,
    message: categoriesMessage,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBlogsByCategoryId(categoryId));
  }, [categoryId]);

  const onBlogAdd = () => {
    dispatch(
      setAddBlog({
        title: "",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minima necessitatibus deleniti consectetur esse est harum recusandae doloribus odio itaque veritatis assumenda rerum nisi unde totam, perferendis vel id libero nulla! Quia mollitia nostrum quibusdam doloremque nemo nihil, expedita illo ullam aspernatur sed eum unde molestiae incidunt error aperiam, ab excepturi facilis officia animi? Vel magnam aliquam quisquam dolore enim suscipit voluptate ipsum, voluptas at quidem ab, labore nobis reprehenderit, cumque libero cupiditate optio sint quod amet reiciendis quasi alias.",
        categories: [],
        authorId: user._id,
        content: [
          {
            sectionHeader: "Introduction",
            sectionText:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minima necessitatibus deleniti consectetur esse est harum recusandae doloribus odio itaque veritatis assumenda rerum nisi unde totam, perferendis vel id libero nulla! Quia mollitia nostrum quibusdam doloremque nemo nihil, expedita illo ullam aspernatur sed eum unde molestiae incidunt error aperiam, ab excepturi facilis officia animi? Vel magnam aliquam quisquam dolore enim suscipit voluptate ipsum, voluptas at quidem ab, labore nobis reprehenderit, cumque libero cupiditate optio sint quod amet reiciendis quasi alias.",
          },
        ],
      })
    );
  };

  const AddButton = () => {
    if (!user || !user?.token) {
      return null;
    }
    return (
      <button className="btn btn-light m-3" onClick={onBlogAdd}>
        Add Blogue
      </button>
    );
  };

  const CategoriesList = ({ categoryId }) => {
    if (!categories && !categories?.length) {
      return null;
    }
    return categories.map((category) => {
      return categoryId === category.id ? (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "blue" }}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      ) : (
        <Link
          className="link linkSelected"
          key={category.id}
          to={"/blogs/" + category.id}
          
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      );
    });
  };

  if (isLoadingBlogs || isLoadingCategories) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Heading />
      <div className="container">
        <div className="scroll-menu">
          <CategoriesList categoryId={categoryId} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
          <AddButton />
        </div>
        <BlogList blogs={blogs} />
        <AddEditBlogModal />
        <DeleteBlogModal />
      </div>
      <Footer />
      <SuccessToast
        show={isBlogSuccess || isCategoriesSuccess}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
      <ErrorToast
        show={isBlogsError || isCategoriesError}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
    </>
  );
}
