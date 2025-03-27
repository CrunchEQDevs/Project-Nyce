'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronDown, ArrowDown, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    category: "Data & Analytics",
    description: "Atlas is a data and analytics platform that provides operators with the tools they need to make informed decisions. With a focus on data visualization and predictive analytics, Atlas helps operators understand player behavior and optimize their business.",
    slug: "atlas"
  }
];

// Extract all unique categories
const categories = [
  "All",
  "iGaming & Sports Betting",
  "Land-Based Casinos",
  "Acquisition & Retention",
  "Lottery",
  "Global Payment Solutions",
  "Enterprise",
  "Data & Analytics"
];

// Features for filtering
const features = [
  "Feature 1",
  "Feature 2",
  "Feature 3",
  "Feature 4",
  "Feature 5",
  "Feature 6",
  "Feature 7",
  "Feature 8",
  "Feature 9",
  "Feature 10"
];

export default function ProductsMarketplace() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("A-Z Descending");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(productCards);

  // Aplica o filtro de categoria da URL quando a página carrega
  useEffect(() => {
    if (categoryFromUrl) {
      const decodedCategory = decodeURIComponent(categoryFromUrl);
      if (categories.includes(decodedCategory)) {
        setSelectedCategories([decodedCategory]);
      }
    }
  }, [categoryFromUrl]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
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

  // Aplicar filtros e ordenação
  useEffect(() => {
    let results = [...productCards];
    
    // Aplicar filtro de busca
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Aplicar filtro de categoria
    if (selectedCategories.length > 0) {
      results = results.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Aplicar ordenação
    if (selectedSort === "A-Z Descending") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort === "Z-A Ascending") {
      results.sort((a, b) => b.title.localeCompare(a.title));
    }
    
    setFilteredProducts(results);
  }, [searchQuery, selectedSort, selectedCategories, selectedFeatures]);

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Toggle feature selection
  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div className={`${hubotSans.variable} bg-black w-full min-h-screen text-white flex flex-col`}>
      {/* Header - Apenas o botão Our Partners no topo como na imagem 3 */}
      <motion.div 
        className="w-full flex justify-center py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        <Link href="/products">
            <Button 
                variant="outline" 
                className="bg-zinc-800 hover:bg-zinc-700 text-white hover:text-white border-zinc-700 rounded-full px-6"
            >
                Categories <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            </Link>
        </motion.div>
      </motion.div>

      {/* Main Content - Layout side by side como na imagem 3 */}
      <motion.div 
        className="flex-1 px-4 pb-16 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex gap-6">
          {/* Filters Sidebar - Painel lateral menor */}
          <motion.div 
            className="w-[305px] shrink-0 bg-zinc-900 rounded-lg p-6 h-fit sticky top-4 self-start"
            variants={itemAnimation}
          >
            {/* Search */}
            <div className="mb-6">
              <h3 className="text-base font-medium mb-2">Search the Marketplace</h3>
              <div className="relative">
                <Input 
                  className="bg-zinc-800 border-zinc-700 text-white pl-8" 
                  placeholder="Search" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-zinc-400" />
                </div>
              </div>
            </div>
            
            {/* Sort by */}
            <div className="mb-6">
              <h3 className="text-base font-medium mb-2">Sort by</h3>
              <Select 
                value={selectedSort} 
                onValueChange={setSelectedSort}
                defaultValue="A-Z Descending"
              >
                <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                  <SelectItem value="A-Z Descending">A-Z Descending</SelectItem>
                  <SelectItem value="Z-A Ascending">Z-A Ascending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Category */}
            <div className="mb-6">
              <h3 className="text-base font-medium mb-2">Category</h3>
              {categories.filter(cat => cat !== "All").map((category) => (
                <div key={category} className="flex items-center mb-2">
                  <Checkbox 
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                    className="border-zinc-700 h-4 w-4"
                  />
                  <label 
                    htmlFor={`category-${category}`}
                    className="ml-2 text-sm text-zinc-300 cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
              ))}
              {["Lorem Ipsum Category", "Lorem Ipsum Category", "Lorem Ipsum Category"].map((category, index) => (
                <div key={`lorem-${index}`} className="flex items-center mb-2">
                  <Checkbox 
                    id={`category-lorem-${index}`}
                    className="border-zinc-700 h-4 w-4"
                  />
                  <label 
                    htmlFor={`category-lorem-${index}`}
                    className="ml-2 text-sm text-zinc-300 cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Products Grid */}
          <motion.div 
            className="flex-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <motion.div 
                    key={product.id} 
                    className=" border-zinc-700 border-1 rounded-lg overflow-hidden"
                    variants={itemAnimation}
                    whileHover={{ 
                      y: -1,
                      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)" 
                    }}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="w-[200px] h-[60px] flex items-center">
                          {product.logo ? (
                            <Image
                              src={logoMap[product.logo]}
                              alt={`${product.title} logo`}
                              width={180}
                              height={50}
                              style={{ objectFit: 'contain' }}
                            />
                          ) : (
                            <span className="text-yellow-400 text-lg font-medium px-2 py-1 rounded">{product.title}</span>
                          )}
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button 
                            variant="outline" 
                            className="bg-white text-black hover:bg-gray-200 rounded-full"
                            asChild
                          >
                            <Link href={`/partners/${product.slug}`}>
                              Visit Website
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                      <p className="text-zinc-300 mb-2">{product.description}</p>
                    </div> 
                  </motion.div>
                ))
              ) : (
                <div className="flex items-center justify-center p-8 bg-zinc-900 rounded-lg">
                  <p className="text-zinc-400 text-lg">No products match your search. Please try again.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}