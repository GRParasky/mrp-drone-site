import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/554791531804"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Falar no WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
    </a>
  )
}
