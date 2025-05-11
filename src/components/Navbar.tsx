'use client';

import * as React from 'react';
import { useState, memo } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MenuItem {
  href: string;
  label: string;
}

interface NavbarProps {
  className?: string;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const menuItems: MenuItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/activities', label: 'Activities' },
  { href: '/dining', label: 'Dining' },
  { href: '/shopping', label: 'Shopping' },
  { href: '/art-culture', label: 'Art & Culture' },
  { href: '/lodging', label: 'Lodging' },
];

const NavLink = memo(({ href, children, onClick, className }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      'transition-colors duration-200',
      'hover:text-amber-700 dark:hover:text-amber-500',
      className
    )}
  >
    {children}
  </Link>
));
NavLink.displayName = 'NavLink';

const CTAButton = memo(({ onClick }: { onClick?: () => void }) => (
  <NavLink
    href="/guide"
    onClick={onClick}
    className={cn(
      'inline-block bg-amber-700 hover:bg-amber-800 text-white',
      'text-xs md:text-sm px-5 py-2 rounded-full font-semibold',
      'tracking-wide transition-all duration-300',
      'hover:shadow-lg hover:scale-105'
    )}
  >
    Request Free Guide
  </NavLink>
));
CTAButton.displayName = 'CTAButton';

export default function Navbar({ className = '' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full bg-white/95 dark:bg-gray-900/95',
        'backdrop-blur-sm shadow-md px-4 md:px-8 py-4',
        'flex justify-between items-center font-sans z-50',
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className={cn(
          'text-xl md:text-2xl font-bold tracking-wide',
          'text-gray-800 dark:text-white font-serif',
          'hover:text-amber-700 dark:hover:text-amber-500 transition-colors'
        )}
        aria-label="Santa Fe Selection Home"
      >
        SANTA FE SELECTION
      </Link>

      <ul className="hidden lg:flex gap-6 text-sm text-gray-700 dark:text-gray-300 font-medium uppercase">
        {menuItems.map((item) => (
          <li key={item.href}>
            <NavLink
              href={item.href}
              className={cn(
                'relative after:absolute after:bottom-0 after:left-0',
                'after:w-0 hover:after:w-full after:h-0.5',
                'after:bg-amber-700 dark:after:bg-amber-500',
                'after:transition-all after:duration-300'
              )}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <CTAButton />
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={cn(
          'lg:hidden p-2',
          'text-gray-600 hover:text-amber-700',
          'dark:text-gray-300 dark:hover:text-amber-500',
          'transition-colors duration-200'
        )}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={cn(
              'fixed top-[72px] right-0 w-full h-screen',
              'bg-white dark:bg-gray-900 lg:hidden',
              'flex flex-col items-center pt-8',
              'shadow-xl'
            )}
          >
            <ul className="w-full text-center space-y-6">
              {menuItems.map((item) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <NavLink
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'block py-2 text-lg font-medium',
                      'text-gray-700 dark:text-gray-300'
                    )}
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="pt-6"
              >
                <CTAButton onClick={() => setIsMenuOpen(false)} />
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
