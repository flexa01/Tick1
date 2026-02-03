export default function HomePage() {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "120px auto",
        padding: "0 24px",
      }}
    >
      {/* HERO */}
      <h1
        style={{
          fontSize: 56,
          lineHeight: 1.1,
          marginBottom: 24,
        }}
      >
        Turn reminders into rewards.
      </h1>

      <p style={{ fontSize: 18, opacity: 0.8, maxWidth: 600 }}>
        Tick is a smart reminder app that rewards consistency.  
        Complete reminders, earn points, unlock customizations.
      </p>

      {/* FEATURES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
          marginTop: 80,
        }}
      >
        {[
          ["⏰ Smart Reminders", "Never forget important tasks again."],
          ["⭐ Earn Points", "Gain points for every completed reminder."],
          ["🎨 Customization", "Unlock themes and app modifications."],
          ["📈 Motivation System", "Stay consistent with gamified progress."],
        ].map(([title, desc]) => (
          <div
            key={title}
            style={{
              padding: 28,
              borderRadius: 16,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3>{title}</h3>
            <p style={{ opacity: 0.7 }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: 120,
          padding: 48,
          borderRadius: 24,
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(59,130,246,0.15))",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2>Coming soon on mobile.</h2>
        <p style={{ opacity: 0.8 }}>
          Tick is currently under development.  
          The official mobile app will be available soon.
        </p>
      </div>
    </section>
  );
}
