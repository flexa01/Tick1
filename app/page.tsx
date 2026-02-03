import React from "react";

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "100px auto",
        padding: "0 24px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: 120 }}>
        <h1 style={{ fontSize: 64, lineHeight: 1.1, marginBottom: 24 }}>
          Tick ⏱️  
          <br />
          Your Time. Your Rules.
        </h1>

        <p style={{ fontSize: 20, maxWidth: 700, opacity: 0.85 }}>
          Tick is a modern reminder and motivation platform designed to help you
          stay consistent, focused, and rewarded for your time.  
          No noise. No pressure. Just progress.
        </p>
      </section>

      {/* WHY TICK */}
      <section style={{ marginBottom: 100 }}>
        <h2 style={{ fontSize: 36, marginBottom: 16 }}>
          Why Tick exists
        </h2>

        <p style={{ maxWidth: 800, fontSize: 18 }}>
          Most reminder apps only notify you. Tick goes further.  
          It turns your daily tasks into small wins by combining reminders,
          points, and rewards into a single calm experience.
        </p>
      </section>

      {/* FEATURES */}
      <section style={{ marginBottom: 100 }}>
        <h2 style={{ fontSize: 36, marginBottom: 24 }}>
          What Tick helps you do
        </h2>

        <ul style={{ fontSize: 18, lineHeight: 1.8 }}>
          <li>✔ Never forget important tasks</li>
          <li>✔ Build habits without stress</li>
          <li>✔ Earn points by staying consistent</li>
