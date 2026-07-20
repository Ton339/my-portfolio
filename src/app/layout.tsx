import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sithachad Krachaisri | Business Analyst & Full-Stack Developer",
  description:
    "Portfolio of Sithachad Krachaisri — Versatile Full-Stack Developer and Business Analyst experienced in end-to-end web development, database optimization, and UX/UI design.",
  keywords: [
    "Sithachad Krachaisri",
    "Full-Stack Developer",
    "Business Analyst",
    "Software Engineer",
    "Next.js",
    "NestJS",
    "Laravel",
    "Portfolio",
  ],
  authors: [{ name: "Sithachad Krachaisri" }],
  openGraph: {
    title: "Sithachad Krachaisri | Business Analyst & Full-Stack Developer",
    description:
      "Versatile Full-Stack Developer and Business Analyst with experience in Next.js, NestJS, Laravel, and UX/UI Design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col grain">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
