'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface Partner {
  id: number;
  title: string;
  logo: string | null;
  category: string;
  description: string;
  fullDescription?: string;
  websiteUrl?: string;
}

interface FeaturedContentProps {
  partner: Partner;
  logoMap: {[key: string]: string};
  title?: {
    highlighted: string;
    regular: string;
  };
  description?: string;
  images?: {
    main?: string;
    secondary?: string;
    tertiary?: string;
  };
}

const FeaturedContent: React.FC<FeaturedContentProps> = ({
  partner,
  logoMap,
  title = {
    highlighted: 'Lorem ipsum',
    regular: 'dolor sit amet lorem amet'
  },
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.',
  images = {
    main: null,
    secondary: null,
    tertiary: null
  }
}) => {
  return (
    <div className="bg-black text-white">
      {/* Layout de duas colunas para o conteúdo em destaque */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Coluna da esquerda com as imagens */}
        <div className="relative">
          {/* Imagem principal (maior) */}
          <div className="bg-zinc-900 rounded-lg h-96 w-full mb-4 overflow-hidden">
            {images.main ? (
              <Image 
                src={images.main} 
                alt="Featured image" 
                fill 
                style={{objectFit: 'cover'}}
                className="rounded-lg" 
              />
            ) : (
              <div className="w-full h-full bg-zinc-900 rounded-lg"></div>
            )}
          </div>
          
          {/* Imagem secundária (menor, abaixo) */}
          <div className="bg-zinc-800 rounded-lg h-32 w-full overflow-hidden">
            {images.secondary ? (
              <Image 
                src={images.secondary} 
                alt="Secondary image" 
                fill 
                style={{objectFit: 'cover'}}
                className="rounded-lg" 
              />
            ) : (
              <div className="w-full h-full bg-zinc-800 rounded-lg"></div>
            )}
          </div>
        </div>
        
        {/* Coluna da direita com texto e imagem no canto */}
        <div className="flex flex-col justify-between">
          {/* Área superior com imagem no canto */}
          <div className="relative mb-8">
            <div className="bg-zinc-800 rounded-lg h-32 w-64 ml-auto overflow-hidden">
              {images.tertiary ? (
                <Image 
                  src={images.tertiary} 
                  alt="Tertiary image" 
                  fill 
                  style={{objectFit: 'cover'}}
                  className="rounded-lg" 
                />
              ) : (
                <div className="w-full h-full bg-zinc-800 rounded-lg"></div>
              )}
            </div>
          </div>
          
          {/* Conteúdo textual */}
          <div>
            <h2 className="text-4xl md:text-5xl leading-tight mb-4">
              <span className="text-yellow-400">{title.highlighted}</span> {title.regular}
            </h2>
            
            <Link href="#" className="inline-flex items-center text-white border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors group mb-8">
              <span>Lorem Ipsum Dolor</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Parágrafo de texto longo */}
      <div className="mb-20">
        <p className="text-zinc-300 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Rodapé com logo, botão e ícones de redes sociais */}
      <div className="bg-black   p-8 rounded-lg mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo do parceiro */}
          <div className="mb-6 md:mb-0">
            {partner.logo && logoMap[partner.logo] ? (
              <div className="h-16 relative">
                <Image
                  src={logoMap[partner.logo]}
                  alt={`${partner.title} logo`}
                  width={200}
                  height={64}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ) : (
              <div className="inline-block border border-white px-5 py-2">
                <span className="text-white text-2xl font-bold tracking-widest">{partner.title}</span>
              </div>
            )}
          </div>
          
          {/* Botão "Visit Website" */}
          <div className="mb-6 md:mb-0">
            <a 
              href={partner.websiteUrl || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-gray-200 font-sans rounded-full px-8 py-3 text-sm transition-colors"
            >
              Visit Website
            </a>
          </div>
          
          {/* Ícones de redes sociais */}
          <div className="flex space-x-3">
            <a href="#" className="bg-zinc-800 p-2 rounded-md w-10 h-10 flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-zinc-800 p-2 rounded-md w-10 h-10 flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-zinc-800 p-2 rounded-md w-10 h-10 flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-zinc-800 p-2 rounded-md w-10 h-10 flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;