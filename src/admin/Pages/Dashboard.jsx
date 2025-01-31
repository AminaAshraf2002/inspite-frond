import React, { useState, useEffect } from 'react';
import { 
  Users, 
  DollarSign, 
  ShoppingBag, 
  Activity,
  TrendingUp,
  TrendingDown 
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  // Sample data - Replace with API calls in production
  const [dashboardData, setDashboardData] = useState({
    stats: {
      totalBusinesses: 1250,
      monthlyRevenue: 52000,
      activeListings: 980,
      pendingApprovals: 45
    },
    recentTransactions: [
      { id: 1, business: "Tech Solutions Inc", amount: 1200, status: "completed", date: "2024-01-25" },
      { id: 2, business: "Global Trade LLC", amount: 850, status: "pending", date: "2024-01-24" },
      { id: 3, business: "Green Energy Co", amount: 2300, status: "completed", date: "2024-01-23" }
    ],
    recentActivities: [
      { id: 1, type: "registration", business: "Digital Marketing Pro", time: "2 hours ago" },
      { id: 2, type: "approval", business: "Tech Innovators", time: "3 hours ago" },
      { id: 3, type: "transaction", business: "Global Solutions", time: "5 hours ago" }
    ]
  });

  return (
    <div className="dashboard-containers">
      <section className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <div className="date-filter">
          <select defaultValue="week">
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon businesses">
              <Users size={24} />
            </div>
            <div className="stat-trend positive">
              <TrendingUp size={16} />
              <span>12%</span>
            </div>
          </div>
          <div className="stat-content">
            <h3>Total Businesses</h3>
            <p className="stat-value">{dashboardData.stats.totalBusinesses}</p>
            <p className="stat-comparison">+150 from last month</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon revenue">
              <DollarSign size={24} />
            </div>
            <div className="stat-trend positive">
              <TrendingUp size={16} />
              <span>8%</span>
            </div>
          </div>
          <div className="stat-content">
            <h3>Monthly Revenue</h3>
            <p className="stat-value">${dashboardData.stats.monthlyRevenue}</p>
            <p className="stat-comparison">+$4,000 from last month</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon listings">
              <ShoppingBag size={24} />
            </div>
            <div className="stat-trend positive">
              <TrendingUp size={16} />
              <span>5%</span>
            </div>
          </div>
          <div className="stat-content">
            <h3>Active Listings</h3>
            <p className="stat-value">{dashboardData.stats.activeListings}</p>
            <p className="stat-comparison">+45 from last month</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon approvals">
              <Activity size={24} />
            </div>
            <div className="stat-trend negative">
              <TrendingDown size={16} />
              <span>2%</span>
            </div>
          </div>
          <div className="stat-content">
            <h3>Pending Approvals</h3>
            <p className="stat-value">{dashboardData.stats.pendingApprovals}</p>
            <p className="stat-comparison">-3 from last month</p>
          </div>
        </div>
      </section>

      <section className="dashboard-content">
        <div className="transactions-section">
          <div className="section-header">
            <h2>Recent Transactions</h2>
            <button className="view-all">View All</button>
          </div>
          <div className="transactions-list">
            {dashboardData.recentTransactions.map(transaction => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-info">
                  <h4>{transaction.business}</h4>
                  <span className="transaction-date">{transaction.date}</span>
                </div>
                <div className="transaction-amount">
                  <span className="amount">${transaction.amount}</span>
                  <span className={`status ${transaction.status}`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="activities-section">
          <div className="section-header">
            <h2>Recent Activities</h2>
            <button className="view-all">View All</button>
          </div>
          <div className="activities-list">
            {dashboardData.recentActivities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {activity.type === 'registration' && <Users size={16} />}
                  {activity.type === 'approval' && <Activity size={16} />}
                  {activity.type === 'transaction' && <DollarSign size={16} />}
                </div>
                <div className="activity-info">
                  <h4>{activity.business}</h4>
                  <p>New {activity.type}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;