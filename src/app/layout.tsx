import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-600">
                    Santa Fe Selection
                  </span>
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                  <Link href="/dining" className="text-foreground/80 hover:text-amber-600 transition-colors">
                    Dining
                  </Link>
                  <Link href="/activities" className="text-foreground/80 hover:text-amber-600 transition-colors">
                    Activities
                  </Link>
                  <Link href="/lodging" className="text-foreground/80 hover:text-amber-600 transition-colors">
                    Lodging
                  </Link>
                  <Link href="/art" className="text-foreground/80 hover:text-amber-600 transition-colors">
                    Art & Culture
                  </Link>
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </header>

          <main className="min-h-screen bg-background text-foreground">
            {children}
          </main>

          <footer className="border-t bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-amber-600">Santa Fe Selection</h3>
                  <p className="text-muted-foreground">Your ultimate guide to exploring Santa Fe's art, culture, and cuisine.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-amber-600">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/dining" className="text-muted-foreground hover:text-amber-600 transition-colors">
                        Dining Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/activities" className="text-muted-foreground hover:text-amber-600 transition-colors">
                        Activities
                      </Link>
                    </li>
                    <li>
                      <Link href="/lodging" className="text-muted-foreground hover:text-amber-600 transition-colors">
                        Where to Stay
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-amber-600">Connect With Us</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-amber-600 transition-colors">Instagram</a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-amber-600 transition-colors">Facebook</a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-amber-600 transition-colors">Twitter</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-amber-600">Newsletter</h3>
                  <form className="space-y-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-md bg-background border border-input ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                    <button className="w-full bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Santa Fe Selection. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}