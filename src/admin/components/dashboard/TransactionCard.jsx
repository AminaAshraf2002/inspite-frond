// components/cards/TransactionCard.js
import React from 'react';
import { Eye } from 'lucide-react';
import './TransactionCard.css';

const TransactionCard = ({ transaction, onViewDetails }) => {
  return (
    <div className="transaction-card">
      <div className="transaction-info">
        <div className="business-info">
          <h4>{transaction.businessName}</h4>
          <span className="transaction-id">#{transaction.id}</span>
        </div>
        
        <div className="amount-info">
          <span className="amount">${transaction.amount}</span>
          <span className={`status ${transaction.status}`}>
            {transaction.status}
          </span>
        </div>
      </div>

      <div className="transaction-details">
        <div className="detail-item">
          <span className="label">Date:</span>
          <span>{transaction.date}</span>
        </div>
        <div className="detail-item">
          <span className="label">Type:</span>
          <span>{transaction.type}</span>
        </div>
      </div>

      <div className="transaction-actions">
        <button 
          className="view-details" 
          onClick={() => onViewDetails(transaction)}
        >
          <Eye size={16} />
          View Details
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;