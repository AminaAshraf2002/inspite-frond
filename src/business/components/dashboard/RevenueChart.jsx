import React from 'react';
import './RevenueChart.css';

const RevenueChart = ({ data }) => {
  // Calculate max revenue for scaling
  const maxRevenue = Math.max(...data.map(item => item.revenue));

  return (
    <div className="revenue-chart">
      <div className="chart-container">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="chart-bar"
            style={{
              height: `${(item.revenue / maxRevenue) * 100}%`
            }}
          >
            <span className="bar-tooltip">
              ${item.revenue.toLocaleString()}
            </span>
            <span className="bar-label">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;