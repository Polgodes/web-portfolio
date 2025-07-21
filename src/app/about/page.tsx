import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Smartphone } from "lucide-react"

export function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Figma",
    "Git",
    "AWS",
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 5 years of experience in web development, I specialize in creating modern, responsive applications
            using the latest technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Code className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Frontend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Expert in React, Next.js, TypeScript, and modern CSS frameworks. I build fast, accessible, and
                user-friendly interfaces.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-12 w-12 text-primary mb-4" />
              <CardTitle>UI/UX Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Creating intuitive user experiences with a focus on usability, accessibility, and modern design
                principles.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Responsive Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Building applications that work seamlessly across all devices, from mobile phones to desktop computers.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-muted rounded-lg p-3 text-center font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
