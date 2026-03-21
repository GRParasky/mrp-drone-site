import styles from './Footer.module.css'

const FOOTER_LINKS = {
  Serviços: [
    { label: 'Cobertura de Eventos', href: '#contact' },
    { label: 'Imóveis', href: '#contact' },
    { label: 'Produções Comerciais', href: '#contact' },
    { label: 'Paisagem & Viagens', href: '#contact' },
  ],
  Empresa: [
    { label: 'Sobre', href: '#about' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Novidades', href: '#social' },
    { label: 'Contato', href: '#contact' },
  ],
  Social: [
    { label: 'YouTube', href: 'https://youtube.com/@mrpdrone', external: true },
    { label: 'Instagram', href: 'https://instagram.com/mrpdrone', external: true },
    { label: 'TikTok', href: 'https://tiktok.com/@mrpdrone', external: true },
  ],
}

const SOCIAL_ICONS = [
  { href: 'https://youtube.com/@mrpdrone', icon: 'fa-brands fa-youtube', label: 'YouTube' },
  { href: 'https://instagram.com/mrpdrone', icon: 'fa-brands fa-instagram', label: 'Instagram' },
  { href: 'https://tiktok.com/@mrpdrone', icon: 'fa-brands fa-tiktok', label: 'TikTok' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Borda superior com gradiente */}
      <div className={styles.topBorder} aria-hidden="true"></div>

      <div className="container">
        <div className={styles.footerTop}>
          {/* Marca */}
          <div className={styles.brand}>
            <a
              href="#hero"
              className={styles.logo}
              onClick={(e) => handleNavClick(e, '#hero')}
              aria-label="MRP Drone - Voltar ao topo"
            >
              <img
                src="https://yt3.googleusercontent.com/Jhg43pm2arMNsXrMVs4y_bDdO5Fx1zbMjhIy6cQyVi0qGVV_z8AbQKpzfTokrX9_rWBlkfiQyA=s160-c-k-c0x00ffffff-no-rj"
                alt="MRP Drone"
                className={styles.logoImg}
              />
              <span>MRP<span className={styles.logoAccent}>Drone</span></span>
            </a>
            <p className={styles.brandTagline}>
              Cinematografia aérea que eleva a sua história. Videografia profissional
              com drone para eventos, imóveis e projetos comerciais.
            </p>
            <div className={styles.socialIcons} aria-label="Links das redes sociais">
              {SOCIAL_ICONS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={`Siga-nos no ${social.label}`}
                >
                  <i className={social.icon} aria-hidden="true"></i>
                  <span className={styles.socialIconLabel}>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Colunas de links */}
          <nav className={styles.linksGrid} aria-label="Navegação do rodapé">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category} className={styles.linkColumn}>
                <h4 className={styles.linkColumnTitle}>{category}</h4>
                <ul className={styles.linkList} role="list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={styles.footerLink}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        onClick={!link.external ? (e) => handleNavClick(e, link.href) : undefined}
                      >
                        {link.label}
                        {link.external && (
                          <i
                            className={`fa-solid fa-arrow-up-right-from-square ${styles.externalIcon}`}
                            aria-hidden="true"
                          ></i>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Rodapé inferior */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} MRP Drone. Todos os direitos reservados.
          </p>
          <p className={styles.location}>
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            Penha, SC — Gravações no Litoral Catarinense
          </p>
        </div>

        {/* Crédito do desenvolvedor */}
        <div className={styles.devCredit}>
          <span>Desenvolvido por</span>
          <a
            href="https://gabrielparasky.com.br?lang=pt"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.devLink}
          >
            Gabriel Parasky
            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
