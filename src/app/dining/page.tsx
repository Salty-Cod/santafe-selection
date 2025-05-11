'use client';

import { motion } from 'framer-motion';
import { FeaturedSection } from '@/components/FeaturedSection';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const CUISINES = [
  {
    title: 'New Mexican',
    description: 'Traditional local cuisine with famous red and green chile.',
    image: '/images/new-mexican.jpg',
    link: '/dining/new-mexican',
  },
  {
    title: 'Fine Dining',
    description: 'Upscale restaurants featuring innovative Southwestern cuisine.',
    image: '/images/fine-dining.jpg',
    link: '/dining/fine-dining',
  },
  {
    title: 'Casual Eats',
    description: 'Relaxed cafes and local favorites for everyday dining.',
    image: '/images/casual-eats.jpg',
    link: '/dining/casual',
  },
];

const TOP_PICKS = [
  {
    title: 'The Shed',
    description: 'Historic restaurant known for authentic New Mexican dishes.',
    image: '/images/the-shed.jpg',
    link: '/dining/the-shed',
  },
  {
    title: 'Geronimo',
    description: 'Fine dining in a historic adobe on Canyon Road.',
    image: '/images/geronimo.jpg',
    link: '/dining/geronimo',
  },
  {
    title: 'Cafe Pasqual\'s',
    description: 'Colorful cafe serving organic New Mexican and international cuisine.',
    image: '/images/cafe-pasquals.jpg',
    link: '/dining/cafe-pasquals',
  },
];

export default function DiningPage() {
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
              Santa Fe Dining Guide
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Experience the unique flavors of Santa Fe, from traditional New Mexican cuisine to innovative fine dining.
            </p>
          </motion.div>
        </div>
      </section>

      <FeaturedSection
        title="Browse by Cuisine"
        items={CUISINES}
        className="bg-amber-50/50 dark:bg-amber-950/10"
      />

      <FeaturedSection
        title="Top Picks"
        items={TOP_PICKS}
      />

      <section className="py-16 bg-amber-50/50 dark:bg-amber-950/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-8 text-center">
            Local Food Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/chile.jpg"
                    alt="Red and green chile"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Red or Green?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Learn about New Mexico's famous chile and how to order like a local.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/farmers-market.jpg"
                    alt="Santa Fe Farmers Market"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Farm to Table
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Discover restaurants featuring local ingredients from Northern New Mexico farms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
