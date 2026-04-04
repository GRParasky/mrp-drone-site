import styles from './Contact.module.css'
import { CLIENT } from '../../../config/client'

const CONTACT_INFO = [
  {
    icon: 'fa-solid fa-envelope',
    label: 'E-mail',
    value: CLIENT.email,
    href: `mailto:${CLIENT.email}`,
  },
  {
    icon: 'fa-brands fa-whatsapp',
    label: 'WhatsApp',
    value: CLIENT.whatsappLabel,
    href: `https://wa.me/${CLIENT.whatsapp}`,
  },
  {
    icon: 'fa-solid fa-location-dot',
    label: 'Localização',
    value: `${CLIENT.location} — Gravações no ${CLIENT.areaServed}`,
    href: null,
  },
  {
    icon: 'fa-solid fa-clock',
    label: 'Prazo de Gravações',
    value: 'A combinar',
    href: null,
  },
]

export default function ContactInfo() {
  return (
    <aside className={styles.contactInfo} aria-label="Informações de contato">
      <div className={styles.infoHeader}>
        <h3 className={styles.infoTitle}>Vamos Conversar</h3>
        <p className={styles.infoSubtitle}>
          Seja uma dúvida rápida ou um briefing completo de produção —
          estamos aqui para ajudar você a criar algo incrível.
        </p>
      </div>

      <ul className={styles.infoList} aria-label="Detalhes de contato">
        {CONTACT_INFO.map((info) => (
          <li key={info.label} className={styles.infoItem}>
            <div className={styles.infoIcon} aria-hidden="true">
              <i className={info.icon}></i>
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>{info.label}</span>
              {info.href ? (
                <a href={info.href} className={styles.infoValue}>
                  {info.value}
                </a>
              ) : (
                <span className={styles.infoValue}>{info.value}</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.socialLinks} aria-label="Links das redes sociais">
        <a href={CLIENT.social.youtube.url} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialLink}>
          <i className="fa-brands fa-youtube" aria-hidden="true"></i>
        </a>
        <a href={CLIENT.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
          <i className="fa-brands fa-instagram" aria-hidden="true"></i>
        </a>
        <a href={CLIENT.social.tiktok.url} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.socialLink}>
          <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
        </a>
      </div>
    </aside>
  )
}
