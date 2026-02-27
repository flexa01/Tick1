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

      {/* --- TÜM SECTIONS (BÜTÜNLÜK KORUNDU) --- */}
      <section className="section">
        <h2>A Different Kind of Reminder App</h2>
        <p className="
