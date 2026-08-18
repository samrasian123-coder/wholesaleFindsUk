import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'Dropshipping', path: '/dropshipping' },
    { name: 'Vinted', path: '/vinted' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-container">
        {/* Left - Logo */}
        <div className="header-logo">
          <Logo />
        </div>

        {/* Center - Navigation */}
        <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right - Actions */}
        <div className="header-actions">
          <Link to="/login" className="btn btn-outline-white">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Try For Free
          </Link>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
