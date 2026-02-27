"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    setShowCookie(true);
  }, []);

  return (
    <main>
      <nav style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
        <img
          src="/icon.png"
          alt="Tick Logo"
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
        />
      </nav>

      <section className="hero">
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
          <img
            src="/opengraph-image.png"
            alt="Tick App Preview"
            style={{
              maxWidth: "300px",
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 0 30px rgba(124, 124, 255, 0.3)",
            }}
          />
        </div>

        <h1>
          Tick <br />
          <span>Remember better. Live consistent.</span>
        </h1>

        <p>
          Tick is a modern reminder application built to help you stay consistent,
          build habits, and turn everyday discipline into something rewarding.
        </p>

        <button disabled>Mobile App — Coming Soon</button>
      </section>

      <section className="section">
        <h2>A Different Kind of Reminder App</h2>
        <p className="center-text">
          Most reminder apps focus on alerts. Tick focuses on people.
          We believe reminders should motivate, not overwhelm.
        </p>
      </section>

      <section className="section dark">
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
      </section>

      <section className="section">
        <h2>How Tick Solves This</h2>
        <p className="center-text">
          Tick transforms reminders into a rewarding system that values consistency,
          progress, and personal growth.
        </p>
      </section>

      <section className="section dark">
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
      </section>

      <section className="section">
        <h2>How It Works</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <ol className="steps">
              <li>Create reminders for things that matter to you</li>
              <li>Complete tasks and mark them as done</li>
              <li>Earn points and personalize your experience</li>
            </ol>
        </div>
      </section>

      <section className="section dark">
        <h2>Our Philosophy</h2>
        <p className="center-text">
          Tick is built around one simple idea: consistency beats intensity.
        </p>
        <p className="center-text muted">
          We want productivity to feel calm, motivating and sustainable.
        </p>
      </section>

      <section className="section">
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
      </section>

      <footer>
        <p>© 2026 Tick Reminder. All rights reserved.</p>
        <p className="dev">DEVELOPED BY FLEXA</p>
      </footer>

      {showCookie && (
        <div className="cookie-banner">
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#eaeaf0" }}>
            Size daha iyi bir deneyim sunmak için çerezleri kullanıyoruz.
          </p>
          <button onClick={() => setShowCookie(false)}>
            İzin Ver ve Devam Et
          </button>
        </div>
      )}

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: system-ui, sans-serif; background: #0b0b14; color: #eaeaf0; }
        
        .hero { padding: 80px 20px 140px; text-align: center; background: radial-gradient(circle at top, #1b1b3a, #0b0b14); }
        .hero h1 { font-size: 3.2rem; line-height: 1.2; margin-top: 20px; }
        .hero span { color: #7c7cff; }
        .hero p { max-width: 640px; margin: 25px auto; opacity: 0.85; }
        .hero button { margin-top: 30px; padding: 15px 30px; border-radius: 14px; border: none; background: #7c7cff; color: #000; font-weight: bold; opacity: 0.7; }
        
        .section { padding: 90px 20px; max-width: 1100px; margin: auto; text-align: center; }
        .section h2 { margin-bottom: 40px; font-size: 2rem; }
        
        .center-text { text-align: center; max-width: 720px; margin: 0 auto 20px; opacity: 0.9; }
        .muted { opacity: 0.7; }
        
        .grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 26px; 
          justify-content: center; 
        }
        
        .card { 
          background: #141428; 
          padding: 35px 28px; 
          border-radius: 18px; 
          text-align: center; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          border: 1px solid rgba(124, 124, 255, 0.1);
        }
        
        .card h3 { color: #7c7cff; margin-bottom: 15px; }
        .card p { margin: 0; line-height: 1.6; }

        .dark { background: #0f0f1f; border-top: 1px solid #1f1f3a; border-bottom: 1px solid #1f1f3a; width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; }
        
        .steps { 
          text-align: left; 
          display: inline-block; 
          line-height: 2.2; 
          font-size: 1.1rem; 
          max-width: fit-content;
        }

        footer { padding: 60px 20px; text-align: center; font-size: 0.9rem; opacity: 0.8; border-top: 1px solid #1f1f3a; }
        footer .dev { margin-top: 8px; font-size: 0.75rem; letter-spacing: 2px; opacity: 0.6; }

        .cookie-banner {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 500px;
          background: #141428;
          padding: 20px;
          border-radius: 20px;
          border: 1px solid #7c7cff;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 9999;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0,0,0,0.8);
        }
        .cookie-banner button {
          background: #7c7cff;
          color: #000;
          border: none;
          padding: 12px;
          border-radius: 12px;
          font-weight: bold;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 2.2rem; }
          .section { padding: 60px 20px; }
        }
      `}</style>
    </main>
  );
}
