import { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [identifier, setIdentifier] = useState(""); // Email or Phone
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const navigate = useNavigate();

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");

    try {
      // Use email as login (phone login would require additional mapping)
      await signInWithEmailAndPassword(auth, identifier, password);

      // Role-based navigation
      if (identifier === "harigudipati666@gmail.com") {
        navigate("/admindashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message || "Invalid email/phone or password");
    }
  };

  // Password reset
  const handleResetPassword = async () => {
    if (!identifier) {
      setError("Please enter your email to reset password");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, identifier);
      setInfo("Password reset email sent. Check your inbox.");
    } catch (err) {
      setError(err.message || "Failed to send reset email");
    }
  };

  // Google login
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userEmail = result.user.email;

      if (userEmail === "harigudipati666@gmail.com") {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message || "Google login failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h2 className="card-title mb-3 text-center">Login</h2>

            {error && <div className="alert alert-danger">{error}</div>}
            {info && <div className="alert alert-success">{info}</div>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer"
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-2">
                Login
              </button>
            </form>

            <button
              className="btn btn-link w-100 mb-3"
              onClick={handleResetPassword}
            >
              Forgot Password?
            </button>

            <button
              className="btn btn-danger w-100"
              onClick={googleLogin}
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
