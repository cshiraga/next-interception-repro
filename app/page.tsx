"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, padding: 32 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Interception Repro</h1>
      <p style={{ color: "#666", textAlign: "center", maxWidth: 400, margin: 0 }}>
        1. Click "Login" → modal should appear (interception works)<br />
        2. Visit /login directly → full page<br />
        3. Go back here and click "Login" again → ❌ bug: full page instead of modal
      </p>
      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={() => router.push("/login")}
          style={{ padding: "10px 24px", background: "#000", color: "#fff", border: "none", cursor: "pointer", fontSize: 15 }}
        >
          Login (router.push)
        </button>
        <Link
          href="/other"
          style={{ padding: "10px 24px", border: "1px solid #ccc", color: "#000", textDecoration: "none", fontSize: 15 }}
        >
          Other Page (to go back)
        </Link>
      </div>
    </div>
  );
}
