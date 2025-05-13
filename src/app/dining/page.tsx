'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import FeaturedSection from '@/components/FeaturedSection';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import FilterPanel from '@/components/FilterPanel';
import FilterChips from '@/components/FilterChips';
import { diningFilters } from '@/lib/filters';
import { restaurants } from '@/data/restaurants';

const CUISINE_CATEGORIES = [
  {
    title: 'New Mexican',
    description: 'Traditional local cuisine with famous red and green chile.',
    image: 'https://images.unsplash.com/photo-1573225342350-16731dd9bf83',
    link: '/dining/new-mexican',
  },
  {
    title: 'Fine Dining',
    description: 'Upscale restaurants featuring innovative Southwestern cuisine.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    link: '/dining/fine-dining',
  },
  {
    title: 'Casual Eats',
    description: 'Relaxed cafes and local favorites for everyday dining.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
    link: '/dining/casual',
  },
];

const TOP_PICKS = [
  {
    title: 'The Shed',
    description: 'Historic restaurant known for authentic New Mexican dishes.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
    link: '/dining/the-shed',
  },
  {
    title: 'Geronimo',
    description: 'Fine dining in a historic adobe on Canyon Road.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    link: '/dining/geronimo',
  },
  {
    title: 'Cafe Pasqual\'s',
    description: 'Colorful cafe serving organic New Mexican and international cuisine.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
    link: '/dining/cafe-pasquals',
  },
];

export default function DiningPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filteredRestaurants = useMemo(() => {
    if (selectedFilters.length === 0) return restaurants;

    return restaurants.filter(restaurant => {
      return selectedFilters.every(filter => {
        // Find which category this filter belongs to
        const filterCategory = diningFilters.find(category =>
          category.options.some(option => option.id === filter)
        );

        if (!filterCategory) return false;

        switch (filterCategory.category.toLowerCase()) {
          case 'cuisine':
            return restaurant.cuisine.includes(filter);
          case 'dietary':
            return restaurant.dietary.includes(filter);
          case 'price range':
            return restaurant.priceRange === filter;
          case 'features':
            return restaurant.features.includes(filter);
          default:
            return false;
        }
      });
    });
  }, [selectedFilters]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="pt-24 pb-6">
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

      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            <FilterPanel
              filters={diningFilters}
              selectedFilters={selectedFilters}
              onFilterChange={setSelectedFilters}
              className="lg:sticky lg:top-24 lg:h-fit"
            />
            <div className="space-y-6">
              <FilterChips
                selectedFilters={selectedFilters.map(id => {
                  const option = diningFilters
                    .flatMap(category => category.options)
                    .find(opt => opt.id === id);
                  return {
                    id,
                    label: option?.label || '',
                    category: option?.category || ''
                  };
                })}
                onRemove={(id) => setSelectedFilters(prev => prev.filter(f => f !== id))}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRestaurants.map((restaurant) => (
                  <Card key={restaurant.id}>
                    <CardContent className="p-4">
                      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={restaurant.image}
                          alt={restaurant.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                        {restaurant.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {restaurant.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
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
        items={CUISINE_CATEGORIES}
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
                    src="https://images.unsplash.com/photo-1573225342350-16731dd9bf83"
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
                    src="https://images.unsplash.com/photo-1488459716781-31db52582fe9"
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
