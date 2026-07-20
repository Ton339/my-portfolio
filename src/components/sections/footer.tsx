"use client";

import { Separator } from "@/components/ui/separator";
import { Mail, Heart } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function FooterSection() {
  return (
    <footer className="py-8 relative">
      <Separator className="mb-8 bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <a href="#" className="font-bold text-lg tracking-tight">
              <span className="gradient-text">Ton</span>
              <span className="text-muted-foreground font-normal">.dev</span>
            </a>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1 justify-center sm:justify-start">
              Built with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> using Next.js & shadcn/ui
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-accent-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Ton339"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent-blue/10 text-muted-foreground hover:text-accent-blue transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:sithachad.krachaisri@gmail.com"
              className="p-2 rounded-full hover:bg-accent-blue/10 text-muted-foreground hover:text-accent-blue transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[11px] text-muted-foreground/60">
            © {new Date().getFullYear()} Sithachad Krachaisri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
