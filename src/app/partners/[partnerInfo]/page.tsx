'use client';

import React, {use} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
    slug: "bitblox"
  },
 "flashbet": {
    id: 5,
    title: "FlashBET",
    logo: "flashbet",
    category: "Lottery",
    description: "FlashBET is a patented and unique betting technology designed for the betting and gaming industry. It offers a distinct user experience by combining accumulator betting with lottery-style betting using the innovative Bet-Wheel - making it an ideal product to engage sports bettors.",
    slug: "flashbet"
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
    slug: "atlas"
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

export default function PartnerPage(props: { params: { partnerInfo: string } }) {
    // Use React.use() to unwrap the params Promise
    const params = use(props.params);
    const partnerInfo = params.partnerInfo;
    const partner = partners[partnerInfo];
  
  if (!partner) {
    return (
      <div className="bg-[#0E0E0E] w-full min-h-screen text-white p-6 md:p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-sans mb-6">Partner not found</h1>
        <Link href="/products&services" className="text-yellow-400">
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
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Partner Header - Now in vertical layout */}
        <div className="mb-12 ">
          {/* Logo Section on Top */}
          {partner.logo ? (
            <div className="w-full flex justify-center mb-8">
              <div className="relative w-full max-w-md bg-[#0E0E0E] p-10 rounded-lg flex flex-col items-center justify-center">
                <Image
                  src={logoMap[partner.logo]}
                  alt={`${partner.title} logo`}
                  width={280}
                  height={150}
                  style={{ objectFit: 'contain' }}
                />
                <a 
                  href={partner.websiteUrl || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 bg-white text-black hover:bg-gray-200 font-sans rounded-full px-8 py-2 text-sm transition-colors"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center mb-8">
              <div className="relative w-full max-w-md bg-zinc-900 p-10 rounded-lg flex flex-col items-center justify-center">
                <h2 className="text-yellow-400 text-3xl font-sans text-center">{partner.title}</h2>
                {partner.websiteUrl && (
                  <a 
                    href={partner.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-8 bg-white text-black hover:bg-gray-200 font-sans rounded-full px-8 py-2 text-sm transition-colors"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          )}
          
          {/* Description Section Below */}
          <div className="w-full bg-zinc-900 p-8 rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {partner.title}
            </h1>
            <p className="text-sm text-zinc-500 mb-4">Category: {partner.category}</p>
            <p className="text-lg text-zinc-300">
              {partner.fullDescription || partner.description}
            </p>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-yellow-400 text-2xl font-sans mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 font-mono mr-2">•</span>
                  <span>Industry-leading technology platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 font-mono mr-2">•</span>
                  <span>Seamless integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 font-mono mr-2">•</span>
                  <span>Comprehensive reporting and analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 font-mono mr-2">•</span>
                  <span>24/7 technical support</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-lg flex flex-col justify-between">
              <h3 className="text-yellow-400 text-2xl font-sans mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-zinc-800 p-4 text-center">
                  <p className="text-3xl font-bold text-white">40+</p>
                  <p className="text-sm text-zinc-400">Statistic 1</p>
                </div>
                <div className="border border-zinc-800 p-4 text-center">
                  <p className="text-3xl font-bold text-white">20%</p>
                  <p className="text-sm text-zinc-400">Statistic 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Content Section */}
        <div className="mb-12">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-yellow-400 text-2xl font-sans mb-4">Why Choose {partner.title}</h3>
            <p className="text-zinc-300 font-mono mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            </p>
            <p className="text-zinc-300 font-mono">
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            </p>
          </div>
        </div>
        
        {/* Contact Section */}
        <div>
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-yellow-400 text-2xl font-sans mb-4">Get in Touch</h3>
            <p className="text-zinc-300 font-mono mb-6">
              Interested in learning more about {partner.title}? Contact our team for a personalized demonstration or to discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}