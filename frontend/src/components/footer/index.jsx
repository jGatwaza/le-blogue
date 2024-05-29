import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container mt-5">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="nav-link px-2 text-muted">
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogPosts" className="nav-link px-2 text-muted">
              Blogs
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2024 Le Blogue, Inc</p>
      </footer>
    </div>
  );
}