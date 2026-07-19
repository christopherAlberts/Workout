import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FORMA — Anatomy-led Workout & Stretch Lab",
  description:
    "Select a muscle on a 3D body, then explore tailored exercises and stretches with visual form guides and detailed coaching cues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
