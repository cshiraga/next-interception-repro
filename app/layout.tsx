import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interception Repro",
  description: "Next.js Intercepting Route Bug Reproduction",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
        {children}
        {modal}
      </body>
    </html>
  );
}
