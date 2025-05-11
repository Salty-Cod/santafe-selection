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
    image: '/images/the-shed.jpg',
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
    image: '/images/geronimo.jpg',
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
    image: '/images/cafe-pasquals.jpg',
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
    image: '/images/la-choza.jpg',
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
    image: '/images/tomasitas.jpg',
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
    image: '/images/santacafe.jpg',
    link: '/dining/santacafe',
    cuisine: ['american', 'southwestern'],
    dietary: ['vegetarian', 'gluten-free'],
    priceRange: 'upscale',
    features: ['outdoor-seating', 'reservations', 'bar'],
    rating: 4.5,
  },
];
