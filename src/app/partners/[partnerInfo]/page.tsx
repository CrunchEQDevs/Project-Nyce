import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import FeaturedContent from '@/components/created/FeatureContent';

// Define the Partner interface
interface Partner {
  id: number;
  title: string;
  logo: string | null;
  category: string;
  description: string;
  fullDescription?: string;
  websiteUrl?: string;
}

// This would ideally come from an API or data store
// For now, we're defining it here for simplicity
const partners: {[key: string]: Partner} = {
  "turnkey-white-label-platforms": {
    id: 1,
    title: "Turnkey/White-label Platforms",
    logo: null,
    category: "Enterprise",
    description: "We represent a number of industry-leading iGaming platforms, and are able to identify the ideal solution to fit your operational needs.",
    fullDescription: "We represent a number of industry-leading iGaming platforms, and are able to identify the ideal solution to fit your operational needs. This makes NYCE a game-changing partner to kickstart your brand. Talk to us to discuss your requirements. Our platforms include comprehensive solutions that cover the entire spectrum of iGaming operations, from player management to payment processing and game integration.",
    websiteUrl: "https://example.com/turnkey"
  },
  "summus": {
    id: 2,
    title: "Summus Games",
    logo: "summus",
    category: "iGaming & Sports Betting",
    description: "Combining Casino, betting and lottery expertise to create completely new and exciting games that bring something new to an otherwise static marketplace.",
    fullDescription: "Combining Casino, betting and lottery expertise to create completely new and exciting games that bring something new to an otherwise static marketplace. As well as game content, Summus also has an aggregator with unique games - perfect for Operators looking to expand their product offering. Our innovative approach to game design focuses on player engagement and retention, driving increased revenue for operators.",
    websiteUrl: "https://example.com/summus"
  },
  "beter": {
    id: 3,
    title: "BETER",
    logo: "beter",
    category: "iGaming & Sports Betting",
    description: "BETER is the industry's leading provider of next-gen betting and gaming solutions. All products are designed with the new generation of players in mind, all delivered to boost engagement, retention and operator revenue.",
    fullDescription: "BETER is the industry's leading provider of next-gen betting and gaming solutions. All products are designed with the new generation of players in mind, all delivered to boost engagement, retention and operator revenue. Our comprehensive product suite includes esports, fast sports, gaming, and live casino offerings tailored to modern players' preferences and behaviors.",
    websiteUrl: "https://example.com/beter"
  },
  
  "bitblox": {
    id: 4,
    title: "Bitblox",
    logo: "bitblox",
    category: "Global Payment Solutions",
    description: "Bitblox creates innovative and engaging crypto-price-based games for operators that deliver an entertaining experience unlike any other to its users. Bitblox's flagship product is the Up or Down, a simple crypto game based on the live price of Bitcoin.",
  },
 "flashbet": {
    id: 5,
    title: "FlashBET",
    logo: "flashbet",
    category: "Lottery",
    description: "FlashBET is a patented and unique betting technology designed for the betting and gaming industry. It offers a distinct user experience by combining accumulator betting with lottery-style betting using the innovative Bet-Wheel - making it an ideal product to engage sports bettors.",
  },
  "astroplay": {
    id: 6,
    title: "Astro Play",
    logo: "astroplay",
    category: "Acquisition & Retention",
    description: "Astro Play, a leading gaming aggregator, brings years of industry expertise to enhance online casinos. With cutting-edge technology, it offers superior products, promotions, and rapid response times, valuing partners and clients equally.",
},
  "atlas": {
    id: 7,
    title: "Atlas",
    logo: "atlas",
    category: "Data & Analytics",
    description: "Atlas is a data and analytics platform that provides operators with the tools they need to make informed decisions. With a focus on data visualization and predictive analytics, Atlas helps operators understand player behavior and optimize their business.",
  }
};

