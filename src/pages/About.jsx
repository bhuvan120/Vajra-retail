import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Vajra Retails</h1>
          <p>Your trusted retail shopping destination</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            Vajra Retails is a modern e-commerce platform focused on delivering
            quality products at affordable prices. We aim to provide a seamless
            shopping experience with reliability and trust.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify online shopping by offering a wide range
            of products, secure payments, and fast delivery—all in one place.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us</h2>
          <p>
            We focus on customer satisfaction, easy returns, and transparent
            pricing. Your trust is our biggest asset.
          </p>
        </div>
      </section>

    </main>
  );
};

export default About;
