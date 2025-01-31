import React, { useState } from 'react';
import './AddListingForm.css';

function AddListingForm() {
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    serviceType: '',
    keywords: '',
    images: []
  });

  // Dropdown options
  const categories = [
    'Technology', 
    'Marketing', 
    'Design', 
    'Consulting', 
    'Writing', 
    'Photography'
  ];

  const serviceTypes = [
    'Digital Service', 
    'Physical Product', 
    'Consultation', 
    'Subscription'
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      images: files
    }));
  };

  // Remove uploaded image
  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      images: newImages
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!formData.title || !formData.category || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }

    // Prepare form data for submission
    const submissionData = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'images') {
        formData.images.forEach(image => {
          submissionData.append('images', image);
        });
      } else {
        submissionData.append(key, formData[key]);
      }
    });

    // TODO: Replace with actual API call
    console.log('Submitting listing:', Object.fromEntries(submissionData));
    
    // Reset form after submission
    setFormData({
      title: '',
      category: '',
      description: '',
      price: '',
      serviceType: '',
      keywords: '',
      images: []
    });
  };

  return (
    <div className="add-listing-form-container">
      <h1>Create New Listing</h1>
      <form onSubmit={handleSubmit} className="add-listing-form">
        {/* Basic Information Section */}
        <div className="form-section">
          <h2>Basic Information</h2>
          <div className="form-group">
            <label htmlFor="title">Listing Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter listing title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Provide a detailed description of your service/product"
              required
            />
          </div>
        </div>

        {/* Pricing and Service Details */}
        <div className="form-section">
          <h2>Pricing and Service Details</h2>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Enter price"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="serviceType">Service Type</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Service Type</option>
              {serviceTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Details */}
        <div className="form-section">
          <h2>Additional Information</h2>
          <div className="form-group">
            <label htmlFor="keywords">Keywords</label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
              placeholder="Enter keywords separated by commas"
            />
            <small>Help customers find your listing easier</small>
          </div>

          <div className="form-group">
            <label htmlFor="images">Upload Images</label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
            />
            {formData.images.length > 0 && (
              <div className="uploaded-images">
                {formData.images.map((file, index) => (
                  <div key={index} className="uploaded-image">
                    <span>{file.name}</span>
                    <button 
                      type="button"
                      onClick={() => removeImage(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button 
            type="submit" 
            className="submit-button"
          >
            Create Listing
          </button>
          <button 
            type="button" 
            className="cancel-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddListingForm;