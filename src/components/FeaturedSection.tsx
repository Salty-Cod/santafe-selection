'use client';

import { motion } from 'framer-motion';
import { CategoryCard } from './CategoryCard';

interface FeaturedItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedSectionProps {
  title: string;
  items: FeaturedItem[];
  className?: string;
}

export function FeaturedSection({ title, items, className = '' }: FeaturedSectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-serif font-bold text-amber-800 dark:text-amber-400 mb-10 pb-2 border-b border-amber-200/20"
        >
          {title}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryCard
                title={item.title}
                description={item.description}
                imagePath={item.image}
                link={item.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
