'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const MAP_TYPES = [
  {
    title: 'Interactive City Map',
    description: 'Explore Santa Fe with our interactive map featuring attractions, dining, and more.',
    image: '/images/interactive-map.jpg',
    buttonText: 'Open Interactive Map',
    link: '/maps/interactive',
  },
  {
    title: 'Downloadable Maps',
    description: 'Free PDF maps perfect for walking tours and self-guided exploration.',
    image: '/images/pdf-maps.jpg',
    buttonText: 'Download Maps',
    link: '/maps/download',
  },
  {
    title: 'Themed Routes',
    description: 'Curated routes for art galleries, historic sites, and food tours.',
    image: '/images/themed-routes.jpg',
    buttonText: 'View Routes',
    link: '/maps/routes',
  },
];

const DISTRICTS = [
  {
    name: 'Downtown / Plaza',
    description: 'Historic heart of Santa Fe with shopping, dining, and cultural attractions.',
    image: '/images/downtown-map.jpg',
  },
  {
    name: 'Canyon Road',
    description: 'Famous art district with galleries housed in historic adobe buildings.',
    image: '/images/canyon-road-map.jpg',
  },
  {
    name: 'Railyard District',
    description: 'Modern arts district with galleries, restaurants, and farmers market.',
    image: '/images/railyard-map.jpg',
  },
  {
    name: 'Museum Hill',
    description: 'Home to four museums showcasing Native American, Spanish Colonial, and folk art.',
    image: '/images/museum-hill-map.jpg',
  },
];

export default function MapsPage() {
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
              Santa Fe Maps & Guides
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Navigate Santa Fe like a local with our collection of maps and guided routes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-amber-50/50 dark:bg-amber-950/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MAP_TYPES.map((mapType) => (
              <Card key={mapType.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={mapType.image}
                    alt={mapType.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                    {mapType.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {mapType.description}
                  </p>
                  <Link href={mapType.link}>
                    <Button className="w-full">{mapType.buttonText}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-8 text-center">
            District Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DISTRICTS.map((district) => (
              <Card key={district.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:flex">
                  <div className="relative h-48 md:h-auto md:w-1/2">
                    <Image
                      src={district.image}
                      alt={district.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 md:w-1/2">
                    <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                      {district.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {district.description}
                    </p>
                    <Button variant="outline">View Guide</Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50/50 dark:bg-amber-950/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-4">
            Need a Printed Guide?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Request our free Mini Guide Map, perfect for exploring Santa Fe on foot.
            Available for US addresses or instant PDF download.
          </p>
          <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
            Request Free Guide
          </Button>
        </div>
      </section>
    </main>
  );
}
