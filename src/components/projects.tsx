import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive maps.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode and animations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "Blog Platform",
      description: "A content management system for bloggers with markdown support and SEO optimization.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "Fitness Tracker",
      description: "A mobile-first fitness tracking application with workout plans and progress visualization.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                <Card className="overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
