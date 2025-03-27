'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllNews, getNewsByCategory } from '@/lib/newsData';

const NewsGrid = ({ maxItems = 6, selectedCategory = 'All' }) => {
  // Obter notícias filtradas pelo sistema de dados compartilhado
  const filteredNews = getNewsByCategory(selectedCategory);

  // Limitar o número de itens exibidos
  const displayedNews = filteredNews.slice(0, maxItems);
  
  // Determinar se deve mostrar o botão "Load More"
  const hasMoreItems = filteredNews.length > displayedNews.length;

  return (
    <div className="px-10 py-12 bg-[#0E0E0E] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
        {displayedNews.length > 0 ? (
          displayedNews.map((news) => (
            <Link href={`/news/${news.slug}`} key={news.id}>
              <motion.div 
                className="flex flex-col bg-zinc-900 rounded-lg overflow-hidden border-2 border-transparent h-full cursor-pointer"
                whileHover={{ 
                  borderColor: '#FDD303',
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-64 bg-zinc-700 relative p-4">
                  <div className="absolute top-4 left-4 bg-zinc-800 px-4 py-2 rounded-md text-white font-sans">
                    {news.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[#FDD303] text-sm mb-2 font-fragment-mono">{news.date}</p>
                  <h3 className="text-white text-xl font-sans font-semibold mb-3">{news.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 font-sans">{news.excerpt}</p>
                  <div className="mt-auto">
                    <span className="text-[#FDD303] text-sm font-medium hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <p className="text-white text-xl">No news found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsGrid;