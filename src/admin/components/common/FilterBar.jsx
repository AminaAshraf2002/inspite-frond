// components/common/FilterComponent.js
import React from 'react';
import { Filter, X } from 'lucide-react';
import './FilterComponent.css';

const FilterComponent = ({ filters, selectedFilters, onChange, onClear }) => {
  const handleFilterChange = (filterKey, value) => {
    onChange(filterKey, value);
  };

  const isAnyFilterActive = Object.values(selectedFilters).some(value => value !== '');

  return (
    <div className="filter-component">
      <div className="filter-header">
        <div className="filter-title">
          <Filter size={16} />
          <span>Filters</span>
        </div>
        {isAnyFilterActive && (
          <button className="clear-filters" onClick={onClear}>
            <X size={14} />
            Clear All
          </button>
        )}
      </div>

      <div className="filter-content">
        {filters.map((filter) => (
          <div key={filter.key} className="filter-group">
            <label className="filter-label">{filter.label}</label>
            {filter.type === 'select' ? (
              <select
                value={selectedFilters[filter.key] || ''}
                onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                className="filter-select"
              >
                <option value="">{filter.placeholder || 'All'}</option>
                {filter.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : filter.type === 'date' ? (
              <input
                type="date"
                value={selectedFilters[filter.key] || ''}
                onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                className="filter-date"
              />
            ) : (
              <input
                type="text"
                value={selectedFilters[filter.key] || ''}
                onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                placeholder={filter.placeholder}
                className="filter-input"
              />
            )}
          </div>
        ))}
      </div>

      {isAnyFilterActive && (
        <div className="active-filters">
          <div className="active-filters-title">Active Filters:</div>
          <div className="filter-tags">
            {Object.entries(selectedFilters).map(([key, value]) => {
              if (!value) return null;
              const filterConfig = filters.find(f => f.key === key);
              const label = filterConfig?.options?.find(o => o.value === value)?.label || value;
              
              return (
                <div key={key} className="filter-tag">
                  <span>{filterConfig.label}: {label}</span>
                  <button 
                    onClick={() => handleFilterChange(key, '')}
                    className="remove-filter"
                  >
                    <X size={12} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;