import React from 'react';
import './StatisticsCard.css';

function StatisticsCard({ statistics }) {
  // Default statistics structure if not provided
  const defaultStats = {
    totalListings: 0,
    totalInquiries: 0,
    totalRevenue: 0,
    conversionRate: 0,
    newCustomers: 0,
    activeListings: 0
  };

  // Merge provided statistics with defaults
  const stats = { ...defaultStats, ...statistics };

  // Statistics card items configuration
  const statisticsItems = [
    {
      label: 'Total Listings',
      value: stats.totalListings,
      icon: '📋',
      trend: stats.totalListings > 0 ? 15 : 0
    },
    {
      label: 'Total Inquiries',
      value: stats.totalInquiries,
      icon: '📧',
      trend: stats.totalInquiries > 0 ? 20 : 0
    },
    {
      label: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: '💰',
      trend: stats.totalRevenue > 0 ? 25 : 0
    },
    {
      label: 'Conversion Rate',
      value: `${stats.conversionRate}%`,
      icon: '📈',
      trend: stats.conversionRate > 0 ? 10 : 0
    },
    {
      label: 'New Customers',
      value: stats.newCustomers,
      icon: '👥',
      trend: stats.newCustomers > 0 ? 30 : 0
    },
    {
      label: 'Active Listings',
      value: stats.activeListings,
      icon: '🌟',
      trend: stats.activeListings > 0 ? 12 : 0
    }
  ];

  return (
    <div className="statistics-container">
      {statisticsItems.map((stat, index) => (
        <div key={index} className="statistic-card">
          <div className="statistic-header">
            <span className="statistic-icon">{stat.icon}</span>
            <h3 className="statistic-label">{stat.label}</h3>
          </div>
          <div className="statistic-content">
            <span className="statistic-value">{stat.value}</span>
            {stat.trend > 0 && (
              <span className={`statistic-trend ${stat.trend > 0 ? 'positive' : 'negative'}`}>
                {stat.trend > 0 ? '▲' : '▼'} {stat.trend}%
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatisticsCard;