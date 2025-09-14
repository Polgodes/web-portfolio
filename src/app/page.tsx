import { Hero } from "@/components/hero/hero"
import { About } from "@/components/about/about"
import { Projects } from "@/components/projects/projects"
import { Contact } from "@/components/contact/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
