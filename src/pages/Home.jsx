import React from 'react';
import { FaStar, FaCheckCircle, FaUser, FaArrowRight } from 'react-icons/fa';
import './Home.css';
import image1 from '../assets/bgcover.jpg';
import myImage1 from '../assets/badge.webp';
import business1 from '../assets/business1.jpg';
import business2 from '../assets/business2.jpg';
import business3 from '../assets/business3.jpg';

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 data-aos="fade-up">List Your Business for Free</h1>
            <h2 data-aos="fade-up" data-aos-delay="200">Pay Only When You Sell!</h2>
            <button
              onClick={() => window.location.href = '/list-business'}
              className="btn btn-warning"
            >
              List Your Business
            </button>
          </div>

        </div>
      </section>

      {/* Introduction Section */}
      <section className="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="intro-image" data-aos="fade-up">
              <img src={image1} alt="About EBNBIZNET.COM" />
            </div>
            <div className="about-content">
              <h4>ABOUT US</h4>
              <h2>Empowering Businesses Worldwide with EBNBIZNET.COM</h2>
              <p>EBNBIZNET.COM is a global business promotion platform that enables businesses to register and list their services and products for free. Operating on a commission-based model, we charge a percentage only upon successful sales, ensuring a risk-free experience for businesses.</p>
              <p>Incorporated in New York, EBNBIZNET.COM has been serving businesses for over five years, offering a seamless marketplace to connect buyers and sellers. Our platform provides three membership categories tailored to business turnover, ensuring fair and flexible opportunities for enterprises of all sizes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2 data-aos="fade-up">Key Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card" data-aos="fade-up">
              <FaCheckCircle className="benefit-icon" />
              <h3>Free Registration</h3>
              <p>Start listing your business without any upfront costs</p>
            </div>
            <div className="benefit-card" data-aos="fade-up">
              <FaCheckCircle className="benefit-icon" />
              <h3>Pay Per Success</h3>
              <p>Only pay commission when you make a successful sale</p>
            </div>
            <div className="benefit-card" data-aos="fade-up">
              <FaCheckCircle className="benefit-icon" />
              <h3>Global Reach</h3>
              <p>Connect with customers worldwide</p>
            </div>
            <div className="benefit-card" data-aos="fade-up">
              <FaCheckCircle className="benefit-icon" />
              <h3>Dedicated Support</h3>
              <p>Get assistance whenever you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      {/* Membership Categories */}
      <section className="membership">
        <div className="container">
          <h2 data-aos="fade-up">Membership Categories</h2>
          <div className="membership-grid">
            <div className="membership-card featured" data-aos="fade-up">
              <div className="card-image">
                <img src={myImage1} alt="Prime A" />
              </div>
              <div className="card-content">
                <h3>Prime A</h3>
                <p className="price">5% Commission</p>
                <ul>
                  <li>Premium Listing</li>
                  <li>Priority Support</li>
                  <li>Advanced Analytics</li>
                  <li>Featured Position</li>
                </ul>
                <button className="join-btn featured">Join Now</button>
              </div>
            </div>
            <div className="membership-card" data-aos="fade-up">
              <div className="card-content">
                <h3>Prime B</h3>
                <p className="price">7% Commission</p>
                <ul>
                  <li>Enhanced Listing</li>
                  <li>Business Support</li>
                  <li>Basic Analytics</li>
                  <li>Regular Position</li>
                </ul>
                <button className="join-btn">Join Now</button>
              </div>
            </div>
            <div className="membership-card" data-aos="fade-up">
              <div className="card-content">
                <h3>Prime C</h3>
                <p className="price">10% Commission</p>
                <ul>
                  <li>Standard Listing</li>
                  <li>Email Support</li>
                  <li>Basic Analytics</li>
                  <li>Regular Position</li>
                </ul>
                <button className="join-btn">Join Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="featured-businesses py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Businesses</h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img 
                  src={business1}
                  className="card-img-top" 
                  alt="Business 1"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <span className="badge bg-warning mb-2">Prime A</span>
                  <h5 className="card-title">AI-Powered B2B Lead Generation Tool</h5>
                  <p className="card-text">Leading provider of quality services and products.</p>
                  <div className="text-warning">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img 
                  src={business2}
                  className="card-img-top" 
                  alt="Business 2"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">Prime B</span>
                  <h5 className="card-title"> White-Label Software Development Agency</h5>
                  <p className="card-text">Leading provider of quality services and products.</p>
                  <div className="text-warning">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img 
                  src={business3}
                  className="card-img-top" 
                  alt="Business 3"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <span className="badge bg-bronze mb-2">Prime C</span>
                  <h5 className="card-title">Digital Marketing & SEO Agency for B2B Brands</h5>
                  <p className="card-text">Leading provider of quality services and products.</p>
                  <div className="text-warning">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 data-aos="fade-up">What Our Users Say</h2>
          <div className="testimonial-grid">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="testimonial-card" data-aos="fade-up">
                <FaUser className="user-icon" />
                <p>"EBNBIZNET has transformed our business reach. The platform is easy to use and the support is excellent."</p>
                <div className="testimonial-author">
                  <h4>John Doe</h4>
                  <p>CEO, Company {testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Registration */}
      <section className="quick-register">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Get Started?</h2>
          <p data-aos="fade-up">Join thousands of businesses already benefiting from EBNBIZNET</p>
          <div className="register-buttons" data-aos="fade-up">
            <button className="register-btn-large">Register Now</button>
            <button className="login-btn-large">Login</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;