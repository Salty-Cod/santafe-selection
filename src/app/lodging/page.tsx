'use client';

import { motion } from 'framer-motion';
import FeaturedSection from '@/components/FeaturedSection';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const LODGING_TYPES = [
  {
    title: 'Hotels & Resorts',
    description: 'Luxury accommodations and full-service resorts.',
    image: '/images/hotels.jpg',
    link: '/lodging/hotels',
  },
  {
    title: 'Inns & B&Bs',
    description: 'Charming bed and breakfasts with local character.',
    image: '/images/inns.jpg',
    link: '/lodging/inns',
  },
  {
    title: 'Vacation Rentals',
    description: 'Private homes and casitas for an authentic stay.',
    image: '/images/rentals.jpg',
    link: '/lodging/rentals',
  },
];

const FEATURED_PROPERTIES = [
  {
    title: 'La Fonda on the Plaza',
    description: 'Historic luxury hotel in the heart of downtown Santa Fe.',
    image: '/images/la-fonda.jpg',
    link: '/lodging/la-fonda',
  },
  {
    title: 'Inn of the Five Graces',
    description: 'Unique luxury hotel with exquisite Southwestern decor.',
    image: '/images/five-graces.jpg',
    link: '/lodging/five-graces',
  },
  {
    title: 'El Rey Court',
    description: 'Stylish motor court with modern Southwest charm.',
    image: '/images/el-rey.jpg',
    link: '/lodging/el-rey',
  },
];

export default function LodgingPage() {
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
              Where to Stay in Santa Fe
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Find your perfect accommodation, from luxury hotels to charming bed & breakfasts.
            </p>
          </motion.div>
        </div>
      </section>

      <FeaturedSection
        title="Types of Lodging"
        items={LODGING_TYPES}
        className="bg-amber-50/50 dark:bg-amber-950/10"
      />

      <FeaturedSection
        title="Featured Properties"
        items={FEATURED_PROPERTIES}
      />

      <section className="py-16 bg-amber-50/50 dark:bg-amber-950/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-8 text-center">
            Area Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/downtown.jpg"
                    alt="Downtown Santa Fe"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Downtown / Plaza
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Stay in the heart of Santa Fe, steps from restaurants and attractions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/canyon-road.jpg"
                    alt="Canyon Road"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Canyon Road
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Immerse yourself in Santa Fe's art scene with galleries at your doorstep.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/railyard.jpg"
                    alt="Railyard District"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Railyard District
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Experience Santa Fe's contemporary side in this vibrant neighborhood.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
