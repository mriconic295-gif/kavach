import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand-wrap">
            <img className="footer-logo" src="/assets/kavach-logo.png" alt="KAVACH turtle logo" />
            <div className="footer-brand">KAVACH<span>®</span></div>
          </div>
          <p>Practical cybersecurity for businesses, institutions and teams that need clear protection without unnecessary complexity.</p>
          <div className="social-links" aria-label="KAVACH social links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://x.com/" target="_blank" rel="noreferrer">X ↗</a>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/services">Services</Link><Link to="/solutions">Solutions</Link>
          <Link to="/pricing">Pricing</Link><Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <span>BHAVNAGAR, GUJARAT</span>
          <a href="mailto:hello@kavach.security">hello@kavach.security</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} KAVACH. All rights reserved.</span>
        <span>AUTHORIZED SECURITY WORK ONLY.</span>
      </div>
    </footer>
  );
}