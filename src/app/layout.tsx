import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VisualMAX | Next-Generation Digital Signage Platform",
  description: "Bring your brand to life at every location with a cloud-based, scalable, and secure digital signage management system. Enterprise-grade AWS infrastructure with 99.9% uptime.",
  keywords: ["digital signage", "signage platform", "enterprise signage", "screen management", "content management", "videowall", "AWS cloud"],
  authors: [{ name: "Techmax Technology" }],
  openGraph: {
    title: "VisualMAX | Next-Generation Digital Signage Platform",
    description: "Command every screen. Enterprise digital signage platform with AWS cloud infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {/* Noise Texture Overlay */}
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
