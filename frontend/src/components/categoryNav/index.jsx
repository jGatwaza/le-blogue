import React from 'react';

function CategoryNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="nav-link" href="/">Tech Topics</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#web-dev">Web Development</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#mobile-dev">Mobile Development</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ml">Machine Learning</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#data-science">Data Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#version-control">Version Control</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cloud-computing">Cloud Computing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cybersecurity">Cybersecurity</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ai">Artificial Int</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CategoryNav;
