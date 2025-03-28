// arquivo: app/news/[newsInfo]/page.tsx
import NewsDetailClient from '../../../components/created/NewsDetailClient';
import { getAllNews } from '@/lib/newsData';

// Esta função é executada no servidor durante o build
export async function generateStaticParams() {
  const allNews = getAllNews();
  
  return allNews.map((news) => ({
    newsInfo: news.slug,
  }));
}

// Componente Server renderizado no servidor
export default function NewsDetailPage(props: any) {
  const { newsInfo } = props.params;
  // Deve renderizar o cliente NewsDetailClient, não ele mesmo!
  return <NewsDetailClient newsSlug={newsInfo} />;
}