import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        
        <h2>Welcome Back</h2>
        <p>Please login to your account</p>

        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <span>Don’t have an account?</span>
          <a href="/signup"> Sign Up</a>
        </div>

      </div>
    </div>
  );
};

export default Login;
