'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
  return (
    <section
      className={`relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden ${className}`}
      aria-label="Santa Fe Selection Hero"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1727813581394-82b59b93cd25?auto=format&fit=crop&w=1200&q=80"
        alt="Santa Fe cityscape at sunset"
        fill
        priority
        className="object-cover brightness-75 dark:brightness-50"
        sizes="100vw"
        quality={100}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 dark:from-black/80 dark:to-black/90" />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight text-amber-100 drop-shadow-lg"
        >
          SANTA FE SELECTION
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto text-white/90 drop-shadow-md"
        >
          Your curated guide to the art, culture, and soul of The City Different
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-x-6"
        >
          <Link
            href="/dining"
            className="
              inline-block bg-amber-500 hover:bg-amber-600
              text-black font-medium px-8 py-3
              rounded-full text-base
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-amber-500/25
              shadow-lg
              dark:text-white/90 dark:bg-amber-600 dark:hover:bg-amber-700
            "
          >
            Explore Dining
          </Link>
          <Link
            href="/activities"
            className="
              inline-block bg-white/10 hover:bg-white/20
              text-white font-medium px-8 py-3
              rounded-full text-base
              transition-all duration-300 ease-out
              hover:scale-105
              backdrop-blur-sm
              border border-white/20 hover:border-white/30
              shadow-lg shadow-black/5
            "
          >
            Browse Activities
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
