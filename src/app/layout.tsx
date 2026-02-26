import { Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Warning from "@/components/layout/Warning";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "../components/theme-provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html
      lang="en"
      className={`${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background h-screen">
        <ThemeProvider>
          <Warning />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
