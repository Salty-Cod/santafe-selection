import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Santa Fe Selection | Your Curated Guide to Santa Fe',
  description: 'Learn about Santa Fe Selection, your curated guide to the art, culture, dining, and accommodations in Santa Fe, New Mexico.',
  openGraph: {
    images: ['/images/santa-fe-og.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/images/about-santa-fe.jpg"
          alt="Santa Fe landscape"
          fill
          priority
          className="object-cover brightness-75 dark:brightness-50"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 dark:from-black/80 dark:to-black/90" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-amber-100 drop-shadow-lg">
            About Santa Fe Selection
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-2xl mx-auto text-white/90 drop-shadow-md">
            Your curated guide to the art, culture, and soul of The City Different
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-800 dark:text-amber-400 pb-2 border-b border-amber-200/20">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Santa Fe Selection was created to provide visitors and locals alike with a carefully curated guide to the best that Santa Fe has to offer. Our team of local experts has personally visited and vetted each recommendation to ensure an authentic and memorable experience.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              From hidden gem restaurants to iconic cultural institutions, we aim to showcase the diverse tapestry that makes Santa Fe "The City Different."
            </p>
            <Link
              href="/request-guide"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-2 rounded-full text-base transition-all duration-300 ease-out hover:scale-105 shadow-md dark:text-white/90 dark:bg-amber-600 dark:hover:bg-amber-700"
            >
              Request Guide
            </Link>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/plaza.jpg"
              alt="Santa Fe Plaza"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-amber-50/50 dark:bg-amber-950/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-800 dark:text-amber-400 mb-10 pb-2 border-b border-amber-200/20 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
                <Image
                  src="/images/la-choza.jpg"
                  alt="Local dining"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-700 dark:text-amber-300">Curated Dining</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover the best local restaurants, from authentic New Mexican cuisine to international flavors.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
                <Image
                  src="/images/canyon-road.jpg"
                  alt="Art galleries"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-700 dark:text-amber-300">Art & Culture</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore Santa Fe's world-renowned galleries, museums, and cultural experiences.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
                <Image
                  src="/images/inn-of-the-governors.jpg"
                  alt="Luxury accommodations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-700 dark:text-amber-300">Unique Lodging</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Find the perfect place to stay, from historic hotels to boutique inns and luxury resorts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
