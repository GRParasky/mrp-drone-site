import styles from './Logo.module.css'
import { useScrollToSection } from '../../../hooks/useScrollToSection'

const LOGO_IMG = 'https://yt3.googleusercontent.com/Jhg43pm2arMNsXrMVs4y_bDdO5Fx1zbMjhIy6cQyVi0qGVV_z8AbQKpzfTokrX9_rWBlkfiQyA=s160-c-k-c0x00ffffff-no-rj'

export default function Logo({ className, imgClassName, onClick, lazy = false }) {
  const scrollTo = useScrollToSection()

  const handleClick = (e) => {
    e.preventDefault()
    scrollTo('#hero')
    onClick?.()
  }

  return (
    <a
      href="#hero"
      className={`${styles.logo} ${className ?? ''}`}
      onClick={handleClick}
      aria-label="MRP Drone - Voltar ao topo"
    >
      <img
        src={LOGO_IMG}
        alt="MRP Drone"
        className={`${styles.logoImg} ${imgClassName ?? ''}`}
        loading={lazy ? 'lazy' : 'eager'}
      />
      <span className={styles.logoText}>
        MRP<span className={styles.logoAccent}>Drone</span>
      </span>
    </a>
  )
}
