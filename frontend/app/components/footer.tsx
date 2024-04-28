import React from'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <ul className="footer-links">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                About Us
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            © 2024 Your Company Name. All rights reserved.
          </p>
          <ul className="social-links">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

