'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  category: string;
}

interface FilterCategory {
  category: string;
  options: FilterOption[];
}

interface FilterPanelProps {
  filters: FilterCategory[];
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
  className?: string;
}

export default function FilterPanel({
  filters,
  selectedFilters,
  onFilterChange,
  className = '',
}: FilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleFilter = (filterId: string) => {
    onFilterChange(
      selectedFilters.includes(filterId)
        ? selectedFilters.filter(id => id !== filterId)
        : [...selectedFilters, filterId]
    );
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {filters.map(({ category, options }) => (
                <div key={category} className="space-y-2">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="flex items-center justify-between w-full text-left text-gray-900 dark:text-gray-100 font-medium"
                  >
                    <span>{category}</span>
                    {expandedCategories.includes(category) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {expandedCategories.includes(category) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-2 space-y-2"
                      >
                        {options.map((option) => (
                          <label
                            key={option.id}
                            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedFilters.includes(option.id)}
                              onChange={() => toggleFilter(option.id)}
                              className="rounded border-gray-300 dark:border-gray-700 text-amber-600 focus:ring-amber-500"
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
