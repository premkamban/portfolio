import { Hero } from "@/components/sections/hero"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Certifications } from "@/components/sections/certifications"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  )
}
