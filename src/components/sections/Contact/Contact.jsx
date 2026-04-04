import styles from './Contact.module.css'
import { useContactForm } from './useContactForm'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function Contact() {
  const form = useContactForm()

  return (
    <section
      id="contact"
      className={`${styles.contact} section-padding`}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <header className="section-header">
          <h2 id="contact-heading" className="section-title">
            Solicite um <span className="accent">Orçamento</span>
          </h2>
          <p className="section-subtitle">
            Pronto para levar seu projeto a novos horizontes? Conta pra gente
            sobre sua visão e retornamos em até 24 horas.
          </p>
        </header>

        <div className={styles.contactGrid}>
          <ContactInfo />
          <div className={styles.formWrapper}>
            <ContactForm {...form} />
          </div>
        </div>
      </div>
    </section>
  )
}
