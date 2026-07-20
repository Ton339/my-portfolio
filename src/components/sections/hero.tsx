"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion-wrapper";
import { Mail, Phone, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-blue/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-violet/20 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Sithachad</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg sm:text-xl text-muted-foreground mb-2 font-medium">
            สิษฐเชษฐ์ กระจายศรี
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-xl sm:text-2xl font-semibold text-foreground/80 mb-6">
            Business Analyst &{" "}
            <span className="text-accent-blue">Full-Stack Developer</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Versatile Full-Stack Developer and Business Analyst experienced in
            end-to-end web development, database optimization, and UX/UI design.
            Strong capabilities in requirement gathering and SRS documentation
            with a fast-learning and collaborative mindset.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              nativeButton={false}
              render={
                <a
                  href="https://github.com/Ton339"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              size="lg"
              className="bg-gradient-to-r from-accent-blue to-accent-violet hover:opacity-90 text-white rounded-full px-8 shadow-lg shadow-accent-blue/25 transition-all hover:shadow-accent-blue/40"
            >
              <GithubIcon className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              nativeButton={false}
              render={<a href="mailto:sithachad.krachaisri@gmail.com" />}
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button
              nativeButton={false}
              render={<a href="tel:0806101617" />}
              variant="ghost"
              size="lg"
              className="rounded-full px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              080 610 1617
            </Button>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="#about"
            className="text-muted-foreground hover:text-accent-blue transition-colors"
          >
            <ChevronDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
