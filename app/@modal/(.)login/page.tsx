"use client";

import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.4)" }}>
      <div style={{ border: "2px solid #000", background: "#fff", padding: 32, maxWidth: 360, width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 12, color: "#999" }}>INTERCEPTED MODAL (working)</div>
          <button
            onClick={() => router.back()}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#999", fontSize: 20, padding: 0 }}
          >
            ✕
          </button>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>Login Modal</h2>
        <p style={{ color: "#666", fontSize: 14, margin: "0 0 16px" }}>
          This modal appears via interception route (.)login.
        </p>

      </div>
    </div>
  );
}
