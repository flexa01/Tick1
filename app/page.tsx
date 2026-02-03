"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [showCookie, setShowCookie] = useState(false);

  // Sayfa yüklendiğinde çerez uyarısını göster
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

      {/* FOOTER - Privacy ve Terms çıkarıldı */}
      <footer>
        <p>© 2026 Tick Reminder. All rights reserved.</p>
      </footer>

      {/* ÇEREZ İZNİ (COOKIE BANNER) - Temayla uyumlu hale getirildi */}
      {showCookie && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '500px',
          background: '#141428',
          padding: '20px',
          borderRadius: '20px',
          border: '1px solid #7c7cff',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          zIndex: 9999,
          boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#eaeaf0', lineHeight: '1.5' }}>
            Size daha iyi bir deneyim sunmak için çerezleri kullanıyoruz. Devam ederek çerez kullanımını kabul etmiş olursunuz.
          </p>
          <button 
            onClick={() => setShowCookie(false)}
            style={{
              background: '#7c7cff',
              color: '#000',
              border: 'none',
              padding: '12px',
              borderRadius: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'opacity 0.2s'
            }}
          >
            İzin Ver ve Devam Et
          </button>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0b0b14;
          color: #eaeaf0;
        }
        .hero {
          padding: 80px 20px 140px;
          text-align: center;
          background: radial-gradient(circle at top, #1b1b3a, #0b0b14);
        }
        .hero h1 { font-size: 3.2rem; line-height: 1.2; margin-top: 20px; }
        .hero span { color: #7c7cff; }
        .hero p { max-
