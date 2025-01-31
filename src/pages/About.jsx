// src/pages/About/About.jsx
import React from 'react';
import { FaBuilding, FaHandshake, FaGlobeAmericas, FaChartLine } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade-up">
        <div className="container">
          <h1>About EBNBIZNET</h1>
          <p>A Global Business Promotion Platform</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          {/* Company Overview */}
          <div className="overview" data-aos="fade-up">
            <h2>Company Overview</h2>
            <p>EBNBIZNET.COM is a leading global business promotion platform headquartered in New York. For the past five years, we've been connecting businesses worldwide, facilitating growth and success through our innovative commission-based model.</p>
          </div>

          {/* Company Stats */}
          <div className="stats-grid">
            <div className="stat-card" data-aos="fade-up">
              <FaBuilding className="stat-icon" />
              <h3>5+ Years</h3>
              <p>Of Excellence</p>
            </div>
            <div className="stat-card" data-aos="fade-up">
              <FaGlobeAmericas className="stat-icon" />
              <h3>Global</h3>
              <p>Presence</p>
            </div>
            <div className="stat-card" data-aos="fade-up">
              <FaHandshake className="stat-icon" />
              <h3>10,000+</h3>
              <p>Business Partners</p>
            </div>
            <div className="stat-card" data-aos="fade-up">
              <FaChartLine className="stat-icon" />
              <h3>$100M+</h3>
              <p>In Transactions</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mission-vision">
            <div className="mission" data-aos="fade-up">
              <h2>Our Mission</h2>
              <p>To provide a transparent and efficient platform for businesses worldwide to promote their products and services, fostering growth and success through our innovative commission-based model.</p>
            </div>
            <div className="vision" data-aos="fade-up">
              <h2>Our Vision</h2>
              <p>To become the world's leading business promotion platform, connecting millions of businesses globally and facilitating seamless trade across borders.</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="how-it-works" data-aos="fade-up">
            <h2>How It Works</h2>
            <div className="steps-grid">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Free Registration</h3>
                <p>Sign up and create your business profile without any upfront costs</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>List Products</h3>
                <p>Add your products or services with detailed descriptions</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Make Sales</h3>
                <p>Connect with customers and make successful sales</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Pay Commission</h3>
                <p>Only pay when you make a successful sale</p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="our-team" data-aos="fade-up">
            <h2>Our Leadership Team</h2>
            <div className="team-grid">
              {/* Add team members here */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta" data-aos="fade-up">
        <div className="container">
          <h2>Ready to Join EBNBIZNET?</h2>
          <p>Start growing your business globally today</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default About;