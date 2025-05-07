"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 text-center px-6">
      <h1 className="text-5xl font-bold text-red-700 mb-2">404 – Page Not Found</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Oops! The page you&apos;re looking for isn&apos;t here. Maybe the winds of the Santa Fe Plaza carried it away.
      </p>
      <Image
        src="/images/canyon-road.jpg"
        alt="Canyon Road"
        width={800}
        height={500}
        className="w-full max-w-md rounded-lg shadow-md mb-6"
      />
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
