// components/cards/ApprovalCard.js
import React from 'react';
import { CheckCircle, XCircle, Eye } from 'lucide-react';
import './ApprovalCard.css';

const ApprovalCard = ({ approval, onApprove, onReject, onView }) => {
  return (
    <div className="approval-card">
      <div className="approval-header">
        <div className="business-info">
          <h4>{approval.businessName}</h4>
          <span className={`status ${approval.status}`}>
            {approval.status}
          </span>
        </div>
        <span className="approval-type">{approval.type}</span>
      </div>

      <div className="approval-content">
        <div className="info-grid">
          <div className="info-item">
            <span className="label">Category:</span>
            <span>{approval.category}</span>
          </div>
          <div className="info-item">
            <span className="label">Submitted:</span>
            <span>{approval.submittedDate}</span>
          </div>
          <div className="info-item">
            <span className="label">Documents:</span>
            <span>{approval.documents.length} files</span>
          </div>
        </div>

        {approval.notes && (
          <div className="approval-notes">
            <p>{approval.notes}</p>
          </div>
        )}
      </div>

      <div className="approval-actions">
        <button className="view-btn" onClick={() => onView(approval)}>
          <Eye size={16} />
          View Details
        </button>
        <div className="action-buttons">
          <button 
            className="approve-btn" 
            onClick={() => onApprove(approval.id)}
          >
            <CheckCircle size={16} />
            Approve
          </button>
          <button 
            className="reject-btn" 
            onClick={() => onReject(approval.id)}
          >
            <XCircle size={16} />
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;