import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
    "Figma",
    "AWS",
    "Docker",
    "Git",
    "GraphQL",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm John, a full-stack developer based in San Francisco. I enjoy creating things that live on the
              internet, whether that be websites, applications, or anything in between.
            </p>
            <p className="text-lg leading-relaxed">
              My main focus these days is building accessible, inclusive products and digital experiences for a variety
              of clients. I also recently launched a course that covers everything you need to build a web app with the
              Jamstack.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and two cats, or running
              around Hyrule searching for Korok seeds.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="w-64 h-64 bg-muted rounded-xl flex items-center justify-center">
                <span className="text-muted-foreground">Your Photo Here</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-muted-foreground">
                Creating responsive, interactive user interfaces with modern frameworks
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-muted-foreground">
                Building scalable APIs and server-side applications with robust architecture
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Designing intuitive user experiences with attention to detail and accessibility
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
