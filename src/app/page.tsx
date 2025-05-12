'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { NewsletterForm } from '@/components/NewsletterForm';
import { SearchBar } from '@/components/SearchBar';
import { FeaturedSection } from '@/components/FeaturedSection';
import { FilterPanel } from '@/components/FilterPanel';
import { FilterChips } from '@/components/FilterChips';
import Hero from '@/components/Hero';
import { Testimonials } from '@/components/Testimonials';

interface Item {
  title: string;
  description: string;
  image: string;
  link: string;
  categories?: string[];
  features?: string[];
  price?: 'budget' | 'moderate' | 'luxury';
  accessibility?: string[];
}

const DINING: Item[] = [
  {
    title: 'The Shed',
    description: 'Gastropub serving creative, farm-to-table comfort food.',
    image: 'https://images.unsplash.com/photo-1534531173927-aeb928d54385',
    link: '/dining/the-shed',
  },
  {
    title: 'La Choza Restaurant',
    description: 'Traditional New Mexican cuisine in a cozy, rustic setting.',
    image: 'https://images.unsplash.com/photo-1583484963886-cfe2bff2945f',
    link: '/dining/la-choza',
  },
  {
    title: 'The Plaza Cafe',
    description: 'Santa Fe institution serving classic American comfort food.',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475',
    link: '/dining/the-plaza-cafe',
  },
];

const LODGING: Item[] = [
  {
    title: 'Hotel St. Francis',
    description: 'Historic hotel with elegant rooms and a relaxing courtyard.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    link: '/lodging/hotel-st-francis',
  },
  {
    title: 'Inn and Spa at Loretto',
    description: 'Luxurious accommodations with a full-service spa and stunning views.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    link: '/lodging/inn-and-spa-at-loretto',
  },
  {
    title: 'La Fonda on the Plaza',
    description: 'Iconic hotel with comfortable rooms and a vibrant atmosphere.',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
    link: '/lodging/la-fonda-on-the-plaza',
  },
];

const ACTIVITIES: Item[] = [
  {
    title: 'Canyon Road Art Walk',
    description: 'Explore one of the most iconic streets in Santa Fe full of galleries and history.',
    image: 'https://images.unsplash.com/photo-1594540637720-9b14737e0c86',
    link: '/activities/canyon-road',
  },
  {
    title: "Georgia O'Keeffe Museum",
    description: "Discover the work and legacy of one of New Mexico's most beloved artists.",
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
    link: '/activities/okeeffe-museum',
  },
  {
    title: 'Bandelier National Monument',
    description: 'Ancient cliff dwellings and petroglyphs in a beautiful canyon setting.',
    image: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8',
    link: '/activities/bandelier',
  },
];

// eslint-disable-next-line no-unused-vars
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const filteredDining = useMemo(() => {
    return DINING.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredLodging = useMemo(() => {
    return LODGING.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredActivities = useMemo(() => {
    return ACTIVITIES.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleFilterChange = (newFilters: string[]) => {
    setSelectedFilters(newFilters);
  };

  const handleRemoveFilter = (filterId: string) => {
    setSelectedFilters(selectedFilters.filter(id => id !== filterId));
  };

  const { theme } = useTheme();

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900">
        <Hero />

        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-full md:w-1/3">
                <FilterPanel
                  filters={[]}
                  selectedFilters={selectedFilters}
                  onFilterChange={handleFilterChange}
                />
              </div>
              <div className="w-full md:w-2/3">
                <SearchBar value="" onChange={handleSearch} placeholder="Search activities..." />
                <FilterChips
                  selectedFilters={selectedFilters.map(id => ({ id, label: id, category: 'Filter' }))}
                  onRemove={handleRemoveFilter}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Activities Section */}
        <FeaturedSection
          title="Featured Activities"
          items={filteredActivities}
          className="bg-white dark:bg-gray-900"
        />

        {/* Featured Dining Section */}
        <FeaturedSection
          title="Featured Dining"
          items={filteredDining}
          className="bg-amber-50 dark:bg-gray-800"
        />

        {/* Featured Lodging Section */}
        <FeaturedSection
          title="Featured Lodging"
          items={filteredLodging}
          className="bg-white dark:bg-gray-900"
        />

        {/* Newsletter Section */}
        <section className="py-16 bg-amber-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Subscribe to our newsletter for the latest updates on events,
                activities, and special offers in Santa Fe.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-6">
                About Santa Fe
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Discover the magic of Santa Fe, where centuries-old adobe
                architecture meets vibrant art markets, and traditional New
                Mexican flavors blend with innovative Southwest cuisine.
              </p>
              <Link
                href="/about"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Learn More About Santa Fe
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
      </div>
    </main>
  );
}
