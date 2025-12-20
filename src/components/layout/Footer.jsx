import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="image.png" alt="Vajra Retails Logo" />
        </div>

        {/* Copyright */}
        <p className="footer-text">
          © 2025 Vajra Retails. All rights reserved.
        </p>

        {/* Optional Links (future-ready) */}
        <div className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms & Conditions
          </a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;


  // <div>
  //       <img src="main1.png" style={{ width: "90%", height: "628.2px" }} alt="" />
  //     </div>