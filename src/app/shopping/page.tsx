'use client';

import { motion } from 'framer-motion';
import { FeaturedSection } from '@/components/FeaturedSection';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const SHOPPING_CATEGORIES = [
  {
    title: 'Boutiques & Markets',
    description: 'Local fashion, crafts, and artisanal markets.',
    image: '/images/boutiques.jpg',
    link: '/shopping/boutiques',
  },
  {
    title: 'Native American Art',
    description: 'Authentic jewelry, pottery, and traditional crafts.',
    image: '/images/native-crafts.jpg',
    link: '/shopping/native-art',
  },
  {
    title: 'Specialty Shops',
    description: 'Unique Southwestern gifts and home decor.',
    image: '/images/specialty.jpg',
    link: '/shopping/specialty',
  },
];

const FEATURED_SHOPS = [
  {
    title: 'Santa Fe Plaza Vendors',
    description: 'Native American artisans selling traditional jewelry and crafts.',
    image: '/images/plaza-vendors.jpg',
    link: '/shopping/plaza-vendors',
  },
  {
    title: 'Rainbow Man',
    description: 'Vintage Native American jewelry and folk art.',
    image: '/images/rainbow-man.jpg',
    link: '/shopping/rainbow-man',
  },
  {
    title: 'Santa Fe Farmers Market',
    description: 'Local produce, crafts, and artisanal foods.',
    image: '/images/farmers-market.jpg',
    link: '/shopping/farmers-market',
  },
];

export default function ShoppingPage() {
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
              Shopping in Santa Fe
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Discover unique treasures, from Native American art to contemporary Southwestern design.
            </p>
          </motion.div>
        </div>
      </section>

      <FeaturedSection
        title="Shopping Categories"
        items={SHOPPING_CATEGORIES}
        className="bg-amber-50/50 dark:bg-amber-950/10"
      />

      <FeaturedSection
        title="Featured Shops"
        items={FEATURED_SHOPS}
      />

      <section className="py-16 bg-amber-50/50 dark:bg-amber-950/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-8 text-center">
            Shopping Districts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/plaza-shopping.jpg"
                    alt="Plaza Shopping"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  The Plaza
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Historic heart of Santa Fe with Native American vendors and boutiques.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/railyard-shopping.jpg"
                    alt="Railyard Shopping"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Railyard District
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Modern shopping area with farmers market and contemporary stores.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/guadalupe-shopping.jpg"
                    alt="Guadalupe District"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Guadalupe District
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Eclectic mix of antique stores, galleries, and specialty shops.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
