import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import './PlaceholderPage.css';

const PlaceholderPage = () => {
  const location = useLocation();
  const pathName = location.pathname.substring(1).replace('-', ' ');
  const title = pathName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <div className="placeholder-label">COMING SOON</div>
        <h1 className="placeholder-title">{title || 'Page'}</h1>
        <div className="placeholder-logo-wrap">
          <Logo iconOnly={true} />
        </div>
        <p className="placeholder-desc">
          We are currently building an exceptional experience for this section.
          Check back soon.
        </p>
      </div>
      
      {/* Background decorative elements */}
      <div className="decor decor-1"></div>
      <div className="decor decor-2"></div>
    </div>
  );
};

export default PlaceholderPage;
