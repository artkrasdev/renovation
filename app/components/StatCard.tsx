"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { StatItem } from "@/app/types";
import { staggerItem } from "@/app/lib/animations";

interface StatCardProps {
  stat: StatItem;
  index: number;
}

export default function StatCard({ stat, index }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();
    const targetValue = stat.value;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * targetValue);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // Add a small delay based on index for staggered effect
    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, index * 200);

    return () => clearTimeout(timeout);
  }, [isInView, stat.value, index]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      variants={staggerItem}
    >
      <div className="flex items-baseline justify-center gap-1">
        <span
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {count}
        </span>
        <span
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {stat.suffix}
        </span>
      </div>
      <p className="mt-2 text-[var(--color-text-secondary)] text-sm md:text-base">
        {stat.label}
      </p>
    </motion.div>
  );
}

