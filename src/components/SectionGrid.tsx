// src/components/SectionGrid.tsx
"use client";

interface CardData {
  title: string;
  description: string;
  image: string;
  cta: string;
}

interface SectionGridProps {
  title: string;
  data: CardData[];
}

export default function SectionGrid({ title, data }: SectionGridProps) {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, idx) => (
          <div key={idx} className="bg-white shadow rounded overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <button className="text-sm font-medium text-blue-700 hover:underline">{item.cta}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}