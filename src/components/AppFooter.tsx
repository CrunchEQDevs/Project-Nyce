'use client'
import React from "react";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Icon, Facebook, Instagram ,Linkedin } from "lucide-react";
import XLogoOfficial from "./XLogo";
import { Hubot_Sans, Fragment_Mono } from "next/font/google";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
})

export default function AppFooter() {
  return (
    <footer className="bg-black text-white py-2 bottom-0 w-full">
      <div className="container mx-auto px-9 border-t border-[#FFFFFF33] mt-4 py-4">
        {/* Primeira linha: H1 e Links lado a lado */}
        <div className="flex justify-between items-start">
          <h1 className="text-3xl">
            <span className="text-yellow-400 font-sans">Subscribe </span>
            to the 
            <span className="text-yellow-400 font-sans"> newsletter</span> for <br/> <span >updates and industry insight</span>
          </h1>
          
          {/* Links agora na mesma linha do H1 */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-2">
              <Link href="/" className="text-gray-400 hover:bg-gray-700 hover:text-white rounded-3xl p-2 w-auto">Home</Link>
              <Link href="/" className="text-gray-400 hover:bg-gray-700 hover:text-white rounded-3xl p-2 w-auto">Products & Services</Link>
              <Link href="/" className="text-gray-400 hover:bg-gray-700 hover:text-white rounded-3xl p-2 w-auto">About</Link>
              <Link href="/" className="text-gray-400 hover:bg-gray-700 hover:text-white rounded-3xl p-2 w-auto">Stock</Link>
            </div>
            <div className="flex flex-row gap-2">
              <Link href="/" className="text-gray-400 hover:bg-gray-700 hover:text-white rounded-3xl p-2 w-auto">Privacy Policy</Link>
              <Link href="/" className="text-gray-400 hover:bg-gray-700 hover:text-white rounded-3xl p-2 w-auto">Terms & Conditions</Link>
              <Link href="/" className="text-gray-400 hover:bg-gray-700 hover:text-white rounded-3xl p-2 w-auto">Contact Us</Link>
            </div>
          </div>
        </div>

        <div>
        </div>
        {/* Checkbox e termos */}
        <div className="">
        <div className="flex flex-row py-4 ">
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" className="text-white"/>
            <label htmlFor="newsletter" className="text-white">
              I have read and agree to the terms and conditions of NYCE International Ltd.
            </label>
          </div>
        </div>
        {/* Formulário */}
        <form>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="p-2 w-60 px-5 border border-gray-500 rounded-2xl"
          />
          <Button className="bg-gray-200 text-black rounded-2xl mx-3 p-2 w-36 hover:bg-gray-700 hover:text-white">
            Subscribe
          </Button>
        </form>
        <div className="flex flex-row justify-end items-center gap-4 pb-6">
          <p className="text-white">Follow us on social media</p>
          <Link href="/" className="bg-zinc-800 p-2 rounded-2xl flex items-center justify-center w-14 h-14">
            <Facebook size={24} color="white" />
          </Link>
          <Link href="/" className="bg-zinc-800 p-2 rounded-2xl flex items-center justify-center w-14 h-14">
            <XLogoOfficial size={24} color="white" />
          </Link>
          <Link href="/" className="bg-zinc-800 p-2 rounded-2xl flex items-center justify-center w-14 h-14">
            <Linkedin size={24} color="white" />
          </Link>
          <Link href="/" className="bg-zinc-800 p-2 rounded-2xl flex items-center justify-center w-14 h-14">
            <Instagram size={24} color="white" />
          </Link>
    </div>
      </div>
    </div>
      <div className="container px-9 mx-auto border-t border-[#FFFFFF33] mt-4 py-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-6xl font-bold">
            <span className="text-yellow-400">N</span>
            <span className="text-white">YCE</span>
          </h1>
        <div className="flex">
          <p className="">© Copyright © 2024 NYCE. All rights reserved</p>
        </div>
      <div>
        <Image src="/certified.svg" 
        alt="Verified"
        width={100}
        height={100}
        />
      </div>
    </div>
  </div>
     
    </footer>
  );
}