// Define the logo map
const logoMap: {[key: string]: string} = {
  summus: '/summus.png', 
  beter: '/beter.png',
  bitblox: '/bitblox.png',      
  flashbet: '/flashbet.png',    
  astroplay: '/astroplay.png',  
  atlas: '/atlas.png'
};
// Função para obter todos os parceiros (necessária para generateStaticParams)
function getAllPartners() {
  return Object.entries(partners).map(([slug, data]) => ({
    ...data,
    slug
  }));
}
// Adicione esta função para geração estática
export async function generateStaticParams() {
  // Usando as chaves do objeto partners como slugs
  return Object.keys(partners).map(slug => ({
    partnerInfo: slug
  }));
}
// Usando tipagem implícita sem definir um tipo personalizado
export default function PartnerPage({ params }: { params: any }) {
  console.log("Params:", params);
  
  // Verifique se o partnerInfo existe
  if (!params || !params.partnerInfo) {
    return (<p>Invalid partner data</p>);
  }
  
  const partner = partners[params.partnerInfo];

  if (!partner) {
    return (
      <div className="bg-[#0E0E0E] w-full min-h-screen text-white p-6 md:p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-sans mb-6">Partner not found</h1>
        <Link href="/products-and-services" className="text-yellow-400">
          <Button className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Products & Services
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black w-full min-h-screen text-white">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Back Button for Mobile */}
        <div className="mb-6 md:hidden">
          <Link href="/products" className="text-white">
            <Button className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 text-sm py-1 px-3 h-auto">
              <ChevronLeft className="mr-1 h-3 w-3" />
              Back
            </Button>
          </Link>
        </div>

        {/* Partner Header - Now in vertical layout with responsive adjustments */}
        <div className="mb-8 md:mb-12">
          {/* Logo Section on Top */}
          {partner.logo ? (
            <div className="w-full flex justify-center mb-6 md:mb-8">
              <div className="relative w-full bg-[#0E0E0E] p-4 sm:p-6 md:p-10 rounded-lg flex flex-col items-center justify-center">
                <div className="w-full max-w-[240px] md:max-w-[280px] h-[100px] md:h-[150px] relative flex items-center justify-center">
                  <Image
                    src={logoMap[partner.logo]}
                    alt={`${partner.title} logo`}
                    width={280}
                    height={150}
                    style={{ objectFit: 'contain', width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
                
                <p className="flex text-white items-center text-xs sm:text-sm text-center justify-center mt-4">
                  {partner.description}
                </p>
                {partner.websiteUrl && (
                  <a 
                    href={partner.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-6 md:mt-8 bg-white text-black hover:bg-gray-200 font-sans rounded-full px-6 md:px-8 py-2 text-sm transition-colors w-full sm:w-auto text-center"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center mb-6 md:mb-8">
              <div className="relative w-full max-w-md bg-zinc-900 p-6 md:p-10 rounded-lg flex flex-col items-center justify-center">
                <h2 className="text-yellow-400 text-2xl md:text-3xl font-sans text-center">{partner.title}</h2>
                {partner.websiteUrl && (
                  <a 
                    href={partner.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-6 md:mt-8 bg-white text-black hover:bg-gray-200 font-sans rounded-full px-6 md:px-8 py-2 text-sm transition-colors w-full sm:w-auto text-center"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          )}
          
          {/* Description Section Below */}
          <div className="w-full bg-zinc-900 p-4 sm:p-6 md:p-8 rounded-lg">
            <p className="text-base md:text-lg text-zinc-300">
              {partner.fullDescription || partner.description}
            </p>
          </div>
        </div>
        
        {/* First Statistics Section - Removed to avoid duplication */}
        
        {/* Statistics Section - UPDATED WITH NEW DESIGN */}
        <div className="mb-8 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Content and Link */}
            <div className="p-4 md:p-8 rounded-lg">
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-sans mb-4">Lorem ipsum <span className="text-yellow-400">dolor sit</span> amet</h3>
              
              <div className="space-y-4 md:space-y-6 flex flex-col mb-4 md:mb-6">
                <p className="text-zinc-300 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
                </p>
              </div>
              
              {/* Link with arrow */}
              <Link href="#" className="inline-flex items-center text-white border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors group">
                <span>Lorem Ipsum Dolor</span>
                <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Right Column - Statistics with Yellow Corner Borders */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-16 p-4 md:p-8">
              {/* Statistic 1 */}
              <div className="relative">
                {/* Yellow corner borders */}
                <div className="absolute -top-1 -left-1 w-4 md:w-6 h-4 md:h-6 border-t-2 border-l-2 border-yellow-400"></div>
                <div className="absolute -bottom-1 -right-1 w-4 md:w-6 h-4 md:h-6 border-b-2 border-r-2 border-yellow-400"></div>
                
                {/* Content */}
                <div className="py-6 md:py-8 px-8 md:px-12 text-center">
                  <p className="text-4xl md:text-6xl font-bold mb-2">40+</p>
                  <p className="text-gray-400 text-sm md:text-base">Statistic 1</p>
                </div>
              </div>
              
              {/* Statistic 2 */}
              <div className="relative">
                {/* Yellow corner borders */}
                <div className="absolute -top-1 -left-1 w-4 md:w-6 h-4 md:h-6 border-t-2 border-l-2 border-yellow-400"></div>
                <div className="absolute -bottom-1 -right-1 w-4 md:w-6 h-4 md:h-6 border-b-2 border-r-2 border-yellow-400"></div>
                
                {/* Content */}
                <div className="py-6 md:py-8 px-8 md:px-12 text-center">
                  <p className="text-4xl md:text-6xl font-bold mb-2">20%</p>
                  <p className="text-gray-400 text-sm md:text-base">Statistic 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Content Section */}
        <div className="mb-8 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="bg-zinc-900 p-4 sm:p-6 md:p-8 rounded-lg flex flex-col">
              <h3 className="text-yellow-400 text-xl md:text-2xl font-sans mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-zinc-800 p-3 md:p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">40+</p>
                  <p className="text-xs md:text-sm text-zinc-400">Statistic 1</p>
                </div>
                <div className="border border-zinc-800 p-3 md:p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">20%</p>
                  <p className="text-xs md:text-sm text-zinc-400">Statistic 2</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="p-4 md:p-8 rounded-lg">
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-sans mb-4">Lorem ipsum <span className='text-yellow-400'>dolor sit</span> amet</h3>
              <Link href="#" className="text-white flex items-center group text-sm md:text-base underline">
                Lorem Ipsum Dolor <ChevronRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
              </Link> 
              <div className='space-y-3 md:space-y-6 flex flex-col mt-2 text-xs md:text-base'> 
                <p className='text-zinc-300'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, excepturi ducimus mollitia obcaecati pariatur blanditiis.
                </p>
                <p className='text-zinc-300'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, excepturi ducimus mollitia obcaecati pariatur blanditiis.
                </p>
                <p className='text-zinc-300 hidden md:block'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, excepturi ducimus mollitia obcaecati pariatur blanditiis.
                </p>
                <p className='text-zinc-300 hidden md:block'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, excepturi ducimus mollitia obcaecati pariatur blanditiis.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Content Component - Assuming it handles its own responsiveness */}
        <FeaturedContent 
          partner={partner}
          logoMap={logoMap}
          title={{
            highlighted: partner.title,
            regular: "showcase"
          }}
          description={partner.fullDescription || partner.description}
          images={{
            main: undefined,
            secondary: undefined,
            tertiary: undefined
          }}
        />
      </div>
    </div>
  );
}