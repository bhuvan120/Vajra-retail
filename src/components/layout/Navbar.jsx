import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 🔥 toggle state
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuthenticated") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuth(false);
    navigate("/");
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  return (
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
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>

             <li className="nav-item">
              <NavLink to="/admindashboard" className="nav-link" onClick={closeMenu}>
                AdminDashboard
              </NavLink>
            </li>
          </ul>

          {/* AUTH BUTTONS */}
          <div className="navbar-actions">
            {!isAuth ? (
              <>
                <Link
                  to="/signup"
                  className="btn btn-outline-primary me-2"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>

                <Link
                  to="/login"
                  className="btn btn-primary"
                  onClick={closeMenu}
                >
                  Log In
                </Link>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-danger">
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
