// ─────────────────────────────────────────────────────────────────────────────
// CLIENT CONFIG — único arquivo que muda por cliente
// ─────────────────────────────────────────────────────────────────────────────

export const CLIENT = {
  // ─── Identidade ───────────────────────────────────────────────────────────
  brandName: 'MRP Drone',
  tagline: 'As Belezas Escondidas de Santa Catarina',
  location: 'Penha, SC',
  areaServed: 'Litoral Catarinense',

  // ─── Contato ──────────────────────────────────────────────────────────────
  email: 'marcielrodrigoparasky@gmail.com',
  whatsapp: '554791531804',
  whatsappLabel: '+55 47 9 9153-1804',

  // ─── Redes sociais ────────────────────────────────────────────────────────
  social: {
    youtube:   { handle: '@Mrp-drone',  url: 'https://youtube.com/@Mrp-drone' },
    instagram: { handle: '@mrp_drone',  url: 'https://instagram.com/mrp_drone' },
    tiktok:    { handle: '@mrpdrone0',  url: 'https://tiktok.com/@mrpdrone0' },
  },

  // ─── Serviços ─────────────────────────────────────────────────────────────
  services: [
    { value: 'event',       label: 'Cobertura de Evento' },
    { value: 'real-estate', label: 'Imóveis' },
    { value: 'commercial',  label: 'Produção Comercial' },
    { value: 'landscape',   label: 'Paisagem / Viagem' },
    { value: 'other',       label: 'Outro' },
  ],

  // ─── SEO ──────────────────────────────────────────────────────────────────
  siteUrl: 'https://grparasky.github.io/mrp-drone-site',
  seoDescription: 'Videografia aérea cinematográfica com drone no Litoral Catarinense. Revelamos as belezas escondidas de Santa Catarina — praias, enseadas e paisagens únicas. Baseado em Penha, SC.',
  keywords: [
    'drone litoral catarinense',
    'videografia drone Santa Catarina',
    'filmagem aérea SC',
    'drone Penha SC',
    'cinematografia drone litoral',
    'imagens aéreas praias SC',
    'drone eventos Santa Catarina',
    'MRP Drone',
  ],
}
