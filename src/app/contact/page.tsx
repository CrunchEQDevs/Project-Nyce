'use client';

import React, { useState } from 'react';
import { Hubot_Sans, Fragment_Mono } from "next/font/google";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  weight: "400",
  variable: "--font-fragment-mono",
  subsets: ["latin"],
});

export default function Contact() {
  // Estado para os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    agreeToTerms: false
  });

  // Manipulador para atualizar os estados conforme os campos são alterados
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target instanceof HTMLInputElement && target.type === "checkbox" 
      ? target.checked 
      : target.value;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manipulador para o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Lógica para enviar os dados do formulário
    console.log('Dados do formulário:', formData);
    
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor
    // Exemplo:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   
    //   if (response.ok) {
    //     alert('Mensagem enviada com sucesso!');
    //     // Resetar o formulário
    //     setFormData({
    //       name: '',
    //       company: '',
    //       email: '',
    //       message: '',
    //       agreeToTerms: false
    //     });
    //   } else {
    //     alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    //   }
    // } catch (error) {
    //   console.error('Erro:', error);
    //   alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    // }
  };

  return (
    <div className={`${hubotSans.variable} ${fragmentMono.variable} bg-[#0E0E0E] min-h-screen p-4 sm:p-6`}>
      {/* Header Section - Responsive adjustments */}
      <div className="flex flex-col rounded-full gap-4 sm:gap-6 items-center justify-center max-w-3xl mx-auto py-8 sm:py-16">
        <h1 className="font-mono text-zinc-300 text-3xl sm:text-4xl md:text-5xl text-center">Contact our Team</h1>
        <p className="font-mono text-zinc-400 text-center max-w-2xl text-sm sm:text-base px-2">
          Take advantage of our experience and global network. We would love to hear from you,
          so get in touch today. You can also get in touch directly through the email below.
        </p>
        <p className="text-sm text-white font-mono sm:mt-6">EMAIL</p>
        <Link href="#" className="text-white underline text-sm sm:text-base">
          enquiries@nyceint.com
        </Link>
      </div>
      
      {/* Formulário de contato - Responsive adjustments */}
      <div className="max-w-3xl mx-auto py-8 sm:py-12 px-2 sm:px-0">
        <h1 className="text-yellow-400 font-mono text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-10">Message Us</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
          {/* Campo Nome */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-zinc-900 border-none rounded-md p-3 sm:p-4 text-white font-mono text-sm sm:text-base
                      focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all"
            required
          />
          
          {/* Campo Empresa */}
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="bg-zinc-900 border-none rounded-md p-3 sm:p-4 text-white font-mono text-sm sm:text-base
                      focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all"
          />
          
          {/* Campo Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="bg-zinc-900 border-none rounded-md p-3 sm:p-4 text-white font-mono text-sm sm:text-base
                      focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all"
            required
          />
          
          {/* Campo Mensagem */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            className="bg-zinc-900 border-none rounded-md p-3 sm:p-4 text-white font-mono text-sm sm:text-base
                      focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all resize-none"
            required
          ></textarea>
          
          {/* Checkbox Termos e Condições */}
          <div className="flex items-center gap-2 sm:gap-3 mt-2">
            <input
              type="checkbox"
              id="terms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 bg-zinc-900 border-none accent-yellow-400 focus:ring-0"
              required
            />
            <label htmlFor="terms" className="text-zinc-400 font-mono text-xs sm:text-sm flex items-center">
              I have read and agree to the terms and conditions
            </label>
          </div>
          
          {/* Botão Enviar */}
          <Button
            type="submit"
            className="bg-white text-black hover:bg-zinc-700 hover:text-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-medium mt-2 sm:mt-4 w-full sm:w-auto self-center"
            disabled={!formData.agreeToTerms}
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}