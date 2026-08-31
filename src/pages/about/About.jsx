import React from "react";
import PageTransition from "../../components/PageTransition";
import "./about.css";

export default function About() {
  return (
    <PageTransition>
      <section className="about_page">
        <div className="container">
          <div className="about_header">
            <h2>About Us</h2>
            <p>Your trusted destination for electronics, fashion and accessories.</p>
            <div className="bottom_line"></div>
          </div>

          <div className="about_content">
            <div className="about_card">
              <h3>Our Mission</h3>
              <p>
                We strive to bring you the best products at competitive prices
                with fast and reliable delivery.
              </p>
            </div>

            <div className="about_card">
              <h3>Our Vision</h3>
              <p>
                To become the most convenient and trusted online shopping
                destination for customers everywhere.
              </p>
            </div>

            <div className="about_card">
              <h3>Why Choose Us</h3>
              <p>
                High quality products, secure payment options, and 24/7 customer
                support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
