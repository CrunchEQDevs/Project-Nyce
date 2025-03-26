'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Hubot_Sans, Fragment_Mono } from "next/font/google";
import Link from 'next/link';

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
})

const fragmentMono = Fragment_Mono({
  weight: "400",
  variable: "--font-fragment-mono",
  subsets: ["latin"],
})

const STVPage = () => {
  // Dados das STV projects
  const stvProjects = [
    {
      id: 1,
      name: "nirmata.games",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.",
      longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh",
      stats: [
        { value: "40+", label: "Statistic 1" }
      ]
    },
    {
      id: 2,
      name: "optimizzr.ai",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.",
      longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh",
      stats: [
        { value: "40+", label: "Statistic 1" }
      ]
    }
  ];

  return (
    <div className={`${hubotSans.variable} ${fragmentMono.variable} min-h-screen bg-black text-white py-10 px-8`}>
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-6xl font-sans font-bold mb-6">STVs</h1>
        <p className="text-lg text-gray-300 mb-2">
          Strategic Technical Ventures are innovation-led projects that explore new technologies and build scalable products.
        </p>
        <p className="text-lg text-gray-300">
          Each venture is a standalone initiative backed by shared expertise and resources, allowing rapid testing, iteration, and growth.
        </p>
      </div>

      {/* STV Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {stvProjects.map((project) => (
          <div key={project.id} className="bg-zinc-900 rounded-lg p-8">
            {/* Project Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-fragment-mono text-yellow-400">{project.name}</h2>
              <Link href="#">
                <button className="bg-white text-black px-4 py-2 rounded-full text-sm">
                  Visit Website
                </button>
              </Link>
            </div>

            {/* Project Description */}
            <div className="text-gray-300 mb-8">
              <p>{project.description}</p>
            </div>

            {/* Long Description */}
            <div className="text-gray-400 text-sm mb-12">
              <p>{project.longDescription}</p>
            </div>

            {/* Statistics */}
            <div className="mb-8">
              {project.stats.map((stat, index) => (
                <div key={index} className="text-center border border-yellow-500 border-opacity-40 inline-block p-4 rounded">
                  <p className="text-4xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Read More Link */}
            <div className="mb-8">
              <Link href="#" className="text-gray-300 flex items-center group">
                <span>Lorem Ipsum Dolor</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Bottom Description */}
            <div className="text-gray-400 text-sm mb-8">
              <p>{project.description}</p>
            </div>

            {/* Bottom Button */}
            <div>
              <Link href="#">
                <button className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-colors">
                  Visit Website
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default STVPage;