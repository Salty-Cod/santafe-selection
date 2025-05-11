'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function RequestGuidePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-6">
              Request Your Free Santa Fe Guide
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Get your comprehensive guide to Santa Fe's best attractions, dining, shopping, and more.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="overflow-hidden">
              <div className="relative h-64 lg:h-full">
                <Image
                  src="/images/guide-preview.jpg"
                  alt="Santa Fe Guide Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-6">
                  Request Form
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mailing Address
                    </label>
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 mb-4"
                      required
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700"
                        required
                      />
                      <input
                        type="text"
                        placeholder="State"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700"
                        required
                      />
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      When are you planning to visit?
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700">
                      <option>Within 1 month</option>
                      <option>1-3 months</option>
                      <option>3-6 months</option>
                      <option>6+ months</option>
                      <option>Just browsing</option>
                    </select>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-1 mr-2"
                      id="newsletter"
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      Sign up for our newsletter to receive travel tips and updates about Santa Fe
                    </label>
                  </div>

                  <Button className="w-full bg-amber-700 hover:bg-amber-800">
                    Request Guide
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50/50 dark:bg-amber-950/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-amber-800 dark:text-amber-500 mb-8 text-center">
            What's Inside
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Maps & Routes
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Detailed maps of Santa Fe's districts and suggested walking routes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Local Tips
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Insider recommendations for dining, shopping, and attractions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 mx-auto text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-500 mb-2">
                  Events Calendar
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Annual festivals, markets, and cultural celebrations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
