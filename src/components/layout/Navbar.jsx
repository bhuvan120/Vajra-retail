import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuthenticated") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <img src="image.png" alt="Vajra Logo" className="navbar-logo" />
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>

          {/* AUTH BUTTONS */}
          <div className="navbar-actions">
            {!isAuth ? (
              <>
                <Link to="/signup" className="btn btn-outline-primary me-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-primary">
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
