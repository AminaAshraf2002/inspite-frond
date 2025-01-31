import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import StatisticsCard from '../components/dashboard/StatisticsCard';
import ListingsTable from '../components/dashboard/ListingsTable';
import InquiriesTable from '../components/dashboard/InquiriesTable';
import './Dashboard.css';


function Dashboard() {
  // Mock data (will be replaced with actual API calls)
  const dashboardData = {
    statistics: {
      totalListings: 5,
      totalInquiries: 12,
      totalRevenue: 45000,
      conversionRate: 45
    },
    listings: [
      {
        id: 1,
        name: 'Digital Marketing Services',
        category: 'Marketing',
        status: 'Active',
        views: 1245,
        lastUpdated: '2024-01-15'
      },
      {
        id: 2,
        name: 'Web Development Solutions',
        category: 'Technology',
        status: 'Active',
        views: 897,
        lastUpdated: '2024-01-10'
      }
    ],
    inquiries: [
      {
        id: 1,
        customerName: 'John Doe',
        service: 'Web Development Services',
        date: '2024-01-20',
        status: 'Pending'
      },
      {
        id: 2,
        customerName: 'Jane Smith',
        service: 'Digital Marketing Package',
        date: '2024-01-18',
        status: 'Reviewed'
      }
    ]
  };

  return (
    <div className="business-dashboard-container">
      <Sidebar />
      <div className="business-dashboard-main">
        <div className="business-dashboard-content">
          <StatisticsCard statistics={dashboardData.statistics} />
          <div className="business-dashboard-tables">
            <ListingsTable listings={dashboardData.listings} />
            <InquiriesTable inquiries={dashboardData.inquiries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;