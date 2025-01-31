import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import Modal from '../common/Modal';
import './ListingsTable.css';

function ListingsTable() {
  // Initial listings data
  const [listings, setListings] = useState([
    {
      id: 1,
      name: 'Web Development Services',
      category: 'Technology',
      description: 'Custom web design and development solutions',
      price: 1500,
      status: 'Active',
      views: 1245,
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      name: 'Digital Marketing Package',
      category: 'Marketing',
      description: 'Comprehensive digital marketing strategy',
      price: 2000,
      status: 'Active',
      views: 897,
      lastUpdated: '2024-01-10'
    },
    {
      id: 3,
      name: 'Graphic Design Solutions',
      category: 'Design',
      description: 'Professional logo and branding design',
      price: 800,
      status: 'Draft',
      views: 456,
      lastUpdated: '2024-01-05'
    }
  ]);

  // State for filtering and searching
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // State for modals
  const [selectedListing, setSelectedListing] = useState(null);
  const [isAddListingModalOpen, setIsAddListingModalOpen] = useState(false);
  const [newListing, setNewListing] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    status: 'Draft'
  });

  // Search and filter handlers
  const handleSearch = ({ query }) => {
    setSearchTerm(query);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // View listing details
  const viewListingDetails = (listing) => {
    setSelectedListing(listing);
  };

  // Update listing status
  const updateListingStatus = (id, newStatus) => {
    setListings(prevListings => 
      prevListings.map(listing => 
        listing.id === id 
          ? { ...listing, status: newStatus } 
          : listing
      )
    );
  };

  // Add new listing
  const handleAddListing = (e) => {
    e.preventDefault();
    const listingToAdd = {
      ...newListing,
      id: listings.length + 1,
      views: 0,
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    
    setListings([...listings, listingToAdd]);
    setIsAddListingModalOpen(false);
    // Reset new listing form
    setNewListing({
      name: '',
      category: '',
      description: '',
      price: '',
      status: 'Draft'
    });
  };

  // Filter and search logic
  const filteredListings = listings.filter(listing => 
    (filter === 'All' || listing.status === filter) &&
    (searchTerm === '' || 
      listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Status and category options
  const statusOptions = ['All', 'Active', 'Draft', 'Inactive'];
  const categoryOptions = ['Technology', 'Marketing', 'Design', 'Consulting'];

  return (
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
            onClick={() => setIsAddListingModalOpen(true)}
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
            <th>Last Updated</th>
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
              <td>{listing.lastUpdated}</td>
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Listing Details Modal */}
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
            <p><strong>Last Updated:</strong> {selectedListing.lastUpdated}</p>
          </div>
        </Modal>
      )}

      {/* Add Listing Modal */}
      {isAddListingModalOpen && (
        <Modal
          isOpen={isAddListingModalOpen}
          onClose={() => setIsAddListingModalOpen(false)}
          title="Add New Listing"
          footer={
            <>
              <button onClick={() => setIsAddListingModalOpen(false)}>Cancel</button>
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

export default ListingsTable;