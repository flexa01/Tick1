export default function TermsPage() {
  return (
    <section style={{ maxWidth: 800, margin: "100px auto", padding: 24 }}>
      <h1>Terms of Use</h1>

      <p>
        By using Tick, you agree to the following terms.
      </p>

      <h2>Usage</h2>
      <p>
        Tick is provided for personal productivity purposes only.
      </p>

      <h2>Rewards & Points</h2>
      <p>
        Points have no real-world monetary value and are limited to in-app use.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms at any time.
      </p>

      <p style={{ opacity: 0.6 }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </section>
  );
}
