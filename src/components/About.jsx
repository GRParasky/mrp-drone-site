import styles from './About.module.css'

const SERVICES = [
  {
    icon: 'fa-solid fa-building',
    title: 'Imóveis',
    description: 'Vídeos aéreos que valorizam o imóvel, ajudam a vender mais rápido e destacam cada detalhe da propriedade.',
    featured: true,
  },
  {
    icon: 'fa-solid fa-film',
    title: 'Produções Comerciais',
    description: 'Conteúdo cinematográfico para marcas e empresas que querem se destacar com imagens aéreas de impacto.',
    featured: true,
  },
  {
    icon: 'fa-solid fa-camera',
    title: 'Cobertura de Eventos',
    description: 'Registros aéreos de momentos especiais com perspectivas únicas e qualidade profissional.',
  },
  {
    icon: 'fa-solid fa-water',
    title: 'Natureza & Paisagens',
    description: 'Revelando os cantos escondidos do Litoral Catarinense que poucos olhos alcançam.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className={`${styles.about} section-padding`}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Esquerda: Conteúdo de texto */}
          <div className={styles.content}>
            <div className={styles.tagBadge}>
              <i className="fa-solid fa-drone" aria-hidden="true"></i>
              Sobre a MRP Drone
            </div>

            <h2 id="about-heading" className={styles.title}>
              Narrativa Aérea{' '}
              <span className={styles.titleAccent}>Redefinida</span>
            </h2>

            <p className={styles.description}>
              A MRP Drone nasceu do olhar de quem passou a vida inteira
              no Litoral Catarinense — e aprendeu a enxergar o que a maioria
              dos turistas passa sem perceber: as enseadas escondidas, as
              praias selvagens e os ângulos que só existem quando você sobe.
            </p>

            <p className={styles.description}>
              Com um drone e anos de vivência na região, transformamos
              imóveis, marcas e paisagens em histórias visuais que encantam.
              Cada voo é planejado com cuidado, cada plano composto com
              intenção — porque quem conhece o lugar de verdade sabe
              exatamente onde a beleza está.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>
                <span>Piloto de Drone Certificado ANAC</span>
              </div>
              <div className={styles.highlight}>
                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>
                <span>Câmeras Cinematográficas 4K</span>
              </div>
              <div className={styles.highlight}>
                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>
                <span>Color Grading Profissional</span>
              </div>
              <div className={styles.highlight}>
                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>
                <span>Entrega Conforme Necessidade do Cliente</span>
              </div>
            </div>

            <a
              href="#contact"
              className={styles.ctaLink}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Trabalhe Conosco
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Direita: Cards de serviços */}
          <div className={styles.servicesGrid} aria-label="Nossos serviços">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className={`${styles.serviceCard} ${service.featured ? styles.featured : ''}`}
              >
                <div className={styles.serviceIcon} aria-hidden="true">
                  <i className={service.icon}></i>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
