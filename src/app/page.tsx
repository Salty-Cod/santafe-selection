'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { NewsletterForm } from '@/components/NewsletterForm';
import { SearchBar } from '@/components/SearchBar';
import { FeaturedSection } from '@/components/FeaturedSection';
import { FilterPanel } from '@/components/FilterPanel';
import { FilterChips } from '@/components/FilterChips';
import Hero from '@/components/Hero';

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
    image: '/images/the-shed.jpg',
    link: '/dining/the-shed',
  },
  {
    title: 'La Choza Restaurant',
    description: 'Traditional New Mexican cuisine in a cozy, rustic setting.',
    image: '/images/la-choza.jpg',
    link: '/dining/la-choza',
  },
  {
    title: 'The Plaza Cafe',
    description: 'Santa Fe institution serving classic American comfort food.',
    image: '/images/the-plaza-cafe.jpg',
    link: '/dining/the-plaza-cafe',
  },
];

const LODGING: Item[] = [
  {
    title: 'Hotel St. Francis',
    description: 'Historic hotel with elegant rooms and a relaxing courtyard.',
    image: '/images/hotel-st-francis.jpg',
    link: '/lodging/hotel-st-francis',
  },
  {
    title: 'Inn and Spa at Loretto',
    description: 'Luxurious accommodations with a full-service spa and stunning views.',
    image: '/images/inn-and-spa-at-loretto.jpg',
    link: '/lodging/inn-and-spa-at-loretto',
  },
  {
    title: 'La Fonda on the Plaza',
    description: 'Iconic hotel with comfortable rooms and a vibrant atmosphere.',
    image: '/images/la-fonda-on-the-plaza.jpg',
    link: '/lodging/la-fonda-on-the-plaza',
  },
];

const ACTIVITIES: Item[] = [
  {
    title: 'Canyon Road Art Walk',
    description: 'Explore one of the most iconic streets in Santa Fe full of galleries and history.',
    image: '/images/canyon-road.jpg',
    link: '/activities/canyon-road',
  },
  {
    title: "Georgia O'Keeffe Museum",
    description: "Discover the work and legacy of one of New Mexico's most beloved artists.",
    image: '/images/okeeffe-museum.jpg',
    link: '/activities/okeeffe-museum',
  },
  {
    title: 'Bandelier National Monument',
    description: 'Ancient cliff dwellings and petroglyphs in a beautiful canyon setting.',
    image: '/images/bandelier.jpg',
    link: '/activities/bandelier',
  },
];

const SHOPPING: Item[] = [
  {
    title: 'Santa Fe Plaza',
    description: 'Historic heart of the city with Native American artisans and local shops.',
    image: '/images/plaza.jpg',
    link: '/shopping/plaza',
  },
  {
    title: 'Rainbow Man',
    description: 'Vintage Native American jewelry and folk art.',
    image: '/images/rainbow-man.jpg',
    link: '/shopping/rainbow-man',
  },
  {
    title: 'Double Take',
    description: 'High-end consignment with designer Western wear.',
    image: '/images/double-take.jpg',
    link: '/shopping/double-take',
  },
];

