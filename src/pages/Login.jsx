import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userInput, setUserInput] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const sendOtp = () => {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);
    setOtpSent(true);

    alert("Your OTP is: " + randomOtp); // demo only
  };

  const verifyOtp = (e) => {
    e.preventDefault();

    if (otp === generatedOtp) {
      alert("Login Successful");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <p>Login using Email or Phone</p>

        <form onSubmit={verifyOtp}>
          <div className="form-group">
            <label>Email or Phone</label>
            <input
              type="text"
              placeholder="Enter email or phone"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            />
          </div>

          {otpSent && (
            <div className="form-group">
              <label>OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
          )}

          {!otpSent ? (
            <button
              type="button"
              className="login-btn"
              onClick={sendOtp}
            >
              Send OTP
            </button>
          ) : (
            <button type="submit" className="login-btn">
              Verify OTP
            </button>
          )}
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
