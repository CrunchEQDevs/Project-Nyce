'use client'
import React from "react";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Icon, Facebook, Instagram, Linkedin } from "lucide-react";
import XLogoOfficial from "./XLogo";
import { Hubot_Sans, Fragment_Mono } from "next/font/google";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
})

export default function AppFooter() {
  return (
    <footer className="bg-black text-white space-y-3 w-full">
      {/* Primeira seção com borda superior */}
      <div className="border-t border-[#FFFFFF33] py-10">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            {/* Coluna da esquerda */}
            <div className="md:w-1/2">
              <h2 className="text-2xl mb-6">
                <span className="text-yellow-400">Subscribe</span> to the <span className="text-yellow-400">newsletter</span> for updates and industry insight
              </h2>
              
              {/* Checkbox */}
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox id="newsletter" className="h-5 w-5 border-white rounded-sm"/>
                <label htmlFor="newsletter" className="text-white text-sm">
                  I have read and agree to the terms and conditions of NYCE International Ltd.
                </label>
              </div>
              
              {/* Formulário simplificado */}
              <div className="flex w-full mb-10">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border border-r-0 border-gray-700 px-4 py-2 w-2/3 text-white"
                />
                <button className="bg-white text-black px-4 py-2 w-1/3">
                  Subscribe
                </button>
              </div>
              
              {/* Social media */}
              <div className="flex items-center space-x-6">
                <span>Follow us on social media</span>
                <div className="flex space-x-3">
                  <a href="#" className="bg-zinc-900 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className="bg-zinc-900 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                    <XLogoOfficial size={16} />
                  </a>
                  <a href="#" className="bg-zinc-900 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="bg-zinc-900 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Links à direita */}
            <div className="md:w-1/3 flex flex-col space-y-8 md:items-end">
              <div className="grid grid-cols-2 gap-4 md:text-right mb-6">
                <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
                <Link href="/" className="text-gray-400 hover:text-white">Products & Services</Link>
                <Link href="/" className="text-gray-400 hover:text-white">About</Link>
                <Link href="/" className="text-gray-400 hover:text-white">Stock</Link>
              </div>
              <div className="grid grid-cols-3 gap-4 md:text-right">
                <Link href="/" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                <Link href="/" className="text-gray-400 hover:text-white">Terms & Conditions</Link>
                <Link href="/" className="text-gray-400 hover:text-white">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Separador */}
      <div className="border-t border-[#FFFFFF33] w-full"></div>
      
      {/* Rodapé com logo e copyright */}
      <div className="py-3">
        <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-4xl font-bold">
              <span className="text-yellow-400">N</span>
              <span className="text-white">YCE</span>
            </h1>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© Copyright © 2024 NYCE. All rights reserved</p>
          </div>
          <div>
            <Image 
              src="/certified.svg" 
              alt="Verified"
              width={70}
              height={70}
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}