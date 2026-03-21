import { useState } from 'react'
import styles from './Videos.module.css'

const VIDEOS = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Nascer do Sol no Centro — Drone Cinematográfico 4K',
    description: 'Voo aéreo na hora dourada sobre o skyline da cidade. Gravado com DJI Air 3 em 4K/60fps.',
    duration: '3:42',
    views: '12,4K',
    date: 'Dez 2024',
    category: 'Cinematográfico',
  },
  {
    id: 'ScMzIvxBSi4',
    title: 'Casamento na Praia — Cobertura Aérea 2024',
    description: 'Um deslumbrante casamento litorâneo capturado do alto. Emocional, cinematográfico e inesquecível.',
    duration: '5:18',
    views: '8,7K',
    date: 'Nov 2024',
    category: 'Evento',
  },
  {
    id: 'jNQXAC9IVRw',
    title: 'Imóvel de Luxo — Cobertura em Miami',
    description: 'Tour de imóvel à beira-mar com 5 quartos. Filmagem aérea e interna profissional.',
    duration: '2:55',
    views: '21,3K',
    date: 'Out 2024',
    category: 'Imóveis',
  },
  {
    id: 'kJQP7kiw5Fk',
    title: 'Trilha na Montanha — Reel de Paisagem Épica',
    description: 'Voo de drone em alta altitude entre picos e vales exuberantes.',
    duration: '4:10',
    views: '15,9K',
    date: 'Set 2024',
    category: 'Paisagem',
  },
]

const CATEGORY_COLORS = {
  Cinematográfico: { bg: 'rgba(74, 122, 171, 0.15)', color: '#4a7aab' },
  Evento: { bg: 'rgba(48, 81, 118, 0.15)', color: '#7aabd4' },
  Imóveis: { bg: 'rgba(80, 200, 120, 0.12)', color: '#50c878' },
  Paisagem: { bg: 'rgba(160, 80, 200, 0.12)', color: '#a050c8' },
}

function VideoCard({ video }) {
  const [isHovered, setIsHovered] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`
  const videoUrl = `https://www.youtube.com/watch?v=${video.id}`
  const categoryStyle = CATEGORY_COLORS[video.category] || { bg: 'rgba(252,252,250,0.1)', color: '#FCFCFA' }

  return (
    <article
      className={styles.videoCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.thumbnailLink}
        aria-label={`Assistir ${video.title} no YouTube`}
      >
        <div className={styles.thumbnailWrapper}>
          <img
            src={thumbnailUrl}
            alt={`Miniatura de: ${video.title}`}
            className={styles.thumbnail}
            loading="lazy"
            width="480"
            height="270"
          />
          <div className={`${styles.overlay} ${isHovered ? styles.overlayVisible : ''}`}>
            <div className={styles.playButton} aria-hidden="true">
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
          <span className={styles.duration} aria-label={`Duração: ${video.duration}`}>
            {video.duration}
          </span>
        </div>
      </a>

      <div className={styles.videoInfo}>
        <div className={styles.videoMeta}>
          <span
            className={styles.categoryBadge}
            style={{ background: categoryStyle.bg, color: categoryStyle.color }}
          >
            {video.category}
          </span>
          <time className={styles.videoDate} dateTime={video.date}>{video.date}</time>
        </div>

        <h3 className={styles.videoTitle}>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {video.title}
          </a>
        </h3>

        <p className={styles.videoDescription}>{video.description}</p>

        <div className={styles.videoStats}>
          <span className={styles.viewCount}>
            <i className="fa-solid fa-eye" aria-hidden="true"></i>
            {video.views} visualizações
          </span>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.watchLink}
          >
            Ver no YouTube
            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Videos() {
  return (
    <section
      id="videos"
      className={`${styles.videos} section-padding`}
      aria-labelledby="videos-heading"
    >
      <div className="container">
        <header className="section-header">
          <h2 id="videos-heading" className="section-title">
            Últimos <span className="accent">Vídeos</span>
          </h2>
          <p className="section-subtitle">
            Nossos trabalhos aéreos mais recentes — de paisagens cinematográficas a
            showcases imobiliários. Cada vídeo conta uma história única lá do alto.
          </p>
        </header>

        <div className={styles.videosGrid} aria-label="Últimos vídeos">
          {VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className={styles.viewMore}>
          <a
            href="https://youtube.com/@mrpdrone"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewMoreBtn}
          >
            <i className="fa-brands fa-youtube" aria-hidden="true"></i>
            Ver Todos os Vídeos no YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
