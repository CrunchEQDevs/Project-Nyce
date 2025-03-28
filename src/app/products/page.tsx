'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductsCategories() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState();
  
  const categories = [
    { id: 1, name: 'iGaming & Sports Betting' },
    { id: 2, name: 'Land-Based Casinos' },
    { id: 3, name: 'Acquisition & Retention' },
    { id: 4, name: 'Lottery' },
    { id: 5, name: 'Global Payment Solutions' },
    { id: 6, name: 'Enterprise' },
    { id: 7, name: 'Data & Analytics' }
  ];
  
  const handleCategoryClick = (category:any) => {
    setSelectedCategory(category.id);
    // Navigation to products-and-services (this matches your folder structure)
    router.push(`/products-and-services?category=${encodeURIComponent(category.name)}`);
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-5xl md:text-6xl font-light text-center mb-16">
          Products Marketplace
        </h1>
        
        <div className="flex justify-center mb-16">
          <div className="relative inline-block">
            <button className="bg-zinc-800 text-white py-3 px-8 rounded-full flex items-center space-x-2">
              <span>Categories</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`
                relative p-8 h-32 flex items-center justify-center
                bg-zinc-900 cursor-pointer rounded-lg
                transition-all duration-300
                hover:border-2 hover:border-yellow-500
                ${selectedCategory === category.id ? 'border-2 border-yellow-500' : 'border-2 border-transparent'}
              `}
              onClick={() => handleCategoryClick(category)}
            >
              <h2 className="text-xl md:text-2xl font-light text-center">
                {category.name}
              </h2>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}