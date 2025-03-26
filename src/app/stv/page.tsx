'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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

// Dados simulados dos STVs
const stvs = [
  {
    id: 1,
    name: "nirmata.games",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh",
    secondaryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh",
    tertiaryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh",
    statValue: "40+",
    statLabel: "Statistic 1",
    websiteUrl: "#"
  },
  {
    id: 2,
    name: "optimizzr.ai",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh",
    secondaryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh",
    tertiaryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh",
    statValue: "40+",
    statLabel: "Statistic 1",
    websiteUrl: "#"
  }
];

export default function STVsPage() {
  return (
    <div className={`${hubotSans.variable} ${fragmentMono.variable} min-h-screen bg-black text-white`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-sans font-bold mb-8">STVs</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Strategic Technical Ventures are innovation-led projects that explore new technologies and build scalable products.
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            Each venture is a standalone initiative backed by shared expertise and resources, allowing rapid testing, iteration, and growth.
          </p>
        </div>
        
        {/* STV Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stvs.map((stv) => (
            <div key={stv.id} className="flex border-1 p-4 rounded-2xl border-zinc-700 flex-col">
              {/* STV Name and Button */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-yellow-400 text-2xl font-fragment-mono">{stv.name}</h2>
                <a 
                  href={stv.websiteUrl} 
                  className="bg-white text-black rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition-colors"
                >
                  Visit Website
                </a>
              </div>
              
              {/* Description 1 */}
              <div className="text-zinc-300 text-sm mb-10">
                <p>{stv.description}</p>
              </div>
              
              {/* Description 2 */}
              <div className="text-zinc-300 text-sm mb-10">
                <p>{stv.secondaryDescription}</p>
              </div>
              
              {/* Statistics */}
              <div className="relative mb-6 w-fit mx-auto">
                {/* Stat Container with Yellow Corners */}
                <div className="relative inline-block">
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-yellow-400"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-yellow-400"></div>
                  <div className="py-6 px-12 text-center">
                    <p className="text-5xl font-bold mb-1">{stv.statValue}</p>
                    <p className="text-gray-400 text-sm">{stv.statLabel}</p>
                  </div>
                </div>
              </div>
              
              {/* Link with Arrow */}
              <div className="text-center mb-10">
                <Link href="#" className="inline-flex items-center text-white hover:text-yellow-400 transition-colors group">
                  <span className="border-b border-white group-hover:border-yellow-400 pb-1">Lorem Ipsum Dolor</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Description 3 */}
              <div className="text-zinc-300 text-sm mb-10">
                <p>{stv.tertiaryDescription}</p>
              </div>
              
              {/* Bottom Button */}
              <div className="mt-auto text-center">
                <a 
                  href={stv.websiteUrl} 
                  className="inline-block border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}