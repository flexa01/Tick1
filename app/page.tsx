export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <h1>
          Remember Better. <br />
          <span>Live More Consistently.</span>
        </h1>

        <p>
          Tick is a modern reminder application designed to help you stay
          consistent, build habits, and feel rewarded for your progress.
        </p>

        <button disabled>Mobile App — Coming Soon</button>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>Why We Built Tick</h2>
        <p className="center-text">
          Most reminder apps only notify you — they don’t motivate you.
          Tick changes that by turning daily consistency into a rewarding
          experience.
        </p>

        <p className="center-text muted">
          Every completed reminder earns you points. These points unlock
          customization options, features, and future in-app upgrades.
          Productivity shouldn’t feel like pressure — it should feel rewarding.
        </p>
      </section>

      {/* FEATURES */}
      <section className="section dark">
        <h2>Core Features</h2>

        <div className="grid">
          <div className="card">
            <h3>Simple & Smart Reminders</h3>
            <p>
              Create reminders in seconds. Clean design, no unnecessary steps,
              no distractions.
            </p>
          </div>

          <div className="card">
            <h3>Point-Based Motivation</h3>
            <p>
              Completing reminders earns points, reinforcing consistency
              instead of guilt.
            </p>
          </div>

          <div className="card">
            <h3>Customization & Upgrades</h3>
            <p>
              Spend your points on themes, UI modifications and premium
              features inside the app.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2>How Tick Works</h2>

        <ol className="steps">
          <li>Create a reminder for something that matters to you</li>
          <li>Complete the task and mark it as done</li>
          <li>Earn points and unlock personalization options</li>
        </ol>
      </section>

      {/* VISION */}
      <section className="section dark">
        <h2>Our Vision</h2>

        <p className="center-text">
          Tick is not just a reminder app. It’s a habit-building system focused
          on long-term consistency.
        </p>

        <p className="center-text muted">
          Our goal is to create a lightweight, fast and enjoyable experience
          that helps users improve their daily routines without stress.
        </p>
      </section>

      {/* ROADMAP */}
      <section className="section">
        <h2>What’s Coming Next</h2>

        <div className="grid">
          <div className="card">
            <h3>Mobile App Release</h3>
            <p>iOS & Android versions with full sync support.</p>
          </div>

          <div className="card">
            <h3>Advanced Reward System</h3>
            <p>More unlockables, streak bonuses and seasonal themes.</p>
          </div>

          <div className="card">
            <h3>Cloud Sync</h3>
            <p>Access your reminders across devices securely.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Tick Reminder. All rights reserved.</p>

        <div className="links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
        </div>
      </footer>

      {/* STYLES */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0b0b14;
          color: #eaeaf0;
        }

        .hero {
          padding: 140px 20px;
          text-align: center;
          background: radial-gradient(circle at top, #1b1b3a, #0b0b14);
        }

        .hero h1 {
          font-size: 3.2rem;
          line-height: 1.2;
        }

        .hero span {
          color: #7c7cff;
        }

        .hero p {
          max-width: 640px;
          margin: 25px auto;
          opacity: 0.85;
        }

        .hero button {
          margin-top: 30px;
          padding: 15px 30px;
          font-size: 1rem;
          border-radius: 14px;
          border: none;
          background: #7c7cff;
          color: #000;
          opacity: 0.7;
          cursor: not-allowed;
        }

        .section {
          padding: 90px 20px;
          max-width: 1100px;
          margin: auto;
        }

        .section h2 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.1rem;
        }

        .center-text {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 20px;
        }

        .muted {
          opacity: 0.7;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 26px;
        }

        .card {
          background: #141428;
          padding: 28px;
          border-radius: 18px;
        }

        .card h3 {
          margin-bottom: 10px;
        }

        .card p {
          opacity: 0.8;
        }

        .dark {
          background: #0f0f1f;
          border-top: 1px solid #1f1f3a;
          border-bottom: 1px solid #1f1f3a;
        }

        .steps {
          max-width: 520px;
          margin: auto;
          font-size: 1.1rem;
          line-height: 2.1;
        }

        footer {
          padding: 45px 20px;
          text-align: center;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        footer .links {
          margin-top: 12px;
          display: flex;
          gap: 22px;
          justify-content: center;
        }

        footer a {
          color: #7c7cff;
          text-decoration: none;
        }

        footer a:hover {
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}
