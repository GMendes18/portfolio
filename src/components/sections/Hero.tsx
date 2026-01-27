"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from "@/lib/animations";

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "IA",
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contato@gabrielmendes.dev", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Avatar */}
          <motion.div variants={scaleIn} className="relative">
            <div className="relative w-48 h-48 lg:w-64 lg:h-64">
              <Image
                src="/avatar.svg"
                alt="Gabriel Mendes - Desenvolvedor Full-Stack"
                fill
                priority
                className="object-contain"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-bg-secondary/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border-glass">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs text-text-muted">Disponível</span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={staggerItem}
              className="text-accent font-medium mb-4"
            >
              Olá, eu sou
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Gabriel Mendes
            </motion.h1>

            <motion.h2
              variants={staggerItem}
              className="text-xl md:text-2xl text-text-muted mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Desenvolvedor Full-Stack{" "}
              <span className="text-accent">|</span> Automação com IA
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-text-secondary text-lg max-w-xl mb-8"
            >
              Transformo ideias em software funcional. Utilizo IA para entregar
              projetos com <span className="text-accent font-medium">mais velocidade</span> e{" "}
              <span className="text-accent font-medium">qualidade</span>.
            </motion.p>

            {/* Tech Stack Tags */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-bg-glass border border-border-glass rounded-lg text-text-muted hover:text-text-primary hover:border-accent/50 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                Vamos conversar sobre seu projeto
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver projetos
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={staggerItem}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-xl bg-bg-glass border border-border-glass text-text-muted hover:text-accent hover:border-accent/50 transition-all duration-200 cursor-pointer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors cursor-pointer"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
