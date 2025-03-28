// components/CategoryCard.tsx
import React from 'react';

interface CategoryCardProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function CategoryCard({ name, isSelected, onClick }: CategoryCardProps) {
  return (
    <div
      className={`
        relative p-8 h-32 flex items-center justify-center
        bg-zinc-900 cursor-pointer rounded-lg
        transition-all duration-300
        hover:border-2 hover:border-yellow-500
        ${isSelected ? 'border-2 border-yellow-500' : 'border-2 border-transparent'}
      `}
      onClick={onClick}
    >
      <h2 className="text-xl md:text-2xl font-light text-center">
        {name}
      </h2>
    </div>
  );
}