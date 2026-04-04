export function useScrollToSection() {
  return (target) => {
    const id = target.startsWith('#') ? target.slice(1) : target
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}
