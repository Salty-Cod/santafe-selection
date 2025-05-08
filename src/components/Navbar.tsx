import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const { isDarkMode } = useTheme();

  return (
    <nav
      className={`w-full bg-white dark:bg-gray-900 shadow-md px-8 py-4 flex justify-between items-center font-sans z-50 ${className}`}
    >
      {/* Logo / Brand */}
      <div className="text-2xl font-bold tracking-wide text-gray-800 dark:text-white font-serif">
        SANTA FE SELECTION
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-300 font-medium uppercase">
        <li>
          <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="/activities" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Activities
          </Link>
        </li>
        <li>
          <Link href="/dining" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Dining
          </Link>
        </li>
        <li>
          <Link href="/shopping" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Shopping
          </Link>
        </li>
        <li>
          <Link href="/art-culture" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Art & Culture
          </Link>
        </li>
        <li>
          <Link href="/lodging" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Lodging
          </Link>
        </li>
      </ul>

      {/* CTA Button */}
      <Link
        href="/guide"
        className="bg-amber-700 hover:bg-amber-800 text-white text-xs px-5 py-2 rounded-full font-semibold tracking-wide transition-colors"
      >
        Request Free Guide
      </Link>
    </nav>
  );
}
