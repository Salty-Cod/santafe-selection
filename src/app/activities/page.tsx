'use client';

import { motion } from 'framer-motion';
import FeaturedSection from '@/components/FeaturedSection';



const ACTIVITIES = [
  {
    title: 'Day Trips & Tours',
    description: 'Explore Santa Fe and Northern New Mexico with expert guides.',
    image: '/images/day-trips.jpg',
    link: '/activities/day-trips',
  },
  {
    title: 'Outdoor Adventures',
    description: 'Hiking, biking, skiing and more in the beautiful Southwest.',
    image: '/images/outdoor.jpg',
    link: '/activities/outdoor',
  },
  {
    title: 'Arts & Culture',
    description: 'Museums, galleries, and historical sites showcasing rich cultural heritage.',
    image: '/images/arts-culture.jpg',
    link: '/activities/arts-culture',
  },
  {
    title: 'Events & Festivals',
    description: 'Annual markets, fiestas, and cultural celebrations.',
    image: '/images/events.jpg',
    link: '/activities/events',
  },
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-6">
              Things to Do in Santa Fe
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Discover the endless possibilities for adventure, culture, and entertainment in The City Different.
            </p>
          </motion.div>
        </div>
      </section>

      <FeaturedSection
        title="Explore Activities"
        items={ACTIVITIES}
        className="bg-amber-50/50 dark:bg-amber-950/10"
      />
    </main>
  );
}
