// components/cards/StatCard.js
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatCard.css';

const StatCard = ({ title, value, icon: Icon, trend, type }) => {
  const isTrendUp = parseFloat(trend) > 0;

  return (
    <div className={`stat-card ${type}`}>
      <div className="stat-card-header">
        <div className="stat-icon">
          <Icon size={24} />
        </div>
        <div className={`trend ${isTrendUp ? 'positive' : 'negative'}`}>
          {isTrendUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{trend}%</span>
        </div>
      </div>
      <div className="stat-content">
        <h3>{title}</h3>
        <p className="stat-value">{value}</p>
        <p className="stat-period">vs previous month</p>
      </div>
    </div>
  );
};

export default StatCard;