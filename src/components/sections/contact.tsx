"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <StaggerContainer className="space-y-4">
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
                          <div className="p-2.5 rounded-lg bg-accent-blue/10 text-accent-blue">
                            <info.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">{info.label}</p>
                            <p className="text-sm font-medium">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.3}>
              <Card className="glass border-0">
                <CardContent className="p-6 sm:p-8">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      // TODO: connect to API
                    }}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-name"
                          className="text-sm font-medium"
                        >
                          Name
                        </label>
                        <Input
                          id="contact-name"
                          placeholder="Your name"
                          className="glass border-0 focus-visible:ring-accent-blue/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-email"
                          className="text-sm font-medium"
                        >
                          Email
                        </label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="your@email.com"
                          className="glass border-0 focus-visible:ring-accent-blue/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-subject"
                        className="text-sm font-medium"
                      >
                        Subject
                      </label>
                      <Input
                        id="contact-subject"
                        placeholder="What's this about?"
                        className="glass border-0 focus-visible:ring-accent-blue/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="text-sm font-medium"
                      >
                        Message
                      </label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        className="glass border-0 focus-visible:ring-accent-blue/50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-accent-blue to-accent-violet hover:opacity-90 text-white rounded-full shadow-lg shadow-accent-blue/25 transition-all hover:shadow-accent-blue/40"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
