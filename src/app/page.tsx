// Santa Fe Selection - Expanded Page Layouts with Demo Images
// Pages included: Home, Activities, Dining, Lodging, Art Galleries, Maps, Request Guide, Blog, About, Testimonials

"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SantaFeHome() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4 space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-red-800">Santa Fe Selection</h1>
        <p className="text-lg text-gray-700 mt-2">Your guide to the best of Santa Fe and Northern New Mexico</p>
        <div className="mt-4 max-w-md mx-auto">
          <Input placeholder="Search activities, restaurants, lodging..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-red-700">Top Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <Image src="images/canyon-road.jpg" alt="Canyon Road" width={800} height={500} className="rounded-lg mb-2" />
              <h3 className="text-lg font-bold">Canyon Road Art Walk</h3>
              <p className="text-sm text-gray-600">Explore one of the most iconic streets in Santa Fe full of galleries and history.</p>
              <Button className="mt-2">Learn More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image src="images/okeeffe-museum.jpg" alt="O&rsquo;Keeffe Museum" width={800} height={500} className="rounded-lg mb-2" />
              <h3 className="text-lg font-bold">Georgia O&rsquo;Keeffe Museum</h3>
              <p className="text-sm text-gray-600">Discover the work and legacy of one of New Mexico&rsquo;s most beloved artists.</p>
              <Button className="mt-2">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-red-700">Where to Eat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <Image src="images/la-choza.jpg" alt="La Choza" width={800} height={500} className="rounded-lg mb-2" />
              <h3 className="text-lg font-bold">La Choza</h3>
              <p className="text-sm text-gray-600">Classic New Mexican cuisine with locals&rsquo; favorite green chile enchiladas.</p>
              <Button className="mt-2">View Restaurant</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image src="images/the-shed.jpg" alt="The Shed" width={800} height={500} className="rounded-lg mb-2" />
              <h3 className="text-lg font-bold">The Shed</h3>
              <p className="text-sm text-gray-600">Historic adobe restaurant serving traditional dishes since 1953.</p>
              <Button className="mt-2">View Restaurant</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-red-700">Lodging Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <Image src="/images/inn-of-the-governors.jpg" alt="Inn of the Governors" width={800} height={500} className="rounded-lg mb-2" />
              <h3 className="text-lg font-bold">Inn of the Governors</h3>
              <p className="text-sm text-gray-600">A charming inn in the heart of downtown Santa Fe offering comfort and tradition.</p>
              <Button className="mt-2">View Lodging</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image src="/images/el-rey-court.jpg" alt="El Rey Court" width={800} height={500} className="rounded-lg mb-2" />
              <h3 className="text-lg font-bold">El Rey Court</h3>
              <p className="text-sm text-gray-600">Retro-chic hotel with a modern Southwestern vibe and outdoor soaking tubs.</p>
              <Button className="mt-2">View Lodging</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-red-700">Featured Art Galleries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <Image src="/images/blue-rain-gallery.jpg" alt="Blue Rain Gallery" width={800} height={500} className="rounded-lg mb-2" />
              <h3 className="text-lg font-bold">Blue Rain Gallery</h3>
              <p className="text-sm text-gray-600">Contemporary and Native American art with a national reputation.</p>
              <Button className="mt-2">Explore Gallery</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image src="/images/manitou-galleries.jpg" alt="Manitou Galleries" width={800} height={500} className="rounded-lg mb-2" />
              <h3 className="text-lg font-bold">Manitou Galleries</h3>
              <p className="text-sm text-gray-600">Diverse fine art collection in a historic building on Palace Avenue.</p>
              <Button className="mt-2">Explore Gallery</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-red-700">Interactive Map</h2>
        <Card>
          <CardContent className="p-4">
            <Image src="/images/interactive-map.jpg" alt="Interactive Map" width={800} height={500} className="rounded-lg mb-2" />
            <p className="text-sm text-gray-600">Use our interactive map to find attractions, restaurants, lodging, and more around Santa Fe.</p>
            <Button className="mt-2">View Map</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-red-700">Request Your Free Guide</h2>
        <Card>
          <CardContent className="p-4 space-y-2">
            <Image src="/images/guide-request.jpg" alt="Request a Free Guide" width={800} height={500} className="rounded-lg mb-2" />
            <Input placeholder="Full Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Mailing Address" />
            <Button className="mt-2">Request Guide</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-red-700">From the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <Image src="/images/santa-fe-blog.jpg" alt="Santa Fe Blog" width={800} height={500} className="rounded-lg mb-2" />
              <h3 className="text-lg font-bold">Santa Fe Summer Festivals</h3>
              <p className="text-sm text-gray-600">Experience the vibrant local traditions through annual music, art, and food events.</p>
              <Button className="mt-2">Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image src="/images/la-choza.jpg" alt="Local Cuisine Highlights" width={800} height={500} className="rounded-lg mb-2" />
              <h3 className="text-lg font-bold">Local Cuisine Highlights</h3>
              <p className="text-sm text-gray-600">Top dishes to try while you&rsquo;re in town—from green chile stew to posole.</p>
              <Button className="mt-2">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-red-700">About Santa Fe</h2>
        <Card>
          <CardContent className="p-4">
            <Image src="/images/about-santa-fe.jpg" alt="About Santa Fe" width={800} height={500} className="rounded-lg mb-2" />
            <p className="text-sm text-gray-600">Santa Fe is the oldest capital city in the United States, known for its Pueblo-style architecture, arts scene, and rich cultural heritage.</p>
            <Button className="mt-2">Learn More</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-red-700">What Visitors Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <Image src="/images/testimonials.jpg" alt="Testimonial 1.0" width={800} height={500} className="rounded-lg mb-2" />
              <p className="text-sm text-gray-600">“One of the most beautiful cities we&rsquo;ve visited. The art and culture blew us away!”</p>
              <p className="text-xs text-gray-500 mt-2">– Jenna, Texas</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image src="/images/testimonials.jpg" alt="Testimonial 2" width={800} height={500} className="rounded-lg mb-2" />
              <p className="text-sm text-gray-600">“Santa Fe Selection helped us plan a perfect trip. The guide was spot-on.”</p>
              <p className="text-xs text-gray-500 mt-2">– Raj, California</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}