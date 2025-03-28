'use client'
import { decodeAction } from "next/dist/server/app-render/entry-base";
import { Hubot_Sans, Fragment_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import Team, {TeamMemberData} from "@/components/TeamMembers";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
})

const fragmentMono = Fragment_Mono({
  weight: "400",
  variable: "--font-fragment-mono",
  subsets: ["latin"],
})

// Removendo a função de scrollToSection e usando uma abordagem mais simples

// Dados dos membros da equipe
const teamMembers: TeamMemberData[] = [
  {
    name: "Harmen Brenninkmeijer",
    title: "MANAGING PARTNER",
    bio: "He has been at the forefront of the development of the gaming industry for almost 30 years. He is an experienced entrepreneur and executive and has founded successful technology, distribution and operations-led companies and as well as his own companies, he has driven the international growth of numerous independent companies with products and teams he has believed in.",
    imageUrl: "/harmen.png",
    linkedinUrl: "https://www.linkedin.com/in/hbmeijer/"
  },
  {
    name: "Farzad Peyman",
    title: "CEO",
    bio: "Farzad has 18 years' operational iGaming experience in B2B and B2C across both publicly listed and private companies. He is a leader of significant business change, and regularly advises on product development, marketing, technology, M&A, corporate restructuring, regulation & licensing, compliance and financial control. Ex-CEO and CFO of Matchbook Betting Exchange, Farzad has brought to NYCE a strong community of independent specialist advisors investing in the most promising and sustainable projects across the iGaming, Web3, Metaverse, Blockchain and AI technologies.",
    imageUrl: "/farzad.png",
    linkedinUrl: "https://www.linkedin.com/in/farzad-peyman/"
  },
  {
    name: "Mishja van der Linden",
    title: "Executive Chairman",
    bio: "He has been at the forefront of the development of the gaming industry for almost 30 years. He is an experienced entrepreneur and executive and has founded successful technology, distribution and operations-led companies and as well as his own companies, he has driven the international growth of numerous independent companies with products and teams he has believed in.",
    imageUrl: "/mishja.png",
    linkedinUrl: "https://www.linkedin.com/in/mishjavanderlinden/"
  },
  {
    name: "Ffinlo Martin",
    title: "Executive Chairman",
    bio: "He has been at the forefront of the development of the gaming industry for almost 30 years. He is an experienced entrepreneur and executive and has founded successful technology, distribution and operations-led companies and as well as his own companies, he has driven the international growth of numerous independent companies with products and teams he has believed in.",
    imageUrl: "/ffinlo.png",
    linkedinUrl: "https://www.linkedin.com/in/ffin/"
  },
  {
    name: "Claudio Faccio",
    title: "Executive Chairman",
    bio: "He has been at the forefront of the development of the gaming industry for almost 30 years. He is an experienced entrepreneur and executive and has founded successful technology, distribution and operations-led companies and as well as his own companies, he has driven the international growth of numerous independent companies with products and teams he has believed in.",
    imageUrl: "/claudio.png",
    linkedinUrl: "https://www.linkedin.com/in/claudiofaccio/"
  },
  // Comitê Consultivo
  {
    name: "Jeffrey Katz",
    title: "Executive Chairman",
    bio: "He has been at the forefront of the development of the gaming industry for almost 30 years. He is an experienced entrepreneur and executive and has founded successful technology, distribution and operations-led companies and as well as his own companies, he has driven the international growth of numerous independent companies with products and teams he has believed in.",
    imageUrl: "/jeffrey.png",
    linkedinUrl: "https://www.linkedin.com/in/jeffrkatz/",
    isAdvisory: true
  },
  {
    name: "Onelia Paludi",
    title: "Executive Chairman",
    bio: "He has been at the forefront of the development of the gaming industry for almost 30 years. He is an experienced entrepreneur and executive and has founded successful technology, distribution and operations-led companies and as well as his own companies, he has driven the international growth of numerous independent companies with products and teams he has believed in.",
    imageUrl: "/onelia.png",
    linkedinUrl: "https://www.linkedin.com/in/onelia-paludi-36470194/",
    isAdvisory: true
  },
  {
    name: "Xanthi Chrysanthou",
    title: "Executive Chairman",
    bio: "He has been at the forefront of the development of the gaming industry for almost 30 years. He is an experienced entrepreneur and executive and has founded successful technology, distribution and operations-led companies and as well as his own companies, he has driven the international growth of numerous independent companies with products and teams he has believed in.",
    imageUrl: "/xanthi.png",
    linkedinUrl: "https://www.linkedin.com/in/xanthichrysanthou/",
    isAdvisory: true
  },
  {
    name: "Hansi Asiderano",
    title: "Executive Chairman",
    bio: "He has been at the forefront of the development of the gaming industry for almost 30 years. He is an experienced entrepreneur and executive and has founded successful technology, distribution and operations-led companies and as well as his own companies, he has driven the international growth of numerous independent companies with products and teams he has believed in.",
    imageUrl: "/hansi.png",
    linkedinUrl: "https://www.linkedin.com/in/hansi-asiredano/",
    isAdvisory: true
  },
  {
    name: "Phillip T.T Wong",
    title: "Executive Chairman",
    bio: "He has been at the forefront of the development of the gaming industry for almost 30 years. He is an experienced entrepreneur and executive and has founded successful technology, distribution and operations-led companies and as well as his own companies, he has driven the international growth of numerous independent companies with products and teams he has believed in.",
    imageUrl: "/phillip.png",
    linkedinUrl: "https://www.linkedin.com/in/phillip-t-t-wong-0b0b1b1/",
    isAdvisory: true
  },
  {
    name: "Jose Paternostro",
    title: "Executive Chairman",
    bio: "He has been at the forefront of the development of the gaming industry for almost 30 years. He is an experienced entrepreneur and executive and has founded successful technology, distribution and operations-led companies and as well as his own companies, he has driven the international growth of numerous independent companies with products and teams he has believed in.",
    imageUrl: "/jose.png",
    linkedinUrl: "https://www.linkedin.com/in/jose-paternostro-6118b538/",
    isAdvisory: true
  }
];

export default function About() {
  const partnersId = "partners-section";
  
  return (
    <div className={`${hubotSans.variable} ${fragmentMono.variable} bg-black`}>
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
              onClick={() => {
                document.getElementById(partnersId)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
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
      <div id={partnersId} className="flex flex-col items-center justify-center bg-[#0e0e0e] text-center pt-32 pb-24">
        <div className="w-4/5">
          <p className="font-mono text-white text-sm">NYCE represents a select number of intelligent, success-driven technologies and services that deliver measurable revenue growth and operational efficiency to gaming companies. Via our global network, NYCE accelerates the sales process for the companies we represent, facilitating conversations at only the highest levels.</p>
        </div>
        <div className="flex flex-row w-4/5 justify-between items-start mt-16">
          <div className="w-2/5">
            <p className="text-white text-sm font-sans text-left">We pride ourselves on seeing synergies across our network and capitalizing on them for partners and clients alike.</p>
          </div>
          <div className="h-40 w-px bg-zinc-700"></div>
          <div className="w-2/5">
            <p className="text-white text-sm font-mono text-left"><span className="text-yellow-400">"</span>We're motivated by working with partners and clients to build global success stories.<span className="text-yellow-400">"</span></p>
            <p className="text-white mt-6 text-left">Harmen Brenninkmeijer</p>
            <p className="text-zinc-500 text-xs tracking-wider text-left">MANAGING PARTNER</p>
          </div>
        </div>
        <Team teamMembers={teamMembers} />
      </div>
    </div>
  );
}