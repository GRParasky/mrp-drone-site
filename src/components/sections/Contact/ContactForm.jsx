import styles from './Contact.module.css'
import { SERVICE_TYPES } from './useContactForm'

export default function ContactForm({
  formData,
  errors,
  touched,
  submitState,
  handleChange,
  handleBlur,
  handleSubmit,
  resetSubmit,
  fieldClass,
}) {
  if (submitState === 'success') {
    return (
      <div className={styles.successMessage} role="alert">
        <div className={styles.successIcon} aria-hidden="true">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <h3 className={styles.successTitle}>Mensagem Enviada!</h3>
        <p className={styles.successText}>
          Obrigado pelo contato. Vamos analisar os detalhes do seu
          projeto e retornamos em até 24 horas.
        </p>
        <button className={styles.resetBtn} onClick={resetSubmit}>
          Enviar Outra Mensagem
        </button>
      </div>
    )
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulário de contato e solicitação de orçamento"
    >
      <div className={styles.formRow}>
        {/* Nome */}
        <div className={styles.formGroup}>
          <label htmlFor="contact-name" className={styles.label}>
            Nome Completo <span aria-hidden="true" className={styles.required}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass('name', styles.input, styles.inputError)}
            placeholder="João Silva"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!(errors.name && touched.name)}
            aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
          />
          {errors.name && touched.name && (
            <span id="name-error" className={styles.errorMsg} role="alert">
              <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
              {errors.name}
            </span>
          )}
        </div>

        {/* E-mail */}
        <div className={styles.formGroup}>
          <label htmlFor="contact-email" className={styles.label}>
            Endereço de E-mail <span aria-hidden="true" className={styles.required}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass('email', styles.input, styles.inputError)}
            placeholder="joao@exemplo.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!(errors.email && touched.email)}
            aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
          />
          {errors.email && touched.email && (
            <span id="email-error" className={styles.errorMsg} role="alert">
              <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className={styles.formRow}>
        {/* Telefone */}
        <div className={styles.formGroup}>
          <label htmlFor="contact-phone" className={styles.label}>
            Número de Telefone
            <span className={styles.optional}> (opcional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass('phone', styles.input, styles.inputError)}
            placeholder="+55 (11) 9 0000-0000"
            autoComplete="tel"
            aria-invalid={!!(errors.phone && touched.phone)}
            aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
          />
          {errors.phone && touched.phone && (
            <span id="phone-error" className={styles.errorMsg} role="alert">
              <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
              {errors.phone}
            </span>
          )}
        </div>

        {/* Serviço */}
        <div className={styles.formGroup}>
          <label htmlFor="contact-service" className={styles.label}>
            Tipo de Serviço <span aria-hidden="true" className={styles.required}>*</span>
          </label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass('service', styles.select, styles.inputError)}
            aria-required="true"
            aria-invalid={!!(errors.service && touched.service)}
            aria-describedby={errors.service && touched.service ? 'service-error' : undefined}
          >
            {SERVICE_TYPES.map(({ value, label }) => (
              <option key={value} value={value} disabled={value === ''}>
                {label}
              </option>
            ))}
          </select>
          {errors.service && touched.service && (
            <span id="service-error" className={styles.errorMsg} role="alert">
              <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
              {errors.service}
            </span>
          )}
        </div>
      </div>

      {/* Mensagem */}
      <div className={styles.formGroup}>
        <label htmlFor="contact-message" className={styles.label}>
          Detalhes do Projeto <span aria-hidden="true" className={styles.required}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={fieldClass('message', styles.textarea, styles.inputError)}
          placeholder="Conte sobre seu projeto — local, data, duração, estilo..."
          rows={5}
          aria-required="true"
          aria-invalid={!!(errors.message && touched.message)}
          aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
        />
        {errors.message && touched.message && (
          <span id="message-error" className={styles.errorMsg} role="alert">
            <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
            {errors.message}
          </span>
        )}
      </div>

      {submitState === 'error' && (
        <div className={styles.submitError} role="alert">
          <i className="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
          Algo deu errado. Por favor, tente novamente ou nos envie um e-mail diretamente.
        </div>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={submitState === 'submitting'}
        aria-busy={submitState === 'submitting'}
      >
        {submitState === 'submitting' ? (
          <>
            <span className={styles.spinner} aria-hidden="true"></span>
            Enviando...
          </>
        ) : (
          <>
            <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
            Enviar Mensagem
          </>
        )}
      </button>
    </form>
  )
}
