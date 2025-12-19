"use client";

import { motion } from "framer-motion";
import { fadeInUp, lineDraw } from "@/app/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  showLine?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  showLine = true,
  className = "",
}: SectionHeadingProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      className={`flex flex-col gap-4 mb-12 ${alignStyles[align]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {showLine && (
        <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"}`}>
          <motion.div
            className="h-px bg-[var(--color-primary)] w-12"
            variants={lineDraw}
          />
          <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider whitespace-nowrap">
            Smailji Multi-Services
          </span>
          <motion.div
            className="h-px bg-[var(--color-primary)] w-12"
            variants={lineDraw}
          />
        </div>
      )}
      
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)]"
        variants={fadeInUp}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className="text-[var(--color-text-secondary)] text-lg max-w-2xl"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

