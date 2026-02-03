"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    setShowCookie(true);
  }, []);

  return (
    <main>
      <nav style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <img src="/icon.png" alt="Tick Logo" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
      </nav>

      <section className="hero">
        <div style={{ marginBottom: '20px' }}>
          <img src="/opengraph-image.png" alt="Tick App Preview" style={{ maxWidth: '300px', borderRadius: '20px', boxShadow: '0 0 30px rgba(124, 124, 255, 0.3)' }} />
        </div>
        <h1>Tick <br /> <span>Remember better. Live consistent.</span></h1>
        <p>Tick is a modern reminder application built to help you stay consistent, build habits, and turn everyday discipline into something rewarding.</p>
        <button disabled style={{ marginTop: '30px', padding: '15px 30px', borderRadius: '14px', border: 'none', background: '#7c7cff', color: '#000', fontWeight: 'bold' }}>Mobile App — Coming Soon</button>
      </section>

      <section className="section" style={{ padding: '90px 20px', maxWidth: '1100px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>A Different Kind of Reminder App</h2>
        <p style={{ textAlign: 'center' }}>Most reminder apps focus on alerts. Tick focuses on people.</p>
      </section>

      <section className="section" style={{ padding: '90px 20px', maxWidth: '1100px', margin: 'auto', background: '#0f0f1f' }}>
        <h2 style={{ textAlign: 'center' }}>Core Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '26px' }}>
          <div style={{ background: '#141428', padding: '28px', borderRadius: '18px' }}>
            <h3>Smart Reminders</h3>
            <p>Clean, minimal reminders that respect your attention.</p>
          </div>
          <div style={{ background: '#141428', padding: '28px', borderRadius: '18px' }}>
            <h3>Point System</h3>
            <p>Earn points for every completed reminder.</p>
          </div>
          <div style={{ background: '#141428', padding: '28px', borderRadius: '18px' }}>
            <h3>Customization</h3>
            <p>Use points to unlock themes.</p>
          </div>
        </div>
      </section>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.6, borderTop: '1px solid #1f1f3a' }}>
        <p>© 2026 Tick Reminder. All rights reserved.</p>
      </footer>

      {showCookie && (
        <div style={{
          position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
          width: '90%', maxWidth: '500px', background: '#141428', padding: '20px',
          borderRadius: '20px', border: '1px solid #7c7cff', display: 'flex',
          flexDirection: 'column', gap: '15px', zIndex: 9999, textAlign: 'center'
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

      <style jsx global>{`
        body { margin: 0; background: #0b0b14; color: #eaeaf0; font-family: sans-serif; }
        .hero { padding: 80px 20px 140px; text-align: center; background: radial-gradient(circle at top, #1b1b3a, #0b0b14); }
        .hero h1 { font-size: 3rem; }
        .hero span { color: #7c7cff; }
      `}</style>
    </main>
  );
}
