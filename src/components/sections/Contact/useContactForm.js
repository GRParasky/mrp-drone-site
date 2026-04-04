import { useState, useCallback } from 'react'
import { CLIENT } from '../../../config/client'

export const SERVICE_TYPES = [
  { value: '', label: 'Selecione um serviço...' },
  ...CLIENT.services,
]

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'O nome é obrigatório.'
  if (!fields.email.trim()) {
    errors.email = 'O e-mail é obrigatório.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Por favor, insira um e-mail válido.'
  }
  if (fields.phone && !/^[\d\s\+\-\(\)]{7,20}$/.test(fields.phone)) {
    errors.phone = 'Por favor, insira um número de telefone válido.'
  }
  if (!fields.service) errors.service = 'Por favor, selecione um tipo de serviço.'
  if (!fields.message.trim()) {
    errors.message = 'A mensagem é obrigatória.'
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Por favor, forneça mais detalhes (mínimo 20 caracteres).'
  }
  return errors
}

export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitState, setSubmitState] = useState('idle') // idle | submitting | success | error

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }, [touched])

  const handleBlur = useCallback((e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fieldErrors = validate(formData)
    setErrors((prev) => ({
      ...prev,
      ...(fieldErrors[name] ? { [name]: fieldErrors[name] } : {}),
    }))
  }, [formData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const allTouched = Object.keys(INITIAL_FORM).reduce((acc, k) => ({ ...acc, [k]: true }), {})
    setTouched(allTouched)

    const formErrors = validate(formData)
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setSubmitState('submitting')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Orçamento MRP Drone — ${formData.service}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Não informado',
          service: formData.service,
          message: formData.message,
        }),
      })

      const data = await res.json()
      if (!data.success) throw new Error(data.message)

      setSubmitState('success')
      setFormData(INITIAL_FORM)
      setTouched({})
      setErrors({})
    } catch {
      setSubmitState('error')
    }
  }

  const resetSubmit = () => setSubmitState('idle')

  const fieldClass = (name, baseClass, errorClass) =>
    `${baseClass} ${errors[name] && touched[name] ? errorClass : ''}`

  return {
    formData,
    errors,
    touched,
    submitState,
    handleChange,
    handleBlur,
    handleSubmit,
    resetSubmit,
    fieldClass,
  }
}
