import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const scrollY = window.scrollY
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCtaClick = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleReelClick = (e) => {
    e.preventDefault()
    document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className={styles.hero}
      aria-label="Hero - MRP Drone Videografia Aérea"
    >
      {/* Vídeo de fundo */}
      <video
        className={styles.videoBg}
        src={`${import.meta.env.BASE_URL}hero-bg.mp4`}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Overlay escuro sobre o vídeo */}
      <div className={styles.videoOverlay} aria-hidden="true"></div>

      {/* Partículas animadas */}
      <div className={styles.particles} aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className={styles.particle} style={{ '--i': i }}></span>
        ))}
      </div>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroLogo} aria-hidden="true">
          <img
            src="https://yt3.googleusercontent.com/Jhg43pm2arMNsXrMVs4y_bDdO5Fx1zbMjhIy6cQyVi0qGVV_z8AbQKpzfTokrX9_rWBlkfiQyA=s160-c-k-c0x00ffffff-no-rj"
            alt="MRP Drone"
          />
        </div>

        <div className={styles.badge}>
          <i className="fa-solid fa-circle-dot" aria-hidden="true"></i>
          <span>Litoral Catarinense visto do alto</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine1}>As Belezas Escondidas</span>
          <span className={styles.titleLine2}>
            de <span className={styles.titleAccent}>Santa Catarina</span>
          </span>
        </h1>

        <p className={styles.tagline}>
          Praias selvagens, enseadas intocadas e paisagens que poucos conhecem —
          reveladas pela perspectiva única de um drone. Videografia aérea
          cinematográfica no Litoral Catarinense.
        </p>

        <div className={styles.ctaGroup}>
          <a
            href="#contact"
            className={styles.ctaPrimary}
            onClick={handleCtaClick}
          >
            <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
            Solicitar Orçamento
          </a>
          <a
            href="#videos"
            className={styles.ctaSecondary}
            onClick={handleReelClick}
          >
            <span className={styles.playIcon} aria-hidden="true">
              <i className="fa-solid fa-play"></i>
            </span>
            Ver Feeds
          </a>
        </div>

        {/* Estatísticas */}
        <div className={styles.stats} role="list" aria-label="Nossas conquistas">
          <div className={styles.statItem} role="listitem">
            <strong className={styles.statNumber}>500+</strong>
            <span className={styles.statLabel}>Vídeos Produzidos</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true"></div>
          <div className={styles.statItem} role="listitem">
            <strong className={styles.statNumber}>4K</strong>
            <span className={styles.statLabel}>Qualidade Ultra HD</span>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine}></span>
        <span className={styles.scrollDot}></span>
      </div>
    </section>
  )
}
