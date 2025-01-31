import React, { useState } from 'react';
import { 
  BarChart as BarChartIcon, 
  Download, 
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  Building2,
  Filter,
  FileText
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import './ReportsAnalytics.css';

const ReportsAnalytics = () => {
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: ''
  });

  const [selectedReport, setSelectedReport] = useState('revenue');

  // Sample data - In production, this would come from your API
  const revenueData = [
    { month: 'Jan', revenue: 45000, transactions: 234, profit: 15000 },
    { month: 'Feb', revenue: 52000, transactions: 256, profit: 18000 },
    { month: 'Mar', revenue: 49000, transactions: 245, profit: 16500 },
    { month: 'Apr', revenue: 58000, transactions: 278, profit: 20000 },
    { month: 'May', revenue: 55000, transactions: 267, profit: 19000 },
    { month: 'Jun', revenue: 62000, transactions: 289, profit: 22000 }
  ];

  const businessCategories = [
    { name: 'Technology', value: 35 },
    { name: 'Retail', value: 25 },
    { name: 'Services', value: 20 },
    { name: 'Manufacturing', value: 15 },
    { name: 'Others', value: 5 }
  ];

  const COLORS = ['#4f46e5', '#06b6d4', '#10b981', '#8b5cf6', '#f59e0b'];

  const downloadReport = (type) => {
    // Implementation for report download
    console.log('Downloading report:', type);
  };

  const renderOverviewCards = () => (
    <div className="overview-cards">
      <div className="metric-card">
        <div className="metric-icon revenue">
          <DollarSign size={24} />
        </div>
        <div className="metric-details">
          <h3>Total Revenue</h3>
          <p className="metric-value">$321,500</p>
          <div className="metric-trend positive">
            <TrendingUp size={16} />
            <span>12.5% vs last month</span>
          </div>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon users">
          <Users size={24} />
        </div>
        <div className="metric-details">
          <h3>Active Businesses</h3>
          <p className="metric-value">2,845</p>
          <div className="metric-trend positive">
            <TrendingUp size={16} />
            <span>8.2% vs last month</span>
          </div>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon businesses">
          <Building2 size={24} />
        </div>
        <div className="metric-details">
          <h3>New Registrations</h3>
          <p className="metric-value">145</p>
          <div className="metric-trend positive">
            <TrendingUp size={16} />
            <span>5.8% vs last month</span>
          </div>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon transactions">
          <BarChartIcon size={24} />
        </div>
        <div className="metric-details">
          <h3>Total Transactions</h3>
          <p className="metric-value">15,234</p>
          <div className="metric-trend positive">
            <TrendingUp size={16} />
            <span>15.3% vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="reports-analytics-page">
      <div className="page-header">
        <div>
          <h1>Reports & Analytics</h1>
          <p className="header-description">
            Track business metrics, analyze trends, and generate detailed reports
          </p>
        </div>

        <div className="header-actions">
          <div className="date-range">
            <Calendar size={18} />
            <input 
              type="date" 
              value={dateRange.startDate}
              onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
              className="date-input"
            />
            <span>to</span>
            <input 
              type="date" 
              value={dateRange.endDate}
              onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
              className="date-input"
            />
          </div>

          <button className="action-button">
            <Download size={18} />
            Export Report
          </button>
        </div>
      </div>

      {renderOverviewCards()}

      <div className="charts-section">
        <div className="chart-container revenue-chart">
          <div className="chart-header">
            <h2>Revenue Overview</h2>
            <div className="chart-actions">
              <select 
                value={selectedReport} 
                onChange={(e) => setSelectedReport(e.target.value)}
                className="report-select"
              >
                <option value="revenue">Revenue</option>
                <option value="transactions">Transactions</option>
                <option value="profit">Profit</option>
              </select>
              <button className="chart-download">
                <Download size={16} />
              </button>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey={selectedReport} 
                stroke="#4f46e5" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container category-chart">
          <div className="chart-header">
            <h2>Business Categories</h2>
            <button className="chart-download">
              <Download size={16} />
            </button>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={businessCategories}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {businessCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="reports-section">
        <div className="section-header">
          <h2>Available Reports</h2>
          <button className="filter-button">
            <Filter size={16} />
            Filter Reports
          </button>
        </div>

        <div className="reports-grid">
          <div className="report-card">
            <div className="report-icon">
              <FileText size={24} />
            </div>
            <div className="report-details">
              <h3>Monthly Revenue Report</h3>
              <p>Detailed breakdown of revenue streams and growth metrics</p>
              <button onClick={() => downloadReport('revenue')} className="download-button">
                <Download size={16} />
                Download
              </button>
            </div>
          </div>

          <div className="report-card">
            <div className="report-icon">
              <Users size={24} />
            </div>
            <div className="report-details">
              <h3>Business Growth Report</h3>
              <p>Analysis of new registrations and business activities</p>
              <button onClick={() => downloadReport('growth')} className="download-button">
                <Download size={16} />
                Download
              </button>
            </div>
          </div>

          <div className="report-card">
            <div className="report-icon">
              <BarChartIcon size={24} />
            </div>
            <div className="report-details">
              <h3>Transaction Analytics</h3>
              <p>Comprehensive view of transaction patterns and trends</p>
              <button onClick={() => downloadReport('transactions')} className="download-button">
                <Download size={16} />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;