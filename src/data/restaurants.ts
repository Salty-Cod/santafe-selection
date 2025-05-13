export interface Restaurant {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  cuisine: string[];
  dietary: string[];
  priceRange: string;
  features: string[];
  rating: number;
}

export const restaurants: Restaurant[] = [
  {
    id: 'the-shed',
    title: 'The Shed',
    description: 'Historic restaurant known for authentic New Mexican dishes.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
    link: '/dining/the-shed',
    cuisine: ['new-mexican', 'southwestern'],
    dietary: ['vegetarian'],
    priceRange: 'moderate',
    features: ['outdoor-seating', 'reservations', 'bar'],
    rating: 4.5,
  },
  {
    id: 'geronimo',
    title: 'Geronimo',
    description: 'Fine dining in a historic adobe on Canyon Road.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    link: '/dining/geronimo',
    cuisine: ['american', 'southwestern'],
    dietary: ['vegetarian', 'gluten-free'],
    priceRange: 'fine-dining',
    features: ['reservations', 'bar'],
    rating: 4.8,
  },
  {
    id: 'cafe-pasquals',
    title: 'Cafe Pasqual\'s',
    description: 'Colorful cafe serving organic New Mexican and international cuisine.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
    link: '/dining/cafe-pasquals',
    cuisine: ['new-mexican', 'international'],
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    priceRange: 'upscale',
    features: ['takeout', 'reservations'],
    rating: 4.6,
  },
  {
    id: 'la-choza',
    title: 'La Choza',
    description: 'Local favorite for traditional New Mexican food in a casual setting.',
    image: 'https://images.unsplash.com/photo-1583484963886-cfe2bff2945f',
    link: '/dining/la-choza',
    cuisine: ['new-mexican', 'mexican'],
    dietary: ['vegetarian'],
    priceRange: 'moderate',
    features: ['takeout', 'delivery', 'bar'],
    rating: 4.4,
  },
  {
    id: 'tomasitas',
    title: 'Tomasita\'s',
    description: 'Family-owned restaurant serving classic New Mexican dishes.',
    image: 'https://images.unsplash.com/photo-1700625914554-bbe8da256868',
    link: '/dining/tomasitas',
    cuisine: ['new-mexican'],
    dietary: ['vegetarian'],
    priceRange: 'moderate',
    features: ['outdoor-seating', 'takeout', 'bar'],
    rating: 4.3,
  },
  {
    id: 'santacafe',
    title: 'SantaCafé',
    description: 'Sophisticated dining featuring contemporary American cuisine.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    link: '/dining/santacafe',
    cuisine: ['american', 'southwestern'],
    dietary: ['vegetarian', 'gluten-free'],
    priceRange: 'upscale',
    features: ['outdoor-seating', 'reservations', 'bar'],
    rating: 4.5,
  },
];
