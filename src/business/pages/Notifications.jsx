import React, { useState } from 'react';
import SearchBar from '../components/common/SearchBar';
import './Notifications.css';

function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'inquiry',
      title: 'New Inquiry Received',
      message: 'John Doe is interested in Web Development Services',
      date: '2024-01-22',
      read: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'sale',
      title: 'New Sale',
      message: 'Digital Marketing Package sold to Jane Smith',
      date: '2024-01-20',
      read: false,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'system',
      title: 'Profile Updated',
      message: 'Your business profile has been successfully updated',
      date: '2024-01-18',
      read: true,
      priority: 'low'
    },
    {
      id: 4,
      type: 'listing',
      title: 'Listing Approved',
      message: 'Your Web Design Services listing is now live',
      date: '2024-01-15',
      read: true,
      priority: 'low'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  // Handle notification search
  const handleSearch = ({ query }) => {
    console.log('Notification Search:', query);
  };

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    );
  };

  // Delete notification
  const deleteNotification = (id) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    );
  };

  // Bulk actions
  const markSelectedAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => 
        selectedNotifications.includes(notification.id)
          ? { ...notification, read: true }
          : notification
      )
    );
    setSelectedNotifications([]);
  };

  const deleteSelectedNotifications = () => {
    setNotifications(prev => 
      prev.filter(notification => 
        !selectedNotifications.includes(notification.id)
      )
    );
    setSelectedNotifications([]);
  };

  // Toggle selection of a notification
  const toggleNotificationSelection = (id) => {
    setSelectedNotifications(prev => 
      prev.includes(id)
        ? prev.filter(selectedId => selectedId !== id)
        : [...prev, id]
    );
  };

  // Filter notifications
  const filteredNotifications = notifications.filter(notification => 
    filter === 'all' || 
    (filter === 'unread' && !notification.read) ||
    notification.type === filter
  );

  // Notification type filters
  const notificationFilters = [
    { value: 'all', label: 'All Notifications' },
    { value: 'unread', label: 'Unread' },
    { value: 'inquiry', label: 'Inquiries' },
    { value: 'sale', label: 'Sales' },
    { value: 'system', label: 'System' },
    { value: 'listing', label: 'Listings' }
  ];

  return (
    <div className="notifications-page">
      
      <div className="notifications-content">
        <div className="notifications-header">
          <h1>Notifications</h1>
          <div className="notifications-actions">
            <SearchBar
              placeholder="Search notifications..."
              onSearch={handleSearch}
              filterOptions={notificationFilters.map(f => f.value)}
              onFilterChange={setFilter}
            />
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedNotifications.length > 0 && (
          <div className="bulk-actions">
            <button 
              className="mark-read-button"
              onClick={markSelectedAsRead}
            >
              Mark Selected as Read
            </button>
            <button 
              className="delete-button"
              onClick={deleteSelectedNotifications}
            >
              Delete Selected
            </button>
          </div>
        )}

        {/* Notifications List */}
        <div className="notifications-list">
          {filteredNotifications.length === 0 ? (
            <div className="no-notifications">
              No notifications to display
            </div>
          ) : (
            filteredNotifications.map(notification => (
              <div 
                key={notification.id} 
                className={`notification-item ${notification.read ? 'read' : 'unread'}`}
              >
                {/* Checkbox for selection */}
                <input 
                  type="checkbox"
                  checked={selectedNotifications.includes(notification.id)}
                  onChange={() => toggleNotificationSelection(notification.id)}
                  className="notification-checkbox"
                />

                {/* Notification Details */}
                <div className="notification-content">
                  <div className={`notification-badge ${notification.type}`}>
                    {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                  </div>
                  <div className="notification-details">
                    <h3>{notification.title}</h3>
                    <p>{notification.message}</p>
                    <span className="notification-date">{notification.date}</span>
                  </div>
                </div>

                {/* Notification Actions */}
                <div className="notification-actions">
                  {!notification.read && (
                    <button 
                      className="mark-read-button"
                      onClick={() => markAsRead(notification.id)}
                    >
                      Mark as Read
                    </button>
                  )}
                  <button 
                    className="delete-button"
                    onClick={() => deleteNotification(notification.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default NotificationsPage;