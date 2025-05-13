import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://santafe-selection.vercel.app'),
  title: {
    template: '%s | Santa Fe Selection',
    default: 'Santa Fe Selection - Your Guide to The City Different',
  },
  description: 'Discover the best of Santa Fe - art galleries, dining, lodging, and cultural activities in the heart of New Mexico.',
  keywords: ['Santa Fe', 'New Mexico', 'art galleries', 'dining', 'lodging', 'tourism', 'culture'],
  openGraph: {
    title: 'Santa Fe Selection',
    description: 'Your guide to the best of Santa Fe, New Mexico',
    url: '/',
    siteName: 'Santa Fe Selection',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Santa Fe Selection - Your Guide to The City Different',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santa Fe Selection',
    description: 'Your guide to the best of Santa Fe, New Mexico',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-background">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}