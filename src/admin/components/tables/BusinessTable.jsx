// components/tables/BusinessTable.js
import React, { useState } from 'react';
import { Edit, Trash2, MoreVertical, Eye } from 'lucide-react';
import './BusinessTable.css';

const BusinessTable = ({ businesses, onEdit, onDelete, onView }) => {
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'asc'
  });

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const getSortedBusinesses = () => {
    const sorted = [...businesses].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sorted;
  };

  return (
    <div className="business-table-container">
      <table className="business-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Business Name
              {sortConfig.key === 'name' && (
                <span className={`sort-indicator ${sortConfig.direction}`}>↕</span>
              )}
            </th>
            <th onClick={() => handleSort('category')}>
              Category
              {sortConfig.key === 'category' && (
                <span className={`sort-indicator ${sortConfig.direction}`}>↕</span>
              )}
            </th>
            <th onClick={() => handleSort('status')}>
              Status
              {sortConfig.key === 'status' && (
                <span className={`sort-indicator ${sortConfig.direction}`}>↕</span>
              )}
            </th>
            <th onClick={() => handleSort('membershipType')}>
              Membership
              {sortConfig.key === 'membershipType' && (
                <span className={`sort-indicator ${sortConfig.direction}`}>↕</span>
              )}
            </th>
            <th onClick={() => handleSort('joinDate')}>
              Join Date
              {sortConfig.key === 'joinDate' && (
                <span className={`sort-indicator ${sortConfig.direction}`}>↕</span>
              )}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {getSortedBusinesses().map((business) => (
            <tr key={business.id}>
              <td className="business-name">
                <div className="business-info">
                  {business.logo && (
                    <img 
                      src={business.logo} 
                      alt={business.name} 
                      className="business-logo"
                    />
                  )}
                  <div>
                    <span className="name">{business.name}</span>
                    <span className="email">{business.email}</span>
                  </div>
                </div>
              </td>
              <td>{business.category}</td>
              <td>
                <span className={`status-badge ${business.status}`}>
                  {business.status}
                </span>
              </td>
              <td>
                <span className={`membership-badge ${business.membershipType.toLowerCase()}`}>
                  {business.membershipType}
                </span>
              </td>
              <td>{business.joinDate}</td>
              <td>
                <div className="action-buttons">
                  <button 
                    className="action-btn view" 
                    onClick={() => onView(business)}
                  >
                    <Eye size={16} />
                  </button>
                  <button 
                    className="action-btn edit" 
                    onClick={() => onEdit(business)}
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    className="action-btn delete" 
                    onClick={() => onDelete(business.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                  <div className="more-actions">
                    <button className="action-btn more">
                      <MoreVertical size={16} />
                    </button>
                    <div className="dropdown-menu">
                      <button onClick={() => console.log('Send message')}>
                        Send Message
                      </button>
                      <button onClick={() => console.log('View reports')}>
                        View Reports
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-footer">
        <div className="rows-per-page">
          <span>Rows per page:</span>
          <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div className="pagination">
          <button className="pagination-btn" disabled>Previous</button>
          <span className="page-info">Page 1 of 5</span>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessTable;