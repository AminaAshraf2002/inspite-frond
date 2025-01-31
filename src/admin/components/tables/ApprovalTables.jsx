// components/tables/ApprovalTable.js
import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Eye, 
  Clock, 
  AlertTriangle 
} from 'lucide-react';
import './ApprovalTable.css';

const ApprovalTable = ({ approvals, onApprove, onReject, onView }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(approvals.map(approval => approval.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending':
        return <Clock className="status-icon pending" />;
      case 'under_review':
        return <AlertTriangle className="status-icon review" />;
      case 'approved':
        return <CheckCircle className="status-icon approved" />;
      case 'rejected':
        return <XCircle className="status-icon rejected" />;
      default:
        return null;
    }
  };

  return (
    <div className="approval-table-container">
      <div className="table-header">
        <div className="bulk-actions">
          <input
            type="checkbox"
            checked={selectedRows.length === approvals.length}
            onChange={handleSelectAll}
            className="checkbox"
          />
          {selectedRows.length > 0 && (
            <div className="bulk-action-buttons">
              <button className="bulk-approve">
                Approve Selected ({selectedRows.length})
              </button>
              <button className="bulk-reject">
                Reject Selected ({selectedRows.length})
              </button>
            </div>
          )}
        </div>
      </div>

      <table className="approval-table">
        <thead>
          <tr>
            <th className="checkbox-cell">
              <input
                type="checkbox"
                checked={selectedRows.length === approvals.length}
                onChange={handleSelectAll}
              />
            </th>
            <th>Business Name</th>
            <th>Type</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>Documents</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {approvals.map((approval) => (
            <tr 
              key={approval.id}
              className={selectedRows.includes(approval.id) ? 'selected' : ''}
            >
              <td className="checkbox-cell">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(approval.id)}
                  onChange={() => handleSelectRow(approval.id)}
                />
              </td>
              <td>
                <div className="business-info">
                  <div>
                    <span className="business-name">{approval.businessName}</span>
                    <span className="business-email">{approval.email}</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="approval-type">{approval.type}</span>
              </td>
              <td>
                <div className="date-info">
                  <span className="date">{approval.submittedDate}</span>
                  <span className="time-ago">{approval.timeAgo}</span>
                </div>
              </td>
              <td>
                <div className="status-cell">
                  {getStatusIcon(approval.status)}
                  <span className={`status-badge ${approval.status}`}>
                    {approval.status.replace('_', ' ')}
                  </span>
                </div>
              </td>
              <td>
                <div className="documents-cell">
                  {approval.documents.map((doc, index) => (
                    <span key={index} className="document-badge">
                      {doc}
                    </span>
                  ))}
                </div>
              </td>
              <td>
                <div className="action-buttons">
                  <button 
                    className="action-btn view" 
                    onClick={() => onView(approval)}
                  >
                    <Eye size={16} />
                  </button>
                  <button 
                    className="action-btn approve"
                    onClick={() => onApprove(approval.id)}
                  >
                    <CheckCircle size={16} />
                  </button>
                  <button 
                    className="action-btn reject"
                    onClick={() => onReject(approval.id)}
                  >
                    <XCircle size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-footer">
        <div className="rows-per-page">
          <span>Rows per page:</span>
          <select defaultValue="10">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="pagination">
          <button className="pagination-btn">Previous</button>
          <span className="page-info">Page 1 of 5</span>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalTable;