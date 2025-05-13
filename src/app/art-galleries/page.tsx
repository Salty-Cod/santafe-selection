'use client';

import { motion } from 'framer-motion';
import FeaturedSection from '@/components/FeaturedSection';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface GalleryItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

const GALLERY_TYPES: GalleryItem[] = [
  {
    title: 'Contemporary Art',
    description: 'Modern and contemporary art galleries featuring international artists.',
    image: 'https://images.unsplash.com/photo-1666185762183-d3b56df000f0?auto=format&fit=crop&q=80',
    link: '/art-galleries/contemporary',
  },
  {
    title: 'Traditional & Native Art',
    description: 'Native American and traditional Southwestern art galleries.',
    image: 'https://images.unsplash.com/photo-1722548352619-d921b5f35872?auto=format&fit=crop&q=80',
    link: '/art-galleries/traditional',
  },
  {
    title: 'Photography & New Media',
    description: 'Galleries specializing in photography and digital art.',
    image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80',
    link: '/art-galleries/photography',
  },
];

const FEATURED_GALLERIES: GalleryItem[] = [
  {
    title: 'SITE Santa Fe',
    description: 'Contemporary art museum with rotating international exhibitions.',
    image: 'https://images.unsplash.com/photo-1744641405608-4a58f14d07b1?auto=format&fit=crop&q=80',
    link: '/art-galleries/site-santa-fe',
  },
  {
    title: 'Georgia O\'Keeffe Museum',
    description: 'Dedicated to the artistic legacy of Georgia O\'Keeffe.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
    link: '/art-galleries/okeeffe-museum',
  },
  {
    title: 'Museum of International Folk Art',
    description: 'World\'s largest collection of folk art.',
    image: 'https://images.unsplash.com/photo-1744641405608-4a58f14d07b1?auto=format&fit=crop&q=80',
    link: '/art-galleries/folk-art-museum',
  },
];

export default function ArtGalleriesPage() {
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
              Santa Fe Art Galleries
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Explore one of the largest art markets in the United States, from traditional to contemporary.
            </p>
          </motion.div>
        </div>
      </section>

      <FeaturedSection
        title="Gallery Types"
        items={GALLERY_TYPES}
        className="bg-amber-50/50 dark:bg-amber-950/10"
      />

      <FeaturedSection
        title="Must-Visit Museums"
        items={FEATURED_GALLERIES}
      />

      <section className="py-16 bg-amber-50/50 dark:bg-amber-950/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-8 text-center">
            Art Districts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1744641405608-4a58f14d07b1?auto=format&fit=crop&q=80"
                    alt="Canyon Road Galleries"
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                    priority={false}
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Canyon Road
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Historic art district with over 100 galleries in adobe buildings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80"
                    alt="Railyard Arts District"
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                    priority={false}
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Railyard Arts District
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Contemporary galleries and SITE Santa Fe in a modern setting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
