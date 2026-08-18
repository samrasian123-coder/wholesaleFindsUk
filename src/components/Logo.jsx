import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ iconOnly = false, className = '' }) => {
  return (
    <Link to="/" className={`brand-logo ${className}`}>
      <div className="logo-icon">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle Crown / UK geometric reference on top */}
          <path d="M12 14L20 8L28 14V20L20 14L12 20V14Z" fill="var(--color-champagne-gold)" opacity="0.9" />
          {/* W / F Monogram geometric abstraction */}
          <path d="M8 18L14 32L20 22L26 32L32 18" stroke="var(--color-electric-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 24H20" stroke="var(--color-electric-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {!iconOnly && (
        <div className="logo-text">
          <span className="logo-text-bold">Wholesale</span>
          <span className="logo-text-light">Finds</span>
          <span className="logo-text-accent">UK</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
