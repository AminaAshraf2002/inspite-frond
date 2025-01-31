// src/pages/Categories/Categories.jsx
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaStar, FaMapMarker, FaPhone } from 'react-icons/fa';
import './Categories.css';

const Categories = () => {
    // State for filters
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedMembership, setSelectedMembership] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // Sample categories
    const categories = [
        'All Categories',
        'Retail',
        'IT Services',
        'Manufacturing',
        'Health & Wellness',
        'Education',
        'Food & Beverage',
        'Professional Services',
        'Construction'
    ];

    // Sample businesses
    const businesses = [
        {
            id: 1,
            name: "Tech Solutions Inc",
            category: "IT Services",
            membership: "Prime A",
            location: "New York, USA",
            rating: 4.8,
            description: "Leading provider of IT solutions and services",
            image: "/images/business1.jpg"
        },
        // Add more sample businesses
    ];

    return (
        <div className="categories-page">
            {/* Hero Section */}
            <section className="categories-hero">
                <div className="container">
                    <h1>Browse Businesses</h1>
                    {/* Search Bar */}
                    <div className="search-bar">
                        <FaSearch className="search-iconil" />
                        <input
                            type="text"
                            placeholder="Search businesses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className="filter-btn"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <FaFilter /> Filter
                        </button>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className={`filter-section ${isFilterOpen ? 'active' : ''}`}>
                <div className="container">
                    <div className="filters">
                        {/* Category Filter */}
                        <div className="filter-group">
                            <h3>Industry/Sector</h3>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map((category, index) => (
                                    <option key={index} value={category.toLowerCase()}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Membership Filter */}
                        <div className="filter-group">
                            <h3>Membership</h3>
                            <div className="membership-options">
                                <label>
                                    <input
                                        type="radio"
                                        name="membership"
                                        value="all"
                                        checked={selectedMembership === 'all'}
                                        onChange={(e) => setSelectedMembership(e.target.value)}
                                    />
                                    All
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="membership"
                                        value="prime-a"
                                        checked={selectedMembership === 'prime-a'}
                                        onChange={(e) => setSelectedMembership(e.target.value)}
                                    />
                                    Prime A
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="membership"
                                        value="prime-b"
                                        checked={selectedMembership === 'prime-b'}
                                        onChange={(e) => setSelectedMembership(e.target.value)}
                                    />
                                    Prime B
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="membership"
                                        value="prime-c"
                                        checked={selectedMembership === 'prime-c'}
                                        onChange={(e) => setSelectedMembership(e.target.value)}
                                    />
                                    Prime C
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="categories-grid">
                <div className="container">
                    {/* Category Pills */}
                    <div className="category-pills">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`category-pill ${selectedCategory === category.toLowerCase() ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category.toLowerCase())}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Business Listings */}
                    <div className="business-listings">
                        {businesses.map((business) => (
                            <div key={business.name} className="business-card" data-aos="fade-up">
                                <div className="business-image">
                                    <span className={`membership-badge ${business.membership.toLowerCase()}`}>
                                        {business.membership}
                                    </span>
                                </div>
                                <div className="business-info">
                                    <h3>{business.name}</h3>
                                    <p className="category">{business.category}</p>
                                    <div className="location">
                                        <FaMapMarker /> {business.location}
                                    </div>
                                    <p className="description">{business.description}</p>
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={i < Math.floor(business.rating) ? 'filled' : ''}
                                            />
                                        ))}
                                        <span>{business.rating}</span>
                                    </div>
                                    <div className="business-actions">
                                        <button className="contact-btn">
                                            <FaPhone /> Contact
                                        </button>
                                        <button
                                            className="view-btn"
                                            onClick={() => navigate("/business-details")}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="pagination">
                        <button>&lt; Previous</button>
                        <div className="page-numbers">
                            <button className="active">1</button>
                            <button>2</button>
                            <button>3</button>
                            <span>...</span>
                            <button>10</button>
                        </div>
                        <button>Next &gt;</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Categories;