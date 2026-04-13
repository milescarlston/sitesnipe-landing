import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0c",
        fontFamily: "var(--font-plus-jakarta), 'Plus Jakarta Sans', sans-serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          background: "#111114",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px",
          padding: "48px 40px",
          maxWidth: "440px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            letterSpacing: "-0.5px",
            marginBottom: "32px",
          }}
        >
          <span style={{ color: "#f0f0f2" }}>Site</span>
          <span style={{ color: "#00e87b" }}>Snipe</span>
        </div>

        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "#f0f0f2",
            letterSpacing: "-0.5px",
            marginBottom: "12px",
          }}
        >
          Coming Soon
        </h1>

        <p
          style={{
            fontSize: "0.95rem",
            color: "#8a8a96",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          We&apos;re putting the finishing touches on SiteSnipe. Check back
          soon.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#00e87b",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 600,
            transition: "opacity 0.2s",
          }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
