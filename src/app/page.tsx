import { Hero } from "@/app/hero/hero"
import { About } from "@/app/about/about"
import { Projects } from "@/app/projects/projects"
import { Contact } from "@/app/contact/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
    </>
  )
}
