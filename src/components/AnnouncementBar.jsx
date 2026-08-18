import React from 'react';
import './AnnouncementBar.css';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="container announcement-content">
        <div className="announcement-text">
          <span><span className="flag">🇬🇧</span> UK STOCK</span>
          <span className="dot"><Star size={12} fill="white"/></span>
          <span>Fresh wholesale bundles</span>
          <span className="dot"><Star size={12} fill="white"/></span>
          <span>Weekly winning products</span>
          <span className="dot"><Star size={12} fill="white"/></span>
          <span>Fast UK dispatch</span>
        </div>
        <Link to="/wholesale" className="announcement-link">
          View New Arrival <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementBar;
