import React from 'react';
import { Hubot_Sans, Fragment_Mono } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const hubotSans = Hubot_Sans({
  weight: "400",
  variable: "--font-hubot-sans",
  subsets: ["latin"],
})

const fragmentMono = Fragment_Mono({
  weight: "400",
  variable: "--font-fragment-mono",
  subsets: ["latin"],
})

export default function ViryaPage() {
  return(
    <div className={`${hubotSans.variable} ${fragmentMono.variable} bg-[#0E0E0E]`}>
      {/* Seções anteriores preservadas */}
      <div className='flex flex-col rounded-full gap-6 items-center justify-center'>
        <h1 className='flex justify-center text-white font-mono text-5xl'>
          The Virya Group
        </h1>
        <p className='flex justify-center text-white font-mono text-sm py-4 mx-20'>
          The Virya Group is a collection of multi-discipline businesses offering investment and consultancy services across our focused and specialist
          fields in Gambling, iGaming, esports, Web3, Metaverse and Blockchain technology. The Group was founded by Farzad Peyman, whom, alongside
          his partners, oversee the following Virya Group sub-brands and services:
        </p>
        <Link href={"#"} className="bg-white text-black flex justify-center hover:bg-gray-700 hover:text-white rounded-full max-w-10 px-4 py-2 text-sm mb-16">
          Visit Website
        </Link>
      </div>
      
      {/* Divisão entre seções */}
      <div className='w-full my-8'></div>
      
      {/* Container principal com largura máxima */}
      <div className='w-full max-w-6xl mx-auto px-8'>
        {/* Título principal com span amarelo */}
        <div className='mb-12'>
          <h1 className='text-white font-mono text-5xl'>
            Lorem ipsum<span className='text-yellow-400'> dolor sit </span> amet
          </h1>
        </div>
        
        {/* Conteúdo principal omitido para brevidade */}
        
        {/* Parágrafo introdutório para a seção de equipe */}
        <div className='mb-12'>
          <p className='text-white font-mono text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
          </p>
        </div>
        
        {/* Seção de carrossel de equipe */}
        <div className='relative mb-24'>
          {/* Container das fotos da equipe com controles de navegação */}
          <div className='flex items-center'>
           
            
            {/* Cards de membros da equipe */}
            <div className='flex justify-between w-full px-12 gap-4'>
              {/* Card 1 */}
              <div className='flex flex-col items-center'>
                <div className='rounded-2xl overflow-hidden mb-4 w-full'>
                  <Image
                    src='/farzad.png'
                    alt='Farzad Peyman'
                    width={300}
                    height={300}
                    className='object-cover w-full aspect-square'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-white font-mono text-xl'>Farzad Peyman</span>
                  <Link href="https://linkedin.com" className='px-6' target="_blank" aria-label="LinkedIn profile">
                    <Linkedin className="text-white text-2xl" />
                  </Link>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className='flex flex-col items-center'>
                <div className='rounded-2xl overflow-hidden mb-4 w-full'>
                  <Image
                    src='/harmen.png'
                    alt='Harmen Brenninkmejer'
                    width={300}
                    height={300}
                    className='object-cover w-full aspect-square'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-white font-mono text-xl'>Harmen Brenninkmejer</span>
                  <Link href="https://linkedin.com" className='px-6' target="_blank" aria-label="LinkedIn profile">
                    <Linkedin className="text-white" />
                  </Link>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className='flex flex-col items-center'>
                <div className='rounded-2xl overflow-hidden mb-4 w-full'>
                  <Image
                    src='/ffinlo.png'
                    alt='Ffinlo Martin'
                    width={300}
                    height={300}
                    className='object-cover w-full aspect-square'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-white font-mono text-xl'>Ffinlo Martin</span>
                  <Link href="https://linkedin.com" className='px-6' target="_blank" aria-label="LinkedIn profile">
                    <Linkedin className="text-white text-2xl" />
                  </Link>
                </div>
              </div>
            </div>            
          </div>
        </div>
        
        {/* Rodapé com logo e links sociais */}
        <div className='flex justify-between items-center mt-8 py-6 border-t border-gray-800'>
          {/* Logo Virya */}
          <div className='w-48'>
            <Image
              src='/virya.png'
              alt='Virya Group Logo'
              width={200}
              height={80}
              className='object-contain'
            />
          </div>
          
          {/* Botão Visit Website */}
          <Link href={"#"} className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-sm font-medium">
            Visit Website
          </Link>
          
          {/* Ícones sociais */}
          <div className='flex gap-4'>
            <Link href="#" className='bg-gray-800 p-3 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            <Link href="#" className='bg-gray-800 p-3 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </Link>
            <Link href="#" className='bg-gray-800 p-3 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link href="#" className='bg-gray-800 p-3 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}