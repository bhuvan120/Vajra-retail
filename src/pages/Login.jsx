import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // mock authentication (replace with API later)
    localStorage.setItem("isAuthenticated", "true");

    navigate("/"); // redirect to home
  };
  

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Please login to your account</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email / Phone</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" required />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
