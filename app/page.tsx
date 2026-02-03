"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
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
        <h1>Tick <br /> <span>Remember better. Live consistent.</span></h1>
        <p>Tick is a modern reminder application built to help you stay consistent, build habits, and turn everyday discipline into something rewarding.</p>
        <button disabled>Mobile App — Coming Soon</button>
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

      {/* CORE FEATURES (Eksik Olan Başlık Geri Geldi) */}
      <section className="section">
        <h2>Core Features</h2>
        <div className="grid">
          <div className="card">
            <h3>Smart Reminders</h3>
            <p>Clean, minimal reminders that respect your attention and focus.</p>
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

      {/* PHILOSOPHY */}
      <section className="section dark">
        <h2>Our Philosophy</h2>
        <p className="center-text">Tick is built around one simple idea: consistency beats intensity.</p>
        <p className="center-text" style={{opacity: 0.6, fontSize: '0.9rem'}}>Productivity should feel calm, motivating and sustainable.</p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.6, borderTop: '1px solid #1f1f3a' }}>
        <p>© 2026 Tick Reminder. All rights reserved.</p>
      </footer>

      {/* COOKIE CONSENT BANNER */}
      {showCookie && (
        <div style={{
          position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
          width: '90%', maxWidth: '500px', background: '#141428', padding: '20px',
          borderRadius: '20px', border: '1px solid #7c7cff', display: 'flex',
          flexDirection: 'column', gap: '15px', zIndex: 9999, textAlign: 'center',
          boxShadow: '0 10px 40px rgba(0,0,0,0.8)'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#eaeaf0' }}>
            Size daha iyi bir deneyim sunmak için çerezleri kullanıyoruz.
          </p>
          <button onClick={() => setShowCookie(false)} style={{
            background: '#7c7cff', color: '#000', border: 'none', padding: '12px',
            borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer'
          }}>İzin Ver ve Devam Et</button>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #0b0b14; color:
