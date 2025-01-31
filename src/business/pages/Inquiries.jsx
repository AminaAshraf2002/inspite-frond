import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import './Listings.css';

function Inquiries() {
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      customerEmail: 'john.doe@example.com',
      service: 'Web Development Services',
      message: 'Looking for a custom website design',
      status: 'Pending',
      date: '2024-01-20'
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      customerEmail: 'jane.smith@example.com',
      service: 'Digital Marketing Package',
      message: 'Interested in SEO and social media marketing',
      status: 'Reviewed',
      date: '2024-01-18'
    }
  ]);

  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');

  const handleStatusChange = (id, newStatus) => {
    setInquiries(inquiries.map(inquiry => 
      inquiry.id === id ? { ...inquiry, status: newStatus } : inquiry
    ));
  };

  const handleViewDetails = (inquiry) => {
    setSelectedInquiry(inquiry);
  };

  const handleCloseModal = () => {
    setSelectedInquiry(null);
  };

  const filteredInquiries = inquiries.filter(inquiry => 
    filterStatus === 'All' || inquiry.status === filterStatus
  );

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
      
        <div className="dashboard-content">
          <div className="inquiries-page">
            <div className="page-header">
              <h1>Customer Inquiries</h1>
              <div className="status-filter">
                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="All">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="Reviewed">Reviewed</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>

            <div className="inquiries-table-container">
              <table className="business-table">
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInquiries.map((inquiry) => (
                    <tr key={inquiry.id}>
                      <td>{inquiry.customerName}</td>
                      <td>{inquiry.customerEmail}</td>
                      <td>{inquiry.service}</td>
                      <td>
                        <span className={`status-badge ${inquiry.status.toLowerCase()}`}>
                          {inquiry.status}
                        </span>
                      </td>
                      <td>{inquiry.date}</td>
                      <td>
                        <div className="action-buttons">
                          <button 
                            className="view-button"
                            onClick={() => handleViewDetails(inquiry)}
                          >
                            View Details
                          </button>
                          <select 
                            className="status-change-select"
                            value={inquiry.status}
                            onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Reviewed">Reviewed</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {selectedInquiry && (
        <div className="modal">
          <div className="modal-content">
            <h2>Inquiry Details</h2>
            <div className="inquiry-details">
              <p><strong>Customer:</strong> {selectedInquiry.customerName}</p>
              <p><strong>Email:</strong> {selectedInquiry.customerEmail}</p>
              <p><strong>Service:</strong> {selectedInquiry.service}</p>
              <p><strong>Date:</strong> {selectedInquiry.date}</p>
              <p><strong>Message:</strong> {selectedInquiry.message}</p>
              <div className="modal-actions">
                <button onClick={handleCloseModal}>Close</button>
                <button>Reply</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inquiries;