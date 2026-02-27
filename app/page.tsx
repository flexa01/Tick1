"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    setShowCookie(true);
  }, []);

  return (
    <main className="main-container">
      {/* Navbar - Merkeze Hizalı */}
      <nav className="navbar">
        <img
          src="/icon.png"
          alt="Tick Logo"
          className="nav-logo"
        />
      </nav>

      {/* Hero Section - Tam Merkezde */}
      <section className="hero">
        <div className="hero-image-container">
          <img
            src="/opengraph-image.png"
            alt="Tick App Preview"
            className="hero-image"
          />
        </div>

        <div className="hero-content">
          <h1>
            Tick <br />
            <span>Remember better. Live consistent.</span>
          </h1>

          <p>
            Tick is a modern reminder application built to help you stay consistent,
            build habits, and turn everyday discipline into something rewarding.
          </p>

          <button className="cta-button" disabled>Mobile App — Coming Soon</button>
        </div>
      </section>

      {/* Section 1 */}
      <section className="section">
        <div className="section-inner">
          <h2>A Different Kind of Reminder App</h2>
          <p className="center-text">
            Most reminder apps focus on alerts. Tick focuses on people.
            We believe reminders should motivate, not overwhelm.
          </p>
        </div>
      </section>

      {/* Section 2 - Koyu Arka Planlı ve Ortalı */}
      <section className="section dark">
        <div className="section-inner">
          <h2>The Problem With Traditional Reminders</h2>
          <div className="grid">
            <div className="card">
              <h3>Notification Fatigue</h3>
              <p>Endless alerts eventually get ignored. Reminders lose their meaning.</p>
            </div>
            <div className="card">
              <h3>No Motivation</h3>
              <p>Being reminded doesn’t mean being encouraged to actually do the task.</p>
            </div>
            <div className="card">
              <h3>No Reward</h3>
              <p>Completing tasks feels empty when there’s nothing to gain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section">
        <div className="section-inner">
          <h2>How Tick Solves This</h2>
          <p className="center-text">
            Tick transforms reminders into a rewarding system that values consistency,
            progress, and personal growth.
          </p>
        </div>
      </section>

      {/* Section 4 - Core Features */}
      <section className="section dark">
        <div className="section-inner">
          <h2>Core Features</h2>
          <div className="grid">
            <div className="card">
              <h3>Smart Reminders</h3>
              <p>Clean, minimal reminders that respect your attention.</p>
            </div>
            <div className="card">
              <h3>Point System</h3>
              <p>Earn points for every completed reminder and build positive momentum.</p>
            </div>
            <div className="card">
              <h3>Customization</h3>
              <p>Use your points to unlock themes, UI upgrades and future features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - How It Works */}
      <section className="section">
        <div className="section-inner">
          <h2>How It Works</h2>
          <div className="steps-container">
            <ol className="steps">
              <li>Create reminders for things that matter to you</li>
              <li>Complete tasks and mark them as done</li>
              <li>Earn points and personalize your experience</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 6 - Philosophy */}
      <section className="section dark">
        <div className="section-inner">
          <h2>Our Philosophy</h2>
          <p className="center-text">
            Tick is built around one simple idea: consistency beats intensity.
          </p>
          <p className="center-text muted">
            We want productivity to feel calm, motivating and sustainable.
          </p>
        </div>
      </section>

      {/* Section 7 - What's Coming */}
      <section className="section">
        <div className="section-inner">
          <h2>What’s Coming</h2>
          <div className="grid">
            <div className="card">
              <h3>Mobile Apps</h3>
              <p>Native iOS and Android apps with full sync.</p>
            </div>
            <div className="card">
              <h3>Advanced Rewards</h3>
              <p>Streak bonuses, seasonal themes and more unlockables.</p>
            </div>
            <div className="card">
              <h3>Cloud Sync</h3>
              <p>Access your reminders securely across all devices.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Tick Reminder. All rights reserved.</p>
        <p className="dev">DEVELOPED BY FLEXA</p>
      </footer>

      {showCookie && (
        <div className="cookie-banner">
          <p>Size daha iyi bir deneyim sunmak için çerezleri kullanıyoruz.</p>
          <button onClick={() => setShowCookie(false)}>İzin Ver ve Devam Et</button>
        </div>
      )}

      <style>{`
        /* Reset & Base */
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Inter', system-ui, sans-serif; background: #0b0b14; color: #eaeaf0; overflow-x: hidden; }
        
        /* Layout */
        .main-container { display: flex; flex-direction: column; align-items: center; width: 100%; }
        .navbar { width: 100%; padding: 30px; display: flex; justifyContent: center; }
        .nav-logo { width: 50px; height: 50px; object-fit: contain; }

        /* Hero */
        .hero { padding: 60px 20px 100px; text-align: center; width: 100%; display: flex; flex-direction: column; align-items: center; background: radial-gradient(circle at top, #1b1b3a, #0b0b14); }
        .hero-image-container { margin-bottom: 30px; display: flex; justify-content: center; }
        .hero-image { maxWidth: 320px; width: 100%; borderRadius: 24px; boxShadow: 0 0 50px rgba(124, 124, 255, 0.25); }
        .hero h1 { font-size: 3.5rem; line-height: 1.1; margin: 20px 0; }
        .hero span { color: #7c7cff; }
        .hero p { max-width: 600px; margin: 0 auto; opacity: 0.8; font-size: 1.1rem; line-height: 1.6; }
        .cta-button { margin-top: 40px; padding: 16px 32px; border-radius: 16px; border: none; background: #7c7cff; color: #000; font-weight: bold; cursor: not-allowed; opacity: 0.8; }

        /* Sections */
        .section { width: 100%; padding: 100px 20px; display: flex; justify-content: center; }
        .section-inner { max-width: 1100px; width: 100%; text-align: center; }
        .section h2 { font-size: 2.2rem; margin-bottom: 40px; }
        .dark { background: #0f0f1f; border-top: 1px solid #1f1f3a; border-bottom: 1px solid #1f1f3a; }
        
        /* Grid & Cards */
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 20px; justify-content: center; }
        .card { background: #141428; padding: 40px 30px; border-radius: 20px; border: 1px solid rgba(124, 124, 255, 0.05); transition: transform 0.3s ease; display: flex; flex-direction: column; align-items: center; }
        .card h3 { color: #7c7cff; font-size: 1.4rem; margin-bottom: 15px; }
        .card p { opacity: 0.8; line-height: 1.6; margin: 0; }

        /* Content Elements */
        .center-text { max-width: 750px; margin: 0 auto; font-size: 1.15rem; line-height: 1.7; opacity: 0.9; }
        .muted { opacity: 0.6; margin-top: 10px; }
        .steps-container { display: flex; justify-content: center; margin-top: 20px; }
        .steps { text-align: left; line-height: 2.5; font-size: 1.1rem; }

        /* Footer */
        footer { width: 100%; padding: 80px 20px; text-align: center; border-top: 1px solid #1f1f3a; opacity: 0.7; }
        .dev { letter-spacing: 3px; font-size: 0.8rem; margin-top: 15px; opacity: 0.5; }

        /* Cookie */
        .cookie-banner { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 450px; background: #141428; padding: 25px; border-radius: 24px; border: 1px solid #7c7cff; z-index: 10000; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.7); }
        .cookie-banner button { margin-top: 15px; background: #7c7cff; color: #000; border: none; padding: 12px 24px; border-radius: 12px; font-weight: bold; cursor: pointer; width: 100%; }

        /* Mobile */
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.5rem; }
          .section { padding: 60px 20px; }
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
