import React, { useState } from 'react';
import './EditProfileForm.css';

function EditProfileForm() {
  const [profileData, setProfileData] = useState({
    businessName: 'Tech Innovations Inc.',
    email: 'contact@techinnovations.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Street, Tech City, TC 12345',
    businessType: 'Technology Services',
    website: 'www.techinnovations.com',
    taxId: '',
    socialLinks: {
      linkedin: '',
      twitter: '',
      facebook: ''
    }
  });

  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value
      }
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Validate and submit profile data
    console.log('Updating Profile:', profileData);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Validate passwords
    if (password.newPassword !== password.confirmPassword) {
      alert('New passwords do not match');
      return;
    }

    // Submit password change
    console.log('Changing Password');
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Business Profile</h2>

      {/* Business Profile Section */}
      <form onSubmit={handleProfileSubmit} className="profile-form">
        <div className="form-section">
          <h3>Business Information</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label>Business Name</label>
              <input
                type="text"
                name="businessName"
                value={profileData.businessName}
                onChange={handleProfileChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Business Type</label>
              <input
                type="text"
                name="businessType"
                value={profileData.businessType}
                onChange={handleProfileChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleProfileChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Business Address</label>
            <textarea
              name="address"
              value={profileData.address}
              onChange={handleProfileChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Website</label>
              <input
                type="url"
                name="website"
                value={profileData.website}
                onChange={handleProfileChange}
              />
            </div>

            <div className="form-group">
              <label>Tax ID</label>
              <input
                type="text"
                name="taxId"
                value={profileData.taxId}
                onChange={handleProfileChange}
              />
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="form-section">
          <h3>Social Links</h3>
          <div className="form-row">
            <div className="form-group">
              <label>LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                value={profileData.socialLinks.linkedin}
                onChange={handleSocialLinkChange}
                placeholder="LinkedIn Profile URL"
              />
            </div>

            <div className="form-group">
              <label>Twitter</label>
              <input
                type="url"
                name="twitter"
                value={profileData.socialLinks.twitter}
                onChange={handleSocialLinkChange}
                placeholder="Twitter Profile URL"
              />
            </div>

            <div className="form-group">
              <label>Facebook</label>
              <input
                type="url"
                name="facebook"
                value={profileData.socialLinks.facebook}
                onChange={handleSocialLinkChange}
                placeholder="Facebook Profile URL"
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Update Profile
          </button>
        </div>
      </form>

      {/* Password Change Section */}
      <form onSubmit={handlePasswordSubmit} className="password-form">
        <div className="form-section">
          <h3>Change Password</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={password.currentPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={password.newPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={password.confirmPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Change Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfileForm;