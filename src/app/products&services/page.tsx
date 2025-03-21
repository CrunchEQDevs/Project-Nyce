'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Hubot_Sans } from 'next/font/google';

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

const logoMap = {
  summus: '/summus.png', 
  beter: '/beter.png',
  bitblox: '/bitblox.png',      
  flashbet: '/flashbet.png',    
  astroplay: '/astroplay.png',  
  atlas: '/atlas.png'
};

// Helper function to generate URL-friendly slugs
const slugify = (text: string): string => {
  return text.toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '');         // Trim - from end of text
};

export default function ProductsAndServices() {
  const partners = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  // Animation variants for staggered card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // This creates the staggered effect
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  // Categories from the dropdown
  const categories = [
    "All",
    "iGaming & Sports Betting",
    "Land-Based Casinos",
    "Acquisition & Retention",
    "Lottery",
    "Global Payment Solutions",
    "Enterprise"
  ];

  // Product card data with assigned categories
  const productCards = [
    {
      id: 1,
      title: "Turnkey/White-label Platforms",
      logo: null,
      category: "Enterprise",
      description: "We represent a number of industry-leading iGaming platforms, and are able to identify the ideal solution to fit your operational needs. This makes NYCE a game-changing partner to kickstart your brand. Talk to us to discuss your requirements.",
      slug: "turnkey-white-label-platforms"
    },
    {
      id: 2,
      title: "Summus Games",
      logo: "summus",
      category: "iGaming & Sports Betting",
      description: "Combining Casino, betting and lottery expertise to create completely new and exciting games that bring something new to an otherwise static marketplace. As well as game content, Summus also has an aggregator with unique games - perfect for Operators looking to expand their product offering.",
      slug: "summus"
    },
    {
      id: 3,
      title: "BETER",
      logo: "beter",
      category: "iGaming & Sports Betting",
      description: "BETER is the industry's leading provider of next-gen betting and gaming solutions. All products are designed with the new generation of players in mind, all delivered to boost engagement, retention and operator revenue.",
      slug: "beter"
    },
    {
      id: 4,
      title: "Bitblox",
      logo: "bitblox",
      category: "Global Payment Solutions",
      description: "Bitblox creates innovative and engaging crypto-price-based games for operators that deliver an entertaining experience unlike any other to its users. Bitblox's flagship product is the Up or Down, a simple crypto game based on the live price of Bitcoin.",
      slug: "bitblox"
    },
    {
      id: 5,
      title: "FlashBET",
      logo: "flashbet",
      category: "Lottery",
      description: "FlashBET is a patented and unique betting technology designed for the betting and gaming industry. It offers a distinct user experience by combining accumulator betting with lottery-style betting using the innovative Bet-Wheel - making it an ideal product to engage sports bettors.",
      slug: "flashbet"
    },
    {
      id: 6,
      title: "Astro Play",
      logo: "astroplay",
      category: "Acquisition & Retention",
      description: "Astro Play, a leading gaming aggregator, brings years of industry expertise to enhance online casinos. With cutting-edge technology, it offers superior products, promotions, and rapid response times, valuing partners and clients equally.",
      slug: "astroplay"
    },
    {
      id: 7,
      title: "Atlas",
      logo: "atlas",
      category: "iGaming solution",
      description: "Atlas Platform, a versatile iGaming solution, excels in handling player activities, wallet management, 3rd-party integrations, compliance functions, and reporting. With a microservices architecture, it provides tools for player accounting, billing, risk management, and more.",
      slug: "atlas"
    }
  ];

  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter cards based on selected category
  const filteredCards = selectedCategory === "All" 
    ? productCards 
    : productCards.filter(card => card.category === selectedCategory);

  return (
    
    <div className={`${hubotSans.variable} bg-[#0E0E0E] w-full min-h-screen text-white p-6 md:p-8`}>
      {/* Header section with animations */}
      <motion.div 
        className="flex flex-col items-center justify-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-sans mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Products & Services
        </motion.h1>
            <motion.button
              onClick={() => scrollToSection(partners)}
              className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full px-8 py-3 flex items-center justify-center space-x-2 transition-colors"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#4B5563" // Slightly lighter gray on hover
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>Our Partners</span>
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
      </motion.div>

      {/* Filter dropdown with animations */}
      <motion.div 
        className="mb-8 flex justify-start"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 rounded-md px-4 py-2 flex items-center gap-2"
              >
                {selectedCategory} <ChevronDown className="h-4 w-4" />
              </Button>
            </motion.div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-zinc-900 border-zinc-800">
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>

      {/* Card grid with staggered animations */}
      <motion.div 
      ref={partners}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory} // This forces re-animation when category changes
      >
        {filteredCards.map((card) => (
          <motion.div
            key={card.id}
            variants={itemVariants}
            className="bg-zinc-900 rounded-lg p-6 flex flex-col h-full transition-all duration-300"
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" 
            }}
          >
            {/* Title section */}
            {card.logo ? (
              // For cards with logos
              <div className="mb-6 flex justify-center">
                <div className="relative w-full h-24">
                  <Image
                    src={logoMap[card.logo]}
                    alt={`${card.title} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="object-contain"
                  />
                </div>
              </div>
            ) : (
              // For cards without logos
              <h2 className="text-yellow-400 text-2xl font-sans mb-4">{card.title}</h2>
            )}
            
            {/* Title that appears below the logo - only for cards with logos */}
            {card.logo && <h3 className="text-xl font-sans mb-4">{card.title}</h3>}
            
            {/* Category */}
            <div className="text-sm text-zinc-500 mb-4">
              Category: {card.category}
            </div>
            
            {/* Description */}
            <p className="text-zinc-300 mb-6 flex-grow">
              {card.description}
            </p>
            
            {/* Learn more link - now with dynamic routing to partner page */}
            <div className="mt-auto pt-4 border-t border-zinc-800">
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={`/partners/${card.slug}`}
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
                >
                  Learn more 
                  <motion.span 
                    className="text-lg"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}