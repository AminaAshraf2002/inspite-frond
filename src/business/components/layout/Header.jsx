import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [userInfo] = useState({
    name: 'John Doe',
    businessName: 'Tech Innovations Inc.'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <header className="main-header">
      <div className="header-user-info">
        <h2>Welcome, {userInfo.name}</h2>
        <p>{userInfo.businessName}</p>
      </div>
      
      <div className="header-actions">
        <div className="header-datetime">
          <span className="header-date">{formatDate(currentDateTime)}</span>
          <span className="header-time">{formatTime(currentDateTime)}</span>
        </div>
        
        <div className="header-notifications">
          <button className="notification-button">
            Notifications
            <span className="notification-badge">3</span>
          </button>
          
          <div className="user-avatar">
            <img 
              src="/user-avatar.png" 
              alt="User Avatar" 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;