import React from "react";
import Login from "../../pages/Login";
import "./Navbar.css";
import { Link } from "react-router-dom";
import About from "../../pages/About";


const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">

          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src="image.png" alt="Vajra Logo" className="navbar-logo" />
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
        
                <a className="nav-link " href="/">Home</a>
              </li>
              <li className="nav-item">
                {/* <Link to="../../pages/About">aAbout</Link> */}
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>

            {/* Cart + Auth */}
            <div className="navbar-actions">
              
              {/* Cart */}
              <div className="cart-icon me-3">
                <span className="cart-count">0</span>
                 🛒 
              </div>

              {/* Auth Buttons */}
              {/* <button className="btn btn-outline-primary fw-bold me-2">
                Sign Up
              </button> */}

              <Link to="/signup" className="btn btn-outline-primary fw-bold me-2">
                Sign Up
              </Link>

              {/* <button className="btn btn-primary fw-bold">
                Log In
              </button> */}

              <Link to="/login" className="btn btn-primary fw-bold">
                Log In
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
