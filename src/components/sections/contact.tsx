"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sithachad.krachaisri@gmail.com",
    href: "mailto:sithachad.krachaisri@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "080 610 1617",
    href: "tel:0806101617",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "Ton339",
    href: "https://github.com/Ton339",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangkok, Thailand",
    href: undefined,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-accent-blue" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              Get In <span className="gradient-text">Touch</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-lg">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
        </FadeIn>

        {/* Contact Info */}
        <div className="lg:col-span-5">
          <StaggerContainer className="space-y-4 grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            {contactInfo.map((info) => (
              <StaggerItem key={info.label}>
                <Card className="glass border-0 hover:glow transition-all duration-300 group">
                  <CardContent className="p-4">
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4"
                      >
                        <div className="p-2.5 rounded-lg bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{info.label}</p>
                          <p className="text-sm font-medium group-hover:text-accent-blue transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 rounded-lg bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                          <info.icon className="h-5 w-5" /> 
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{info.label}</p>
                          <p className="text-sm font-medium group-hover:text-accent-blue transition-colors">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
