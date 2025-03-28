'use client'
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Search, Filter, X } from 'lucide-react';
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

// Define interfaces
interface Product {
  id: number;
  title: string;
  logo: string | null;
  category: string;
  description: string;
  slug: string;
}

interface CategoryData {
  id: string;
  name: string;
}

// Logo mapping
const logoMap: Record<string, string> = {
  summus: '/summus.png', 
  beter: '/beter.png',
  bitblox: '/bitblox.png',      
  flashbet: '/flashbet.png',    
  astroplay: '/astroplay.png',  
  atlas: '/atlas.png'
};

// Categories data with IDs - Mantendo consistência com os nomes na página ProductsCategories
const categoryData: CategoryData[] = [
  { id: 'all', name: 'All' },
  { id: 'igaming', name: 'iGaming & Sports Betting' },
  { id: 'landbased', name: 'Land-Based Casinos' },
  { id: 'acquisition', name: 'Acquisition & Retention' },
  { id: 'lottery', name: 'Lottery' },
  { id: 'payment', name: 'Global Payment Solutions' },
  { id: 'enterprise', name: 'Enterprise' },
  { id: 'analytics', name: 'Data & Analytics' }
];

// Product card data with assigned categories
// IMPORTANTE: Manter apenas o Turnkey na categoria Enterprise
const productCards: Product[] = [
  {
    id: 1,
    title: "Turnkey/White-label Platforms",
    logo: null,
    category: "Enterprise", // Esta é a única que deve estar na categoria Enterprise
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
    category: "Acquisition & Retention", // Verificado: não deve estar na categoria Enterprise
    description: "Astro Play, a leading gaming aggregator, brings years of industry expertise to enhance online casinos. With cutting-edge technology, it offers superior products, promotions, and rapid response times, valuing partners and clients equally.",
    slug: "astroplay"
  },
  {
    id: 7,
    title: "Atlas",
    logo: "atlas",
    category: "Data & Analytics", // Verificado: não deve estar na categoria Enterprise
    description: "Atlas is a data and analytics platform that provides operators with the tools they need to make informed decisions. With a focus on data visualization and predictive analytics, Atlas helps operators understand player behavior and optimize their business.",
    slug: "atlas"
  }
];

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

// Component that contains all the client-side code using useSearchParams
import { useSearchParams } from 'next/navigation';

