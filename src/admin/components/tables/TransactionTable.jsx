// components/tables/TransactionTable.js
import React, { useState } from 'react';
import { 
  Eye, 
  Download, 
  MoreVertical, 
  ArrowUp, 
  ArrowDown,
  Calendar 
} from 'lucide-react';
import './TransactionTable.css';

const TransactionTable = ({ transactions }) => {
  const [sortConfig, setSortConfig] = useState({
    key: 'date',
    direction: 'desc'
  });

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'desc' ? 'asc' : 'desc'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="transaction-table-container">
      <div className="table-header">
        <div className="date-filter">
          <Calendar size={16} />
          <input type="date" />
          <span>to</span>
          <input type="date" />
        </div>
        <button className="export-btn">
          <Download size={16} />
          Export
        </button>
      </div>

      <div className="table-container">
        <table className="transaction-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('id')}>
                Transaction ID
                {sortConfig.key === 'id' && (
                  sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                )}
              </th>
              <th onClick={() => handleSort('businessName')}>
                Business Name
                {sortConfig.key === 'businessName' && (
                  sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                )}
              </th>
              <th onClick={() => handleSort('type')}>
                Type
                {sortConfig.key === 'type' && (
                  sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                )}
              </th>
              <th onClick={() => handleSort('amount')}>
                Amount
                {sortConfig.key === 'amount' && (
                  sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                )}
              </th>
              <th onClick={() => handleSort('status')}>
                Status
                {sortConfig.key === 'status' && (
                  sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                )}
              </th>
              <th onClick={() => handleSort('date')}>
                Date
                {sortConfig.key === 'date' && (
                  sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                )}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="id-cell">#{transaction.id}</td>
                <td>
                  <div className="business-info">
                    <span className="business-name">{transaction.businessName}</span>
                    <span className="business-email">{transaction.email}</span>
                  </div>
                </td>
                <td>
                  <span className={`type-badge ${transaction.type}`}>
                    {transaction.type}
                  </span>
                </td>
                <td className="amount-cell">
                  <span className={`amount ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
                    {formatCurrency(transaction.amount)}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${transaction.status}`}>
                    {transaction.status}
                  </span>
                </td>
                <td>
                  <div className="date-info">
                    <span className="date">{transaction.date}</span>
                    <span className="time">{transaction.time}</span>
                  </div>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view">
                      <Eye size={16} />
                    </button>
                    <button className="action-btn download">
                      <Download size={16} />
                    </button>
                    <div className="more-actions">
                      <button className="action-btn more">
                        <MoreVertical size={16} />
                      </button>
                      <div className="dropdown-menu">
                        <button>View Receipt</button>
                        <button>Send to Email</button>
                        <button>Print Details</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
          <div className="page-numbers">
            <button className="page-number active">1</button>
            <button className="page-number">2</button>
            <button className="page-number">3</button>
          </div>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;