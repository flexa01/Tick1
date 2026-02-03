import "./globals.css";

export const metadata = {
  title: "Tick – Smart Reminder App",
  description: "Earn points by completing reminders. Customize your experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, system-ui, sans-serif",
          background:
            "radial-gradient(circle at top, #1b1b3a 0%, #0b0b0f 40%)",
          color: "#eaeaf0",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            padding: "24px 48px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <strong style={{ letterSpacing: 1 }}>Tick</strong>
          <span style={{ opacity: 0.6 }}>Smart Reminders</span>
        </header>

        {/* CONTENT */}
        <main style={{ minHeight: "80vh" }}>{children}</main>

        {/* FOOTER */}
        <footer
          style={{
            padding: "48px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            fontSize: 14,
            opacity: 0.7,
            textAlign: "center",
          }}
        >
          <a href="/privacy" style={{ color: "#b8b8ff" }}>
            Privacy Policy
          </a>{" "}
          ·{" "}
          <a href="/terms" style={{ color: "#b8b8ff" }}>
            Terms of Use
          </a>
          <div style={{ marginTop: 12 }}>
            © {new Date().getFullYear()} Tick. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
