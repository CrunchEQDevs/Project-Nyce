'use client'
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Hubot_Sans, Fragment_Mono } from "next/font/google";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { getNewsBySlug, getRelatedNews } from '@/lib/newsData';

// Fontes
const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  weight: "400",
  variable: "--font-fragment-mono",
  subsets: ["latin"],
});

export default function NewsDetail() {
  const params = useParams();
  const newsSlug = params.newsInfo as string;
  const [newsItem, setNewsItem] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Buscar a notícia pelo slug usando nossa função compartilhada
    const foundNews = getNewsBySlug(newsSlug);
    if (foundNews) {
      setNewsItem(foundNews);
      // Buscar notícias relacionadas (mesma categoria)
      setRelatedNews(getRelatedNews(newsSlug, 2));
    }
    setLoading(false);
  }, [newsSlug]);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  if (loading) {
    return (
      <div className={`${hubotSans.variable} ${fragmentMono.variable} min-h-screen bg-black text-white flex justify-center items-center`}>
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className={`${hubotSans.variable} ${fragmentMono.variable} min-h-screen bg-black text-white p-8`}>
        <div className="max-w-6xl mx-auto">
          <Link href="/news" className="inline-flex items-center text-white hover:text-gray-300 mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to News
          </Link>
          <h1 className="text-3xl font-bold mb-4">News not found</h1>
          <p className="text-xl">The news article you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${hubotSans.variable} ${fragmentMono.variable} min-h-screen bg-black text-white`}>
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* Imagem principal no topo */}
        <div className="w-full h-[300px] bg-zinc-800 rounded-lg mb-8 overflow-hidden relative">
          {/* Em produção, você usaria a imagem real da notícia */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            {/* Placeholder para a imagem da notícia */}
          </div>
        </div>

        {/* Título da notícia */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 px-4">
          {newsItem.title}
        </h1>

        {/* Data e categoria */}
        <div className="flex flex-wrap items-center gap-4 mb-8 px-4">
          <span className="text-[#FDD303] text-sm font-medium">
            {newsItem.date}
          </span>
          <span className="text-gray-400">Categories: </span>
          <span className="inline-block bg-zinc-800 text-white px-3 py-1 text-sm rounded-md">
            {newsItem.category}
          </span>
        </div>

        {/* Conteúdo da notícia - divido em parágrafos */}
        <div className="prose prose-lg prose-invert max-w-none px-4 mb-12">
          {newsItem.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Notícias relacionadas */}
        {relatedNews.length > 0 && (
          <div className="px-4 mb-12">
            <h2 className="text-2xl font-bold mb-6">Related News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedNews.map((news) => (
                <Link href={`/news/${news.slug}`} key={news.id}>
                  <motion.div 
                    className="bg-zinc-900 rounded-lg p-6 cursor-pointer border-2 border-transparent"
                    whileHover={{ 
                      borderColor: '#FDD303',
                      scale: 1.01,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <p className="text-[#FDD303] text-sm mb-2">{news.date}</p>
                    <h3 className="text-white text-lg font-semibold mb-3">{news.title}</h3>
                    <span className="text-[#FDD303] text-sm">Read more →</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Botão de voltar para a lista de notícias */}
        <div className="px-4 mb-12">
          <Link href="/news">
            <motion.div 
              className="inline-flex items-center text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to News
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}