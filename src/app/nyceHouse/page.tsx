'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Hubot_Sans, Fragment_Mono } from 'next/font/google';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  weight: "400",
  variable: "--font-fragment-mono",
  subsets: ["latin"],
});

export default function NyceHousePage() {
  // Estado para controlar o slide atual do carrossel
  const [currentSlide, setCurrentSlide] = useState(0);
  // Estado para saber se estamos em um dispositivo móvel
  const [isMobile, setIsMobile] = useState(false);
  
  // Referência para o container do carrossel
  const carouselRef = useRef(null);
  
  // Array de imagens para o carrossel
  const galleryImages = [
    "/game-image-1.jpg",
    "/game-image-1.jpg",
    "/game-image-1.jpg",
    "/game-image-1.jpg"
  ];

  // Função para verificar o tamanho da tela
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar tamanho inicial
    checkMobile();
    
    // Adicionar event listener para resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Funções para controlar o carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className={`${hubotSans.variable} ${fragmentMono.variable} min-h-screen bg-[#0E0E0E]`}>
      {/* Primeira seção - Header */}
      <div className="bg-[#0E0E0E] flex flex-col rounded-full gap-4 md:gap-6 items-center justify-center py-10 md:py-16 px-4">
        <h1 className="text-white text-4xl md:text-7xl font-sans text-center">Nyce House</h1>
        <p className="text-white font-mono text-center text-sm md:text-base">An Exclusive Gaming Members Club for Executives & C-Level Leaders</p>
        <Link href="#" className="bg-zinc-700 text-white hover:bg-stone-300 hover:text-zinc-950 rounded-full px-5 p-2 text-sm mt-2">
          Get in Touch
        </Link>
      </div>
      
      {/* Segunda seção - Welcome */}
      <div className="flex flex-col gap-4 md:gap-6 items-center justify-center py-12 md:py-20 w-full px-4">
        <h1 className="text-white font-mono text-2xl md:text-3xl text-center">
          Welcome to <span className="text-yellow-400 font-sans text-2xl md:text-3xl">NYCE HOUSE</span>
        </h1>
        <p className="text-white max-w-4xl px-4 text-center text-sm md:text-base">
          NYCE House is a private digital retreat for the elite minds of business and tech. This exclusive members-only club brings together executive and C-level professionals who share a passion for gaming, strategy, and community. Housed on Slack, NYCE House is a virtual lounge where innovation meets play, and high-level leaders connect over shared interests beyond the boardroom. Whether you're winding down after a high-stakes meeting or looking to sharpen your decision-making skills through competitive gameplay, NYCE House is where it happens.
        </p>
      </div>
      
      {/* Terceira seção - Features */}
      <div className="flex flex-col gap-6 md:gap-8 justify-center py-12 md:py-20 w-full px-5 md:px-16 lg:px-24 xl:px-36 max-w-7xl mx-auto">
        <h1 className="text-yellow-400 font-sans text-3xl md:text-4xl w-full">
          What Makes NYCE House Unique?
        </h1>
        
        <ul className="space-y-4 w-full">
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-lg md:text-xl">• Curated Gaming Experiences</h3>
            <p className="text-white text-xs md:text-sm font-mono ml-4 md:ml-6">
              Engage in carefully selected strategy, cooperative, and competitive games designed to challenge, entertain, and spark collaboration.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-lg md:text-xl">• Slack-Based Access</h3>
            <p className="text-white text-xs md:text-sm font-mono ml-4 md:ml-6">
              Our club lives on Slack for seamless integration into your day-to-day digital workspace. Access exclusive channels, events, and tournaments — all without leaving your favorite app.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-lg md:text-xl">• Executive-Only Network</h3>
            <p className="text-white text-xs md:text-sm font-mono ml-4 md:ml-6">
              Every member is verified. Join a circle of founders, CEOs, executives, and C-level leaders who value both sharp minds and strategic fun.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-lg md:text-xl">• Premium Events & Tournaments</h3>
            <p className="text-white text-xs md:text-sm font-mono ml-4 md:ml-6">
              Participate in regularly hosted game nights, executive league tournaments, themed challenges, and limited-time events.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-lg md:text-xl">• Behind-the-Scenes Access</h3>
            <p className="text-white text-xs md:text-sm font-mono ml-4 md:ml-6">
              Get early access to indie games, beta tests, and direct Q&As with game developers, investors, and industry insiders.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-lg md:text-xl">• Private Club Perks</h3>
            <p className="text-white text-xs md:text-sm font-mono ml-4 md:ml-6">
              Members enjoy invitations to IRL meetups, digital rewards, member spotlights, exclusive content, and more.
            </p>
          </li>
        </ul>
        
        {/* Quarta seção - Como participar */}
        <h1 className="text-yellow-400 font-sans text-3xl md:text-4xl w-full mt-10 md:mt-16">
          How to Join NYCE House
        </h1>
        
        <p className="text-white font-mono text-sm md:text-base">
          NYCE House is invite-only, but we are always open to welcoming driven and passionate executives into our fold. Here's how you can get in:
        </p>
        
        <ol className="space-y-4 md:space-y-5 w-full pl-2 md:pl-6">
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-lg md:text-xl">1. Get Invited</h3>
            <p className="text-white text-xs md:text-sm font-mono ml-4 md:ml-6">
              Current members can extend a limited number of invitations each season. Ask around your network — or better yet, impress them in the next game.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-lg md:text-xl">2. Apply for Consideration</h3>
            <p className="text-white text-xs md:text-sm font-mono ml-4 md:ml-6">
              Interested in joining? Submit a short application form. Our team reviews each submission to ensure a good fit with the community values.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-lg md:text-xl">3. Prove Your Game</h3>
            <p className="text-white text-xs md:text-sm font-mono ml-4 md:ml-6">
              Some invitations are unlocked through participation in external gaming events or competitions hosted by NYCE partners.
            </p>
          </li>
        </ol>
      </div>
      
      {/* Quinta seção - Galeria e Call to Action */}
      <div className="flex flex-col gap-8 md:gap-12 items-center justify-center py-12 md:py-20 w-full px-4 md:px-16 lg:px-24 xl:px-36">
        {/* Galeria de imagens - Carrossel em Mobile, Grid em Desktop */}
        {isMobile ? (
          // Carrossel para Mobile
          <div className="relative w-full max-w-sm mx-auto">
            <div 
              ref={carouselRef}
              className="relative overflow-hidden rounded-lg aspect-square"
            >
              <div 
                className="flex transition-transform duration-300 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryImages.map((src, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <Image 
                      src={src}
                      alt={`Game Image ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              
              {/* Botões de navegação */}
              <button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Indicadores de slide */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {galleryImages.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Grid para Desktop
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl">
            {galleryImages.map((src, index) => (
              <div key={index} className="aspect-square rounded overflow-hidden">
                <Image 
                  src={src}
                  alt={`Game Image ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        )}
        
        {/* Texto inspirador */}
        <div className="w-full max-w-7xl p-4 md:p-8 text-center">
          <p className="text-white font-mono text-base md:text-lg">
            NYCE House is more than just a club — it's a movement. A community built on trust, intelligence, camaraderie, and fun. Step into a new kind of network where games are the medium, and leadership is the language.
          </p>
          <p className="text-white font-mono mt-4 md:mt-6 text-sm md:text-base">
            Because even the sharpest minds need a place to play.
          </p>
        </div>
        
        {/* Botão CTA */}
        <div className="mt-4 md:mt-6">
          <Link href="#" className="bg-white text-zinc-900 hover:bg-yellow-400 rounded-full px-4 py-3 font-sans text-base md:text-lg font-medium">
            Apply to Join
          </Link>
        </div>
      </div>
    </div>
  );
}