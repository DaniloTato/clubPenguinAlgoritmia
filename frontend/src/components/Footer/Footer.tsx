import React from "react";
import "./Footer.css";
import disneyLogo from "../../assets/disneygames.png";
import badge from "../../assets/badge.png";

const Footer: React.FC = () => {
  return (
    <footer className="cp-footer-wrapper">
      <div className="cp-footer-content">
        {/* Left Section: Disney Games Logo */}
        <div className="footer-left">
          <img src={disneyLogo} alt="Disney Games" className="disney-logo" />
        </div>

        {/* Center Section: Links and Copyright */}
        <div className="footer-center">
          <nav className="footer-nav">
            <a href="#">Company</a>
            <span className="separator">|</span>
            <a href="#" className="yellow-link">
              Terms of Use*
            </a>
            <span className="separator">|</span>
            <a href="#" className="yellow-link">
              Privacy Policy*
            </a>
            <span className="separator">|</span>
            <a href="#">Contact Us</a>
            <span className="separator">|</span>
            <a href="#">Site Map</a>
          </nav>

          <div className="copyright-info">
            <p>
              Club Penguin™ Club Penguin Entertainment Inc. © 2008. All rights
              reserved.
            </p>
            <p className="updated-text">* Updated on August 5, 2008</p>
          </div>
        </div>

        {/* Right Section: Badges */}
        <div className="footer-right">
          <div className="badge-container">
            <div className="bbb-badge">
              <span className="bbb-placeholder">BBB Accredited</span>
            </div>
            <div className="award-badge">
              <img src={badge} alt="Security Badge" className="badge" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
