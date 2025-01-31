import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import './App.css';

// Main website pages
import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import ListBusinessPage from './pages/ListBusinessPage';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import BusinessDetailsPage from './pages/BusinessDetailsPage';
import PaymentGateway from './pages/PaymentGateway';

// Admin Layout and Pages
import AdminLayout from './admin/components/layout/AdminLayout';
import AdminDashboard from './admin/Pages/Dashboard';
import BusinessManagement from './admin/Pages/BusinessManagement';
import ApprovalManagement from './admin/Pages/ApprovalManagement';
import TransactionManagement from './admin/Pages/TransactionManagement';
import ReportsAnalytics from './admin/Pages/ReportsAnalytics';
import AdminSettings from './admin/Pages/Settings';

// Business Dashboard Pages
import BusinessLayout from './business/components/layout/BusinessLayout';
import Dashboard from './business/pages/Dashboard';
import Listings from './business/pages/Listings';
import SalesAnalytics from './business/pages/SalesAnalytics';
import Inquiries from './business/pages/Inquiries';
import ProfileSettings from './business/pages/ProfileSettings';
import Notifications from './business/pages/Notifications';
import Membership from './business/pages/Membership';
import Support from './business/pages/Support';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <Router>
            <div className="App">
                {/* Conditionally render Header based on route */}
                {!window.location.pathname.includes('/admin') && 
                 !window.location.pathname.includes('/business') && 
                 <Header />}
                
                <Routes>
                    {/* Main Website Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/list-business" element={<ListBusinessPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/business-details" element={<BusinessDetailsPage />} />
                    <Route path="/payment" element={<PaymentGateway />} />
                    
                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="business-management" element={<BusinessManagement />} />
                        <Route path="approvals" element={<ApprovalManagement />} />
                        <Route path="transactions" element={<TransactionManagement />} />
                        <Route path="reports" element={<ReportsAnalytics />} />
                        <Route path="settings" element={<AdminSettings />} />
                    </Route>

                    {/* Business Dashboard Routes */}
                    <Route path="/business" element={<BusinessLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="listings" element={<Listings />} />
                        <Route path="sales-analytics" element={<SalesAnalytics />} />
                        <Route path="inquiries" element={<Inquiries />} />
                        <Route path="profile-settings" element={<ProfileSettings />} />
                        <Route path="notifications" element={<Notifications />} />
                        <Route path="membership" element={<Membership />} />
                        <Route path="support" element={<Support />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;