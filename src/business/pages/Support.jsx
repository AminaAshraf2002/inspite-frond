import React, { useState } from 'react';
import SearchBar from '../components/common/SearchBar';
import './Support.css';

function SupportPage() {
  const [activeSection, setActiveSection] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqCategories = [
    {
      category: 'Account Management',
      items: [
        {
          question: 'How do I change my account password?',
          answer: 'You can change your password in the Profile Settings page under the Security section.'
        },
        {
          question: 'How do I update my business profile?',
          answer: 'Navigate to Profile Settings and edit your business information. Save changes to update your profile.'
        }
      ]
    },
    {
      category: 'Listings',
      items: [
        {
          question: 'How do I create a new listing?',
          answer: 'Go to the Listings page and click on "Add New Listing". Fill in the required information and submit.'
        },
        {
          question: 'Can I edit an existing listing?',
          answer: 'Yes, you can edit listings from the Listings page by clicking the edit button next to each listing.'
        }
      ]
    },
    {
      category: 'Payments',
      items: [
        {
          question: 'How are platform commissions calculated?',
          answer: 'Platform commissions are calculated based on your membership tier and vary from 2% to 5% of each sale.'
        },
        {
          question: 'When do I get paid?',
          answer: 'Payments are processed monthly for sales completed in the previous month.'
        }
      ]
    }
  ];

  const contactOptions = [
    {
      method: 'Email Support',
      details: 'support@ebnbiznet.com',
      icon: '✉️'
    },
    {
      method: 'Phone Support',
      details: '+1 (555) 123-4567',
      icon: '📞'
    },
    {
      method: 'Live Chat',
      details: 'Mon-Fri, 9am-5pm EST',
      icon: '💬'
    }
  ];

  const supportResources = [
    {
      title: 'User Guide',
      description: 'Comprehensive guide to using EBNBIZNET platform',
      link: '/user-guide'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video instructions',
      link: '/tutorials'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other business owners',
      link: '/community'
    }
  ];

  const handleSearchChange = ({ query }) => {
    setSearchQuery(query);
  };

  const handleSupportFormChange = (e) => {
    const { name, value } = e.target;
    setSupportForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    // Implement support ticket submission logic
    console.log('Support Ticket Submitted:', supportForm);
    // Reset form or show confirmation
    setSupportForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="support-page">
      
      <div className="support-content">
        <div className="support-header">
          <h1>Support Center</h1>
          <SearchBar
            placeholder="Search help topics..."
            onSearch={handleSearchChange}
          />
        </div>

        <div className="support-sections">
          <div className="support-navigation">
            <button 
              className={`nav-item ${activeSection === 'faq' ? 'active' : ''}`}
              onClick={() => setActiveSection('faq')}
            >
              Frequently Asked Questions
            </button>
            <button 
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact')}
            >
              Contact Support
            </button>
            <button 
              className={`nav-item ${activeSection === 'resources' ? 'active' : ''}`}
              onClick={() => setActiveSection('resources')}
            >
              Support Resources
            </button>
          </div>

          <div className="support-content-area">
            {/* FAQ Section */}
            {activeSection === 'faq' && (
              <div className="faq-section">
                {filteredFAQs.length === 0 ? (
                  <p className="no-results">No FAQs found matching your search.</p>
                ) : (
                  filteredFAQs.map((category) => (
                    <div key={category.category} className="faq-category">
                      <h2>{category.category}</h2>
                      {category.items.map((item, index) => (
                        <div key={index} className="faq-item">
                          <h3>{item.question}</h3>
                          <p>{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Contact Support Section */}
            {activeSection === 'contact' && (
              <div className="contact-section">
                <div className="contact-methods">
                  <h2>Contact Options</h2>
                  <div className="contact-options">
                    {contactOptions.map((option, index) => (
                      <div key={index} className="contact-option">
                        <div className="contact-icon">{option.icon}</div>
                        <div className="contact-details">
                          <h3>{option.method}</h3>
                          <p>{option.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <form className="support-form" onSubmit={handleSupportSubmit}>
                  <h2>Submit a Support Ticket</h2>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={supportForm.name}
                      onChange={handleSupportFormChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={supportForm.email}
                      onChange={handleSupportFormChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={supportForm.subject}
                      onChange={handleSupportFormChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={supportForm.message}
                      onChange={handleSupportFormChange}
                      required
                      rows="5"
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    Submit Support Ticket
                  </button>
                </form>
              </div>
            )}

            {/* Support Resources Section */}
            {activeSection === 'resources' && (
              <div className="resources-section">
                <h2>Support Resources</h2>
                <div className="resources-grid">
                  {supportResources.map((resource, index) => (
                    <div key={index} className="resource-item">
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                      <a href={resource.link} className="resource-link">
                        Learn More
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;