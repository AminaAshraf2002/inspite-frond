const API_URL = process.env.REACT_APP_API_URL;

const authService = {
    // Business/Regular user login
    login: async (email, password) => {
        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {  // Added /api
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            return data;
        } catch (error) {
            throw error;
        }
    },

    // Admin login
    adminLogin: async (email, password) => {
        try {
            const response = await fetch(`${API_URL}/api/auth/admin/login`, {  // Added /api
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Admin login failed');
            }

            return data;
        } catch (error) {
            throw error;
        }
    },

    // Registration
    register: async (userData) => {
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {  // Added /api
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            return data;
        } catch (error) {
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    }
};

export default authService;