"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Coffee } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contato@gabrielmendes.dev", label: "Email" },
];

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary border-t border-border-glass">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <a
              href="#inicio"
              className="text-2xl font-bold mb-4 inline-block cursor-pointer"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <span className="text-accent">&lt;</span>
              <span className="text-text-primary">GM</span>
              <span className="text-accent">/&gt;</span>
            </a>
            <p className="text-text-muted">
              Desenvolvedor Full-Stack transformando ideias em software
              funcional com o poder da IA.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-text-primary font-semibold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3
              className="text-text-primary font-semibold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Redes Sociais
            </h3>
            <div className="flex gap-3">
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
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-glass flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm text-center md:text-left">
            &copy; {currentYear} Gabriel Mendes. Todos os direitos reservados.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1">
            Feito com{" "}
            <Heart size={14} className="text-red-500" fill="currentColor" /> e{" "}
            <Coffee size={14} className="text-accent" /> usando Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
