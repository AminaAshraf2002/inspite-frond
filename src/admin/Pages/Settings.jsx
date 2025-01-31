import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  Bell,
  Mail,
  Shield,
  CreditCard,
  Globe,
  Save,
  Users,
  Building2,
  Sliders
} from 'lucide-react';
import './Settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    newsletterUpdates: false,
    securityAlerts: true
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    loginNotifications: true,
    ipRestriction: false
  });

  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    debugMode: false,
    automaticBackup: true,
    dataRetentionDays: 90
  });

  const handleSettingChange = (category, setting) => {
    switch(category) {
      case 'notifications':
        setNotificationSettings(prev => ({
          ...prev,
          [setting]: !prev[setting]
        }));
        break;
      case 'security':
        setSecuritySettings(prev => ({
          ...prev,
          [setting]: !prev[setting]
        }));
        break;
      case 'system':
        setSystemSettings(prev => ({
          ...prev,
          [setting]: !prev[setting]
        }));
        break;
      default:
        break;
    }
  };

  const renderGeneralSettings = () => (
    <div className="settings-section">
      <div className="section-header">
        <h2>Platform Settings</h2>
        <p>Configure general platform settings and preferences</p>
      </div>

      <div className="settings-group">
        <h3>System Configuration</h3>
        <div className="setting-item">
          <div className="setting-info">
            <label>Maintenance Mode</label>
            <span className="setting-description">
              Enable maintenance mode to temporarily disable platform access
            </span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input
                type="checkbox"
                checked={systemSettings.maintenanceMode}
                onChange={() => handleSettingChange('system', 'maintenanceMode')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <label>Debug Mode</label>
            <span className="setting-description">
              Enable detailed error logging and debugging information
            </span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input
                type="checkbox"
                checked={systemSettings.debugMode}
                onChange={() => handleSettingChange('system', 'debugMode')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <label>Data Retention Period</label>
            <span className="setting-description">
              Set the number of days to retain system logs and activity data
            </span>
          </div>
          <div className="setting-control">
            <input
              type="number"
              value={systemSettings.dataRetentionDays}
              onChange={(e) => setSystemSettings(prev => ({
                ...prev,
                dataRetentionDays: parseInt(e.target.value)
              }))}
              className="number-input"
            />
            <span className="input-suffix">days</span>
          </div>
        </div>
      </div>

      <div className="settings-group">
        <h3>Regional Settings</h3>
        <div className="setting-item">
          <div className="setting-info">
            <label>Time Zone</label>
            <span className="setting-description">
              Select the default time zone for the platform
            </span>
          </div>
          <div className="setting-control">
            <select className="select-input">
              <option value="UTC">UTC (Universal Time Coordinated)</option>
              <option value="EST">EST (Eastern Standard Time)</option>
              <option value="PST">PST (Pacific Standard Time)</option>
            </select>
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <label>Date Format</label>
            <span className="setting-description">
              Choose the default date format for display
            </span>
          </div>
          <div className="setting-control">
            <select className="select-input">
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="settings-section">
      <div className="section-header">
        <h2>Notification Preferences</h2>
        <p>Manage your notification and alert settings</p>
      </div>

      <div className="settings-group">
        <h3>Email Notifications</h3>
        <div className="setting-item">
          <div className="setting-info">
            <label>System Alerts</label>
            <span className="setting-description">
              Receive important system alerts and updates via email
            </span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input
                type="checkbox"
                checked={notificationSettings.emailNotifications}
                onChange={() => handleSettingChange('notifications', 'emailNotifications')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <label>Newsletter Updates</label>
            <span className="setting-description">
              Receive monthly newsletter and platform updates
            </span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input
                type="checkbox"
                checked={notificationSettings.newsletterUpdates}
                onChange={() => handleSettingChange('notifications', 'newsletterUpdates')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="settings-group">
        <h3>Security Notifications</h3>
        <div className="setting-item">
          <div className="setting-info">
            <label>Security Alerts</label>
            <span className="setting-description">
              Get notified about security-related events and suspicious activities
            </span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input
                type="checkbox"
                checked={notificationSettings.securityAlerts}
                onChange={() => handleSettingChange('notifications', 'securityAlerts')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="settings-section">
      <div className="section-header">
        <h2>Security Settings</h2>
        <p>Configure security preferences and access controls</p>
      </div>

      <div className="settings-group">
        <h3>Authentication</h3>
        <div className="setting-item">
          <div className="setting-info">
            <label>Two-Factor Authentication</label>
            <span className="setting-description">
              Require two-factor authentication for all admin accounts
            </span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input
                type="checkbox"
                checked={securitySettings.twoFactorAuth}
                onChange={() => handleSettingChange('security', 'twoFactorAuth')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <label>IP Restriction</label>
            <span className="setting-description">
              Restrict admin access to specific IP addresses
            </span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input
                type="checkbox"
                checked={securitySettings.ipRestriction}
                onChange={() => handleSettingChange('security', 'ipRestriction')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="settings-group">
        <h3>Session Management</h3>
        <div className="setting-item">
          <div className="setting-info">
            <label>Session Timeout</label>
            <span className="setting-description">
              Set the session timeout duration for admin users
            </span>
          </div>
          <div className="setting-control">
            <select className="select-input">
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="settings-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Settings</h1>
          <p className="header-description">
            Manage platform settings, notifications, and security preferences
          </p>
        </div>
      </div>

      <div className="settings-container">
        <div className="settings-sidebar">
          <button
            className={`sidebar-item ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            <Sliders size={20} />
            <span>General Settings</span>
          </button>
          <button
            className={`sidebar-item ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={20} />
            <span>Notifications</span>
          </button>
          <button
            className={`sidebar-item ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Shield size={20} />
            <span>Security</span>
          </button>
        </div>

        <div className="settings-content">
          {activeTab === 'general' && renderGeneralSettings()}
          {activeTab === 'notifications' && renderNotificationSettings()}
          {activeTab === 'security' && renderSecuritySettings()}

          <div className="settings-actions">
            <button className="save-button">
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;