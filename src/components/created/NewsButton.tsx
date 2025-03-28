'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define o tipo para a função de callback
interface ButtonNavProps {
  onCategoryChange?: (category: string) => void;
}

const ButtonNav: React.FC<ButtonNavProps> = ({ onCategoryChange }) => {
  // Definir explicitamente 'All' como o estado inicial
  const [activeButton, setActiveButton] = useState<string>('All');

  const handleClick = (button: string) => {
    setActiveButton(button);
    // Notificar o componente pai sobre a mudança de categoria
    if (onCategoryChange) {
      onCategoryChange(button);
    }
  };

  // Estilos para os botões
  const activeStyle = {
    backgroundColor: 'rgba(253, 211, 3, 0.7)',
    color: '#000000'
  };

  return (
    <div className="flex flex-row gap-6 w-full overflow-x-auto pb-4">
      {/* Botão All explicitamente renderizado */}
      <motion.button
        onClick={() => handleClick('All')}
        className={`px-8 py-3 rounded-xl font-sans text-lg transition-colors ${
          activeButton === 'All'
            ? 'bg-yellow-400 bg-opacity-70 text-black'
            : 'bg-zinc-900 text-white'
        }`}
        style={activeButton === 'All' ? activeStyle : {}}
        whileHover={
          activeButton !== 'All'
            ? {
                backgroundColor: 'rgba(253, 211, 3, 0.7)',
                color: '#000000',
                scale: 1.05
              }
            : {}
        }
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        All
      </motion.button>

      {/* Botão Company */}
      <motion.button
        onClick={() => handleClick('Company')}
        className={`px-8 py-3 rounded-xl font-sans text-lg transition-colors ${
          activeButton === 'Company'
            ? 'bg-yellow-400 bg-opacity-70 text-black'
            : 'bg-zinc-900 text-white'
        }`}
        style={activeButton === 'Company' ? activeStyle : {}}
        whileHover={
          activeButton !== 'Company'
            ? {
                backgroundColor: 'rgba(253, 211, 3, 0.7)',
                color: '#000000',
                scale: 1.05
              }
            : {}
        }
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Company
      </motion.button>

      {/* Botão Projects */}
      <motion.button
        onClick={() => handleClick('Projects')}
        className={`px-8 py-3 rounded-xl font-sans text-lg transition-colors ${
          activeButton === 'Projects'
            ? 'bg-yellow-400 bg-opacity-70 text-black'
            : 'bg-zinc-900 text-white'
        }`}
        style={activeButton === 'Projects' ? activeStyle : {}}
        whileHover={
          activeButton !== 'Projects'
            ? {
                backgroundColor: 'rgba(253, 211, 3, 0.7)',
                color: '#000000',
                scale: 1.05
              }
            : {}
        }
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Projects
      </motion.button>

      {/* Botão Industry */}
      <motion.button
        onClick={() => handleClick('Industry')}
        className={`px-8 py-3 rounded-xl font-sans text-lg transition-colors ${
          activeButton === 'Industry'
            ? 'bg-yellow-400 bg-opacity-70 text-black'
            : 'bg-zinc-900 text-white'
        }`}
        style={activeButton === 'Industry' ? activeStyle : {}}
        whileHover={
          activeButton !== 'Industry'
            ? {
                backgroundColor: 'rgba(253, 211, 3, 0.7)',
                color: '#000000',
                scale: 1.05
              }
            : {}
        }
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Industry
      </motion.button>
    </div>
  );
};

export default ButtonNav;