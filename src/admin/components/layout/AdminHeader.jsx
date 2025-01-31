import React, { useState } from 'react';
import { Bell, Search, Menu, Settings, LogOut } from 'lucide-react';
import './AdminHeader.css';

const AdminHeader = ({ toggleSidebar }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "New Business Registration",
      message: "Tech Solutions Inc. has registered",
      time: "5 minutes ago"
    },
    {
      id: 2,
      title: "New Transaction",
      message: "Payment received from Global Trade",
      time: "10 minutes ago"
    },
    {
      id: 3,
      title: "System Update",
      message: "System maintenance scheduled",
      time: "1 hour ago"
    }
  ];

  return (
    <header className="admin-header">
      <div className="header-left">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        
        <div className="search-container">
          <Search className="search-icon" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        <div className="notifications-container">
          <button 
            className="notification-button"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>

          {showNotifications && (
            <div className="notifications-dropdown">
              <div className="notifications-header">
                <h3>Notifications</h3>
                <button className="mark-all-read">Mark all as read</button>
              </div>
              
              <div className="notifications-list">
                {notifications.map(notification => (
                  <div key={notification.id} className="notification-item">
                    <h4>{notification.title}</h4>
                    <p>{notification.message}</p>
                    <span className="notification-time">{notification.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="profile-container">
          <button 
            className="profile-button"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <img 
              src="/api/placeholder/32/32" 
              alt="Admin" 
              className="profile-image"
            />
            <span className="profile-name">Admin User</span>
          </button>

          {showProfileMenu && (
            <div className="profile-dropdown">
              <div className="profile-header">
                <img 
                  src="/api/placeholder/32/32" 
                  alt="Admin" 
                  className="profile-image-large"
                />
                <div className="profile-info">
                  <h4>Admin User</h4>
                  <p>admin@ebnbiznet.com</p>
                </div>
              </div>
              
              <div className="profile-menu">
                <button className="profile-menu-item">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
                <button className="profile-menu-item">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;