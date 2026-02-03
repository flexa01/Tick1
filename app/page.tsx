"use client";

import React from "react";

export default function HomePage() {
  return (
    <>
      <main style={{ maxWidth: 1100, margin: "100px auto", padding: "0 24px" }}>
        
        {/* HERO */}
        <section style={{ marginBottom: 120 }}>
          <h1 style={{ fontSize: 64, lineHeight: 1.1 }}>
            Tick ⏱️
            <br />
            Remember less. Live more.
          </h1>

          <p style={{ fontSize: 22, maxWidth: 700, marginTop: 24, opacity: 0.8 }}>
            Tick is a reminder system that rewards consistency.
          </p>
        </section>

        <Section title="Reminders shouldn’t stress you">
          Tick is calm by design. No pressure. No noise.
        </Section>

        <Section title="Consistency beats motivation">
          Small actions, repeated daily.
        </Section>

        <Section title="Every reminder earns value">
          Your time turns into points.
        </Section>

        <Section title="Progress you can feel">
          Not abstract. Real.
        </Section>

        <Section title="Rewards create momentum">
          Unlock upgrades and customizations.
        </Section>

        <Section title="Built for real life">
          Miss a task? Tick understands.
        </Section>

        <Section title="Minimal by default">
          Nothing extra. Everything intentional.
        </Section>

        <Section title="Your system, your rules">
          Tick adapts to you.
        </Section>

        <footer
          style={{
            marginTop: 120,
            borderTop: "1px solid #e5e5e5",
            paddingTop: 32,
            fontSize: 14,
            opacity: 0.6,
          }}
        >
          © {new Date()
