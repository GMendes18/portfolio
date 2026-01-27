"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { fadeInUp, cardHover } from "@/lib/animations";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
  glow?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      hover = true,
      glow = false,
      padding = "md",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        whileHover={hover ? cardHover : undefined}
        className={`
          rounded-2xl
          bg-bg-glass
          backdrop-blur-[16px]
          border border-border-glass
          transition-all duration-200
          ${hover ? "cursor-pointer hover:border-border-glass-hover hover:bg-bg-glass-hover" : ""}
          ${glow ? "shadow-[0_0_40px_rgba(34,197,94,0.15)]" : ""}
          ${paddingStyles[padding]}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
