// /lib/newsData.js

// Dados de exemplo para notícias
const newsData = [
  {
    id: 1,
    date: "10 Mar 2025",
    title: "NYCE Announces Global Gaming Partnership",
    excerpt: "NYCE partners with major gaming providers to expand global reach.",
    content: `NYCE is proud to announce a new global partnership with several top-tier gaming providers, expanding our reach to over 25 new markets worldwide.

    This strategic alliance will see NYCE integrating with platform providers across Europe, Latin America, and Asia, allowing for seamless access to our product suite for operators in these regions.

    "This partnership represents a significant milestone in our global expansion strategy," said the CEO of NYCE. "By joining forces with established platform providers, we're able to deliver our innovative solutions to operators in key regulated markets without the typical integration hurdles."

    The initial phase will focus on Europe, with rollouts in Latin America and Asia planned for later this year. Platform providers participating in this partnership will gain access to NYCE's full product portfolio, including turnkey solutions, data analytics tools, and payment processing systems.`,
    category: "Company",
    slug: "nyce-announces-global-gaming-partnership",
    imageUrl: "/news/partnership.jpg"
  },
  {
    id: 2,
    date: "5 Mar 2025",
    title: "New Investment Round Secures $50M for NYCE Expansion",
    excerpt: "NYCE secures substantial funding to accelerate growth and develop new technologies.",
    content: `NYCE has successfully closed a $50 million Series B funding round led by prominent venture capital firms specializing in gaming and fintech.

    The investment will accelerate NYCE's growth strategy, allowing for expansion of its development team and enhancement of its technology infrastructure. A significant portion of the funding will be directed toward advancing NYCE's data analytics capabilities and developing new AI-powered solutions for the gaming industry.

    "This investment validates our vision and the progress we've made in revolutionizing the gaming sector," said NYCE's CFO. "The additional capital will enable us to scale our operations more rapidly and deliver even more innovative solutions to our partners."

    The funding round was oversubscribed, demonstrating strong investor confidence in NYCE's business model and future prospects. As part of the investment, two representatives from the lead investors will join NYCE's board of directors, bringing valuable expertise in scaling technology companies.`,
    category: "Company",
    slug: "new-investment-round-secures-50m-for-nyce-expansion",
    imageUrl: "/news/investment.jpg"
  },
  {
    id: 3,
    date: "28 Feb 2025",
    title: "NYCE Launches Advanced Fraud Prevention System",
    excerpt: "New AI-powered system enhances security and reduces fraud for online gaming platforms.",
    content: `NYCE is excited to announce the launch of its state-of-the-art fraud prevention system, designed specifically for the unique challenges faced by online gaming operators.

    The system, which leverages advanced machine learning algorithms and behavioral analytics, can identify suspicious activity in real-time, significantly reducing the risk of fraud while minimizing false positives that might impact legitimate users.

    "Our new fraud prevention system represents a major advancement in gaming security," explained NYCE's Head of Security. "By analyzing thousands of data points in real-time, we can detect patterns that would be impossible to identify manually, all while maintaining a seamless experience for legitimate players."

    Early adopters of the system have reported a 60% reduction in fraudulent transactions and a 40% decrease in chargebacks, demonstrating the effectiveness of NYCE's approach. The system has been designed to be fully compliant with data protection regulations in all major jurisdictions.`,
    category: "Products",
    slug: "nyce-launches-advanced-fraud-prevention-system",
    imageUrl: "/news/security.jpg"
  },
  {
    id: 4,
    date: "15 Feb 2025",
    title: "NYCE Technology Showcased at Global Gaming Expo",
    excerpt: "NYCE products receive positive industry feedback at major gaming conference.",
    content: `NYCE made a significant impact at this year's Global Gaming Expo, showcasing its latest technological innovations to industry leaders and potential partners.

    The NYCE booth featured live demonstrations of its newest products, including the enhanced data analytics platform and the recently launched payment processing solution. Attendees showed particular interest in NYCE's turnkey platform solution, which allows operators to launch fully-featured gaming sites within weeks rather than months.

    "The response to our showcase exceeded our expectations," said NYCE's Marketing Director. "We had meaningful conversations with dozens of potential partners and received valuable feedback that will help shape our product roadmap."

    The expo, which attracts thousands of gaming industry professionals from around the world, provided an ideal platform for NYCE to demonstrate its commitment to innovation and customer-focused solutions. Several partnership discussions initiated at the event are already progressing to the contract stage.`,
    category: "Industry",
    slug: "nyce-technology-showcased-at-global-gaming-expo",
    imageUrl: "/news/expo.jpg"
  },
  {
    id: 5,
    date: "7 Feb 2025",
    title: "NYCE Partners with Leading Payment Processor",
    excerpt: "New partnership enhances payment options and improves transaction efficiency.",
    content: `NYCE has formed a strategic partnership with a leading global payment processor to enhance its payment solutions offering.

    The collaboration will enable NYCE's platform to support over 100 payment methods across more than 60 countries, significantly expanding the options available to operators using NYCE's services. The integration also includes advanced anti-fraud measures and improved transaction processing speeds.

    "Payment processing is a critical component of the gaming experience," noted NYCE's Partnerships Director. "This collaboration allows us to offer one of the most comprehensive and secure payment solutions in the industry, which directly translates to better conversion rates for our partners."

    The enhanced payment system is already being rolled out to existing clients and will be available to all new partners starting next month. Initial data shows a 15% improvement in deposit success rates and a significant reduction in processing times.`,
    category: "Products",
    slug: "nyce-partners-with-leading-payment-processor",
    imageUrl: "/news/payment.jpg"
  },
  {
    id: 6,
    date: "25 Jan 2025",
    title: "NYCE Announces Compliance Solution for New Regulations",
    excerpt: "New tool helps operators navigate complex regulatory requirements across multiple jurisdictions.",
    content: `In response to evolving regulatory landscapes, NYCE has unveiled a comprehensive compliance solution designed to help gaming operators navigate complex requirements across multiple jurisdictions.

    The new tool provides real-time updates on regulatory changes, automated compliance checks, and customizable reporting functions to ensure operators remain compliant with local laws. The system covers over 30 regulated markets and is continuously updated as new regulations emerge.

    "Compliance is one of the biggest challenges facing gaming operators today," said NYCE's Compliance Officer. "Our solution simplifies this process, reducing the resource burden while improving accuracy and reducing regulatory risk."

    The compliance solution integrates seamlessly with NYCE's existing platforms and can also be implemented as a standalone product for operators using other systems. Early adopters have reported significant time savings in compliance processes and enhanced confidence in their regulatory positioning.`,
    category: "Industry",
    slug: "nyce-announces-compliance-solution-for-new-regulations",
    imageUrl: "/news/compliance.jpg"
  }
];

// Função para obter todas as notícias
function getAllNews() {
  return newsData;
}

// Função para obter uma notícia pelo slug
function getNewsBySlug(slug) {
  return newsData.find(news => news.slug === slug) || null;
}

// Função para obter notícias relacionadas (mesma categoria)
function getRelatedNews(currentSlug, limit = 3) {
  const currentNews = getNewsBySlug(currentSlug);
  if (!currentNews) return [];
  
  return newsData
    .filter(news => news.category === currentNews.category && news.slug !== currentSlug)
    .slice(0, limit);
}

// Função para obter notícias por categoria
function getNewsByCategory(category) {
  if (category === "All") return newsData;
  return newsData.filter(news => news.category === category);
}

// Função para obter notícias mais recentes
function getLatestNews(limit = 3) {
  // Assumindo que os dados já estão ordenados por data (mais recente primeiro)
  return newsData.slice(0, limit);
}

module.exports = {
  getAllNews,
  getNewsBySlug,
  getRelatedNews,
  getNewsByCategory,
  getLatestNews,
  default: newsData
};