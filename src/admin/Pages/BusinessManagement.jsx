import React, { useState } from 'react';
import { Search, Filter, Plus, Edit, Trash2, MoreVertical } from 'lucide-react';
import './BusinessManagement.css';

const BusinessManagement = () => {
  // Sample business data - Replace with API calls
  const [businesses, setBusinesses] = useState([
    {
      id: 1,
      name: "Tech Solutions Inc",
      category: "IT Services",
      status: "active",
      membershipType: "Prime A",
      revenue: 25000,
      joinDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Global Trade LLC",
      category: "Retail",
      status: "pending",
      membershipType: "Prime B",
      revenue: 18000,
      joinDate: "2024-01-18"
    },
    // Add more business data as needed
  ]);

  const [filters, setFilters] = useState({
    status: '',
    category: '',
    membershipType: ''
  });

  const [showFilters, setShowFilters] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleDeleteBusiness = (businessId) => {
    if (window.confirm('Are you sure you want to delete this business?')) {
      setBusinesses(businesses.filter(business => business.id !== businessId));
    }
  };

  return (
    <div className="business-management-container">
      <div className="page-header">
        <h1>Business Management</h1>
        <button className="add-business-btn">
          <Plus size={20} />
          Add New Business
        </button>
      </div>

      <div className="management-controls">
        <div className="search-section">
          <div className="search-box">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Search businesses..." 
              className="search-input"
            />
          </div>
          <button 
            className="filter-toggle-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            Filters
          </button>
        </div>

        {showFilters && (
          <div className="filters-panel">
            <div className="filter-group">
              <label>Status</label>
              <select 
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Category</label>
              <select 
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
              >
                <option value="">All Categories</option>
                <option value="IT Services">IT Services</option>
                <option value="Retail">Retail</option>
                <option value="Manufacturing">Manufacturing</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Membership</label>
              <select 
                value={filters.membershipType}
                onChange={(e) => setFilters({...filters, membershipType: e.target.value})}
              >
                <option value="">All Types</option>
                <option value="Prime A">Prime A</option>
                <option value="Prime B">Prime B</option>
                <option value="Prime C">Prime C</option>
              </select>
            </div>

            <button 
              className="clear-filters-btn"
              onClick={() => setFilters({ status: '', category: '', membershipType: '' })}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <div className="businesses-table-container">
        <table className="businesses-table">
          <thead>
            <tr>
              <th>Business Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Membership</th>
              <th>Revenue</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map(business => (
              <tr key={business.id}>
                <td className="business-name-cell">
                  <span>{business.name}</span>
                </td>
                <td>{business.category}</td>
                <td>
                  <span className={`status-badge ${business.status}`}>
                    {business.status}
                  </span>
                </td>
                <td>{business.membershipType}</td>
                <td>${business.revenue.toLocaleString()}</td>
                <td>{business.joinDate}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">
                      <Edit size={16} />
                    </button>
                    <button 
                      className="action-btn delete"
                      onClick={() => handleDeleteBusiness(business.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                    <button className="action-btn more">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="pagination-btn">&lt; Previous</button>
        <div className="pagination-numbers">
          <button className="pagination-number active">1</button>
          <button className="pagination-number">2</button>
          <button className="pagination-number">3</button>
        </div>
        <button className="pagination-btn">Next &gt;</button>
      </div>
    </div>
  );
};

export default BusinessManagement;