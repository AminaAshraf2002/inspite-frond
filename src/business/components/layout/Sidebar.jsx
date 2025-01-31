import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/business' },
    { id: 'Listings', label: 'My Listings', icon: '📋', path: '/business/listings' },
    { id: 'analytics', label: 'Sales Analytics', icon: '📈', path: '/business/sales-analytics' },
    { id: 'inquiries', label: 'Inquiries', icon: '📧', path: '/business/inquiries' },
    { id: 'settings', label: 'Profile Settings', icon: '⚙️', path: '/business/profile-settings' }
  ];

  const handleLogout = () => {
    // Perform logout actions (e.g., clearing authentication state)
    navigate('/'); // Redirect to home
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>EBNBIZNET</h1>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className={`sidebar-menu-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => setActiveMenu(item.id)}
          >
            <span className="sidebar-menu-icon">{item.icon}</span>
            <span className="sidebar-menu-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
