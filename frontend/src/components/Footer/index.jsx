import React from "react";

export default function Footer() {
  return (
    <div className="container mt-5">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/categories" className="nav-link px-2 text-secondary">
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a href="/blogs" className="nav-link px-2 text-secondary">
              Blogs
            </a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link px-2 text-secondary">
              Sign in
            </a>
          </li>
        </ul>
        <ul className="nav justify-content-center pb-2 mb-2">
          <li className="nav-item">
            <a
              href="https://www.instagram.com/gatwaza_iv/"
              className="nav-link px-3 text-secondary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5em" }}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/jean-yves-gatwaza-7897861b2/"
              className="nav-link px-3 text-secondary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5em" }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/jGatwaza"
              className="nav-link px-3 text-secondary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5em" }}
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-secondary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5em" }}
            >
              <i className="fas fa-user"></i>
            </a>
          </li>
        </ul>
        <p className="text-center lead">&copy; 2024 Le Blogue. &trade;</p>
      </footer>
    </div>
  );
}
