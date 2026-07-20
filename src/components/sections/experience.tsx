"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "GREEN HUB CO.,LTD",
    position: "Business Analyst",
    period: "April 2026 – June 2026",
    type: "Business Analysis",
    highlights: [
      "Designed intuitive UX/UI interfaces to significantly enhance overall platform usability.",
      "Showcased system demos to stakeholders and collected further project requirements.",
      "Formulated comprehensive test cases and test scenarios to ensure high product quality.",
      "Assisted the development team for small-scale components and auxiliary functions.",
    ],
  },
  {
    company: "GREEN HUB CO.,LTD & Growth More Corporation Co., Ltd.",
    position: "Full-Stack Developer",
    period: "May 2025 – June 2025",
    type: "Development",
    highlights: [
      "Conducted market research and competitive analysis to guide the development of a SaaS platform.",
      "Performed user-perspective UAT to identify system bugs and optimize application usability.",
      "Developed and maintained applications utilizing Next.js for frontend and Nest.js for backend services.",
      "Restructured database schemas to improve query performance, data integrity, and system scalability.",
      "Presented system demos to collect further requirements and distributed tasks.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-12 bg-accent-blue" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[1.45rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-violet to-transparent hidden sm:block" />

          <StaggerContainer className="space-y-8">
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-accent-blue to-accent-violet ring-4 ring-background z-10 shrink-0 mt-6" />
                  </div>

                  {/* Card */}
                  <Card className="flex-1 glass border-0 hover:glow transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-lg font-bold group-hover:gradient-text transition-all">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Briefcase className="h-3.5 w-3.5 text-accent-blue" />
                            <span className="text-sm font-medium text-accent-blue">
                              {exp.position}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className="text-xs"
                          >
                            {exp.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm text-muted-foreground"
                          >
                            <span className="text-accent-blue mt-1.5 shrink-0">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
