'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    location: 'Austin, TX',
    text: 'Santa Fe Selection made our trip unforgettable. Their restaurant recommendations were spot-on, and the art gallery guide helped us discover amazing local artists.',
    image: '/images/testimonial-1.jpg',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    text: 'The interactive maps were incredibly helpful for planning our daily activities. We loved exploring the different neighborhoods and finding hidden gems.',
    image: '/images/testimonial-2.jpg',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    location: 'Chicago, IL',
    text: 'Thanks to Santa Fe Selection\'s guide, we experienced the perfect blend of culture, cuisine, and outdoor activities. Can\'t wait to visit again!',
    image: '/images/testimonial-3.jpg',
    rating: 5,
  },
];

const FEATURED_STORIES = [
  {
    title: 'A Family Adventure',
    description: 'How the Smiths made unforgettable memories in Santa Fe',
    image: '/images/story-1.jpg',
    link: '/testimonials/family-adventure',
  },
  {
    title: 'Art Lover\'s Paradise',
    description: 'A collector\'s journey through Santa Fe\'s galleries',
    image: '/images/story-2.jpg',
    link: '/testimonials/art-lovers-paradise',
  },
  {
    title: 'Culinary Discovery',
    description: 'One foodie\'s exploration of Santa Fe\'s flavors',
    image: '/images/story-3.jpg',
    link: '/testimonials/culinary-discovery',
  },
];

export default function TestimonialsPage() {
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
              Visitor Stories
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Read what our visitors have to say about their Santa Fe experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-amber-50/50 dark:bg-amber-950/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-8 text-center">
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_STORIES.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {story.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50/50 dark:bg-amber-950/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-4">
            Share Your Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Had a great experience in Santa Fe? We'd love to hear about it!
            Share your story and photos with our community.
          </p>
          <button className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors duration-300">
            Submit Your Story
          </button>
        </div>
      </section>
    </main>
  );
}
