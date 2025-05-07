import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = Inconsolata({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santafe-selection.vercel.app"),
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
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <header className="bg-background shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex justify-between items-center">
                <div className="text-2xl font-bold text-red-700">Santa Fe Selection</div>
                <div className="flex items-center space-x-4">
                  <a href="/" className="text-foreground/80 hover:text-red-700">Home</a>
                  <a href="/about" className="text-foreground/80 hover:text-red-700">About</a>
                  <a href="/contact" className="text-foreground/80 hover:text-red-700">Contact</a>
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </header>

          <main className="min-h-screen">
            {children}
          </main>

          <footer className="bg-white border-t">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Santa Fe Selection</h3>
                  <p className="text-gray-600">Your ultimate guide to exploring Santa Fe's art, culture, and cuisine.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="/" className="text-gray-600 hover:text-red-700">Home</a></li>
                    <li><a href="/about" className="text-gray-600 hover:text-red-700">About Us</a></li>
                    <li><a href="/contact" className="text-gray-600 hover:text-red-700">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                  <div className="space-y-2">
                    <a href="#" className="text-gray-600 hover:text-red-700">Instagram</a>
                    <a href="#" className="text-gray-600 hover:text-red-700">Facebook</a>
                    <a href="#" className="text-gray-600 hover:text-red-700">Twitter</a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                  <form className="space-y-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <button className="w-full bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="border-t mt-8 pt-8 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Santa Fe Selection. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}