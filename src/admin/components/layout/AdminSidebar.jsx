import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  ShoppingBag, 
  FileText, 
  Settings,
  DollarSign,
  BarChart2,
  MessageSquare
} from 'lucide-react';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/admin', icon: Home, label: 'Dashboard' },
    { path: '/admin/business-management', icon: ShoppingBag, label: 'Businesses' },
    { path: '/admin/approvals', icon: FileText, label: 'Approvals' },
    { path: '/admin/transactions', icon: DollarSign, label: 'Transactions' },
    { path: '/admin/reports', icon: BarChart2, label: 'Reports' },
    
    { path: '/admin/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">EBNBIZNET</h1>
        <span className="sidebar-subtitle">Admin Panel</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <img 
            src="/api/placeholder/32/32" 
            alt="Admin" 
            className="user-avatar" 
          />
          <div className="user-details">
            <span className="user-name">Admin User</span>
            <span className="user-role">Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;