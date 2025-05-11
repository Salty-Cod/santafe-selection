'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const FEATURED_POSTS = [
  {
    title: 'A Perfect Day in Santa Fe',
    description: 'Follow our curated itinerary for the ultimate Santa Fe experience.',
    image: '/images/perfect-day.jpg',
    category: 'Travel Tips',
    date: 'May 1, 2025',
    author: 'Maria Garcia',
    slug: 'perfect-day-santa-fe',
  },
  {
    title: 'Santa Fe\'s Chile Culture',
    description: 'Everything you need to know about New Mexico\'s famous red and green chile.',
    image: '/images/chile-culture.jpg',
    category: 'Local Culture',
    date: 'April 28, 2025',
    author: 'John Martinez',
    slug: 'chile-culture',
  },
  {
    title: 'Summer Festival Guide',
    description: 'Your complete guide to Santa Fe\'s summer festivals and markets.',
    image: '/images/summer-festivals.jpg',
    category: 'Events',
    date: 'April 25, 2025',
    author: 'Sarah Thompson',
    slug: 'summer-festival-guide',
  },
];

const CATEGORIES = [
  { name: 'Travel Tips', count: 15 },
  { name: 'Local Culture', count: 12 },
  { name: 'Events', count: 8 },
  { name: 'Food & Dining', count: 10 },
  { name: 'Art Scene', count: 14 },
  { name: 'History', count: 7 },
];

export default function BlogPage() {
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
              Santa Fe Travel Blog
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Insider tips, local stories, and travel inspiration for your Santa Fe adventure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-8">
                Latest Posts
              </h2>
              <div className="space-y-8">
                {FEATURED_POSTS.map((post) => (
                  <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="md:flex">
                        <div className="relative h-64 md:h-auto md:w-1/3">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-6 md:w-2/3">
                          <div className="flex items-center gap-4 text-sm text-amber-700 dark:text-amber-500 mb-2">
                            <span>{post.category}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {post.description}
                          </p>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <span>By {post.author}</span>
                          </div>
                        </CardContent>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  Load More Posts
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6">
                <h3 className="text-xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-6">
                  Categories
                </h3>
                <ul className="space-y-3">
                  {CATEGORIES.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                        className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 mt-8">
                <h3 className="text-xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-6">
                  Newsletter
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Subscribe to get our latest travel tips and updates.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 mb-4"
                />
                <Button className="w-full">Subscribe</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
