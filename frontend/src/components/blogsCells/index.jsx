import React, {useState} from "react";
import BlogItem from "../blogItem";

export default function BlogCells({ blogPosts }) {
  if (!blogPosts || !blogPosts.length) {
    return null;
  }
  
  return (
    <div className="container mt-3">
      <div className="row">
        {blogPosts?.map((blogPost, index) => (
          <div key={index} className="col-md-4 mb-4">
            <BlogItem
              imageOrientation={"top"}
              index={index}
              blogPost={blogPost}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
