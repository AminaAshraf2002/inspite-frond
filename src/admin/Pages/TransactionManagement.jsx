import React, { useState } from 'react';
import { 
  DollarSign, 
  Calendar, 
  Download, 
  FileText, 
  Filter,
  Search,
  TrendingUp
} from 'lucide-react';
import './TransactionManagement.css';

const TransactionManagement = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      businessName: "Tech Solutions Inc",
      type: "Commission",
      amount: 1200.00,
      status: "completed",
      date: "2024-01-25",
      reference: "TRX-001",
      paymentMethod: "Bank Transfer"
    },
    {
      id: 2,
      businessName: "Global Trade LLC",
      type: "Membership Fee",
      amount: 850.00,
      status: "pending",
      date: "2024-01-24",
      reference: "TRX-002",
      paymentMethod: "Credit Card"
    }
  ]);

  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: '',
    endDate: ''
  });

  const [filters, setFilters] = useState({
    type: '',
    status: '',
    paymentMethod: ''
  });

  return (
    <div className="transaction-management-container">
      <div className="page-header">
        <div className="header-content">
          <h1>Transaction Management</h1>
          <div className="transaction-summary">
            <div className="summary-card">
              <div className="summary-icon revenue">
                <DollarSign size={24} />
              </div>
              <div className="summary-details">
                <span className="summary-label">Total Revenue</span>
                <span className="summary-value">$52,450</span>
                <span className="summary-trend positive">
                  <TrendingUp size={16} />
                  8.2% vs last month
                </span>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon pending">
                <Calendar size={24} />
              </div>
              <div className="summary-details">
                <span className="summary-label">Pending Transactions</span>
                <span className="summary-value">12</span>
                <span className="summary-description">Needs attention</span>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon commission">
                <DollarSign size={24} />
              </div>
              <div className="summary-details">
                <span className="summary-label">Commission Earned</span>
                <span className="summary-value">$8,320</span>
                <span className="summary-trend positive">
                  <TrendingUp size={16} />
                  5.4% vs last month
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="header-actions">
          <button className="action-button">
            <Download size={18} />
            Export Report
          </button>
          <button className="action-button">
            <FileText size={18} />
            Generate Invoice
          </button>
        </div>
      </div>

      <div className="transaction-controls">
        <div className="search-section">
          <div className="search-box">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="search-input"
            />
          </div>
          <button className="filter-button">
            <Filter size={20} />
            Filters
          </button>
        </div>

        <div className="filters-panel">
          <div className="date-filters">
            <div className="filter-group">
              <label>Start Date</label>
              <input 
                type="date" 
                value={selectedDateRange.startDate}
                onChange={(e) => setSelectedDateRange({
                  ...selectedDateRange,
                  startDate: e.target.value
                })}
                className="date-input"
              />
            </div>
            <div className="filter-group">
              <label>End Date</label>
              <input 
                type="date" 
                value={selectedDateRange.endDate}
                onChange={(e) => setSelectedDateRange({
                  ...selectedDateRange,
                  endDate: e.target.value
                })}
                className="date-input"
              />
            </div>
          </div>

          <div className="additional-filters">
            <div className="filter-group">
              <label>Transaction Type</label>
              <select 
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
              >
                <option value="">All Types</option>
                <option value="commission">Commission</option>
                <option value="membership">Membership Fee</option>
                <option value="service">Service Fee</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Status</label>
              <select 
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
              >
                <option value="">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Payment Method</label>
              <select 
                value={filters.paymentMethod}
                onChange={(e) => setFilters({...filters, paymentMethod: e.target.value})}
              >
                <option value="">All Methods</option>
                <option value="bank">Bank Transfer</option>
                <option value="card">Credit Card</option>
                <option value="wallet">Digital Wallet</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="transactions-table-container">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Reference</th>
              <th>Business Name</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td className="reference-cell">{transaction.reference}</td>
                <td>{transaction.businessName}</td>
                <td>{transaction.type}</td>
                <td className="amount-cell">${transaction.amount.toFixed(2)}</td>
                <td>
                  <span className={`status-badge ${transaction.status}`}>
                    {transaction.status}
                  </span>
                </td>
                <td>{transaction.paymentMethod}</td>
                <td>{transaction.date}</td>
                <td>
                  <div className="table-actions">
                    <button className="action-icon view">
                      <FileText size={16} />
                    </button>
                    <button className="action-icon download">
                      <Download size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="pagination-button">&lt; Previous</button>
        <div className="page-numbers">
          <button className="page-number active">1</button>
          <button className="page-number">2</button>
          <button className="page-number">3</button>
        </div>
        <button className="pagination-button">Next &gt;</button>
      </div>
    </div>
  );
};

export default TransactionManagement;