import React, { useState } from "react";
import "./WaitlistLanding.css";

export default function WaitlistLanding() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const brand = "Secure2FA";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Replace with your actual API endpoint
      const response = await fetch(
        "http://helya.wisp.uno:12340/api/waitlist/signup?email=" + form.email,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }

      // Handle both JSON and text responses
      const contentType = response.headers.get("content-type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        // Handle text response
        data = await response.text();
      }

      console.log("Form submitted successfully:", data);
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to join waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="waitlist-container">
      <nav className="waitlist-navbar">
        <div className="navbar-logo">{brand}</div>
        <button className="navbar-updates-btn">Updates</button>
      </nav>

      <main className="waitlist-main">
        <div className="waitlist-content">
          <div className="main-logo">
            <span>🚀</span>
          </div>

          <h1 className="waitlist-title">Join Our Waitlist</h1>

          <p className="waitlist-description">
            Be the first to experience our revolutionary platform. Get early
            access and exclusive updates.
          </p>

          {!submitted ? (
            <div>
              {error && (
                <div
                  style={{
                    color: "#ff6b6b",
                    marginBottom: "20px",
                    padding: "10px",
                    border: "1px solid #ff6b6b",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 107, 107, 0.1)",
                  }}
                >
                  {error}
                </div>
              )}
              <form className="waitlist-form" onSubmit={handleSubmit}>
                {/* <div className="form__group field">
                  <input
                    type="text"
                    name="name"
                    className="form__field"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label htmlFor="name" className="form__label">
                    Full Name
                  </label>
                </div> */}

                <div className="form__group field">
                  <input
                    type="email"
                    name="email"
                    className="form__field"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label htmlFor="email" className="form__label">
                    Email Address
                  </label>
                </div>

                <button
                  type="submit"
                  className="waitlist-join-btn"
                  disabled={loading}
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            </div>
          ) : (
            <div className="waitlist-success">
              <h2 style={{ color: "#667eea", marginBottom: "10px" }}>
                🎉 You're In!
              </h2>
              <p>
                Thanks for joining our waitlist. We'll notify you when we
                launch!
              </p>
            </div>
          )}
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
