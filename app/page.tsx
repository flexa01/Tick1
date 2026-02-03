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
          fontSize: 58,
          lineHeight: 1.1,
          marginBottom: 24,
        }}
      >
        Never forget again.  
        <br />
        Turn reminders into rewards. ⏰✨
      </h1>

      <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 700 }}>
        <strong>Tick</strong> is a smart reminder app designed to help you stay
        consistent, focused, and motivated.  
        Complete your reminders, earn points, and unlock powerful
        customizations — all while building better habits.
      </p>

      {/* INFO BLOCK */}
      <div
        style={{
          marginTop: 48,
          fontSize: 16,
          opacity: 0.75,
          maxWidth: 720,
        }}
      >
        Tick isn’t just another reminder app.  
        It’s a productivity system that rewards discipline and consistency.
        Every completed reminder brings you one step closer to unlocking new
        features, themes, and enhancements inside the app.
      </div>

      {/* FEATURES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
          marginTop: 96,
        }}
      >
        {[
          [
            "⏰ Smart Reminders",
            "Create reminders that actually work. Tick helps you remember what matters, exactly when you need it.",
          ],
          [
            "⭐ Reward System",
            "Every completed reminder earns points. Your progress is always visible and rewarding.",
          ],
          [
            "🎨 Personal Customization",
            "Use earned points to unlock themes, visual upgrades, and app modifications.",
          ],
          [
            "📈 Habit Building",
            "Consistency turns into progress. Tick helps you build habits that last.",
          ],
          [
            "🔔 Motivation Focused",
            "Gentle nudges, clean design, and meaningful rewards keep you motivated.",
          ],
          [
            "🔒 Privacy First",
            "Your data stays yours. Tick is built with privacy and simplicity in mind.",
          ],
        ].map(([title, desc]) => (
          <div
            key={title}
            style={{
              padding: 32,
              borderRadius: 18,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <h3 style={{ marginBottom: 12 }}>{title}</h3>
            <p style={{ opacity: 0.75 }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* STORY */}
      <section
        style={{
          marginTop: 140,
          maxWidth: 800,
        }}
      >
        <h2>Why Tick?</h2>
        <p style={{ opacity: 0.8 }}>
          Most reminder apps tell you what to do — and then stop caring.  
          Tick is different. It rewards action, not intention.
        </p>

        <p style={{ opacity: 0.75 }}>
          By turning reminders into a points-based system, Tick encourages
          consistency and makes productivity feel rewarding instead of
          overwhelming. Small wins add up — and Tick makes sure you see them.
        </p>
      </section>

      {/* CTA */}
      <div
        style={{
          marginTop: 140,
          padding: 56,
          borderRadius: 26,
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.28), rgba(59,130,246,0.18))",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2>Coming soon on mobile 📱</h2>
        <p style={{ opacity: 0.85, maxWidth: 600 }}>
          Tick is currently under active development.  
          The official mobile app will be available soon on supported platforms.
          Stay tuned and get ready to upgrade the way you stay organized.
        </p>
      </div>
    </section>
  );
}
