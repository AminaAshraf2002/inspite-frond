import React, { useState, useEffect } from 'react';
import './ListBusinessPage.css';
import { FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { createBusiness } from '../services/api/businessService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ListBusinessPage() {
    const navigate = useNavigate();
    const [businessData, setBusinessData] = useState({
        businessName: '',
        contactName: '',
        email: '',
        phone: '',
        industry: '',
        membershipCategory: '',
        description: '',
        websiteUrl: '',
        socialMediaLinks: {
            facebook: '',
            linkedin: '',
            twitter: ''
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const [files, setFiles] = useState({
        images: [],
        videos: []
    });

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const industries = [
        'Technology', 'Retail', 'Food & Beverage',
        'Manufacturing', 'Healthcare', 'Financial Services',
        'Education', 'Creative Services', 'Consulting',
        'Transportation'
    ];

    const membershipCategories = [
        {
            code: 'Prime A',
            name: 'Prime A',
            description: 'For businesses with annual turnover up to $50,000',
            commission: 5
        },
        {
            code: 'Prime B',
            name: 'Prime B',
            description: 'For businesses with annual turnover $50,001 - $250,000',
            commission: 4
        },
        {
            code: 'Prime C',
            name: 'Prime C',
            description: 'For businesses with annual turnover over $250,000',
            commission: 3
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('socialMediaLinks.')) {
            const linkType = name.split('.')[1];
            setBusinessData(prev => ({
                ...prev,
                socialMediaLinks: {
                    ...prev.socialMediaLinks,
                    [linkType]: value
                }
            }));
            return;
        }
        setBusinessData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileUpload = (e, fileType) => {
        const files = Array.from(e.target.files);
        if (fileType === 'images' && files.length > 5) {
            toast.error('Maximum 5 images allowed');
            return;
        }
        if (fileType === 'videos' && files.length > 2) {
            toast.error('Maximum 2 videos allowed');
            return;
        }
        setFiles(prev => ({
            ...prev,
            [fileType]: files
        }));
        toast.success(`${fileType} uploaded successfully`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            toast.error('Please login to submit a business listing');
            setTimeout(() => navigate('/login'), 2000);
            return;
        }

        try {
            setIsLoading(true);
            const formData = new FormData();

            // Add business data
            Object.keys(businessData).forEach(key => {
                if (key === 'socialMediaLinks') {
                    formData.append(key, JSON.stringify(businessData[key]));
                } else {
                    formData.append(key, businessData[key]);
                }
            });

            // Add files
            files.images.forEach(file => {
                formData.append('images', file);
            });
            files.videos.forEach(file => {
                formData.append('videos', file);
            });

            await createBusiness(token, formData);
            toast.success('Business listing submitted successfully!');
            setTimeout(() => navigate('/business'), 2000);

        } catch (error) {
            toast.error(error.message || 'Error submitting business listing');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="list-business-container">
            <ToastContainer position="top-right" autoClose={3000} />
            
            <section className="list-business-hero" data-aos="fade-up">
                <div className="hero-content">
                    <h1 className="list-business-title">List Your Business on EBNBIZNET</h1>
                    <p className="list-business-subtitle">Join our global platform and unlock new growth opportunities.</p>
                </div>
            </section>

            <form onSubmit={handleSubmit} className="business-form">
                <section className="form-section" data-aos="fade-left">
                    <h2 className="form-section-title">Business Details</h2>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Business Name</label>
                            <input 
                                type="text" 
                                name="businessName" 
                                value={businessData.businessName} 
                                onChange={handleChange} 
                                required 
                                placeholder="Enter your business name" 
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact Name</label>
                            <input 
                                type="text" 
                                name="contactName" 
                                value={businessData.contactName} 
                                onChange={handleChange} 
                                required 
                                placeholder="Enter contact person name" 
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={businessData.email} 
                                onChange={handleChange} 
                                required 
                                placeholder="Enter business email" 
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                value={businessData.phone} 
                                onChange={handleChange} 
                                required 
                                placeholder="Enter business phone" 
                            />
                        </div>
                        <div className="form-group">
                            <label>Industry</label>
                            <select 
                                name="industry" 
                                value={businessData.industry} 
                                onChange={handleChange} 
                                required
                            >
                                <option value="">Select Industry</option>
                                {industries.map(industry => (
                                    <option key={industry} value={industry}>{industry}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Website URL</label>
                            <input 
                                type="url" 
                                name="websiteUrl" 
                                value={businessData.websiteUrl} 
                                onChange={handleChange} 
                                placeholder="Enter website URL (optional)" 
                            />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea 
                                name="description" 
                                value={businessData.description} 
                                onChange={handleChange} 
                                required 
                                placeholder="Describe your business"
                                rows="4"
                            />
                        </div>
                    </div>
                </section>

                <section className="form-section" data-aos="zoom-in">
                    <h2 className="form-section-title">Membership Category</h2>
                    <div className="membership-grid">
                        {membershipCategories.map(category => (
                            <div key={category.code} className="membership-card">
                                <input 
                                    type="radio" 
                                    id={`membership-${category.code}`} 
                                    name="membershipCategory" 
                                    value={category.code} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <label htmlFor={`membership-${category.code}`} className="membership-label">
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                    <span className="commission">Commission: {category.commission}%</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="form-section" data-aos="fade-up">
                    <h2 className="form-section-title">Business Media</h2>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Upload Images (max 5)</label>
                            <div className="media-upload">
                                <FaUpload />
                                <input 
                                    type="file" 
                                    multiple 
                                    accept="image/*" 
                                    onChange={(e) => handleFileUpload(e, 'images')} 
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Upload Videos (max 2)</label>
                            <div className="media-upload">
                                <FaUpload />
                                <input 
                                    type="file" 
                                    multiple 
                                    accept="video/*" 
                                    onChange={(e) => handleFileUpload(e, 'videos')} 
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="form-actions">
                    <button 
                        type="submit" 
                        className="submit-button" 
                        disabled={isLoading}
                    >
                        {isLoading ? 'Submitting...' : 'Submit Business Listing'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ListBusinessPage;