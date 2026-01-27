"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ChartLine, Brain, DollarSign, Tags, Clock, Sparkles } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";

const mainProject = {
  title: "Financy Dashboard",
  subtitle: "Dashboard de Controle Financeiro",
  description:
    "Sistema completo para gestão de finanças pessoais com análise inteligente de gastos, cotação de moedas em tempo real e categorização automática.",
  image: "/projects/financy-dashboard.png",
  demoUrl: "https://finantial-front.vercel.app",
  features: [
    { icon: Brain, text: "Análise de gastos com IA" },
    { icon: DollarSign, text: "Cotação de moedas em tempo real" },
    { icon: Tags, text: "Categorização automática" },
    { icon: ChartLine, text: "Gráficos e relatórios" },
  ],
  tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "IA"],
};

const otherProjects = [
  {
    title: "Portfólio Pessoal",
    description: "Este site! Landing page moderna com animações e formulário funcional.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    isCurrentSite: true,
  },
  {
    title: "Em Breve",
    description: "Chatbot com integração Claude API",
    tech: ["Next.js", "Claude API", "Vercel AI"],
    upcoming: true,
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-bg-secondary relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-glass to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Projetos"
          subtitle="Veja alguns dos trabalhos que desenvolvi"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Main Project - Featured */}
          <motion.div variants={staggerItem} className="mb-8">
            <GlassCard padding="none" className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Project Image/Preview */}
                <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px] bg-gradient-to-br from-bg-tertiary to-bg-primary overflow-hidden">
                  <Image
                    src={mainProject.image}
                    alt={mainProject.title}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={mainProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-accent text-bg-primary font-medium rounded-xl hover:bg-accent-hover transition-colors cursor-pointer"
                    >
                      Ver Demo
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
                    <Clock size={14} />
                    <span>Projeto Recente</span>
                  </div>

                  <h3
                    className="text-2xl font-bold text-text-primary mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {mainProject.title}
                  </h3>

                  <p className="text-text-muted mb-4">{mainProject.subtitle}</p>

                  <p className="text-text-secondary mb-6">
                    {mainProject.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {mainProject.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <feature.icon
                          size={16}
                          className="text-accent shrink-0"
                        />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mainProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-bg-secondary rounded-md text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      size="md"
                      leftIcon={<ExternalLink size={18} />}
                      onClick={() => window.open(mainProject.demoUrl, "_blank")}
                    >
                      Ver Demo
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard
                  className={`h-full ${project.upcoming ? "opacity-60" : ""}`}
                  hover={!project.upcoming}
                >
                  <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                    {project.isCurrentSite ? (
                      <Sparkles size={14} className="text-accent" />
                    ) : (
                      <Clock size={14} />
                    )}
                    <span>{project.isCurrentSite ? "Você está aqui!" : project.title}</span>
                  </div>

                  {project.isCurrentSite && (
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {project.title}
                    </h4>
                  )}

                  <p className="text-text-secondary mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-bg-secondary/50 rounded-md text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
