// src/admin/layout/AdminLayout.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './AdminSidebar';
import Header from './AdminHeader';
import './AdminLayout.css';

const AdminLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`admin-layout ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
            <Sidebar isOpen={isSidebarOpen} />
            
            <div className="main-content">
                <Header 
                    toggleSidebar={toggleSidebar} 
                    isSidebarOpen={isSidebarOpen}
                />
                
                <main className="content-wrapper">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;