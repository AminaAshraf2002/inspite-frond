const BASE_URL = "https://info-server-1-6h2i.onrender.com"; // Add this at the top

export async function createBusiness(token, formData) {
    try {
        const response = await fetch(`${BASE_URL}/api/business/create`, {
            method: 'POST',
            headers: {
                'x-auth-token': token
                // Don't set Content-Type header when sending FormData
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
        console.error('Error creating business:', error);
        throw error;
    }
}
// Get All Businesses
export async function getAllBusinesses(token) {
    try {
      const response = await fetch('/api/business/all', {
        headers: {
          'x-auth-token': token
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.businesses;
      } else {
        throw new Error(`API request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching all businesses:', error);
      throw error;
    }
  }
  // Get Pending Businesses (Admin)
export async function getPendingBusinesses(token) {
    try {
      const response = await fetch('/api/business/pending', {
        headers: {
          'x-auth-token': token
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.businesses;
      } else {
        throw new Error(`API request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching pending businesses:', error);
      throw error;
    }
  }
  // Approve/Reject Business (Admin)
export async function updateBusinessStatus(businessId, token, status, reviewNotes) {
    try {
      const response = await fetch(`/api/business/${businessId}/status`, {
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
  
      if (response.ok) {
        const data = await response.json();
        return data.business;
      } else {
        throw new Error(`API request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error('Error updating business status:', error);
      throw error;
    }
  }
  // Get Approved Businesses
export async function getApprovedBusinesses(token, industry, membershipCategory, searchQuery) {
    try {
      let url = '/api/business/approved';
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
  
      if (response.ok) {
        const data = await response.json();
        return data.businesses;
      } else {
        throw new Error(`API request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching approved businesses:', error);
      throw error;
    }
  }
  // Get Business Categories
export async function getBusinessCategories(token) {
    try {
      const response = await fetch('/api/business/categories', {
        headers: {
          'x-auth-token': token
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.categories;
      } else {
        throw new Error(`API request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching business categories:', error);
      throw error;
    }
  }
  // Get Business Statistics (Admin)
export async function getBusinessStats(token) {
    try {
      const response = await fetch('/api/business/statistics', {
        headers: {
          'x-auth-token': token
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.stats;
      } else {
        throw new Error(`API request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching business statistics:', error);
      throw error;
    }
  }