const ProductMarketplaceContent = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<string>("A-Z Descending");
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productCards);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  
  // Check if the viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Set up listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filtrar por parâmetro de URL no mount do componente - CORRIGIDO com debugs
  useEffect(() => {
    const applyCategoryFromUrl = () => {
      const categoryFromUrl = searchParams.get('category');
      
      if (categoryFromUrl) {
        const decodedCategory = decodeURIComponent(categoryFromUrl);
        console.log("Filtrando por categoria da URL:", decodedCategory);
        
        // Debug - mostrando todas as categorias disponíveis nos produtos
        const availableCategories = [...new Set(productCards.map(product => product.category))];
        console.log("Categorias disponíveis nos produtos:", availableCategories);
        
        // Inicialmente, filtrar produtos pela categoria da URL - exata correspondência
        let results = [...productCards].filter(product => {
          const match = product.category === decodedCategory;
          console.log(`Produto: ${product.title}, Categoria: ${product.category}, Match: ${match}`);
          return match;
        });
        
        console.log(`Produtos encontrados para categoria ${decodedCategory}:`, results.length);
        
        // Aplicar filtros adicionais (buscas, etc.)
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          results = results.filter(product => 
            product.title.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query)
          );
        }
        
        // Aplicar ordenação
        if (selectedSort === "A-Z Descending") {
          results.sort((a, b) => a.title.localeCompare(b.title));
        } else if (selectedSort === "Z-A Ascending") {
          results.sort((a, b) => b.title.localeCompare(a.title));
        }
        
        setFilteredProducts(results);
      }
    };
    
    applyCategoryFromUrl();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]); // Dependency apenas em searchParams para executar apenas quando a URL mudar

  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    setSelectedCategoryIds(prev => {
      // If category is already selected, remove it
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } 
      // Otherwise, add it
      return [...prev, categoryId];
    });
  };

  // Apply filters and sorting
  useEffect(() => {
    // Se não houver categorias selecionadas manualmente e não houver busca, e tivermos um parâmetro na URL,
    // não sobrescreva os resultados já filtrados pela URL
    if (selectedCategoryIds.length === 0 && !searchQuery && searchParams.get('category')) {
      return;
    }
    
    let results = [...productCards];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Apply category filter
    if (selectedCategoryIds.length > 0) {
      // Map category IDs to names for filtering
      const selectedCategoryNames = selectedCategoryIds.map(id => {
        const category = categoryData.find(c => c.id === id);
        return category ? category.name : '';
      }).filter(Boolean);
      
      results = results.filter(product => 
        selectedCategoryNames.includes(product.category)
      );
    }
    
    // Apply sorting
    if (selectedSort === "A-Z Descending") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort === "Z-A Ascending") {
      results.sort((a, b) => b.title.localeCompare(a.title));
    }
    
    setFilteredProducts(results);
  }, [searchQuery, selectedSort, selectedCategoryIds, searchParams]);

  // Toggle the filter drawer for mobile
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    // Prevent body scrolling when filter is open
    if (!isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Close the filter drawer
  const closeFilter = () => {
    setIsFilterOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Component that uses the useSearchParams hook
  interface ProductFiltersProps {
    onCategorySelect: (categoryId: string) => void;
    selectedCategoryIds: string[];
    onSearchChange: (query: string) => void;
    searchQuery: string;
    onSortChange: (sort: string) => void;
    selectedSort: string;
    isMobile: boolean;
    isFilterOpen: boolean;
    onCloseFilter: () => void;
  }

  const ProductFilters: React.FC<ProductFiltersProps> = ({ 
    onCategorySelect, 
    selectedCategoryIds,
    onSearchChange,
    searchQuery,
    onSortChange,
    selectedSort,
    isMobile,
    isFilterOpen,
    onCloseFilter
  }) => {
    if (isMobile && !isFilterOpen) {
      return null;
    }

    return (
      <div className={`${isMobile ? 'fixed inset-0 z-50 bg-black bg-opacity-90 overflow-auto py-4' : 'w-[305px] shrink-0'} bg-zinc-900 rounded-lg p-6 h-fit ${!isMobile && 'sticky top-4 self-start'}`}>
        {isMobile && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Filters</h2>
            <button 
              onClick={onCloseFilter}
              className="p-2 rounded-full hover:bg-zinc-800"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        )}
        
        {/* Search */}
        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">Search the Marketplace</h3>
          <div className="relative">
            <Input 
              className="bg-zinc-800 border-zinc-700 text-white pl-8" 
              placeholder="Search" 
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
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
            onValueChange={onSortChange}
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
          {categoryData.filter(cat => cat.id !== 'all').map((category) => (
            <div key={category.id} className="flex items-center mb-2">
              <Checkbox 
                id={`category-${category.id}`}
                checked={selectedCategoryIds.includes(category.id)}
                onCheckedChange={(checked) => {
                  onCategorySelect(category.id);
                }}
                className="border-zinc-700 h-4 w-4 data-[state=checked]:bg-zinc-500 data-[state=checked]:text-white"
              />
              <label 
                htmlFor={`category-${category.id}`}
                className="ml-2 text-sm text-zinc-300 cursor-pointer"
              >
                {category.name}
              </label>
            </div>
          ))}
          {["Lorem Ipsum Category", "Lorem Ipsum Category", "Lorem Ipsum Category"].map((category, index) => (
            <div key={`lorem-${index}`} className="flex items-center mb-2">
              <Checkbox 
                id={`category-lorem-${index}`}
                checked={false}
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

        {isMobile && (
          <div className="mt-6">
            <Button 
              className="w-full bg-white text-black hover:bg-gray-200 rounded-full"
              onClick={onCloseFilter}
            >
              Apply Filters
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`${hubotSans.variable} bg-black w-full min-h-screen text-white flex flex-col`}>
      {/* Header */}
      <motion.div 
        className="w-full flex justify-between md:justify-center py-6 px-4"
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
              className="bg-zinc-800 hover:bg-zinc-700 text-white hover:text-white border-zinc-700 rounded-full px-4 md:px-6"
            >
              Categories <ChevronDown className="ml-4 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {isMobile && (
          <Button 
            variant="outline" 
            className="bg-zinc-800 hover:bg-zinc-700 text-white hover:text-white border-zinc-700 rounded-full px-4"
            onClick={toggleFilter}
          >
            <Filter className="h-4 w-4 mr-1" /> Filter
          </Button>
        )}
      </motion.div>

      {/* Mobile search bar */}
      {isMobile && (
        <div className="px-4 mb-4">
          <div className="relative">
            <Input 
              className="bg-zinc-800 border-zinc-700 text-white pl-8 rounded-full" 
              placeholder="Search the Marketplace" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-zinc-400" />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <motion.div 
        className="flex-1 px-4 pb-16 max-w-7xl mx-auto w-full"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar - Only visible on desktop by default */}
          {(!isMobile || isFilterOpen) && (
            <motion.div variants={itemAnimation}>
              <React.Suspense fallback={
                <div className="w-full md:w-[305px] h-full bg-zinc-900 rounded-lg p-6 animate-pulse">
                  <div className="h-8 bg-zinc-800 rounded mb-6"></div>
                  <div className="h-32 bg-zinc-800 rounded mb-6"></div>
                  <div className="h-64 bg-zinc-800 rounded"></div>
                </div>
              }>
                <ProductFilters 
                  onCategorySelect={toggleCategory}
                  selectedCategoryIds={selectedCategoryIds}
                  onSearchChange={setSearchQuery}
                  searchQuery={searchQuery}
                  onSortChange={setSelectedSort}
                  selectedSort={selectedSort}
                  isMobile={isMobile}
                  isFilterOpen={isFilterOpen}
                  onCloseFilter={closeFilter}
                />
              </React.Suspense>
            </motion.div>
          )}
          
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
                    className="border border-zinc-700 rounded-lg overflow-hidden"
                    variants={itemAnimation}
                    whileHover={{ 
                      y: -1,
                      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)" 
                    }}
                  >
                    <div className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
                        <div className="w-full md:w-[200px] h-[60px] flex items-center justify-center md:justify-start">
                          {product.logo && logoMap[product.logo] ? (
                            <Image
                              src={logoMap[product.logo]}
                              alt={`${product.title} logo`}
                              width={180}
                              height={50}
                              style={{ objectFit: 'contain' }}
                              unoptimized
                            />
                          ) : (
                            <span className="text-yellow-400 text-lg font-medium px-2 py-1 rounded">{product.title}</span>
                          )}
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="w-full md:w-auto"
                        >
                          <Button 
                            variant="outline" 
                            className="bg-white text-black hover:bg-gray-200 rounded-full w-full md:w-auto"
                            asChild
                          >
                            <Link href={`/partners/${product.slug}`}>
                              Visit Website
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                      <p className="text-zinc-300 text-sm md:text-base">{product.description}</p>
                      
                      {/* Mobile-only category badge */}
                      {isMobile && (
                        <div className="mt-3">
                          <span className="inline-block bg-zinc-800 text-xs text-zinc-300 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                      )}
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
};

// Main component with Suspense boundary
export default function ProductsMarketplace() {
  return (
    <Suspense fallback={
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border-4 border-t-white border-white/30 animate-spin mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    }>
      <ProductMarketplaceContent />
    </Suspense>
  );
}