// src/app/not-found.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 text-center px-6">
      <h1 className="text-5xl font-bold text-red-700 mb-2">404 – Page Not Found</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Ooops! The page you're looking for isn't here. Maybe the winds of the Santa Fe Plaza carried it away.
      </p>
      <img src="/images/canyon-road.jpg" alt="Canyon Road" className="w-full max-w-md rounded-lg shadow-md mb-6" />
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
