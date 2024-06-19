import React from "react";

export default function Footer() {
  return (
    <div className="container mt-5">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="" className="nav-link px-2 text-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link px-2 text-secondary">
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link px-2 text-secondary">
              Blogs
            </a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link px-2 text-secondary">
              Sign in
            </a>
          </li>
        </ul>
        <p className="text-center lead">&copy; 2024 Le Blogue. &trade;</p>
      </footer>
    </div>
  );
}
