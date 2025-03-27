// components/CategoryDropdown.js
  import { useState } from 'react';
  
  export default function CategoryDropdown({ categories, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="relative inline-block">
        <button 
          className="bg-zinc-800 text-white py-3 px-8 rounded-full flex items-center space-x-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Categories</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="absolute mt-2 w-56 bg-zinc-800 rounded-md shadow-lg z-10">
            <ul className="py-1">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-700"
                    onClick={() => {
                      onSelect(category.id);
                      setIsOpen(false);
                    }}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }