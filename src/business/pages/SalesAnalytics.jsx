import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import './SalesAnalytics.css';

function SalesAnalytics() {
  const [salesData, setSalesData] = useState({
    monthlySales: [
      { month: 'January', revenue: 45000, orders: 50 },
      { month: 'February', revenue: 52000, orders: 55 },
      { month: 'March', revenue: 48000, orders: 48 },
      { month: 'April', revenue: 55000, orders: 60 }
    ],
    topProducts: [
      { 
        name: 'Digital Marketing Package', 
        revenue: 25000, 
        sales: 30,
        category: 'Marketing'
      },
      { 
        name: 'Web Development Service', 
        revenue: 20000, 
        sales: 25,
        category: 'Technology'
      }
    ],
    metrics: {
      totalRevenue: 200000,
      averageOrderValue: 4000,
      conversionRate: 3.5
    }
  });

  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-content">
          <div className="sales-analytics-page">
            <div className="page-header">
              <h1>Sales Analytics</h1>
              <div className="period-selector">
                <button 
                  className={selectedPeriod === 'monthly' ? 'active' : ''}
                  onClick={() => setSelectedPeriod('monthly')}
                >
                  Monthly
                </button>
                <button 
                  className={selectedPeriod === 'quarterly' ? 'active' : ''}
                  onClick={() => setSelectedPeriod('quarterly')}
                >
                  Quarterly
                </button>
                <button 
                  className={selectedPeriod === 'yearly' ? 'active' : ''}
                  onClick={() => setSelectedPeriod('yearly')}
                >
                  Yearly
                </button>
              </div>
            </div>

            <div className="sales-overview">
              <div className="sales-metric-card">
                <h3>Total Revenue</h3>
                <p>${salesData.metrics.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="sales-metric-card">
                <h3>Avg. Order Value</h3>
                <p>${salesData.metrics.averageOrderValue.toLocaleString()}</p>
              </div>
              <div className="sales-metric-card">
                <h3>Conversion Rate</h3>
                <p>{salesData.metrics.conversionRate}%</p>
              </div>
            </div>

            <div className="sales-tables">
              <div className="monthly-sales-table">
                <h2>Monthly Sales</h2>
                <table className="business-table">
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Revenue</th>
                      <th>Orders</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.monthlySales.map((month, index) => (
                      <tr key={index}>
                        <td>{month.month}</td>
                        <td>${month.revenue.toLocaleString()}</td>
                        <td>{month.orders}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="top-products-table">
                <h2>Top Products</h2>
                <table className="business-table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Revenue</th>
                      <th>Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.topProducts.map((product, index) => (
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>${product.revenue.toLocaleString()}</td>
                        <td>{product.sales}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesAnalytics;