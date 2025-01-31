import React, { useState } from 'react';
import SearchBar from '../components/common/SearchBar';
import Modal from '../components/common/Modal';
import './Listings.css';

function Listings() {
  const [listings, setListings] = useState([
    {
      id: 1,
      name: 'Digital Marketing Services',
      category: 'Marketing',
      description: 'Comprehensive digital marketing solutions',
      status: 'Active',
      price: 1500,
      views: 1245,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'Web Development Solutions',
      category: 'Technology',
      description: 'Custom web development and design',
      status: 'Active',
      price: 3000,
      views: 897,
      createdAt: '2024-01-10'
    }
  ]);

  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedListing, setSelectedListing] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newListing, setNewListing] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    status: 'Draft'
  });

  const handleSearch = ({ query }) => {
    setSearchTerm(query);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const viewListingDetails = (listing) => {
    setSelectedListing(listing);
  };

  const updateListingStatus = (id, newStatus) => {
    setListings(prevListings => 
      prevListings.map(listing => 
        listing.id === id 
          ? { ...listing, status: newStatus } 
          : listing
      )
    );
  };

  const handleAddListing = (e) => {
    e.preventDefault();
    const listingToAdd = {
      ...newListing,
      id: listings.length + 1,
      views: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    setListings([...listings, listingToAdd]);
    setIsAddModalOpen(false);
    setNewListing({
      name: '',
      category: '',
      description: '',
      price: '',
      status: 'Draft'
    });
  };

  const handleDeleteListing = (id) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      setListings(listings.filter(listing => listing.id !== id));
    }
  };

  const filteredListings = listings.filter(listing => 
    (filter === 'All' || listing.status === filter) &&
    (searchTerm === '' || 
      listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const statusOptions = ['All', 'Active', 'Draft', 'Inactive'];
  const categoryOptions = ['Technology', 'Marketing', 'Design', 'Consulting'];

  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
        <div className="dashboard-content">
          <div className="listings-page">
            <div className="listings-header">
              <h1>My Listings</h1>
              <div className="header-actions">
                <SearchBar
                  placeholder="Search listings..."
                  onSearch={handleSearch}
                  filterOptions={statusOptions}
                  onFilterChange={handleFilterChange}
                />
                <button 
                  className="add-listing-button"
                  onClick={() => setIsAddModalOpen(true)}
                >
                  + Add New Listing
                </button>
              </div>
            </div>

            <table className="listings-table">
              <thead>
                <tr>
                  <th>Listing Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Views</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredListings.map(listing => (
                  <tr key={listing.id}>
                    <td>{listing.name}</td>
                    <td>{listing.category}</td>
                    <td>${listing.price}</td>
                    <td>{listing.views}</td>
                    <td>
                      <span className={`status-badge ${listing.status.toLowerCase()}`}>
                        {listing.status}
                      </span>
                    </td>
                    <td>{listing.createdAt}</td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="view-button"
                          onClick={() => viewListingDetails(listing)}
                        >
                          View
                        </button>
                        <select 
                          className="status-select"
                          value={listing.status}
                          onChange={(e) => updateListingStatus(listing.id, e.target.value)}
                        >
                          {statusOptions.filter(status => status !== 'All').map(status => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                        <button 
                          className="delete-button"
                          onClick={() => handleDeleteListing(listing.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedListing && (
        <Modal
          isOpen={!!selectedListing}
          onClose={() => setSelectedListing(null)}
          title="Listing Details"
          footer={
            <>
              <button onClick={() => setSelectedListing(null)}>Close</button>
              <button>Edit</button>
            </>
          }
        >
          <div className="listing-details">
            <p><strong>Name:</strong> {selectedListing.name}</p>
            <p><strong>Category:</strong> {selectedListing.category}</p>
            <p><strong>Description:</strong> {selectedListing.description}</p>
            <p><strong>Price:</strong> ${selectedListing.price}</p>
            <p><strong>Status:</strong> {selectedListing.status}</p>
            <p><strong>Views:</strong> {selectedListing.views}</p>
            <p><strong>Created At:</strong> {selectedListing.createdAt}</p>
          </div>
        </Modal>
      )}

      {isAddModalOpen && (
        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Add New Listing"
          footer={
            <>
              <button onClick={() => setIsAddModalOpen(false)}>Cancel</button>
              <button onClick={handleAddListing}>Save Listing</button>
            </>
          }
        >
          <form className="add-listing-form">
            <div className="form-group">
              <label>Listing Name</label>
              <input
                type="text"
                value={newListing.name}
                onChange={(e) => setNewListing({...newListing, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                value={newListing.category}
                onChange={(e) => setNewListing({...newListing, category: e.target.value})}
                required
              >
                <option value="">Select Category</option>
                {categoryOptions.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={newListing.description}
                onChange={(e) => setNewListing({...newListing, description: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                value={newListing.price}
                onChange={(e) => setNewListing({...newListing, price: e.target.value})}
                required
              />
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default Listings;