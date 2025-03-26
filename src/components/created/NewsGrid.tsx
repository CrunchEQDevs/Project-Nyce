'use client'

import React from 'react';
import { motion } from 'framer-motion';

const NewsGrid = ({ maxItems = 6, selectedCategory = 'All' }) => {
  // Dados de exemplo para os cards de notícias
  const newsData = [
    {
      id: 1,
      date: '2nd February, 2024',
      title: 'Company Update: New Headquarters',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet abe twognation...',
      category: 'Company'
    },
    {
      id: 2,
      date: '15th February, 2024',
      title: 'Project Launch: Virtual Reality Experience',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet abe twognation...',
      category: 'Projects'
    },
    {
      id: 3,
      date: '3rd March, 2024',
      title: 'Industry Trends: The Future of Entertainment',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet abe twognation...',
      category: 'Industry'
    },
    {
      id: 4,
      date: '10th March, 2024',
      title: 'New Team Members Join the Company',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet abe twognation...',
      category: 'Company'
    },
    {
      id: 5,
      date: '22nd March, 2024',
      title: 'Project Milestone: Beta Testing Phase',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet abe twognation...',
      category: 'Projects'
    },
    {
      id: 6,
      date: '5th April, 2024',
      title: 'Industry Conference Highlights',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet abe twognation...',
      category: 'Industry'
    },
    {
      id: 7,
      date: '12th April, 2024',
      title: 'Company Awarded for Innovation',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet abe twognation...',
      category: 'Company'
    },
    {
      id: 8,
      date: '18th April, 2024',
      title: 'New Project Announcement: Mobile App',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet abe twognation...',
      category: 'Projects'
    },
    {
      id: 9,
      date: '25th April, 2024',
      title: 'Industry Regulation Updates',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet abe twognation...',
      category: 'Industry'
    }
  ];

  // Filtrar notícias com base na categoria selecionada
  const filteredNews = selectedCategory === 'All' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  // Limitar o número de itens exibidos
  const displayedNews = filteredNews.slice(0, maxItems);
  
  // Adicionar mais notícias para demonstrar a paginação
  // Em um ambiente real, você buscaria isso de uma API

  // Determinar se deve mostrar o botão "Load More"
  const hasMoreItems = filteredNews.length > displayedNews.length;

  return (
    <div className="px-10 py-12 bg-[#0E0E0E] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
        {displayedNews.length > 0 ? (
          displayedNews.map((news) => (
            <motion.div 
              key={news.id}
              className="flex flex-col bg-zinc-900 rounded-lg overflow-hidden border-2 border-transparent"
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
                <p className="text-gray-400 text-sm mb-4 font-sans">{news.content}</p>
              </div>
            </motion.div>
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