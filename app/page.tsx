export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <h1>
          Never Forget. <br />
          <span>Stay Consistent.</span>
        </h1>
        <p>
          A reminder app that rewards you for completing tasks.
          Build habits, earn points, unlock upgrades.
        </p>
        <button disabled>Mobile App Coming Soon</button>
      </section>

      {/* FEATURES */}
      <section className="section">
        <h2>Why Tick?</h2>
        <div className="grid">
          <div className="card">
            <h3>Smart Reminders</h3>
            <p>Simple reminders that keep you focused every day.</p>
          </div>
          <div className="card">
            <h3>Earn Points</h3>
            <p>Complete reminders and earn points instantly.</p>
          </div>
          <div className="card">
            <h3>Unlock Rewards</h3>
            <p>Use points for themes, features and custom upgrades.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section dark">
        <h2>How It Works</h2>
        <ol className="steps">
          <li>Create a reminder</li>
          <li>Complete your task</li>
          <li>Earn points & customize your app</li>
        </ol>
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

        main {
          width: 100%;
        }

        .hero {
          padding: 120px 20px;
          text-align: center;
          background: radial-gradient(circle at top, #1b1b3a, #0b0b14);
        }

        .hero h1 {
          font-size: 3rem;
          line-height: 1.2;
        }

        .hero span {
          color: #7c7cff;
        }

        .hero p {
          max-width: 600px;
          margin: 20px auto;
          opacity: 0.85;
        }

        .hero button {
          margin-top: 30px;
          padding: 14px 28px;
          font-size: 1rem;
          border-radius: 12px;
          border: none;
          background: #7c7cff;
          color: #000;
          opacity: 0.7;
          cursor: not-allowed;
        }

        .section {
          padding: 80px 20px;
          max-width: 1100px;
          margin: auto;
        }

        .section h2 {
          text-align: center;
          margin-bottom: 50px;
          font-size: 2rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .card {
          background: #141428;
          padding: 24px;
          border-radius: 16px;
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
          max-width: 500px;
          margin: auto;
          font-size: 1.1rem;
          line-height: 2;
        }

        footer {
          padding: 40px 20px;
          text-align: center;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        footer .links {
          margin-top: 10px;
          display: flex;
          gap: 20px;
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
