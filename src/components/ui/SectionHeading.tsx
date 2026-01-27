"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-4"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
