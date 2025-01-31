import React, { useState } from 'react';
import './InquiryResponseForm.css';

function InquiryResponseForm({ inquiry }) {
  // Initial state for the inquiry response
  const [responseData, setResponseData] = useState({
    status: inquiry?.status || 'Pending',
    responseType: 'email',
    message: '',
    followUpAction: '',
    priority: 'medium'
  });

  // Predefined response templates
  const responseTemplates = [
    {
      id: 1,
      title: 'Initial Consultation',
      content: 'Thank you for your inquiry. We would love to schedule an initial consultation to discuss your needs in more detail.'
    },
    {
      id: 2,
      title: 'Pricing Information',
      content: 'We appreciate your interest. I\'ve attached our detailed pricing information and service packages for your review.'
    },
    {
      id: 3,
      title: 'Request More Details',
      content: 'To provide you with the most accurate proposal, could you share more specifics about your project requirements?'
    }
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResponseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Load response template
  const handleTemplateSelect = (templateContent) => {
    setResponseData(prev => ({
      ...prev,
      message: templateContent
    }));
  };

  // Submit response
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (!responseData.message.trim()) {
      alert('Please enter a response message');
      return;
    }

    // Prepare submission data
    const submissionData = {
      ...responseData,
      inquiryId: inquiry?.id
    };

    // TODO: Implement actual submission logic (API call)
    console.log('Submitting Inquiry Response:', submissionData);

    // Reset form or close modal
  };

  return (
    <div className="inquiry-response-form">
      <h2>Respond to Inquiry</h2>
      
      {/* Inquiry Details Section */}
      {inquiry && (
        <div className="inquiry-details">
          <h3>Original Inquiry</h3>
          <div className="detail-grid">
            <div>
              <strong>Customer:</strong> {inquiry.customerName}
            </div>
            <div>
              <strong>Service:</strong> {inquiry.service}
            </div>
            <div>
              <strong>Date:</strong> {inquiry.date}
            </div>
            <div>
              <strong>Current Status:</strong> {inquiry.status}
            </div>
          </div>
          <p><strong>Message:</strong> {inquiry.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="response-form">
        {/* Response Type and Status */}
        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label>Response Type</label>
              <select
                name="responseType"
                value={responseData.responseType}
                onChange={handleInputChange}
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="meeting">Meeting</option>
              </select>
            </div>

            <div className="form-group">
              <label>Inquiry Status</label>
              <select
                name="status"
                value={responseData.status}
                onChange={handleInputChange}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div className="form-group">
              <label>Priority</label>
              <select
                name="priority"
                value={responseData.priority}
                onChange={handleInputChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Response Templates */}
        <div className="form-section">
          <h3>Response Templates</h3>
          <div className="template-buttons">
            {responseTemplates.map((template) => (
              <button
                key={template.id}
                type="button"
                className="template-button"
                onClick={() => handleTemplateSelect(template.content)}
              >
                {template.title}
              </button>
            ))}
          </div>
        </div>

        {/* Response Message */}
        <div className="form-section">
          <div className="form-group">
            <label>Response Message</label>
            <textarea
              name="message"
              value={responseData.message}
              onChange={handleInputChange}
              rows="6"
              placeholder="Write your response here..."
              required
            />
          </div>
        </div>

        {/* Follow-up Action */}
        <div className="form-section">
          <div className="form-group">
            <label>Follow-up Action</label>
            <select
              name="followUpAction"
              value={responseData.followUpAction}
              onChange={handleInputChange}
            >
              <option value="">Select Follow-up Action</option>
              <option value="schedule_meeting">Schedule Meeting</option>
              <option value="send_proposal">Send Proposal</option>
              <option value="provide_quote">Provide Quote</option>
              <option value="request_more_info">Request More Information</option>
            </select>
          </div>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button type="submit" className="submit-button">
            Send Response
          </button>
          <button type="button" className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default InquiryResponseForm;