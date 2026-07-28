"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { Code2, MonitorSmartphone, Server, Database, Terminal, Palette } from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
      { name: "TypeScript", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
      { name: "Java", color: "bg-red-500/10 text-red-600 dark:text-red-400" },
      { name: "PHP", color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" },
      { name: "SQL", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
      { name: "HTML", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400" },
      { name: "CSS", color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: MonitorSmartphone,
    skills: [
      { name: "Next.js", color: "bg-foreground/10 text-foreground" },
      { name: "Tailwind CSS", color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400" },
      { name: "DaisyUI", color: "bg-green-500/10 text-green-600 dark:text-green-400" },
      { name: "shadcn/ui", color: "bg-foreground/10 text-foreground" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: [
      { name: "NestJS", color: "bg-red-500/10 text-red-600 dark:text-red-400" },
      { name: "Laravel", color: "bg-red-500/10 text-red-600 dark:text-red-400" },
    ],
  },
  {
    id: "database",
    label: "Database & ORM",
    icon: Database,
    skills: [
      { name: "PostgreSQL", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
      { name: "MySQL", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400" },
      { name: "Prisma", color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" },
      { name: "TypeORM", color: "bg-red-500/10 text-red-600 dark:text-red-400" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & API",
    icon: Terminal,
    skills: [
      { name: "Docker", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
      { name: "Postman", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400" },
      { name: "Git", color: "bg-red-500/10 text-red-600 dark:text-red-400" },
      { name: "GitHub", color: "bg-foreground/10 text-foreground" },
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: Palette,
    skills: [
      { name: "Figma", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400" },
      { name: "Adobe Photoshop", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
      { name: "Adobe Premiere Pro", color: "bg-violet-500/10 text-violet-600 dark:text-violet-400" },
      { name: "Photography", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
      { name: "Videography", color: "bg-rose-500/10 text-rose-600 dark:text-rose-400" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-12 bg-accent-blue" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              Tech <span className="gradient-text">Stack</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Tabs defaultValue="languages" className="w-full min-h-50">
            <TabsList variant="line" className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
              {skillCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-accent-blue/10 data-[state=active]:text-accent-blue data-active:bg-accent-blue/10 data-active:text-accent-blue data-active:border-transparent data-active:shadow-none dark:data-active:border-transparent dark:data-active:bg-accent-blue/10 rounded-full px-2 py-2 text-sm transition-all border-transparent flex-none"
                >
                  <cat.icon className="w-4 h-4 mr-1.5" />
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <Card className="glass border-0">
                  <CardContent className="p-6">
                    <StaggerContainer className="flex flex-wrap gap-3">
                      {cat.skills.map((skill) => (
                        <StaggerItem key={skill.name}>
                          <Badge
                            variant="secondary"
                            className={`${skill.color} px-4 py-2 text-sm font-medium hover:scale-110 transition-transform cursor-default border-0`}
                          >
                            {skill.name}
                          </Badge>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </FadeIn>

        {/* All skills overview grid */}
        <FadeIn delay={0.4}>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {skillCategories.map((cat) => (
              <Card key={cat.id} className="glass border-0 hover:glow transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-2">{cat.label}</p>
                  <p className="text-2xl font-bold gradient-text">{cat.skills.length}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">technologies</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
