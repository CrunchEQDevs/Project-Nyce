import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Definição do mapa de logos com tipagem
const logoMap: Record<string, string> = {
  summus: '/summus.png',
  beter: '/beter.png',
  bitblox: '/bitblox.png',
  flashbet: '/flashbet.png',
  astroplay: '/astroplay.png',
  atlas: '/atlas.png'
};

// Interface para o tipo de card
interface Card {
  id: string | number;
  title: string;
  logo?: string | null;
  description: string;
  category?: string;
}

// Interface para as props do PartnerCard
interface PartnerCardProps {
  card: Card;
  logoMap: Record<string, string>;
}

// Interface para as props do ProductsGrid
interface ProductsGridProps {
  filteredCards: Card[];
  logoMap: Record<string, string>;
}

// Card component with hover effect
function PartnerCard({ card, logoMap }: PartnerCardProps) {
  return (
    <div className="group relative rounded-3xl overflow-hidden transition-all duration-300">
      {/* Golden border that appears on hover */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-yellow-400 z-20 pointer-events-none transition-all duration-300"></div>
      {/* Card content */}
      <div className="bg-zinc-900 rounded-3xl p-6 h-full flex flex-col relative z-10 transition-all duration-300">
        {/* Logo section */}
        {card.logo ? (
          <div className="mb-8 flex justify-center">
            <div className="relative w-full h-32">
              <Image
                src={logoMap[card.logo] || '/placeholder.png'}
                alt={`${card.title} logo`}
                fill
                style={{ objectFit: 'contain' }}
                className="object-contain"
              />
            </div>
          </div>
        ) : (
          <h3 className="text-2xl font-sans text-yellow-500 mb-8">{card.title}</h3>
        )}
        {/* Card content - this gets blurred on hover */}
        <div className="flex flex-col flex-grow group-hover:blur-sm group-hover:opacity-20 transition-all duration-300">
          {card.logo && <h3 className="text-xl font-sans mb-4">{card.title}</h3>}
          <div className="text-sm text-zinc-400 mb-3">
            Category: <span className="text-zinc-300">{card.category}</span>
          </div>
          <p className="text-zinc-300 mt-2 flex-grow">
            {card.description}
          </p>
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <Link
              href=""
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
            >
              Learn more <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
        {/* Buttons that appear on hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <Link href="#" className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-full mb-4 transition-all">
            Learn More
          </Link>
          <Link href="#" className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full transition-all">
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  );
}

// Usage in your grid
export default function ProductsGrid({ filteredCards, logoMap }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCards.map((card) => (
        <PartnerCard key={card.id} card={card} logoMap={logoMap} />
      ))}
    </div>
  );
}