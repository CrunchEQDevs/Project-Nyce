'use client'
import { Hubot_Sans, Fragment_Mono } from "next/font/google";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import WaveBackground from "@/components/created/WaveBackground";
import MatrixBackground from "@/components/created/MatrixBackground";
import CircuitryBackground from "@/components/created/CircuitryBackground";
import PulseBackground from "@/components/created/PulseBackground";
import CubicBackground from "@/components/created/CubicBackground";

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
  return (
    <main className={`${hubotSans.variable} ${fragmentMono.variable} bg-black min-h-screen`}>
  {/* Hero Section - center aligned */}
  <div className="flex flex-col items-center justify-center text-center pt-32 pb-24">
        <h1 className="text-white text-6xl font-sans mb-8">
          <span className="text-yellow-400">Your Global Sales &</span> Strategic <br />Advisory Partner
        </h1>
        <div className="flex flex-col items-center max-w-3xl">
          <p className="font-mono text-white mb-2">
            Gain access to the global gaming industry at the highest levels
          </p>
          <p className="font-mono text-white mb-10">
            Talk to us if you're interested in any of the products below, or looking for something not listed.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium">
              Get in Touch
            </Link>
            <Link
              href="#"
              className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full px-8 py-3 flex items-center justify-center space-x-2 transition-colors">
              <span>Learn More</span>
              <ArrowDown size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* First Content Section - iGaming & Sports Betting */}
      <div className="flex w-full max-w-6xl mx-auto px-4 py-20">
        {/* Left column with the numbered list */}
        <div className="w-1/2 relative flex items-center justify-center">
          {/* The wave background container - positioned absolutely */}
          <div className="absolute inset-0 w-full h-full">
            <CubicBackground />
          </div>
          
          {/* List content perfectly centered on top of the waves */}
          <div className="relative z-10 space-y-5 ml-4">
            <p className="text-white font-[var(--font-fragment-mono)]"><span className="text-gray-400">1 </span>Complete Turnkey/White-label platforms</p>
            <p className="text-white font-[var(--font-fragment-mono)]"><span className="text-gray-400">2 </span>Premium Game Content & Aggregator</p>
            <p className="text-white font-[var(--font-fragment-mono)]"><span className="text-gray-400">3 </span>Engaging Sports Betting Experiences</p>
            <p className="text-white font-[var(--font-fragment-mono)]"><span className="text-gray-400">4 </span>Live-dealer & Esports</p>
          </div>
        </div>
        
        {/* Right column with title and content */}
        <div className="w-1/2 pl-12">
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
            <Link href="#" className="text-white inline-flex items-center font-mono border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors">
              Explore our partners
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

   {/* Second Content Section - Lottery (Reversed) */}
<div className=" border-zinc-900 pt-12">
  <div className="flex flex-row-reverse w-full max-w-6xl mx-auto px-4 py-20">
    {/* Right column with the numbered list */}
    <div className="w-1/2 relative flex items-center justify-center">
      {/* The wave background container - positioned absolutely */}
      <div className="absolute inset-0 w-full h-full">
        <PulseBackground />
      </div>
      
      {/* List content perfectly centered on top of the waves */}
      <div className="relative z-10 space-y-5 ml-4">
        <p className="text-white font-mono"><span className="text-gray-400">1 </span>All-in-one Lottery Platform</p>
        <p className="text-white font-mono"><span className="text-gray-400">2 </span>Premium Lottery Hardware</p>
        <p className="text-white font-mono"><span className="text-gray-400">3 </span>Prize Cover</p>
        <p className="text-white font-mono"><span className="text-gray-400">4 </span>Lottery Game Content</p>
      </div>
    </div>
    
    {/* Left column with title and content */}
    <div className="w-1/2 pr-12">
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
        <Link href="#" className="text-white inline-flex items-center font-mono border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors">
          Explore our partners
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  </div>
</div>

     {/* Third Content Section - Land Based Casinos (Reversed) */}
<div className=" border-zinc-900 pt-12">
  <div className="flex flex-row-reverse w-full max-w-6xl mx-auto px-4 py-20">
    {/* Right column with text (now on the right) */}
    <div className="w-1/2 pl-16">
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
        <Link href="#" className="text-white inline-flex items-center font-mono border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors">
          Explore our partners
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
    
    {/* Left column with casino features (now on the left) */}
    <div className="w-1/2 pr-12 flex flex-col justify-center">
      <div className="grid gap-4">
        <div className="rounded-full border border-gray-700 py-3 px-6 text-white font-mono">
          Seamless Casino Management
        </div>
        <div className="rounded-full border border-gray-700 py-3 px-6 text-white font-mono">
          Unique Table Games & Systems
        </div>
        <div className="rounded-full border border-gray-700 py-3 px-6 text-white font-mono">
          Remote Slot Machine Play
        </div>
        <div className="rounded-full border border-gray-700 py-3 px-6 text-white font-mono">
          Patented Hygiene Solutions
        </div>
        <div className="rounded-full border border-gray-700 py-3 px-6 text-white font-mono">
          Cashless Casino Solutions
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Fourth Content Section - Acquisition/Retention (Reversed) */}
      <div className=" border-zinc-900 pt-12">
        <div className="flex flex-row-reverse w-full max-w-6xl mx-auto px-4 py-20">
          {/* Right column with the numbered list */}
          <div className="w-1/2 relative flex items-center justify-center">
            {/* The wave background container - positioned absolutely */}
            <div className="absolute inset-0 w-full h-full">
              <CircuitryBackground />
            </div>
            
            {/* List content perfectly centered on top of the waves */}
            <div className="relative z-10 space-y-5 ml-4">
              <p className="text-white font-mono"><span className="text-gray-400">1 </span>Pioneering Retention System</p>
              <p className="text-white font-mono"><span className="text-gray-400">2 </span>MMA League Sponsorship</p>
              <p className="text-white font-mono"><span className="text-gray-400">3 </span>Personalized Betting Engagement</p>
            </div>
          </div>
          
          {/* Left column with title and content */}
          <div className="w-1/2 pr-12">
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
              <Link href="#" className="text-white inline-flex items-center font-mono border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors">
                Explore our partners
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

{/* Fifth Content Section - Enterprise Systems & Technology */}
<div className=" border-zinc-900 pt-12">
  <div className="flex w-full max-w-6xl mx-auto px-4 py-20">
    {/* Left column with the numbered list */}
    <div className="w-1/2 relative flex items-center justify-center">
      {/* The wave background container - positioned absolutely */}
      <div className="absolute inset-0 w-full h-full">
        <MatrixBackground />
      </div>
      
      {/* List content perfectly centered on top of the waves */}
      <div className="relative z-10 space-y-5 ml-4">
        <p className="text-white font-[var(--font-fragment-mono)]"><span className="text-gray-400">1 </span>Brand new Login Solution</p>
        <p className="text-white font-[var(--font-fragment-mono)]"><span className="text-gray-400">2 </span>Custom Software Development</p>
        <p className="text-white font-[var(--font-fragment-mono)]"><span className="text-gray-400">4 </span>Cyber Security Risk Analysis</p>
        <p className="text-white font-[var(--font-fragment-mono)]"><span className="text-gray-400">6 </span>Affiliate Management System</p>
      </div>
    </div>
    
    {/* Right column with title and content */}
    <div className="w-1/2 pl-12">
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
        <Link href="#" className="text-white inline-flex items-center font-[var(--font-fragment-mono)] border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors">
          Explore our partners
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  </div>
</div>
    </main>
  );
}