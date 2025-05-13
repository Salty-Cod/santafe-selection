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
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800">
      <Link href={link}>
        <div className="relative h-64 w-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-semibold mb-2 drop-shadow-lg">{title}</h3>
          <p className="text-sm text-gray-200/90 drop-shadow-lg line-clamp-2">{description}</p>
        </div>
      </Link>
    </div>
  );
}
