import React from 'react';
import './GlassyLoader.css'; // Link to the CSS

const GlassyLoader = () => {
  return (
    <div className="loader-container">
      <div className="glassy-loader">
        <div className="loader-spinner" />
        <span className="loader-text">Loading...</span>
      </div>
    </div>
  );
};

export default GlassyLoader;
