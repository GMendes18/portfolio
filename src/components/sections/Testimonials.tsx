"use client";

// Seção de depoimentos comentada até ter clientes reais
// Descomente quando tiver depoimentos verdadeiros para adicionar

/*
import { motion } from "framer-motion";
import { MessageSquareQuote, Star } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    name: "Nome do Cliente",
    role: "Cargo / Empresa",
    content: "Depoimento do cliente aqui...",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Depoimentos"
          subtitle="O que os clientes dizem sobre meu trabalho"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={staggerItem}>
              <GlassCard className="h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-accent"
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="text-text-secondary mb-4">
                  "{testimonial.content}"
                </p>

                <div className="mt-auto">
                  <p className="font-medium text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
*/

// Componente vazio para não quebrar imports
export default function Testimonials() {
  return null;
}
