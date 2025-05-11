import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  description: string;
  imagePath: string;
  link: string;
}

export function CategoryCard({ title, description, imagePath, link }: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-transform hover:scale-[1.02]">
      <Link href={link}>
        <div className="relative h-64 w-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </Link>
    </div>
  );
}
