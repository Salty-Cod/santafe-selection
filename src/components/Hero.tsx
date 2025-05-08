import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`relative h-[80vh] bg-center bg-cover flex items-center justify-center ${className}`}
      style={{ backgroundImage: "url('/images/santa-fe-og.jpg')" }}
      aria-label="Santa Fe Selection Hero"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide">
          Santa Fe Selection
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8">
          Discover the authentic Santa Fe experience
        </p>
        <Link
          href="/plan"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full text-sm transition-colors"
          aria-label="Plan your Santa Fe trip"
        >
          Plan Your Trip
        </Link>
      </div>
    </section>
  );
}
