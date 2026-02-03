export default function PrivacyPage() {
  return (
    <section style={{ maxWidth: 800, margin: "100px auto", padding: 24 }}>
      <h1>Privacy Policy</h1>

      <p>
        Tick respects your privacy. This policy explains how we handle your
        data.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect basic usage data to improve app functionality and user
        experience.
      </p>

      <h2>Data Usage</h2>
      <p>
        Your data is used solely to operate and enhance the Tick application.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable measures to protect your information.
      </p>

      <p style={{ opacity: 0.6 }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </section>
  );
}
