"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`
        fixed top-4 left-4 right-4 z-50
        rounded-2xl
        transition-all duration-300
        ${
          isScrolled
            ? "bg-bg-glass backdrop-blur-[16px] border border-border-glass shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="text-xl font-bold cursor-pointer"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-accent">&lt;</span>
            <span className="text-text-primary">GM</span>
            <span className="text-accent">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text-primary transition-colors duration-200 link-underline cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-accent text-bg-primary font-medium rounded-xl hover:bg-accent-hover transition-colors duration-200 cursor-pointer"
          >
            Fale Comigo
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-accent transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-border-glass pt-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-bg-primary font-medium rounded-xl hover:bg-accent-hover transition-colors duration-200 cursor-pointer mt-2"
              >
                Fale Comigo
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
