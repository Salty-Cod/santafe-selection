'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface FilterChip {
  id: string;
  label: string;
  category: string;
}

interface FilterChipsProps {
  selectedFilters: FilterChip[];
  onRemove: (filterId: string) => void;
  className?: string;
}

export default function FilterChips({
  selectedFilters,
  onRemove,
  className = '',
}: FilterChipsProps) {
  if (selectedFilters.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap gap-2 ${className}`}
      role="list"
      aria-label="Selected filters"
    >
      {selectedFilters.map((filter) => (
        <motion.div
          key={filter.id}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="inline-flex items-center bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full px-3 py-1 text-sm"
          role="listitem"
        >
          <span className="mr-1 text-xs text-amber-600 dark:text-amber-400">
            {filter.category}:
          </span>
          {filter.label}
          <button
            onClick={() => onRemove(filter.id)}
            className="ml-2 text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200"
            aria-label={`Remove ${filter.label} filter`}
          >
            <X className="w-3 h-3" />
          </button>
        </motion.div>
      ))}
    </div>
  );
}
