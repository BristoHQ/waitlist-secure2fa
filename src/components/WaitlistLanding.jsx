import React, { useState } from "react";
import "./WaitlistLanding.css";

export default function WaitlistLanding() {
  const [showUpdateCard, setShowUpdateCard] = useState(false);
  const brand = "Secure2FA";

  const toggleUpdateCard = () => {
    setShowUpdateCard(!showUpdateCard);
  };

  return (
    <div className="waitlist-container">
      <nav className="waitlist-navbar">
        <div className="navbar-logo">{brand}</div>
        <button className="navbar-updates-btn" onClick={toggleUpdateCard}>
          Updates
        </button>
      </nav>

      {showUpdateCard && (
        <div className="update-card">
          <div className="update-card-content">
            <div className="update-card-header">
              <h3>🔔 Latest Updates</h3>
              <button className="update-card-close" onClick={toggleUpdateCard}>
                ×
              </button>
            </div>
            <div className="update-card-body">
              <div className="update-item">
                <span className="update-date">July 2025</span>
                <p>Frontend work is under construction</p>
              </div>
              <div className="update-item">
                <span className="update-date">July 2025</span>
                <p>2FA Service Backend infrastructure overhaul completed</p>
              </div>
              <div className="update-item">
                <span className="update-date">July 2025</span>
                <p>Authentication Backend infrastructure overhaul completed</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="waitlist-main">
        <div className="waitlist-content">
          <div className="main-logo">
            <span>🔐</span>
          </div>

          <h1 className="waitlist-title">Secure2FA</h1>

          <p className="waitlist-description">
            Advanced Two-Factor Authentication Web Platform
          </p>

          <div className="launching-soon">
            <h2>🚀 Launching Soon</h2>
            <p>Get ready for the next generation of secure authentication</p>
          </div>

          <div className="project-details">
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">🔑</div>
                <h3>PIN Authentication</h3>
                <p>
                  Secure PIN-based login system with advanced encryption
                  protocols
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🆘</div>
                <h3>Emergency Login</h3>
                <p>
                  Emergency login protocol via .elp file generation for account
                  recovery
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Full Encryption</h3>
                <p>
                  All data encrypted including full name, username, email, and
                  sensitive information
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3>Web-Based Platform</h3>
                <p>
                  Complete 2FA authentication solution accessible through web
                  browsers
                </p>
              </div>
            </div>

            <div className="tech-stack">
              <h3>Technical Features</h3>
              <div className="tech-items">
                <span className="tech-item">End-to-End Encryption</span>
                <span className="tech-item">PIN Authentication</span>
                <span className="tech-item">Emergency Recovery</span>
                <span className="tech-item">Secure File Generation</span>
                <span className="tech-item">Data Protection</span>
                <span className="tech-item">Web-Based Access</span>
              </div>
            </div>

            <div className="security-info">
              <h3>🛡️ Security First</h3>
              <p>
                Our platform prioritizes security with comprehensive encryption
                of all user data. From personal information like full names and
                email addresses to authentication credentials, everything is
                protected using industry-standard encryption protocols. The
                emergency login system ensures you never lose access to your
                account while maintaining the highest security standards.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="waitlist-footer">
        <div className="copyright-line">
          © 2025 {brand}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
