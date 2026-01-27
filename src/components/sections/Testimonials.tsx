"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, Star } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 relative">
      {/* Background decoration */}
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
        >
          <motion.div variants={staggerItem}>
            <GlassCard
              hover={false}
              padding="lg"
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <MessageSquareQuote size={32} className="text-accent" />
              </div>

              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-accent/30"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-text-secondary text-lg mb-6">
                Em breve, depoimentos de clientes satisfeitos aparecerão aqui.
              </p>

              <p className="text-text-muted text-sm">
                Seja o primeiro a compartilhar sua experiência!
              </p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
