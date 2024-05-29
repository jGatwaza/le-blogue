import React from "react";

export default function Categories({ blogPost }) {
const posts = {blogPost}
  return (
    <div className="flex-wrap">
      {posts.categories?.map((category, index) => {
        return (
          <p
            key={index}
            className="category-tag text-center"
            style={{
              color: category.color,
              backgroundColor: category.color + "33",
            }}
          >
            {category.title}
          </p>
        );
      })}
    </div>
  );
}
