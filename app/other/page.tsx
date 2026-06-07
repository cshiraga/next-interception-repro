import Link from "next/link";

export default function OtherPage() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Other Page</h1>
      <p style={{ color: "#666", margin: 0 }}>
        Navigate back to Home, then try Login again to see the bug.
      </p>
      <Link
        href="/"
        style={{ padding: "10px 24px", background: "#000", color: "#fff", textDecoration: "none", fontSize: 15 }}
      >
        Back to Home
      </Link>
    </div>
  );
}
