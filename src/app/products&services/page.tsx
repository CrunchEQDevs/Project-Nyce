'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ArrowDown } from 'lucide-react';
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

export default function ProductsAndServices() {
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
      description: "We represent a number of industry-leading iGaming platforms, and are able to identify the ideal solution to fit your operational needs. This makes NYCE a game-changing partner to kickstart your brand. Talk to us to discuss your requirements."
    },
    {
      id: 2,
      title: "Summus Games",
      logo: "summus",
      category: "iGaming & Sports Betting",
      description: "Combining Casino, betting and lottery expertise to create completely new and exciting games that bring something new to an otherwise static marketplace. As well as game content, Summus also has an aggregator with unique games - perfect for Operators looking to expand their product offering."
    },
    {
      id: 3,
      title: "BETER",
      logo: "beter",
      category: "iGaming & Sports Betting",
      description: "BETER is the industry's leading provider of next-gen betting and gaming solutions. All products are designed with the new generation of players in mind, all delivered to boost engagement, retention and operator revenue."
    },
    {
      id: 4,
      title: "Bitblox",
      logo: "bitblox",
      category: "Global Payment Solutions",
      description: "Bitblox creates innovative and engaging crypto-price-based games for operators that deliver an entertaining experience unlike any other to its users. Bitblox's flagship product is the Up or Down, a simple crypto game based on the live price of Bitcoin."
    },
    {
      id: 5,
      title: "FlashBET",
      logo: "flashbet",
      category: "Lottery",
      description: "FlashBET is a patented and unique betting technology designed for the betting and gaming industry. It offers a distinct user experience by combining accumulator betting with lottery-style betting using the innovative Bet-Wheel - making it an ideal product to engage sports bettors."
    },
    {
      id: 6,
      title: "Astro Play",
      logo: "astroplay",
      category: "Acquisition & Retention",
      description: "Astro Play, a leading gaming aggregator, brings years of industry expertise to enhance online casinos. With cutting-edge technology, it offers superior products, promotions, and rapid response times, valuing partners and clients equally."
    },
    {
      id: 7,
      title: "Atlas",
      logo: "atlas",
      category: "iGaming solution",
      description: "Atlas Platform, a versatile iGaming solution, excels in handling player activities, wallet management, 3rd-party integrations, compliance functions, and reporting. With a microservices architecture, it provides tools for player accounting, billing, risk management, and more."
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
      {/* Header section */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-4xl md:text-6xl font-sans mb-6">Products & Services</h1>
        
        <Link
          href="#"
          className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 transition-colors text-base mb-8"
        >
          <span>Go to Partners</span>
          <ArrowDown size={16} />
        </Link>
      </div>

      {/* Filter dropdown */}
      <div className="mb-8 flex justify-start">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 rounded-md px-4 py-2 flex items-center gap-2"
            >
              {selectedCategory} <ChevronDown className="h-4 w-4" />
            </Button>
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredCards.map((card) => (
    <div
      key={card.id}
      className="bg-zinc-900 rounded-lg p-6 flex flex-col h-full transition-all duration-300"
    >
      {/* Title section */}
      {card.logo ? (
        // For cards with logos (which don't appear to be in your screenshot)
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
        // For cards without logos (as shown in screenshot)
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
      
      {/* Learn more link */}
      <div className="mt-auto pt-4 border-t border-zinc-800">
        <Link
          href="#"
          className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
        >
          Learn more <span className="text-lg">→</span>
        </Link>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}