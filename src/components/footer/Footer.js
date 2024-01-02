// Footer.js

import React from 'react';
import "./style.css"
const Footer = () => {
  return (
    <footer >
    <div className="ftr">
      <div className="footer-content">
        <div className="footer-section">
          <span>
            <a href="/privacy-policy">Privacy Policy</a> |{' '}
            <a href="/terms-of-service">Terms of Service</a> |{' '}
            <a href="/disclaimer">Disclaimer</a>
          </span>
        </div>
        <div className="footer-section">
          <span>Contact: info@careerpane.com</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 careerpane. All Rights Reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
