"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    setShowCookie(true);
  }, []);

  return (
    <main>
      {/* NAV / LOGO */}
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

      {/* SOLUTION */}
      <section className="section">
        <h2>How Tick Solves This</h2>
        <p className="center-text">
          Tick transforms reminders into a rewarding system that values consistency, progress, and personal growth.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section className="section dark">
        <h2>Our Philosophy</h2>
        <p className="center-text">Tick is built around one simple idea: consistency beats intensity.</p>
        <p className="center-text muted" style={{opacity: 0.6}}>Productivity should feel calm, motivating and sustainable.</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Tick Reminder. All rights reserved.</p>
      </footer>

      {/* ÇEREZ İZNİ (COOKIE BANNER) */}
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

      {/* TÜM STİLLER GERİ GELDİ */}
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #0b0b14; color: #eaeaf0; font-family: sans-serif; }
        .hero { padding: 80px 20px 140px; text-align: center; background: radial-gradient(circle at top, #1b1b3a, #0b0b14); }
        .hero h1 { font-size: 3.2rem; line-height: 1.2; margin-top: 20px; }
        .hero span { color: #7c7cff; }
        .hero p { max-width: 640px; margin: 25px auto; opacity: 0.85; }
        .hero button { margin-top: 30px; padding: 15px 30px; border-radius: 14px; border: none; background: #7c7cff; color: #000; opacity: 0.7; font-weight: bold; }
        .section { padding: 90px 20px; max-width: 1100px; margin: auto; }
        .section h2 { text-align: center; margin-bottom: 40px; }
        .center-text { text-align: center; max-width: 720px; margin: 0 auto 20px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 26px; }
        .card { background: #141428; padding: 28px; border-radius: 18px; }
        .dark { background
