"use client"

export function FooterNavigation() {
  const handleNavClick = (href: string) => {
    const sectionId = href.substring(1)
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

  return (
    <div>
      <h4 className="font-semibold mb-4">Quick Links</h4>
      <div className="space-y-2">
        <button
          onClick={() => handleNavClick("#about")}
          className="cursor-pointer block text-muted-foreground hover:text-foreground transition-colors text-left"
        >
          About
        </button>
        <button
          onClick={() => handleNavClick("#projects")}
          className="cursor-pointer block text-muted-foreground hover:text-foreground transition-colors text-left"
        >
          Projects
        </button>
        <button
          onClick={() => handleNavClick("#contact")}
          className="cursor-pointer block text-muted-foreground hover:text-foreground transition-colors text-left"
        >
          Contact
        </button>
      </div>
    </div>
  )
}
