'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

interface HeroProps {
  className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden ${className}`}
      aria-label="Santa Fe Selection Hero"
    >
      {/* Background Image */}
      <Image
        src="/images/santa-fe-og.jpg"
        alt="Santa Fe landscape at sunset"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 container mx-auto px-4 text-center text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide"
        >
          SANTA FE SELECTION
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto"
        >
          Discover the authentic Santa Fe experience
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/plan"
            className="
              inline-block bg-amber-500 hover:bg-amber-600 
              text-black font-semibold px-8 py-4 
              rounded-full text-sm md:text-base
              transition-all duration-300 ease-in-out
              hover:transform hover:scale-105
              shadow-lg hover:shadow-xl
            "
            aria-label="Plan your Santa Fe trip"
          >
            PLAN YOUR TRIP
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
