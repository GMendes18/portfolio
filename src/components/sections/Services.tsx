"use client";

import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Bot, Rocket, Wrench, Bug } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description:
      "Sites modernos, responsivos e otimizados para SEO. Landing pages que convertem, sites institucionais e e-commerce.",
    features: ["Landing Pages", "Sites Institucionais", "E-commerce", "SEO"],
  },
  {
    icon: LayoutDashboard,
    title: "Aplicações SaaS",
    description:
      "Dashboards completos, sistemas de gestão e aplicações web complexas com foco em UX e performance.",
    features: ["Dashboards", "Sistemas de Gestão", "Portais", "APIs"],
  },
  {
    icon: Bot,
    title: "Automação com IA",
    description:
      "Chatbots inteligentes, automações de processos e integrações com APIs de IA como Claude e GPT.",
    features: ["Chatbots", "Integrações IA", "Automações", "APIs"],
  },
  {
    icon: Rocket,
    title: "MVPs para Startups",
    description:
      "Transformo sua ideia em produto funcional rapidamente. Foco em validação rápida com custo otimizado.",
    features: ["Prototipagem", "Validação", "Deploy Rápido", "Iteração"],
  },
  {
    icon: Wrench,
    title: "Manutenção de Sites",
    description:
      "Atualizações, melhorias de performance, correções e suporte contínuo para manter seu site sempre funcionando.",
    features: ["Atualizações", "Performance", "Segurança", "Suporte"],
  },
  {
    icon: Bug,
    title: "Resolução de Bugs",
    description:
      "Identifico e corrijo problemas em projetos existentes. Trabalho com diversas linguagens e frameworks.",
    features: ["Debug", "Refatoração", "Múltiplas Linguagens", "Code Review"],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Serviços"
          subtitle="Soluções sob medida para transformar suas ideias em realidade"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <GlassCard
                className="h-full group"
                glow={false}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-bg-primary transition-colors duration-300">
                    <service.icon size={28} aria-hidden="true" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold text-text-primary"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-text-muted mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 text-xs bg-bg-secondary rounded-md text-text-muted"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-muted mt-8"
        >
          Valores combinados de acordo com a complexidade do projeto
        </motion.p>
      </div>
    </section>
  );
}
