"use client"

import Image from "next/image";

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Palette, Zap, User, Gamepad2, Heart, Database, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"


export function About() {
  const [activeTab, setActiveTab] = useState("developer")

  const tabs = [
    {
      id: "developer",
      label: "Developer",
      icon: <Code className="w-5 h-5" />,
      content: {
        title: "The Developer",
        description:
          "I'm a passionate full-stack developer who loves creating digital solutions that make a difference.",
        details: [
          "Fresh graduate with hands-on experience in web development",
          "Specialized in React, Next.js, and TypeScript",
          "Built the RTU - MIS Office Queueing System with my team",
          "Focused on performance, usability, and maintainability",
        ],
      },
    },
    {
      id: "person",
      label: "The Person",
      icon: <User className="w-5 h-5" />,
      content: {
        title: "Beyond Code",
        description: "Based in Pasig City, Philippines, I believe in work-life balance and meaningful connections.",
        details: [
          "Enjoys quality time with family and my cat",
          "Team player who loves collaboration",
          "Always eager to learn new technologies",
          "Believes in creating user-friendly solutions",
        ],
      },
    },
    {
      id: "gamer",
      label: "Gamer",
      icon: <Gamepad2 className="w-5 h-5" />,
      content: {
        title: "Gaming Enthusiast",
        description: "When I'm not immersed in code, you'll find me strategizing in Valorant or climbing ranks in League of Legends: Wild Rift. Gaming isn't just a hobby for me—it's where I learn teamwork, quick decision-making, and how to stay calm under pressure.",
        details: [
          "Valorant player - love the tactical gameplay",
          "League of Legends: Wild Rift enthusiast",
          "Enjoys various online multiplayer games",
          "Gaming helps me unwind and think creatively",
        ],
      },
    },
  ]

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks like React and Next.js.",
      color: "from-blue-500/20 to-blue-600/20",
      core: ["React", "Next.js", "TypeScript", "Tailwind CSS",
             "Figma", "Canva", "Shadcn", "Lucide-react"],
      additional: ["JavaScript", "HTML/CSS"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building scalable APIs and robust server-side applications using Node.js and Python.",
      color: "from-green-500/20 to-green-600/20",
      core: ["Node.js", "Python"],
      additional: ["Laravel", "Flask", "Socket.io"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Modeling and optimizing databases for performance and scalability.",
      color: "from-yellow-500/20 to-yellow-600/20",
      core: ["SQL"],
      additional: ["Firebase"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Developer Tools",
      description: "Using productivity tools to streamline development workflows and deployments.",
      color: "from-gray-500/20 to-gray-600/20",
      core: ["Git", "GitHub", "VS Code", "Vercel"],
      additional: ["Docker", "Postman"],
    },
  ];


  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get to Know Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I&apos;m more than just a developer - I&apos;m a person with passions, hobbies, and dreams
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex justify-center mb-8">
            <div className="flex bg-muted rounded-lg p-1">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2"
                >
                  {tab.icon}
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{tabs.find((tab) => tab.id === activeTab)?.content.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {tabs.find((tab) => tab.id === activeTab)?.content.description}
              </p>
              <ul className="space-y-3">
                {tabs
                  .find((tab) => tab.id === activeTab)
                  ?.content.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8">
                <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20"></div>
                  <Image
                    src="/about-me-photo.jpg"
                    alt="Profile"
                    fill
                    className="object-cover rounded-2xl z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
        </div>

        {/* Services Grid */}
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-center">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>

                  {/* Tech Stack Badges */}
                  {(service.core || service.additional) && (
                    <div className="mt-6 text-left">
                      {service.core?.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">Core</p>
                          <div className="flex flex-wrap gap-2 ">
                            {service.core.map((tech, i) => (
                              <Badge
                                key={i}
                                className="bg-foreground text-background hover:bg-foreground/90 px-4 py-1 text-xs font-medium"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {service.additional?.length > 0 && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">Additional</p>
                          <div className="flex flex-wrap gap-2 ">
                            {service.additional.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="border-muted-foreground/30 text-muted-foreground hover:bg-muted hover:text-foreground px-4 py-1 text-xs font-medium"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
