import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const closeNavMenu = () => {
        setIsNavOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    EBNBIZNET.COM
                </Link>

                {/* Desktop Navigation Menu */}
                <nav className="desktop-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/categories" className="nav-link">Categories</Link>
                    <Link to="/list-business" className="nav-link">List Your Business</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="desktop-auth">
                    <Link to="/login" className="login-btn">Login</Link>
                    <Link to="/register" className="register-btn">Register</Link>
                </div>

                {/* Mobile Menu Button */}
                <div 
                    className="mobile-menu" 
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    aria-label={isNavOpen ? "Close menu" : "Open menu"}
                >
                    {isNavOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Navigation Menu */}
                <nav className={`mobile-nav ${isNavOpen ? 'active' : ''}`}>
                    <Link 
                        to="/" 
                        className="nav-link" 
                        onClick={closeNavMenu}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        className="nav-link" 
                        onClick={closeNavMenu}
                    >
                        About
                    </Link>
                    <Link 
                        to="/categories" 
                        className="nav-link" 
                        onClick={closeNavMenu}
                    >
                        Categories
                    </Link>
                    <Link 
                        to="/list-business" 
                        className="nav-link" 
                        onClick={closeNavMenu}
                    >
                        List Your Business
                    </Link>
                    <Link 
                        to="/contact" 
                        className="nav-link" 
                        onClick={closeNavMenu}
                    >
                        Contact
                    </Link>
                    <Link 
                        to="/login" 
                        className="nav-link" 
                        onClick={closeNavMenu}
                    >
                        Login
                    </Link>
                    <Link 
                        to="/register" 
                        className="nav-link" 
                        onClick={closeNavMenu}
                    >
                        Register
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;