const API_URL = "https://info-server-1-6h2i.onrender.com";

export const businessService = {
    // Create Business
    createBusiness: async (formData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/business/create`, {
                method: 'POST',
                headers: {
                    'x-auth-token': token
                },
                body: formData
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to create business');
            }

            const data = await response.json();
            return data.business;
        } catch (error) {
            throw error;
        }
    },

    // Get All Businesses
    getAllBusinesses: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/business/all`, {
                headers: {
                    'x-auth-token': token
                }
            });

            if (!response.ok) {
                throw new Error(`API request failed with status code ${response.status}`);
            }

            const data = await response.json();
            return data.businesses;
        } catch (error) {
            throw error;
        }
    },

    // Get Pending Businesses (Admin)
    getPendingBusinesses: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/business/pending`, {
                headers: {
                    'x-auth-token': token
                }
            });

            if (!response.ok) {
                throw new Error(`API request failed with status code ${response.status}`);
            }

            const data = await response.json();
            return data.businesses;
        } catch (error) {
            throw error;
        }
    },

    // Update Business Status (Admin)
    updateBusinessStatus: async (businessId, status, reviewNotes) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/business/${businessId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({
                    status,
                    reviewNotes
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed with status code ${response.status}`);
            }

            const data = await response.json();
            return data.business;
        } catch (error) {
            throw error;
        }
    },

    // Get Approved Businesses
    getApprovedBusinesses: async (filters = {}) => {
        try {
            const token = localStorage.getItem('token');
            const { industry, membershipCategory, searchQuery } = filters;
            let url = `${API_URL}/api/business/approved`;
            let query = [];

            if (industry && industry !== 'all') {
                query.push(`industry=${industry}`);
            }
            if (membershipCategory && membershipCategory !== 'all') {
                query.push(`membershipCategory=${membershipCategory}`);
            }
            if (searchQuery) {
                query.push(`searchQuery=${searchQuery}`);
            }

            if (query.length > 0) {
                url += '?' + query.join('&');
            }

            const response = await fetch(url, {
                headers: {
                    'x-auth-token': token
                }
            });

            if (!response.ok) {
                throw new Error(`API request failed with status code ${response.status}`);
            }

            const data = await response.json();
            return data.businesses;
        } catch (error) {
            throw error;
        }
    },

    // Get Business Categories
    getBusinessCategories: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/business/categories`, {
                headers: {
                    'x-auth-token': token
                }
            });

            if (!response.ok) {
                throw new Error(`API request failed with status code ${response.status}`);
            }

            const data = await response.json();
            return data.categories;
        } catch (error) {
            throw error;
        }
    },

    // Get Business Statistics (Admin)
    getBusinessStats: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/business/statistics`, {
                headers: {
                    'x-auth-token': token
                }
            });

            if (!response.ok) {
                throw new Error(`API request failed with status code ${response.status}`);
            }

            const data = await response.json();
            return data.stats;
        } catch (error) {
            throw error;
        }
    }
};