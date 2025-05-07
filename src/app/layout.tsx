import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santa Fe Selection",
  description: "The ultimate local guide to Santa Fe travel, dining, lodging, art, and culture.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Santa Fe Selection",
    description: "Plan your perfect Santa Fe adventure with curated local insights.",
    url: "https://santafe-selection.vercel.app",
    siteName: "Santa Fe Selection",
    images: [
      {
        url: "/images/santa-fe-og.jpg",
        width: 1200,
        height: 630,
        alt: "Santa Fe Selection - travel, food, art & adventure",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Fe Selection",
    description: "Curated local insights for your next Santa Fe adventure.",
    images: ["/images/santa-fe-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}