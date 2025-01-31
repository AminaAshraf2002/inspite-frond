import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import Modal from '../common/Modal';
import './InquiriesTable.css';

function InquiriesTable() {
  // Initial inquiries data
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      email: 'john.doe@example.com',
      service: 'Web Development Services',
      message: 'Looking for a custom website design',
      status: 'Pending',
      date: '2024-01-20',
      priority: 'Medium'
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      email: 'jane.smith@example.com',
      service: 'Digital Marketing Package',
      message: 'Interested in SEO and social media marketing',
      status: 'In Progress',
      date: '2024-01-18',
      priority: 'High'
    },
    {
      id: 3,
      customerName: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      service: 'Graphic Design Solutions',
      message: 'Need logo and branding design',
      status: 'Closed',
      date: '2024-01-15',
      priority: 'Low'
    }
  ]);

  // State for filtering and searching
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // State for modal
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // Search and filter handlers
  const handleSearch = ({ query }) => {
    setSearchTerm(query);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // View inquiry details
  const viewInquiryDetails = (inquiry) => {
    setSelectedInquiry(inquiry);
  };

  // Update inquiry status
  const updateInquiryStatus = (id, newStatus) => {
    setInquiries(prevInquiries => 
      prevInquiries.map(inquiry => 
        inquiry.id === id 
          ? { ...inquiry, status: newStatus } 
          : inquiry
      )
    );
  };

  // Filter and search logic
  const filteredInquiries = inquiries.filter(inquiry => 
    (filter === 'All' || inquiry.status === filter) &&
    (searchTerm === '' || 
      inquiry.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.service.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Status filter options
  const statusOptions = ['All', 'Pending', 'In Progress', 'Closed'];

  return (
    <div className="inquiries-page">
      <div className="inquiries-header">
        <h1>Customer Inquiries</h1>
        <SearchBar
          placeholder="Search inquiries..."
          onSearch={handleSearch}
          filterOptions={statusOptions}
          onFilterChange={handleFilterChange}
        />
      </div>

      <table className="inquiries-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInquiries.map(inquiry => (
            <tr key={inquiry.id}>
              <td>{inquiry.customerName}</td>
              <td>{inquiry.service}</td>
              <td>{inquiry.date}</td>
              <td>
                <span className={`status-badge ${inquiry.status.toLowerCase().replace(' ', '-')}`}>
                  {inquiry.status}
                </span>
              </td>
              <td>
                <span className={`priority-badge ${inquiry.priority.toLowerCase()}`}>
                  {inquiry.priority}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button 
                    className="view-button"
                    onClick={() => viewInquiryDetails(inquiry)}
                  >
                    View
                  </button>
                  <select 
                    className="status-select"
                    value={inquiry.status}
                    onChange={(e) => updateInquiryStatus(inquiry.id, e.target.value)}
                  >
                    {statusOptions.filter(status => status !== 'All').map(status => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedInquiry && (
        <Modal
          isOpen={!!selectedInquiry}
          onClose={() => setSelectedInquiry(null)}
          title="Inquiry Details"
          footer={
            <>
              <button onClick={() => setSelectedInquiry(null)}>Close</button>
              <button>Reply</button>
            </>
          }
        >
          <div className="inquiry-details">
            <p><strong>Customer:</strong> {selectedInquiry.customerName}</p>
            <p><strong>Email:</strong> {selectedInquiry.email}</p>
            <p><strong>Service:</strong> {selectedInquiry.service}</p>
            <p><strong>Date:</strong> {selectedInquiry.date}</p>
            <p><strong>Status:</strong> {selectedInquiry.status}</p>
            <p><strong>Message:</strong> {selectedInquiry.message}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default InquiriesTable;