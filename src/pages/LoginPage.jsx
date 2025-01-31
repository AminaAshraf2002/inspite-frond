import React, { useState } from 'react';
import { Eye, Mail, Building, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { login, adminLogin } from '../services/api/auth';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isBusinessLogin, setIsBusinessLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const loginFunction = isBusinessLogin ? login : adminLogin;
      const response = await loginFunction(formData.email, formData.password);

      localStorage.setItem('token', response.token);
      localStorage.setItem('userEmail', formData.email);

      navigate('/business');
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1 className="login-title">EBNBIZNET</h1>
          <h2 className="login-subtitle">Sign in to your account</h2>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="toggle-container">
          <button
            className={`toggle-button ${isBusinessLogin ? 'active' : ''}`}
            onClick={() => setIsBusinessLogin(true)}
          >
            <Building size={20} />
            <span>Business</span>
          </button>
          <button
            className={`toggle-button ${!isBusinessLogin ? 'active' : ''}`}
            onClick={() => setIsBusinessLogin(false)}
          >
            <User size={20} />
            <span>Admin</span>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-container">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-input password-input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="show-password-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Eye size={20} />
              </button>
            </div>
          </div>

          <div className="form-footer">
            <div className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                id="remember-me"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;