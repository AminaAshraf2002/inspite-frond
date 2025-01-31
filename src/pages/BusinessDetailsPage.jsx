import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FaStar, 
  FaMapMarker, 
  FaPhone,
  FaEnvelope,
  FaGlobe 
} from 'react-icons/fa';
import './BusinessDetailsPage.css';

const BusinessDetailsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Default or passed business details
    const [business] = useState(
        location.state?.business || {
            id: 1,
            name: "Tech Solutions Inc.",
            category: "IT Services",
            membership: "Prime A",
            location: "New York, USA",
            rating: 4.8,
            description: "Leading provider of innovative IT solutions and comprehensive digital transformation services for enterprises.",
            contactInfo: {
                phone: "+1 (555) 123-4567",
                email: "contact@techsolutions.com",
                website: "www.techsolutions.com"
            },
            services: [
                {
                    id: 101,
                    name: "Web Development Package",
                    price: 2999.99,
                    description: "Comprehensive web development solution including responsive design, custom CMS, and SEO optimization",
                    features: [
                        "Responsive Mobile Design",
                        "Custom Content Management",
                        "SEO Optimization",
                        "Performance Tuning"
                    ]
                },
                {
                    id: 102,
                    name: "Cloud Migration Service",
                    price: 4999.50,
                    description: "Complete cloud infrastructure migration and optimization for enterprises",
                    features: [
                        "Cloud Strategy Development",
                        "Infrastructure Assessment",
                        "Seamless Migration",
                        "Ongoing Support"
                    ]
                }
            ]
        }
    );

    // Handler for service purchase
    const handlePurchaseService = (service) => {
        navigate('/payment', { 
            state: { 
                service: service, 
                business: business 
            } 
        });
    };

    return (
        <div className="container mx-auto p-6 business-details-page">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Business Overview Section */}
                <div className="business-overview bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">
                            {business.name}
                        </h1>
                        <span className={`
                            px-4 py-2 rounded-full text-sm font-semibold
                            ${business.membership === 'Prime A' ? 'bg-yellow-500 text-white' : 
                              business.membership === 'Prime B' ? 'bg-gray-500 text-white' : 
                              'bg-bronze-500 text-white'}
                        `}>
                            {business.membership}
                        </span>
                    </div>

                    <div className="business-meta mb-4">
                        <div className="flex items-center mb-2">
                            <FaMapMarker className="mr-2 text-blue-500" />
                            <span className="text-gray-600">{business.location}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center mr-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar 
                                        key={i} 
                                        className={`
                                            ${i < Math.floor(business.rating) 
                                                ? 'text-yellow-500' 
                                                : 'text-gray-300'
                                            } mr-1
                                        `}
                                    />
                                ))}
                                <span className="ml-2 text-blue-600">
                                    ({business.rating})
                                </span>
                            </div>
                            <span className="text-sm text-green-600">
                                {business.category}
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-700 mb-6">
                        {business.description}
                    </p>

                    {/* Contact Information */}
                    <div className="contact-info bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <FaPhone className="mr-2 text-blue-500" />
                                <span>{business.contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="mr-2 text-blue-500" />
                                <span>{business.contactInfo.email}</span>
                            </div>
                            <div className="flex items-center">
                                <FaGlobe className="mr-2 text-blue-500" />
                                <span>{business.contactInfo.website}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="business-services">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                        Our Services
                    </h2>
                    
                    <div className="space-y-6">
                        {business.services.map((service) => (
                            <div 
                                key={service.id} 
                                className="service-card bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {service.name}
                                        </h3>
                                        <p className="text-gray-600 mt-2">
                                            {service.description}
                                        </p>
                                    </div>
                                    <span className="text-green-600 font-bold text-xl">
                                        ${service.price.toFixed(2)}
                                    </span>
                                </div>

                                <div className="service-features bg-gray-50 p-4 rounded-lg">
                                    <h4 className="text-md font-semibold mb-2">Key Features:</h4>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        {service.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <button 
                                    onClick={() => handlePurchaseService(service)}
                                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Purchase Service
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessDetailsPage;