'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

// Import client components dynamically
const FeaturedSection = dynamic(
  () => import('@/components/FeaturedSection')
);
const SearchBar = dynamic(
  () => import('@/components/SearchBar')
);
const FilterPanel = dynamic(
  () => import('@/components/FilterPanel')
);
const FilterChips = dynamic(
  () => import('@/components/FilterChips')
);
const Testimonials = dynamic(
  () => import('@/components/Testimonials')
);

// Move metadata to layout.tsx since this is now a client component

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
    image: 'https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&q=80',
    link: '/dining/the-shed',
    categories: ['New Mexican', 'Local Favorite'],
    price: 'moderate',
  },
  {
    title: 'La Choza Restaurant',
    description: 'Traditional New Mexican cuisine in a cozy, rustic setting.',
    image: 'https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?auto=format&fit=crop&q=80',
    link: '/dining/la-choza',
    categories: ['New Mexican', 'Family Friendly'],
    price: 'moderate',
  },
  {
    title: 'The Plaza Cafe',
    description: 'Santa Fe institution serving classic American comfort food.',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80',
    link: '/dining/the-plaza-cafe',
    categories: ['American', 'Breakfast'],
    price: 'budget',
  },
];

const LODGING: Item[] = [
  {
    title: 'Hotel St. Francis',
    description: 'Historic hotel with elegant rooms and a relaxing courtyard.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    link: '/lodging/hotel-st-francis',
    categories: ['Historic', 'Downtown'],
    price: 'moderate',
  },
  {
    title: 'Inn and Spa at Loretto',
    description: 'Luxurious accommodations with a full-service spa and stunning views.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80',
    link: '/lodging/inn-and-spa-at-loretto',
    categories: ['Luxury', 'Spa'],
    price: 'luxury',
  },
  {
    title: 'La Fonda on the Plaza',
    description: 'Iconic hotel with comfortable rooms and a vibrant atmosphere.',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80',
    link: '/lodging/la-fonda-on-the-plaza',
    categories: ['Historic', 'Downtown'],
    price: 'luxury',
  },
];

const ACTIVITIES: Item[] = [
  {
    title: 'Canyon Road Art Walk',
    description: 'Explore one of the most iconic streets in Santa Fe full of galleries and history.',
    image: 'https://images.unsplash.com/photo-1594540637720-9b14737e0c86?auto=format&fit=crop&q=80',
    link: '/activities/canyon-road',
    categories: ['Art', 'Walking Tour'],
    accessibility: ['Wheelchair Accessible'],
  },
  {
    title: "Georgia O'Keeffe Museum",
    description: "Discover the work and legacy of one of New Mexico's most beloved artists.",
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
    link: '/activities/okeeffe-museum',
    categories: ['Museum', 'Art'],
    accessibility: ['Wheelchair Accessible', 'Audio Tours'],
  },
  {
    title: 'Bandelier National Monument',
    description: 'Ancient cliff dwellings and petroglyphs in a beautiful canyon setting.',
    image: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?auto=format&fit=crop&q=80',
    link: '/activities/bandelier',
    categories: ['Outdoor', 'Historic'],
    accessibility: ['Guided Tours'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex flex-col md:flex-row gap-4">
          <SearchBar 
            value=""
            onChange={() => {}}
            placeholder="Search..."
            className="flex-grow"
          />
          <FilterPanel 
            filters={[]}
            selectedFilters={[]}
            onFilterChange={() => {}}
            className="md:w-64"
          />
        </div>
        
        <FilterChips 
          selectedFilters={[]}
          onRemove={() => {}}
        />

        <FeaturedSection
          title="Featured Activities"
          items={ACTIVITIES}
          className="bg-white dark:bg-gray-900"
        />

        <FeaturedSection
          title="Featured Dining"
          items={DINING}
          className="bg-amber-50/50 dark:bg-amber-950/10"
        />

        <FeaturedSection
          title="Featured Lodging"
          items={LODGING}
          className="bg-white dark:bg-gray-900"
        />

        <Testimonials />
      </section>
    </div>
  );
}
