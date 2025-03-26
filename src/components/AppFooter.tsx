'use client'
import React from "react";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import XLogoOfficial from "./XLogo";
import { Hubot_Sans, Fragment_Mono } from "next/font/google";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});
const fragmentMono = Fragment_Mono({
  weight: "400",
  variable: "--font-fragment-mono",
  subsets: ["latin"],
});

export default function AppFooter() {
  return (
    <footer className={`${hubotSans.variable} ${fragmentMono.variable} bg-black text-white`}>
      {/* Separador superior */}
      <div className="border-t border-zinc-800 w-full"></div>
      
      {/* Seção principal */}
      <div className="container mx-auto px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Coluna da esquerda - Newsletter */}
          <div className="md:w-1/2">
            <h2 className="text-4xl mb-10 font-sans leading-tight">
              <span className="text-yellow-400 font-sans">Subscribe</span> to the <span className="text-yellow-400 font-sans">newsletter</span> for 
              updates and industry insight.
            </h2>
            
            {/* Input e botão de subscribe */}
            <div className="mb-6 w-full">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-zinc-900 border-0 rounded-md px-6 py-4 text-white mb-6"
              />
            </div>
            
            {/* Checkbox */}
            <div className="flex items-center space-x-3 mb-6 ">
              <Checkbox id="newsletter" className="mt-1 h-5 w-5  border-white rounded-none"/>
              <label htmlFor="newsletter" className="text-white  text-sm">
                I have read and agree to the Terms & Conditions of NYCE International Ltd.
              </label>
            </div>
            
            {/* Botão subscribe */}
            <div className="mb-10">
              <button className="bg-white hover:bg-gray-200 text-black font-medium px-8 py-3 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          {/* Coluna da direita - Social media */}
          <div className="md:w-1/3">
            <p className="text-lg mb-6">Follow us on social media</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-zinc-900 p-3 rounded-md w-12 h-12 flex items-center justify-center hover:bg-zinc-800 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-zinc-900 p-3 rounded-md w-12 h-12 flex items-center justify-center hover:bg-zinc-800 transition-colors">
                <XLogoOfficial size={20} />
              </a>
              <a href="#" className="bg-zinc-900 p-3 rounded-md w-12 h-12 flex items-center justify-center hover:bg-zinc-800 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-zinc-900 p-3 rounded-md w-12 h-12 flex items-center justify-center hover:bg-zinc-800 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Separador */}
      <div className="border-t border-zinc-800 w-full"></div>
      
      {/* Rodapé com logo e copyright */}
      <div className="py-6">
        <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-5xl font-bold">
              <span className="text-yellow-400">N</span>
              <span className="text-white">YCE</span>
            </h1>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© Copyright © 2024 NYCE. All rights reserved</p>
          </div>
          <div>
            <Image 
              src="/certified.svg" 
              alt="Verified"
              width={80}
              height={80}
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}