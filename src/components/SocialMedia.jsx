import styles from './SocialMedia.module.css'

const SOCIAL_LINKS = [
  {
    platform: 'YouTube',
    handle: '@MRPDrone',
    href: 'https://youtube.com/@mrpdrone',
    description: 'Assista nossos reels cinematográficos completos, tutoriais e bastidores das gravações.',
    stats: '10K+ Inscritos',
    icon: 'fa-brands fa-youtube',
    color: '#ff0000',
    bgColor: 'rgba(255, 0, 0, 0.08)',
    borderColor: 'rgba(255, 0, 0, 0.2)',
  },
  {
    platform: 'TikTok',
    handle: '@mrpdrone',
    href: 'https://tiktok.com/@mrpdrone',
    description: 'Clipes aéreos curtos, dicas com drone e imagens virais capturadas do céu.',
    stats: '25K+ Seguidores',
    icon: 'fa-brands fa-tiktok',
    color: '#ff0050',
    bgColor: 'rgba(255, 0, 80, 0.08)',
    borderColor: 'rgba(255, 0, 80, 0.2)',
  },
  {
    platform: 'Instagram',
    handle: '@mrpdrone',
    href: 'https://instagram.com/mrpdrone',
    description: 'Fotografia aérea diária, reels e stories dos nossos últimos trabalhos.',
    stats: '8K+ Seguidores',
    icon: 'fa-brands fa-instagram',
    color: '#e1306c',
    bgColor: 'rgba(225, 48, 108, 0.08)',
    borderColor: 'rgba(225, 48, 108, 0.2)',
  },
]

export default function SocialMedia() {
  return (
    <section
      id="social"
      className={`${styles.social} section-padding`}
      aria-labelledby="social-heading"
    >
      <div className="container">
        <header className="section-header">
          <h2 id="social-heading" className="section-title">
            Siga a <span className="accent">Jornada</span>
          </h2>
          <p className="section-subtitle">
            Acompanhe nossas últimas imagens aéreas, bastidores e dicas de
            cinematografia com drone em todas as plataformas.
          </p>
        </header>

        <div className={styles.socialGrid} role="list" aria-label="Canais nas redes sociais">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              className={styles.socialCard}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label={`Siga a MRP Drone no ${social.platform} — ${social.stats}`}
              style={{
                '--card-color': social.color,
                '--card-bg': social.bgColor,
                '--card-border': social.borderColor,
              }}
            >
              <div className={styles.cardTop}>
                <div
                  className={styles.iconWrapper}
                  aria-hidden="true"
                  style={{ background: social.bgColor, border: `1px solid ${social.borderColor}` }}
                >
                  <i className={social.icon} style={{ color: social.color }}></i>
                </div>
                <i className={`fa-solid fa-arrow-up-right-from-square ${styles.externalIcon}`} aria-hidden="true"></i>
              </div>

              <div className={styles.platformInfo}>
                <strong className={styles.platform}>{social.platform}</strong>
                <span className={styles.handle}>{social.handle}</span>
              </div>

              <p className={styles.cardDescription}>{social.description}</p>

              <div className={styles.cardStats}>
                <span className={styles.statsText} style={{ color: social.color }}>
                  {social.stats}
                </span>
                <span className={styles.followCta}>
                  Seguir Agora
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
