import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wholesale" element={<PlaceholderPage />} />
          <Route path="dropshipping" element={<PlaceholderPage />} />
          <Route path="vinted" element={<PlaceholderPage />} />
          <Route path="about-us" element={<PlaceholderPage />} />
          <Route path="contact-us" element={<PlaceholderPage />} />
          <Route path="login" element={<PlaceholderPage />} />
          {/* Catch all other routes */}
          <Route path="*" element={<PlaceholderPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
