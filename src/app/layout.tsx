import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thousandify",
  description: "Spotify Artists Ranking by monthly listeners (updated daily)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
