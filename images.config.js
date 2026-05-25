/**
 * CONFIGURAÇÃO DE IMAGENS E LINKS — D&Y Marketing
 * =============================================
 * Para trocar uma imagem: altere apenas o `src` abaixo.
 * Caminho local recomendado: images/pasta/arquivo.jpg
 *   Ex.: images/hero/main.jpg
 *
 * No HTML, cada <img> usa data-img="chave.da.imagem"
 * Ex.: data-img="hero.main" → SITE_IMAGES.hero.main
 */

const SITE_LINKS = {
  instagram: 'https://www.instagram.com/dymarketing/', // ← URL do perfil
  instagramHandle: '@dymarketing', // ← @ exibido nos ganchos
  whatsapp: '5511999999999',
};

const SITE_IMAGES = {
  hero: {
    main: {
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=750&fit=crop&q=80',
      alt: 'Equipe em reunião de estratégia',
    },
    gallery: [
      { src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=320&h=480&fit=crop&q=80', alt: 'Social Media' },
      { src: 'https://images.unsplash.com/photo-1533750349088-c7478715769e?w=360&h=280&fit=crop&q=80', alt: 'Conteúdo' },
      { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&h=300&fit=crop&q=80', alt: 'Performance' },
      { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=320&h=400&fit=crop&q=80', alt: 'Estratégia' },
      { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=320&h=480&fit=crop&q=80', alt: 'Campanhas' },
      { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=360&h=320&fit=crop&q=80', alt: 'Branding' },
      { src: 'https://images.unsplash.com/photo-1556761175-5973dc0d32e7?w=480&h=300&fit=crop&q=80', alt: 'Consultoria' },
    ],
  },

  instagram: {
    feed: [
      { src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=400&fit=crop&q=80', alt: 'Post Instagram 1' },
      { src: 'https://images.unsplash.com/photo-1533750349088-c7478715769e?w=400&h=400&fit=crop&q=80', alt: 'Post Instagram 2' },
      { src: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=400&fit=crop&q=80', alt: 'Post Instagram 3' },
      { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80', alt: 'Post Instagram 4' },
      { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop&q=80', alt: 'Post Instagram 5' },
      { src: 'https://images.unsplash.com/photo-1556761175-5973dc0d32e7?w=400&h=400&fit=crop&q=80', alt: 'Post Instagram 6' },
    ],
  },

  marquee: [
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=120&fit=crop&q=70',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=120&fit=crop&q=70',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&h=120&fit=crop&q=70',
    'https://images.unsplash.com/photo-1542744173-8e7e5347bb63?w=200&h=120&fit=crop&q=70',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=120&fit=crop&q=70',
  ],

  portfolio: {
    hero: { src: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop&q=80', alt: 'Case destaque' },
    branding: { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=400&fit=crop&q=80', alt: 'Branding' },
    strategy: { src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=400&fit=crop&q=80', alt: 'Estratégia' },
    content: { src: 'https://images.unsplash.com/photo-1533750349088-c7478715769e?w=400&h=600&fit=crop&q=80', alt: 'Conteúdo' },
    performance: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop&q=80', alt: 'Performance' },
  },

  services: {
    social: { src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=340&fit=crop&q=80', alt: 'Social Media' },
    branding: { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=340&fit=crop&q=80', alt: 'Branding' },
    traffic: { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=340&fit=crop&q=80', alt: 'Tráfego Pago' },
    digital: { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=340&fit=crop&q=80', alt: 'Marketing Digital' },
    landing: { src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&h=340&fit=crop&q=80', alt: 'Landing Pages' },
  },

  solution: {
    back: { src: 'https://images.unsplash.com/photo-1556761175-5973dc0d32e7?w=500&h=600&fit=crop&q=80', alt: 'Consultoria' },
    front: { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=420&h=520&fit=crop&q=80', alt: 'Resultados' },
  },

  results: [
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop&q=80', alt: 'Case e-commerce' },
    { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=500&fit=crop&q=80', alt: 'Case clínica' },
    { src: 'https://images.unsplash.com/photo-1556761175-5973dc0d32e7?w=400&h=500&fit=crop&q=80', alt: 'Case infoprodutor' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=500&fit=crop&q=80', alt: 'Case restaurante' },
  ],

  process: [
    { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=220&fit=crop&q=80', alt: 'Diagnóstico' },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e5347bb63?w=400&h=220&fit=crop&q=80', alt: 'Estratégia' },
    { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop&q=80', alt: 'Execução' },
    { src: 'https://images.unsplash.com/photo-1556761175-5973dc0d32e7?w=400&h=220&fit=crop&q=80', alt: 'Escala' },
  ],

  testimonials: [
    { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80', alt: 'Dr. Rafael M.' },
    { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&q=80', alt: 'Camila S.' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80', alt: 'André L.' },
  ],

  caseQuote: { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80', alt: 'Cliente' },
  ctaBg: { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop&q=70', alt: '' },
};
