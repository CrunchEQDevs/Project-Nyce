'use client'
import { RefObject, useRef, useState } from "react";
import { ArrowDown } from "lucide-react"
import { Hubot_Sans, Fragment_Mono } from "next/font/google"
import { motion } from "framer-motion";
import ButtonNav from "@/components/created/NewsButton";
import NewsGrid from "@/components/created/NewsGrid";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
})
const fragmentMono = Fragment_Mono({
  weight:"400",
  variable: "--font-fragment-mono",
  subsets: ["latin"],
})
const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
export default function NewsPage(){
  // Estado para armazenar a categoria selecionada e o número de itens visíveis
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleItems, setVisibleItems] = useState(6);
    const news = useRef(null);
  

  // Função para lidar com a mudança de categoria
  const handleCategoryChange = (category:string) => {
    setSelectedCategory(category);
    // Resetar o número de itens visíveis ao mudar de categoria
    setVisibleItems(6);
  };
  
  // Função para carregar mais notícias
  const loadMoreItems = () => {
    setVisibleItems(prevItems => prevItems + 6);
  };

  return (
    <div className={`${hubotSans.variable} ${fragmentMono.variable} min-h-screen`}>
      <div className="flex flex-col rounded-full gap-6 items-center bg-[#0E0E0E] justify-center mt-10">
        <h1 className="text-white font-sans text-5xl">
          News
        </h1>
        <motion.button
           onClick={() => scrollToSection(news)}
          className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full px-8 py-3 flex items-center justify-center space-x-2 transition-colors"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#4B5563" // Slightly lighter gray on hover
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span>Checkout the News</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
      <div className="flex flex-col gap-6 mt-10">
        <div className="items-start ml-10" ref={news}>
          <ButtonNav onCategoryChange={handleCategoryChange} />
        </div>
        <NewsGrid maxItems={visibleItems} selectedCategory={selectedCategory} />
        
        {/* Botão Load More */}
        <div className="flex justify-center mt-4 mb-20">
          <motion.button
            onClick={loadMoreItems}
            className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg px-8 py-3 flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Load More
          </motion.button>
        </div>
      </div>
    </div>
  )
}