"use client";

import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Check,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "gabri.mevial@gmail.com",
    href: "mailto:gabri.mevial@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/gabriel-mendes18",
    href: "https://www.linkedin.com/in/gabriel-mendes18",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@GMendes18",
    href: "https://github.com/GMendes18",
  },
];

// WhatsApp - substitua SEUNUMERO pelo seu número com DDD (ex: 5511999999999)
const WHATSAPP_NUMBER = "5531999779157"; // Deixe vazio ou preencha: "5511999999999"
const WHATSAPP_MESSAGE =
  "Olá Gabriel! Vi seu portfólio e gostaria de conversar sobre um projeto.";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Mensagem enviada com sucesso! Entrarei em contato em breve.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Erro ao enviar mensagem. Tente novamente.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Erro ao enviar mensagem. Tente novamente.",
      });
    }
  };

  const whatsappUrl = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
      )}`
    : null;

  return (
    <section id="contato" className="py-24 bg-bg-secondary relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-glass to-transparent" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Vamos Trabalhar Juntos?"
          subtitle="Entre em contato e vamos conversar sobre seu projeto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={staggerItem}>
            <GlassCard hover={false} padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                {/* Status Message */}
                {status.type !== "idle" && status.type !== "loading" && (
                  <div
                    className={`flex items-center gap-2 p-3 rounded-xl ${
                      status.type === "success"
                        ? "bg-accent/10 text-accent"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {status.type === "success" ? (
                      <Check size={18} />
                    ) : (
                      <AlertCircle size={18} />
                    )}
                    <span className="text-sm">{status.message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={status.type === "loading"}
                  rightIcon={<Send size={18} />}
                >
                  Enviar Mensagem
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={staggerItem} className="space-y-6">
            <GlassCard hover={false} padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-accent/10">
                  <MessageSquare size={24} className="text-accent" />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-text-primary"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Prefere conversar?
                  </h3>
                  <p className="text-sm text-text-muted">
                    Me encontre nas redes
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-bg-primary/50 border border-border-glass hover:border-accent/50 transition-colors group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-bg-glass group-hover:bg-accent/10 transition-colors">
                      <link.icon
                        size={20}
                        className="text-text-muted group-hover:text-accent transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{link.label}</p>
                      <p className="text-text-primary group-hover:text-accent transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </GlassCard>

            {/* WhatsApp CTA */}
            <GlassCard hover={false} padding="lg" className="text-center">
              {whatsappUrl ? (
                <>
                  <p className="text-text-muted mb-4">
                    Resposta mais rápida pelo WhatsApp
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                  >
                    Chamar no WhatsApp
                  </Button>
                </>
              ) : (
                <>
                  <p className="text-text-muted mb-4">WhatsApp em breve</p>
                  <Button variant="outline" size="md" disabled>
                    WhatsApp (Em breve)
                  </Button>
                </>
              )}
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
