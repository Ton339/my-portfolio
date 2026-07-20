"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { ExternalLink, Calendar, Users } from "lucide-react";

const projects = [
  {
    title: "Life Path Simulator",
    client: "TTT Brother Co., Ltd.",
    period: "February 2026 – April 2026",
    description:
      "Designed and developed a life path simulation game platform that empowers players to discover their potential, featuring an in-depth career aptitude analysis system for effective future planning.",
    roles: ["Business Analyst", "UX/UI Design", "Back-end Developer"],
    highlights: [
      "Designed user interfaces (UX/UI) and reviewed design layouts created by other team members.",
      "Authored and maintained comprehensive Software Requirement Specifications (SRS) documentation.",
      "Developed the core backend scoring engine and core calculation algorithms for the assessment questionnaire.",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Figma"],
    featured: true,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-accent-violet/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-12 bg-accent-blue" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-8">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <Card className="glass border-0 overflow-hidden group hover:glow transition-all duration-500">
                {/* Gradient top bar */}
                <div className="h-1 bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan" />

                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      {project.featured && (
                        <Badge className="bg-accent-blue/10 text-accent-blue border-0 mb-2 text-xs">
                          ⭐ Featured Project
                        </Badge>
                      )}
                      <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Users className="h-3.5 w-3.5" />
                        <span>{project.client}</span>
                        <span>•</span>
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Roles */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.roles.map((role) => (
                      <Badge
                        key={role}
                        variant="secondary"
                        className="bg-accent-violet/10 text-accent-violet border-0"
                      >
                        {role}
                      </Badge>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="text-accent-blue mt-1.5 shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="text-xs font-mono"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* More projects coming soon */}
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Card className="glass border-0 border-dashed max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground text-sm mb-2">
                  🚧 More projects coming soon...
                </p>
                <p className="text-xs text-muted-foreground">
                  Check my GitHub for the latest work
                </p>
                <Button
                  nativeButton={false}
                  render={
                    <a
                      href="https://github.com/Ton339"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  variant="ghost"
                  size="sm"
                  className="mt-3 text-accent-blue hover:text-accent-blue"
                >
                  <ExternalLink className="mr-1 h-3 w-3" />
                  View GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
