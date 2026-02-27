"use client";

import React, { useState, useEffect } from "react";

// Telefon içinde dönecek metinler
const appFeatures = [
  { id: 1, icon: "🚀", title: "Coming Soon", desc: "Mobile App coming to Play Store!" },
  { id: 2, icon: "🔔", title: "Smart Reminders", desc: "Focus on your tasks, not notifications." },
  { id: 3, icon: "💎", title: "Rewards System", desc: "Build consistency and earn rewards." },
];

export default function Home() {
  const [showCookie, setShowCookie] = useState(false);
  const [featureIndex, setFeatureIndex] = useState(0);

  useEffect(() => {
    setShowCookie(true);
    // Telefonun içindeki metinleri değiştiren döngü
    const timer = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % appFeatures.length);
    }, 3000);
    return () => clearInterval(timer);
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
        {/* --- DİNAMİK TELEFON MOCKUP --- */}
        <div className="hero-mockup-wrapper">
          <div className="iphone-frame">
            <div className="iphone-screen">
              <div className="app-internal-content">
                <div className="app-internal-header">
                  <img src="/icon.png" alt="Tick" className="mini-icon" />
                  <span className="app-internal-name">Tick</span>
                </div>
                <div className="feature-slider">
                  {appFeatures.map((f, i) => (
                    <div key={f.id} className={`f-item ${i === featureIndex ? "active" : ""}`}>
                      <div className="f-icon">{f.icon}</div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="notch"></div>
          </div>
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

      {/* --- TÜM SECTIONS (ORİJİNAL KODUN BİREBİR KOPYASI) --- */}
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
        <ol className="steps">
          <li>Create reminders for things that matter to you</li>
          <li>Complete tasks and mark them as done</li>
          <li>Earn points and personalize your experience</li>
        </ol>
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
        <div className="cookie-box">
          <p>Size daha iyi bir deneyim sunmak için çerezleri kullanıyoruz.</p>
          <button onClick={() => setShowCookie(false)}>İzin Ver ve Devam Et</button>
        </div>
