import { useState, useEffect } from 'react'

const CACHE_KEY = 'mrp_ig_cache'
const CACHE_TTL = 30 * 60 * 1000 // 30 minutos

// ─── Mock data ────────────────────────────────────────────────────────────────
// Substituir por dados reais quando a Instagram Graph API estiver configurada.
// Estrutura espelha exatamente o retorno da API:
// GET https://graph.instagram.com/{user-id}/media
//   ?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count
//   &access_token={VITE_INSTAGRAM_TOKEN}
const MOCK_POSTS = [
  {
    id: 'ig1',
    caption: 'Fim de tarde sobre o litoral catarinense ✨ Cada pôr do sol é único visto do alto.',
    media_type: 'IMAGE',
    media_url: 'https://picsum.photos/seed/mrpdrone1/600/600',
    permalink: 'https://instagram.com/mrp_drone',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 234,
  },
  {
    id: 'ig2',
    caption: 'Vista aérea de Penha, SC 🚁 A cidade que poucos conhecem de cima.',
    media_type: 'IMAGE',
    media_url: 'https://picsum.photos/seed/mrpdrone2/600/600',
    permalink: 'https://instagram.com/mrp_drone',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 412,
  },
  {
    id: 'ig3',
    caption: 'Natureza em 4K. O Litoral Catarinense tem lugares que te deixam sem palavras.',
    media_type: 'IMAGE',
    media_url: 'https://picsum.photos/seed/mrpdrone3/600/600',
    permalink: 'https://instagram.com/mrp_drone',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 189,
  },
  {
    id: 'ig4',
    caption: 'Cobertura especial de evento na praia. Memórias que ficam para sempre 🎬',
    media_type: 'IMAGE',
    media_url: 'https://picsum.photos/seed/mrpdrone4/600/600',
    permalink: 'https://instagram.com/mrp_drone',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 567,
  },
  {
    id: 'ig5',
    caption: 'O mar de Santa Catarina visto do alto. Que cenário! 🌊',
    media_type: 'IMAGE',
    media_url: 'https://picsum.photos/seed/mrpdrone5/600/600',
    permalink: 'https://instagram.com/mrp_drone',
    timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 892,
  },
  {
    id: 'ig6',
    caption: 'Novos projetos chegando! Fique de olho no canal 🎥 #drone #litoral',
    media_type: 'IMAGE',
    media_url: 'https://picsum.photos/seed/mrpdrone6/600/600',
    permalink: 'https://instagram.com/mrp_drone',
    timestamp: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 341,
  },
]

function formatDate(isoString) {
  const diff = Date.now() - new Date(isoString).getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (days === 0) return 'hoje'
  if (days === 1) return 'há 1 dia'
  if (days < 7) return `há ${days} dias`
  if (days < 14) return 'há 1 semana'
  if (days < 30) return `há ${Math.floor(days / 7)} semanas`
  if (days < 60) return 'há 1 mês'
  return `há ${Math.floor(days / 30)} meses`
}

function formatLikes(count) {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`
  return String(count)
}

function getCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { data, ts } = JSON.parse(raw)
    if (Date.now() - ts > CACHE_TTL) return null
    return data
  } catch {
    return null
  }
}

function setCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
  } catch {}
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useInstagramFeed() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const token = import.meta.env.VITE_INSTAGRAM_TOKEN
    const userId = import.meta.env.VITE_INSTAGRAM_USER_ID

    // ── Sem credenciais: usa mock data ──────────────────────────────────────
    if (!token || !userId) {
      const formatted = MOCK_POSTS.map((p) => ({
        ...p,
        date: formatDate(p.timestamp),
        likes: formatLikes(p.like_count),
      }))
      setPosts(formatted)
      setLoading(false)
      return
    }

    // ── Com credenciais: busca API real ─────────────────────────────────────
    const cached = getCache()
    if (cached) {
      setPosts(cached)
      setLoading(false)
      return
    }

    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count'
    const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&limit=6&access_token=${token}`

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error.message)
        const formatted = (data.data || []).map((p) => ({
          ...p,
          media_url: p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url,
          date: formatDate(p.timestamp),
          likes: formatLikes(p.like_count ?? 0),
        }))
        setCache(formatted)
        setPosts(formatted)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading, error }
}