const ART_CULTURE: Item[] = [
  {
    title: 'SITE Santa Fe',
    description: 'Contemporary art museum with rotating international exhibitions.',
    image: '/images/site-santa-fe.jpg',
    link: '/art-culture/site-santa-fe',
  },
  {
    title: 'Museum Hill',
    description: 'Four museums showcasing Native American, Spanish Colonial, and folk art.',
    image: '/images/museum-hill.jpg',
    link: '/art-culture/museum-hill',
  },
  {
    title: 'Santa Fe Opera',
    description: 'World-renowned outdoor opera theater with stunning sunset views.',
    image: '/images/santa-fe-opera.jpg',
    link: '/art-culture/opera',
  },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const filters = [
    {
      category: 'Price Range',
      options: [
        { id: 'price-budget', label: 'Budget Friendly', category: 'Price' },
        { id: 'price-moderate', label: 'Moderate', category: 'Price' },
        { id: 'price-luxury', label: 'Luxury', category: 'Price' },
      ],
    },
    {
      category: 'Features',
      options: [
        { id: 'feature-family', label: 'Family Friendly', category: 'Features' },
        { id: 'feature-outdoor', label: 'Outdoor', category: 'Features' },
        { id: 'feature-indoor', label: 'Indoor', category: 'Features' },
        { id: 'feature-free', label: 'Free', category: 'Features' },
      ],
    },
    {
      category: 'Accessibility',
      options: [
        { id: 'access-wheelchair', label: 'Wheelchair Accessible', category: 'Accessibility' },
        { id: 'access-parking', label: 'Easy Parking', category: 'Accessibility' },
        { id: 'access-transit', label: 'Public Transit', category: 'Accessibility' },
      ],
    },
  ];

  const handleFilterChange = (newFilters: string[]) => {
    setSelectedFilters(newFilters);
  };

  const selectedFilterChips = useMemo(() => {
    return filters
      .flatMap(category => 
        category.options.filter(option => 
          selectedFilters.includes(option.id)
        )
      )
      .map(option => ({
        id: option.id,
        label: option.label,
        category: option.category,
      }));
  }, [selectedFilters, filters]);

  const handleRemoveFilter = (filterId: string) => {
    setSelectedFilters(prev => prev.filter(id => id !== filterId));
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="pt-12">
        {/* Filter Section */}
        <section className="py-8 bg-amber-50/50 dark:bg-amber-950/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-full md:w-64 flex-shrink-0">
                <FilterPanel
                  filters={filters}
                  selectedFilters={selectedFilters}
                  onFilterChange={handleFilterChange}
                  className="sticky top-24"
                />
              </div>
              <div className="flex-grow">
                <FilterChips
                  selectedFilters={selectedFilterChips}
                  onRemove={handleRemoveFilter}
                  className="mb-6"
                />

                {/* Search Bar */}
        {/* Search Bar */}
        <div className="container mx-auto px-4 mb-12">
          <SearchBar
            value={search}
            onChange={handleSearch}
            placeholder="Search activities, restaurants, lodging..."
          />
        </div>

        {/* Newsletter */}
        <div className="container mx-auto px-4 mb-16">
          <NewsletterForm />
        </div>

        {/* Featured Sections */}
        <FeaturedSection
          title="Featured Activities"
          items={ACTIVITIES}
          className="bg-amber-50/50 dark:bg-amber-950/10"
        />

        <FeaturedSection
          title="Where to Dine"
          items={DINING}
        />

        <FeaturedSection
          title="Shopping"
          items={SHOPPING}
          className="bg-amber-50/50 dark:bg-amber-950/10"
        />

        <FeaturedSection
          title="Art & Culture"
          items={ART_CULTURE}
        />

        {/* About Santa Fe */}
        <section className="py-16 bg-amber-50/50 dark:bg-amber-950/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
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
                className="
                  inline-block bg-amber-700 hover:bg-amber-800
                  text-white font-medium px-8 py-3 rounded-full
                  transition-all duration-300 hover:shadow-lg
                  hover:scale-105
                "
              >
                Learn More About Santa Fe
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-8 text-center">
              What Visitors Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image 
                      src="/images/testimonials-1.jpg" 
                      alt="Visitor testimonial" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "One of the most beautiful cities we've visited. The art and culture blew us away!"
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-500 font-medium">– Jenna, Texas</p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image 
                      src="/images/testimonials-2.jpg" 
                      alt="Visitor testimonial" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "Santa Fe Selection helped us plan a perfect trip. The guide was spot-on."
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-500 font-medium">– Raj, California</p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image 
                      src="/images/testimonials-3.jpg" 
                      alt="Visitor testimonial" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "The local cuisine and art galleries exceeded our expectations. Can't wait to return!"
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-500 font-medium">– Maria, New York</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}