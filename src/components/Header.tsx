'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
              Santa Fe Selection
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/dining" 
              className="text-foreground/80 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Dining
            </Link>
            <Link 
              href="/activities" 
              className="text-foreground/80 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Activities
            </Link>
            <Link 
              href="/lodging" 
              className="text-foreground/80 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Lodging
            </Link>
            <Link 
              href="/art-galleries" 
              className="text-foreground/80 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Art & Culture
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
