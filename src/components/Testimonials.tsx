'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    text: "One of the most beautiful cities we've visited. The art and culture blew us away!",
    author: "Jenna",
    location: "Texas",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
  },
  {
    text: "Santa Fe Selection helped us plan a perfect trip. The guide was spot-on.",
    author: "Raj",
    location: "California",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800"
  },
  {
    text: "The local cuisine and art galleries exceeded our expectations. Can't wait to return!",
    author: "Maria",
    location: "New York",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-8 text-center">
          What Visitors Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image 
                    src={testimonial.image}
                    alt={`${testimonial.author} testimonial`}
                    fill 
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-500 font-medium">
                  – {testimonial.author}, {testimonial.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
