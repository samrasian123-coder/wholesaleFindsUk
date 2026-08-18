import React from 'react';
import { Outlet } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="app-layout">
      <AnnouncementBar />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
