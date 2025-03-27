'use client'
import { Hubot_Sans, Fragment_Mono } from "next/font/google";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import WaveBackground from "@/components/created/WaveBackground";
import MatrixBackground from "@/components/created/MatrixBackground";
import CircuitryBackground from "@/components/created/CircuitryBackground";
import PulseBackground from "@/components/created/PulseBackground";
import CubicBackground from "@/components/created/CubicBackground";
import Link from "next/link";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fragment-mono",
});

export default function Home() {
  // Create refs for each section we want to scroll to
  const iGamingRef = useRef(null);
  const lotteryRef = useRef(null);
  const casinosRef = useRef(null);
  const acquisitionRef = useRef(null);
  const enterpriseRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Animation variants for repeated elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerListItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className={`${hubotSans.variable} ${fragmentMono.variable} bg-black min-h-screen`}>
      {/* Hero Section - center aligned */}
      <div className="flex flex-col items-center justify-center text-center pt-32 pb-24">
        <motion.h1 
          className="text-white text-6xl font-sans mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400">Your Global Sales &</span> Strategic <br />Advisory Partner
        </motion.h1>
        <motion.div 
          className="flex flex-col items-center max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-white mb-2">
            Gain access to the global gaming industry at the highest levels
          </p>
          <p className="font-mono text-white mb-10">
            Talk to us if you're interested in any of the products below, or looking for something not listed.
          </p>
          <div className="flex space-x-4">
            <motion.a 
              href="#"
              className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get in Touch
            </motion.a>
            <motion.button
              onClick={() => scrollToSection(iGamingRef)}
              className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full px-8 py-3 flex items-center justify-center space-x-2 transition-colors"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#4B5563" // Slightly lighter gray on hover
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>Learn More</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <ArrowDown size={18} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>

     {/* <div className="min-h-screen bg-black flex items-center justify-center">
      <meta httpEquiv="refresh" content="0;url=/marketplace-categories" />
    </div> */}
      {/* First Content Section - iGaming & Sports Betting */}
      <div ref={iGamingRef} className="flex w-full max-w-6xl mx-auto px-4 py-20 scroll-mt-20">
        {/* Left column with the numbered list */}
        <div className="w-1/2 relative flex items-center justify-center">
          {/* The wave background container - positioned absolutely */}
          <div className="absolute inset-0 w-full h-full">
            <CubicBackground />
          </div>
          
          {/* List content perfectly centered on top of the waves */}
          <motion.div 
            className="relative z-10 space-y-5 ml-4"
            variants={staggerListItems}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p variants={listItem} className="text-white font-[var(--font-fragment-mono)]">
              <span className="text-gray-400">1 </span>Complete Turnkey/White-label platforms
            </motion.p>
            <motion.p variants={listItem} className="text-white font-[var(--font-fragment-mono)]">
              <span className="text-gray-400">2 </span>Premium Game Content & Aggregator
            </motion.p>
            <motion.p variants={listItem} className="text-white font-[var(--font-fragment-mono)]">
              <span className="text-gray-400">3 </span>Engaging Sports Betting Experiences
            </motion.p>
            <motion.p variants={listItem} className="text-white font-[var(--font-fragment-mono)]">
              <span className="text-gray-400">4 </span>Live-dealer & Esports
            </motion.p>
          </motion.div>
        </div>
        
        {/* Right column with title and content */}
        <motion.div 
          className="w-1/2 pl-12"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-white uppercase font-mono tracking-wide mb-2">
            iGaming & Sports Betting
          </p>
          <h2 className="text-white text-7xl font-sans leading-tight mb-6">
            <span className="text-yellow-400">iGaming</span><br />
            & Sports Betting.
          </h2>
          <div className="max-w-xl">
            <p className="text-white mb-8 leading-relaxed">
              Unlock the full potential of iGaming and Sports Betting with NYCE.
              NYCE's partners make us the one-stop-shop for all of your iGaming
              needs - we have solutions to grow your business no matter if you're
              just starting out, or already have an established brand. No matter if it's
              platforms, game content, customer acquisition, retention, payments,
              or more - NYCE have you covered.
            </p>
            <motion.a 
              href="/products&services" 
              className="text-white inline-flex items-center font-mono border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
              whileHover={{ 
                x: 5,
                color: "#FBBF24", // Yellow hover effect
                borderColor: "#FBBF24"
              }}
            >
              Explore our partners
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight size={16} className="ml-2" />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Second Content Section - Lottery (Reversed) */}
      <div ref={lotteryRef} className="border-zinc-900 pt-12 scroll-mt-20">
        <div className="flex flex-row-reverse w-full max-w-6xl mx-auto px-4 py-20">
          {/* Right column with the numbered list */}
          <div className="w-1/2 relative flex items-center justify-center">
            {/* The background container - positioned absolutely */}
            <div className="absolute inset-0 w-full h-full">
              <PulseBackground />
            </div>
            
            {/* List content perfectly centered on top of the background */}
            <motion.div 
              className="relative z-10 space-y-5 ml-4"
              variants={staggerListItems}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p variants={listItem} className="text-white font-mono">
                <span className="text-gray-400">1 </span>All-in-one Lottery Platform
              </motion.p>
              <motion.p variants={listItem} className="text-white font-mono">
                <span className="text-gray-400">2 </span>Premium Lottery Hardware
              </motion.p>
              <motion.p variants={listItem} className="text-white font-mono">
                <span className="text-gray-400">3 </span>Prize Cover
              </motion.p>
              <motion.p variants={listItem} className="text-white font-mono">
                <span className="text-gray-400">4 </span>Lottery Game Content
              </motion.p>
            </motion.div>
          </div>
          
          {/* Left column with title and content */}
          <motion.div 
            className="w-1/2 pr-12"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-white uppercase font-mono tracking-wide mb-2">
              LOTTERY LIKE NEVER BEFORE
            </p>
            <h2 className="text-white text-7xl font-sans leading-tight mb-6">
              <span className="text-yellow-400">Lottery</span><span className="text-white">.</span>
            </h2>
            <div className="max-w-xl">
              <p className="text-white mb-8 leading-relaxed">
                Elevate your lottery business with NYCE. Our partners provide
                tailored lottery platforms, engaging game content, and seamless
                payment solutions. Whether starting out or enhancing an existing
                venture, NYCE has you covered for
                success at any scale.
              </p>
              <motion.a 
                href="/products&services" 
                className="text-white inline-flex items-center font-mono border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
                whileHover={{ 
                  x: 5,
                  color: "#FBBF24", 
                  borderColor: "#FBBF24"
                }}
              >
                Explore our partners
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Third Content Section - Land Based Casinos */}
      <div ref={casinosRef} className="border-zinc-900 pt-12 scroll-mt-20">
        <div className="flex w-full max-w-6xl mx-auto px-4 py-20">
          {/* Left column with casino features */}
          <motion.div 
            className="w-1/2 pr-12 flex flex-col justify-center"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid gap-4">
              <motion.div 
                className="rounded-full border border-gray-700 py-3 px-6 text-white font-mono"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Seamless Casino Management
              </motion.div>
              <motion.div 
                className="rounded-full border border-gray-700 py-3 px-6 text-white font-mono"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Unique Table Games & Systems
              </motion.div>
              <motion.div 
                className="rounded-full border border-gray-700 py-3 px-6 text-white font-mono"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Remote Slot Machine Play
              </motion.div>
              <motion.div 
                className="rounded-full border border-gray-700 py-3 px-6 text-white font-mono"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Patented Hygiene Solutions
              </motion.div>
              <motion.div 
                className="rounded-full border border-gray-700 py-3 px-6 text-white font-mono"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Cashless Casino Solutions
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column with title and content */}
          <motion.div 
            className="w-1/2 pl-16"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-white uppercase font-mono tracking-wide mb-2">
              YOUR GO TO CASINO SOLUTION
            </p>
            <h2 className="text-white text-7xl font-sans leading-tight mb-6">
              <span className="text-yellow-400">Land Based</span><br />
              Casinos.
            </h2>
            <div className="max-w-xl">
              <p className="text-white mb-8 leading-relaxed">
                Upgrade your casino with NYCE's wide range of industry-
                leading solutions. From casino management systems, to
                cashless payments, to new revenue streams, our partners
                cater to every aspect of your land-based operation.
              </p>
              <motion.a 
                href="/products&services" 
                className="text-white inline-flex items-center font-mono border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
                whileHover={{ 
                  x: 5,
                  color: "#FBBF24", 
                  borderColor: "#FBBF24"
                }}
              >
                Explore our partners
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fourth Content Section - Acquisition/Retention */}
      <div ref={acquisitionRef} className="border-zinc-900 pt-12 scroll-mt-20">
        <div className="flex flex-row-reverse w-full max-w-6xl mx-auto px-4 py-20">
          {/* Right column with the numbered list */}
          <div className="w-1/2 relative flex items-center justify-center">
            {/* The background container - positioned absolutely */}
            <div className="absolute inset-0 w-full h-full">
              <CircuitryBackground />
            </div>
            
            {/* List content perfectly centered on top of the background */}
            <motion.div 
              className="relative z-10 space-y-5 ml-4"
              variants={staggerListItems}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p variants={listItem} className="text-white font-mono">
                <span className="text-gray-400">1 </span>Pioneering Retention System
              </motion.p>
              <motion.p variants={listItem} className="text-white font-mono">
                <span className="text-gray-400">2 </span>MMA League Sponsorship
              </motion.p>
              <motion.p variants={listItem} className="text-white font-mono">
                <span className="text-gray-400">3 </span>Personalized Betting Engagement
              </motion.p>
            </motion.div>
          </div>
          
          {/* Left column with title and content */}
          <motion.div 
            className="w-1/2 pr-12"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-white uppercase font-mono tracking-wide mb-2">
              ACQUIRE & RETAIN BETTER
            </p>
            <h2 className="text-white text-7xl font-sans leading-tight mb-6">
              <span className="text-yellow-400">Aquisition /</span><br />
              Retention.
            </h2>
            <div className="max-w-xl">
              <p className="text-white mb-8 leading-relaxed">
                NYCE optimizes customer acquisition through targeted advertising,
                sponsorship opportunities, and strategic partnerships, resulting in
                higher lifetime values for sportsbook operators. Simultaneously, our
                powerful gamification and retention system ensures consistent
                customer engagement, satisfaction, and loyalty, contributing to
                sustained business success.
              </p>
              <motion.a 
                href="/products&services" 
                className="text-white inline-flex items-center font-mono border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
                whileHover={{ 
                  x: 5,
                  color: "#FBBF24", 
                  borderColor: "#FBBF24"
                }}
              >
                Explore our partners
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fifth Content Section - Enterprise Systems & Technology */}
      <div ref={enterpriseRef} className="border-zinc-900 pt-12 scroll-mt-20">
        <div className="flex w-full max-w-6xl mx-auto px-4 py-20">
          {/* Left column with the numbered list */}
          <div className="w-1/2 relative flex items-center justify-center">
            {/* The background container - positioned absolutely */}
            <div className="absolute inset-0 w-full h-full">
              <MatrixBackground />
            </div>
            
            {/* List content perfectly centered on top of the background */}
            <motion.div 
              className="relative z-10 space-y-5 ml-4"
              variants={staggerListItems}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p variants={listItem} className="text-white font-[var(--font-fragment-mono)]">
                <span className="text-gray-400">1 </span>Brand new Login Solution
              </motion.p>
              <motion.p variants={listItem} className="text-white font-[var(--font-fragment-mono)]">
                <span className="text-gray-400">2 </span>Custom Software Development
              </motion.p>
              <motion.p variants={listItem} className="text-white font-[var(--font-fragment-mono)]">
                <span className="text-gray-400">4 </span>Cyber Security Risk Analysis
              </motion.p>
              <motion.p variants={listItem} className="text-white font-[var(--font-fragment-mono)]">
                <span className="text-gray-400">6 </span>Affiliate Management System
              </motion.p>
            </motion.div>
          </div>
          
          {/* Right column with title and content */}
          <motion.div 
            className="w-1/2 pl-12"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-white uppercase font-[var(--font-fragment-mono)] tracking-wide mb-2">
              STREAMLINE YOUR SYSTEMS
            </p>
            <h2 className="text-white text-7xl font-sans leading-tight mb-6">
              <span className="text-yellow-400">Enterprise</span><br />
              Systems<br />
              & Technology.
            </h2>
            <div className="max-w-xl">
              <p className="text-white mb-8 leading-relaxed">
                NYCE has partnered with critical enterprise systems and technology
                solutions to improve operations. From software development, to
                cybersecurity assessments, to affiliate network management and
                beyond, NYCE empowers businesses with the technology required
                for optimal performance, growth, and sustainability.
              </p>
              <motion.a 
                href="/products&services" 
                className="text-white inline-flex items-center font-[var(--font-fragment-mono)] border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
                whileHover={{ 
                  x: 5,
                  color: "#FBBF24", 
                  borderColor: "#FBBF24"
                }}
              >
                Explore our partners
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer or additional sections would go here */}
    </main>
  );
}