import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Warning from "@/components/layout/Warning";
import Header from "@/components/layout/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

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
    <html lang="en" className={`${roboto.variable} antialiased`}>
      <body className="bg-linear-to-b from-green-bg-1 to-green-bg-2 text-white h-screen">
        <Warning />
        <Header />
        {children}
      </body>
    </html>
  );
}
