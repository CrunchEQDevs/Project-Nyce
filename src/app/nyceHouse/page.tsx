import Link from 'next/link';
import { Hubot_Sans, Fragment_Mono } from 'next/font/google';
import Image from 'next/image';

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  weight: "400",
  variable: "--font-fragment-mono",
  subsets: ["latin"],
});

export default function NyceHousePage() {
  return (
    <div className={`${hubotSans.variable} ${fragmentMono.variable} min-h-screen bg-[#0E0E0E]`}>
      {/* Primeira seção - Header */}
      <div className="bg-[#0E0E0E] flex flex-col rounded-full gap-6 items-center justify-center py-16">
        <h1 className="text-white text-7xl font-sans">Nyce House</h1>
        <p className="text-white font-mono">An Exclusive Gaming Members Club for Executives & C-Level Leaders</p>
        <Link href="#" className="bg-zinc-700 text-white hover:bg-stone-300 hover:text-zinc-950 rounded-full px-5 p-2 text-sm">
          Get in Touch
        </Link>
      </div>
      
      {/* Segunda seção - Welcome */}
      <div className="flex flex-col gap-6 items-center justify-center py-20 w-full">
        <h1 className="text-white font-mono text-3xl">
          Welcome to <span className="text-yellow-400 font-sans text-3xl">NYCE HOUSE</span>
        </h1>
        <p className="text-white max-w-4xl px-4 text-center">
          NYCE House is a private digital retreat for the elite minds of business and tech. This exclusive members-only club brings together executive and C-level professionals who share a passion for gaming, strategy, and community. Housed on Slack, NYCE House is a virtual lounge where innovation meets play, and high-level leaders connect over shared interests beyond the boardroom. Whether you're winding down after a high-stakes meeting or looking to sharpen your decision-making skills through competitive gameplay, NYCE House is where it happens.
        </p>
      </div>
      
      {/* Terceira seção - Features */}
      <div className="flex flex-col gap-8 justify-center py-20 w-full px-8 md:px-16 lg:px-24 xl:px-36 max-w-7xl mx-auto">
        <h1 className="text-yellow-400  font-sans text-4xl w-full">
          What Makes NYCE House Unique?
        </h1>
        
        <ul className="space-y-4 w-full">
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-xl">• Curated Gaming Experiences</h3>
            <p className="text-white text-sm font-mono ml-6">
              Engage in carefully selected strategy, cooperative, and competitive games designed to challenge, entertain, and spark collaboration.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-xl">• Slack-Based Access</h3>
            <p className="text-white text-sm font-mono ml-6">
              Our club lives on Slack for seamless integration into your day-to-day digital workspace. Access exclusive channels, events, and tournaments — all without leaving your favorite app.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-xl">• Executive-Only Network</h3>
            <p className="text-white text-sm font-mono ml-6">
              Every member is verified. Join a circle of founders, CEOs, executives, and C-level leaders who value both sharp minds and strategic fun.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-xl">• Premium Events & Tournaments</h3>
            <p className="text-white text-sm font-mono ml-6">
              Participate in regularly hosted game nights, executive league tournaments, themed challenges, and limited-time events.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-xl">• Behind-the-Scenes Access</h3>
            <p className="text-white text-sm font-mono ml-6">
              Get early access to indie games, beta tests, and direct Q&As with game developers, investors, and industry insiders.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-xl">• Private Club Perks</h3>
            <p className="text-white text-sm font-mono ml-6">
              Members enjoy invitations to IRL meetups, digital rewards, member spotlights, exclusive content, and more.
            </p>
          </li>
        </ul>
        
        {/* Quarta seção - Como participar */}
        <h1 className="text-yellow-400 font-sans text-4xl w-full mt-16">
          How to Join NYCE House
        </h1>
        
        <p className="text-white font-mono">
          NYCE House is invite-only, but we are always open to welcoming driven and passionate executives into our fold. Here's how you can get in:
        </p>
        
        <ol className="space-y-5 w-full pl-6">
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-xl">1. Get Invited</h3>
            <p className="text-white text-sm font-mono ml-6">
              Current members can extend a limited number of invitations each season. Ask around your network — or better yet, impress them in the next game.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-xl">2. Apply for Consideration</h3>
            <p className="text-white text-sm font-mono ml-6">
              Interested in joining? Submit a short application form. Our team reviews each submission to ensure a good fit with the community values.
            </p>
          </li>
          
          <li className="flex flex-col gap-1">
            <h3 className="text-white font-sans text-xl">3. Prove Your Game</h3>
            <p className="text-white text-sm font-mono ml-6">
              Some invitations are unlocked through participation in external gaming events or competitions hosted by NYCE partners.
            </p>
          </li>
        </ol>
      </div>
      
      {/* Quinta seção - Galeria e Call to Action */}
      <div className="flex flex-col gap-12 items-center justify-center py-20 w-full px-8 md:px-16 lg:px-24 xl:px-36">
        {/* Galeria de imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          <div className="aspect-square overflow-hidden">
           <Image 
             src="/game-image-1.jpg"
             alt="Game Image 1"
             width={300}
             height={300}
             className='object-cover w-full h-full'
             >

           </Image>
          </div>
          
          <div className="aspect-square overflow-hidden">
          <Image 
             src="/game-image-1.jpg"
             alt="Game Image 1"
             width={300}
             height={300}
             className='object-cover w-full h-full'
             >

           </Image>
          </div>
          
          <div className="aspect-square overflow-hidden">
          <Image 
             src="/game-image-1.jpg"
             alt="Game Image 1"
             width={300}
             height={300}
             className='object-cover w-full h-full'
             >

           </Image>
          </div>
          
          <div className="aspect-square overflow-hidden">
          <Image 
             src="/game-image-1.jpg"
             alt="Game Image 1"
             width={300}
             height={300}
             className='object-cover w-full h-full'
             >

           </Image>
          </div>
        </div>
        
        {/* Texto inspirador */}
        <div className="w-full max-w-7xl p-8 text-center">
          <p className="text-white font-mono text-lg">
            NYCE House is more than just a club — it's a movement. A community built on trust, intelligence, camaraderie, and fun. Step into a new kind of network where games are the medium, and leadership is the language.
          </p>
          <p className="text-white font-mono mt-6">
            Because even the sharpest minds need a place to play.
          </p>
        </div>
        
        {/* Botão CTA */}
        <div className="mt-6">
          <Link href="#" className="bg-white text-zinc-900 hover:bg-yellow-400 rounded-full px-4 py-3 font-sans text-lg font-medium">
            Apply to Join
          </Link>
        </div>
      </div>
    </div>
  );
}