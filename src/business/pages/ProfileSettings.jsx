import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import './ProfileSettings.css'

function ProfileSettings() {
  const [profileData, setProfileData] = useState({
    businessName: 'Tech Innovations Inc.',
    email: 'john.doe@techinnovations.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Street, Tech City, TC 12345',
    businessType: 'Technology Services',
    membershipTier: 'Prime B'
  });

  const [securitySettings, setSecuritySettings] = useState({
    enableTwoFactor: false,
    notificationPreferences: {
      emailNotifications: true,
      smsNotifications: false
    }
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Implement profile update logic
    console.log('Updating profile', profileData);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Implement password change logic
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert('New passwords do not match');
      return;
    }
    console.log('Changing password');
  };

  const handleSecuritySettingsUpdate = () => {
    // Implement security settings update logic
    console.log('Updating security settings', securitySettings);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-content">
          <div className="profile-settings-page">
            <h1>Profile Settings</h1>

            {/* Business Profile Section */}
            <div className="settings-section">
              <h2>Business Profile</h2>
              <form onSubmit={handleProfileUpdate}>
                <div className="form-group">
                  <label>Business Name</label>
                  <input 
                    type="text" 
                    value={profileData.businessName}
                    onChange={(e) => setProfileData({
                      ...profileData, 
                      businessName: e.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={profileData.email}
                    onChange={(e) => setProfileData({
                      ...profileData, 
                      email: e.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input 
                    type="tel" 
                    value={profileData.phone}
                    onChange={(e) => setProfileData({
                      ...profileData, 
                      phone: e.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea 
                    value={profileData.address}
                    onChange={(e) => setProfileData({
                      ...profileData, 
                      address: e.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Business Type</label>
                  <input 
                    type="text" 
                    value={profileData.businessType}
                    onChange={(e) => setProfileData({
                      ...profileData, 
                      businessType: e.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Membership Tier</label>
                  <input 
                    type="text" 
                    value={profileData.membershipTier} 
                    disabled 
                  />
                </div>
                <button type="submit" className="update-button">
                  Update Profile
                </button>
              </form>
            </div>

            {/* Password Change Section */}
            <div className="settings-section">
              <h2>Change Password</h2>
              <form onSubmit={handlePasswordChange}>
                <div className="form-group">
                  <label>Current Password</label>
                  <input 
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({
                      ...passwordData, 
                      currentPassword: e.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input 
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({
                      ...passwordData, 
                      newPassword: e.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input 
                    type="password"
                    value={passwordData.confirmNewPassword}
                    onChange={(e) => setPasswordData({
                      ...passwordData, 
                      confirmNewPassword: e.target.value
                    })}
                  />
                </div>
                <button type="submit" className="update-button">
                  Change Password
                </button>
              </form>
            </div>

            {/* Security Settings Section */}
            <div className="settings-section">
              <h2>Security Settings</h2>
              <div className="form-group">
                <label>
                  <input 
                    type="checkbox"
                    checked={securitySettings.enableTwoFactor}
                    onChange={() => setSecuritySettings(prev => ({
                      ...prev,
                      enableTwoFactor: !prev.enableTwoFactor
                    }))}
                  />
                  Enable Two-Factor Authentication
                </label>
              </div>
              
              <div className="form-group">
                <h3>Notification Preferences</h3>
                <label>
                  <input 
                    type="checkbox"
                    checked={securitySettings.notificationPreferences.emailNotifications}
                    onChange={() => setSecuritySettings(prev => ({
                      ...prev,
                      notificationPreferences: {
                        ...prev.notificationPreferences,
                        emailNotifications: !prev.notificationPreferences.emailNotifications
                      }
                    }))}
                  />
                  Email Notifications
                </label>
                <label>
                  <input 
                    type="checkbox"
                    checked={securitySettings.notificationPreferences.smsNotifications}
                    onChange={() => setSecuritySettings(prev => ({
                      ...prev,
                      notificationPreferences: {
                        ...prev.notificationPreferences,
                        smsNotifications: !prev.notificationPreferences.smsNotifications
                      }
                    }))}
                  />
                  SMS Notifications
                </label>
              </div>

              <button 
                className="update-button"
                onClick={handleSecuritySettingsUpdate}
              >
                Update Security Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;