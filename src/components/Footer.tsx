// src/components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600 mt-12">
      &copy; {new Date().getFullYear()} Santa Fe Selection. All rights reserved.
    </footer>
  );
}