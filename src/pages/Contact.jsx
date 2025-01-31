import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const faqs = [
    {
      question: "How do I list my business on EBNBIZNET?",
      answer: "To list your business, navigate to the 'List Your Business' page and fill out the comprehensive registration form. Our team will review your submission within 3-5 business days."
    },
    {
      question: "What are the membership categories on EBNBIZNET?",
      answer: "EBNBIZNET offers three membership tiers: Prime A (up to $50,000 annual turnover), Prime B ($50,001 - $250,000), and Prime C (over $250,000). Each tier has different commission rates and benefits."
    },
    {
      question: "How does the commission structure work on EBNBIZNET?",
      answer: "We charge a commission only on successful sales. The commission rate varies based on your membership tier: 5% for Prime A, 4% for Prime B, and 3% for Prime C."
    },
    {
      question: "Is my business data secure on EBNBIZNET?",
      answer: "Yes, we prioritize data security and use advanced encryption to ensure your business information remains confidential and secure."
    },
    {
      question: "Can I update my business listing on EBNBIZNET?",
      answer: "Absolutely! Once your listing is approved, you can log into your dashboard and update your business details, images, and other information at any time."
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement actual form submission logic
    console.log('Contact Form Submission:', contactForm);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="contact-page-container">
      {/* Hero Section */}
      <section className="hero-section" data-aos="fade-up">
        <h1 className="page-title">Contact EBNBIZNET</h1>
        <p className="page-subtitle">
          We're here to support your business growth. Reach out to us for any inquiries, support, or assistance you may need.
        </p>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="contact-info-item" data-aos="fade-up" data-aos-delay="200">
          <FaEnvelope className="contact-icon" />
          <div>
            <h3>Email</h3>
            <p>support@ebnbiznet.com</p>
            <p>business@ebnbiznet.com</p>
          </div>
        </div>
        <div className="contact-info-item" data-aos="fade-up" data-aos-delay="400">
          <FaPhone className="contact-icon" />
          <div>
            <h3>Phone</h3>
            <p>+1 (800) EBNBIZ-HELP</p>
            <p>+1 (212) 555-7890</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section" data-aos="fade-up" data-aos-delay="600">
        <h2 className="section-title">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactForm.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactForm.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={contactForm.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" data-aos="fade-up" data-aos-delay="800">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="social-links-section" data-aos="fade-up" data-aos-delay="1000">
        <h2 className="section-title">Connect With Us</h2>
        <div className="social-links">
          <a href="#" className="social-link">
            <FaFacebook />
          </a>
          <a href="#" className="social-link">
            <FaTwitter />
          </a>
          <a href="#" className="social-link">
            <FaLinkedin />
          </a>
          <a href="#" className="social-link">
            <FaInstagram />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;