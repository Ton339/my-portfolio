"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { GraduationCap, School, Gamepad2, Dice5, Bike, CookingPot } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    school: "Burapha University",
    faculty: "Faculty of Informatics",
    degree: "B.Sc. in Software Engineering",
    year: "Expected 2027",
    gpa: "3.64",
    current: true,
  },
  {
    icon: School,
    school: "Rittiyawannalai School",
    faculty: "Science-Mathematics Program",
    degree: "",
    year: "Graduated 2024",
    gpa: "3.37",
    current: false,
  },
];

const funFacts = [
  { icon: Gamepad2, label: "Monster Hunter Rise", color: "text-red-400" },
  { icon: Dice5, label: "Dungeons & Dragons", color: "text-purple-400" },
  { icon: Bike, label: "Motorcycles", color: "text-blue-400" },
  { icon: CookingPot, label: "Cooking", color: "text-orange-400" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-12 bg-accent-blue" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a Software Engineering student at Burapha University with a passion for
                building end-to-end web applications. I thrive at the intersection of{" "}
                <span className="text-foreground font-medium">business analysis</span> and{" "}
                <span className="text-foreground font-medium">full-stack development</span>,
                turning requirements into elegant, performant solutions.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently focused on leading Business Analysis efforts and Full-stack development
                using modern frameworks like{" "}
                <span className="text-accent-blue font-medium">Next.js</span>,{" "}
                <span className="text-accent-blue font-medium">NestJS</span>, and{" "}
                <span className="text-accent-blue font-medium">Laravel</span>. I also have
                experience in UX/UI design, Docker containerization, and creative work
                including Photography & Videography.
              </p>
            </FadeIn>

            {/* Fun Facts */}
            <FadeIn delay={0.3}>
              <div className="pt-4">
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  When I&apos;m not coding, you can find me:
                </p>
                <div className="flex flex-wrap gap-2">
                  {funFacts.map((fact) => (
                    <Badge
                      key={fact.label}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm gap-1.5 hover:scale-105 transition-transform cursor-default"
                    >
                      <fact.icon className={`h-3.5 w-3.5 ${fact.color}`} />
                      {fact.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Education */}
          <div className="lg:col-span-2">
            <StaggerContainer className="space-y-4">
              {education.map((edu) => (
                <StaggerItem key={edu.school}>
                  <Card className="glass border-0 hover:glow transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue shrink-0 mt-0.5">
                          <edu.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-sm">{edu.school}</h3>
                            {edu.current && (
                              <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                                Current
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {edu.faculty}
                          </p>
                          {edu.degree && (
                            <p className="text-xs text-accent-blue font-medium mt-1">
                              {edu.degree}
                            </p>
                          )}
                          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                            <span>{edu.year}</span>
                            <span>•</span>
                            <span className="font-medium text-foreground">
                              GPA: {edu.gpa}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
