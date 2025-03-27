'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function AppHeader() {
  // Track window width to control responsiveness
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check window size and update state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-black w-full py-3 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo section */}
        <div className="flex items-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-yellow-400">N</span>
            <span className="text-white">YCE</span>
          </h1>
        </div>

        {/* Center-aligned navigation for desktop - conditionally rendered */}
        {!isMobile && (
          <div className="flex items-center justify-center space-x-4 overflow-x-auto">
            <Link href={"/"} className=" hover:bg-zinc-700 text-white rounded-full px-5 py-2 text-sm">
              Home
            </Link>
            <Link href={"/products"} className="text-white hover:bg-zinc-800 rounded-full px-5 py-2 text-sm">
              Marketplace
            </Link>
            <Link href={"/stv"} className="text-white hover:bg-zinc-800 rounded-full px-5 py-2 text-sm">
              STVs
            </Link>
            <Link href={"/about"} className="text-white hover:bg-zinc-800 rounded-full px-5 py-2 text-sm">
              Teams
            </Link>
            {/* <Link href={"/stock"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
              Stock
            </Link> */}
            <Link href={"/stock"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
              Investors
            </Link>
            <Link href={"/news"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
              News
            </Link>
            <Link href={"/venture"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
              Venture studio
            </Link>
            <Link href={"/nyceHouse"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
              NYCE House
            </Link>
           
          </div>
        )}

        {/* Right side with contact button (on desktop) or mobile menu toggle (on mobile) */}
        <div>
          {!isMobile ? (
            <Link href={"#"} className="bg-white text-black  hover:bg-gray-700 hover:text-white rounded-full px-5 p-2 text-sm">
              Get in Touch
            </Link>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-white p-1">
                  <Menu size={20} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-black w-[250px] p-0">
                <div className="flex flex-col space-y-2 p-4">
                  <Link href={"/"} className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-4 py-2 text-sm text-center">
                    Home
                  </Link>
                  <Link href={"/products"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
                    Products & Services
                  </Link>
                  <Link href={"#"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
                    NYCE STVs
                  </Link>
                  <Link href={"/about"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
                    Teams
                  </Link>
                  <Link href={"/stock"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
                    Investors
                  </Link>
                  <Link href={"#"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
                    News
                  </Link>
                  <Link href={"/venture"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
                    Venture studio
                  </Link>
                  <Link href={"/nyceHouse"} className="text-white hover:bg-zinc-800 rounded-full px-4 py-2 text-sm text-center">
                    NYCE House
                  </Link>
                  <Link href={"#"} className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 text-sm text-center mt-4">
                    Get in Touch
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </div>
  );
}