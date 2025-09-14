export function useScrollToSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      const navHeight = 120
      const targetPosition = elementTop - navHeight
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      })
    }
  }

  return { scrollToSection }
}
