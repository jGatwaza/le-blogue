import React from "react";
import PropType from "prop-types";

import BlogItem from "../BlogItem";

import "./index.css";

export default function BlogGrid({ blogPosts }) {
  const length = blogPosts.length;
  if (!blogPosts || !blogPosts.length) {
    return null;
  }
  return (
    <>
      <div className="blog-grid-container py-2 w-100">
        <div className="item-1 w-50">
          {blogPosts.length > 0 && (
            <BlogItem
              imageOrientation={"top"}
              index={0}
              blog={blogPosts[length - 1]}
            />
          )}
        </div>

        <div className="right-block w-50">
          {blogPosts.length > 1 && (
            <div className="item-2 h-50">
              <BlogItem
                imageOrientation={"left"}
                index={1}
                blog={blogPosts[length - 2]}
              />
            </div>
          )}

          {blogPosts.length > 2 && (
            <div className="item-3 h-50">
              <BlogItem index={2} blog={blogPosts[length - 3]} />
            </div>
          )}
        </div>
      </div>
      {blogPosts.length > 3 && (
        <div className="item-4">
          <BlogItem index={3} blog={blogPosts[length - 4]} />
        </div>
      )}
    </>
  );
}

BlogGrid.prototype = {
  blogPost: PropType.array.isRequired,
};
