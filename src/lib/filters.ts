export interface FilterOption {
  id: string;
  label: string;
  category: string;
}

export interface FilterCategory {
  category: string;
  options: FilterOption[];
}

export const diningFilters: FilterCategory[] = [
  {
    category: 'Cuisine',
    options: [
      { id: 'new-mexican', label: 'New Mexican', category: 'Cuisine' },
      { id: 'mexican', label: 'Mexican', category: 'Cuisine' },
      { id: 'southwestern', label: 'Southwestern', category: 'Cuisine' },
      { id: 'american', label: 'American', category: 'Cuisine' },
      { id: 'international', label: 'International', category: 'Cuisine' },
    ],
  },
  {
    category: 'Dietary',
    options: [
      { id: 'vegetarian', label: 'Vegetarian', category: 'Dietary' },
      { id: 'vegan', label: 'Vegan', category: 'Dietary' },
      { id: 'gluten-free', label: 'Gluten Free', category: 'Dietary' },
    ],
  },
  {
    category: 'Price Range',
    options: [
      { id: 'budget', label: '$', category: 'Price Range' },
      { id: 'moderate', label: '$$', category: 'Price Range' },
      { id: 'upscale', label: '$$$', category: 'Price Range' },
      { id: 'fine-dining', label: '$$$$', category: 'Price Range' },
    ],
  },
  {
    category: 'Features',
    options: [
      { id: 'outdoor-seating', label: 'Outdoor Seating', category: 'Features' },
      { id: 'reservations', label: 'Reservations', category: 'Features' },
      { id: 'takeout', label: 'Takeout', category: 'Features' },
      { id: 'delivery', label: 'Delivery', category: 'Features' },
      { id: 'bar', label: 'Full Bar', category: 'Features' },
    ],
  },
];

export const activityFilters: FilterCategory[] = [
  {
    category: 'Type',
    options: [
      { id: 'outdoor', label: 'Outdoor', category: 'Type' },
      { id: 'indoor', label: 'Indoor', category: 'Type' },
      { id: 'cultural', label: 'Cultural', category: 'Type' },
      { id: 'historical', label: 'Historical', category: 'Type' },
      { id: 'adventure', label: 'Adventure', category: 'Type' },
    ],
  },
  {
    category: 'Price',
    options: [
      { id: 'free', label: 'Free', category: 'Price' },
      { id: 'paid', label: 'Paid', category: 'Price' },
    ],
  },
  {
    category: 'Duration',
    options: [
      { id: 'short', label: '1-2 hours', category: 'Duration' },
      { id: 'medium', label: 'Half-day', category: 'Duration' },
      { id: 'long', label: 'Full-day', category: 'Duration' },
    ],
  },
  {
    category: 'Accessibility',
    options: [
      { id: 'wheelchair', label: 'Wheelchair Accessible', category: 'Accessibility' },
      { id: 'family', label: 'Family Friendly', category: 'Accessibility' },
      { id: 'pet-friendly', label: 'Pet Friendly', category: 'Accessibility' },
    ],
  },
];

export const lodgingFilters: FilterCategory[] = [
  {
    category: 'Type',
    options: [
      { id: 'hotel', label: 'Hotel', category: 'Type' },
      { id: 'resort', label: 'Resort', category: 'Type' },
      { id: 'bb', label: 'Bed & Breakfast', category: 'Type' },
      { id: 'vacation-rental', label: 'Vacation Rental', category: 'Type' },
    ],
  },
  {
    category: 'Price Range',
    options: [
      { id: 'budget', label: '$', category: 'Price Range' },
      { id: 'moderate', label: '$$', category: 'Price Range' },
      { id: 'upscale', label: '$$$', category: 'Price Range' },
      { id: 'luxury', label: '$$$$', category: 'Price Range' },
    ],
  },
  {
    category: 'Amenities',
    options: [
      { id: 'pool', label: 'Pool', category: 'Amenities' },
      { id: 'spa', label: 'Spa', category: 'Amenities' },
      { id: 'fitness', label: 'Fitness Center', category: 'Amenities' },
      { id: 'restaurant', label: 'Restaurant', category: 'Amenities' },
      { id: 'parking', label: 'Free Parking', category: 'Amenities' },
      { id: 'wifi', label: 'Free WiFi', category: 'Amenities' },
    ],
  },
  {
    category: 'Location',
    options: [
      { id: 'downtown', label: 'Downtown', category: 'Location' },
      { id: 'historic', label: 'Historic District', category: 'Location' },
      { id: 'canyon', label: 'Canyon Road', category: 'Location' },
      { id: 'outskirts', label: 'City Outskirts', category: 'Location' },
    ],
  },
];
