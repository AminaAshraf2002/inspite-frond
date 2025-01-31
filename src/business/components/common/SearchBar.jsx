import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({
  onSearch,
  placeholder = 'Search...',
  className = ''
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      className={`business-search-bar ${className}`}
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="business-search-input"
      />
      <button type="submit" className="business-search-button">
        🔍
      </button>
    </form>
  );
};

export default SearchBar;