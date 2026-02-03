"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    // Sayfa açıldığında çerez uyarısını göster
    setShowCookie(true);
  }, []);

  return (
    <main>
      {/* NAV / LOGO SECTION */}
      <nav style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <img src="/icon.png" alt="Tick Logo" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div style={{ marginBottom: '20px' }}>
          <img src="/opengraph-image.png" alt="Tick App Preview" style={{ maxWidth: '300px', borderRadius: '20px', boxShadow: '0 0 30px rgba(124, 124, 255, 0.3)' }} />
        </div>
        
        <h1>
          Tick <br />
          <span>Remember better. Live consistent.</span>
        </h1>

        <p>
          Tick is a modern reminder application built to help you stay consistent,
          build habits, and turn everyday discipline into something rewarding.
        </p>

        <button className="hero-btn" disabled>Mobile App — Coming Soon</button>
      </section>

      {/* INTRO */}
      <section className="section">
        <h2>A Different Kind of Reminder App</h2>
        <p className="center-text">
          Most reminder apps focus on alerts. Tick focuses on people.
          We believe reminders should motivate, not overwhelm.
        </p>
      </section>

      {/* PROBLEM */}
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

      {/* SOLUTION */}
      <section className="section">
        <h2>How Tick Solves This</h2>
        <p className="center-text">
          Tick transforms reminders into a rewarding system that values consistency,
          progress, and personal growth.
        </p>
      </section>

      {/* FEATURES */}
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

      {/* HOW IT WORKS */}
      <section className="section">
        <h2>How It Works</h2>
        <ol className="steps">
          <li>Create reminders for things that matter to you</li>
          <li>Complete tasks and mark them as done</li>
          <li>Earn points and personalize your experience</li>
        </ol>
      </section>

      {/* PHILOSOPHY */}
      <section className="section dark">
        <h2>Our Philosophy</h2>
        <p className="center-text">
          Tick is built around one simple idea: consistency beats intensity.
        </p>
        <p className="center-text muted">
          We want productivity to feel calm, motivating and sustainable.
        </p>
      </section>

      {/* FUTURE */}
      <section className="section">
        <h2>What’s Coming</h2>
        <div className="grid">
          <div className="card">
            <h3>Mobile Apps</h3>
            <p>Native iOS and Android apps with full sync
