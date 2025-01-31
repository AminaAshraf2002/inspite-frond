import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Clock, 
  Eye,
  FileText,
  Download
} from 'lucide-react';
import './ApprovalManagement.css';

const ApprovalManagement = () => {
  const [approvals, setApprovals] = useState([
    {
      id: 1,
      businessName: "Tech Solutions Inc",
      category: "IT Services",
      submitDate: "2024-01-25",
      status: "pending",
      documents: ["business_license.pdf", "tax_certificate.pdf"],
      priority: "high",
      contactPerson: "John Smith",
      email: "john@techsolutions.com"
    },
    {
      id: 2,
      businessName: "Global Trade LLC",
      category: "Retail",
      submitDate: "2024-01-24",
      status: "review",
      documents: ["registration.pdf", "financial_statement.pdf"],
      priority: "medium",
      contactPerson: "Sarah Johnson",
      email: "sarah@globaltrade.com"
    }
  ]);

  const [selectedApproval, setSelectedApproval] = useState(null);
  
  const handleApprove = (id) => {
    setApprovals(approvals.map(approval => 
      approval.id === id ? {...approval, status: 'approved'} : approval
    ));
  };

  const handleReject = (id) => {
    setApprovals(approvals.map(approval => 
      approval.id === id ? {...approval, status: 'rejected'} : approval
    ));
  };

  return (
    <div className="approval-management-container">
      <div className="approval-header">
        <div className="header-content">
          <h1>Approval Management</h1>
          <div className="approval-stats">
            <div className="stat-item">
              <Clock className="stat-icon pending" />
              <div className="stat-info">
                <span className="stat-value">12</span>
                <span className="stat-label">Pending</span>
              </div>
            </div>
            <div className="stat-item">
              <AlertCircle className="stat-icon review" />
              <div className="stat-info">
                <span className="stat-value">5</span>
                <span className="stat-label">In Review</span>
              </div>
            </div>
            <div className="stat-item">
              <CheckCircle className="stat-icon approved" />
              <div className="stat-info">
                <span className="stat-value">28</span>
                <span className="stat-label">Approved</span>
              </div>
            </div>
            <div className="stat-item">
              <XCircle className="stat-icon rejected" />
              <div className="stat-info">
                <span className="stat-value">3</span>
                <span className="stat-label">Rejected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="approval-filters">
        <select defaultValue="all" className="filter-select">
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="review">In Review</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
        <select defaultValue="all" className="filter-select">
          <option value="all">All Categories</option>
          <option value="it">IT Services</option>
          <option value="retail">Retail</option>
          <option value="manufacturing">Manufacturing</option>
        </select>
        <select defaultValue="all" className="filter-select">
          <option value="all">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>

      <div className="approvals-grid">
        {approvals.map(approval => (
          <div key={approval.id} className="approval-card">
            <div className="card-header">
              <div className="priority-badge" data-priority={approval.priority}>
                {approval.priority} Priority
              </div>
              <div className="status-badge" data-status={approval.status}>
                {approval.status}
              </div>
            </div>

            <div className="card-body">
              <h3>{approval.businessName}</h3>
              <p className="category">{approval.category}</p>
              
              <div className="contact-info">
                <p>{approval.contactPerson}</p>
                <p>{approval.email}</p>
              </div>

              <div className="documents-section">
                <h4>Required Documents</h4>
                <div className="document-list">
                  {approval.documents.map((doc, index) => (
                    <div key={index} className="document-item">
                      <FileText size={16} />
                      <span>{doc}</span>
                      <Download size={16} className="download-icon" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="submit-date">
                Submitted: {approval.submitDate}
              </div>
            </div>

            <div className="card-actions">
              <button 
                className="view-details-btn"
                onClick={() => setSelectedApproval(approval)}
              >
                <Eye size={16} />
                View Details
              </button>
              <div className="action-buttons">
                <button 
                  className="approve-btn"
                  onClick={() => handleApprove(approval.id)}
                >
                  <CheckCircle size={16} />
                  Approve
                </button>
                <button 
                  className="reject-btn"
                  onClick={() => handleReject(approval.id)}
                >
                  <XCircle size={16} />
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedApproval && (
        <div className="approval-modal">
          <div className="modal-content">
            {/* Modal content for detailed view */}
            <h2>{selectedApproval.businessName}</h2>
            <button 
              className="close-modal"
              onClick={() => setSelectedApproval(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApprovalManagement;