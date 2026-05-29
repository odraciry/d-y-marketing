/**
 * CONFIGURAÇÃO DE IMAGENS E LINKS — D&Y Marketing
 * =============================================
 * Para trocar uma imagem: altere apenas o `src` abaixo.
 * Caminho local recomendado: images/pasta/arquivo.webp
 *   Ex.: images/hero/main.webp
 *
 * No HTML, cada <img> usa data-img="chave.da.imagem"
 * Ex.: data-img="hero.main" → SITE_IMAGES.hero.main
 */

const SITE_LINKS = {
  instagram: 'https://www.instagram.com/dey.marketing/', // ← URL do perfil
  instagramHandle: '@dey.marketing', // ← @ exibido nos ganchos
  whatsapp: '5511999999999',
};

const SITE_IMAGES = {
  hero: {
    main: {
      src: './images/hero/main.webp',
      alt: 'Dashboard D&Y Marketing — campanhas, faturamento e desempenho por canal',
    },
    gallery: [
      { src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=320&h=480&fit=crop&q=80', alt: 'Social Media' },
      { src: 'https://images.unsplash.com/photo-1533750349088-c7478715769e?w=360&h=280&fit=crop&q=80', alt: 'Conteúdo' },
      { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=300&fit=crop&q=75', alt: 'Performance' },
      { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=320&h=400&fit=crop&q=80', alt: 'Estratégia' },
      { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=320&h=480&fit=crop&q=80', alt: 'Campanhas' },
      { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=360&h=320&fit=crop&q=80', alt: 'Branding' },
      { src: 'https://images.unsplash.com/photo-1556761175-5973dc0d32e7?w=480&h=300&fit=crop&q=80', alt: 'Consultoria' },
    ],
  },

  instagram: {
    feed: [
      { src: './images/instagram/feed-1.webp', alt: 'Post Instagram 1' },
      { src: './images/instagram/feed-2.webp', alt: 'Post Instagram 2' },
      { src: './images/instagram/feed-3.webp', alt: 'Post Instagram 3' },
      { src: './images/instagram/feed-4.webp', alt: 'Post Instagram 4' },
      { src: './images/instagram/feed-5.webp', alt: 'Post Instagram 5' },
      { src: './images/instagram/feed-6.webp', alt: 'Post Instagram 6' },
      { src: './images/instagram/feed-7.webp', alt: 'Post Instagram 6' },
      { src: './images/instagram/feed-8.webp', alt: 'Post Instagram 6' },
    ],
  },

  marquee: [
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=120&fit=crop&q=70',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=120&fit=crop&q=70',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&h=120&fit=crop&q=70',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=120&fit=crop&q=70',
  ],

  portfolio: {
    hero: { src: './images/portifolio/engajamento.webp', alt: 'Case destaque' },
    branding: { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=400&fit=crop&q=80', alt: 'Branding' },
    strategy: { src: './images/portifolio/estrategia.webp', alt: 'Estratégia' },
    content: { src: './images/portifolio/conteudo.webp', alt: 'Conteúdo' },
    performance: { src: './images/portifolio/performance.webp', alt: 'Performance' },
  },

  services: {
    social: { src: './images/services/social-midia.webp', alt: 'Social Media' },
    branding: { src: './images/services/branding.webp', alt: 'Branding' },
    traffic: { src: './images/services/trafego-pago.webp', alt: 'Tráfego Pago' },
    digital: { src: './images/services/marketing-digital.webp', alt: 'Marketing Digital' },
    // landing: { src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&h=340&fit=crop&q=80', alt: 'Landing Pages' },
  },

  solution: {
    back: { src: './images/texture.webp', alt: 'Consultoria' },
    front: { src: './images/notebook.webp', alt: 'Painel de resultados e métricas' },
  },

  results: [
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop&q=80', alt: 'Case e-commerce' },
    { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=500&fit=crop&q=80', alt: 'Case clínica' },
    { src: 'https://images.unsplash.com/photo-1556761175-5973dc0d32e7?w=400&h=500&fit=crop&q=80', alt: 'Case infoprodutor' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=500&fit=crop&q=80', alt: 'Case restaurante' },
  ],

  process: [
    { src: './images/process/diagnostico.webp', alt: 'Diagnóstico' },
    { src: './images/process/estrategia.webp', alt: 'Estratégia' },
    { src: './images/process/execucao.webp', alt: 'Execução' },
    { src: './images/process/escala.webp', alt: 'Escala' },
  ],

  testimonials: [
    { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80', alt: 'Dr. Rafael M.' },
    { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&q=80', alt: 'Camila S.' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80', alt: 'André L.' },
  ],

  caseQuote: { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80', alt: 'Cliente' },
  ctaBg: { src: './images/fundo.webp', alt: '' },
};
