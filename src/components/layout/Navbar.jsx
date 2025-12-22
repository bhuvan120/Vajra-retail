import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <img src="image.png" alt="Vajra Logo" className="navbar-logo" />
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="navbar-actions">
              <Link
                to="/signup"
                className="btn btn-outline-primary fw-bold me-2"
                onClick={closeMenu}
              >
                Sign Up
              </Link>

              <Link
                to="/login"
                className="btn btn-primary fw-bold"
                onClick={closeMenu}
              >
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
