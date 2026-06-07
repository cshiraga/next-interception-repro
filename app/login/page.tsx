import Link from "next/link";

export default function LoginPage() {
  return (
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ border: "2px solid #ccc", padding: 32, maxWidth: 360, width: "100%" }}>
        <div style={{ fontSize: 12, color: "#999", marginBottom: 8 }}>FULL PAGE (not intercepted)</div>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Login /login</h1>
        <p style={{ color: "#666", fontSize: 14, margin: "0 0 16px" }}>
          This is the full-page version of /login.<br />
          When intercepted, a modal overlay should appear instead.
        </p>
        <Link href="/" style={{ color: "#00e", fontSize: 14 }}>← Back to Home</Link>
      </div>
    </div>
  );
}
