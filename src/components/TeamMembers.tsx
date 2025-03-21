// components/TeamMembers.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Definição da interface para os dados de um membro da equipe
export interface TeamMemberData {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string; // Opcional, pois nem todos os membros podem ter LinkedIn
}

// Props para o componente TeamMember (que renderiza um único membro)
interface TeamMemberProps {
  member: TeamMemberData;
}

// Componente para renderizar um único membro da equipe
const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const { name, title, bio, imageUrl, linkedinUrl } = member;
  
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-16">
      {/* Imagem à esquerda */}
      <div className="w-full md:w-2/5">
        <div className="rounded-lg overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={`Photo of ${name}`} 
            width={500} 
            height={600} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Conteúdo à direita */}
      <div className="w-full md:w-3/5 flex flex-col justify-center">
        <h3 className="text-3xl font-mono">{name}</h3>
        <p className="text-sm tracking-wider text-gray-400 mt-2 mb-6">{title}</p>
        
        <p className="text-sm leading-relaxed text-gray-200 mb-8">
          {bio}
        </p>
        
        {linkedinUrl && (
          <div>
            <Link 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path 
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

// Props para o componente Team principal (que renderiza múltiplos membros)
interface TeamProps {
  teamMembers: TeamMemberData[]; // Requerido
  title?: string; // Título opcional
}

// Componente principal da equipe - renderiza múltiplos membros
const Team: React.FC<TeamProps> = ({ teamMembers, title = "The Team" }) => {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl flex justify-start font-sans text-yellow-500 mb-12">{title}</h2>
        
        {teamMembers.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;