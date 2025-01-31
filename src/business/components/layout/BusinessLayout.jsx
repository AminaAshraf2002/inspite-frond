import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import Header from './Header';
import './BusinessLayout.css';

function BusinessLayout() {
  return (
    <div className="business-layout">
      <Sidebar />
      <main className="business-main-content">
        <Header />
        <div className="business-page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default BusinessLayout;