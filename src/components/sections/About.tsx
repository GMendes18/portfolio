"use client";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, Zap } from "lucide-react";

const stats = [
  { value: "2+", label: "Anos de experiência", icon: Code2 },
  { value: "2-3x", label: "Mais rápido com IA", icon: Zap },
  { value: "Full", label: "Stack completa", icon: Cpu },
];

const highlights = [
  {
    icon: Rocket,
    title: "Entrega Rápida",
    description:
      "Utilizo ferramentas de IA para acelerar o desenvolvimento sem comprometer qualidade.",
  },
  {
    icon: Code2,
    title: "Código Limpo",
    description:
      "Foco em boas práticas, código legível e manutenível para projetos de longo prazo.",
  },
  {
    icon: Cpu,
    title: "Automação Inteligente",
    description:
      "Integro soluções de IA para automatizar processos e aumentar eficiência.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-bg-secondary relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-glass to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Sobre Mim"
          subtitle="Desenvolvedor apaixonado por criar soluções que fazem a diferença"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Bio */}
          <motion.div variants={staggerItem}>
            <GlassCard hover={false} padding="lg">
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Sou desenvolvedor Full-Stack com{" "}
                <span className="text-text-primary font-medium">
                  2+ anos de experiência
                </span>{" "}
                criando aplicações web modernas e escaláveis.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Domino ferramentas de{" "}
                <span className="text-accent font-medium">
                  Inteligência Artificial
                </span>{" "}
                que me permitem entregar projetos com mais velocidade — sem
                comprometer a qualidade do código.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Trabalho com{" "}
                <span className="text-text-primary font-medium">
                  React, Next.js, Node.js, TypeScript
                </span>{" "}
                PostgreSQL, entre outros. Também desenvolvo automações e
                integrações com APIs de IA como Claude e Gemini.
              </p>
            </GlassCard>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat) => (
                <GlassCard
                  key={stat.label}
                  padding="sm"
                  hover={false}
                  className="text-center"
                >
                  <stat.icon
                    className="w-6 h-6 text-accent mx-auto mb-2"
                    aria-hidden="true"
                  />
                  <p
                    className="text-2xl font-bold text-text-primary"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-text-muted">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={staggerItem} className="space-y-4">
            {highlights.map((item) => (
              <GlassCard key={item.title} className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                  <item.icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-text-primary mb-1"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-text-muted">{item.description}</p>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
