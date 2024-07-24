import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-nav" aria-label="Main navigation">
      <div className="container">
        <Link className="navbar-brand" to="/" title="Sangamesh Myageri">
          <span className="full-name">SANGAMESH MYAGERI</span>
          <span className="initials">SM</span>
        </Link>
        <p className="job-role">Web Developer</p>
        <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse offcanvas-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" title="Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" title="About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" title="Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <a href="#" id="dark-mode-toggle"><i className="fas fa-toggle-on"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
