"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  ChartLine,
  Brain,
  DollarSign,
  Tags,
  Clock,
  Sparkles,
  Users,
  GraduationCap,
  BookOpen,
  CalendarDays,
  Trophy,
  MessageCircle,
} from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";

const medboard = {
  title: "MedBoard",
  subtitle: "Plataforma de Residência Médica",
  description:
    "Dashboard completo para estudantes de residência médica com dois ambientes distintos: professor e aluno. Professores gerenciam tudo — simulados, cronogramas e desempenho. Alunos evoluem com tracking inteligente.",
  image: "/projects/medboard.png",
  environments: [
    { icon: GraduationCap, label: "Ambiente Professor" },
    { icon: Users, label: "Ambiente Aluno" },
  ],
  features: [
    { icon: CalendarDays, text: "Cronogramas personalizados" },
    { icon: BookOpen, text: "Banco de simulados" },
    { icon: ChartLine, text: "Gráficos de desempenho" },
    { icon: Trophy, text: "Sistema de conquistas" },
    { icon: MessageCircle, text: "Chat com professor" },
    { icon: Brain, text: "Tracking inteligente" },
  ],
  tech: [
    { label: "Nuxt 3", color: "text-emerald-400 bg-emerald-400/10" },
    { label: "Vue 3", color: "text-green-400 bg-green-400/10" },
    { label: "NestJS", color: "text-red-400 bg-red-400/10" },
    { label: "Prisma", color: "text-sky-400 bg-sky-400/10" },
    { label: "Supabase", color: "text-emerald-400 bg-emerald-400/10" },
    { label: "PostgreSQL", color: "text-blue-400 bg-blue-400/10" },
    { label: "Pinia", color: "text-yellow-400 bg-yellow-400/10" },
    { label: "PrimeVue 4", color: "text-violet-400 bg-violet-400/10" },
  ],
};

const secondaryProjects = [
  {
    title: "Financy Dashboard",
    subtitle: "Dashboard de Controle Financeiro",
    description:
      "Sistema completo para gestão de finanças pessoais com análise de gastos via IA, cotação de moedas em tempo real e categorização automática.",
    image: "/projects/financy-dashboard.png",
    demoUrl: "https://finantial-front.vercel.app",
    features: [
      { icon: Brain, text: "Análise com IA" },
      { icon: DollarSign, text: "Cotação em tempo real" },
      { icon: Tags, text: "Categorização automática" },
      { icon: ChartLine, text: "Gráficos e relatórios" },
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    spotlightColor: "rgba(34, 197, 94, 0.15)" as const,
  },
];

const otherProjects = [
  {
    title: "Portfólio Pessoal",
    description:
      "Este site! Landing page moderna com animações, chat com IA e formulário funcional.",
    image: "/projects/portfolio-preview.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    isCurrentSite: true,
    spotlightColor: "rgba(59, 130, 246, 0.15)" as const,
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-bg-secondary relative">
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
          {/* MedBoard — Featured Project */}
          <motion.div variants={staggerItem} className="mb-8">
            <div className="rounded-2xl border border-border-glass bg-bg-glass backdrop-blur-[16px] overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Screenshot */}
                <div className="relative aspect-video lg:aspect-auto lg:min-h-[480px] bg-gradient-to-br from-[#0a1628] to-[#0f2040] overflow-hidden">
                  <Image
                    src={medboard.image}
                    alt="MedBoard — Plataforma de Residência Médica"
                    fill
                    className="object-cover object-top"
                  />
                  {/* Dark overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-bg-glass/60 hidden lg:block" />

                  {/* Dual environment badges over image */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {medboard.environments.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs text-white font-medium"
                      >
                        <Icon size={12} className="text-accent" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info Panel with Spotlight */}
                <SpotlightCard
                  className="h-full"
                  spotlightColor="rgba(34, 197, 94, 0.12)"
                >
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      {/* Badge */}
                      <div className="flex items-center gap-2 text-accent text-sm font-medium mb-3">
                        <Clock size={14} />
                        <span>Projeto Mais Recente</span>
                      </div>

                      <h3
                        className="text-2xl font-bold text-text-primary mb-1"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {medboard.title}
                      </h3>
                      <p className="text-text-muted text-sm mb-4">
                        {medboard.subtitle}
                      </p>
                      <p className="text-text-secondary mb-6 leading-relaxed">
                        {medboard.description}
                      </p>

                      {/* Features grid */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {medboard.features.map((feature) => (
                          <div
                            key={feature.text}
                            className="flex items-center gap-2 text-sm text-text-muted"
                          >
                            <feature.icon
                              size={14}
                              className="text-accent shrink-0"
                            />
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {medboard.tech.map((t) => (
                          <span
                            key={t.label}
                            className={`px-2.5 py-1 text-xs rounded-md font-medium ${t.color}`}
                          >
                            {t.label}
                          </span>
                        ))}
                      </div>

                      <div className="text-sm text-text-muted italic">
                        Projeto em desenvolvimento ativo
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </motion.div>

          {/* Secondary Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Financy Dashboard */}
            {secondaryProjects.map((project) => (
              <motion.div key={project.title} variants={staggerItem}>
                <SpotlightCard
                  className="h-full rounded-2xl border border-border-glass bg-bg-glass backdrop-blur-[16px]"
                  spotlightColor={project.spotlightColor}
                >
                  <div className="flex flex-col h-full">
                    {/* Image preview */}
                    <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-bg-tertiary">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-accent text-bg-primary font-medium rounded-xl hover:bg-accent-hover transition-colors text-sm"
                        >
                          Ver Demo
                        </a>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 flex flex-col flex-1">
                      <h4
                        className="text-lg font-bold text-text-primary mb-1"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {project.title}
                      </h4>
                      <p className="text-xs text-text-muted mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-text-secondary text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {project.features.map((f) => (
                          <div
                            key={f.text}
                            className="flex items-center gap-1.5 text-xs text-text-muted"
                          >
                            <f.icon size={12} className="text-accent shrink-0" />
                            {f.text}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-xs bg-bg-secondary rounded-md text-text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Button
                        size="sm"
                        leftIcon={<ExternalLink size={14} />}
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        Ver Demo
                      </Button>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}

            {/* Portfolio — current site */}
            {otherProjects.map((project) => (
              <motion.div key={project.title} variants={staggerItem}>
                <SpotlightCard
                  className="h-full rounded-2xl border border-border-glass bg-bg-glass backdrop-blur-[16px]"
                  spotlightColor={project.spotlightColor}
                >
                  <div className="flex flex-col h-full">
                    {/* Image preview */}
                    <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-bg-tertiary">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-text-muted text-sm mb-2">
                        <Sparkles size={14} className="text-accent" />
                        <span>Você está aqui!</span>
                      </div>

                      <h4
                        className="text-lg font-semibold text-text-primary mb-2"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {project.title}
                      </h4>

                      <p className="text-text-secondary text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs bg-bg-secondary/50 rounded-md text-text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
