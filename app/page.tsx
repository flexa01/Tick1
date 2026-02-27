"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    setShowCookie(true);
  }, []);

  return (
    <main className="main-container">
      <nav className="navbar">
        <img src="/icon.png" alt="Tick Logo" className="nav-logo" />
      </nav>

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

      {/* DİĞER TÜM SECTIONLAR (Hizalanmış ve Ortalı) */}
      <section className="section">
        <div className="section-inner">
          <h2>A Different Kind of Reminder App</h2>
          <p className="center-text">
            Most reminder apps focus on alerts. Tick focuses on people.
            We believe reminders should motivate, not overwhelm.
          </p>
        </div>
      </section>

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

      <section className="section">
        <div className="section-inner">
          <h2>How Tick Solves This</h2>
          <p className="center-text">
            Tick transforms reminders into a rewarding system that values consistency,
            progress, and personal growth.
          </p>
        </div>
      </section>

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
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Inter', system-ui, sans-serif; background: #0b0b14; color: #eaeaf0; overflow-x: hidden; }
        
        .main-container { display: flex; flex-direction: column; align-items: center; width: 100%; }
        .navbar { width: 100%; padding: 30px; display: flex; justify-content: center; }
        .nav-logo { width: 50px; height: 50px; object-fit: contain; }

        .hero { padding: 40px 20px 100px; text-align: center; width: 100%; display: flex; flex-direction: column; align-items: center; background: radial-gradient(circle at top, #1b1b3a, #0b0b14); }
        .hero-image-container { margin-bottom: 25px; }
        .hero-image { max-width: 280px; width: 100%; border-radius: 20px; box-shadow: 0 0 40px rgba(124, 124, 255, 0.2); }
        
        /* Düzeltilen Başlık Bölümü */
        .hero h1 { 
          font-size: 2.6rem; 
          line-height: 1.3; 
          margin: 15px 0; 
          font-weight: 800;
        }
        .hero span { 
          color: #7c7cff; 
          font-size: 1.8rem; /* Slogan kısmını daha dengeli yaptım */
          display: block;
          font-weight: 500;
          margin-top: 5px;
        }
        .hero p { max-width: 580px; margin: 10px auto; opacity: 0.8; font-size: 1rem; line-height: 1.6; }
        .cta-button { margin-top: 35px; padding: 14px 28px; border-radius: 14px; border: none; background: #7c7cff; color: #000; font-weight: bold; cursor: not-allowed; opacity: 0.8; }

        .section { width: 100%; padding: 80px 20px; display: flex; justify-content: center; }
        .section-inner { max-width: 1000px; width: 100%; text-align: center; }
        .section h2 { font-size: 1.8rem; margin-bottom: 30px; color: #fff; }
        .dark { background: #0f0f1f; border-top: 1px solid #1f1f3a; border-bottom: 1px solid #1f1f3a; }
        
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 10px; justify-content: center; }
        .card { background: #141428; padding: 35px 25px; border-radius: 18px; border: 1px solid rgba(124, 124, 255, 0.05); display: flex; flex-direction: column; align-items: center; }
        .card h3 { color: #7c7cff; font-size: 1.25rem; margin-bottom: 12px; }
        .card p { opacity: 0.75; line-height: 1.5; font-size: 0.95rem; }

        .center-text { max-width: 700px; margin: 0 auto; font-size: 1.05rem; line-height: 1.6; opacity: 0.85; }
        .muted { opacity: 0.6; margin-top: 8px; font-size: 0.9rem; }
        .steps-container { display: flex; justify-content: center; margin-top: 15px; }
        .steps { text-align: left; line-height: 2.2; font-size: 1rem; color: #eaeaf0; }

        footer { width: 100%; padding: 60px 20px; text-align: center; border-top: 1px solid #1f1f3a; opacity: 0.6; font-size: 0.85rem; }
        .dev { letter-spacing: 2px; font-size: 0.75rem; margin-top: 10px; opacity: 0.5; }

        .cookie-banner { position: fixed; bottom: 25px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 420px; background: #141428; padding: 20px; border-radius: 20px; border: 1px solid #7c7cff; z-index: 10000; text-align: center; box-shadow: 0 15px 40px rgba(0,0,0,0.6); }
        .cookie-banner button { margin-top: 12px; background: #7c7cff; color: #000; border: none; padding: 10px 20px; border-radius: 10px; font-weight: bold; cursor: pointer; width: 100%; }

        @media (max-width: 768px) {
          .hero h1 { font-size: 2.2rem; }
          .hero span { font-size: 1.4rem; }
          .section { padding: 50px 20px; }
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
