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
        <p>Tick is a modern reminder application built to help you stay consistent.</p>
        <button disabled>Mobile App — Coming Soon</button>
      </section>

      <footer>
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

      <style>{`
        body { margin: 0; background: #0b0b14; color: #eaeaf0; font-family: sans-serif; }
        .hero { padding: 80px 20px 140px; text-align: center; background: radial-gradient(circle at top, #1b1b3a, #0b0b14); }
        .hero h1 { font-size: 3rem; }
        .hero span { color: #7c7cff; }
        footer { padding: 40px; text-align: center; opacity: 0.6; border-top: 1px solid #1f1f3a; }
      `}</style>
    </main>
  );
}
